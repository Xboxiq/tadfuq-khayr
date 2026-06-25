/* End-to-end: boot the SAME files the browser loads (ds.jsx + app.jsx),
   mount the App, and drive it like a user — assert the shell renders and
   clicking a sidebar item switches the routed screen. Run: node --test */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';

const dom = new JSDOM('<!doctype html><html dir="rtl"><body><div id="root"></div></body></html>', { pretendToBeVisual: true });
global.window = dom.window;
global.document = dom.window.document;
global.MouseEvent = dom.window.MouseEvent;
try { Object.defineProperty(global, 'navigator', { value: dom.window.navigator, configurable: true }); } catch { /* ok */ }
dom.window.React = React;
dom.window.ReactDOM = Object.assign({}, ReactDOM, { createRoot: ReactDOMClient.createRoot });

// Load library then demo app exactly as index.html does (both are createElement, no JSX).
new Function(readFileSync(new URL('../ds.jsx', import.meta.url), 'utf8'))();
new Function(readFileSync(new URL('../app.jsx', import.meta.url), 'utf8'))();

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

test('the full demo mounts the enterprise shell through DS', async () => {
  await wait(50);
  const root = document.getElementById('root');
  assert.ok(root.querySelector('.e-app'), 'app shell rendered');
  assert.ok(root.querySelector('.e-side'), 'sidebar rendered');
  assert.ok(root.querySelector('.e-topbar'), 'topbar rendered');
  assert.match(root.textContent, /تدفّق الخير/);
  assert.match(root.textContent, /نظرة عامة/);
  // KPI tiles from the overview screen
  assert.ok(root.querySelectorAll('.e-kpi').length >= 4, 'overview KPIs present');
});

test('clicking a sidebar item routes to another screen (user flow)', async () => {
  const navButtons = [...document.querySelectorAll('.e-nav')];
  const casesBtn = navButtons.find((b) => /الحالات/.test(b.textContent));
  assert.ok(casesBtn, 'found the Cases nav item');
  casesBtn.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
  await wait(40);
  const root = document.getElementById('root');
  assert.ok(root.querySelector('.e-table'), 'cases table rendered after navigation');
  assert.ok(root.querySelector('.e-pager'), 'pager rendered on cases screen');
});
