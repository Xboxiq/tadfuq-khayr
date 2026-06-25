/* Headless DOM tests: load the real window.DS library under jsdom,
   render components, assert the produced DOM, and simulate a real
   user click. Run: node --test
   Note: ds.jsx uses React.createElement (no JSX), so it loads as-is. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import { renderToStaticMarkup } from 'react-dom/server';

/* ---- boot a browser-like environment and load the library ---- */
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { pretendToBeVisual: true });
global.window = dom.window;
global.document = dom.window.document;
global.MouseEvent = dom.window.MouseEvent;
// Node 22 exposes a read-only `navigator`; define it only if assignable.
try { Object.defineProperty(global, 'navigator', { value: dom.window.navigator, configurable: true }); } catch { /* already present, fine */ }
dom.window.React = React;
dom.window.ReactDOM = Object.assign({}, ReactDOM, { createRoot: ReactDOMClient.createRoot });

const code = readFileSync(new URL('../ds.jsx', import.meta.url), 'utf8');
new Function(code)(); // self-invoking IIFE binds to global window
const DS = dom.window.DS;
const h = React.createElement;

test('library publishes the full component surface on window.DS', () => {
  ['Button', 'Card', 'Field', 'Input', 'Select', 'Badge', 'Status', 'DeptTag',
   'DataTable', 'Tabs', 'Alert', 'Empty', 'Modal', 'ToastProvider', 'useToast',
   'StatCard', 'Pager', 'Breadcrumb', 'Icon'].forEach((k) => {
    assert.equal(typeof DS[k], 'function', 'missing DS.' + k);
  });
});

test('Button renders variant + icon + label as enterprise markup', () => {
  const html = renderToStaticMarkup(h(DS.Button, { variant: 'primary', icon: 'add' }, 'حفظ'));
  assert.match(html, /e-btn/);
  assert.match(html, /e-btn--primary/);
  assert.match(html, /e-i/);          // the icon
  assert.match(html, /حفظ/);          // the label
});

test('Field wires label + error state (a11y: label above, error below)', () => {
  const html = renderToStaticMarkup(
    h(DS.Field, { label: 'الاسم', required: true, error: 'مطلوب' }, h(DS.Input, { placeholder: 'x' })));
  assert.match(html, /is-invalid/);
  assert.match(html, /e-label/);
  assert.match(html, /e-error/);
  assert.match(html, /مطلوب/);
  assert.match(html, /e-input/);
});

test('DataTable renders headers, rows, and an empty state', () => {
  const cols = [{ key: 'id', label: 'رقم' }, { key: 'fee', label: 'الأجور', align: 'end', render: (r) => DS.fmt(r.fee) }];
  const filled = renderToStaticMarkup(h(DS.DataTable, { columns: cols, rows: [{ id: 'A1', fee: 1000 }] }));
  assert.match(filled, /e-table/);
  assert.match(filled, /رقم/);
  assert.match(filled, /A1/);
  const empty = renderToStaticMarkup(h(DS.DataTable, { columns: cols, rows: [] }));
  assert.match(empty, /e-empty/);
});

test('DeptTag and Badge map semantic classes', () => {
  assert.match(renderToStaticMarkup(h(DS.DeptTag, { section: 'CB' }, 'مالية')), /e-dept--cb/);
  assert.match(renderToStaticMarkup(h(DS.Badge, { tone: 'err' }, 'متأخر')), /e-badge--err/);
});

test('Button fires onClick on a real DOM click (interaction)', async () => {
  const root = ReactDOMClient.createRoot(document.getElementById('root'));
  let clicks = 0;
  root.render(h(DS.Button, { variant: 'primary', onClick: () => { clicks++; } }, 'إرسال'));
  await new Promise((r) => setTimeout(r, 30));
  const btn = document.querySelector('.e-btn');
  assert.ok(btn, 'button mounted in the DOM');
  assert.match(btn.textContent, /إرسال/);
  btn.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
  await new Promise((r) => setTimeout(r, 10));
  assert.equal(clicks, 1, 'click handler ran once');
  root.unmount();
});
