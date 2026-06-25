/* Unit tests for the DS pure helpers. Run: node --test */
import test from 'node:test';
import assert from 'node:assert/strict';
import { cx, fmt, fmtIQD, feeTotal, deptClass, badgeStateClass, statusStateClass, variantClass } from '../ds-utils.mjs';

test('cx joins strings, arrays, and conditional objects', () => {
  assert.equal(cx('a', 'b'), 'a b');
  assert.equal(cx('a', false, null, undefined, 'b'), 'a b');
  assert.equal(cx('a', { on: true, off: false }), 'a on');
  assert.equal(cx(['a', ['b', { c: true }]]), 'a b c');
  assert.equal(cx(), '');
});

test('fmt / fmtIQD format numbers (Arabic-IQ grouping)', () => {
  assert.equal(typeof fmt(1000), 'string');
  assert.equal(fmt('not a number'), fmt(0));
  assert.ok(fmtIQD(135000).endsWith('د.ع'));
});

test('feeTotal sums amounts and ignores junk', () => {
  assert.equal(feeTotal([{ amt: 15000 }, { amt: 62500 }, { amt: 12500 }]), 90000);
  assert.equal(feeTotal([{ amt: 100 }, { amt: 'x' }, {}]), 100);
  assert.equal(feeTotal(null), 0);
  assert.equal(feeTotal([]), 0);
});

test('deptClass maps known codes and is safe on unknown', () => {
  assert.equal(deptClass('CS'), 'e-dept e-dept--cs');
  assert.equal(deptClass('ct'), 'e-dept e-dept--ct');
  assert.equal(deptClass('CB0006'), 'e-dept e-dept--cb');
  assert.equal(deptClass('ZZ'), 'e-dept');
  assert.equal(deptClass(null), 'e-dept');
});

test('badgeStateClass / statusStateClass map semantic states', () => {
  assert.equal(badgeStateClass('ok'), 'e-badge--ok');
  assert.equal(badgeStateClass('nope'), '');
  assert.equal(statusStateClass('err'), 'e-status e-status--err');
  assert.equal(statusStateClass('x'), 'e-status');
});

test('variantClass only emits allowed modifiers', () => {
  assert.equal(variantClass('e-btn', 'primary', ['primary', 'ghost']), 'e-btn e-btn--primary');
  assert.equal(variantClass('e-btn', 'evil', ['primary']), 'e-btn');
  assert.equal(variantClass('e-btn', undefined, ['primary']), 'e-btn');
});
