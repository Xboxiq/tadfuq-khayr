// =============================================================
// Tadfuq Print Server — minimal, cross-platform
//
// One job: receive a .docx file over HTTP and print it directly
// to the local printer using whatever's already installed:
//
//   - Windows : PowerShell `Start-Process -Verb Print` invokes
//               the registered .docx handler (MS Word) silently.
//   - macOS   : LibreOffice headless to the default printer.
//   - Linux   : LibreOffice headless to the default printer.
//
// Run: `node server.js` (or `npm start`). Default port: 9876.
// =============================================================

const http        = require('http');
const fs          = require('fs');
const path        = require('path');
const os          = require('os');
const { execFile, spawn } = require('child_process');

const PORT    = parseInt(process.env.PRINT_PORT || '9876', 10);
const PRINTER = process.env.PRINTER || '';     // empty = system default

const DOCX_MIME = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

// ---------- helpers ----------
function reply(res, status, payload) {
  res.writeHead(status, {
    'Content-Type'                : 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(payload));
}

function safeName(s) {
  return String(s || 'print').replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 60);
}

// ---------- printing ----------
function printOnWindows(file, cb) {
  // -Verb Print uses the registered docx handler (Word). Silent.
  // -PassThru lets the process exit cleanly without keeping Word open.
  const ps = PRINTER
    ? `Start-Process -FilePath "${file}" -Verb PrintTo -ArgumentList '"${PRINTER}"' -WindowStyle Hidden`
    : `Start-Process -FilePath "${file}" -Verb Print -WindowStyle Hidden`;
  execFile('powershell', ['-NoProfile', '-Command', ps], { timeout: 30000 }, cb);
}

function printOnUnix(file, cb) {
  // libreoffice headless --pt <printer> <file>   (or -p for default)
  const args = ['--headless'];
  if (PRINTER) args.push('--pt', PRINTER, file);
  else         args.push('-p',          file);
  execFile('libreoffice', args, { timeout: 30000 }, (err, stdout, stderr) => {
    if (err && /ENOENT/.test(err.message)) {
      // Try `soffice` (LibreOffice on some installs)
      execFile('soffice', args, { timeout: 30000 }, cb);
    } else {
      cb(err, stdout, stderr);
    }
  });
}

function printFile(file, cb) {
  if (process.platform === 'win32') printOnWindows(file, cb);
  else                              printOnUnix(file,    cb);
}

// ---------- HTTP server ----------
const server = http.createServer((req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') return reply(res, 204, {});

  // Health check — used by the web app to detect us
  if (req.method === 'GET' && req.url.startsWith('/ping')) {
    return reply(res, 200, {
      ok: true,
      service : 'tadfuq-print',
      version : '1.0.0',
      platform: process.platform,
      printer : PRINTER || '(system default)',
    });
  }

  // Main print endpoint
  if (req.method === 'POST' && req.url.startsWith('/print')) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const name = safeName(url.searchParams.get('name') || 'tadfuq');
    const tmp  = path.join(os.tmpdir(), `tadfuq-${Date.now()}-${name}.docx`);

    const chunks = [];
    let size = 0;
    req.on('data', c => {
      size += c.length;
      if (size > 25 * 1024 * 1024) { req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => {
      try {
        fs.writeFileSync(tmp, Buffer.concat(chunks));
      } catch (e) {
        return reply(res, 500, { ok: false, error: 'WRITE_FAIL', message: e.message });
      }
      printFile(tmp, (err, stdout, stderr) => {
        // Clean up file after 60 s (give the printer time to read it)
        setTimeout(() => fs.unlink(tmp, () => {}), 60000);
        if (err) {
          console.error('[print] failed:', err.message, stderr || '');
          return reply(res, 500, {
            ok: false,
            error: 'PRINT_FAIL',
            message: err.message,
            stderr: (stderr || '').toString().slice(0, 500),
            hint: process.platform === 'win32'
              ? 'تأكد من تثبيت Microsoft Word أو LibreOffice.'
              : 'تأكد من تثبيت LibreOffice (libreoffice أو soffice).',
          });
        }
        console.log(`[print] ok :: ${name} (${size} bytes)`);
        reply(res, 200, { ok: true, name, bytes: size });
      });
    });
    req.on('error', e => reply(res, 500, { ok: false, error: 'REQ_ERR', message: e.message }));
    return;
  }

  reply(res, 404, { ok: false, error: 'NOT_FOUND' });
});

server.listen(PORT, () => {
  console.log(`╔════════════════════════════════════════════════════╗`);
  console.log(`║          📠  Tadfuq Print Server                   ║`);
  console.log(`╠════════════════════════════════════════════════════╣`);
  console.log(`║  http://localhost:${PORT}                           ║`);
  console.log(`║  platform : ${process.platform.padEnd(40)}║`);
  console.log(`║  printer  : ${(PRINTER || '(system default)').padEnd(40)}║`);
  console.log(`╚════════════════════════════════════════════════════╝`);
  console.log(`  Health : http://localhost:${PORT}/ping`);
  console.log(`  Print  : POST http://localhost:${PORT}/print?name=<filename>`);
});

server.on('error', e => {
  if (e.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Set PRINT_PORT=<other> and retry.`);
    process.exit(1);
  }
  throw e;
});
