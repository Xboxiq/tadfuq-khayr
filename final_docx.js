// =============================================================
// FINAL — Word-only flow
// 1. Fill template .docx with form values (docxtemplater)
// 2. Preview via docx-preview
// 3. Print: render docx into a dedicated print iframe and call
//    contentWindow.print() — the iframe is isolated from the
//    page's CSS, so the printed output matches what docx-preview
//    renders (a faithful representation of the Word document).
// 4. Download: the filled .docx as-is (Word opens it perfectly).
// =============================================================

(function () {

  function _today() {
    return new Date().toLocaleDateString('ar-IQ-u-ca-gregory',
      { day:'2-digit', month:'2-digit', year:'numeric' });
  }
  function _serial(svc, settings) {
    return `${svc.code}-${(settings.centerCode || 'RS-014')}-${String(Math.floor(Math.random()*9000)+1000)}`;
  }
  function _buildData(svc, form) {
    const settings = (window.DB && window.DB.settings.get()) || {};
    return {
      centerName: settings.centerName || 'مركز النضال — كهرباء الرصافة',
      centerCode: settings.centerCode || 'RS-014',
      date:       form._date || _today(),
      serial:     form._serial || _serial(svc, settings),
      name:       form.name     || '',
      nid:        form.nid      || '',
      housing:    form.housing  || '',
      acct:       form.acct     || '',
      ramz:       form.ramz     || '',
      phone:      form.phone    || '',
      hay:        form.hay      || '',
      mahalla:    form.mahalla  || '',
      zuqaq:      form.zuqaq    || '',
      dar:        form.dar      || '',
      piece:      form.piece    || '',
      floor:      form.floor    || '',
      gps:        form.gps      || '',
      landmark:   form.landmark || '',
      apt:        form.apt      || '',
      receiptNo:  form._receiptNo || '',
      reason:     form.reason   || form.notes || '',
      notes:      form.notes    || '',
    };
  }

  // Fill the template; returns ArrayBuffer of the new .docx
  async function fillTemplate(svc, form) {
    const res = await fetch(`forms_word/${svc.code}.docx`);
    if (!res.ok) throw new Error(`نموذج Word غير موجود لـ ${svc.code}`);
    const buf = await res.arrayBuffer();
    const zip = new window.PizZip(buf);
    const Doc = (window.docxtemplater && (window.docxtemplater.default || window.docxtemplater));
    const doc = new Doc(zip, {
      paragraphLoop: true,
      linebreaks: true,
      nullGetter: () => '',
      delimiters: { start: '{{', end: '}}' },
    });
    doc.render(_buildData(svc, form));
    return doc.getZip().generate({ type: 'arraybuffer' });
  }

  function fileNameFor(svc, form) {
    const safe = (form.name || 'بدون-اسم').replace(/[\\/:*?"<>|]/g, '').replace(/\s+/g, '-');
    return `${svc.code}_${safe}_${new Date().toISOString().slice(0,10)}`;
  }

  // ----- Download -----
  async function downloadDocx(svc, form) {
    const buf = await fillTemplate(svc, form);
    const blob = new Blob([buf], { type:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), {
      href: url, download: fileNameFor(svc, form) + '.docx',
    });
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    window.DB && window.DB.log('form.docx', svc.code);
  }

  // ----- Preview (on-screen) -----
  async function renderPreview(svc, form, container) {
    const buf = await fillTemplate(svc, form);
    container.innerHTML = '';
    await window.docx.renderAsync(buf, container, null, {
      className: 'docx-rendered',
      inWrapper: true,
      breakPages: true,
      ignoreLastRenderedPageBreak: false,  // respect Word's page breaks (declaration page!)
      experimental: true,
      trimXmlDeclaration: true,
      useBase64URL: true,
      renderHeaders: true,
      renderFooters: true,
      renderFootnotes: false,
      ignoreWidth: false,
      ignoreHeight: false,
      defaultFont: { family: 'Arial', size: 22 },
    });
  }

  // =============================================================
  // PRINT — send the same .docx file directly to the printer via
  // the local Print Server (print-server/server.js). If the server
  // isn't running, we fall back to a regular download so nothing
  // breaks. The mode used is returned so the caller can toast
  // the right message.
  // =============================================================

  const PRINT_SERVER = () =>
    (window.localStorage.getItem('tq-print-server') || 'http://localhost:9876')
      .replace(/\/+$/, '');

  async function pingPrintServer(timeoutMs = 1200) {
    try {
      const ac = new AbortController();
      const t  = setTimeout(() => ac.abort(), timeoutMs);
      const res = await fetch(PRINT_SERVER() + '/ping', { signal: ac.signal, cache: 'no-store' });
      clearTimeout(t);
      if (!res.ok) return null;
      const info = await res.json();
      return info && info.ok ? info : null;
    } catch { return null; }
  }

  async function printViaServer(buf, name) {
    const res = await fetch(
      `${PRINT_SERVER()}/print?name=${encodeURIComponent(name)}`,
      {
        method: 'POST',
        headers: { 'Content-Type':
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
        body: buf,
      }
    );
    let info = null;
    try { info = await res.json(); } catch {}
    if (!res.ok || !info || !info.ok) {
      const msg = (info && (info.message || info.error)) || `HTTP ${res.status}`;
      throw new Error(msg);
    }
    return info;
  }

  function downloadAndOpen(buf, fileName) {
    const blob = new Blob([buf], { type:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url  = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), {
      href: url, download: fileName + '.docx',
    });
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  async function printDocx(svc, form) {
    const buf      = await fillTemplate(svc, form);
    const fileName = fileNameFor(svc, form);

    // 1) Try the local Print Server (single-click direct print).
    const info = await pingPrintServer();
    if (info) {
      try {
        await printViaServer(buf, fileName);
        window.DB && window.DB.log('form.print', svc.code, { via: 'server', platform: info.platform });
        return { mode: 'server', platform: info.platform, printer: info.printer };
      } catch (e) {
        // Server is up but the print command failed (no printer, Word not
        // installed, etc.) — fall through to download with a hint.
        downloadAndOpen(buf, fileName);
        window.DB && window.DB.log('form.print', svc.code, { via: 'server-fail-fallback', error: e.message });
        return { mode: 'server-failed', error: e.message };
      }
    }

    // 2) Fallback: download the docx so the user opens & prints it manually.
    downloadAndOpen(buf, fileName);
    window.DB && window.DB.log('form.print', svc.code, { via: 'download' });
    return { mode: 'download' };
  }

  window.fillFilledDocx     = fillTemplate;
  window.downloadFilledDocx = downloadDocx;
  window.renderFilledDocx   = renderPreview;
  window.printFilledDocx    = printDocx;
  window.docxFileNameFor    = fileNameFor;
})();
