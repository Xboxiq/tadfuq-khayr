#!/usr/bin/env node
/* ============================================================
   ds-guard.mjs — "no bypass" linter for the Design System
   ----------------------------------------------------
   Fails (exit 1) if migrated UI bypasses window.DS:
     1. raw legacy `f-*` classes
     2. inline hex / rgb / hsl colors (must use var(--token))
     3. JSX <button>/<input>/<select>/<textarea>/<table> literals
        in CONSUMER files (screens) — primitives may only be
        defined inside the library file (ds.jsx).
     4. a consumer screen that never references window.DS / DS.

   Usage: node tools/ds-guard.mjs [file ...]
   Default scope: the library + demo (ds.jsx, app.jsx).
   ============================================================ */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dir, '..');

const args = process.argv.slice(2);
const files = args.length ? args : [resolve(root, 'ds.jsx'), resolve(root, 'app.jsx')];

// Files allowed to DEFINE primitives (the library itself).
const LIBRARY_FILES = new Set(['ds.jsx']);

const RULES = [
  { id: 'no-legacy-class', re: /className\s*[:=]\s*["'`][^"'`]*\bf-[a-z]/g, msg: 'raw legacy f-* class — route through window.DS' },
  { id: 'no-legacy-token', re: /["'`]\s*f-[a-z][\w-]*\s*["'`]/g, msg: 'bare f-* class token — use a DS component' },
  { id: 'no-inline-hex',   re: /:\s*["'`]?#[0-9a-fA-F]{3,8}\b/g, msg: 'inline hex color — use var(--token)' },
  { id: 'no-inline-rgb',   re: /\b(rgb|rgba|hsl|hsla)\(/g, msg: 'inline rgb/hsl color — use var(--token)' },
];
const PRIMITIVE_JSX = /<\s*(button|input|select|textarea|table)\b/g;

let violations = 0;
const findings = [];

for (const file of files) {
  let src;
  try { src = readFileSync(file, 'utf8'); }
  catch { console.error('  ! cannot read ' + file); continue; }
  const name = basename(file);
  const lines = src.split('\n');

  for (const rule of RULES) {
    lines.forEach((ln, i) => {
      rule.re.lastIndex = 0;
      if (rule.re.test(ln)) { findings.push({ file: name, line: i + 1, id: rule.id, msg: rule.msg, text: ln.trim().slice(0, 90) }); violations++; }
    });
  }
  if (!LIBRARY_FILES.has(name)) {
    lines.forEach((ln, i) => {
      PRIMITIVE_JSX.lastIndex = 0;
      if (PRIMITIVE_JSX.test(ln)) { findings.push({ file: name, line: i + 1, id: 'no-bare-primitive', msg: 'bare HTML primitive in a screen — use the DS component', text: ln.trim().slice(0, 90) }); violations++; }
    });
    if (!/window\.DS|DS\./.test(src)) { findings.push({ file: name, line: 0, id: 'must-use-ds', msg: 'screen never references window.DS', text: '' }); violations++; }
  }
}

if (violations) {
  console.error('DS GUARD: ' + violations + ' violation(s)\n');
  for (const f of findings) console.error('  ' + f.file + ':' + f.line + '  [' + f.id + '] ' + f.msg + (f.text ? '\n      ' + f.text : ''));
  process.exit(1);
}
console.log('DS GUARD: clean — ' + files.length + ' file(s), no bypasses found.');
