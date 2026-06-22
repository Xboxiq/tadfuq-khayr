/* @ds-bundle: {"format":3,"namespace":"TadfuqAlKhayrDesignSystem_640d84","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Chip","sourcePath":"components/data-display/Chip.jsx"},{"name":"SLATag","sourcePath":"components/data-display/SLATag.jsx"},{"name":"SaveBadge","sourcePath":"components/data-display/SaveBadge.jsx"},{"name":"SectionBadge","sourcePath":"components/data-display/SectionBadge.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"5454783b867b","components/core/Card.jsx":"a8d9f0d35b3d","components/core/Icon.jsx":"7d5754f7048f","components/core/IconButton.jsx":"5e8423c8da9d","components/data-display/Chip.jsx":"bd30c517c7a5","components/data-display/SLATag.jsx":"35b01dbb5ff2","components/data-display/SaveBadge.jsx":"09e7809e4a11","components/data-display/SectionBadge.jsx":"c5643f96c022","components/data-display/Tag.jsx":"f69d09dd1791","components/forms/Field.jsx":"887f2656a18c","components/forms/Input.jsx":"e58b0679a117","components/forms/SearchInput.jsx":"778ac28dfeaf","components/forms/Textarea.jsx":"3336b94da327","components/navigation/Breadcrumbs.jsx":"be8e97bb688f","components/navigation/Tabs.jsx":"f8a2fbf1d13d","data.js":"78da7bf2212b","design_handoff_service_hub/changed_files/data.js":"78da7bf2212b","design_handoff_service_hub/changed_files/final.jsx":"3d171dd21ea2","design_handoff_service_hub/changed_files/final_form.jsx":"406b2b9d75a0","design_handoff_service_hub/changed_files/final_print.jsx":"8f71941e6609","design_handoff_service_hub/changed_files/final_spotlight.jsx":"5e5bcc6bb317","design_handoff_service_hub/new_files/final_primitives.jsx":"d84cea4b1a5c","ds_icons.js":"119994525f37","ui_kits/service-hub/final.jsx":"3d171dd21ea2","ui_kits/service-hub/final_attach.js":"4e858742a89b","ui_kits/service-hub/final_auth.js":"42438bdd99bf","ui_kits/service-hub/final_branches.jsx":"c2ce7759d4f7","ui_kits/service-hub/final_branches_data.js":"3dc8d11b60f3","ui_kits/service-hub/final_cases.jsx":"bc973cb84ced","ui_kits/service-hub/final_db.js":"e2f96b5efa6c","ui_kits/service-hub/final_docx.js":"efec27844b89","ui_kits/service-hub/final_form.jsx":"406b2b9d75a0","ui_kits/service-hub/final_forms_data.js":"10ef5ebba49e","ui_kits/service-hub/final_globals.jsx":"16e1023996a1","ui_kits/service-hub/final_login.jsx":"282fc60011c9","ui_kits/service-hub/final_micro.js":"3e9d6bc87704","ui_kits/service-hub/final_pdf_fill.js":"514fcf1c4ae7","ui_kits/service-hub/final_primitives.jsx":"d84cea4b1a5c","ui_kits/service-hub/final_print.jsx":"8f71941e6609","ui_kits/service-hub/final_services.jsx":"36d6279af2b1","ui_kits/service-hub/final_spotlight.jsx":"5e5bcc6bb317","ui_kits/service-hub/final_sticker.jsx":"6fe9ee8c991e","ui_kits/service-hub/final_trends.js":"fadb43216425"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TadfuqAlKhayrDesignSystem_640d84 = window.TadfuqAlKhayrDesignSystem_640d84 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action control for the Tadfuq Al-Khayr hub.
 * Wraps the `.rs-btn` recipe: navy-on-white default, brand-gradient
 * primary, ghost and danger variants, three sizes, async busy state.
 */
function Button({
  variant = 'default',
  size = 'md',
  icon,
  iconEnd,
  busy = false,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['rs-btn', variant === 'primary' && 'rs-btn--primary', variant === 'ghost' && 'rs-btn--ghost', variant === 'danger' && 'rs-btn--danger', size === 'sm' && 'rs-btn--sm', size === 'lg' && 'rs-btn--lg', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled,
    "aria-busy": busy || undefined
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "rs-btn__ico"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, icon)), children && /*#__PURE__*/React.createElement("span", null, children), iconEnd && /*#__PURE__*/React.createElement("span", {
    className: "rs-btn__ico"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, iconEnd)));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the generic surface (`.rs-card`). Supports size steps, an
 * interactive hover-lift, a translucent glass treatment, and a
 * brand-sweep top rim.
 */
function Card({
  size = 'md',
  interactive = false,
  glass = false,
  brandRim = false,
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  const cls = ['rs-card', size === 'lg' && 'rs-card--lg', size === 'xl' && 'rs-card--xl', interactive && 'rs-card--interactive', glass && 'rs-card--glass', brandRim && 'rs-card--brand-rim', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — Material Symbols Outlined glyph wrapper (`.rs-icon`).
 * Variable-axis font: control size, fill and weight via props.
 */
function Icon({
  name,
  size = 'md',
  filled = false,
  bold = false,
  className = '',
  style,
  ...rest
}) {
  const cls = ['rs-icon', size === 'sm' && 'rs-icon--sm', size === 'md' && 'rs-icon--md', size === 'lg' && 'rs-icon--lg', size === 'xl' && 'rs-icon--xl', filled && 'rs-icon--filled', bold && 'rs-icon--bold', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: style
  }, rest), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only control (`.rs-iconbtn`).
 * Soft navy tint by default, crimson tint on hover, gold focus ring.
 */
function IconButton({
  icon,
  size = 'md',
  bare = false,
  label,
  className = '',
  children,
  ...rest
}) {
  const cls = ['rs-iconbtn', size === 'sm' && 'rs-iconbtn--sm', size === 'lg' && 'rs-iconbtn--lg', bare && 'rs-iconbtn--bare', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, icon) : children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — filter / input chip (`.rs-chip`). Pill-shaped, toggles to a
 * filled active state. Pass a department code to color the active fill.
 */
function Chip({
  active = false,
  section,
  icon,
  className = '',
  children,
  ...rest
}) {
  const cls = ['rs-chip', section && `rs-chip--${section}`, active && 'is-active', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-pressed": active
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, icon), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SLATag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SLATag — priority selector pill (`.rs-sla`). Three levels: standard,
 * urgent, VIP. Active state fills with the level color (VIP = gold sheen).
 */
function SLATag({
  level = 'standard',
  active = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['rs-sla', level === 'urgent' && 'rs-sla--urgent', level === 'standard' && 'rs-sla--standard', level === 'vip' && 'rs-sla--vip', active && 'is-active', className].filter(Boolean).join(' ');
  const label = children ?? {
    urgent: 'عاجل',
    standard: 'اعتيادي',
    vip: 'VIP'
  }[level];
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-pressed": active
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "rs-sla__dot"
  }), label);
}
Object.assign(__ds_scope, { SLATag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SLATag.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SaveBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SaveBadge — autosave status indicator (`.rs-savebadge`). Four states
 * with matching color + animation (saving pulses the dot).
 */
function SaveBadge({
  status = 'idle',
  className = '',
  children,
  ...rest
}) {
  const cls = ['rs-savebadge', status === 'saved' && 'is-saved', status === 'saving' && 'is-saving', status === 'error' && 'is-error', className].filter(Boolean).join(' ');
  const label = children ?? {
    idle: 'لم يُحفظ بعد',
    saving: 'جاري الحفظ…',
    saved: 'تم الحفظ',
    error: 'تعذّر الحفظ'
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "rs-savebadge__dot"
  }), label);
}
Object.assign(__ds_scope, { SaveBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SaveBadge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SectionBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionBadge — the CS / CB / CT / CA department square (`.rs-secbadge`).
 * Background is fixed per-department so a badge always reads as its section.
 */
function SectionBadge({
  section,
  className = '',
  children,
  ...rest
}) {
  const cls = ['rs-secbadge', section === 'CS' && 'rs-secbadge--CS', section === 'CB' && 'rs-secbadge--CB', section === 'CT' && 'rs-secbadge--CT', section === 'CA' && 'rs-secbadge--CA', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children ?? section);
}
Object.assign(__ds_scope, { SectionBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SectionBadge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small caps status pill (`.rs-tag`). Mono, uppercase, with an
 * optional leading status dot. Tones map to the semantic + brand colors.
 */
function Tag({
  tone = 'default',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['rs-tag', tone === 'success' && 'rs-tag--success', tone === 'warn' && 'rs-tag--warn', tone === 'err' && 'rs-tag--err', tone === 'info' && 'rs-tag--info', tone === 'crimson' && 'rs-tag--crimson', tone === 'gold' && 'rs-tag--gold', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "rs-tag__dot"
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — label + control + hint/error wrapper (`.rs-field`). Compose
 * any control (Input, Textarea, Select) as children.
 */
function Field({
  label,
  required = false,
  hint,
  error,
  htmlFor,
  className = '',
  children,
  ...rest
}) {
  const cls = ['rs-field', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: `rs-field__lbl ${required ? 'rs-field__lbl-required' : ''}`,
    htmlFor: htmlFor
  }, label), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "rs-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "rs-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text input (`.rs-input`). Crimson focus ring,
 * invalid + readonly states baked in.
 */
function Input({
  invalid = false,
  className = '',
  ...rest
}) {
  const cls = ['rs-input', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchInput — icon + input combo (`.rs-search`). The `hero` size is the
 * big landing-page search; default size suits topbars and panels.
 */
function SearchInput({
  hero = false,
  icon = 'search',
  className = '',
  ...rest
}) {
  const cls = ['rs-search', hero && 'rs-search--hero', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("span", {
    className: "rs-search__ico"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, icon)), /*#__PURE__*/React.createElement("input", _extends({
    className: "rs-search__input",
    type: "search"
  }, rest)));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line notes control (`.rs-textarea`). */
function Textarea({
  className = '',
  ...rest
}) {
  const cls = ['rs-textarea', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
/**
 * Breadcrumbs — trail of links (`.rs-crumbs`). Pass items; the last one
 * renders as the bold current page. Separator is a chevron (RTL-aware).
 */
function Breadcrumbs({
  items = [],
  className = ''
}) {
  const cls = ['rs-crumbs', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("nav", {
    className: cls,
    "aria-label": "breadcrumb"
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "rs-crumbs__current",
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      onClick: it.onClick
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "rs-crumbs__sep material-symbols-outlined"
    }, "chevron_left"));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — underline tab strip (`.rs-tabs`). Pass an array of items and the
 * active key; the active tab gets a crimson underline. Items may carry a
 * count badge.
 */
function Tabs({
  items = [],
  value,
  onChange,
  className = ''
}) {
  const cls = ['rs-tabs', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.key,
    role: "tab",
    "aria-selected": value === it.key,
    className: `rs-tabs__item ${value === it.key ? 'is-active' : ''}`,
    onClick: () => onChange && onChange(it.key)
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, it.icon), it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
    className: "rs-tabs__badge"
  }, it.badge))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// data.js
try { (() => {
// =============================================================
// Tadfuq Al-Khayr — services data, pricing, helpers
// =============================================================

window.SECTIONS = [{
  code: 'CS',
  name: 'الاشتراكات',
  name_en: 'Subscriptions',
  color: '#1d4ed8',
  icon: 'apartment',
  blurb: 'فتح اشتراكات جديدة، نقل ملكية، تغيير الصنف، إيقاف/تفعيل.'
}, {
  code: 'CT',
  name: 'الفنية',
  name_en: 'Technical',
  color: '#b45309',
  icon: 'electrical_services',
  blurb: 'فحص المقاييس، تغيير الكابلات، تعديل القوة والجهد، تغيير الموقع.'
}, {
  code: 'CB',
  name: 'الفواتير',
  name_en: 'Billing',
  color: '#0e7490',
  icon: 'receipt_long',
  blurb: 'دفع القوائم، التقسيط، التسويات المالية، نسخ القوائم.'
}, {
  code: 'CA',
  name: 'الشكاوى والتقارير',
  name_en: 'Reports',
  color: '#b91c1c',
  icon: 'report',
  blurb: 'إبلاغات التلاعب، الأخطار، الشكاوى الإدارية، أضرار الشبكة.'
}];
window.SERVICES = [
// ---- CS ----
{
  code: 'CS0001',
  section: 'CS',
  name: 'عمل اشتراك جديد',
  sla: 7,
  popularity: 98,
  hasPrice: true,
  priceNote: 'حسب الصنف والقوة',
  icon: 'add_home'
}, {
  code: 'CS0002',
  section: 'CS',
  name: 'إضافة اسم المنتفع للفاتورة',
  sla: 2,
  popularity: 62,
  icon: 'person_add'
}, {
  code: 'CS0003',
  section: 'CS',
  name: 'تغيير صنف الاشتراك (منزلي/تجاري/صناعي/حكومي)',
  sla: 3,
  popularity: 54,
  icon: 'sync_alt'
}, {
  code: 'CS0004',
  section: 'CS',
  name: 'إيقاف خدمة / قطع تيار مؤقت',
  sla: 1,
  popularity: 71,
  icon: 'power_off'
}, {
  code: 'CS0005',
  section: 'CS',
  name: 'تفعيل اشتراك موقوف (غلق وفتح حساب)',
  sla: 1,
  popularity: 65,
  icon: 'restart_alt'
}, {
  code: 'CS0006',
  section: 'CS',
  name: 'إلغاء اشتراك (غلق حساب)',
  sla: 5,
  popularity: 33,
  icon: 'cancel'
}, {
  code: 'CS0007',
  section: 'CS',
  name: 'الاعتراض على القوائم أو قطع التيار',
  sla: 3,
  popularity: 74,
  icon: 'gavel'
}, {
  code: 'CS0008',
  section: 'CS',
  name: 'تعديل عنوان مشترك / إضافة بيانات',
  sla: 2,
  popularity: 48,
  icon: 'edit_location'
}, {
  code: 'CS0009',
  section: 'CS',
  name: 'قراءة مقياس بناءً على طلب المشترك',
  sla: 1,
  popularity: 38,
  fixedPrice: 25000,
  icon: 'speed'
}, {
  code: 'CS0010',
  section: 'CS',
  name: 'اشتراك مؤقت (مواقع البناء)',
  sla: 5,
  popularity: 42,
  icon: 'construction'
}, {
  code: 'CS0011',
  section: 'CS',
  name: 'نقل ملكية اشتراك (بيع/شراء/ورثة)',
  sla: 7,
  popularity: 69,
  icon: 'swap_horiz'
},
// ---- CT ----
{
  code: 'CT0001',
  section: 'CT',
  name: 'شكوى ضرر / تغيير موقع عامود',
  sla: 14,
  popularity: 46,
  fixedPrice: 1000000,
  icon: 'bolt'
}, {
  code: 'CT0002',
  section: 'CT',
  name: 'شكوى ضرر / تغيير موقع ركيزة المحولة',
  sla: 21,
  popularity: 34,
  fixedPrice: 2500000,
  icon: 'transform'
}, {
  code: 'CT0003',
  section: 'CT',
  name: 'تغيير كابل مشترك (من العامود الخارجي إلى المقياس)',
  sla: 5,
  popularity: 58,
  icon: 'cable'
}, {
  code: 'CT0004',
  section: 'CT',
  name: 'تجزئة اشتراك / تحويل 3 فاز إلى 3 اشتراكات',
  sla: 14,
  popularity: 39,
  icon: 'call_split'
}, {
  code: 'CT0005',
  section: 'CT',
  name: 'تجميع أحمال / دمج اشتراكات (تجاري/صناعي)',
  sla: 10,
  popularity: 36,
  icon: 'merge'
}, {
  code: 'CT0006',
  section: 'CT',
  name: 'تعديل جهد اشتراك (منخفض ⇆ متوسط)',
  sla: 14,
  popularity: 28,
  icon: 'tune'
}, {
  code: 'CT0007',
  section: 'CT',
  name: 'تغيير نوع المقياس (أحادي/ثلاثي) — زيادة قوة',
  sla: 7,
  popularity: 64,
  icon: 'memory'
}, {
  code: 'CT0008',
  section: 'CT',
  name: 'تغيير موقع المقياس داخل المبنى',
  sla: 5,
  popularity: 51,
  fixedPrice: 35000,
  icon: 'move_to_inbox'
}, {
  code: 'CT0009',
  section: 'CT',
  name: 'فحص مقياس / تبديل / صيانة',
  sla: 3,
  popularity: 88,
  priceNote: 'يبدأ من 12,500 د.ع',
  icon: 'fact_check'
},
// ---- CB ----
{
  code: 'CB0001',
  section: 'CB',
  name: 'دفع قائمة أجور كهرباء',
  sla: 1,
  popularity: 99,
  icon: 'payments'
}, {
  code: 'CB0002',
  section: 'CB',
  name: 'تقرير استهلاك مفصّل (مع الدفعات)',
  sla: 2,
  popularity: 55,
  icon: 'analytics'
}, {
  code: 'CB0003',
  section: 'CB',
  name: 'مراجعة تفاصيل القائمة / قائمة مصحّحة',
  sla: 3,
  popularity: 67,
  icon: 'edit_document'
}, {
  code: 'CB0004',
  section: 'CB',
  name: 'نسخة قائمة أجور (بدل مفقود)',
  sla: 1,
  popularity: 44,
  icon: 'description'
}, {
  code: 'CB0005',
  section: 'CB',
  name: 'إجراءات دفعات متأخرة — قسيمة متأخرة',
  sla: 3,
  popularity: 52,
  icon: 'history'
}, {
  code: 'CB0006',
  section: 'CB',
  name: 'تسوية مالية / تقسيط / ترتيبات دفع',
  sla: 5,
  popularity: 81,
  icon: 'request_quote'
},
// ---- CA ----
{
  code: 'CA0001',
  section: 'CA',
  name: 'إبلاغ عن تلاعب في المقياس أو الوصلة',
  sla: 1,
  popularity: 71,
  icon: 'gpp_bad'
}, {
  code: 'CA0002',
  section: 'CA',
  name: 'إبلاغ عن حالة خطر',
  sla: 1,
  popularity: 79,
  urgent: true,
  icon: 'warning'
}, {
  code: 'CA0003',
  section: 'CA',
  name: 'إبلاغ عن أضرار أو فقد في مكونات الشبكة',
  sla: 3,
  popularity: 48,
  icon: 'build'
}, {
  code: 'CA0004',
  section: 'CA',
  name: 'شكوى إدارية (نوعية الخدمة / التعامل)',
  sla: 5,
  popularity: 36,
  icon: 'support_agent'
}];

// ---- Pricing tables (excerpted from the official rate sheet 2026) ----
window.PRICING = {
  inspection: {
    // أجور الكشف
    label: 'أجور الكشف',
    items: [{
      key: 'res',
      name: 'منزلي',
      amount: 15000
    }, {
      key: 'com',
      name: 'تجاري',
      amount: 100000
    }, {
      key: 'agr',
      name: 'زراعي',
      amount: 50000
    }, {
      key: 'ind',
      name: 'صناعي',
      amount: 150000
    }, {
      key: 'gov',
      name: 'حكومي',
      amount: 150000
    }]
  },
  install: {
    label: 'تجهيز ونصب',
    items: [{
      key: 'illegal_meter',
      name: 'مقياس المستهلك غير النظامي',
      amount: 62500
    }, {
      key: 'meter_cover',
      name: 'الغطاء السفلي للمقياس',
      amount: 12500
    }]
  },
  reconnect: {
    label: 'قطع وإعادة التيار — بسبب الديون',
    items: [{
      key: 'res1',
      name: 'منزلي طور واحد',
      amount: 50000
    }, {
      key: 'res3',
      name: 'منزلي 3 أطوار',
      amount: 100000
    }, {
      key: 'com1',
      name: 'تجاري طور واحد',
      amount: 150000
    }, {
      key: 'com3',
      name: 'تجاري 3 أطوار',
      amount: 250000
    }, {
      key: 'ind1',
      name: 'صناعي طور واحد',
      amount: 100000
    }, {
      key: 'ind3',
      name: 'صناعي 3 أطوار',
      amount: 250000
    }, {
      key: 'agr1',
      name: 'زراعي طور واحد',
      amount: 75000
    }, {
      key: 'agr3',
      name: 'زراعي 3 أطوار',
      amount: 100000
    }, {
      key: 'gov1',
      name: 'حكومي طور واحد',
      amount: 100000
    }, {
      key: 'gov3',
      name: 'حكومي 3 أطوار',
      amount: 250000
    }, {
      key: 'mv11',
      name: 'جهد 11 ك.ف.',
      amount: 500000
    }]
  }
};
window.SECTION_MAP = Object.fromEntries(window.SECTIONS.map(s => [s.code, s]));
window.SERVICE_MAP = Object.fromEntries(window.SERVICES.map(s => [s.code, s]));
window.fmt = n => new Intl.NumberFormat('ar-IQ-u-nu-latn').format(n);
window.fmtIQD = n => window.fmt(n) + ' د.ع';

// Recent cases (mock)
window.RECENT_CASES = [{
  id: 'TQ-2026-08-1417',
  svc: 'CS0001',
  subscriber: 'علي عبدالله حسين',
  status: 'فحص ميداني',
  fee: 135000,
  age: 'منذ ساعتين',
  officer: 'م. كرار',
  priority: 'standard'
}, {
  id: 'TQ-2026-08-1413',
  svc: 'CT0009',
  subscriber: 'هدى محمود إبراهيم',
  status: 'بانتظار الدفع',
  fee: 25000,
  age: 'منذ 4 ساعات',
  officer: 'م. زينب',
  priority: 'standard'
}, {
  id: 'TQ-2026-08-1409',
  svc: 'CB0006',
  subscriber: 'حسن جاسم العبيدي',
  status: 'موافقة مدير',
  fee: 0,
  age: 'أمس',
  officer: 'م. أحمد',
  priority: 'vip'
}, {
  id: 'TQ-2026-08-1407',
  svc: 'CA0002',
  subscriber: 'سرى ناجي كاظم',
  status: 'فريق طوارئ',
  fee: 0,
  age: 'أمس',
  officer: 'م. مصطفى',
  priority: 'urgent'
}, {
  id: 'TQ-2026-08-1402',
  svc: 'CS0011',
  subscriber: 'أحمد علي الجبوري',
  status: 'تحقق قانوني',
  fee: 0,
  age: 'منذ يومين',
  officer: 'م. كرار',
  priority: 'standard'
}, {
  id: 'TQ-2026-08-1395',
  svc: 'CT0008',
  subscriber: 'مريم رياض الزبيدي',
  status: 'قيد التنفيذ',
  fee: 35000,
  age: 'منذ 3 أيام',
  officer: 'م. زينب',
  priority: 'standard'
}];

// Dashboard KPIs
window.KPIS = {
  todayCases: 84,
  todayDelta: 12,
  pending: 213,
  collected: 4810000,
  satisfaction: 94
};

// =============================================================
// ADVISORIES — official guidance, hazards, reviews, FAQs per service
// t: danger | review | scale | tip | faq
// =============================================================
window.ADVISORIES = {
  CS0001: [{
    t: 'review',
    x: 'تدقيق سند الملكية (الطابو) وكتاب التأييد إلزامي قبل قبول الطلب — مراجعة رسمية دقيقة'
  }, {
    t: 'scale',
    x: 'قابل للتوسع: نفس النموذج يغطي المجمعات السكنية والمشاريع الاستثمارية'
  }, {
    t: 'faq',
    x: 'هل تكفي إجازة البناء بدل كتاب ضريبة العقار؟ نعم — أحد المستندين يكفي'
  }],
  CS0011: [{
    t: 'review',
    x: 'حالات الورثة تتطلب قساماً شرعياً موثقاً وحضور أو تخويل جميع الورثة'
  }, {
    t: 'faq',
    x: 'هل يشترط تسديد الذمم قبل النقل؟ نعم — براءة ذمة المشترك السابق شرط'
  }],
  CT0001: [{
    t: 'danger',
    x: 'عمل ميداني على الشبكة الحية — يتطلب إذن سلامة وفصل تيار منسّقاً مع الصيانة'
  }, {
    t: 'review',
    x: 'كشف هندسي مشترك (فنية + خدمات) قبل احتساب الأجور النهائية'
  }],
  CT0002: [{
    t: 'danger',
    x: 'تغيير ركيزة محولة = إيقاف تغذية حي كامل — يحتاج موافقة قسم التشغيل وجدولة ليلية'
  }],
  CT0009: [{
    t: 'review',
    x: 'فحص المقياس يوثق بمحضر رسمي موقع من لجنة الفحص — لا يقبل الطعن بعد التوقيع'
  }, {
    t: 'faq',
    x: 'متى يكون الفحص مجانياً؟ إذا ثبت عطل المقياس من الشركة وليس من المشترك'
  }],
  CB0006: [{
    t: 'review',
    x: 'التقسيط فوق ٥ ملايين د.ع يتطلب موافقة مدير الفرع وكفيلاً موظفاً'
  }, {
    t: 'faq',
    x: 'كم الدفعة الأولى؟ ٢٥٪ من إجمالي الذمة كحد أدنى'
  }],
  CA0001: [{
    t: 'danger',
    x: 'حالات التلاعب تحوّل للجنة التجاوزات والقانونية — لا تتعامل مع المشترك مباشرة'
  }, {
    t: 'review',
    x: 'يحرر محضر ضبط أصولي بحضور شاهدين قبل أي إجراء'
  }],
  CA0002: [{
    t: 'danger',
    x: 'بلاغ خطر = أولوية قصوى: إشعار فرق الطوارئ فوراً قبل تسجيل الطلب'
  }]
};
window.ADVISORY_DEFAULTS = {
  CS: [{
    t: 'review',
    x: 'تحقق من هوية مقدم الطلب وصفته القانونية قبل التعبئة'
  }, {
    t: 'tip',
    x: 'أكمل الحقول أمام المشترك مباشرة — الحفظ التلقائي يحمي عملك'
  }],
  CT: [{
    t: 'danger',
    x: 'خدمة ذات طابع ميداني — التزم بإجراءات السلامة المعتمدة'
  }, {
    t: 'review',
    x: 'الأجور النهائية تحدد بعد الكشف الموقعي وليس عند التقديم'
  }],
  CB: [{
    t: 'review',
    x: 'طابق رقم الحساب مع القائمة الأصلية قبل أي إجراء مالي'
  }, {
    t: 'faq',
    x: 'هل يحتاج المشترك حضوراً شخصياً؟ يكفي وكيل بتخويل رسمي'
  }],
  CA: [{
    t: 'tip',
    x: 'سجّل البلاغ بدقة: الموقع، الوصف، ورقم هاتف المبلّغ للمتابعة'
  }, {
    t: 'review',
    x: 'الشكاوى الإدارية تحوّل لمسؤول المركز خلال ٢٤ ساعة كحد أقصى'
  }]
};
window.getAdvisories = function (code) {
  var svc = window.SERVICE_MAP[code];
  var spec = window.ADVISORIES[code] || [];
  var base = svc ? window.ADVISORY_DEFAULTS[svc.section] || [] : [];
  return spec.length ? spec : base;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "data.js", error: String((e && e.message) || e) }); }

// design_handoff_service_hub/changed_files/data.js
try { (() => {
// =============================================================
// Tadfuq Al-Khayr — services data, pricing, helpers
// =============================================================

window.SECTIONS = [{
  code: 'CS',
  name: 'الاشتراكات',
  name_en: 'Subscriptions',
  color: '#1d4ed8',
  icon: 'apartment',
  blurb: 'فتح اشتراكات جديدة، نقل ملكية، تغيير الصنف، إيقاف/تفعيل.'
}, {
  code: 'CT',
  name: 'الفنية',
  name_en: 'Technical',
  color: '#b45309',
  icon: 'electrical_services',
  blurb: 'فحص المقاييس، تغيير الكابلات، تعديل القوة والجهد، تغيير الموقع.'
}, {
  code: 'CB',
  name: 'الفواتير',
  name_en: 'Billing',
  color: '#0e7490',
  icon: 'receipt_long',
  blurb: 'دفع القوائم، التقسيط، التسويات المالية، نسخ القوائم.'
}, {
  code: 'CA',
  name: 'الشكاوى والتقارير',
  name_en: 'Reports',
  color: '#b91c1c',
  icon: 'report',
  blurb: 'إبلاغات التلاعب، الأخطار، الشكاوى الإدارية، أضرار الشبكة.'
}];
window.SERVICES = [
// ---- CS ----
{
  code: 'CS0001',
  section: 'CS',
  name: 'عمل اشتراك جديد',
  sla: 7,
  popularity: 98,
  hasPrice: true,
  priceNote: 'حسب الصنف والقوة',
  icon: 'add_home'
}, {
  code: 'CS0002',
  section: 'CS',
  name: 'إضافة اسم المنتفع للفاتورة',
  sla: 2,
  popularity: 62,
  icon: 'person_add'
}, {
  code: 'CS0003',
  section: 'CS',
  name: 'تغيير صنف الاشتراك (منزلي/تجاري/صناعي/حكومي)',
  sla: 3,
  popularity: 54,
  icon: 'sync_alt'
}, {
  code: 'CS0004',
  section: 'CS',
  name: 'إيقاف خدمة / قطع تيار مؤقت',
  sla: 1,
  popularity: 71,
  icon: 'power_off'
}, {
  code: 'CS0005',
  section: 'CS',
  name: 'تفعيل اشتراك موقوف (غلق وفتح حساب)',
  sla: 1,
  popularity: 65,
  icon: 'restart_alt'
}, {
  code: 'CS0006',
  section: 'CS',
  name: 'إلغاء اشتراك (غلق حساب)',
  sla: 5,
  popularity: 33,
  icon: 'cancel'
}, {
  code: 'CS0007',
  section: 'CS',
  name: 'الاعتراض على القوائم أو قطع التيار',
  sla: 3,
  popularity: 74,
  icon: 'gavel'
}, {
  code: 'CS0008',
  section: 'CS',
  name: 'تعديل عنوان مشترك / إضافة بيانات',
  sla: 2,
  popularity: 48,
  icon: 'edit_location'
}, {
  code: 'CS0009',
  section: 'CS',
  name: 'قراءة مقياس بناءً على طلب المشترك',
  sla: 1,
  popularity: 38,
  fixedPrice: 25000,
  icon: 'speed'
}, {
  code: 'CS0010',
  section: 'CS',
  name: 'اشتراك مؤقت (مواقع البناء)',
  sla: 5,
  popularity: 42,
  icon: 'construction'
}, {
  code: 'CS0011',
  section: 'CS',
  name: 'نقل ملكية اشتراك (بيع/شراء/ورثة)',
  sla: 7,
  popularity: 69,
  icon: 'swap_horiz'
},
// ---- CT ----
{
  code: 'CT0001',
  section: 'CT',
  name: 'شكوى ضرر / تغيير موقع عامود',
  sla: 14,
  popularity: 46,
  fixedPrice: 1000000,
  icon: 'bolt'
}, {
  code: 'CT0002',
  section: 'CT',
  name: 'شكوى ضرر / تغيير موقع ركيزة المحولة',
  sla: 21,
  popularity: 34,
  fixedPrice: 2500000,
  icon: 'transform'
}, {
  code: 'CT0003',
  section: 'CT',
  name: 'تغيير كابل مشترك (من العامود الخارجي إلى المقياس)',
  sla: 5,
  popularity: 58,
  icon: 'cable'
}, {
  code: 'CT0004',
  section: 'CT',
  name: 'تجزئة اشتراك / تحويل 3 فاز إلى 3 اشتراكات',
  sla: 14,
  popularity: 39,
  icon: 'call_split'
}, {
  code: 'CT0005',
  section: 'CT',
  name: 'تجميع أحمال / دمج اشتراكات (تجاري/صناعي)',
  sla: 10,
  popularity: 36,
  icon: 'merge'
}, {
  code: 'CT0006',
  section: 'CT',
  name: 'تعديل جهد اشتراك (منخفض ⇆ متوسط)',
  sla: 14,
  popularity: 28,
  icon: 'tune'
}, {
  code: 'CT0007',
  section: 'CT',
  name: 'تغيير نوع المقياس (أحادي/ثلاثي) — زيادة قوة',
  sla: 7,
  popularity: 64,
  icon: 'memory'
}, {
  code: 'CT0008',
  section: 'CT',
  name: 'تغيير موقع المقياس داخل المبنى',
  sla: 5,
  popularity: 51,
  fixedPrice: 35000,
  icon: 'move_to_inbox'
}, {
  code: 'CT0009',
  section: 'CT',
  name: 'فحص مقياس / تبديل / صيانة',
  sla: 3,
  popularity: 88,
  priceNote: 'يبدأ من 12,500 د.ع',
  icon: 'fact_check'
},
// ---- CB ----
{
  code: 'CB0001',
  section: 'CB',
  name: 'دفع قائمة أجور كهرباء',
  sla: 1,
  popularity: 99,
  icon: 'payments'
}, {
  code: 'CB0002',
  section: 'CB',
  name: 'تقرير استهلاك مفصّل (مع الدفعات)',
  sla: 2,
  popularity: 55,
  icon: 'analytics'
}, {
  code: 'CB0003',
  section: 'CB',
  name: 'مراجعة تفاصيل القائمة / قائمة مصحّحة',
  sla: 3,
  popularity: 67,
  icon: 'edit_document'
}, {
  code: 'CB0004',
  section: 'CB',
  name: 'نسخة قائمة أجور (بدل مفقود)',
  sla: 1,
  popularity: 44,
  icon: 'description'
}, {
  code: 'CB0005',
  section: 'CB',
  name: 'إجراءات دفعات متأخرة — قسيمة متأخرة',
  sla: 3,
  popularity: 52,
  icon: 'history'
}, {
  code: 'CB0006',
  section: 'CB',
  name: 'تسوية مالية / تقسيط / ترتيبات دفع',
  sla: 5,
  popularity: 81,
  icon: 'request_quote'
},
// ---- CA ----
{
  code: 'CA0001',
  section: 'CA',
  name: 'إبلاغ عن تلاعب في المقياس أو الوصلة',
  sla: 1,
  popularity: 71,
  icon: 'gpp_bad'
}, {
  code: 'CA0002',
  section: 'CA',
  name: 'إبلاغ عن حالة خطر',
  sla: 1,
  popularity: 79,
  urgent: true,
  icon: 'warning'
}, {
  code: 'CA0003',
  section: 'CA',
  name: 'إبلاغ عن أضرار أو فقد في مكونات الشبكة',
  sla: 3,
  popularity: 48,
  icon: 'build'
}, {
  code: 'CA0004',
  section: 'CA',
  name: 'شكوى إدارية (نوعية الخدمة / التعامل)',
  sla: 5,
  popularity: 36,
  icon: 'support_agent'
}];

// ---- Pricing tables (excerpted from the official rate sheet 2026) ----
window.PRICING = {
  inspection: {
    // أجور الكشف
    label: 'أجور الكشف',
    items: [{
      key: 'res',
      name: 'منزلي',
      amount: 15000
    }, {
      key: 'com',
      name: 'تجاري',
      amount: 100000
    }, {
      key: 'agr',
      name: 'زراعي',
      amount: 50000
    }, {
      key: 'ind',
      name: 'صناعي',
      amount: 150000
    }, {
      key: 'gov',
      name: 'حكومي',
      amount: 150000
    }]
  },
  install: {
    label: 'تجهيز ونصب',
    items: [{
      key: 'illegal_meter',
      name: 'مقياس المستهلك غير النظامي',
      amount: 62500
    }, {
      key: 'meter_cover',
      name: 'الغطاء السفلي للمقياس',
      amount: 12500
    }]
  },
  reconnect: {
    label: 'قطع وإعادة التيار — بسبب الديون',
    items: [{
      key: 'res1',
      name: 'منزلي طور واحد',
      amount: 50000
    }, {
      key: 'res3',
      name: 'منزلي 3 أطوار',
      amount: 100000
    }, {
      key: 'com1',
      name: 'تجاري طور واحد',
      amount: 150000
    }, {
      key: 'com3',
      name: 'تجاري 3 أطوار',
      amount: 250000
    }, {
      key: 'ind1',
      name: 'صناعي طور واحد',
      amount: 100000
    }, {
      key: 'ind3',
      name: 'صناعي 3 أطوار',
      amount: 250000
    }, {
      key: 'agr1',
      name: 'زراعي طور واحد',
      amount: 75000
    }, {
      key: 'agr3',
      name: 'زراعي 3 أطوار',
      amount: 100000
    }, {
      key: 'gov1',
      name: 'حكومي طور واحد',
      amount: 100000
    }, {
      key: 'gov3',
      name: 'حكومي 3 أطوار',
      amount: 250000
    }, {
      key: 'mv11',
      name: 'جهد 11 ك.ف.',
      amount: 500000
    }]
  }
};
window.SECTION_MAP = Object.fromEntries(window.SECTIONS.map(s => [s.code, s]));
window.SERVICE_MAP = Object.fromEntries(window.SERVICES.map(s => [s.code, s]));
window.fmt = n => new Intl.NumberFormat('ar-IQ-u-nu-latn').format(n);
window.fmtIQD = n => window.fmt(n) + ' د.ع';

// Recent cases (mock)
window.RECENT_CASES = [{
  id: 'TQ-2026-08-1417',
  svc: 'CS0001',
  subscriber: 'علي عبدالله حسين',
  status: 'فحص ميداني',
  fee: 135000,
  age: 'منذ ساعتين',
  officer: 'م. كرار',
  priority: 'standard'
}, {
  id: 'TQ-2026-08-1413',
  svc: 'CT0009',
  subscriber: 'هدى محمود إبراهيم',
  status: 'بانتظار الدفع',
  fee: 25000,
  age: 'منذ 4 ساعات',
  officer: 'م. زينب',
  priority: 'standard'
}, {
  id: 'TQ-2026-08-1409',
  svc: 'CB0006',
  subscriber: 'حسن جاسم العبيدي',
  status: 'موافقة مدير',
  fee: 0,
  age: 'أمس',
  officer: 'م. أحمد',
  priority: 'vip'
}, {
  id: 'TQ-2026-08-1407',
  svc: 'CA0002',
  subscriber: 'سرى ناجي كاظم',
  status: 'فريق طوارئ',
  fee: 0,
  age: 'أمس',
  officer: 'م. مصطفى',
  priority: 'urgent'
}, {
  id: 'TQ-2026-08-1402',
  svc: 'CS0011',
  subscriber: 'أحمد علي الجبوري',
  status: 'تحقق قانوني',
  fee: 0,
  age: 'منذ يومين',
  officer: 'م. كرار',
  priority: 'standard'
}, {
  id: 'TQ-2026-08-1395',
  svc: 'CT0008',
  subscriber: 'مريم رياض الزبيدي',
  status: 'قيد التنفيذ',
  fee: 35000,
  age: 'منذ 3 أيام',
  officer: 'م. زينب',
  priority: 'standard'
}];

// Dashboard KPIs
window.KPIS = {
  todayCases: 84,
  todayDelta: 12,
  pending: 213,
  collected: 4810000,
  satisfaction: 94
};

// =============================================================
// ADVISORIES — official guidance, hazards, reviews, FAQs per service
// t: danger | review | scale | tip | faq
// =============================================================
window.ADVISORIES = {
  CS0001: [{
    t: 'review',
    x: 'تدقيق سند الملكية (الطابو) وكتاب التأييد إلزامي قبل قبول الطلب — مراجعة رسمية دقيقة'
  }, {
    t: 'scale',
    x: 'قابل للتوسع: نفس النموذج يغطي المجمعات السكنية والمشاريع الاستثمارية'
  }, {
    t: 'faq',
    x: 'هل تكفي إجازة البناء بدل كتاب ضريبة العقار؟ نعم — أحد المستندين يكفي'
  }],
  CS0011: [{
    t: 'review',
    x: 'حالات الورثة تتطلب قساماً شرعياً موثقاً وحضور أو تخويل جميع الورثة'
  }, {
    t: 'faq',
    x: 'هل يشترط تسديد الذمم قبل النقل؟ نعم — براءة ذمة المشترك السابق شرط'
  }],
  CT0001: [{
    t: 'danger',
    x: 'عمل ميداني على الشبكة الحية — يتطلب إذن سلامة وفصل تيار منسّقاً مع الصيانة'
  }, {
    t: 'review',
    x: 'كشف هندسي مشترك (فنية + خدمات) قبل احتساب الأجور النهائية'
  }],
  CT0002: [{
    t: 'danger',
    x: 'تغيير ركيزة محولة = إيقاف تغذية حي كامل — يحتاج موافقة قسم التشغيل وجدولة ليلية'
  }],
  CT0009: [{
    t: 'review',
    x: 'فحص المقياس يوثق بمحضر رسمي موقع من لجنة الفحص — لا يقبل الطعن بعد التوقيع'
  }, {
    t: 'faq',
    x: 'متى يكون الفحص مجانياً؟ إذا ثبت عطل المقياس من الشركة وليس من المشترك'
  }],
  CB0006: [{
    t: 'review',
    x: 'التقسيط فوق ٥ ملايين د.ع يتطلب موافقة مدير الفرع وكفيلاً موظفاً'
  }, {
    t: 'faq',
    x: 'كم الدفعة الأولى؟ ٢٥٪ من إجمالي الذمة كحد أدنى'
  }],
  CA0001: [{
    t: 'danger',
    x: 'حالات التلاعب تحوّل للجنة التجاوزات والقانونية — لا تتعامل مع المشترك مباشرة'
  }, {
    t: 'review',
    x: 'يحرر محضر ضبط أصولي بحضور شاهدين قبل أي إجراء'
  }],
  CA0002: [{
    t: 'danger',
    x: 'بلاغ خطر = أولوية قصوى: إشعار فرق الطوارئ فوراً قبل تسجيل الطلب'
  }]
};
window.ADVISORY_DEFAULTS = {
  CS: [{
    t: 'review',
    x: 'تحقق من هوية مقدم الطلب وصفته القانونية قبل التعبئة'
  }, {
    t: 'tip',
    x: 'أكمل الحقول أمام المشترك مباشرة — الحفظ التلقائي يحمي عملك'
  }],
  CT: [{
    t: 'danger',
    x: 'خدمة ذات طابع ميداني — التزم بإجراءات السلامة المعتمدة'
  }, {
    t: 'review',
    x: 'الأجور النهائية تحدد بعد الكشف الموقعي وليس عند التقديم'
  }],
  CB: [{
    t: 'review',
    x: 'طابق رقم الحساب مع القائمة الأصلية قبل أي إجراء مالي'
  }, {
    t: 'faq',
    x: 'هل يحتاج المشترك حضوراً شخصياً؟ يكفي وكيل بتخويل رسمي'
  }],
  CA: [{
    t: 'tip',
    x: 'سجّل البلاغ بدقة: الموقع، الوصف، ورقم هاتف المبلّغ للمتابعة'
  }, {
    t: 'review',
    x: 'الشكاوى الإدارية تحوّل لمسؤول المركز خلال ٢٤ ساعة كحد أقصى'
  }]
};
window.getAdvisories = function (code) {
  var svc = window.SERVICE_MAP[code];
  var spec = window.ADVISORIES[code] || [];
  var base = svc ? window.ADVISORY_DEFAULTS[svc.section] || [] : [];
  return spec.length ? spec : base;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_service_hub/changed_files/data.js", error: String((e && e.message) || e) }); }

// design_handoff_service_hub/changed_files/final.jsx
try { (() => {
// =============================================================
// FINAL Dashboard — Tadfuq Al-Khayr (approved direction)
// Order: Head → Departments (focus) → Services Express →
//        Tips Ticker (rotates per refresh) → Spotlight →
//        Stats + Activity at the bottom
// =============================================================

// shared globals (useState, Icon, DEPT_COLORS …) come from final_globals.jsx

function bars(seed, n = 14) {
  const a = [];
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    a.push(20 + s / 233280 * 80);
  }
  return a;
}

// =============================================================
// USER MENU — avatar dropdown (profile + admin entry)
// =============================================================
function UserMenu({
  nav
}) {
  const [open, setOpen] = useState(false);
  const [, force] = useState(0);
  useEffect(() => window.Auth && window.Auth.subscribe(() => force(n => n + 1)), []);
  const me = window.Auth && window.Auth.currentUser();
  const can = window.Auth ? window.Auth.can : () => false;
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  if (!me) return null; // login gate handles unauthenticated state

  const role = window.DB && window.DB.roles.get(me.roleId);
  const initial = (me.name || '?').trim().slice(0, 1);
  const roleLbl = role ? role.name : me.role || '—';
  const branch = me.branchId && window.DB ? window.DB.branches.get(me.branchId) : null;
  const dept = me.departmentId && window.DB ? window.DB.departments.get(me.departmentId) : null;
  const goAdmin = tab => {
    setOpen(false);
    nav && nav('admin', {
      tab
    });
  };
  const isSysAdmin = can('role.manage') && can('user.create');
  const showAdminEntry = can('user.read') || can('role.read') || can('settings.read') || can('audit.read');
  return /*#__PURE__*/React.createElement("div", {
    className: "f-usermenu",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    className: `f-avatar f-avatar--btn ${open ? 'is-on' : ''}`,
    onClick: () => setOpen(o => !o),
    "aria-haspopup": "menu",
    "aria-expanded": open,
    title: `${me.name} — ${roleLbl}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-avatar__txt"
  }, initial), isSysAdmin && /*#__PURE__*/React.createElement("span", {
    className: "f-avatar__badge",
    title: "\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0646\u0638\u0627\u0645"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield_person"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "f-umenu",
    role: "menu",
    dir: "rtl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-umenu__avatar"
  }, initial), /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__head-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__name"
  }, me.name), /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__role"
  }, isSysAdmin && /*#__PURE__*/React.createElement(Icon, {
    name: "shield_person"
  }), roleLbl, branch && /*#__PURE__*/React.createElement("span", {
    className: "f-umenu__sec"
  }, "\xB7 ", branch.name), dept && /*#__PURE__*/React.createElement("span", {
    className: "f-umenu__sec"
  }, "\xB7 ", dept.name)), me.email && /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__email"
  }, me.email))), showAdminEntry && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__sect-lbl"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "admin_panel_settings"
  }), " \u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629"), /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('overview')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "space_dashboard"
  }), /*#__PURE__*/React.createElement("span", null, "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629")), can('services.manage') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('services')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "apps"
  }), /*#__PURE__*/React.createElement("span", null, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A")), can('tips.manage') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('tips')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tips_and_updates"
  }), /*#__PURE__*/React.createElement("span", null, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0646\u0635\u0627\u0626\u062D")), can('user.read') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('users')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "group"
  }), /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646")), can('role.read') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('roles')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge"
  }), /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A")), can('settings.read') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('settings')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tune"
  }), /*#__PURE__*/React.createElement("span", null, "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0631\u0643\u0632")), can('audit.read') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('audit')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "history"
  }), /*#__PURE__*/React.createElement("span", null, "\u0633\u062C\u0644 \u0627\u0644\u062A\u062F\u0642\u064A\u0642"))), /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => {
      setOpen(false); /* TODO: open change-password modal */
      alert('غيّر كلمة المرور من قائمة "المستخدمون" بإعادة تعيين ذاتي قريباً.');
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key"
  }), /*#__PURE__*/React.createElement("span", null, "\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")), /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item f-umenu__item--danger",
    onClick: () => {
      window.Auth.signOut();
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logout"
  }), /*#__PURE__*/React.createElement("span", null, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C"))));
}

// =============================================================
// NOTIFICATIONS — bell + popover (real feedback, empty state)
// =============================================================
const SEED_NOTIFS = [{
  id: 'n1',
  icon: 'verified',
  tone: 'ok',
  title: 'تمت الموافقة على CS0001',
  body: 'اشتراك جديد — علي عبدالله حسين',
  age: 'قبل ٥ د'
}, {
  id: 'n2',
  icon: 'schedule',
  tone: 'warn',
  title: 'حالة بانتظار توقيعك',
  body: 'CT0003 — فحص مقياس · RS-014',
  age: 'قبل ٢٢ د'
}, {
  id: 'n3',
  icon: 'payments',
  tone: 'cb',
  title: 'تحصيل قائمة أجور',
  body: '٤٥٠٬٠٠٠ د.ع — وصل #٤٨١',
  age: 'قبل ساعة'
}];
function NotificationsBell() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(SEED_NOTIFS);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const unread = items.length;
  return /*#__PURE__*/React.createElement("div", {
    className: "f-notif",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-iconbtn",
    title: "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A",
    "aria-haspopup": "true",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "notifications"
  }), unread > 0 && /*#__PURE__*/React.createElement("span", {
    className: "f-notif__badge"
  }, unread)), open && /*#__PURE__*/React.createElement("div", {
    className: "f-notif__pop",
    role: "dialog",
    "aria-label": "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-notif__head"
  }, /*#__PURE__*/React.createElement("strong", null, "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A"), items.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "f-notif__clear",
    onClick: () => setItems([])
  }, "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621")), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "f-notif__empty"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "notifications_off"
  }), /*#__PURE__*/React.createElement("span", null, "\u0644\u0627 \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u062C\u062F\u064A\u062F\u0629"), /*#__PURE__*/React.createElement("small", null, "\u0633\u062A\u0638\u0647\u0631 \u0647\u0646\u0627 \u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0635\u064A\u0644 \u0648\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0627\u062A")) : /*#__PURE__*/React.createElement("div", {
    className: "f-notif__list"
  }, items.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    className: `f-notif__item f-notif__item--${n.tone}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-notif__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-notif__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-notif__title"
  }, n.title), /*#__PURE__*/React.createElement("span", {
    className: "f-notif__body"
  }, n.body)), /*#__PURE__*/React.createElement("span", {
    className: "f-notif__age"
  }, n.age))))));
}

// =============================================================
// TOP CHROME
// =============================================================
function TopChrome({
  tab,
  setTab,
  dark,
  setDark,
  onCmdK,
  nav
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "f-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-top__row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "f-brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-brand__mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-brand__name"
  }, /*#__PURE__*/React.createElement("strong", null, "\u062A\u062F\u0641\u0651\u0642 \u0627\u0644\u062E\u064A\u0631"), /*#__PURE__*/React.createElement("small", null, "RASAFA \xB7 CS HUB"))), /*#__PURE__*/React.createElement("span", {
    className: "f-top__sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "f-team"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-team__avatar"
  }, "\u0631\u0635"), /*#__PURE__*/React.createElement("span", null, "RS-014 \xB7 \u0627\u0644\u0646\u0636\u0627\u0644"), /*#__PURE__*/React.createElement(Icon, {
    name: "unfold_more"
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-top__push"
  }), /*#__PURE__*/React.createElement("button", {
    className: "f-search",
    onClick: onCmdK
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("span", {
    className: "f-search__input"
  }, "\u0627\u0628\u062D\u062B \u0628\u0631\u0642\u0645 \u0627\u0634\u062A\u0631\u0627\u0643\u060C \u0627\u0633\u0645\u060C \u0623\u0648 \u0631\u0642\u0645 \u062E\u062F\u0645\u0629\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "f-kbd"
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    className: "f-iconbtn",
    title: "\u0627\u0644\u0633\u062C\u0644"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "article"
  })), /*#__PURE__*/React.createElement(NotificationsBell, null), /*#__PURE__*/React.createElement("button", {
    className: "f-iconbtn f-morph",
    onClick: () => setDark(!dark),
    title: "\u0627\u0644\u0633\u0645\u0629"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: dark ? 'light_mode' : 'dark_mode'
  }), /*#__PURE__*/React.createElement("span", {
    className: "f-morph__lbl"
  }, dark ? 'نهاري' : 'ليلي')), /*#__PURE__*/React.createElement(UserMenu, {
    nav: nav
  })), /*#__PURE__*/React.createElement("nav", {
    className: "f-tabs"
  }, [{
    k: 'overview',
    l: 'نظرة عامة'
  }, {
    k: 'services',
    l: 'الخدمات'
  }, {
    k: 'cases',
    l: 'الحالات'
  }, {
    k: 'branches',
    l: 'الفروع'
  }, {
    k: 'reports',
    l: 'التقارير'
  }, {
    k: 'pricing',
    l: 'الأجور'
  }, {
    k: 'guide',
    l: 'الدليل'
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.k,
    className: `f-tab ${tab === t.k ? 'is-on' : ''}`,
    onClick: () => setTab(t.k)
  }, t.l))));
}

// =============================================================
// PAGE HEAD — compact
// =============================================================
function PageHead({
  onCmdK,
  nav
}) {
  const dateStr = new Date().toLocaleDateString('ar-IQ-u-ca-gregory', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "f-pagehead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-pagehead__intro"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-pagehead__date"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), dateStr, " \xB7 \u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0635\u0627\u0641\u0629 \xB7 \u0641\u0631\u0639 \u0627\u0644\u0646\u0636\u0627\u0644"), /*#__PURE__*/React.createElement("h1", null, "\u0623\u0647\u0644\u0627\u064B \u0623\u0633\u062A\u0627\u0630 \u0631\u0627\u0645\u0632 \u2014 ", /*#__PURE__*/React.createElement("em", null, "\u0627\u0628\u062F\u0623 \u0645\u0646 \u0627\u0644\u0642\u0633\u0645")), /*#__PURE__*/React.createElement("p", {
    className: "f-pagehead__lede"
  }, "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0623\u0631\u0628\u0639\u0629 \u0647\u064A \u0628\u0648\u0627\u0628\u062A\u0643 \u0644\u0643\u0644 \u062E\u062F\u0645\u0629. \u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645 \u0623\u0648 \u0627\u0628\u062F\u0623 \u062E\u062F\u0645\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0633\u0631\u064A\u0639\u0629.")), /*#__PURE__*/React.createElement("div", {
    className: "f-pagehead__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: () => nav('branches')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hub"
  }), " \u0646\u0637\u0627\u0642 \u0627\u0644\u062A\u063A\u0637\u064A\u0629"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file_download"
  }), " \u062A\u0635\u062F\u064A\u0631"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary",
    onClick: onCmdK
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt"
  }), " \u0627\u0628\u062F\u0623 \u0633\u0631\u064A\u0639 ", /*#__PURE__*/React.createElement("span", {
    className: "f-kbd"
  }, "\u2318K"))));
}

// =============================================================
// 1) DEPARTMENTS — the centerpiece
// =============================================================
function Departments({
  nav
}) {
  const todayBySection = {
    CS: 28,
    CT: 19,
    CB: 31,
    CA: 6
  };
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hub"
  })), "\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u062E\u062F\u0645\u0627\u062A"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, window.SERVICES.length, " \u062E\u062F\u0645\u0629 \u0645\u0648\u0632\u0651\u0639\u0629 \u0648\u0641\u0642 \u062F\u0644\u064A\u0644 \u0662\u0660\u0662\u0666 \u2014 \u0645\u0631\u0651\u0631 \u0623\u0648 \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0642\u0633\u0645 \u0644\u0641\u062A\u062D\u0647")), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--ghost f-btn--sm",
    onClick: () => nav('services')
  }, "\u0643\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "f-deck"
  }, window.SECTIONS.map((s, i) => {
    const services = window.SERVICES.filter(v => v.section === s.code);
    const sample = services.slice(0, 4);
    const today = todayBySection[s.code] ?? 0;
    const avgSla = Math.round(services.reduce((a, v) => a + (v.sla || 0), 0) / services.length);
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: s.code,
      role: "button",
      tabIndex: 0,
      className: `f-deck__panel ${isOpen ? 'is-open' : ''}`,
      style: {
        '--d-c': DEPT_COLORS[s.code]
      },
      onMouseEnter: () => setOpen(i),
      onFocus: () => setOpen(i),
      onClick: () => setOpen(i)
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-deck__wm",
      "aria-hidden": "true"
    }, s.code), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__head"
    }, /*#__PURE__*/React.createElement(window.SigBadge, {
      kind: s.code,
      size: 56,
      className: "f-deck__sig"
    }), /*#__PURE__*/React.createElement("span", {
      className: "f-deck__code"
    }, s.code)), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__mini"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-deck__mini-name"
    }, s.name), /*#__PURE__*/React.createElement("span", {
      className: "f-deck__mini-count"
    }, services.length, " \u062E\u062F\u0645\u0629")), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__full"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "f-deck__name"
    }, s.name), /*#__PURE__*/React.createElement("p", {
      className: "f-deck__blurb"
    }, s.blurb), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__chips"
    }, sample.map(sv => /*#__PURE__*/React.createElement("span", {
      key: sv.code,
      className: "f-deck__chip"
    }, sv.code)), services.length > 4 && /*#__PURE__*/React.createElement("span", {
      className: "f-deck__chip f-deck__chip--more"
    }, "+", services.length - 4)), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__foot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-deck__stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-deck__stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-n"
    }, services.length), /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-l"
    }, "\u062E\u062F\u0645\u0629")), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-n"
    }, today), /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-l"
    }, "\u0627\u0644\u064A\u0648\u0645")), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-n"
    }, avgSla, /*#__PURE__*/React.createElement("small", {
      style: {
        fontSize: '0.65em',
        marginInlineStart: 2
      }
    }, "\u064A")), /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-l"
    }, "\u0645\u062A\u0648\u0633\u0637"))), /*#__PURE__*/React.createElement("button", {
      className: "f-deck__cta syn__cta",
      onClick: e => {
        e.stopPropagation();
        nav('services', {
          section: s.code
        });
      }
    }, /*#__PURE__*/React.createElement("svg", {
      className: "arc",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "1",
      y: "1",
      width: "calc(100% - 2px)",
      height: "calc(100% - 2px)",
      rx: "14",
      pathLength: "100"
    })), /*#__PURE__*/React.createElement("span", {
      className: "syn__cta-roll"
    }, /*#__PURE__*/React.createElement("span", {
      className: "syn__cta-roll-stack"
    }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0641\u062A\u062D \u0627\u0644\u0642\u0633\u0645"), /*#__PURE__*/React.createElement("span", null, "\u062A\u0635\u0641\u0651\u062D \u0627\u0644\u062E\u062F\u0645\u0627\u062A"))), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_back"
    })))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-deck__dots",
    role: "tablist",
    "aria-label": "\u0627\u0644\u0623\u0642\u0633\u0627\u0645"
  }, window.SECTIONS.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.code,
    className: `f-deck__dot ${open === i ? 'is-on' : ''}`,
    style: {
      '--dd-c': DEPT_COLORS[s.code]
    },
    onClick: () => setOpen(i),
    "aria-label": s.name
  }))));
}

// =============================================================
// 2) SERVICES EXPRESS — most-used services, instant start
// =============================================================
function ServicesExpress({
  nav
}) {
  const top = useMemo(() => [...window.SERVICES].sort((a, b) => b.popularity - a.popularity).slice(0, 8), []);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt"
  })), "\u0627\u0628\u062F\u0623 \u062E\u062F\u0645\u0629 \u0645\u0628\u0627\u0634\u0631\u0629"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u0627\u0644\u0623\u0643\u062B\u0631 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0627\u064B \u0641\u064A \u0645\u0631\u0643\u0632\u0643 \u2014 \u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0644\u0644\u0641\u0648\u0631\u0645\u0629"))), /*#__PURE__*/React.createElement("div", {
    className: "f-express"
  }, top.map(svc => {
    const sec = window.SECTION_MAP[svc.section];
    return /*#__PURE__*/React.createElement("button", {
      key: svc.code,
      className: "f-exp",
      style: {
        '--e-c': DEPT_COLORS[svc.section]
      },
      onClick: () => nav('form', {
        code: svc.code
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-exp__ico"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: svc.icon
    })), /*#__PURE__*/React.createElement("span", {
      className: "f-exp__main"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-exp__name"
    }, svc.short || svc.name), /*#__PURE__*/React.createElement("span", {
      className: "f-exp__meta"
    }, svc.code, " \xB7 ", svc.sla, "\u064A \xB7 ", sec.name)), /*#__PURE__*/React.createElement("span", {
      className: "f-exp__go"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_back"
    })));
  })));
}

// =============================================================
// 3) TIPS TICKER — rotates per refresh, managed via Admin page
// =============================================================
function TipsTicker({
  nav
}) {
  const [version, setVersion] = useState(0);
  useEffect(() => window.DB && window.DB.tips.subscribe(() => setVersion(v => v + 1)), []);
  const tips = useMemo(() => {
    if (!window.DB) return [];
    return window.DB.tips.list().filter(t => t.active !== false);
  }, [version]);
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * Math.max(1, tips.length)));
  useEffect(() => {
    if (idx >= tips.length && tips.length > 0) setIdx(0);
  }, [tips.length, idx]);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (paused || tips.length === 0) return;
    setProgress(0);
    const id = setInterval(() => {
      setProgress(p => {
        const next = p + 100 / 100;
        if (next >= 100) {
          setIdx(i => (i + 1) % tips.length);
          return 0;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(id);
  }, [idx, paused, tips.length]);
  if (tips.length === 0) return null;
  const t = tips[idx] || tips[0];
  return /*#__PURE__*/React.createElement("section", {
    className: "f-ticker",
    style: {
      '--t-c': t.c
    },
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-ticker__rail",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-ticker__rail-fill",
    style: {
      height: progress + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-ticker__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.ico
  })), /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "f-ticker__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-ticker__toprow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-ticker__tag"
  }, t.tag), /*#__PURE__*/React.createElement("span", {
    className: "f-ticker__by"
  }, t.by)), /*#__PURE__*/React.createElement("div", {
    className: "f-ticker__title"
  }, t.title), /*#__PURE__*/React.createElement("p", {
    className: "f-ticker__body"
  }, t.body)), /*#__PURE__*/React.createElement("div", {
    className: "f-ticker__side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-ticker__nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-ticker__btn",
    onClick: () => setIdx(i => (i - 1 + tips.length) % tips.length),
    "aria-label": "\u0627\u0644\u0633\u0627\u0628\u0642"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right"
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-ticker__count"
  }, idx + 1, " / ", tips.length), /*#__PURE__*/React.createElement("button", {
    className: "f-ticker__btn",
    onClick: () => setIdx(i => (i + 1) % tips.length),
    "aria-label": "\u0627\u0644\u062A\u0627\u0644\u064A"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left"
  }))), window.Auth && window.Auth.can('tips.write') && /*#__PURE__*/React.createElement("button", {
    className: "f-ticker__add",
    onClick: () => nav && nav('admin', {
      tab: 'tips'
    }),
    title: "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0646\u0635\u0627\u0626\u062D"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "add"
  }), " \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0646\u0635\u0627\u0626\u062D")));
}

// =============================================================
// 4) SPOTLIGHT — rotating featured service
// =============================================================
const SCENES = [{
  c: 'var(--f-cs)'
}, {
  c: 'var(--f-ct)'
}, {
  c: 'var(--f-cb)'
}, {
  c: 'var(--f-ca)'
}];
function Spotlight({
  nav
}) {
  const top = useMemo(() => [...window.SERVICES].sort((a, b) => b.popularity - a.popularity).slice(0, 4), []);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const id = setInterval(() => {
      setProgress(p => {
        const next = p + 100 / 80;
        if (next >= 100) {
          setIdx(i => (i + 1) % top.length);
          return 0;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(id);
  }, [idx, paused, top.length]);
  const svc = top[idx];
  const sec = window.SECTION_MAP[svc.section];
  const scene = SCENES[idx % SCENES.length];
  return /*#__PURE__*/React.createElement("section", {
    className: "f-spot-wrap",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "auto_awesome"
  })), "\u062E\u062F\u0645\u0629 \u0645\u062E\u062A\u0627\u0631\u0629"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u062A\u062A\u0628\u062F\u0651\u0644 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0628\u064A\u0646 \u0623\u0643\u062B\u0631 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0627\u064B \u2014 \u062A\u0648\u0642\u0651\u0641 \u0639\u0646\u062F \u0627\u0644\u062A\u0645\u0631\u064A\u0631"))), /*#__PURE__*/React.createElement("article", {
    key: svc.code,
    className: "f-spot",
    style: {
      '--sp-c': scene.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-spot__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: svc.icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-spot__chips"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-spot__chip"
  }, "#", idx + 1, " \u0627\u0644\u0623\u0643\u062B\u0631 \u0637\u0644\u0628\u0627\u064B"), /*#__PURE__*/React.createElement("span", {
    className: "f-spot__chip"
  }, sec.name), /*#__PURE__*/React.createElement("span", {
    className: "f-spot__chip"
  }, svc.code)), /*#__PURE__*/React.createElement("h3", {
    className: "f-spot__name"
  }, svc.name), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "schedule"
  }), " \u0645\u062F\u0651\u0629 \u0645\u0639\u062A\u0627\u062F\u0629 ", svc.sla, " \u0623\u064A\u0627\u0645"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "local_fire_department"
  }), " \u0637\u0644\u0628 ", svc.popularity, "\u066A"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "payments"
  }), " ", svc.fixedPrice ? fmtIQD(svc.fixedPrice) : svc.priceNote || 'حسب الصنف'))), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__side"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-spot__cta syn__cta",
    onClick: () => nav('form', {
      code: svc.code
    })
  }, /*#__PURE__*/React.createElement("svg", {
    className: "arc",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "calc(100% - 2px)",
    height: "calc(100% - 2px)",
    rx: "22",
    pathLength: "100"
  })), /*#__PURE__*/React.createElement("span", {
    className: "syn__cta-roll"
  }, /*#__PURE__*/React.createElement("span", {
    className: "syn__cta-roll-stack"
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0639\u0628\u0626\u0629"), /*#__PURE__*/React.createElement("span", null, "\u0627\u0641\u062A\u062D \u0627\u0644\u0646\u0645\u0648\u0630\u062C"))), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back"
  })), /*#__PURE__*/React.createElement("button", {
    className: "f-spot__alt",
    onClick: () => nav('detail', {
      code: svc.code
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  }), " \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__progress"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-spot__progress-fill",
    style: {
      width: progress + '%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-spot__arrow",
    onClick: () => setIdx(i => (i - 1 + top.length) % top.length)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right"
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__dots"
  }, top.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.code,
    className: `f-spot__dot ${i === idx ? 'is-on' : ''}`,
    style: {
      '--dot-c': SCENES[i % SCENES.length].c
    },
    onClick: () => {
      setIdx(i);
      setProgress(0);
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "f-spot__arrow",
    onClick: () => setIdx(i => (i + 1) % top.length)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left"
  })), /*#__PURE__*/React.createElement("button", {
    className: "f-spot__pause",
    onClick: () => setPaused(p => !p)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: paused ? 'play_arrow' : 'pause'
  }), paused ? 'متوقف' : 'تلقائي')));
}

// =============================================================
// 5) BOTTOM — stats + activity + sidebar
// =============================================================
function Spark({
  values
}) {
  const max = Math.max(...values);
  return /*#__PURE__*/React.createElement("div", {
    className: "f-spark",
    "aria-hidden": "true"
  }, values.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: i === values.length - 1 ? 'last' : '',
    style: {
      height: Math.max(10, v / max * 100) + '%'
    }
  })));
}
function Stats() {
  const k = window.KPIS;
  const items = [{
    c: 'var(--f-cs)',
    ico: 'bolt',
    lbl: 'طلبات اليوم',
    val: k.todayCases,
    unit: 'طلب',
    d: '+12%',
    sub: 'منذ 09:00 صباحاً',
    seed: 3
  }, {
    c: 'var(--f-ct)',
    ico: 'pending_actions',
    lbl: 'قيد المعالجة',
    val: k.pending,
    unit: 'حالة',
    d: '+5%',
    sub: '23 بانتظار توقيعك',
    seed: 9
  }, {
    c: 'var(--f-cb)',
    ico: 'payments',
    lbl: 'محصّل اليوم',
    val: fmt(k.collected),
    unit: 'د.ع',
    d: '+8%',
    sub: 'من 38 معاملة',
    seed: 17
  }, {
    c: 'var(--f-ca)',
    ico: 'sentiment_satisfied',
    lbl: 'رضا المشتركين',
    val: k.satisfaction,
    unit: '%',
    d: '+2%',
    sub: 'على 124 تقييم',
    seed: 11
  }];
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "insights"
  })), "\u0627\u0644\u0625\u062D\u0635\u0627\u0621\u0627\u062A \u0648\u0627\u0644\u0646\u062A\u0627\u0626\u062C"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u064A\u0648\u0645 \u2014 \u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0639\u0645\u0642 \u0641\u064A \u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631"))), /*#__PURE__*/React.createElement("div", {
    className: "f-stats"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "f-stat",
    style: {
      '--st-c': it.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-stat__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-stat__lbl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-stat__lbl-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.ico
  })), it.lbl), /*#__PURE__*/React.createElement("span", {
    className: "f-stat__delta up"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_upward"
  }), it.d)), /*#__PURE__*/React.createElement("div", {
    className: "f-stat__val"
  }, it.val, /*#__PURE__*/React.createElement("span", {
    className: "f-stat__unit"
  }, it.unit)), /*#__PURE__*/React.createElement("div", {
    className: "f-stat__sub"
  }, it.sub), /*#__PURE__*/React.createElement(Spark, {
    values: bars(it.seed)
  })))));
}
function Activity() {
  return /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt"
  }), " \u0622\u062E\u0631 \u0627\u0644\u062D\u0631\u0643\u0629"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u062D\u064A\u0651\u0629 \u0641\u064A \u0645\u0631\u0643\u0632\u0643")), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--ghost f-btn--sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter_alt"
  }), " \u0641\u0644\u062A\u0631\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "f-feed"
  }, window.RECENT_CASES.map(c => {
    const svc = window.SERVICE_MAP[c.svc];
    const leadC = c.priority === 'urgent' ? 'var(--f-err)' : c.priority === 'vip' ? 'var(--f-warn)' : DEPT_COLORS[svc.section];
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "f-feed__row",
      style: {
        '--lead-c': leadC
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-feed__lead"
    }), /*#__PURE__*/React.createElement("div", {
      className: "f-feed__main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-feed__title"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-feed__code"
    }, svc.code), c.subscriber), /*#__PURE__*/React.createElement("div", {
      className: "f-feed__sub"
    }, c.id, " \xB7 ", svc.name)), /*#__PURE__*/React.createElement("span", {
      className: "f-feed__status"
    }, c.status), /*#__PURE__*/React.createElement("span", {
      className: "f-feed__time"
    }, c.age), /*#__PURE__*/React.createElement("span", {
      className: "f-feed__chev"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron_left"
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-card__foot"
  }, /*#__PURE__*/React.createElement("span", null, "\u0639\u0631\u0636 6 \u0645\u0646 213 \u062D\u0627\u0644\u0629 \u0646\u0634\u0637\u0629"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 \u2190")));
}
function Sidebar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "donut_small"
  }), " \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0634\u0647\u0631\u064A"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "2,481 \u062D\u0627\u0644\u0629 \xB7 94% \u0636\u0645\u0646 SLA"))), /*#__PURE__*/React.createElement("div", {
    className: "f-usage"
  }, window.SECTIONS.map(s => {
    const count = window.SERVICES.filter(x => x.section === s.code).length * 19;
    const pct = Math.min(100, Math.round(count / 600 * 100));
    return /*#__PURE__*/React.createElement("div", {
      key: s.code,
      className: "f-usage__row",
      style: {
        '--u-c': DEPT_COLORS[s.code]
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-usage__head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-usage__lbl"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-usage__code"
    }, s.code), s.name), /*#__PURE__*/React.createElement("span", {
      className: "f-usage__n"
    }, count)), /*#__PURE__*/React.createElement("div", {
      className: "f-usage__bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-usage__fill",
      style: {
        width: pct + '%'
      }
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "terminal"
  }), " \u0623\u0648\u0627\u0645\u0631 \u0633\u0631\u064A\u0639\u0629"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u0627\u0636\u063A\u0637 ", /*#__PURE__*/React.createElement("span", {
    className: "f-kbd"
  }, "\u2318K"), " \u0644\u0644\u0628\u062D\u062B \u0627\u0644\u0634\u0627\u0645\u0644"))), /*#__PURE__*/React.createElement("div", {
    className: "f-quicks"
  }, [{
    lbl: 'فتح حالة جديدة',
    kbd: 'N',
    kind: 'newcase',
    c: 'var(--f-cs)'
  }, {
    lbl: 'الانتقال للحالات',
    kbd: 'G I',
    kind: 'meter',
    c: 'var(--f-ct)'
  }, {
    lbl: 'الانتقال للخدمات',
    kbd: 'G S',
    kind: 'pole',
    c: 'var(--f-cb)'
  }, {
    lbl: 'تبديل السمة',
    kbd: '⌘J',
    kind: 'bill',
    c: 'var(--f-ca)'
  }].map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: `f-quick qik qik--${it.kind}`,
    style: {
      '--q-c': it.c,
      '--c-c': it.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-quick__ico"
  }, it.kind === 'newcase' && /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3 H17 L21 7 V22.5 H6 Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9.5",
    y1: "12",
    x2: "16.5",
    y2: "12",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("line", {
    className: "plusH",
    x1: "9.5",
    y1: "17",
    x2: "16.5",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    className: "plusV",
    x1: "13",
    y1: "13.5",
    x2: "13",
    y2: "20.5"
  })), it.kind === 'meter' && /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 16 A 10 10 0 0 1 23 16"
  }), /*#__PURE__*/React.createElement("line", {
    className: "tick",
    x1: "4.5",
    y1: "12.5",
    x2: "6",
    y2: "13.5"
  }), /*#__PURE__*/React.createElement("line", {
    className: "tick",
    x1: "13",
    y1: "6",
    x2: "13",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    className: "tick",
    x1: "21.5",
    y1: "12.5",
    x2: "20",
    y2: "13.5"
  }), /*#__PURE__*/React.createElement("line", {
    className: "needle",
    x1: "13",
    y1: "15",
    x2: "17",
    y2: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "s",
    cx: "13",
    cy: "15",
    r: "1.5"
  })), it.kind === 'pole' && /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "3",
    x2: "13",
    y2: "22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8 C 9 12, 17 12, 23 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6 L13 9 L20 6",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "spark s",
    cx: "3",
    cy: "8",
    r: "1.6"
  })), it.kind === 'bill' && /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3.5 H17 L20.5 7 V22.5 H6 Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9.5",
    y1: "11",
    x2: "16.5",
    y2: "11",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9.5",
    y1: "14.5",
    x2: "14.5",
    y2: "14.5",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("g", {
    className: "stamp"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "s",
    cx: "17",
    cy: "17",
    r: "4.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 17 L16.4 18.5 L19 15.8"
  })))), /*#__PURE__*/React.createElement("span", {
    className: "f-quick__lbl"
  }, it.lbl), /*#__PURE__*/React.createElement("span", {
    className: "f-kbd"
  }, it.kbd))))));
}

// =============================================================
// APP
// =============================================================
function App() {
  // -----------------------------------------------------------------
  // All hooks first (Rules of Hooks) — conditional returns later.
  // -----------------------------------------------------------------
  const [dark, setDark] = useState(() => localStorage.getItem('tq-final-dark') === '1');
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('tq-final-dark', dark ? '1' : '0');
  }, [dark]);

  // Auth state: re-render whenever Auth changes (login, logout, role change…)
  // and also when the users table changes (DB seed completes asynchronously
  // on first load, so the initial render may have no users yet).
  const [, setAuthTick] = useState(0);
  useEffect(() => {
    const unsubA = window.Auth && window.Auth.subscribe(() => setAuthTick(t => t + 1));
    const unsubU = window.DB && window.DB.users.subscribe(() => setAuthTick(t => t + 1));
    return () => {
      unsubA && unsubA();
      unsubU && unsubU();
    };
  }, []);
  const [route, setRoute] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('tq-f-route') || '{"name":"overview"}');
    } catch {
      return {
        name: 'overview'
      };
    }
  });
  useEffect(() => {
    localStorage.setItem('tq-f-route', JSON.stringify(route));
  }, [route]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.name, route.code, route.section]);
  const [spot, setSpot] = useState(false);
  useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSpot(s => !s);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // -----------------------------------------------------------------
  // Auth gate (after all hooks have been called)
  // -----------------------------------------------------------------
  const me = window.Auth && window.Auth.currentUser();
  if (!me) {
    return /*#__PURE__*/React.createElement(window.LoginPage, {
      onSuccess: () => setAuthTick(t => t + 1)
    });
  }
  if (me.mustChangePassword) {
    return /*#__PURE__*/React.createElement(window.ForceChangePassword, {
      onDone: () => setAuthTick(t => t + 1)
    });
  }
  // -----------------------------------------------------------------

  const nav = (name, params = {}) => {
    // Guard: admin routes require admin permission.
    if (name === 'admin' && !window.Auth.can('role.manage') && !window.Auth.can('user.read') && !window.Auth.can('settings.manage')) {
      setRoute({
        name: 'overview'
      });
      return;
    }
    setRoute({
      name,
      ...params
    });
  };
  const noop = () => setSpot(true);

  // top tabs map to routes
  const tab = ['services', 'detail', 'form'].includes(route.name) ? 'services' : route.name === 'cases' ? 'cases' : route.name === 'branches' ? 'branches' : route.name === 'pricing' ? 'pricing' : route.name === 'guide' ? 'guide' : route.name === 'reports' ? 'reports' : route.name === 'admin' ? 'admin' : 'overview';
  let page = null;
  if (route.name === 'services') page = /*#__PURE__*/React.createElement(window.ServicesPage, {
    nav: nav,
    section: route.section
  });else if (route.name === 'detail') page = /*#__PURE__*/React.createElement(window.ServiceDetailPage, {
    nav: nav,
    code: route.code
  });else if (route.name === 'form') page = /*#__PURE__*/React.createElement(window.FormPage, {
    nav: nav,
    code: route.code
  });else if (route.name === 'cases') page = /*#__PURE__*/React.createElement(window.CasesPage, {
    nav: nav
  });else if (route.name === 'branches') page = /*#__PURE__*/React.createElement(window.BranchesPage, {
    nav: nav
  });else if (route.name === 'pricing') page = /*#__PURE__*/React.createElement(window.PricingPage, {
    nav: nav
  });else if (route.name === 'guide') page = /*#__PURE__*/React.createElement(window.GuidePage, {
    nav: nav
  });else if (route.name === 'admin') page = /*#__PURE__*/React.createElement(window.AdminPage, {
    nav: nav,
    initialTab: route.tab
  });else if (route.name === 'reports') page = /*#__PURE__*/React.createElement("div", {
    className: "fp-enter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement("div", {
    className: "f-two"
  }, /*#__PURE__*/React.createElement(Activity, null), /*#__PURE__*/React.createElement(Sidebar, null)));else page = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onCmdK: noop,
    nav: nav
  }), /*#__PURE__*/React.createElement(Departments, {
    nav: nav
  }), /*#__PURE__*/React.createElement(ServicesExpress, {
    nav: nav
  }), /*#__PURE__*/React.createElement(TipsTicker, {
    nav: nav
  }), /*#__PURE__*/React.createElement(Spotlight, {
    nav: nav
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement("div", {
    className: "f-two"
  }, /*#__PURE__*/React.createElement(Activity, null), /*#__PURE__*/React.createElement(Sidebar, null)));
  return /*#__PURE__*/React.createElement("div", {
    className: "f-shell"
  }, /*#__PURE__*/React.createElement(TopChrome, {
    tab: tab,
    setTab: k => nav(k),
    dark: dark,
    setDark: setDark,
    onCmdK: noop,
    nav: nav
  }), /*#__PURE__*/React.createElement("main", {
    className: "f-page"
  }, page), /*#__PURE__*/React.createElement(window.SpotlightOverlay, {
    open: spot,
    onClose: () => setSpot(false),
    nav: nav
  }), /*#__PURE__*/React.createElement(SignatureFooter, null));
}

// =============================================================
// SIGNATURE FOOTER — distinctive credits strip
// =============================================================
function SignatureFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "f-sigfoot",
    role: "contentinfo",
    "aria-label": "Designed and developed by Hussein Ali"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-sigfoot__rule",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__rule-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__rule-mark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__rule-diamond"
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__rule-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-sigfoot__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-sigfoot__brand",
    "aria-label": "\u062C\u0647\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__brand-c"
  }, "\xA9"), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__brand-y"
  }, "2026"), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__brand-bar",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__brand-name"
  }, "\u062A\u062F\u0641\u0651\u0642 \u0627\u0644\u062E\u064A\u0631"), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__brand-sub"
  }, "\u0643\u0647\u0631\u0628\u0627\u0621 \u0627\u0644\u0631\u0635\u0627\u0641\u0629 \xB7 \u0641\u0631\u0639 \u0627\u0644\u0646\u0636\u0627\u0644")), /*#__PURE__*/React.createElement("div", {
    className: "f-sigfoot__credit"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__credit-eyebrow"
  }, "Designed & Developed"), /*#__PURE__*/React.createElement("h6", {
    className: "f-sigfoot__credit-name"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__credit-name-en"
  }, "Hussein\xA0Ali")), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__credit-meta"
  }, /*#__PURE__*/React.createElement("span", null, "Software \xB7 Design"), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__credit-meta-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, "Baghdad \u2014 Iraq")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(window.ErrorBoundary, null, /*#__PURE__*/React.createElement(window.ToastProvider, null, /*#__PURE__*/React.createElement(App, null))));
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_service_hub/changed_files/final.jsx", error: String((e && e.message) || e) }); }

// design_handoff_service_hub/changed_files/final_form.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// =============================================================
// FINAL — Form Page (schema-driven, covers all 31 services)
// Tabs: احترافية (smart form) / أصلية (faithful paper)
// Reads window.SERVICE_FORMS[code] from final_forms_data.js
// =============================================================

// animated number
function useCountUp(target) {
  const [val, setVal] = useState(target);
  const prev = useRef(target);
  useEffect(() => {
    const from = prev.current;
    prev.current = target;
    if (from === target) return;
    const start = performance.now();
    const dur = 520;
    let raf;
    const tick = now => {
      const p = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(from + (target - from) * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return val;
}

// =============================================================
// Generic field — required marker, blur validation, autofill +
// keyboard friendly (autocomplete / inputmode / type / enterkeyhint)
// =============================================================
function ffA11y(f) {
  const k = f.k || '';
  const map = {
    name: {
      autoComplete: 'name',
      inputMode: 'text'
    },
    subName: {
      autoComplete: 'name',
      inputMode: 'text'
    },
    phone: {
      autoComplete: 'tel',
      inputMode: 'tel',
      type: 'tel'
    },
    email: {
      autoComplete: 'email',
      inputMode: 'email',
      type: 'email'
    },
    nid: {
      autoComplete: 'off',
      inputMode: 'numeric'
    },
    housing: {
      autoComplete: 'off',
      inputMode: 'numeric'
    },
    meterNo: {
      autoComplete: 'off',
      inputMode: 'numeric'
    },
    acct: {
      autoComplete: 'off',
      inputMode: 'text'
    }
  };
  const base = map[k] || {};
  if (f.type === 'number') base.inputMode = base.inputMode || 'numeric';
  return base;
}
function FF_Field({
  f,
  value,
  onChange,
  onBlur,
  error,
  required
}) {
  const reqd = required != null ? required : !!f.required;
  const cls = `ff-field${f.full ? ' ff-field--full' : ''}${f.mono ? ' ff-field--mono' : ''}${error ? ' is-invalid' : ''}`;
  const Err = window.FieldError;
  const errId = error ? `err-${f.k}` : undefined;
  const a11y = ffA11y(f);
  const Label = /*#__PURE__*/React.createElement("label", {
    htmlFor: `f-${f.k}`
  }, f.l, f.unit && /*#__PURE__*/React.createElement("span", {
    className: "ff-field__unit"
  }, " (", f.unit, ")"), reqd && /*#__PURE__*/React.createElement("span", {
    className: "ff-field__req",
    "aria-hidden": "true"
  }, " *"));
  const common = {
    id: `f-${f.k}`,
    name: f.k,
    value: value || '',
    onChange: e => onChange(e.target.value),
    onBlur: () => onBlur && onBlur(f),
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': errId,
    'aria-required': reqd || undefined
  };
  if (f.type === 'textarea') {
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      "data-fk": f.k
    }, Label, /*#__PURE__*/React.createElement("textarea", _extends({}, common, {
      rows: 3,
      placeholder: f.ph || '',
      enterKeyHint: "enter"
    })), /*#__PURE__*/React.createElement(Err, {
      msg: error,
      id: errId
    }));
  }
  if (f.type === 'select') {
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      "data-fk": f.k
    }, Label, /*#__PURE__*/React.createElement("select", common, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u2014 \u0627\u062E\u062A\u0631 \u2014"), f.options.map(o => /*#__PURE__*/React.createElement("option", {
      key: o,
      value: o
    }, o))), /*#__PURE__*/React.createElement(Err, {
      msg: error,
      id: errId
    }));
  }
  if (f.type === 'date') {
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      "data-fk": f.k
    }, Label, /*#__PURE__*/React.createElement("input", _extends({
      type: "date"
    }, common, {
      autoComplete: "off"
    })), /*#__PURE__*/React.createElement(Err, {
      msg: error,
      id: errId
    }));
  }
  if (f.type === 'number') {
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      "data-fk": f.k
    }, Label, /*#__PURE__*/React.createElement("input", _extends({
      type: "number"
    }, common, {
      placeholder: f.ph || '',
      max: f.max,
      dir: "ltr",
      style: {
        textAlign: 'start'
      },
      inputMode: a11y.inputMode,
      enterKeyHint: "next",
      autoComplete: "off"
    })), /*#__PURE__*/React.createElement(Err, {
      msg: error,
      id: errId
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    "data-fk": f.k
  }, Label, /*#__PURE__*/React.createElement("input", _extends({
    type: a11y.type || 'text'
  }, common, {
    placeholder: f.ph || '',
    dir: f.mono ? 'ltr' : 'auto',
    style: f.mono ? {
      textAlign: 'start'
    } : null,
    inputMode: a11y.inputMode,
    autoComplete: a11y.autoComplete || 'off',
    enterKeyHint: "next"
  })), /*#__PURE__*/React.createElement(Err, {
    msg: error,
    id: errId
  }));
}

// =============================================================
// Section renderers
// =============================================================
function FF_Rows({
  rows,
  form,
  set,
  errors,
  onBlur,
  isRequired
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, rows.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    className: "ff-row",
    style: {
      '--cols': row.length
    }
  }, row.map(f => /*#__PURE__*/React.createElement(FF_Field, {
    key: f.k,
    f: f,
    value: form[f.k],
    onChange: v => set(f.k, v),
    onBlur: onBlur,
    required: isRequired ? isRequired(f) : f.required,
    error: errors && errors[f.k]
  })))));
}
function FF_Classification({
  sec,
  form,
  set
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ff-seg"
  }, sec.classes.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: `ff-seg__opt ${form.cls === c ? 'is-on' : ''}`,
    onClick: () => set('cls', c)
  }, c))), sec.phases && /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0642\u0648\u0629 \u0627\u0644\u062A\u063A\u0630\u064A\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 (\u0646\u0648\u0639 \u0627\u0644\u0631\u0628\u0637)"), /*#__PURE__*/React.createElement("div", {
    className: "ff-seg"
  }, sec.phases.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: `ff-seg__opt ${form.phase === p ? 'is-on' : ''}`,
    onClick: () => set('phase', p)
  }, p)))));
}
function FF_ClassChange({
  sec,
  form,
  set
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      '--cols': 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0645\u0646"), /*#__PURE__*/React.createElement("div", {
    className: "ff-seg ff-seg--wrap"
  }, sec.from.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: `ff-seg__opt ${form.cls_from === c ? 'is-on' : ''}`,
    onClick: () => set('cls_from', c)
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0625\u0644\u0649"), /*#__PURE__*/React.createElement("div", {
    className: "ff-seg ff-seg--wrap"
  }, sec.to.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: `ff-seg__opt ${form.cls_to === c ? 'is-on' : ''}`,
    onClick: () => set('cls_to', c)
  }, c)))));
}
function FF_ReasonSeg({
  sec,
  form,
  set,
  fieldKey = 'reasonChoice'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-seg ff-seg--wrap"
  }, sec.options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    className: `ff-seg__opt ${form[fieldKey] === o ? 'is-on' : ''}`,
    onClick: () => set(fieldKey, o)
  }, o)));
}
function FF_Urgency({
  sec,
  form,
  set
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-seg ff-seg--wrap"
  }, sec.levels.map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: `ff-seg__opt ff-urgency-${i} ${form.urgency === l ? 'is-on' : ''}`,
    onClick: () => set('urgency', l)
  }, l)));
}
function FF_Documents({
  list,
  form,
  set,
  docFiles,
  setDocFiles
}) {
  const visible = list.filter(d => !d.for || (d.for + '').split('|').includes(form.cls));
  const pickFile = async (key, docName) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,.pdf';
    input.onchange = async () => {
      const f = input.files && input.files[0];
      if (!f) return;
      if (f.size > 8 * 1024 * 1024) {
        alert(`${f.name} يتجاوز 8MB — اختر ملفاً أصغر.`);
        return;
      }
      const buf = await window.readFileAsArrayBuffer(f);
      const preview = f.type.startsWith('image/') ? await window.readFileAsDataURL(f) : null;
      setDocFiles(prev => ({
        ...prev,
        [key]: {
          name: f.name,
          size: f.size,
          type: f.type,
          _buf: buf,
          _preview: preview,
          label: docName
        }
      }));
      // Auto-tick the document checkbox
      set('docs', {
        ...(form.docs || {}),
        [docName]: true
      });
    };
    input.click();
  };
  const removeFile = (key, docName) => {
    setDocFiles(prev => {
      const n = {
        ...prev
      };
      delete n[key];
      return n;
    });
    set('docs', {
      ...(form.docs || {}),
      [docName]: false
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-docs"
  }, visible.map((d, i) => {
    const key = `doc_${i}`;
    const ticked = !!(form.docs || {})[d.n];
    const file = docFiles && docFiles[key];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `ff-doc ${ticked ? 'is-on' : ''} ${file ? 'has-file' : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "ff-doc__main",
      onClick: () => !file && set('docs', {
        ...(form.docs || {}),
        [d.n]: !ticked
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__box"
    }, ticked && /*#__PURE__*/React.createElement(Icon, {
      name: "check"
    })), /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__text"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__name"
    }, d.n), d.opt && /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__opt"
    }, d.opt))), file ? /*#__PURE__*/React.createElement("div", {
      className: "ff-doc__file"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__filebadge"
    }, file._preview ? /*#__PURE__*/React.createElement("img", {
      src: file._preview,
      alt: ""
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: file.type === 'application/pdf' ? 'picture_as_pdf' : 'description'
    })), /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__filemeta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__filename",
      title: file.name
    }, file.name), /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__filesize"
    }, (file.size / 1024).toFixed(0), " KB")), /*#__PURE__*/React.createElement("button", {
      className: "ff-doc__btn ff-doc__btn--replace",
      onClick: () => pickFile(key, d.n),
      title: "\u0627\u0633\u062A\u0628\u062F\u0627\u0644"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "swap_horiz"
    })), /*#__PURE__*/React.createElement("button", {
      className: "ff-doc__btn ff-doc__btn--remove",
      onClick: () => removeFile(key, d.n),
      title: "\u062D\u0630\u0641"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "close"
    }))) : /*#__PURE__*/React.createElement("button", {
      className: "ff-doc__upload",
      onClick: () => pickFile(key, d.n)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload_file"
    }), /*#__PURE__*/React.createElement("span", null, "\u0625\u0631\u0641\u0627\u0642")));
  }), /*#__PURE__*/React.createElement("p", {
    className: "ff-docs__hint"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  }), "\u0627\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0623\u0648 PDF \u0644\u0643\u0644 \u0645\u0633\u062A\u0646\u062F \u2014 \u064A\u064F\u0636\u0627\u0641 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0644\u0644\u0640 PDF \u0627\u0644\u0645\u0648\u062D\u0651\u062F \u0639\u0646\u062F \u0627\u0644\u062A\u0635\u062F\u064A\u0631."));
}

// =============================================================
// Fee computation
// =============================================================
function computeFees(fees, form) {
  if (!fees || fees.kind === 'none') return {
    rows: [],
    total: 0,
    note: ''
  };
  if (fees.kind === 'fixed') {
    return {
      rows: [{
        k: 'fixed',
        l: fees.label,
        amt: fees.amount
      }],
      total: fees.amount
    };
  }
  if (fees.kind === 'inspection_plus_meter') {
    const cls = form.cls || 'منزلي';
    const insp = fees.base[cls] || fees.base['منزلي'];
    const rows = [{
      k: 'insp',
      l: `أجور الكشف (${cls})`,
      amt: insp
    }];
    let total = insp;
    fees.addons.forEach(a => {
      const on = !!form['fee_' + a.k];
      rows.push({
        k: 'fee_' + a.k,
        l: a.l,
        amt: a.amount,
        toggle: true,
        on
      });
      if (on) total += a.amount;
    });
    return {
      rows,
      total
    };
  }
  if (fees.kind === 'inspection_only') {
    const cls = form.cls_to || form.cls || Object.keys(fees.base)[0];
    const amt = fees.base[cls] || 0;
    return {
      rows: [{
        k: 'insp',
        l: fees.label + ' (' + cls + ')',
        amt
      }],
      total: amt
    };
  }
  if (fees.kind === 'reconnect') {
    const k = form.reconnectKind || Object.keys(fees.table)[0];
    const amt = fees.table[k];
    return {
      rows: [{
        k: 'rec',
        l: 'أجور إعادة التيار — ' + k,
        amt
      }],
      total: amt,
      selector: {
        label: 'نوع وقطع التيار',
        key: 'reconnectKind',
        options: Object.keys(fees.table),
        current: k
      }
    };
  }
  if (fees.kind === 'inspection_table') {
    const k = form.reasonChoice || Object.keys(fees.table)[0];
    const amt = fees.table[k];
    return {
      rows: [{
        k: 'insp',
        l: k,
        amt
      }],
      total: amt
    };
  }
  if (fees.kind === 'meter_swap') {
    const k = form.meterSwapKind || Object.keys(fees.table)[0];
    const amt = fees.table[k];
    return {
      rows: [{
        k: 'sw',
        l: 'تبديل المقياس — ' + k,
        amt
      }],
      total: amt,
      selector: {
        label: 'نوع التبديل',
        key: 'meterSwapKind',
        options: Object.keys(fees.table),
        current: k
      }
    };
  }
  if (fees.kind === 'installment') {
    const total = +form.totalDebt || 0;
    const down = +form.downPayment || 0;
    const minDown = Math.ceil(total * fees.minDownPct / 100);
    const months = Math.min(+form.months || 0, fees.monthlyCap);
    const monthly = months > 0 ? Math.round((total - down) / months) : 0;
    return {
      rows: [{
        k: 'total',
        l: 'إجمالي المديونية',
        amt: total
      }, {
        k: 'down',
        l: 'الدفعة الأولى المقترحة',
        amt: down
      }, {
        k: 'min',
        l: `الحد الأدنى المطلوب (${fees.minDownPct}٪)`,
        amt: minDown,
        note: down >= minDown ? 'مقبول' : 'غير كافٍ'
      }],
      total: monthly,
      totalLabel: months > 0 ? `قسط شهري × ${months}` : 'القسط الشهري',
      note: months > fees.monthlyCap ? `الحد الأقصى ${fees.monthlyCap} أشهر` : ''
    };
  }
  if (fees.kind === 'temp_daily') {
    const days = Math.max(0, Math.ceil((new Date(form.toDate) - new Date(form.fromDate)) / 86400000) || 0);
    const cls = form.cls || 'تجاري';
    const insp = fees.inspectionFromClass && fees.inspectionFromClass[cls] || 0;
    return {
      rows: [{
        k: 'insp',
        l: `أجور الكشف (${cls})`,
        amt: insp
      }, {
        k: 'days',
        l: `مصروفات يومية × ${days} يوم`,
        amt: fees.daily * days
      }],
      total: insp + fees.daily * days
    };
  }
  if (fees.kind === 'cable_length') {
    return {
      rows: [],
      total: 0,
      note: fees.note || 'يُحدّد بعد الكشف الموقعي'
    };
  }
  if (fees.kind === 'note') {
    return {
      rows: [],
      total: 0,
      note: fees.text
    };
  }
  return {
    rows: [],
    total: 0
  };
}

// =============================================================
// FORM PAGE
// =============================================================
function FormPage({
  nav,
  code
}) {
  const svc = window.SERVICE_MAP[code] || window.SERVICE_MAP['CS0001'];
  const sec = window.SECTION_MAP[svc.section];
  const schema = window.getFormSchema(svc.code);
  const storageKey = 'tq-form-' + svc.code;
  const toast = window.useToast ? window.useToast() : null;
  const [tab, setTab] = useState('pro');
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [docFiles, setDocFiles] = useState({});
  // wizard + submission state
  const [step, setStep] = useState(0);
  const [visited, setVisited] = useState({
    0: true
  });
  const [submitState, setSubmitState] = useState('idle'); // idle | submitting | success | error
  const [submitMsg, setSubmitMsg] = useState('');
  const [refId, setRefId] = useState('');
  const initial = () => ({
    docs: {},
    cls: 'منزلي',
    phase: 'أحادي الطور'
  });
  const [form, setForm] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || 'null') || initial();
    } catch {
      return initial();
    }
  });
  useEffect(() => {
    setSaving(true);
    const id = setTimeout(() => {
      localStorage.setItem(storageKey, JSON.stringify(form));
      setSaving(false);
      setSavedAt(new Date());
    }, 600);
    return () => clearTimeout(id);
  }, [form, storageKey]);
  const set = (k, v) => {
    setForm(f => ({
      ...f,
      [k]: v
    }));
    if (errors[k]) setErrors(es => {
      const n = {
        ...es
      };
      delete n[k];
      return n;
    });
  };

  // ---- which fields are required ----
  const REQUIRED_KEYS = new Set(['name', 'phone', 'nid', 'subId']);
  const isRequired = f => !!f.required || REQUIRED_KEYS.has(f.k);

  // ---- validators for a single field ----
  const fieldRules = f => {
    const list = [];
    if (isRequired(f)) list.push(window.Validate.required);
    if (f.k === 'phone') list.push(window.Validate.phoneIQ);
    if (f.k === 'nid') list.push(window.Validate.digits);
    if (f.type === 'number') list.push(window.Validate.digits);
    return list;
  };

  // validate one field live (on blur)
  const validateField = f => {
    const fns = fieldRules(f);
    let msg = '';
    for (const fn of fns) {
      msg = fn(form[f.k]);
      if (msg) break;
    }
    setErrors(es => {
      const n = {
        ...es
      };
      if (msg) n[f.k] = msg;else delete n[f.k];
      return n;
    });
    return msg;
  };

  // ---- step model: one step per schema section + a final review step ----
  const steps = useMemo(() => {
    const arr = (schema.sections || []).map((sx, i) => ({
      type: 'section',
      sx,
      i
    }));
    arr.push({
      type: 'review'
    });
    return arr;
  }, [schema]);
  const lastStep = steps.length - 1;

  // collect the validatable field metas inside a section
  const sectionFields = sx => {
    const fs = [];
    (sx.rows || []).forEach(row => row.forEach(f => fs.push(f)));
    return fs;
  };

  // validate every required field in a given step; returns errors object
  const validateStep = idx => {
    const st = steps[idx];
    const errs = {};
    if (st && st.type === 'section') {
      sectionFields(st.sx).forEach(f => {
        const fns = fieldRules(f);
        for (const fn of fns) {
          const m = fn(form[f.k]);
          if (m) {
            errs[f.k] = m;
            break;
          }
        }
      });
    }
    if (st && st.type === 'review' && schema.declaration && !form.declAgreed) {
      errs.declAgreed = 'يلزم الموافقة على الإقرار';
    }
    return errs;
  };
  const focusFirstError = errs => {
    const firstKey = Object.keys(errs)[0];
    if (!firstKey) return;
    setTimeout(() => {
      const el = document.querySelector(`[data-fk="${firstKey}"]`);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        const inp = el.querySelector('input,select,textarea');
        inp && inp.focus();
      }
    }, 60);
  };
  const goToStep = idx => {
    setStep(idx);
    setVisited(v => ({
      ...v,
      [idx]: true
    }));
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const next = () => {
    const errs = validateStep(step);
    if (Object.keys(errs).length) {
      setErrors(es => ({
        ...es,
        ...errs
      }));
      setShowErrors(true);
      toast && toast.push({
        kind: 'error',
        title: 'أكمل الحقول المطلوبة',
        body: `${Object.keys(errs).length} حقل في هذه الخطوة بحاجة لمراجعة.`
      });
      focusFirstError(errs);
      return;
    }
    if (step < lastStep) goToStep(step + 1);
  };
  const back = () => {
    if (step > 0) goToStep(step - 1);
  };

  // simulate the request to the department system
  const submitRequest = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (navigator.onLine === false) reject(new Error('لا يوجد اتصال بالشبكة — تحقّق ثم أعد المحاولة'));else resolve('TQ-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 90000) + 10000));
    }, 1300);
  });
  const submit = async () => {
    // validate ALL steps before sending
    let firstBad = -1;
    const allErrs = {};
    for (let i = 0; i < steps.length; i++) {
      const e = validateStep(i);
      if (Object.keys(e).length && firstBad === -1) firstBad = i;
      Object.assign(allErrs, e);
    }
    if (Object.keys(allErrs).length) {
      setErrors(allErrs);
      setShowErrors(true);
      toast && toast.push({
        kind: 'error',
        title: 'لا يمكن إرسال الطلب',
        body: `${Object.keys(allErrs).length} حقل بحاجة مراجعة قبل الإرسال.`
      });
      if (firstBad >= 0) goToStep(firstBad);
      focusFirstError(allErrs);
      return;
    }
    setSubmitState('submitting');
    try {
      const id = await submitRequest();
      setRefId(id);
      setSubmitState('success');
      toast && toast.push({
        kind: 'success',
        title: 'تم استلام الطلب',
        body: `رقم المتابعة ${id}`
      });
    } catch (e) {
      setSubmitMsg(e.message || 'تعذّر الإرسال');
      setSubmitState('error');
      toast && toast.push({
        kind: 'error',
        title: 'تعذّر إرسال الطلب',
        body: e.message
      });
    }
  };
  const resetForm = () => {
    setForm(initial());
    setErrors({});
    setShowErrors(false);
    setConfirmReset(false);
    setAttachments([]);
    setDocFiles({});
    setStep(0);
    setVisited({
      0: true
    });
    setSubmitState('idle');
    toast && toast.push({
      kind: 'info',
      title: 'تم إعادة تهيئة النموذج'
    });
  };

  // Merge per-document files into the unified attachments stream
  const allAttachments = () => {
    const docArr = Object.entries(docFiles).map(([k, f]) => ({
      ...f,
      name: f.label + ' — ' + f.name
    }));
    return [...docArr, ...attachments];
  };
  const onPickFiles = async e => {
    const files = Array.from(e.target.files || []);
    e.target.value = '';
    const next = [];
    for (const f of files) {
      if (f.size > 8 * 1024 * 1024) {
        toast && toast.push({
          kind: 'warn',
          title: 'ملف كبير',
          body: `${f.name} > 8MB — تم تجاهله`
        });
        continue;
      }
      try {
        const buf = await window.readFileAsArrayBuffer(f);
        const url = f.type.startsWith('image/') ? await window.readFileAsDataURL(f) : null;
        next.push({
          name: f.name,
          type: f.type,
          size: f.size,
          _buf: buf,
          _preview: url
        });
      } catch (err) {
        console.error(err);
      }
    }
    setAttachments(a => [...a, ...next]);
  };
  const removeAttachment = i => setAttachments(a => a.filter((_, j) => j !== i));
  const feeResult = computeFees(schema.fees, form);
  const total = useCountUp(feeResult.total || 0);

  // ---- step presentation helpers ----
  const stepMeta = steps.map((s, i) => s.type === 'review' ? {
    label: 'المراجعة والإرسال',
    icon: 'fact_check'
  } : {
    label: s.sx.title || `القسم ${i + 1}`,
    icon: s.sx.icon || 'edit'
  });
  const current = steps[step];
  const stepErrCount = idx => Object.keys(validateStep(idx)).length;

  // review summary — labelled values the officer entered
  const reviewRows = () => {
    const out = [];
    (schema.sections || []).forEach(sx => (sx.rows || []).forEach(row => row.forEach(f => {
      if (form[f.k]) out.push({
        l: f.l,
        v: form[f.k]
      });
    })));
    if (form.cls) out.push({
      l: 'الصنف',
      v: form.cls
    });
    return out;
  };
  const renderSectionBody = sx => /*#__PURE__*/React.createElement("div", {
    className: "ff-section__body"
  }, sx.rows && /*#__PURE__*/React.createElement(FF_Rows, {
    rows: sx.rows,
    form: form,
    set: set,
    errors: showErrors ? errors : null,
    onBlur: validateField,
    isRequired: isRequired
  }), sx.kind === 'classification' && /*#__PURE__*/React.createElement(FF_Classification, {
    sec: sx,
    form: form,
    set: set
  }), sx.kind === 'class_change' && /*#__PURE__*/React.createElement(FF_ClassChange, {
    sec: sx,
    form: form,
    set: set
  }), sx.kind === 'reason_seg' && /*#__PURE__*/React.createElement(FF_ReasonSeg, {
    sec: sx,
    form: form,
    set: set
  }), sx.kind === 'urgency' && /*#__PURE__*/React.createElement(FF_Urgency, {
    sec: sx,
    form: form,
    set: set
  }), sx.kind === 'documents' && /*#__PURE__*/React.createElement(FF_Documents, {
    list: sx.list,
    form: form,
    set: set,
    docFiles: docFiles,
    setDocFiles: setDocFiles
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-enter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fp-back",
    onClick: () => nav('detail', {
      code: svc.code
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward"
  }), " ", svc.name), /*#__PURE__*/React.createElement("div", {
    className: "ff-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit_document"
  })), "\u0646\u0645\u0648\u0630\u062C ", svc.code, " \u2014 ", svc.name), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u0627\u0644\u0646\u0633\u062E\u062A\u0627\u0646 \u0645\u062A\u0637\u0627\u0628\u0642\u062A\u0627\u0646 \u0628\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u2014 \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0644\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u0623\u0635\u0644\u064A\u0629 \u0644\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0631\u0633\u0645\u064A\u0629")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `ff-autosave ${saving ? 'is-saving' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-autosave__dot"
  }), saving ? 'يحفظ…' : savedAt ? 'محفوظ تلقائياً' : 'جاهز'), /*#__PURE__*/React.createElement("div", {
    className: "ff-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: `ff-tab ${tab === 'pro' ? 'is-on' : ''}`,
    onClick: () => setTab('pro')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "auto_awesome"
  }), " \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629"), /*#__PURE__*/React.createElement("button", {
    className: `ff-tab ${tab === 'orig' ? 'is-on' : ''}`,
    onClick: () => setTab('orig')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "description"
  }), " \u0627\u0644\u0623\u0635\u0644\u064A\u0629")))), tab === 'orig' ? /*#__PURE__*/React.createElement(window.OfficialPaper, {
    svc: svc,
    schema: schema,
    form: form,
    attachments: allAttachments()
  }) : submitState === 'success' ?
  /*#__PURE__*/
  /* ─────────── SUCCESS ─────────── */
  React.createElement("div", {
    className: "ff-result ff-result--ok fp-enter"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-result__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle"
  })), /*#__PURE__*/React.createElement("h3", null, "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D"), /*#__PURE__*/React.createElement("p", null, "\u0633\u064F\u062C\u0650\u0651\u0644 \u0637\u0644\u0628 \xAB", svc.name, "\xBB \u0648\u062D\u064F\u0648\u0650\u0651\u0644 \u0625\u0644\u0649 ", sec.name, ". \u0627\u062D\u062A\u0641\u0638 \u0628\u0631\u0642\u0645 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629:"), /*#__PURE__*/React.createElement("div", {
    className: "ff-result__ref"
  }, refId), /*#__PURE__*/React.createElement("div", {
    className: "ff-result__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "schedule"
  }), " \u0627\u0644\u0645\u062F\u0651\u0629 \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629 ", svc.sla, " \u0623\u064A\u0627\u0645"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "place"
  }), " \u0627\u0644\u0631\u0635\u0627\u0641\u0629 \u2014 \u0641\u0631\u0639 \u0627\u0644\u0646\u0636\u0627\u0644")), /*#__PURE__*/React.createElement("div", {
    className: "ff-result__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary",
    onClick: () => setTab('orig')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "print"
  }), " \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0631\u0633\u0645\u064A\u0629"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: () => nav('cases')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "inventory_2"
  }), " \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062D\u0627\u0644\u0627\u062A"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: resetForm
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "add"
  }), " \u0637\u0644\u0628 \u062C\u062F\u064A\u062F"))) :
  /*#__PURE__*/
  /* ─────────── WIZARD ─────────── */
  React.createElement("div", {
    className: "ff-wizard"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "ff-steps",
    role: "list"
  }, stepMeta.map((m, i) => {
    const done = visited[i] && i < step && stepErrCount(i) === 0;
    const state = i === step ? 'is-current' : done ? 'is-done' : visited[i] ? 'is-seen' : '';
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: `ff-step ${state}`
    }, /*#__PURE__*/React.createElement("button", {
      className: "ff-step__btn",
      onClick: () => (visited[i] || i < step) && goToStep(i),
      disabled: !visited[i] && i > step,
      "aria-current": i === step ? 'step' : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-step__num"
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check"
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      className: "ff-step__lbl"
    }, m.label)), i < stepMeta.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "ff-step__bar"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-layout"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, current.type === 'section' ? /*#__PURE__*/React.createElement("div", {
    className: "f-card ff-section fp-enter",
    key: step
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: current.sx.icon || (current.sx.kind === 'documents' ? 'folder_open' : 'edit')
  }), current.sx.title || (current.sx.kind === 'documents' ? 'الوثائق / المستمسكات' : 'القسم')), /*#__PURE__*/React.createElement("span", {
    className: "ff-step__count"
  }, "\u0627\u0644\u062E\u0637\u0648\u0629 ", step + 1, " \u0645\u0646 ", steps.length)), renderSectionBody(current.sx)) :
  /*#__PURE__*/
  /* review step: summary + declaration + attachments */
  React.createElement("div", {
    className: "fp-enter",
    key: "review",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card ff-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "fact_check"
  }), " \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"), /*#__PURE__*/React.createElement("span", {
    className: "ff-step__count"
  }, "\u0627\u0644\u062E\u0637\u0648\u0629 ", step + 1, " \u0645\u0646 ", steps.length)), /*#__PURE__*/React.createElement("div", {
    className: "ff-section__body"
  }, reviewRows().length === 0 ? /*#__PURE__*/React.createElement(window.EmptyState, {
    compact: true,
    icon: "edit_note",
    title: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0639\u062F",
    body: "\u0639\u064F\u062F \u0625\u0644\u0649 \u0627\u0644\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u0633\u0627\u0628\u0642\u0629 \u0648\u0623\u062F\u062E\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0644\u0628."
  }) : /*#__PURE__*/React.createElement("dl", {
    className: "ff-review"
  }, reviewRows().map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ff-review__row"
  }, /*#__PURE__*/React.createElement("dt", null, r.l), /*#__PURE__*/React.createElement("dd", null, r.v)))))), schema.declaration && /*#__PURE__*/React.createElement("div", {
    className: "f-card ff-section ff-decl-card",
    "data-fk": "declAgreed"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gavel"
  }), " \u0627\u0644\u0625\u0642\u0631\u0627\u0631 \u0648\u0627\u0644\u062A\u0639\u0647\u062F"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u064A\u064F\u0637\u0628\u0639 \u0643\u0627\u0645\u0644\u0627\u064B \u0645\u0639 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u0623\u0635\u0644\u064A")), /*#__PURE__*/React.createElement("div", {
    className: "ff-section__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ff-decl-text"
  }, schema.declaration), /*#__PURE__*/React.createElement("label", {
    className: `ff-check ff-check--decl ${showErrors && errors.declAgreed ? 'is-invalid' : ''}`,
    onClick: () => {
      set('declAgreed', !form.declAgreed);
      setErrors(es => {
        const n = {
          ...es
        };
        delete n.declAgreed;
        return n;
      });
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-check__box"
  }, form.declAgreed && /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), "\u0642\u0631\u0623\u062A \u0627\u0644\u0625\u0642\u0631\u0627\u0631 \u0648\u0623\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0645\u0627 \u0648\u0631\u062F \u0641\u064A\u0647"), /*#__PURE__*/React.createElement(window.FieldError, {
    msg: showErrors ? errors.declAgreed : ''
  }))), /*#__PURE__*/React.createElement("div", {
    className: "f-card ff-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "attach_file"
  }), " \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u0635\u0648\u0631 \u0623\u0648 PDFs \u0644\u0644\u0645\u0633\u062A\u0645\u0633\u0643\u0627\u062A \u2014 \u0627\u062E\u062A\u064A\u0627\u0631\u064A\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "ff-section__body"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ff-attach-drop"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    multiple: true,
    accept: "image/*,.pdf",
    onChange: onPickFiles,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "cloud_upload"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "\u0627\u0633\u062D\u0628 \u0648\u0623\u0641\u0644\u062A \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0647\u0646\u0627"), /*#__PURE__*/React.createElement("small", null, "\u0623\u0648 \u0627\u0636\u063A\u0637 \u0644\u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u2014 JPG \xB7 PNG \xB7 PDF (\u062D\u062A\u0649 8MB \u0644\u0643\u0644 \u0645\u0644\u0641)"))), attachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ff-attach-list"
  }, attachments.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ff-attach-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-attach-thumb"
  }, a._preview ? /*#__PURE__*/React.createElement("img", {
    src: a._preview,
    alt: ""
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: a.type === 'application/pdf' ? 'picture_as_pdf' : 'description'
  })), /*#__PURE__*/React.createElement("span", {
    className: "ff-attach-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-attach-name"
  }, a.name), /*#__PURE__*/React.createElement("span", {
    className: "ff-attach-size"
  }, (a.size / 1024).toFixed(0), " KB \xB7 ", a.type || 'ملف')), /*#__PURE__*/React.createElement("button", {
    className: "ff-attach-rm",
    onClick: () => removeAttachment(i),
    "aria-label": "\u062D\u0630\u0641"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ff-attach-summary"
  }, attachments.length, " \u0645\u0644\u0641")))), submitState === 'error' && /*#__PURE__*/React.createElement("div", {
    className: "ff-result ff-result--err"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-result__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "error"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628"), /*#__PURE__*/React.createElement("p", null, submitMsg)), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary",
    onClick: submit
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh"
  }), " \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629"))), showErrors && Object.keys(errors).length > 0 && /*#__PURE__*/React.createElement(window.ValidationSummary, {
    errors: errors
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: back,
    disabled: step === 0
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward"
  }), " \u0627\u0644\u0633\u0627\u0628\u0642"), /*#__PURE__*/React.createElement("span", {
    className: "ff-nav__progress"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-nav__bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: `${(step + 1) / steps.length * 100}%`
    }
  })), step + 1, " / ", steps.length), step < lastStep ? /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary",
    onClick: next
  }, "\u0627\u0644\u062A\u0627\u0644\u064A ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back"
  })) : /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary",
    onClick: submit,
    disabled: submitState === 'submitting'
  }, submitState === 'submitting' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "ff-spin"
  }), " \u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "send"
  }), " \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0637\u0644\u0628")))), /*#__PURE__*/React.createElement("aside", {
    className: "ff-feepanel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-feepanel__head"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "request_quote"
  }), " \u0627\u0644\u0623\u062C\u0648\u0631 \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629"), feeResult.selector && /*#__PURE__*/React.createElement("div", {
    className: "ff-field",
    style: {
      padding: '0 14px 0'
    }
  }, /*#__PURE__*/React.createElement("label", null, feeResult.selector.label), /*#__PURE__*/React.createElement("select", {
    value: feeResult.selector.current,
    onChange: e => set(feeResult.selector.key, e.target.value)
  }, feeResult.selector.options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o)))), /*#__PURE__*/React.createElement("div", {
    className: "ff-feepanel__rows"
  }, feeResult.rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "ff-feerow"
  }, /*#__PURE__*/React.createElement("span", null, "\u0647\u0630\u0647 \u0627\u0644\u062E\u062F\u0645\u0629 \u0628\u062F\u0648\u0646 \u0623\u062C\u0648\u0631"), /*#__PURE__*/React.createElement("b", null, "\u2014")), feeResult.rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    className: "ff-feerow",
    style: r.toggle ? {
      cursor: 'pointer'
    } : null,
    onClick: r.toggle ? () => set(r.k, !r.on) : undefined
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, r.toggle && /*#__PURE__*/React.createElement("span", {
    className: "ff-check__box",
    style: {
      background: r.on ? 'var(--f-ok)' : 'transparent',
      borderColor: r.on ? 'var(--f-ok)' : 'var(--f-border-2)'
    }
  }, r.on && /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), r.l, r.note && /*#__PURE__*/React.createElement("small", {
    style: {
      marginInlineStart: 6,
      opacity: .7
    }
  }, "(", r.note, ")")), /*#__PURE__*/React.createElement("b", null, fmtIQD(r.amt)))), feeResult.note && /*#__PURE__*/React.createElement("div", {
    className: "ff-feerow ff-feerow--note"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  }), " ", feeResult.note)), feeResult.total > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ff-feepanel__total"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, feeResult.totalLabel || 'المجموع'), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, fmt(total), /*#__PURE__*/React.createElement("small", null, "\u062F.\u0639"))), /*#__PURE__*/React.createElement("div", {
    className: "ff-feepanel__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: () => setTab('orig')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "description"
  }), " \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0623\u0635\u0644\u064A\u0629"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: () => setConfirmReset(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh"
  }), " \u0625\u0639\u0627\u062F\u0629 \u062A\u0647\u064A\u0626\u0629"))))), /*#__PURE__*/React.createElement(window.ConfirmDialog, {
    open: confirmReset,
    danger: true,
    icon: "restart_alt",
    title: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u061F",
    description: "\u0633\u062A\u0641\u0642\u062F \u062C\u0645\u064A\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u062E\u0644\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0646\u0645\u0648\u0630\u062C. \u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0631\u0627\u062C\u0639 \u0639\u0646 \u0627\u0644\u0639\u0645\u0644\u064A\u0629.",
    confirmLabel: "\u0646\u0639\u0645\u060C \u0623\u0639\u062F \u0627\u0644\u062A\u0647\u064A\u0626\u0629",
    cancelLabel: "\u0625\u0644\u063A\u0627\u0621",
    onConfirm: resetForm,
    onCancel: () => setConfirmReset(false)
  }));
}

// =============================================================
// ORIGINAL PAPER — generated from schema
// =============================================================
function cb(on) {
  return on ? '☑' : '☐';
}
function PaperFieldRows({
  rows,
  form
}) {
  return rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, row.flatMap(f => [/*#__PURE__*/React.createElement("th", {
    key: f.k + '-l',
    style: {
      width: '18%'
    }
  }, f.l), /*#__PURE__*/React.createElement("td", {
    key: f.k + '-v',
    colSpan: f.full ? row.length === 1 ? 7 : 3 : 1
  }, form[f.k] || ' ')])));
}
function OriginalPaper({
  svc,
  schema,
  form
}) {
  const d = form.docs || {};
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-paper-wrap fp-enter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-paper",
    dir: "rtl"
  }, /*#__PURE__*/React.createElement("h2", null, schema.paperTitle), /*#__PURE__*/React.createElement("div", {
    className: "ff-paper__sub"
  }, "\u0646\u0645\u0648\u0630\u062C \u0631\u0642\u0645 (", svc.code, ")"), /*#__PURE__*/React.createElement("div", {
    className: "head-band"
  }, /*#__PURE__*/React.createElement("span", null, "\u0631\u0642\u0645 \u0648\u0635\u0644 \u0642\u0628\u0636 (\u0631\u0633\u0648\u0645 \u0637\u0644\u0628 \u0627\u0644\u062E\u062F\u0645\u0629): ............"), /*#__PURE__*/React.createElement("span", null, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0631\u0643\u0632: \u0627\u0644\u0631\u0635\u0627\u0641\u0629 \u2014 \u0641\u0631\u0639 \u0627\u0644\u0646\u0636\u0627\u0644 (RS-014)"), /*#__PURE__*/React.createElement("span", null, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0644\u0628: ", new Date().toLocaleDateString('ar-IQ-u-ca-gregory'))), schema.sections.map((sx, i) => {
    if (sx.kind === 'documents') return null;
    return /*#__PURE__*/React.createElement("table", {
      key: i
    }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      colSpan: 8,
      style: {
        background: '#e8e5db'
      }
    }, sx.title)), sx.rows && /*#__PURE__*/React.createElement(PaperFieldRows, {
      rows: sx.rows,
      form: form
    }), sx.kind === 'classification' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0627\u0644\u0635\u0646\u0641 \u0627\u0644\u0645\u062E\u062A\u0627\u0631"), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.classes.map(c => `${cb(form.cls === c)} ${c}`).join('    '))), sx.phases && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0642\u0648\u0629 \u0627\u0644\u062A\u063A\u0630\u064A\u0629"), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.phases.map(p => `${cb(form.phase === p)} ${p}`).join('    ')))), sx.kind === 'class_change' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0645\u0646"), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.from.map(c => `${cb(form.cls_from === c)} ${c}`).join('    '))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0625\u0644\u0649"), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.to.map(c => `${cb(form.cls_to === c)} ${c}`).join('    ')))), sx.kind === 'reason_seg' && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, sx.title), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.options.map(o => `${cb(form.reasonChoice === o)} ${o}`).join('    '))), sx.kind === 'urgency' && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629"), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.levels.map(l => `${cb(form.urgency === l)} ${l}`).join('    ')))));
  }), schema.sections.filter(s => s.kind === 'documents').map((sx, i) => /*#__PURE__*/React.createElement("table", {
    key: 'doc' + i
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 34
    }
  }, "\u0627\u0644\u062D\u0627\u0644\u0629"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 24
    }
  }, "#"), /*#__PURE__*/React.createElement("th", null, "\u0627\u0644\u0648\u062B\u0627\u0626\u0642 / \u0627\u0644\u0645\u0633\u062A\u0645\u0633\u0643\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '34%'
    }
  }, "\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0645\u0634\u0645\u0648\u0644\u0629 / \u0645\u0644\u0627\u062D\u0638\u0627\u062A"))), /*#__PURE__*/React.createElement("tbody", null, sx.list.map((doc, idx) => /*#__PURE__*/React.createElement("tr", {
    key: idx
  }, /*#__PURE__*/React.createElement("td", {
    className: "c"
  }, cb(!!d[doc.n])), /*#__PURE__*/React.createElement("td", {
    className: "c"
  }, idx + 1), /*#__PURE__*/React.createElement("td", null, doc.n), /*#__PURE__*/React.createElement("td", {
    className: "c",
    style: {
      fontSize: '0.68rem',
      color: '#555'
    }
  }, doc.all ? 'جميع الأصناف' : doc.opt || '—')))))), schema.extraDocsTable && /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0627\u0644\u0648\u062B\u064A\u0642\u0629"), /*#__PURE__*/React.createElement("th", null, "\u0631\u0642\u0645 \u0627\u0644\u0648\u062B\u064A\u0642\u0629"), /*#__PURE__*/React.createElement("th", null, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u062B\u064A\u0642\u0629"))), /*#__PURE__*/React.createElement("tbody", null, schema.extraDocsTable.map(v => /*#__PURE__*/React.createElement("tr", {
    key: v
  }, /*#__PURE__*/React.createElement("td", null, v), /*#__PURE__*/React.createElement("td", null, ' '), /*#__PURE__*/React.createElement("td", null, ' '))))), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: '40%'
    }
  }, "\u0631\u0642\u0645 \u0648\u0635\u0644 \u0642\u0628\u0636 (\u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0628\u0639\u062F \u0627\u0644\u062F\u0631\u0627\u0633\u0629)"), /*#__PURE__*/React.createElement("td", null, ' ')), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u064A\u062D\u0648\u064E\u0651\u0644 \u0644\u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"), /*#__PURE__*/React.createElement("td", null, (schema.routing || ['خدمات المشتركين', 'الدائرة الفنية', 'الدائرة القانونية', 'الصندوق', 'إلغاء الطلب']).map(r => `☐ ${r}`).join('   '))))), /*#__PURE__*/React.createElement("div", {
    className: "sig-row"
  }, /*#__PURE__*/React.createElement("div", null, "\u0627\u0633\u0645 \u0648\u062A\u0648\u0642\u064A\u0639 \u0645\u0648\u0638\u0641 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u064A\u0646", /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, ' ')), /*#__PURE__*/React.createElement("div", null, "\u0627\u0633\u0645 \u0648\u062A\u0648\u0642\u064A\u0639 \u0645\u0642\u062F\u0645 \u0627\u0644\u0637\u0644\u0628", /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, form.name || ' ')), /*#__PURE__*/React.createElement("div", null, "\u0627\u0633\u0645 \u0648\u062A\u0648\u0642\u064A\u0639 \u0645\u0633\u0624\u0648\u0644 \u0645\u0631\u0643\u0632 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u064A\u0646", /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, ' '))), schema.declaration && /*#__PURE__*/React.createElement("div", {
    className: "decl"
  }, /*#__PURE__*/React.createElement("h3", null, "\u0625\u0642\u0631\u0627\u0631 \u0648\u062A\u0639\u0647\u0651\u062F \u0648\u0627\u0644\u062A\u0632\u0627\u0645"), schema.declaration.split('\n').map((line, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, line)), /*#__PURE__*/React.createElement("div", {
    className: "sig-row",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u0627\u0633\u0645 \u0648\u062A\u0648\u0642\u064A\u0639 \u0645\u0642\u062F\u0645 \u0627\u0644\u0637\u0644\u0628", /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, form.name || ' ')), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E", /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, new Date().toLocaleDateString('ar-IQ-u-ca-gregory')))))));
}
Object.assign(window, {
  FormPage,
  OriginalPaper
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_service_hub/changed_files/final_form.jsx", error: String((e && e.message) || e) }); }

// design_handoff_service_hub/changed_files/final_print.jsx
try { (() => {
// =============================================================
// FINAL — Word-only flow (simple)
//   * Preview: docx-preview renders the filled .docx inline
//   * Download: same filled .docx
//   * Print: window.print() on the preview
// =============================================================

// Renders the official form two ways:
//   • HTML paper (schema-driven, window.OriginalPaper) — ALWAYS works, the
//     reliable preview + the source for window.print().
//   • docx-preview (filled .docx) — a progressive ENHANCEMENT: if the Word
//     template can be fetched & filled, it replaces the HTML paper for
//     pixel-exact fidelity. If it can't (offline, template unavailable),
//     we silently keep the HTML paper instead of showing an error.
function OfficialPaper({
  svc,
  schema,
  form,
  attachments
}) {
  const docxRef = React.useRef(null);
  // 'html'  → showing the schema HTML paper (default, reliable)
  // 'docx'  → the filled .docx rendered successfully (enhanced)
  const [mode, setMode] = React.useState('html');
  const toast = window.useToast && window.useToast();
  const formKey = React.useMemo(() => JSON.stringify(form), [form]);

  // Try to enhance with the real .docx; never surface an error if it fails.
  React.useEffect(() => {
    if (!docxRef.current || !window.renderFilledDocx) return;
    let cancelled = false;
    setMode('html');
    const t = setTimeout(() => {
      if (cancelled) return;
      window.renderFilledDocx(svc, form, docxRef.current).then(() => {
        if (!cancelled) setMode('docx');
      }).catch(() => {
        if (!cancelled) setMode('html'); /* keep HTML paper */
      });
    }, 200);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [svc.code, formKey]);
  const onPrint = () => {
    // Print whichever preview is showing — print CSS isolates .of-docx-host.
    window.print();
  };
  const onDownloadWord = async () => {
    if (!window.downloadFilledDocx) {
      toast && toast.push({
        kind: 'warn',
        title: 'تنزيل Word غير متاح',
        body: 'استخدم «طباعة» ثم احفظ كـ PDF من نافذة المتصفّح.'
      });
      return;
    }
    try {
      await window.downloadFilledDocx(svc, form);
      toast && toast.push({
        kind: 'success',
        title: 'تم تنزيل ملف Word'
      });
    } catch (e) {
      // Graceful, honest fallback — the print-to-PDF path always works.
      toast && toast.push({
        kind: 'warn',
        title: 'تنزيل Word غير متاح حالياً',
        body: 'قالب Word غير متوفر في وضع العرض — استخدم «طباعة» ثم «حفظ كـ PDF».'
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "of-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "of-toolbar no-print"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary f-btn--lg",
    onClick: onPrint
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "print"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "\u0637\u0628\u0627\u0639\u0629"), /*#__PURE__*/React.createElement("small", null, "\u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u0631\u0633\u0645\u064A \u2014 \u0623\u0648 \u062D\u0641\u0638 \u0643\u0640 PDF"))), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--lg",
    onClick: onDownloadWord
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "description"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "\u062A\u0646\u0632\u064A\u0644 \u0645\u0644\u0641 Word"), /*#__PURE__*/React.createElement("small", null, "\u0644\u0644\u0623\u0631\u0634\u0641\u0629 \u0623\u0648 \u0627\u0644\u062A\u0639\u062F\u064A\u0644"))), mode === 'docx' && /*#__PURE__*/React.createElement("span", {
    className: "of-fidelity",
    title: "\u0645\u0639\u0631\u0648\u0636 \u0645\u0646 \u0642\u0627\u0644\u0628 Word \u0627\u0644\u0631\u0633\u0645\u064A"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "verified"
  }), " \u0646\u0633\u062E\u0629 Word \u0627\u0644\u0631\u0633\u0645\u064A\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "of-docx-shell",
    id: "of-print-root"
  }, /*#__PURE__*/React.createElement("div", {
    ref: docxRef,
    className: "of-docx-host",
    style: {
      display: mode === 'docx' ? 'flex' : 'none'
    }
  }), mode !== 'docx' && /*#__PURE__*/React.createElement("div", {
    className: "of-docx-host"
  }, /*#__PURE__*/React.createElement(window.OriginalPaper, {
    svc: svc,
    schema: schema,
    form: form
  }))));
}
window.OfficialPaper = OfficialPaper;
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_service_hub/changed_files/final_print.jsx", error: String((e && e.message) || e) }); }

// design_handoff_service_hub/changed_files/final_spotlight.jsx
try { (() => {
// =============================================================
// SPOTLIGHT — macOS-style global search overlay (⌘K)
// =============================================================

function SpotlightOverlay({
  open,
  onClose,
  nav
}) {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  useEffect(() => {
    if (open) {
      setQ('');
      setSel(0);
      setTimeout(() => inputRef.current && inputRef.current.focus(), 60);
    }
  }, [open]);

  // Global Escape + focus trap — works regardless of which child has focus.
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll('input, button, [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0],
          last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    const pages = [{
      kind: 'page',
      icon: 'inventory_2',
      name: 'متابعة الحالات',
      go: () => nav('cases')
    }, {
      kind: 'page',
      icon: 'request_quote',
      name: 'جدول الأجور ٢٠٢٦',
      go: () => nav('pricing')
    }, {
      kind: 'page',
      icon: 'menu_book',
      name: 'دليل الموظف',
      go: () => nav('guide')
    }, {
      kind: 'page',
      icon: 'apps',
      name: 'كل الخدمات',
      go: () => nav('services')
    }];
    if (!t) {
      const top = [...window.SERVICES].sort((a, b) => b.popularity - a.popularity).slice(0, 5).map(s => ({
        kind: 'svc',
        svc: s,
        go: () => nav('detail', {
          code: s.code
        })
      }));
      return [...top, ...pages];
    }
    const svcs = window.SERVICES.filter(s => s.name.toLowerCase().includes(t) || s.code.toLowerCase().includes(t)).slice(0, 7).map(s => ({
      kind: 'svc',
      svc: s,
      go: () => nav('detail', {
        code: s.code
      })
    }));
    const pg = pages.filter(p => p.name.includes(q.trim()));
    return [...svcs, ...pg];
  }, [q]);
  useEffect(() => {
    setSel(0);
  }, [results.length, q]);
  if (!open) return null;
  const onKey = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSel(s => Math.min(s + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSel(s => Math.max(s - 1, 0));
    } else if (e.key === 'Enter' && results[sel]) {
      results[sel].go();
      onClose();
    } else if (e.key === 'Escape') onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "sp-veil",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-panel",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "\u0628\u062D\u062B \u0633\u0631\u064A\u0639",
    ref: panelRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-input"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: onKey,
    placeholder: "\u0627\u0628\u062D\u062B \u0639\u0646 \u062E\u062F\u0645\u0629\u060C \u0635\u0641\u062D\u0629\u060C \u0623\u0648 \u0631\u0642\u0645 \u0646\u0645\u0648\u0630\u062C\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sp-esc",
    onClick: onClose,
    "aria-label": "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0628\u062D\u062B"
  }, "esc")), /*#__PURE__*/React.createElement("div", {
    className: "sp-results"
  }, results.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "sp-empty"
  }, "\u0644\u0627 \u0646\u062A\u0627\u0626\u062C \u0644\u0640 \xAB", q, "\xBB"), results.map((r, i) => r.kind === 'svc' ? /*#__PURE__*/React.createElement("button", {
    key: r.svc.code,
    className: `sp-row ${i === sel ? 'is-sel' : ''}`,
    onMouseEnter: () => setSel(i),
    onClick: () => {
      r.go();
      onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-row__ico",
    style: {
      '--s-c': DEPT_COLORS[r.svc.section]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.svc.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-row__name"
  }, r.svc.name), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__sub"
  }, window.SECTION_MAP[r.svc.section].name)), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__code"
  }, r.svc.code), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__enter"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "keyboard_return"
  }))) : /*#__PURE__*/React.createElement("button", {
    key: 'p' + i,
    className: `sp-row ${i === sel ? 'is-sel' : ''}`,
    onMouseEnter: () => setSel(i),
    onClick: () => {
      r.go();
      onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-row__ico sp-row__ico--page"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-row__name"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__sub"
  }, "\u0627\u0646\u062A\u0642\u0627\u0644")), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__enter"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "keyboard_return"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "sp-foot"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "\u2191\u2193"), " \u062A\u0646\u0642\u0651\u0644"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "\u21B5"), " \u0641\u062A\u062D"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "esc"), " \u0625\u063A\u0644\u0627\u0642"))));
}
Object.assign(window, {
  SpotlightOverlay
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_service_hub/changed_files/final_spotlight.jsx", error: String((e && e.message) || e) }); }

// design_handoff_service_hub/new_files/final_primitives.jsx
try { (() => {
// =============================================================
// FINAL — shared UI primitives (faithful to the --f-* system)
// Provides components the production app defines elsewhere:
//   • ErrorBoundary   — stops one bad component white-screening the app
//   • ToastProvider   — real toast feedback (success/error/warn/info)
//   • useToast        — push toasts from any screen
//   • ConfirmDialog   — accessible confirm modal (focus-trap, Esc)
//   • ValidationSummary — lists form errors, jumps to the field
// All RTL-first, token-driven, reduced-motion aware.
// =============================================================
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useCallback
  } = React;

  /* ---------------- ErrorBoundary ---------------- */
  class ErrorBoundary extends React.Component {
    constructor(p) {
      super(p);
      this.state = {
        err: null
      };
    }
    static getDerivedStateFromError(err) {
      return {
        err
      };
    }
    componentDidCatch(err, info) {
      console.error('[caught by ErrorBoundary]', err, info);
    }
    render() {
      if (!this.state.err) return this.props.children;
      return React.createElement('div', {
        className: 'f-errboundary',
        role: 'alert',
        dir: 'rtl'
      }, React.createElement('div', {
        className: 'f-errboundary__card'
      }, React.createElement('span', {
        className: 'f-errboundary__ico material-symbols-outlined'
      }, 'error'), React.createElement('h2', null, 'حدث خطأ غير متوقع'), React.createElement('p', null, 'تعذّر عرض هذا القسم. تم حفظ بياناتك المدخلة تلقائياً ويمكنك المتابعة.'), React.createElement('pre', {
        className: 'f-errboundary__detail'
      }, String(this.state.err && this.state.err.message || this.state.err)), React.createElement('div', {
        className: 'f-errboundary__actions'
      }, React.createElement('button', {
        className: 'f-btn f-btn--primary',
        onClick: () => this.setState({
          err: null
        })
      }, React.createElement('span', {
        className: 'material-symbols-outlined'
      }, 'refresh'), ' إعادة المحاولة'), React.createElement('button', {
        className: 'f-btn',
        onClick: () => location.reload()
      }, 'تحديث الصفحة'))));
    }
  }

  /* ---------------- Toasts ---------------- */
  const ToastCtx = React.createContext({
    push: () => {}
  });
  const ICONS = {
    success: 'check_circle',
    error: 'error',
    warn: 'warning',
    info: 'info'
  };
  function ToastProvider({
    children
  }) {
    const [toasts, setToasts] = useState([]);
    const remove = useCallback(id => setToasts(ts => ts.filter(t => t.id !== id)), []);
    const push = useCallback(t => {
      const id = Math.random().toString(36).slice(2);
      const toast = {
        id,
        kind: t.kind || 'info',
        title: t.title || '',
        body: t.body || '',
        action: t.action || null
      };
      setToasts(ts => [...ts, toast]);
      const ttl = t.kind === 'error' ? 7000 : 4500;
      setTimeout(() => remove(id), ttl);
      return id;
    }, [remove]);
    return React.createElement(ToastCtx.Provider, {
      value: {
        push
      }
    }, children, React.createElement('div', {
      className: 'f-toasts',
      role: 'region',
      'aria-live': 'polite',
      'aria-label': 'تنبيهات'
    }, toasts.map(t => React.createElement('div', {
      key: t.id,
      className: `f-toast f-toast--${t.kind}`,
      role: t.kind === 'error' ? 'alert' : 'status'
    }, React.createElement('span', {
      className: 'f-toast__ico material-symbols-outlined'
    }, ICONS[t.kind] || 'info'), React.createElement('div', {
      className: 'f-toast__main'
    }, t.title && React.createElement('div', {
      className: 'f-toast__title'
    }, t.title), t.body && React.createElement('div', {
      className: 'f-toast__body'
    }, t.body), t.action && React.createElement('button', {
      className: 'f-toast__action',
      onClick: () => {
        t.action.onClick && t.action.onClick();
        remove(t.id);
      }
    }, t.action.label)), React.createElement('button', {
      className: 'f-toast__close',
      'aria-label': 'إغلاق',
      onClick: () => remove(t.id)
    }, React.createElement('span', {
      className: 'material-symbols-outlined'
    }, 'close'))))));
  }
  const useToast = () => React.useContext(ToastCtx);

  /* ---------------- ConfirmDialog ---------------- */
  function ConfirmDialog({
    open,
    danger,
    icon,
    title,
    description,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel
  }) {
    const cardRef = useRef(null);
    const prevFocus = useRef(null);
    useEffect(() => {
      if (!open) return;
      prevFocus.current = document.activeElement;
      const card = cardRef.current;
      const focusables = card ? card.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])') : [];
      focusables[focusables.length - 1] && focusables[focusables.length - 1].focus(); // default to safe (cancel)
      const onKey = e => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onCancel && onCancel();
        }
        if (e.key === 'Tab' && focusables.length) {
          const first = focusables[0],
            last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener('keydown', onKey);
      return () => {
        document.removeEventListener('keydown', onKey);
        prevFocus.current && prevFocus.current.focus && prevFocus.current.focus();
      };
    }, [open, onCancel]);
    if (!open) return null;
    return React.createElement('div', {
      className: 'f-confirm',
      dir: 'rtl',
      onMouseDown: e => {
        if (e.target === e.currentTarget) onCancel && onCancel();
      }
    }, React.createElement('div', {
      className: `f-confirm__card ${danger ? 'is-danger' : ''}`,
      ref: cardRef,
      role: 'alertdialog',
      'aria-modal': 'true',
      'aria-labelledby': 'f-confirm-t',
      'aria-describedby': 'f-confirm-d'
    }, React.createElement('span', {
      className: 'f-confirm__ico material-symbols-outlined'
    }, icon || (danger ? 'warning' : 'help')), React.createElement('h3', {
      id: 'f-confirm-t',
      className: 'f-confirm__title'
    }, title), description && React.createElement('p', {
      id: 'f-confirm-d',
      className: 'f-confirm__desc'
    }, description), React.createElement('div', {
      className: 'f-confirm__actions'
    }, React.createElement('button', {
      className: `f-btn ${danger ? 'f-btn--danger' : 'f-btn--primary'}`,
      onClick: onConfirm
    }, confirmLabel || 'تأكيد'), React.createElement('button', {
      className: 'f-btn',
      onClick: onCancel
    }, cancelLabel || 'إلغاء'))));
  }

  /* ---------------- ValidationSummary ---------------- */
  function ValidationSummary({
    errors
  }) {
    const keys = Object.keys(errors || {});
    if (!keys.length) return null;
    const jump = k => {
      const el = document.querySelector(`[data-fk="${k}"]`);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        const inp = el.querySelector('input,select,textarea');
        inp && inp.focus();
      }
    };
    return React.createElement('div', {
      className: 'f-valsum',
      role: 'alert',
      dir: 'rtl'
    }, React.createElement('div', {
      className: 'f-valsum__head'
    }, React.createElement('span', {
      className: 'material-symbols-outlined'
    }, 'error'), `${keys.length} حقل بحاجة إلى مراجعة قبل الإرسال`), React.createElement('ul', {
      className: 'f-valsum__list'
    }, keys.map(k => React.createElement('li', {
      key: k
    }, React.createElement('button', {
      type: 'button',
      onClick: () => jump(k)
    }, React.createElement('span', {
      className: 'material-symbols-outlined'
    }, 'arrow_back'), errors[k])))));
  }
  Object.assign(window, {
    ErrorBoundary,
    ToastProvider,
    useToast,
    ConfirmDialog,
    ValidationSummary,
    FieldError
  });

  /* ---------------- Validation helpers ---------------- */
  // Each validator returns '' when valid, or an Arabic error message.
  const Validate = {
    required: v => v == null || String(v).trim() === '' ? 'هذا الحقل مطلوب' : '',
    phoneIQ: v => {
      if (!v) return '';
      const digits = String(v).replace(/[\s-]/g, '');
      return /^(?:07\d{9}|\+9647\d{9})$/.test(digits) ? '' : 'رقم هاتف عراقي غير صحيح (مثال: 07XXXXXXXXX)';
    },
    digits: v => {
      if (v == null || v === '') return '';
      return /^\d+$/.test(String(v).trim()) ? '' : 'يُسمح بالأرقام فقط';
    },
    minLen: n => v => v && String(v).trim().length < n ? `يجب ألا يقل عن ${n} أحرف` : ''
  };

  // Run a rules map { fieldKey: [validatorFn, ...] } against form values.
  // Returns { fieldKey: firstErrorMessage } for every failing field.
  function validateForm(form, rules) {
    const errs = {};
    Object.keys(rules || {}).forEach(k => {
      const fns = rules[k] || [];
      for (const fn of fns) {
        const msg = fn(form ? form[k] : undefined);
        if (msg) {
          errs[k] = msg;
          break;
        }
      }
    });
    return errs;
  }
  Object.assign(window, {
    Validate,
    validateForm
  });

  /* ---------------- FieldError ---------------- */
  function FieldError({
    msg,
    id
  }) {
    if (!msg) return null;
    return React.createElement('span', {
      className: 'ff-err',
      role: 'alert',
      id
    }, React.createElement('span', {
      className: 'material-symbols-outlined'
    }, 'error'), msg);
  }

  /* ---------------- EmptyState ---------------- */
  // Standard "nothing here" block: icon + title + line + optional action.
  // Use for filtered lists that return zero, or not-yet-populated views.
  function EmptyState({
    icon,
    title,
    body,
    actionLabel,
    onAction,
    compact
  }) {
    return React.createElement('div', {
      className: `f-empty ${compact ? 'is-compact' : ''}`,
      role: 'status'
    }, React.createElement('span', {
      className: 'f-empty__ico material-symbols-outlined'
    }, icon || 'inbox'), title && React.createElement('div', {
      className: 'f-empty__title'
    }, title), body && React.createElement('p', {
      className: 'f-empty__body'
    }, body), actionLabel && React.createElement('button', {
      className: 'f-btn f-btn--sm',
      onClick: onAction
    }, actionLabel));
  }
  Object.assign(window, {
    FieldError,
    EmptyState
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_service_hub/new_files/final_primitives.jsx", error: String((e && e.message) || e) }); }

// ds_icons.js
try { (() => {
// =============================================================
// TADFUQ DS — custom icon set (drawn for the brand, not stock)
// 24×24, stroke 1.75, round caps — electricity service language
// Usage: <svg class="ds-ico"><use href="#tdq-meter"/></svg>
// or JS: TadfuqIcons.mount() injects the sprite once per page.
// =============================================================
(function () {
  'use strict';

  const ICONS = {
    // ---- departments ----
    'tdq-subscriptions': '<path d="M4 20V8.5L12 3l8 5.5V20"/><path d="M4 20h16"/><path d="M10 20v-5a2 2 0 0 1 4 0v5"/><path d="M12 8.8v2.4M10.8 10h2.4"/>',
    'tdq-technical': '<path d="M13 2 6 13h5l-1 9 8-12h-5l1-8z"/>',
    'tdq-billing': '<path d="M6 2.8h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4-2 1.4z"/><path d="M9.5 8h5M9.5 11.5h5M9.5 15h3"/>',
    'tdq-reports': '<path d="M12 3 2.8 19.2h18.4z"/><path d="M12 9.5v4M12 16.4v.2"/>',
    // ---- service objects ----
    'tdq-meter': '<rect x="4" y="5" width="16" height="14" rx="2.5"/><path d="M8 9h8"/><circle cx="12" cy="14.4" r="2.6"/><path d="M12 14.4l1.7-1.7"/>',
    'tdq-pole': '<path d="M12 4v17"/><path d="M5 7h14M7 4.4 5 7m12-2.6L19 7"/><path d="M8.5 7c0 2 1.4 3 3.5 3s3.5-1 3.5-3"/>',
    'tdq-cable': '<path d="M3 18c4 0 4-12 9-12s5 12 9 12"/><circle cx="3" cy="18" r="1.4"/><circle cx="21" cy="18" r="1.4"/>',
    'tdq-plug': '<path d="M9 3v5M15 3v5"/><path d="M6.5 8h11v3a5.5 5.5 0 0 1-11 0z"/><path d="M12 16.5V21"/>',
    'tdq-tower': '<path d="M9 21 12 3l3 18"/><path d="M7.6 13h8.8M9 8.2h6"/><path d="M9 21l6-8M15 21l-6-8"/><path d="M6.5 21h11"/>',
    'tdq-gauge-max': '<path d="M4 16a8 8 0 0 1 16 0"/><path d="M12 16l4.2-4.6"/><path d="M4 19.5h16"/>',
    // ---- workflow ----
    'tdq-form': '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M9 11h6M9 14.5h6M9 18h3.5"/>',
    'tdq-stamp': '<path d="M9.5 10.5 8.8 6a3.2 3.2 0 1 1 6.4 0l-.7 4.5"/><path d="M6 14a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.5H6z"/><path d="M5 20h14"/>',
    'tdq-fees': '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.2v9.6M15 9.2c-.6-1-1.7-1.5-3-1.5-1.8 0-3 .9-3 2.2 0 2.9 6 1.5 6 4.3 0 1.3-1.2 2.2-3 2.2-1.3 0-2.4-.5-3-1.5"/>',
    'tdq-case': '<path d="M4 12h4l2 3h4l2-3h4"/><path d="M4 12v7h16v-7"/><path d="M7 12 9 5h6l2 7"/>',
    'tdq-add-service': '<rect x="3.5" y="3.5" width="7.4" height="7.4" rx="2"/><rect x="13.1" y="3.5" width="7.4" height="7.4" rx="2"/><rect x="3.5" y="13.1" width="7.4" height="7.4" rx="2"/><path d="M16.8 13.5v6.6M13.5 16.8h6.6"/>',
    'tdq-guide': '<path d="M12 5.5C10.5 4 8.4 3.4 5.5 3.4c-.8 0-1.5.1-2.2.3v14.6c.7-.2 1.4-.3 2.2-.3 2.9 0 5 .7 6.5 2.1 1.5-1.4 3.6-2.1 6.5-2.1.8 0 1.5.1 2.2.3V3.7c-.7-.2-1.4-.3-2.2-.3-2.9 0-5 .6-6.5 2.1z"/><path d="M12 5.5v14.6"/>'
  };
  function mount() {
    if (document.getElementById('tdq-sprite')) return;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = 'tdq-sprite';
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    svg.innerHTML = Object.entries(ICONS).map(([id, body]) => `<symbol id="${id}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${body}</symbol>`).join('');
    document.body.prepend(svg);
  }
  function el(name, size) {
    const s = size || 20;
    const w = document.createElement('span');
    w.innerHTML = `<svg class="ds-ico" width="${s}" height="${s}"><use href="#${name}"/></svg>`;
    return w.firstChild;
  }
  window.TadfuqIcons = {
    ICONS,
    mount,
    el,
    names: Object.keys(ICONS)
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ds_icons.js", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final.jsx
try { (() => {
// =============================================================
// FINAL Dashboard — Tadfuq Al-Khayr (approved direction)
// Order: Head → Departments (focus) → Services Express →
//        Tips Ticker (rotates per refresh) → Spotlight →
//        Stats + Activity at the bottom
// =============================================================

// shared globals (useState, Icon, DEPT_COLORS …) come from final_globals.jsx

function bars(seed, n = 14) {
  const a = [];
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    a.push(20 + s / 233280 * 80);
  }
  return a;
}

// =============================================================
// USER MENU — avatar dropdown (profile + admin entry)
// =============================================================
function UserMenu({
  nav
}) {
  const [open, setOpen] = useState(false);
  const [, force] = useState(0);
  useEffect(() => window.Auth && window.Auth.subscribe(() => force(n => n + 1)), []);
  const me = window.Auth && window.Auth.currentUser();
  const can = window.Auth ? window.Auth.can : () => false;
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  if (!me) return null; // login gate handles unauthenticated state

  const role = window.DB && window.DB.roles.get(me.roleId);
  const initial = (me.name || '?').trim().slice(0, 1);
  const roleLbl = role ? role.name : me.role || '—';
  const branch = me.branchId && window.DB ? window.DB.branches.get(me.branchId) : null;
  const dept = me.departmentId && window.DB ? window.DB.departments.get(me.departmentId) : null;
  const goAdmin = tab => {
    setOpen(false);
    nav && nav('admin', {
      tab
    });
  };
  const isSysAdmin = can('role.manage') && can('user.create');
  const showAdminEntry = can('user.read') || can('role.read') || can('settings.read') || can('audit.read');
  return /*#__PURE__*/React.createElement("div", {
    className: "f-usermenu",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    className: `f-avatar f-avatar--btn ${open ? 'is-on' : ''}`,
    onClick: () => setOpen(o => !o),
    "aria-haspopup": "menu",
    "aria-expanded": open,
    title: `${me.name} — ${roleLbl}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-avatar__txt"
  }, initial), isSysAdmin && /*#__PURE__*/React.createElement("span", {
    className: "f-avatar__badge",
    title: "\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0646\u0638\u0627\u0645"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield_person"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "f-umenu",
    role: "menu",
    dir: "rtl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-umenu__avatar"
  }, initial), /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__head-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__name"
  }, me.name), /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__role"
  }, isSysAdmin && /*#__PURE__*/React.createElement(Icon, {
    name: "shield_person"
  }), roleLbl, branch && /*#__PURE__*/React.createElement("span", {
    className: "f-umenu__sec"
  }, "\xB7 ", branch.name), dept && /*#__PURE__*/React.createElement("span", {
    className: "f-umenu__sec"
  }, "\xB7 ", dept.name)), me.email && /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__email"
  }, me.email))), showAdminEntry && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__sect-lbl"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "admin_panel_settings"
  }), " \u0644\u0648\u062D\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629"), /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('overview')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "space_dashboard"
  }), /*#__PURE__*/React.createElement("span", null, "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629")), can('services.manage') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('services')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "apps"
  }), /*#__PURE__*/React.createElement("span", null, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A")), can('tips.manage') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('tips')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tips_and_updates"
  }), /*#__PURE__*/React.createElement("span", null, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0646\u0635\u0627\u0626\u062D")), can('user.read') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('users')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "group"
  }), /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646")), can('role.read') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('roles')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge"
  }), /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A")), can('settings.read') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('settings')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tune"
  }), /*#__PURE__*/React.createElement("span", null, "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0631\u0643\u0632")), can('audit.read') && /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => goAdmin('audit')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "history"
  }), /*#__PURE__*/React.createElement("span", null, "\u0633\u062C\u0644 \u0627\u0644\u062A\u062F\u0642\u064A\u0642"))), /*#__PURE__*/React.createElement("div", {
    className: "f-umenu__sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item",
    onClick: () => {
      setOpen(false); /* TODO: open change-password modal */
      alert('غيّر كلمة المرور من قائمة "المستخدمون" بإعادة تعيين ذاتي قريباً.');
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key"
  }), /*#__PURE__*/React.createElement("span", null, "\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")), /*#__PURE__*/React.createElement("button", {
    className: "f-umenu__item f-umenu__item--danger",
    onClick: () => {
      window.Auth.signOut();
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "logout"
  }), /*#__PURE__*/React.createElement("span", null, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C"))));
}

// =============================================================
// NOTIFICATIONS — bell + popover (real feedback, empty state)
// =============================================================
const SEED_NOTIFS = [{
  id: 'n1',
  icon: 'verified',
  tone: 'ok',
  title: 'تمت الموافقة على CS0001',
  body: 'اشتراك جديد — علي عبدالله حسين',
  age: 'قبل ٥ د'
}, {
  id: 'n2',
  icon: 'schedule',
  tone: 'warn',
  title: 'حالة بانتظار توقيعك',
  body: 'CT0003 — فحص مقياس · RS-014',
  age: 'قبل ٢٢ د'
}, {
  id: 'n3',
  icon: 'payments',
  tone: 'cb',
  title: 'تحصيل قائمة أجور',
  body: '٤٥٠٬٠٠٠ د.ع — وصل #٤٨١',
  age: 'قبل ساعة'
}];
function NotificationsBell() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(SEED_NOTIFS);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const unread = items.length;
  return /*#__PURE__*/React.createElement("div", {
    className: "f-notif",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-iconbtn",
    title: "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A",
    "aria-haspopup": "true",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "notifications"
  }), unread > 0 && /*#__PURE__*/React.createElement("span", {
    className: "f-notif__badge"
  }, unread)), open && /*#__PURE__*/React.createElement("div", {
    className: "f-notif__pop",
    role: "dialog",
    "aria-label": "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-notif__head"
  }, /*#__PURE__*/React.createElement("strong", null, "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A"), items.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "f-notif__clear",
    onClick: () => setItems([])
  }, "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644 \u0643\u0645\u0642\u0631\u0648\u0621")), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "f-notif__empty"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "notifications_off"
  }), /*#__PURE__*/React.createElement("span", null, "\u0644\u0627 \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u062C\u062F\u064A\u062F\u0629"), /*#__PURE__*/React.createElement("small", null, "\u0633\u062A\u0638\u0647\u0631 \u0647\u0646\u0627 \u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0648\u0627\u0644\u062A\u062D\u0635\u064A\u0644 \u0648\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0627\u062A")) : /*#__PURE__*/React.createElement("div", {
    className: "f-notif__list"
  }, items.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    className: `f-notif__item f-notif__item--${n.tone}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-notif__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-notif__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-notif__title"
  }, n.title), /*#__PURE__*/React.createElement("span", {
    className: "f-notif__body"
  }, n.body)), /*#__PURE__*/React.createElement("span", {
    className: "f-notif__age"
  }, n.age))))));
}

// =============================================================
// TOP CHROME
// =============================================================
function TopChrome({
  tab,
  setTab,
  dark,
  setDark,
  onCmdK,
  nav
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "f-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-top__row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "f-brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-brand__mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-brand__name"
  }, /*#__PURE__*/React.createElement("strong", null, "\u062A\u062F\u0641\u0651\u0642 \u0627\u0644\u062E\u064A\u0631"), /*#__PURE__*/React.createElement("small", null, "RASAFA \xB7 CS HUB"))), /*#__PURE__*/React.createElement("span", {
    className: "f-top__sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "f-team"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-team__avatar"
  }, "\u0631\u0635"), /*#__PURE__*/React.createElement("span", null, "RS-014 \xB7 \u0627\u0644\u0646\u0636\u0627\u0644"), /*#__PURE__*/React.createElement(Icon, {
    name: "unfold_more"
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-top__push"
  }), /*#__PURE__*/React.createElement("button", {
    className: "f-search",
    onClick: onCmdK
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("span", {
    className: "f-search__input"
  }, "\u0627\u0628\u062D\u062B \u0628\u0631\u0642\u0645 \u0627\u0634\u062A\u0631\u0627\u0643\u060C \u0627\u0633\u0645\u060C \u0623\u0648 \u0631\u0642\u0645 \u062E\u062F\u0645\u0629\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "f-kbd"
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    className: "f-iconbtn",
    title: "\u0627\u0644\u0633\u062C\u0644"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "article"
  })), /*#__PURE__*/React.createElement(NotificationsBell, null), /*#__PURE__*/React.createElement("button", {
    className: "f-iconbtn f-morph",
    onClick: () => setDark(!dark),
    title: "\u0627\u0644\u0633\u0645\u0629"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: dark ? 'light_mode' : 'dark_mode'
  }), /*#__PURE__*/React.createElement("span", {
    className: "f-morph__lbl"
  }, dark ? 'نهاري' : 'ليلي')), /*#__PURE__*/React.createElement(UserMenu, {
    nav: nav
  })), /*#__PURE__*/React.createElement("nav", {
    className: "f-tabs"
  }, [{
    k: 'overview',
    l: 'نظرة عامة'
  }, {
    k: 'services',
    l: 'الخدمات'
  }, {
    k: 'cases',
    l: 'الحالات'
  }, {
    k: 'branches',
    l: 'الفروع'
  }, {
    k: 'reports',
    l: 'التقارير'
  }, {
    k: 'pricing',
    l: 'الأجور'
  }, {
    k: 'guide',
    l: 'الدليل'
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.k,
    className: `f-tab ${tab === t.k ? 'is-on' : ''}`,
    onClick: () => setTab(t.k)
  }, t.l))));
}

// =============================================================
// PAGE HEAD — compact
// =============================================================
function PageHead({
  onCmdK,
  nav
}) {
  const dateStr = new Date().toLocaleDateString('ar-IQ-u-ca-gregory', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "f-pagehead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-pagehead__intro"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-pagehead__date"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), dateStr, " \xB7 \u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0635\u0627\u0641\u0629 \xB7 \u0641\u0631\u0639 \u0627\u0644\u0646\u0636\u0627\u0644"), /*#__PURE__*/React.createElement("h1", null, "\u0623\u0647\u0644\u0627\u064B \u0623\u0633\u062A\u0627\u0630 \u0631\u0627\u0645\u0632 \u2014 ", /*#__PURE__*/React.createElement("em", null, "\u0627\u0628\u062F\u0623 \u0645\u0646 \u0627\u0644\u0642\u0633\u0645")), /*#__PURE__*/React.createElement("p", {
    className: "f-pagehead__lede"
  }, "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0623\u0631\u0628\u0639\u0629 \u0647\u064A \u0628\u0648\u0627\u0628\u062A\u0643 \u0644\u0643\u0644 \u062E\u062F\u0645\u0629. \u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645 \u0623\u0648 \u0627\u0628\u062F\u0623 \u062E\u062F\u0645\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0633\u0631\u064A\u0639\u0629.")), /*#__PURE__*/React.createElement("div", {
    className: "f-pagehead__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: () => nav('branches')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hub"
  }), " \u0646\u0637\u0627\u0642 \u0627\u0644\u062A\u063A\u0637\u064A\u0629"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file_download"
  }), " \u062A\u0635\u062F\u064A\u0631"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary",
    onClick: onCmdK
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt"
  }), " \u0627\u0628\u062F\u0623 \u0633\u0631\u064A\u0639 ", /*#__PURE__*/React.createElement("span", {
    className: "f-kbd"
  }, "\u2318K"))));
}

// =============================================================
// 1) DEPARTMENTS — the centerpiece
// =============================================================
function Departments({
  nav
}) {
  const todayBySection = {
    CS: 28,
    CT: 19,
    CB: 31,
    CA: 6
  };
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hub"
  })), "\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u062E\u062F\u0645\u0627\u062A"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, window.SERVICES.length, " \u062E\u062F\u0645\u0629 \u0645\u0648\u0632\u0651\u0639\u0629 \u0648\u0641\u0642 \u062F\u0644\u064A\u0644 \u0662\u0660\u0662\u0666 \u2014 \u0645\u0631\u0651\u0631 \u0623\u0648 \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0642\u0633\u0645 \u0644\u0641\u062A\u062D\u0647")), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--ghost f-btn--sm",
    onClick: () => nav('services')
  }, "\u0643\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "f-deck"
  }, window.SECTIONS.map((s, i) => {
    const services = window.SERVICES.filter(v => v.section === s.code);
    const sample = services.slice(0, 4);
    const today = todayBySection[s.code] ?? 0;
    const avgSla = Math.round(services.reduce((a, v) => a + (v.sla || 0), 0) / services.length);
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: s.code,
      role: "button",
      tabIndex: 0,
      className: `f-deck__panel ${isOpen ? 'is-open' : ''}`,
      style: {
        '--d-c': DEPT_COLORS[s.code]
      },
      onMouseEnter: () => setOpen(i),
      onFocus: () => setOpen(i),
      onClick: () => setOpen(i)
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-deck__wm",
      "aria-hidden": "true"
    }, s.code), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__head"
    }, /*#__PURE__*/React.createElement(window.SigBadge, {
      kind: s.code,
      size: 56,
      className: "f-deck__sig"
    }), /*#__PURE__*/React.createElement("span", {
      className: "f-deck__code"
    }, s.code)), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__mini"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-deck__mini-name"
    }, s.name), /*#__PURE__*/React.createElement("span", {
      className: "f-deck__mini-count"
    }, services.length, " \u062E\u062F\u0645\u0629")), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__full"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "f-deck__name"
    }, s.name), /*#__PURE__*/React.createElement("p", {
      className: "f-deck__blurb"
    }, s.blurb), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__chips"
    }, sample.map(sv => /*#__PURE__*/React.createElement("span", {
      key: sv.code,
      className: "f-deck__chip"
    }, sv.code)), services.length > 4 && /*#__PURE__*/React.createElement("span", {
      className: "f-deck__chip f-deck__chip--more"
    }, "+", services.length - 4)), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__foot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-deck__stats"
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-deck__stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-n"
    }, services.length), /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-l"
    }, "\u062E\u062F\u0645\u0629")), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-n"
    }, today), /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-l"
    }, "\u0627\u0644\u064A\u0648\u0645")), /*#__PURE__*/React.createElement("div", {
      className: "f-deck__stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-n"
    }, avgSla, /*#__PURE__*/React.createElement("small", {
      style: {
        fontSize: '0.65em',
        marginInlineStart: 2
      }
    }, "\u064A")), /*#__PURE__*/React.createElement("span", {
      className: "f-deck__stat-l"
    }, "\u0645\u062A\u0648\u0633\u0637"))), /*#__PURE__*/React.createElement("button", {
      className: "f-deck__cta syn__cta",
      onClick: e => {
        e.stopPropagation();
        nav('services', {
          section: s.code
        });
      }
    }, /*#__PURE__*/React.createElement("svg", {
      className: "arc",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "1",
      y: "1",
      width: "calc(100% - 2px)",
      height: "calc(100% - 2px)",
      rx: "14",
      pathLength: "100"
    })), /*#__PURE__*/React.createElement("span", {
      className: "syn__cta-roll"
    }, /*#__PURE__*/React.createElement("span", {
      className: "syn__cta-roll-stack"
    }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0641\u062A\u062D \u0627\u0644\u0642\u0633\u0645"), /*#__PURE__*/React.createElement("span", null, "\u062A\u0635\u0641\u0651\u062D \u0627\u0644\u062E\u062F\u0645\u0627\u062A"))), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_back"
    })))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-deck__dots",
    role: "tablist",
    "aria-label": "\u0627\u0644\u0623\u0642\u0633\u0627\u0645"
  }, window.SECTIONS.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.code,
    className: `f-deck__dot ${open === i ? 'is-on' : ''}`,
    style: {
      '--dd-c': DEPT_COLORS[s.code]
    },
    onClick: () => setOpen(i),
    "aria-label": s.name
  }))));
}

// =============================================================
// 2) SERVICES EXPRESS — most-used services, instant start
// =============================================================
function ServicesExpress({
  nav
}) {
  const top = useMemo(() => [...window.SERVICES].sort((a, b) => b.popularity - a.popularity).slice(0, 8), []);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt"
  })), "\u0627\u0628\u062F\u0623 \u062E\u062F\u0645\u0629 \u0645\u0628\u0627\u0634\u0631\u0629"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u0627\u0644\u0623\u0643\u062B\u0631 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0627\u064B \u0641\u064A \u0645\u0631\u0643\u0632\u0643 \u2014 \u0646\u0642\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0644\u0644\u0641\u0648\u0631\u0645\u0629"))), /*#__PURE__*/React.createElement("div", {
    className: "f-express"
  }, top.map(svc => {
    const sec = window.SECTION_MAP[svc.section];
    return /*#__PURE__*/React.createElement("button", {
      key: svc.code,
      className: "f-exp",
      style: {
        '--e-c': DEPT_COLORS[svc.section]
      },
      onClick: () => nav('form', {
        code: svc.code
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-exp__ico"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: svc.icon
    })), /*#__PURE__*/React.createElement("span", {
      className: "f-exp__main"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-exp__name"
    }, svc.short || svc.name), /*#__PURE__*/React.createElement("span", {
      className: "f-exp__meta"
    }, svc.code, " \xB7 ", svc.sla, "\u064A \xB7 ", sec.name)), /*#__PURE__*/React.createElement("span", {
      className: "f-exp__go"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_back"
    })));
  })));
}

// =============================================================
// 3) TIPS TICKER — rotates per refresh, managed via Admin page
// =============================================================
function TipsTicker({
  nav
}) {
  const [version, setVersion] = useState(0);
  useEffect(() => window.DB && window.DB.tips.subscribe(() => setVersion(v => v + 1)), []);
  const tips = useMemo(() => {
    if (!window.DB) return [];
    return window.DB.tips.list().filter(t => t.active !== false);
  }, [version]);
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * Math.max(1, tips.length)));
  useEffect(() => {
    if (idx >= tips.length && tips.length > 0) setIdx(0);
  }, [tips.length, idx]);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (paused || tips.length === 0) return;
    setProgress(0);
    const id = setInterval(() => {
      setProgress(p => {
        const next = p + 100 / 100;
        if (next >= 100) {
          setIdx(i => (i + 1) % tips.length);
          return 0;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(id);
  }, [idx, paused, tips.length]);
  if (tips.length === 0) return null;
  const t = tips[idx] || tips[0];
  return /*#__PURE__*/React.createElement("section", {
    className: "f-ticker",
    style: {
      '--t-c': t.c
    },
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-ticker__rail",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-ticker__rail-fill",
    style: {
      height: progress + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-ticker__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.ico
  })), /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "f-ticker__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-ticker__toprow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-ticker__tag"
  }, t.tag), /*#__PURE__*/React.createElement("span", {
    className: "f-ticker__by"
  }, t.by)), /*#__PURE__*/React.createElement("div", {
    className: "f-ticker__title"
  }, t.title), /*#__PURE__*/React.createElement("p", {
    className: "f-ticker__body"
  }, t.body)), /*#__PURE__*/React.createElement("div", {
    className: "f-ticker__side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-ticker__nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-ticker__btn",
    onClick: () => setIdx(i => (i - 1 + tips.length) % tips.length),
    "aria-label": "\u0627\u0644\u0633\u0627\u0628\u0642"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right"
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-ticker__count"
  }, idx + 1, " / ", tips.length), /*#__PURE__*/React.createElement("button", {
    className: "f-ticker__btn",
    onClick: () => setIdx(i => (i + 1) % tips.length),
    "aria-label": "\u0627\u0644\u062A\u0627\u0644\u064A"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left"
  }))), window.Auth && window.Auth.can('tips.write') && /*#__PURE__*/React.createElement("button", {
    className: "f-ticker__add",
    onClick: () => nav && nav('admin', {
      tab: 'tips'
    }),
    title: "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0646\u0635\u0627\u0626\u062D"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "add"
  }), " \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0646\u0635\u0627\u0626\u062D")));
}

// =============================================================
// 4) SPOTLIGHT — rotating featured service
// =============================================================
const SCENES = [{
  c: 'var(--f-cs)'
}, {
  c: 'var(--f-ct)'
}, {
  c: 'var(--f-cb)'
}, {
  c: 'var(--f-ca)'
}];
function Spotlight({
  nav
}) {
  const top = useMemo(() => [...window.SERVICES].sort((a, b) => b.popularity - a.popularity).slice(0, 4), []);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const id = setInterval(() => {
      setProgress(p => {
        const next = p + 100 / 80;
        if (next >= 100) {
          setIdx(i => (i + 1) % top.length);
          return 0;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(id);
  }, [idx, paused, top.length]);
  const svc = top[idx];
  const sec = window.SECTION_MAP[svc.section];
  const scene = SCENES[idx % SCENES.length];
  return /*#__PURE__*/React.createElement("section", {
    className: "f-spot-wrap",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "auto_awesome"
  })), "\u062E\u062F\u0645\u0629 \u0645\u062E\u062A\u0627\u0631\u0629"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u062A\u062A\u0628\u062F\u0651\u0644 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0628\u064A\u0646 \u0623\u0643\u062B\u0631 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0627\u064B \u2014 \u062A\u0648\u0642\u0651\u0641 \u0639\u0646\u062F \u0627\u0644\u062A\u0645\u0631\u064A\u0631"))), /*#__PURE__*/React.createElement("article", {
    key: svc.code,
    className: "f-spot",
    style: {
      '--sp-c': scene.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-spot__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: svc.icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-spot__chips"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-spot__chip"
  }, "#", idx + 1, " \u0627\u0644\u0623\u0643\u062B\u0631 \u0637\u0644\u0628\u0627\u064B"), /*#__PURE__*/React.createElement("span", {
    className: "f-spot__chip"
  }, sec.name), /*#__PURE__*/React.createElement("span", {
    className: "f-spot__chip"
  }, svc.code)), /*#__PURE__*/React.createElement("h3", {
    className: "f-spot__name"
  }, svc.name), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "schedule"
  }), " \u0645\u062F\u0651\u0629 \u0645\u0639\u062A\u0627\u062F\u0629 ", svc.sla, " \u0623\u064A\u0627\u0645"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "local_fire_department"
  }), " \u0637\u0644\u0628 ", svc.popularity, "\u066A"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "payments"
  }), " ", svc.fixedPrice ? fmtIQD(svc.fixedPrice) : svc.priceNote || 'حسب الصنف'))), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__side"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-spot__cta syn__cta",
    onClick: () => nav('form', {
      code: svc.code
    })
  }, /*#__PURE__*/React.createElement("svg", {
    className: "arc",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "calc(100% - 2px)",
    height: "calc(100% - 2px)",
    rx: "22",
    pathLength: "100"
  })), /*#__PURE__*/React.createElement("span", {
    className: "syn__cta-roll"
  }, /*#__PURE__*/React.createElement("span", {
    className: "syn__cta-roll-stack"
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0639\u0628\u0626\u0629"), /*#__PURE__*/React.createElement("span", null, "\u0627\u0641\u062A\u062D \u0627\u0644\u0646\u0645\u0648\u0630\u062C"))), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back"
  })), /*#__PURE__*/React.createElement("button", {
    className: "f-spot__alt",
    onClick: () => nav('detail', {
      code: svc.code
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  }), " \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__progress"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-spot__progress-fill",
    style: {
      width: progress + '%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-spot__arrow",
    onClick: () => setIdx(i => (i - 1 + top.length) % top.length)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right"
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-spot__dots"
  }, top.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.code,
    className: `f-spot__dot ${i === idx ? 'is-on' : ''}`,
    style: {
      '--dot-c': SCENES[i % SCENES.length].c
    },
    onClick: () => {
      setIdx(i);
      setProgress(0);
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "f-spot__arrow",
    onClick: () => setIdx(i => (i + 1) % top.length)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left"
  })), /*#__PURE__*/React.createElement("button", {
    className: "f-spot__pause",
    onClick: () => setPaused(p => !p)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: paused ? 'play_arrow' : 'pause'
  }), paused ? 'متوقف' : 'تلقائي')));
}

// =============================================================
// 5) BOTTOM — stats + activity + sidebar
// =============================================================
function Spark({
  values
}) {
  const max = Math.max(...values);
  return /*#__PURE__*/React.createElement("div", {
    className: "f-spark",
    "aria-hidden": "true"
  }, values.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: i === values.length - 1 ? 'last' : '',
    style: {
      height: Math.max(10, v / max * 100) + '%'
    }
  })));
}
function Stats() {
  const k = window.KPIS;
  const items = [{
    c: 'var(--f-cs)',
    ico: 'bolt',
    lbl: 'طلبات اليوم',
    val: k.todayCases,
    unit: 'طلب',
    d: '+12%',
    sub: 'منذ 09:00 صباحاً',
    seed: 3
  }, {
    c: 'var(--f-ct)',
    ico: 'pending_actions',
    lbl: 'قيد المعالجة',
    val: k.pending,
    unit: 'حالة',
    d: '+5%',
    sub: '23 بانتظار توقيعك',
    seed: 9
  }, {
    c: 'var(--f-cb)',
    ico: 'payments',
    lbl: 'محصّل اليوم',
    val: fmt(k.collected),
    unit: 'د.ع',
    d: '+8%',
    sub: 'من 38 معاملة',
    seed: 17
  }, {
    c: 'var(--f-ca)',
    ico: 'sentiment_satisfied',
    lbl: 'رضا المشتركين',
    val: k.satisfaction,
    unit: '%',
    d: '+2%',
    sub: 'على 124 تقييم',
    seed: 11
  }];
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "insights"
  })), "\u0627\u0644\u0625\u062D\u0635\u0627\u0621\u0627\u062A \u0648\u0627\u0644\u0646\u062A\u0627\u0626\u062C"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u064A\u0648\u0645 \u2014 \u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0639\u0645\u0642 \u0641\u064A \u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631"))), /*#__PURE__*/React.createElement("div", {
    className: "f-stats"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "f-stat",
    style: {
      '--st-c': it.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-stat__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-stat__lbl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-stat__lbl-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.ico
  })), it.lbl), /*#__PURE__*/React.createElement("span", {
    className: "f-stat__delta up"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_upward"
  }), it.d)), /*#__PURE__*/React.createElement("div", {
    className: "f-stat__val"
  }, it.val, /*#__PURE__*/React.createElement("span", {
    className: "f-stat__unit"
  }, it.unit)), /*#__PURE__*/React.createElement("div", {
    className: "f-stat__sub"
  }, it.sub), /*#__PURE__*/React.createElement(Spark, {
    values: bars(it.seed)
  })))));
}
function Activity() {
  return /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt"
  }), " \u0622\u062E\u0631 \u0627\u0644\u062D\u0631\u0643\u0629"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u062D\u064A\u0651\u0629 \u0641\u064A \u0645\u0631\u0643\u0632\u0643")), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--ghost f-btn--sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter_alt"
  }), " \u0641\u0644\u062A\u0631\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "f-feed"
  }, window.RECENT_CASES.map(c => {
    const svc = window.SERVICE_MAP[c.svc];
    const leadC = c.priority === 'urgent' ? 'var(--f-err)' : c.priority === 'vip' ? 'var(--f-warn)' : DEPT_COLORS[svc.section];
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "f-feed__row",
      style: {
        '--lead-c': leadC
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-feed__lead"
    }), /*#__PURE__*/React.createElement("div", {
      className: "f-feed__main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-feed__title"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-feed__code"
    }, svc.code), c.subscriber), /*#__PURE__*/React.createElement("div", {
      className: "f-feed__sub"
    }, c.id, " \xB7 ", svc.name)), /*#__PURE__*/React.createElement("span", {
      className: "f-feed__status"
    }, c.status), /*#__PURE__*/React.createElement("span", {
      className: "f-feed__time"
    }, c.age), /*#__PURE__*/React.createElement("span", {
      className: "f-feed__chev"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron_left"
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-card__foot"
  }, /*#__PURE__*/React.createElement("span", null, "\u0639\u0631\u0636 6 \u0645\u0646 213 \u062D\u0627\u0644\u0629 \u0646\u0634\u0637\u0629"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 \u2190")));
}
function Sidebar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "donut_small"
  }), " \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0634\u0647\u0631\u064A"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "2,481 \u062D\u0627\u0644\u0629 \xB7 94% \u0636\u0645\u0646 SLA"))), /*#__PURE__*/React.createElement("div", {
    className: "f-usage"
  }, window.SECTIONS.map(s => {
    const count = window.SERVICES.filter(x => x.section === s.code).length * 19;
    const pct = Math.min(100, Math.round(count / 600 * 100));
    return /*#__PURE__*/React.createElement("div", {
      key: s.code,
      className: "f-usage__row",
      style: {
        '--u-c': DEPT_COLORS[s.code]
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-usage__head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-usage__lbl"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f-usage__code"
    }, s.code), s.name), /*#__PURE__*/React.createElement("span", {
      className: "f-usage__n"
    }, count)), /*#__PURE__*/React.createElement("div", {
      className: "f-usage__bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "f-usage__fill",
      style: {
        width: pct + '%'
      }
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "terminal"
  }), " \u0623\u0648\u0627\u0645\u0631 \u0633\u0631\u064A\u0639\u0629"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u0627\u0636\u063A\u0637 ", /*#__PURE__*/React.createElement("span", {
    className: "f-kbd"
  }, "\u2318K"), " \u0644\u0644\u0628\u062D\u062B \u0627\u0644\u0634\u0627\u0645\u0644"))), /*#__PURE__*/React.createElement("div", {
    className: "f-quicks"
  }, [{
    lbl: 'فتح حالة جديدة',
    kbd: 'N',
    kind: 'newcase',
    c: 'var(--f-cs)'
  }, {
    lbl: 'الانتقال للحالات',
    kbd: 'G I',
    kind: 'meter',
    c: 'var(--f-ct)'
  }, {
    lbl: 'الانتقال للخدمات',
    kbd: 'G S',
    kind: 'pole',
    c: 'var(--f-cb)'
  }, {
    lbl: 'تبديل السمة',
    kbd: '⌘J',
    kind: 'bill',
    c: 'var(--f-ca)'
  }].map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: `f-quick qik qik--${it.kind}`,
    style: {
      '--q-c': it.c,
      '--c-c': it.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-quick__ico"
  }, it.kind === 'newcase' && /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3 H17 L21 7 V22.5 H6 Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9.5",
    y1: "12",
    x2: "16.5",
    y2: "12",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("line", {
    className: "plusH",
    x1: "9.5",
    y1: "17",
    x2: "16.5",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    className: "plusV",
    x1: "13",
    y1: "13.5",
    x2: "13",
    y2: "20.5"
  })), it.kind === 'meter' && /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 16 A 10 10 0 0 1 23 16"
  }), /*#__PURE__*/React.createElement("line", {
    className: "tick",
    x1: "4.5",
    y1: "12.5",
    x2: "6",
    y2: "13.5"
  }), /*#__PURE__*/React.createElement("line", {
    className: "tick",
    x1: "13",
    y1: "6",
    x2: "13",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    className: "tick",
    x1: "21.5",
    y1: "12.5",
    x2: "20",
    y2: "13.5"
  }), /*#__PURE__*/React.createElement("line", {
    className: "needle",
    x1: "13",
    y1: "15",
    x2: "17",
    y2: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "s",
    cx: "13",
    cy: "15",
    r: "1.5"
  })), it.kind === 'pole' && /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "3",
    x2: "13",
    y2: "22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8 C 9 12, 17 12, 23 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6 L13 9 L20 6",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "spark s",
    cx: "3",
    cy: "8",
    r: "1.6"
  })), it.kind === 'bill' && /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3.5 H17 L20.5 7 V22.5 H6 Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9.5",
    y1: "11",
    x2: "16.5",
    y2: "11",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9.5",
    y1: "14.5",
    x2: "14.5",
    y2: "14.5",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("g", {
    className: "stamp"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "s",
    cx: "17",
    cy: "17",
    r: "4.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 17 L16.4 18.5 L19 15.8"
  })))), /*#__PURE__*/React.createElement("span", {
    className: "f-quick__lbl"
  }, it.lbl), /*#__PURE__*/React.createElement("span", {
    className: "f-kbd"
  }, it.kbd))))));
}

// =============================================================
// APP
// =============================================================
function App() {
  // -----------------------------------------------------------------
  // All hooks first (Rules of Hooks) — conditional returns later.
  // -----------------------------------------------------------------
  const [dark, setDark] = useState(() => localStorage.getItem('tq-final-dark') === '1');
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('tq-final-dark', dark ? '1' : '0');
  }, [dark]);

  // Auth state: re-render whenever Auth changes (login, logout, role change…)
  // and also when the users table changes (DB seed completes asynchronously
  // on first load, so the initial render may have no users yet).
  const [, setAuthTick] = useState(0);
  useEffect(() => {
    const unsubA = window.Auth && window.Auth.subscribe(() => setAuthTick(t => t + 1));
    const unsubU = window.DB && window.DB.users.subscribe(() => setAuthTick(t => t + 1));
    return () => {
      unsubA && unsubA();
      unsubU && unsubU();
    };
  }, []);
  const [route, setRoute] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('tq-f-route') || '{"name":"overview"}');
    } catch {
      return {
        name: 'overview'
      };
    }
  });
  useEffect(() => {
    localStorage.setItem('tq-f-route', JSON.stringify(route));
  }, [route]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.name, route.code, route.section]);
  const [spot, setSpot] = useState(false);
  useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSpot(s => !s);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // -----------------------------------------------------------------
  // Auth gate (after all hooks have been called)
  // -----------------------------------------------------------------
  const me = window.Auth && window.Auth.currentUser();
  if (!me) {
    return /*#__PURE__*/React.createElement(window.LoginPage, {
      onSuccess: () => setAuthTick(t => t + 1)
    });
  }
  if (me.mustChangePassword) {
    return /*#__PURE__*/React.createElement(window.ForceChangePassword, {
      onDone: () => setAuthTick(t => t + 1)
    });
  }
  // -----------------------------------------------------------------

  const nav = (name, params = {}) => {
    // Guard: admin routes require admin permission.
    if (name === 'admin' && !window.Auth.can('role.manage') && !window.Auth.can('user.read') && !window.Auth.can('settings.manage')) {
      setRoute({
        name: 'overview'
      });
      return;
    }
    setRoute({
      name,
      ...params
    });
  };
  const noop = () => setSpot(true);

  // top tabs map to routes
  const tab = ['services', 'detail', 'form'].includes(route.name) ? 'services' : route.name === 'cases' ? 'cases' : route.name === 'branches' ? 'branches' : route.name === 'pricing' ? 'pricing' : route.name === 'guide' ? 'guide' : route.name === 'reports' ? 'reports' : route.name === 'admin' ? 'admin' : 'overview';
  let page = null;
  if (route.name === 'services') page = /*#__PURE__*/React.createElement(window.ServicesPage, {
    nav: nav,
    section: route.section
  });else if (route.name === 'detail') page = /*#__PURE__*/React.createElement(window.ServiceDetailPage, {
    nav: nav,
    code: route.code
  });else if (route.name === 'form') page = /*#__PURE__*/React.createElement(window.FormPage, {
    nav: nav,
    code: route.code
  });else if (route.name === 'cases') page = /*#__PURE__*/React.createElement(window.CasesPage, {
    nav: nav
  });else if (route.name === 'branches') page = /*#__PURE__*/React.createElement(window.BranchesPage, {
    nav: nav
  });else if (route.name === 'pricing') page = /*#__PURE__*/React.createElement(window.PricingPage, {
    nav: nav
  });else if (route.name === 'guide') page = /*#__PURE__*/React.createElement(window.GuidePage, {
    nav: nav
  });else if (route.name === 'admin') page = /*#__PURE__*/React.createElement(window.AdminPage, {
    nav: nav,
    initialTab: route.tab
  });else if (route.name === 'reports') page = /*#__PURE__*/React.createElement("div", {
    className: "fp-enter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement("div", {
    className: "f-two"
  }, /*#__PURE__*/React.createElement(Activity, null), /*#__PURE__*/React.createElement(Sidebar, null)));else page = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    onCmdK: noop,
    nav: nav
  }), /*#__PURE__*/React.createElement(Departments, {
    nav: nav
  }), /*#__PURE__*/React.createElement(ServicesExpress, {
    nav: nav
  }), /*#__PURE__*/React.createElement(TipsTicker, {
    nav: nav
  }), /*#__PURE__*/React.createElement(Spotlight, {
    nav: nav
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement("div", {
    className: "f-two"
  }, /*#__PURE__*/React.createElement(Activity, null), /*#__PURE__*/React.createElement(Sidebar, null)));
  return /*#__PURE__*/React.createElement("div", {
    className: "f-shell"
  }, /*#__PURE__*/React.createElement(TopChrome, {
    tab: tab,
    setTab: k => nav(k),
    dark: dark,
    setDark: setDark,
    onCmdK: noop,
    nav: nav
  }), /*#__PURE__*/React.createElement("main", {
    className: "f-page"
  }, page), /*#__PURE__*/React.createElement(window.SpotlightOverlay, {
    open: spot,
    onClose: () => setSpot(false),
    nav: nav
  }), /*#__PURE__*/React.createElement(SignatureFooter, null));
}

// =============================================================
// SIGNATURE FOOTER — distinctive credits strip
// =============================================================
function SignatureFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "f-sigfoot",
    role: "contentinfo",
    "aria-label": "Designed and developed by Hussein Ali"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-sigfoot__rule",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__rule-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__rule-mark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__rule-diamond"
  })), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__rule-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "f-sigfoot__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-sigfoot__brand",
    "aria-label": "\u062C\u0647\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__brand-c"
  }, "\xA9"), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__brand-y"
  }, "2026"), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__brand-bar",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__brand-name"
  }, "\u062A\u062F\u0641\u0651\u0642 \u0627\u0644\u062E\u064A\u0631"), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__brand-sub"
  }, "\u0643\u0647\u0631\u0628\u0627\u0621 \u0627\u0644\u0631\u0635\u0627\u0641\u0629 \xB7 \u0641\u0631\u0639 \u0627\u0644\u0646\u0636\u0627\u0644")), /*#__PURE__*/React.createElement("div", {
    className: "f-sigfoot__credit"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__credit-eyebrow"
  }, "Designed & Developed"), /*#__PURE__*/React.createElement("h6", {
    className: "f-sigfoot__credit-name"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__credit-name-en"
  }, "Hussein\xA0Ali")), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__credit-meta"
  }, /*#__PURE__*/React.createElement("span", null, "Software \xB7 Design"), /*#__PURE__*/React.createElement("span", {
    className: "f-sigfoot__credit-meta-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, "Baghdad \u2014 Iraq")))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(window.ErrorBoundary, null, /*#__PURE__*/React.createElement(window.ToastProvider, null, /*#__PURE__*/React.createElement(App, null))));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_attach.js
try { (() => {
// =============================================================
// FINAL — File-reading helpers for attachments (per-doc + general)
// Used by the inline "attach next to each document" UI.
// =============================================================

(function () {
  function readFileAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = () => reject(r.error);
      r.readAsArrayBuffer(file);
    });
  }
  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = () => reject(r.error);
      r.readAsDataURL(file);
    });
  }
  window.readFileAsArrayBuffer = readFileAsArrayBuffer;
  window.readFileAsDataURL = readFileAsDataURL;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_attach.js", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_auth.js
try { (() => {
// =============================================================
// FINAL — Auth Engine (RBAC foundation)
//
// Foundation for the enterprise RBAC system. Designed to be
// swapped for a real backend (Express + Argon2 + JWT) by
// replacing only the methods marked "BACKEND BOUNDARY".
//
// Current responsibilities:
//   - Password verify (against DB.users.passwordHash)
//   - Session lifecycle (issue, refresh, expire, revoke)
//   - Inactivity-based timeout (settings.security.sessionTimeoutMinutes)
//   - Absolute session cap (settings.security.sessionAbsoluteHours)
//   - Failed-login tracking + account lockout
//   - Force password change (mustChangePassword flag)
//   - Permission resolution (user → role → permission keys)
//   - Branch / department scoping (foundation for multi-tenant)
// =============================================================

(function () {
  const SESSION_KEY = 'tq.auth.session.v2';
  const ACTIVITY_KEY = 'tq.auth.activity.v2';
  const listeners = new Set();

  // ----- session read/write -----
  function readSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    } catch {
      return null;
    }
  }
  function writeSession(s) {
    if (s == null) {
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(ACTIVITY_KEY);
    } else {
      localStorage.setItem(SESSION_KEY, JSON.stringify(s));
      bumpActivity();
    }
    listeners.forEach(fn => {
      try {
        fn();
      } catch (e) {}
    });
  }
  function bumpActivity() {
    localStorage.setItem(ACTIVITY_KEY, String(Date.now()));
  }
  function lastActivity() {
    const v = Number(localStorage.getItem(ACTIVITY_KEY) || '0');
    return v || 0;
  }

  // ----- session validation -----
  function isSessionValid(s) {
    if (!s) return false;
    const settings = window.DB && window.DB.settings.get() || {};
    const sec = settings.security || {};
    const inactivityMs = (sec.sessionTimeoutMinutes || 30) * 60 * 1000;
    const absoluteMs = (sec.sessionAbsoluteHours || 12) * 60 * 60 * 1000;
    const now = Date.now();
    if (s.expiresAt && now > s.expiresAt) return false; // absolute
    if (s.signedAt && now > s.signedAt + absoluteMs) return false;
    const last = lastActivity() || s.signedAt || 0;
    if (now - last > inactivityMs) return false; // inactivity
    return true;
  }

  // ----- public: current user -----
  function currentUser() {
    const s = readSession();
    if (!s) return null;
    if (!isSessionValid(s)) {
      writeSession(null);
      return null;
    }
    // DB may still be seeding asynchronously on first load. If the users
    // table is empty, don't wipe the session — just return null this tick;
    // subscribers will re-render once seed completes.
    if (!window.DB) return null;
    const users = window.DB.users.list();
    if (users.length === 0) return null;
    const u = window.DB.users.get(s.userId);
    if (!u) {
      // User truly missing — wipe session
      writeSession(null);
      return null;
    }
    if (!u.active) {
      writeSession(null);
      return null;
    }
    return u;
  }

  // ----- BACKEND BOUNDARY — login -----
  // Returns { ok, user } on success, or { ok:false, code, retryAfter } on failure.
  // Failure codes: USER_NOT_FOUND | DISABLED | LOCKED | BAD_PASSWORD | RATE_LIMIT
  async function signIn(usernameOrEmail, password, opts = {}) {
    if (!window.DB) return {
      ok: false,
      code: 'SYSTEM_NOT_READY'
    };
    const id = (usernameOrEmail || '').trim().toLowerCase();
    if (!id || !password) return {
      ok: false,
      code: 'BAD_INPUT'
    };
    const users = window.DB.users.list();
    const u = users.find(x => (x.username || '').toLowerCase() === id || (x.email || '').toLowerCase() === id);
    if (!u) {
      window.DB.log('auth.login.fail', id, {
        reason: 'unknown_user'
      });
      return {
        ok: false,
        code: 'USER_NOT_FOUND'
      };
    }
    if (!u.active) {
      window.DB.log('auth.login.fail', u.username, {
        reason: 'disabled'
      });
      return {
        ok: false,
        code: 'DISABLED'
      };
    }

    // Lockout check
    const settings = window.DB.settings.get();
    const sec = settings.security || {};
    const now = Date.now();
    if (u.lockedUntil && now < u.lockedUntil) {
      const retryAfter = Math.ceil((u.lockedUntil - now) / 1000);
      return {
        ok: false,
        code: 'LOCKED',
        retryAfter
      };
    }

    // Verify password
    const stored = {
      hash: u.passwordHash,
      salt: u.passwordSalt
    };
    const ok = await window.DB.verifyPassword(password, stored);
    if (!ok) {
      const failed = (u.failedLoginCount || 0) + 1;
      const patch = {
        failedLoginCount: failed
      };
      const max = sec.maxFailedAttempts || 5;
      if (failed >= max) {
        patch.lockedUntil = now + (sec.lockoutMinutes || 15) * 60 * 1000;
        patch.failedLoginCount = 0; // reset counter on lock
        window.DB.users.update(u.id, patch);
        window.DB.log('auth.login.lockout', u.username, {
          failed
        });
        return {
          ok: false,
          code: 'LOCKED',
          retryAfter: (sec.lockoutMinutes || 15) * 60
        };
      }
      window.DB.users.update(u.id, patch);
      window.DB.log('auth.login.fail', u.username, {
        reason: 'bad_password',
        failed
      });
      return {
        ok: false,
        code: 'BAD_PASSWORD',
        remaining: max - failed
      };
    }

    // Success — clear failure counters, issue session
    window.DB.users.update(u.id, {
      failedLoginCount: 0,
      lockedUntil: null,
      lastLoginAt: now,
      lastLoginIp: 'local'
    });
    const session = {
      id: 's_' + now.toString(36) + '_' + Math.random().toString(36).slice(2, 8),
      userId: u.id,
      username: u.username,
      signedAt: now,
      expiresAt: now + (sec.sessionAbsoluteHours || 12) * 60 * 60 * 1000,
      ip: 'local',
      ua: navigator.userAgent.slice(0, 200)
    };
    // Track in sessions table (for "view active sessions" + force-logout)
    try {
      window.DB.sessions.create({
        ...session,
        revoked: false
      });
    } catch (e) {}
    writeSession(session);
    window.DB.log('auth.login.success', u.username, {
      sessionId: session.id
    });
    return {
      ok: true,
      user: u,
      mustChangePassword: !!u.mustChangePassword
    };
  }

  // ----- BACKEND BOUNDARY — sign out -----
  function signOut() {
    const s = readSession();
    const u = currentUser();
    if (s && window.DB) {
      const sess = window.DB.sessions.find(x => x.id === s.id);
      if (sess) window.DB.sessions.update(sess.id, {
        revoked: true,
        revokedAt: Date.now()
      });
    }
    if (u && window.DB) window.DB.log('auth.logout', u.username);
    writeSession(null);
  }

  // ----- BACKEND BOUNDARY — change password -----
  async function changePassword(currentPassword, newPassword) {
    const u = currentUser();
    if (!u) return {
      ok: false,
      code: 'NOT_AUTHENTICATED'
    };
    const settings = window.DB.settings.get();
    const policy = settings.security || {};

    // Verify current
    const ok = await window.DB.verifyPassword(currentPassword, {
      hash: u.passwordHash,
      salt: u.passwordSalt
    });
    if (!ok) {
      window.DB.log('auth.password.change.fail', u.username, {
        reason: 'wrong_current'
      });
      return {
        ok: false,
        code: 'BAD_CURRENT'
      };
    }
    // Policy
    const policyError = validatePassword(newPassword, policy);
    if (policyError) return {
      ok: false,
      code: 'POLICY',
      message: policyError
    };
    const h = await window.DB.hashPassword(newPassword);
    window.DB.users.update(u.id, {
      passwordHash: h.hash,
      passwordSalt: h.salt,
      passwordAlgo: h.algo,
      mustChangePassword: false,
      passwordChangedAt: Date.now()
    });
    window.DB.log('auth.password.change', u.username);
    listeners.forEach(fn => {
      try {
        fn();
      } catch {}
    });
    return {
      ok: true
    };
  }

  // ----- BACKEND BOUNDARY — admin reset password -----
  async function adminResetPassword(targetUserId, newPassword) {
    const me = currentUser();
    if (!me) return {
      ok: false,
      code: 'NOT_AUTHENTICATED'
    };
    if (!can('user.reset_password')) return {
      ok: false,
      code: 'FORBIDDEN'
    };
    const target = window.DB.users.get(targetUserId);
    if (!target) return {
      ok: false,
      code: 'NOT_FOUND'
    };
    const settings = window.DB.settings.get();
    const policyError = validatePassword(newPassword, settings.security || {});
    if (policyError) return {
      ok: false,
      code: 'POLICY',
      message: policyError
    };
    const h = await window.DB.hashPassword(newPassword);
    window.DB.users.update(target.id, {
      passwordHash: h.hash,
      passwordSalt: h.salt,
      passwordAlgo: h.algo,
      mustChangePassword: true,
      failedLoginCount: 0,
      lockedUntil: null
    });
    window.DB.log('user.password.reset', target.username, {
      by: me.username
    });
    return {
      ok: true
    };
  }

  // ----- Password policy validation -----
  function validatePassword(pwd, policy) {
    pwd = pwd || '';
    if (pwd.length < (policy.passwordMinLength || 8)) return `كلمة المرور يجب أن تكون ${policy.passwordMinLength || 8} أحرف على الأقل`;
    if (policy.passwordRequireDigit && !/\d/.test(pwd)) return 'كلمة المرور يجب أن تحتوي على رقم';
    if (policy.passwordRequireMixedCase && !(/[a-z]/.test(pwd) && /[A-Z]/.test(pwd))) return 'كلمة المرور يجب أن تحتوي على حروف صغيرة وكبيرة';
    if (policy.passwordRequireSymbol && !/[^A-Za-z0-9]/.test(pwd)) return 'كلمة المرور يجب أن تحتوي على رمز خاص';
    return null;
  }

  // =============================================================
  // PERMISSIONS — resolve user → role → permission keys
  // =============================================================
  // Legacy permission aliases — older parts of the UI still use the
  // v1 permission keys. Map them to the new v2 keys so existing pages
  // keep working while we migrate them gradually.
  const PERM_ALIASES = {
    'users.read': 'user.read',
    'users.write': 'user.update',
    'users.delete': 'user.delete',
    'services.write': 'services.manage',
    'services.delete': 'services.manage',
    'tips.write': 'tips.manage',
    'tips.delete': 'tips.manage',
    'admin.access': 'user.read',
    'admin.settings': 'settings.manage',
    'cases.read': 'request.read',
    'cases.write': 'request.update',
    'forms.read': 'request.read',
    'forms.write': 'request.create',
    'forms.print': 'request.print',
    'data.reset': 'settings.manage'
  };
  function userPermissions(user) {
    user = user || currentUser();
    if (!user) return new Set();
    const role = window.DB.roles.get(user.roleId);
    if (!role) return new Set();
    return new Set(role.permissions || []);
  }
  function can(permKey, user) {
    const perms = userPermissions(user);
    if (perms.has(permKey)) return true;
    const alias = PERM_ALIASES[permKey];
    return !!(alias && perms.has(alias));
  }
  function canAny(keys, user) {
    const perms = userPermissions(user);
    return keys.some(k => perms.has(k));
  }
  function canAll(keys, user) {
    const perms = userPermissions(user);
    return keys.every(k => perms.has(k));
  }

  // =============================================================
  // SCOPING — branch / department isolation (foundation)
  // =============================================================
  // Returns a predicate function that tests if the current user can
  // see/modify a given record (record must have branchId/departmentId).
  // System admins (no branch restriction) pass through everything.
  function scopePredicate(user) {
    user = user || currentUser();
    if (!user) return () => false;
    // No branch assigned = full access (e.g. system_admin, auditor)
    if (!user.branchId && !user.departmentId) return () => true;
    return record => {
      if (!record) return false;
      if (user.branchId && record.branchId && record.branchId !== user.branchId) return false;
      if (user.departmentId && record.departmentId && record.departmentId !== user.departmentId) return false;
      return true;
    };
  }
  function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  // ----- inactivity tracker -----
  // Bump activity on any user interaction; expire session on long idleness.
  let _activityWired = false;
  function wireActivityTracking() {
    if (_activityWired) return;
    _activityWired = true;
    ['mousedown', 'keydown', 'touchstart', 'visibilitychange'].forEach(ev => {
      window.addEventListener(ev, () => {
        if (readSession()) bumpActivity();
      }, {
        passive: true
      });
    });
    // Check expiration every minute
    setInterval(() => {
      const s = readSession();
      if (!s) return;
      if (!isSessionValid(s)) {
        writeSession(null);
        if (window.DB) window.DB.log('auth.session.expired', s.username || '?');
      }
    }, 60 * 1000);
  }

  // -----------------------------------------------------------------
  // Compatibility helpers for legacy admin UI (uses role string + signInAs)
  // -----------------------------------------------------------------
  function roleLabel(userOrId) {
    if (!window.DB) return '';
    let user;
    if (typeof userOrId === 'string') user = window.DB.users.get(userOrId);else user = userOrId;
    if (!user) return '';
    const role = window.DB.roles.get(user.roleId);
    return role ? role.name : user.role || '';
  }

  // Map of legacy role string → label (admin UI selects from this)
  function getRoleLabels() {
    if (!window.DB) return {};
    return window.DB.roles.list().reduce((o, r) => {
      o[r.id] = r.name;
      o[r.key] = r.name;
      return o;
    }, {});
  }

  // -----------------------------------------------------------------
  // Public API
  // -----------------------------------------------------------------
  window.Auth = {
    // identity
    currentUser,
    isSessionValid: () => isSessionValid(readSession()),
    subscribe,
    // auth flow
    signIn,
    signOut,
    changePassword,
    adminResetPassword,
    validatePassword,
    // permissions
    can,
    canAny,
    canAll,
    userPermissions,
    // scoping
    scopePredicate,
    // helpers / legacy compat
    roleLabel,
    get ROLE_LABELS() {
      return getRoleLabels();
    },
    // tracking
    wireActivityTracking,
    bumpActivity
  };
  wireActivityTracking();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_auth.js", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_branches.jsx
try { (() => {
// =============================================================
// FINAL — Branches Page: نطاق التغطية والمحلات المشمولة
// =============================================================

function BranchesPage({
  nav
}) {
  const [q, setQ] = useState('');
  const [activeId, setActiveId] = useState(null);
  const [foundMahalla, setFoundMahalla] = useState(null);

  // Mahalla lookup as the user types numbers
  useEffect(() => {
    const qt = (q || '').trim();
    if (!qt) {
      setFoundMahalla(null);
      return;
    }
    if (/^\d+$/.test(qt)) {
      const b = window.findBranchByMahalla(qt);
      if (b) {
        setFoundMahalla({
          mahalla: qt,
          branch: b
        });
        setActiveId(b.id);
        return;
      }
    }
    setFoundMahalla(null);
  }, [q]);
  const filtered = useMemo(() => {
    const qt = (q || '').trim();
    if (!qt) return window.BRANCHES;
    const isNum = /^\d+$/.test(qt);
    return window.BRANCHES.filter(b => {
      if (isNum) return b.mahallas.includes(qt) || b.id.includes(qt);
      const t = qt.toLowerCase();
      return b.name.includes(qt) || b.district.includes(qt) || b.manager.includes(qt) || b.id.toLowerCase().includes(t);
    });
  }, [q]);
  const stats = window.BRANCH_STATS;
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-enter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fp-back",
    onClick: () => nav('overview')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward"
  }), " \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"), /*#__PURE__*/React.createElement("header", {
    className: "fb-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-hero__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-hero__eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hub"
  }), " \u0646\u0637\u0627\u0642 \u0627\u0644\u062A\u063A\u0637\u064A\u0629"), /*#__PURE__*/React.createElement("h1", {
    className: "fb-hero__title"
  }, "\u0641\u0631\u0648\u0639 \u0643\u0647\u0631\u0628\u0627\u0621 \u0627\u0644\u0631\u0635\u0627\u0641\u0629 ", /*#__PURE__*/React.createElement("em", null, "\u0648\u0627\u0644\u0645\u062D\u0644\u0627\u062A \u0627\u0644\u0645\u0634\u0645\u0648\u0644\u0629")), /*#__PURE__*/React.createElement("p", {
    className: "fb-hero__lede"
  }, stats.total, " \u0641\u0631\u0639\u0627\u064B \u0645\u0648\u0632\u0651\u0639\u0627\u064B \u0639\u0644\u0649 ", stats.districts, " \u0645\u0646\u0627\u0637\u0642 \u0625\u062F\u0627\u0631\u064A\u0629\u060C \u062A\u062E\u062F\u0645 ", fmt(stats.subscribers), " \u0645\u0634\u062A\u0631\u0643 \u0639\u0628\u0631 ", stats.mahallas, " \u0645\u062D\u0644\u0629 \u0628\u0644\u062F\u064A\u0629. \u0627\u0633\u062A\u0639\u0645\u0644 \u0627\u0644\u0628\u062D\u062B \u0628\u0631\u0642\u0645 \u0627\u0644\u0645\u062D\u0644\u0629 \u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0641\u0631\u0639 \u0627\u0644\u0645\u062E\u062A\u0635 \u0641\u0648\u0631\u0627\u064B.")), /*#__PURE__*/React.createElement("div", {
    className: "fb-hero__kpis"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-kpi",
    style: {
      '--k-c': 'var(--f-cs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "domain"
  })), /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__val"
  }, stats.total), /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__lbl"
  }, "\u0641\u0631\u0639")), /*#__PURE__*/React.createElement("div", {
    className: "fb-kpi",
    style: {
      '--k-c': 'var(--f-ct)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map"
  })), /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__val"
  }, stats.mahallas), /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__lbl"
  }, "\u0645\u062D\u0644\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "fb-kpi",
    style: {
      '--k-c': 'var(--f-cb)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "groups"
  })), /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__val"
  }, fmt(stats.subscribers)), /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__lbl"
  }, "\u0645\u0634\u062A\u0631\u0643")), /*#__PURE__*/React.createElement("div", {
    className: "fb-kpi",
    style: {
      '--k-c': 'var(--f-ca)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "location_city"
  })), /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__val"
  }, stats.districts), /*#__PURE__*/React.createElement("span", {
    className: "fb-kpi__lbl"
  }, "\u0645\u0646\u0637\u0642\u0629 \u0625\u062F\u0627\u0631\u064A\u0629")))), /*#__PURE__*/React.createElement("div", {
    className: "fb-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "\u0627\u0628\u062D\u062B \u0628\u0631\u0642\u0645 \u0645\u062D\u0644\u0629 (\u0669\u0660\u0661) \u0623\u0648 \u0627\u0633\u0645 \u0641\u0631\u0639 \u0623\u0648 \u0645\u0646\u0637\u0642\u0629\u2026",
    dir: "auto"
  }), q && /*#__PURE__*/React.createElement("button", {
    className: "fb-search__clear",
    onClick: () => setQ('')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fb-toolbar__hint"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  }), "\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0645\u062D\u0644\u0627\u062A \u0641\u064A \u0628\u063A\u062F\u0627\u062F \u062A\u0643\u062A\u0628 \u0628\u0640 \u0663 \u062E\u0627\u0646\u0627\u062A (\u0645\u062B\u0644 \u0669\u0660\u0661\u060C \u0661\u0660\u0662) \u2014 \u0643\u0644 \u0641\u0631\u0639 \u064A\u062E\u062F\u0645 \u0646\u0637\u0627\u0642\u0627\u064B \u0645\u062A\u062C\u0627\u0648\u0631\u0627\u064B")), foundMahalla && /*#__PURE__*/React.createElement("div", {
    className: "fb-found"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-found__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "my_location"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\u0627\u0644\u0645\u062D\u0644\u0629 ", foundMahalla.mahalla), " \u062A\u062A\u0628\u0639 ", /*#__PURE__*/React.createElement("em", null, foundMahalla.branch.name), /*#__PURE__*/React.createElement("small", null, " \xB7 ", foundMahalla.branch.id, " \xB7 \u0627\u0644\u0645\u062F\u064A\u0631: ", foundMahalla.branch.manager)), /*#__PURE__*/React.createElement("a", {
    className: "fb-found__call",
    href: `tel:${foundMahalla.branch.phone}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "call"
  }), " \u0627\u062A\u0635\u0644 \u0628\u0627\u0644\u0641\u0631\u0639")), /*#__PURE__*/React.createElement("div", {
    className: "fb-grid"
  }, filtered.map(b => {
    const isActive = activeId === b.id;
    const loadClass = b.loadStatus.includes('شديد') ? 'fb-card--hot' : b.loadStatus.includes('ضغط') ? 'fb-card--warm' : 'fb-card--cool';
    return /*#__PURE__*/React.createElement("article", {
      key: b.id,
      className: `fb-card ${loadClass} ${isActive ? 'is-active' : ''} ${b.primary ? 'is-primary' : ''}`,
      onClick: () => setActiveId(isActive ? null : b.id)
    }, /*#__PURE__*/React.createElement("header", {
      className: "fb-card__head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-card__id"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fb-card__code"
    }, b.id), b.primary && /*#__PURE__*/React.createElement("span", {
      className: "fb-card__badge"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star"
    }), " \u0645\u0631\u0643\u0632\u0643")), /*#__PURE__*/React.createElement("span", {
      className: `fb-card__load`
    }, /*#__PURE__*/React.createElement("span", {
      className: "fb-card__load-dot"
    }), b.loadStatus)), /*#__PURE__*/React.createElement("h3", {
      className: "fb-card__name"
    }, b.name), /*#__PURE__*/React.createElement("p", {
      className: "fb-card__district"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "place"
    }), " ", b.district), /*#__PURE__*/React.createElement("div", {
      className: "fb-card__people"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fb-card__avatar"
    }, b.manager.split(' ')[1]?.[0] || 'م'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "fb-card__manager"
    }, b.manager), /*#__PURE__*/React.createElement("span", {
      className: "fb-card__role"
    }, "\u0645\u062F\u064A\u0631 \u0627\u0644\u0641\u0631\u0639"))), /*#__PURE__*/React.createElement("div", {
      className: "fb-card__meta"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "schedule"
    }), " ", b.hours), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "call"
    }), " ", /*#__PURE__*/React.createElement("a", {
      href: `tel:${b.phone}`,
      dir: "ltr"
    }, b.phone)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "location_on"
    }), " ", b.address), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "my_location"
    }), " ", /*#__PURE__*/React.createElement("code", {
      dir: "ltr"
    }, b.gps))), /*#__PURE__*/React.createElement("div", {
      className: "fb-card__chips"
    }, b.services.map(s => {
      const sec = window.SECTION_MAP[s];
      return /*#__PURE__*/React.createElement("span", {
        key: s,
        className: "fb-card__svc",
        style: {
          '--s-c': DEPT_COLORS[s]
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "fb-card__svc-dot"
      }), sec ? sec.name : s);
    })), /*#__PURE__*/React.createElement("div", {
      className: "fb-card__coverage"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-card__coverage-head"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "map"
    }), " \u0627\u0644\u0645\u062D\u0644\u0627\u062A \u0627\u0644\u0645\u0634\u0645\u0648\u0644\u0629"), /*#__PURE__*/React.createElement("b", null, b.mahallas.length)), /*#__PURE__*/React.createElement("div", {
      className: "fb-card__mahallas"
    }, b.mahallas.map(m => /*#__PURE__*/React.createElement("span", {
      key: m,
      className: `fb-mahalla ${foundMahalla && foundMahalla.mahalla === m ? 'is-hit' : ''}`,
      dir: "ltr"
    }, m)))), /*#__PURE__*/React.createElement("footer", {
      className: "fb-card__foot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fb-card__stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fb-card__stat-n"
    }, fmt(b.subscribers)), /*#__PURE__*/React.createElement("span", {
      className: "fb-card__stat-l"
    }, "\u0645\u0634\u062A\u0631\u0643")), /*#__PURE__*/React.createElement("div", {
      className: "fb-card__stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fb-card__stat-n"
    }, b.mahallas.length), /*#__PURE__*/React.createElement("span", {
      className: "fb-card__stat-l"
    }, "\u0645\u062D\u0644\u0629")), /*#__PURE__*/React.createElement("div", {
      className: "fb-card__stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fb-card__stat-n"
    }, b.capacity), /*#__PURE__*/React.createElement("span", {
      className: "fb-card__stat-l"
    }, "\u0627\u0644\u0633\u0639\u0629")), /*#__PURE__*/React.createElement("button", {
      className: "fb-card__cta",
      onClick: e => {
        e.stopPropagation();
        nav('services');
      }
    }, "\u0627\u0628\u062F\u0623 \u062E\u062F\u0645\u0629 \u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u0641\u0631\u0639 ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_back"
    }))));
  })), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "fb-empty"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search_off"
  }), /*#__PURE__*/React.createElement("h3", null, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C"), /*#__PURE__*/React.createElement("p", null, "\u062A\u0623\u0643\u0651\u062F \u0645\u0646 \u0631\u0642\u0645 \u0627\u0644\u0645\u062D\u0644\u0629 \u0623\u0648 \u062C\u0631\u0651\u0628 \u0627\u0633\u0645 \u0641\u0631\u0639/\u0645\u0646\u0637\u0642\u0629.")), /*#__PURE__*/React.createElement("section", {
    className: "fb-legend"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Icon, {
    name: "rule"
  }), " \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0644\u0644\u0645\u0648\u0638\u0641"), /*#__PURE__*/React.createElement("div", {
    className: "fb-legend__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fb-legend__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-legend__dot fb-legend__dot--cool"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u0627\u0644\u062D\u0627\u0644\u0629: \u0645\u0633\u062A\u0642\u0631"), /*#__PURE__*/React.createElement("small", null, "\u0627\u0644\u062A\u063A\u0630\u064A\u0629 \u0636\u0645\u0646 \u0627\u0644\u0633\u0639\u0629 \u0627\u0644\u0627\u0633\u0645\u064A\u0629 \u2014 \u0644\u0627 \u0642\u064A\u0648\u062F \u0625\u0636\u0627\u0641\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u062E\u062F\u0645\u0627\u062A."))), /*#__PURE__*/React.createElement("div", {
    className: "fb-legend__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-legend__dot fb-legend__dot--warm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u0627\u0644\u062D\u0627\u0644\u0629: \u062A\u062D\u062A \u0627\u0644\u0636\u063A\u0637"), /*#__PURE__*/React.createElement("small", null, "\u062A\u062C\u0646\u0651\u0628 \u0627\u0634\u062A\u0631\u0627\u0643\u0627\u062A \u0627\u0644\u0623\u062D\u0645\u0627\u0644 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 \u062F\u0648\u0646 \u0645\u0648\u0627\u0641\u0642\u0629 \u0642\u0633\u0645 \u0627\u0644\u062A\u062E\u0637\u064A\u0637."))), /*#__PURE__*/React.createElement("div", {
    className: "fb-legend__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-legend__dot fb-legend__dot--hot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u0627\u0644\u062D\u0627\u0644\u0629: \u0636\u063A\u0637 \u0634\u062F\u064A\u062F"), /*#__PURE__*/React.createElement("small", null, "\u0627\u0634\u062A\u0631\u0627\u0643\u0627\u062A \u062C\u062F\u064A\u062F\u0629 \u0628\u0645\u0648\u0627\u0641\u0642\u0629 \u0645\u062F\u064A\u0631 \u0627\u0644\u0641\u0631\u0639 \u0648\u062D\u062C\u0632 \u062C\u062F\u0648\u0644\u0629 \u0641\u0635\u0644/\u0648\u0635\u0644."))), /*#__PURE__*/React.createElement("div", {
    className: "fb-legend__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fb-legend__dot fb-legend__dot--star"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\"\u0645\u0631\u0643\u0632\u0643\""), /*#__PURE__*/React.createElement("small", null, "\u0627\u0644\u0641\u0631\u0639 \u0627\u0644\u0630\u064A \u062A\u0646\u062A\u0645\u064A \u0625\u0644\u064A\u0647 \u2014 \u064A\u064F\u0639\u0631\u0636 \u0623\u0648\u0644\u0627\u064B \u0648\u064A\u064F\u062D\u0641\u0638 \u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0627\u064B \u0641\u064A \u0643\u0644 \u0646\u0645\u0648\u0630\u062C."))))));
}
Object.assign(window, {
  BranchesPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_branches.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_branches_data.js
try { (() => {
// =============================================================
// Tadfuq Al-Khayr — branches & coverage map (Rasafa)
// Official authorized distribution: 4 centers, 32 mahallas.
// =============================================================

(function () {
  // المراكز والمناطق التابعة لها (التوزيع المعتمد الرسمي)
  window.BRANCHES = [{
    id: 'RS-011',
    name: 'المركز الرئيسي',
    district: 'الرصافة',
    manager: 'م. أحمد كاظم الموسوي',
    phone: '07901-234001',
    hours: 'السبت – الخميس · 08:00 – 16:00',
    address: 'شارع الرشيد — قرب وزارة المالية القديمة',
    gps: '33.3373, 44.4106',
    mahallas: ['101', '102', '106', '107', '109', '111'],
    subscribers: 18420,
    capacity: 'متوسط',
    loadStatus: 'مستقر',
    services: ['CS', 'CT', 'CB', 'CA']
  }, {
    id: 'RS-014',
    name: 'مركز النضال',
    district: 'الرصافة',
    primary: true,
    manager: 'م. كرار جواد الكناني',
    phone: '07902-014555',
    hours: 'السبت – الخميس · 08:00 – 16:00',
    address: 'شارع النضال — قرب ساحة الفردوس',
    gps: '33.3091, 44.4185',
    mahallas: ['103', '101', '121', '133', '123', '135', '143'],
    subscribers: 26310,
    capacity: 'مرتفع',
    loadStatus: 'تحت الضغط',
    services: ['CS', 'CT', 'CB', 'CA']
  }, {
    id: 'RS-024',
    name: 'مركز الفضل',
    district: 'الرصافة',
    manager: 'م. مصطفى علي الحسيني',
    phone: '07905-024777',
    hours: 'السبت – الخميس · 08:00 – 16:00',
    address: 'الفضل — قرب جامع الفضل',
    gps: '33.3334, 44.4030',
    mahallas: ['129', '125', '139', '137', '115', '127', '113', '110'],
    subscribers: 16880,
    capacity: 'متوسط',
    loadStatus: 'مستقر',
    services: ['CS', 'CT', 'CB', 'CA']
  }, {
    id: 'RS-118',
    name: 'مركز باب المعظم',
    district: 'الرصافة',
    manager: 'م. ياسر شاكر الطائي',
    phone: '07912-118450',
    hours: 'السبت – الخميس · 08:00 – 16:00',
    address: 'باب المعظم — قرب وزارة الدفاع القديمة',
    gps: '33.3539, 44.3877',
    mahallas: ['108', '141', '117', '147', '114', '149', '112', '120', '131', '116', '119', '118'],
    subscribers: 11420,
    capacity: 'منخفض',
    loadStatus: 'مستقر',
    services: ['CS', 'CT', 'CB']
  }];

  // Reverse index: mahalla code -> branch id
  // (mahalla 101 appears under both المركز الرئيسي و مركز النضال in the
  //  official chart; last-write-wins assigns it to مركز النضال.)
  window.MAHALLA_INDEX = {};
  window.BRANCHES.forEach(b => {
    b.mahallas.forEach(m => {
      window.MAHALLA_INDEX[m] = b.id;
    });
  });
  window.BRANCH_MAP = Object.fromEntries(window.BRANCHES.map(b => [b.id, b]));

  // Totals
  window.BRANCH_STATS = {
    total: window.BRANCHES.length,
    mahallas: Object.keys(window.MAHALLA_INDEX).length,
    subscribers: window.BRANCHES.reduce((a, b) => a + b.subscribers, 0),
    districts: new Set(window.BRANCHES.map(b => b.district)).size
  };

  // Helper to find a branch by mahalla number
  window.findBranchByMahalla = function (m) {
    const id = window.MAHALLA_INDEX[(m || '').trim()];
    return id ? window.BRANCH_MAP[id] : null;
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_branches_data.js", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_cases.jsx
try { (() => {
// =============================================================
// FINAL — Cases + Pricing + Guide pages
// =============================================================

// ---------- CASES ----------
const FC_STAGES = [{
  ico: 'inbox',
  l: 'الاستلام'
}, {
  ico: 'travel_explore',
  l: 'الكشف'
}, {
  ico: 'analytics',
  l: 'الدراسة'
}, {
  ico: 'payments',
  l: 'الدفع'
}, {
  ico: 'construction',
  l: 'التنفيذ'
}, {
  ico: 'verified',
  l: 'الإغلاق'
}];
const FC_STATUS_STAGE = {
  'فحص ميداني': 1,
  'بانتظار الدفع': 3,
  'موافقة مدير': 2,
  'فريق طوارئ': 4,
  'تحقق قانوني': 2,
  'قيد التنفيذ': 4
};
function CasesPage({
  nav
}) {
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(null);
  const list = useMemo(() => {
    if (filter === 'all') return window.RECENT_CASES;
    if (filter === 'urgent') return window.RECENT_CASES.filter(c => c.priority === 'urgent');
    if (filter === 'vip') return window.RECENT_CASES.filter(c => c.priority === 'vip');
    return window.RECENT_CASES.filter(c => window.SERVICE_MAP[c.svc].section === filter);
  }, [filter]);
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-enter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fp-back",
    onClick: () => nav('overview')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward"
  }), " \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"), /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "inventory_2"
  })), "\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062D\u0627\u0644\u0627\u062A"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0623\u064A \u062D\u0627\u0644\u0629 \u0644\u0643\u0634\u0641 \u0645\u0633\u0627\u0631\u0647\u0627 \u0627\u0644\u0643\u0627\u0645\u0644 \u2014 \u0627\u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u0646\u0627\u0628\u0636\u0629 \u0647\u064A \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629")), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "add"
  }), " \u062D\u0627\u0644\u0629 \u062C\u062F\u064A\u062F\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "fc-filter"
  }, [['all', 'الكل', window.RECENT_CASES.length], ['urgent', 'عاجل', window.RECENT_CASES.filter(c => c.priority === 'urgent').length], ['vip', 'VIP', window.RECENT_CASES.filter(c => c.priority === 'vip').length], ...window.SECTIONS.map(s => [s.code, s.name, window.RECENT_CASES.filter(c => window.SERVICE_MAP[c.svc].section === s.code).length])].map(([k, l, n]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: `fc-chip ${filter === k ? 'is-on' : ''}`,
    onClick: () => setFilter(k)
  }, l, " ", /*#__PURE__*/React.createElement("span", {
    className: "fc-chip__n"
  }, n)))), /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, list.length === 0 && /*#__PURE__*/React.createElement(window.EmptyState, {
    icon: "folder_open",
    title: "\u0644\u0627 \u062A\u0648\u062C\u062F \u062D\u0627\u0644\u0627\u062A \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u062A\u0635\u0646\u064A\u0641",
    body: "\u063A\u064A\u0651\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0623\u0639\u0644\u0627\u0647 \u0623\u0648 \u0627\u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629.",
    actionLabel: "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644",
    onAction: () => setFilter('all'),
    compact: true
  }), list.map(c => {
    const svc = window.SERVICE_MAP[c.svc];
    const leadC = c.priority === 'urgent' ? 'var(--f-err)' : c.priority === 'vip' ? 'var(--f-warn)' : DEPT_COLORS[svc.section];
    const stage = FC_STATUS_STAGE[c.status] ?? 1;
    const isOpen = open === c.id;
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: `fc-row ${isOpen ? 'is-open' : ''}`,
      style: {
        '--lead-c': leadC
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fc-row__head",
      onClick: () => setOpen(isOpen ? null : c.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "fc-row__lead"
    }), /*#__PURE__*/React.createElement("div", {
      className: "fc-row__main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fc-row__t"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fc-row__code"
    }, svc.code), c.subscriber), /*#__PURE__*/React.createElement("div", {
      className: "fc-row__s"
    }, c.id, " \xB7 ", svc.name)), /*#__PURE__*/React.createElement("span", {
      className: "fc-row__officer"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "person",
      size: 14
    }), " ", c.officer), /*#__PURE__*/React.createElement("span", {
      className: "fc-row__fee"
    }, c.fee ? fmtIQD(c.fee) : '—'), /*#__PURE__*/React.createElement("span", {
      className: "fc-row__age"
    }, c.age), /*#__PURE__*/React.createElement("span", {
      className: "fc-row__chev"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron_left"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "fc-row__detail"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fc-timeline"
    }, FC_STAGES.map((st, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `fc-stage ${i < stage ? 'is-done' : ''} ${i === stage ? 'is-now' : ''}`,
      style: {
        '--si': i
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "fc-stage__dot"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i < stage ? 'check' : st.ico
    })), /*#__PURE__*/React.createElement("span", {
      className: "fc-stage__l"
    }, i === stage ? c.status : st.l)))), /*#__PURE__*/React.createElement("div", {
      className: "fc-row__actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "fc-row__close",
      onClick: e => {
        e.stopPropagation();
        window.scheduleUndoableAction({
          msg: 'سيتم إغلاق الحالة ' + c.id,
          onCommit: () => {},
          onUndo: () => {}
        });
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check_circle"
    }), " \u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u062D\u0627\u0644\u0629"))));
  })));
}

// ---------- PRICING ----------
function PricingPage({
  nav
}) {
  const cats = Object.entries(window.PRICING);
  const [cat, setCat] = useState(cats[0][0]);
  const [q, setQ] = useState('');
  const active = window.PRICING[cat];
  const maxAmount = Math.max(...active.items.map(i => i.amount));
  const catColors = {
    inspection: 'var(--f-cs)',
    install: 'var(--f-ct)',
    reconnect: 'var(--f-ca)'
  };
  const items = active.items.filter(i => !q.trim() || i.name.includes(q.trim()));
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-enter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fp-back",
    onClick: () => nav('overview')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward"
  }), " \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"), /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "request_quote"
  })), "\u062C\u062F\u0648\u0644 \u0627\u0644\u0623\u062C\u0648\u0631 \u0627\u0644\u0631\u0633\u0645\u064A \u0662\u0660\u0662\u0666"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u0627\u0644\u0623\u0634\u0631\u0637\u0629 \u062A\u0642\u0627\u0631\u0646 \u0643\u0644 \u0628\u0646\u062F \u0628\u0623\u0639\u0644\u0649 \u0642\u064A\u0645\u0629 \u0641\u064A \u0641\u0626\u062A\u0647"))), /*#__PURE__*/React.createElement("div", {
    className: "fr-cats"
  }, cats.map(([k, v]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: `fc-chip ${cat === k ? 'is-on' : ''}`,
    onClick: () => setCat(k)
  }, v.label, " ", /*#__PURE__*/React.createElement("span", {
    className: "fc-chip__n"
  }, v.items.length)))), /*#__PURE__*/React.createElement("div", {
    className: "fs-search",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "\u0627\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0628\u0646\u0648\u062F\u2026"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-search__count"
  }, items.length, " \u0628\u0646\u062F")), /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-table",
    key: cat + q
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.key,
    className: "fr-row",
    style: {
      '--pr-c': catColors[cat] || 'var(--f-navy)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fr-row__name"
  }, it.name), /*#__PURE__*/React.createElement("span", {
    className: "fr-row__amount"
  }, fmtIQD(it.amount)), /*#__PURE__*/React.createElement("span", {
    className: "fr-row__bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: Math.max(6, Math.round(it.amount / maxAmount * 100)) + '%',
      animationDelay: `${i * 60}ms`
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "f-card__foot"
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0645\u0635\u062F\u0631: \u0644\u0627\u0626\u062D\u0629 \u0627\u0644\u0623\u062C\u0648\u0631 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0662\u0660\u0662\u0666 \u2014 \u0643\u0647\u0631\u0628\u0627\u0621 \u0627\u0644\u0631\u0635\u0627\u0641\u0629"), /*#__PURE__*/React.createElement("span", null, "\u062A\u064F\u062D\u062F\u064E\u0651\u062B \u0639\u0646\u062F \u0635\u062F\u0648\u0631 \u062A\u0639\u062F\u064A\u0644"))));
}

// ---------- GUIDE ----------
const FG_ITEMS = [{
  c: 'var(--f-cs)',
  ico: 'help_center',
  t: 'متى يقدّم الموظف خدمة الاشتراك الجديد؟',
  body: 'تقدَّم عند توفر بناء مكتمل أو إجازة بناء سارية، وعدم وجود اشتراك سابق على نفس العقار، وموقع ضمن نطاق التغطية.',
  steps: ['تحقق من المستمسكات الأساسية (هوية + بطاقة سكن + تأييد)', 'افتح نموذج CS0001 من المنصة وعبّئه أمام المشترك', 'أصدر وصل رسوم الطلب وحوّل للكشف الميداني']
}, {
  c: 'var(--f-ct)',
  ico: 'model_training',
  t: 'كيف تستخدم النسختين (الاحترافية / الأصلية)؟',
  body: 'النسخة الاحترافية للتعبئة السريعة بالحقول الذكية والحساب التلقائي، والأصلية مطابقة للنموذج الورقي الرسمي وتُستخدم للطباعة والأرشفة.',
  steps: ['عبّئ في الاحترافية — تُحفظ تلقائياً', 'بدّل للأصلية للمراجعة النهائية', 'اطبع مباشرة — تخرج بصيغة النموذج الرسمي']
}, {
  c: 'var(--f-cb)',
  ico: 'library_add',
  t: 'كيف تضاف خدمة جديدة للمنصة؟',
  body: 'كل خدمة تُعرَّف ببطاقة موحدة: الكود، القسم، المدة، الأجور، المستمسكات، ونموذجها. عند صدور خدمة جديدة من الإدارة تُضاف خلال يوم عمل.',
  steps: ['اعتماد الكود والقسم من الإدارة', 'إدخال بيانات البطاقة والأجور', 'بناء النموذجين (أصلي + احترافي) ونشرهما']
}, {
  c: 'var(--f-ca)',
  ico: 'tips_and_updates',
  t: 'تطوير الخدمة وتحسينها',
  body: 'راقب نسب الإرجاع وأسبابها من التقارير، وأضف نصائح للفريق عبر شريط التنبيهات، واقترح تحسين الحقول التي تتكرر فيها الأخطاء.',
  steps: ['راجع تقرير الإرجاع أسبوعياً', 'أضف نصيحة موجهة للفريق', 'ارفع مقترح التعديل للإدارة']
}];
function GuidePage({
  nav
}) {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-enter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fp-back",
    onClick: () => nav('overview')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward"
  }), " \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"), /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu_book"
  })), "\u062F\u0644\u064A\u0644 \u0645\u0648\u0638\u0641 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u064A\u0646"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u0634\u0631\u062D \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u060C \u0634\u0631\u0648\u0637 \u0627\u0644\u062A\u0642\u062F\u064A\u0645\u060C \u0648\u0643\u064A\u0641\u064A\u0629 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062E\u062F\u0645\u0627\u062A"))), /*#__PURE__*/React.createElement("div", {
    className: "fg-grid"
  }, FG_ITEMS.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `fg-card ${open === i ? 'is-open' : ''}`,
    style: {
      '--g-c': g.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg-card__head",
    onClick: () => setOpen(open === i ? null : i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "fg-card__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.ico
  })), /*#__PURE__*/React.createElement("span", {
    className: "fg-card__t"
  }, g.t), /*#__PURE__*/React.createElement("span", {
    className: "fg-card__chev"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fg-card__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fg-card__inner"
  }, g.body, /*#__PURE__*/React.createElement("ol", null, g.steps.map((s, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, s)))))))));
}
Object.assign(window, {
  CasesPage,
  PricingPage,
  GuidePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_cases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_db.js
try { (() => {
// =============================================================
// FINAL — Unified Data Layer (DB abstraction)
// All admin-managed data flows through window.DB so that swapping
// the storage backend (Firebase / Supabase / REST API) later only
// requires replacing one adapter. Today: localStorage.
//
// v2 schema: added auth (permissions, role_permissions, sessions,
// branches, departments) — foundation for the RBAC system.
// =============================================================

(function () {
  const VERSION = 2; // bumped: new auth schema
  const NS = 'tq.db.v1'; // keep namespace; meta tracks version
  const META_KEY = `${NS}::meta`;
  const KEY = col => `${NS}::${col}`;

  // ---------- Adapter: localStorage (default) ----------
  const LocalAdapter = {
    name: 'local',
    read(col) {
      try {
        return JSON.parse(localStorage.getItem(KEY(col)) || '[]');
      } catch {
        return [];
      }
    },
    write(col, rows) {
      localStorage.setItem(KEY(col), JSON.stringify(rows));
    },
    readScalar(col) {
      try {
        return JSON.parse(localStorage.getItem(KEY(col)) || 'null');
      } catch {
        return null;
      }
    },
    writeScalar(col, value) {
      localStorage.setItem(KEY(col), JSON.stringify(value));
    }
  };
  let adapter = LocalAdapter;

  // ---------- Subscribers ----------
  const subs = new Map();
  function emit(col) {
    const set = subs.get(col);
    if (!set) return;
    set.forEach(fn => {
      try {
        fn();
      } catch (e) {
        console.error(e);
      }
    });
  }
  function subscribe(col, fn) {
    if (!subs.has(col)) subs.set(col, new Set());
    subs.get(col).add(fn);
    return () => subs.get(col).delete(fn);
  }

  // ---------- Helpers ----------
  function newId(prefix) {
    return `${prefix || 'r'}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
  }
  function clone(x) {
    return JSON.parse(JSON.stringify(x));
  }

  // ---------- Collection API ----------
  function collection(col, {
    idPrefix
  } = {}) {
    return {
      list() {
        return adapter.read(col);
      },
      get(id) {
        return adapter.read(col).find(r => r.id === id) || null;
      },
      find(pred) {
        return adapter.read(col).find(pred) || null;
      },
      filter(pred) {
        return adapter.read(col).filter(pred);
      },
      create(data) {
        const rows = adapter.read(col);
        const row = {
          id: data.id || newId(idPrefix || col),
          createdAt: Date.now(),
          ...data
        };
        rows.push(row);
        adapter.write(col, rows);
        emit(col);
        return row;
      },
      update(id, patch) {
        const rows = adapter.read(col);
        const i = rows.findIndex(r => r.id === id);
        if (i < 0) return null;
        rows[i] = {
          ...rows[i],
          ...patch,
          updatedAt: Date.now()
        };
        adapter.write(col, rows);
        emit(col);
        return rows[i];
      },
      remove(id) {
        const rows = adapter.read(col).filter(r => r.id !== id);
        adapter.write(col, rows);
        emit(col);
        return true;
      },
      replaceAll(rows) {
        adapter.write(col, rows);
        emit(col);
      },
      subscribe(fn) {
        return subscribe(col, fn);
      }
    };
  }

  // ---------- Scalar (singletons) ----------
  function scalar(col, defaults) {
    return {
      get() {
        const v = adapter.readScalar(col);
        return v == null ? clone(defaults) : {
          ...clone(defaults),
          ...v
        };
      },
      set(patch) {
        const next = {
          ...this.get(),
          ...patch
        };
        adapter.writeScalar(col, next);
        emit(col);
        return next;
      },
      subscribe(fn) {
        return subscribe(col, fn);
      }
    };
  }

  // =============================================================
  // RBAC SEED DATA — single source of truth for permissions/roles
  // =============================================================

  // Permission catalog — grouped by category for UI organization.
  // Backend implementations MUST mirror this list.
  const DEFAULT_PERMISSIONS = [
  // Requests / forms
  {
    key: 'request.create',
    category: 'requests',
    label: 'إنشاء طلب جديد'
  }, {
    key: 'request.read',
    category: 'requests',
    label: 'عرض الطلبات'
  }, {
    key: 'request.update',
    category: 'requests',
    label: 'تعديل الطلبات'
  }, {
    key: 'request.delete',
    category: 'requests',
    label: 'حذف الطلبات'
  }, {
    key: 'request.approve',
    category: 'requests',
    label: 'الموافقة على الطلبات'
  }, {
    key: 'request.reject',
    category: 'requests',
    label: 'رفض الطلبات'
  }, {
    key: 'request.print',
    category: 'requests',
    label: 'طباعة الطلبات'
  }, {
    key: 'request.assign',
    category: 'requests',
    label: 'إسناد الطلبات'
  },
  // Payments
  {
    key: 'payment.read',
    category: 'payments',
    label: 'عرض الدفعات'
  }, {
    key: 'payment.create',
    category: 'payments',
    label: 'تسجيل دفعة'
  }, {
    key: 'payment.refund',
    category: 'payments',
    label: 'استرجاع دفعة'
  }, {
    key: 'payment.manage',
    category: 'payments',
    label: 'إدارة كاملة للدفعات'
  },
  // Users
  {
    key: 'user.read',
    category: 'users',
    label: 'عرض المستخدمين'
  }, {
    key: 'user.create',
    category: 'users',
    label: 'إنشاء مستخدم'
  }, {
    key: 'user.update',
    category: 'users',
    label: 'تعديل المستخدمين'
  }, {
    key: 'user.delete',
    category: 'users',
    label: 'حذف المستخدمين'
  }, {
    key: 'user.disable',
    category: 'users',
    label: 'إيقاف/تفعيل المستخدمين'
  }, {
    key: 'user.reset_password',
    category: 'users',
    label: 'إعادة كلمة المرور'
  }, {
    key: 'user.force_logout',
    category: 'users',
    label: 'إنهاء جلسات المستخدمين'
  },
  // Roles & permissions
  {
    key: 'role.read',
    category: 'roles',
    label: 'عرض الأدوار'
  }, {
    key: 'role.manage',
    category: 'roles',
    label: 'إدارة الأدوار والصلاحيات'
  },
  // System
  {
    key: 'settings.read',
    category: 'system',
    label: 'عرض الإعدادات'
  }, {
    key: 'settings.manage',
    category: 'system',
    label: 'إدارة إعدادات النظام'
  }, {
    key: 'branch.manage',
    category: 'system',
    label: 'إدارة الفروع والأقسام'
  }, {
    key: 'data.export',
    category: 'system',
    label: 'تصدير البيانات'
  }, {
    key: 'data.import',
    category: 'system',
    label: 'استيراد البيانات'
  },
  // Reports
  {
    key: 'reports.view',
    category: 'reports',
    label: 'عرض التقارير'
  }, {
    key: 'reports.export',
    category: 'reports',
    label: 'تصدير التقارير'
  },
  // Audit
  {
    key: 'audit.read',
    category: 'audit',
    label: 'عرض سجل التدقيق'
  }, {
    key: 'audit.export',
    category: 'audit',
    label: 'تصدير سجل التدقيق'
  },
  // Misc
  {
    key: 'tips.manage',
    category: 'content',
    label: 'إدارة النصائح'
  }, {
    key: 'services.manage',
    category: 'content',
    label: 'إدارة الخدمات'
  }];
  const PERMS_BY_KEY = Object.fromEntries(DEFAULT_PERMISSIONS.map(p => [p.key, p]));
  const ALL_KEYS = DEFAULT_PERMISSIONS.map(p => p.key);

  // Default roles — system-locked (cannot be deleted, can be edited)
  const DEFAULT_ROLES = [{
    id: 'role_sysadmin',
    key: 'system_admin',
    name: 'مدير النظام',
    description: 'صلاحيات كاملة على كل النظام',
    isSystem: true,
    permissions: ALL_KEYS
  }, {
    id: 'role_supervisor',
    key: 'supervisor',
    name: 'مسؤول / مشرف',
    description: 'إشراف عام على فرع / إدارة الموظفين',
    isSystem: true,
    permissions: ['request.read', 'request.update', 'request.approve', 'request.reject', 'request.print', 'request.assign', 'request.delete', 'payment.read', 'payment.create', 'payment.refund', 'user.read', 'user.create', 'user.update', 'user.disable', 'user.reset_password', 'user.force_logout', 'role.read', 'settings.read', 'branch.manage', 'reports.view', 'reports.export', 'audit.read', 'audit.export', 'tips.manage', 'services.manage', 'data.export']
  }, {
    id: 'role_cs',
    key: 'customer_service',
    name: 'خدمات المشتركين',
    description: 'تسجيل الطلبات والتفاعل مع المراجعين',
    isSystem: true,
    permissions: ['request.create', 'request.read', 'request.update', 'request.print', 'reports.view']
  }, {
    id: 'role_cashier',
    key: 'cashier',
    name: 'أمين الصندوق',
    description: 'استلام الدفعات وإصدار الإيصالات',
    isSystem: true,
    permissions: ['request.read', 'request.print', 'payment.read', 'payment.create', 'payment.refund', 'reports.view']
  }, {
    id: 'role_inspector',
    key: 'field_inspector',
    name: 'مفتش ميداني',
    description: 'الكشف الميداني وتحديث حالة الطلبات',
    isSystem: true,
    permissions: ['request.read', 'request.update', 'request.print']
  }, {
    id: 'role_auditor',
    key: 'auditor',
    name: 'مدقق',
    description: 'مراجعة وتدقيق الطلبات والسجلات (قراءة فقط على البيانات + سجل التدقيق)',
    isSystem: true,
    permissions: ['request.read', 'payment.read', 'user.read', 'role.read', 'settings.read', 'reports.view', 'reports.export', 'audit.read', 'audit.export']
  }, {
    id: 'role_viewer',
    key: 'read_only',
    name: 'قارئ فقط',
    description: 'مشاهدة بدون أي تعديل',
    isSystem: true,
    permissions: ['request.read', 'payment.read', 'reports.view']
  }];

  // Default branches + departments
  const DEFAULT_BRANCHES = [{
    id: 'br_nidhal',
    code: 'RS-014',
    name: 'مركز النضال',
    region: 'الرصافة',
    active: true
  }, {
    id: 'br_baladiat',
    code: 'RS-015',
    name: 'مركز البلديات',
    region: 'الرصافة',
    active: true
  }, {
    id: 'br_sader',
    code: 'RS-016',
    name: 'مركز الصدر',
    region: 'الرصافة',
    active: true
  }];
  const DEFAULT_DEPARTMENTS = [{
    id: 'dept_cs',
    code: 'CS',
    name: 'خدمات المشتركين',
    active: true
  }, {
    id: 'dept_ct',
    code: 'CT',
    name: 'الدائرة الفنية',
    active: true
  }, {
    id: 'dept_cb',
    code: 'CB',
    name: 'الصندوق',
    active: true
  }, {
    id: 'dept_ca',
    code: 'CA',
    name: 'الدائرة القانونية',
    active: true
  }];

  // ---------- Password hashing (PLACEHOLDER — replace server-side with Argon2id) ----------
  // We use SHA-256 + per-user salt as a temporary scheme. This is NOT secure
  // for production — when the backend is built, all auth calls must hit the
  // server and the server must use Argon2id. The frontend will then store only
  // refresh-token cookies and never see raw passwords beyond the login POST.
  async function _sha256(str) {
    const enc = new TextEncoder().encode(str);
    const buf = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  async function hashPassword(plain, salt) {
    salt = salt || newId('s');
    const hash = await _sha256(salt + ':' + plain);
    return {
      hash,
      salt,
      algo: 'sha256-v1'
    };
  }
  async function verifyPassword(plain, stored) {
    if (!stored || !stored.hash || !stored.salt) return false;
    const hash = await _sha256(stored.salt + ':' + plain);
    return hash === stored.hash;
  }

  // =============================================================
  // SEED — auth tables + initial admin
  // =============================================================
  // Default password for admin on first run; the user is FORCED to change it.
  const FIRST_RUN_ADMIN_PASSWORD = 'admin@2026';
  const DEFAULT_USERS_AUTH = [{
    id: 'u_admin',
    name: 'حسين علي',
    username: 'admin',
    email: 'admin@rasafa.iq',
    roleId: 'role_sysadmin',
    branchId: null,
    // sysadmin = no branch restriction
    departmentId: null,
    active: true,
    mustChangePassword: true,
    createdAt: Date.now()
  }, {
    id: 'u_ramez',
    name: 'رامز كاظم',
    username: 'ramez',
    email: 'ramez@rasafa.iq',
    roleId: 'role_supervisor',
    branchId: 'br_nidhal',
    departmentId: null,
    active: true,
    mustChangePassword: true,
    createdAt: Date.now()
  }, {
    id: 'u_zainab',
    name: 'زينب أحمد',
    username: 'zainab',
    email: 'zainab@rasafa.iq',
    roleId: 'role_cs',
    branchId: 'br_nidhal',
    departmentId: 'dept_cs',
    active: true,
    mustChangePassword: true,
    createdAt: Date.now()
  }, {
    id: 'u_mostafa',
    name: 'مصطفى علي',
    username: 'mostafa',
    email: 'mostafa@rasafa.iq',
    roleId: 'role_inspector',
    branchId: 'br_nidhal',
    departmentId: 'dept_ct',
    active: true,
    mustChangePassword: true,
    createdAt: Date.now()
  }, {
    id: 'u_huda',
    name: 'هدى محمود',
    username: 'huda',
    email: 'huda@rasafa.iq',
    roleId: 'role_cashier',
    branchId: 'br_nidhal',
    departmentId: 'dept_cb',
    active: true,
    mustChangePassword: true,
    createdAt: Date.now()
  }, {
    id: 'u_sara',
    name: 'سرى ناجي',
    username: 'sara',
    email: 'sara@rasafa.iq',
    roleId: 'role_auditor',
    branchId: null,
    departmentId: null,
    active: true,
    mustChangePassword: true,
    createdAt: Date.now()
  }];

  // ---------- Misc seeds (kept from v1) ----------
  const DEFAULT_TIPS = [{
    c: 'var(--f-cb)',
    tag: 'نصيحة',
    ico: 'lightbulb',
    title: 'تجنّب إرجاع طلبات CS0001',
    body: 'أرفق كتاب تأييد السكن المصدّق قبل تحويل الطلب للدائرة الفنية — أول سبب للإرجاع هذا الشهر.',
    by: 'مدير المركز',
    active: true
  }, {
    c: 'var(--f-cs)',
    tag: 'سؤال متكرر',
    ico: 'help',
    title: 'كيف يُحسب التقسيط؟',
    body: 'بحدّ أقصى ٦ أقساط، ويحتاج موافقة المدير للقيم فوق ٥٠٠ ألف د.ع.',
    by: 'دليل النظام',
    active: true
  }, {
    c: 'var(--f-ct)',
    tag: 'تحديث',
    ico: 'campaign',
    title: 'تعديل جدول الأجور ٢٠٢٦',
    body: 'بدأ سريان التعديل على أجور الكشف الميداني — راجع اللائحة قبل إصدار أي مطالبة.',
    by: 'إدارة الأجور',
    active: true
  }, {
    c: 'var(--f-ca)',
    tag: 'تنبيه',
    ico: 'warning',
    title: 'حالات تجاوزت الـ SLA',
    body: 'هناك ٣ حالات معلّقة في الدائرة الفنية تجاوزت المدة — راجعها لمنع التصعيد.',
    by: 'النظام',
    active: true
  }, {
    c: 'var(--f-cs)',
    tag: 'نصيحة',
    ico: 'tips_and_updates',
    title: 'استخدم البحث السريع ⌘K',
    body: 'تستطيع الوصول لأي خدمة أو حالة أو مشترك بثوانٍ — جرّب كتابة رقم الاشتراك مباشرة.',
    by: 'دليل النظام',
    active: true
  }];
  const DEFAULT_SETTINGS = {
    centerName: 'مركز النضال — كهرباء الرصافة',
    centerCode: 'RS-014',
    branch: 'فرع النضال',
    region: 'الرصافة',
    managerName: 'رامز كاظم',
    headerTitle: 'مشروع التحول الذكي في الشبكة الكهربائية لفرع توزيع كهرباء الرصافة - منطقة مركز الرصافة',
    company: 'شركة تدفق الخير',
    routing: ['خدمات المشتركين', 'الدائرة الفنية', 'الدائرة القانونية', 'الصندوق', 'شؤون الموظفين', 'إلغاء الطلب'],
    // Security policy
    security: {
      passwordMinLength: 8,
      passwordRequireMixedCase: false,
      passwordRequireDigit: true,
      passwordRequireSymbol: false,
      maxFailedAttempts: 5,
      lockoutMinutes: 15,
      sessionTimeoutMinutes: 30,
      // inactivity-based
      sessionAbsoluteHours: 12,
      // hard cap
      passwordExpiryDays: 0 // 0 = never
    }
  };
  async function seedOnce() {
    const meta = adapter.readScalar(META_KEY) || {};
    const isFresh = !meta.seeded;
    const isUpgrade = meta.seeded && (meta.version || 0) < VERSION;

    // v1 collections (unchanged)
    if (!adapter.read('tips').length) adapter.write('tips', DEFAULT_TIPS.map((t, i) => ({
      id: newId('tip'),
      ord: i,
      ...t
    })));
    if (!adapter.read('services').length) adapter.write('services', (window.SERVICES || []).map(s => ({
      ...s,
      id: s.code,
      active: true
    })));
    if (!adapter.read('sections').length) adapter.write('sections', (window.SECTIONS || []).map(s => ({
      ...s,
      id: s.code,
      active: true
    })));
    if (!adapter.read('audit').length) adapter.write('audit', []);
    if (adapter.readScalar('settings') == null) adapter.writeScalar('settings', DEFAULT_SETTINGS);

    // v2 auth tables
    if (!adapter.read('permissions').length) {
      adapter.write('permissions', DEFAULT_PERMISSIONS.map(p => ({
        ...p,
        id: 'perm_' + p.key.replace(/\./g, '_')
      })));
    }
    if (!adapter.read('roles').length) {
      adapter.write('roles', DEFAULT_ROLES);
    }
    if (!adapter.read('branches').length) {
      adapter.write('branches', DEFAULT_BRANCHES);
    }
    if (!adapter.read('departments').length) {
      adapter.write('departments', DEFAULT_DEPARTMENTS);
    }
    if (!adapter.read('sessions').length) {
      adapter.write('sessions', []);
    }
    if (!adapter.read('password_resets').length) {
      adapter.write('password_resets', []);
    }
    // Users table: migrate from v1 (role string → roleId) OR seed fresh
    const existingUsers = adapter.read('users');
    if (!existingUsers.length) {
      // Fresh seed with default admin password
      const hashed = await hashPassword(FIRST_RUN_ADMIN_PASSWORD);
      const seeded = await Promise.all(DEFAULT_USERS_AUTH.map(async u => {
        const h = await hashPassword(FIRST_RUN_ADMIN_PASSWORD);
        return {
          ...u,
          passwordHash: h.hash,
          passwordSalt: h.salt,
          passwordAlgo: h.algo,
          failedLoginCount: 0,
          lockedUntil: null,
          lastLoginAt: null,
          lastLoginIp: null,
          createdBy: 'system'
        };
      }));
      adapter.write('users', seeded);
    } else if (isUpgrade) {
      // Migrate existing users from v1 → v2 (best-effort).
      const roleByOld = {
        admin: 'role_sysadmin',
        manager: 'role_supervisor',
        employee: 'role_cs',
        viewer: 'role_viewer'
      };
      const migrated = await Promise.all(existingUsers.map(async u => {
        if (u.roleId) return u; // already migrated
        const h = await hashPassword(FIRST_RUN_ADMIN_PASSWORD);
        return {
          ...u,
          roleId: roleByOld[u.role] || 'role_viewer',
          branchId: u.section && u.section !== '*' ? null : u.branchId || null,
          departmentId: u.section && u.section !== '*' ? DEFAULT_DEPARTMENTS.find(d => d.code === u.section)?.id || null : null,
          passwordHash: h.hash,
          passwordSalt: h.salt,
          passwordAlgo: h.algo,
          failedLoginCount: 0,
          lockedUntil: null,
          lastLoginAt: null,
          lastLoginIp: null,
          mustChangePassword: true,
          createdBy: 'system-migration'
        };
      }));
      adapter.write('users', migrated);
    }
    adapter.writeScalar(META_KEY, {
      seeded: true,
      version: VERSION,
      at: Date.now()
    });
  }

  // ---------- Audit log ----------
  function log(action, target, payload) {
    const audit = adapter.read('audit');
    const u = window.Auth && window.Auth.currentUser && window.Auth.currentUser();
    audit.unshift({
      id: newId('a'),
      ts: Date.now(),
      action,
      target,
      by: u ? u.name : 'مجهول',
      byId: u ? u.id : null,
      ip: 'local',
      // backend will set real IP
      ua: navigator.userAgent.slice(0, 100),
      payload: payload || null
    });
    if (audit.length > 1000) audit.length = 1000;
    adapter.write('audit', audit);
    emit('audit');
  }

  // ---------- Reset / Export / Import ----------
  function exportAll() {
    return {
      version: VERSION,
      exportedAt: Date.now(),
      tips: adapter.read('tips'),
      users: adapter.read('users'),
      services: adapter.read('services'),
      sections: adapter.read('sections'),
      audit: adapter.read('audit'),
      permissions: adapter.read('permissions'),
      roles: adapter.read('roles'),
      branches: adapter.read('branches'),
      departments: adapter.read('departments'),
      settings: adapter.readScalar('settings')
    };
  }
  function importAll(payload) {
    if (!payload) throw new Error('بيانات غير صالحة');
    const cols = ['tips', 'users', 'services', 'sections', 'audit', 'permissions', 'roles', 'branches', 'departments'];
    cols.forEach(c => {
      if (Array.isArray(payload[c])) adapter.write(c, payload[c]);
    });
    if (payload.settings) adapter.writeScalar('settings', payload.settings);
    [...cols, 'settings'].forEach(emit);
  }
  async function resetAll() {
    const cols = ['tips', 'users', 'services', 'sections', 'audit', 'permissions', 'roles', 'branches', 'departments', 'sessions', 'password_resets'];
    cols.forEach(c => adapter.write(c, []));
    adapter.writeScalar('settings', null);
    adapter.writeScalar(META_KEY, null);
    await seedOnce();
    [...cols, 'settings'].forEach(emit);
  }

  // ---------- Public API ----------
  window.DB = {
    version: VERSION,
    adapter: () => adapter.name,
    setAdapter(a) {
      adapter = a;
    },
    // Existing
    tips: collection('tips', {
      idPrefix: 'tip'
    }),
    users: collection('users', {
      idPrefix: 'u'
    }),
    services: collection('services', {
      idPrefix: 'svc'
    }),
    sections: collection('sections', {
      idPrefix: 'sec'
    }),
    audit: collection('audit', {
      idPrefix: 'a'
    }),
    // RBAC
    permissions: collection('permissions', {
      idPrefix: 'perm'
    }),
    roles: collection('roles', {
      idPrefix: 'role'
    }),
    branches: collection('branches', {
      idPrefix: 'br'
    }),
    departments: collection('departments', {
      idPrefix: 'dept'
    }),
    sessions: collection('sessions', {
      idPrefix: 'sess'
    }),
    passwordResets: collection('password_resets', {
      idPrefix: 'pwr'
    }),
    settings: scalar('settings', DEFAULT_SETTINGS),
    // Catalog (read-only references)
    PERMISSION_KEYS: ALL_KEYS,
    PERMISSION_BY_KEY: PERMS_BY_KEY,
    // Password utilities (placeholder until backend is built)
    hashPassword,
    verifyPassword,
    // Initial admin credentials for first-run banner
    FIRST_RUN_ADMIN_PASSWORD,
    log,
    seedOnce,
    exportAll,
    importAll,
    resetAll,
    subscribe
  };

  // Seed is async — kick it off; consumers should subscribe instead of read-immediately.
  seedOnce();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_db.js", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_docx.js
try { (() => {
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
    return new Date().toLocaleDateString('ar-IQ-u-ca-gregory', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
  function _serial(svc, settings) {
    return `${svc.code}-${settings.centerCode || 'RS-014'}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
  }
  function _buildData(svc, form) {
    const settings = window.DB && window.DB.settings.get() || {};
    return {
      centerName: settings.centerName || 'مركز النضال — كهرباء الرصافة',
      centerCode: settings.centerCode || 'RS-014',
      date: form._date || _today(),
      serial: form._serial || _serial(svc, settings),
      name: form.name || '',
      nid: form.nid || '',
      housing: form.housing || '',
      acct: form.acct || '',
      ramz: form.ramz || '',
      phone: form.phone || '',
      hay: form.hay || '',
      mahalla: form.mahalla || '',
      zuqaq: form.zuqaq || '',
      dar: form.dar || '',
      piece: form.piece || '',
      floor: form.floor || '',
      gps: form.gps || '',
      landmark: form.landmark || '',
      apt: form.apt || '',
      receiptNo: form._receiptNo || '',
      reason: form.reason || form.notes || '',
      notes: form.notes || ''
    };
  }

  // Fill the template; returns ArrayBuffer of the new .docx
  async function fillTemplate(svc, form) {
    const res = await fetch(`https://cdn.jsdelivr.net/gh/Xboxiq/tadfuq-khayr@main/forms_word/${svc.code}.docx`);
    if (!res.ok) throw new Error(`نموذج Word غير موجود لـ ${svc.code}`);
    const buf = await res.arrayBuffer();
    const zip = new window.PizZip(buf);
    const Doc = window.docxtemplater && (window.docxtemplater.default || window.docxtemplater);
    const doc = new Doc(zip, {
      paragraphLoop: true,
      linebreaks: true,
      nullGetter: () => '',
      delimiters: {
        start: '{{',
        end: '}}'
      }
    });
    doc.render(_buildData(svc, form));
    return doc.getZip().generate({
      type: 'arraybuffer'
    });
  }
  function fileNameFor(svc, form) {
    const safe = (form.name || 'بدون-اسم').replace(/[\\/:*?"<>|]/g, '').replace(/\s+/g, '-');
    return `${svc.code}_${safe}_${new Date().toISOString().slice(0, 10)}`;
  }

  // ----- Download -----
  async function downloadDocx(svc, form) {
    const buf = await fillTemplate(svc, form);
    const blob = new Blob([buf], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), {
      href: url,
      download: fileNameFor(svc, form) + '.docx'
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
      ignoreLastRenderedPageBreak: false,
      // respect Word's page breaks (declaration page!)
      experimental: true,
      trimXmlDeclaration: true,
      useBase64URL: true,
      renderHeaders: true,
      renderFooters: true,
      renderFootnotes: false,
      ignoreWidth: false,
      ignoreHeight: false,
      defaultFont: {
        family: 'Arial',
        size: 22
      }
    });
  }

  // =============================================================
  // PRINT — recommended path:
  //   1. Send the docx to the central Convert Server.
  //   2. Receive a PDF back.
  //   3. Embed the PDF in a hidden iframe and call iframe.print().
  //   4. The browser's print dialog appears on the EMPLOYEE'S machine
  //      → goes to the EMPLOYEE'S local printer.
  //
  // Server runs ONCE somewhere (your PC, a Raspberry Pi, a free cloud
  // host). Every employee uses it with zero install.
  // =============================================================

  const PRINT_SERVER = () => {
    // 1) explicit override in localStorage
    let url = window.localStorage.getItem('tq-print-server');
    // 2) admin-configured global setting
    if (!url && window.DB && window.DB.settings) {
      try {
        url = (window.DB.settings.get() || {}).printServerUrl;
      } catch {}
    }
    return (url || 'http://localhost:9876').replace(/\/+$/, '');
  };
  async function pingPrintServer(timeoutMs = 1500) {
    try {
      const ac = new AbortController();
      const t = setTimeout(() => ac.abort(), timeoutMs);
      const res = await fetch(PRINT_SERVER() + '/ping', {
        signal: ac.signal,
        cache: 'no-store'
      });
      clearTimeout(t);
      if (!res.ok) return null;
      const info = await res.json();
      return info && info.ok ? info : null;
    } catch {
      return null;
    }
  }

  // POST docx → receive PDF Blob
  async function convertToPdf(buf, name) {
    const res = await fetch(`${PRINT_SERVER()}/convert?name=${encodeURIComponent(name)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      },
      body: buf
    });
    if (!res.ok) {
      let msg = `HTTP ${res.status}`;
      try {
        const j = await res.json();
        msg = j.message || j.error || msg;
      } catch {}
      throw new Error(msg);
    }
    return await res.blob();
  }

  // Direct-print mode (server prints to its own printer). Used only when
  // the user explicitly enables silent mode in settings.
  async function directPrint(buf, name) {
    const res = await fetch(`${PRINT_SERVER()}/print?name=${encodeURIComponent(name)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      },
      body: buf
    });
    let info = null;
    try {
      info = await res.json();
    } catch {}
    if (!res.ok || !info || !info.ok) {
      throw new Error(info && (info.message || info.error) || `HTTP ${res.status}`);
    }
    return info;
  }

  // Embed PDF in a hidden iframe and call its print(); the browser handles
  // the actual printing to the user's local printer.
  function printPdfBlob(pdfBlob) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(pdfBlob);

      // remove any previous print iframe
      const old = document.getElementById('tq-pdf-print-frame');
      if (old) old.remove();
      const frame = document.createElement('iframe');
      frame.id = 'tq-pdf-print-frame';
      frame.src = url;
      frame.style.cssText = 'position:fixed;right:-10000px;top:-10000px;width:900px;height:1200px;border:0;visibility:hidden;';
      document.body.appendChild(frame);
      const cleanup = () => {
        setTimeout(() => {
          try {
            frame.remove();
          } catch {}
          URL.revokeObjectURL(url);
        }, 2000);
      };
      let printed = false;
      const doPrint = () => {
        if (printed) return;
        printed = true;
        // small delay so the PDF viewer has the doc fully laid out
        setTimeout(() => {
          try {
            frame.contentWindow.focus();
            frame.contentWindow.print();
            try {
              frame.contentWindow.addEventListener('afterprint', cleanup);
            } catch {}
            setTimeout(cleanup, 90000); // long safety cleanup
            resolve();
          } catch (e) {
            cleanup();
            reject(e);
          }
        }, 350);
      };
      frame.addEventListener('load', doPrint);
      // safety: if onload doesn't fire (some PDF viewers), force after 2.5s
      setTimeout(doPrint, 2500);
    });
  }
  function downloadDocxFallback(buf, fileName) {
    const blob = new Blob([buf], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), {
      href: url,
      download: fileName + '.docx'
    });
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }
  async function printDocx(svc, form) {
    const fileName = fileNameFor(svc, form);
    const settings = window.DB && window.DB.settings && window.DB.settings.get() || {};
    const silent = !!settings.printSilent;

    // ---------- 0. In-browser PDF fill (zero server, zero install) ----------
    // Try this FIRST. Works for any template that has a matching
    // forms_pdf/<code>.pdf next to forms_word/<code>.docx.
    if (window.TadfuqPdfFill) {
      try {
        const values = _buildData(svc, form);
        const pdfBlob = await window.TadfuqPdfFill.buildFilledPdf(svc, values);
        await window.TadfuqPdfFill.printPdfBlob(pdfBlob);
        window.DB && window.DB.log('form.print', svc.code, {
          via: 'browser-pdf'
        });
        return {
          mode: 'browser-pdf'
        };
      } catch (e) {
        // PDF template missing or fill failed → fall through to server path
        console.warn('[print] browser-pdf failed:', e.message);
      }
    }

    // Build the docx for the server path / download fallback
    const buf = await fillTemplate(svc, form);
    const info = await pingPrintServer();
    if (info) {
      // ---------- A. Silent direct print (single-machine setup) ----------
      if (silent) {
        try {
          const r = await directPrint(buf, fileName);
          window.DB && window.DB.log('form.print', svc.code, {
            via: 'silent',
            platform: info.platform
          });
          return {
            mode: 'silent',
            platform: info.platform,
            printer: r && r.printer
          };
        } catch (e) {
          downloadDocxFallback(buf, fileName);
          window.DB && window.DB.log('form.print', svc.code, {
            via: 'silent-fail',
            error: e.message
          });
          return {
            mode: 'silent-failed',
            error: e.message
          };
        }
      }

      // ---------- B. Default — convert to PDF and print via browser ----------
      try {
        const pdf = await convertToPdf(buf, fileName);
        await printPdfBlob(pdf);
        window.DB && window.DB.log('form.print', svc.code, {
          via: 'pdf',
          platform: info.platform
        });
        return {
          mode: 'pdf',
          platform: info.platform
        };
      } catch (e) {
        downloadDocxFallback(buf, fileName);
        window.DB && window.DB.log('form.print', svc.code, {
          via: 'pdf-fail',
          error: e.message
        });
        return {
          mode: 'pdf-failed',
          error: e.message
        };
      }
    }

    // ---------- C. Server unreachable: download the docx ----------
    downloadDocxFallback(buf, fileName);
    window.DB && window.DB.log('form.print', svc.code, {
      via: 'download'
    });
    return {
      mode: 'download'
    };
  }
  window.fillFilledDocx = fillTemplate;
  window.downloadFilledDocx = downloadDocx;
  window.renderFilledDocx = renderPreview;
  window.printFilledDocx = printDocx;
  window.docxFileNameFor = fileNameFor;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_docx.js", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_form.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// =============================================================
// FINAL — Form Page (schema-driven, covers all 31 services)
// Tabs: احترافية (smart form) / أصلية (faithful paper)
// Reads window.SERVICE_FORMS[code] from final_forms_data.js
// =============================================================

// animated number
function useCountUp(target) {
  const [val, setVal] = useState(target);
  const prev = useRef(target);
  useEffect(() => {
    const from = prev.current;
    prev.current = target;
    if (from === target) return;
    const start = performance.now();
    const dur = 520;
    let raf;
    const tick = now => {
      const p = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(from + (target - from) * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return val;
}

// =============================================================
// Generic field — required marker, blur validation, autofill +
// keyboard friendly (autocomplete / inputmode / type / enterkeyhint)
// =============================================================
function ffA11y(f) {
  const k = f.k || '';
  const map = {
    name: {
      autoComplete: 'name',
      inputMode: 'text'
    },
    subName: {
      autoComplete: 'name',
      inputMode: 'text'
    },
    phone: {
      autoComplete: 'tel',
      inputMode: 'tel',
      type: 'tel'
    },
    email: {
      autoComplete: 'email',
      inputMode: 'email',
      type: 'email'
    },
    nid: {
      autoComplete: 'off',
      inputMode: 'numeric'
    },
    housing: {
      autoComplete: 'off',
      inputMode: 'numeric'
    },
    meterNo: {
      autoComplete: 'off',
      inputMode: 'numeric'
    },
    acct: {
      autoComplete: 'off',
      inputMode: 'text'
    }
  };
  const base = map[k] || {};
  if (f.type === 'number') base.inputMode = base.inputMode || 'numeric';
  return base;
}
function FF_Field({
  f,
  value,
  onChange,
  onBlur,
  error,
  required
}) {
  const reqd = required != null ? required : !!f.required;
  const cls = `ff-field${f.full ? ' ff-field--full' : ''}${f.mono ? ' ff-field--mono' : ''}${error ? ' is-invalid' : ''}`;
  const Err = window.FieldError;
  const errId = error ? `err-${f.k}` : undefined;
  const a11y = ffA11y(f);
  const Label = /*#__PURE__*/React.createElement("label", {
    htmlFor: `f-${f.k}`
  }, f.l, f.unit && /*#__PURE__*/React.createElement("span", {
    className: "ff-field__unit"
  }, " (", f.unit, ")"), reqd && /*#__PURE__*/React.createElement("span", {
    className: "ff-field__req",
    "aria-hidden": "true"
  }, " *"));
  const common = {
    id: `f-${f.k}`,
    name: f.k,
    value: value || '',
    onChange: e => onChange(e.target.value),
    onBlur: () => onBlur && onBlur(f),
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': errId,
    'aria-required': reqd || undefined
  };
  if (f.type === 'textarea') {
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      "data-fk": f.k
    }, Label, /*#__PURE__*/React.createElement("textarea", _extends({}, common, {
      rows: 3,
      placeholder: f.ph || '',
      enterKeyHint: "enter"
    })), /*#__PURE__*/React.createElement(Err, {
      msg: error,
      id: errId
    }));
  }
  if (f.type === 'select') {
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      "data-fk": f.k
    }, Label, /*#__PURE__*/React.createElement("select", common, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u2014 \u0627\u062E\u062A\u0631 \u2014"), f.options.map(o => /*#__PURE__*/React.createElement("option", {
      key: o,
      value: o
    }, o))), /*#__PURE__*/React.createElement(Err, {
      msg: error,
      id: errId
    }));
  }
  if (f.type === 'date') {
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      "data-fk": f.k
    }, Label, /*#__PURE__*/React.createElement("input", _extends({
      type: "date"
    }, common, {
      autoComplete: "off"
    })), /*#__PURE__*/React.createElement(Err, {
      msg: error,
      id: errId
    }));
  }
  if (f.type === 'number') {
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      "data-fk": f.k
    }, Label, /*#__PURE__*/React.createElement("input", _extends({
      type: "number"
    }, common, {
      placeholder: f.ph || '',
      max: f.max,
      dir: "ltr",
      style: {
        textAlign: 'start'
      },
      inputMode: a11y.inputMode,
      enterKeyHint: "next",
      autoComplete: "off"
    })), /*#__PURE__*/React.createElement(Err, {
      msg: error,
      id: errId
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    "data-fk": f.k
  }, Label, /*#__PURE__*/React.createElement("input", _extends({
    type: a11y.type || 'text'
  }, common, {
    placeholder: f.ph || '',
    dir: f.mono ? 'ltr' : 'auto',
    style: f.mono ? {
      textAlign: 'start'
    } : null,
    inputMode: a11y.inputMode,
    autoComplete: a11y.autoComplete || 'off',
    enterKeyHint: "next"
  })), /*#__PURE__*/React.createElement(Err, {
    msg: error,
    id: errId
  }));
}

// =============================================================
// Section renderers
// =============================================================
function FF_Rows({
  rows,
  form,
  set,
  errors,
  onBlur,
  isRequired
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, rows.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    className: "ff-row",
    style: {
      '--cols': row.length
    }
  }, row.map(f => /*#__PURE__*/React.createElement(FF_Field, {
    key: f.k,
    f: f,
    value: form[f.k],
    onChange: v => set(f.k, v),
    onBlur: onBlur,
    required: isRequired ? isRequired(f) : f.required,
    error: errors && errors[f.k]
  })))));
}
function FF_Classification({
  sec,
  form,
  set
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ff-seg"
  }, sec.classes.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: `ff-seg__opt ${form.cls === c ? 'is-on' : ''}`,
    onClick: () => set('cls', c)
  }, c))), sec.phases && /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0642\u0648\u0629 \u0627\u0644\u062A\u063A\u0630\u064A\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 (\u0646\u0648\u0639 \u0627\u0644\u0631\u0628\u0637)"), /*#__PURE__*/React.createElement("div", {
    className: "ff-seg"
  }, sec.phases.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: `ff-seg__opt ${form.phase === p ? 'is-on' : ''}`,
    onClick: () => set('phase', p)
  }, p)))));
}
function FF_ClassChange({
  sec,
  form,
  set
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-row",
    style: {
      '--cols': 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0645\u0646"), /*#__PURE__*/React.createElement("div", {
    className: "ff-seg ff-seg--wrap"
  }, sec.from.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: `ff-seg__opt ${form.cls_from === c ? 'is-on' : ''}`,
    onClick: () => set('cls_from', c)
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "ff-field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0625\u0644\u0649"), /*#__PURE__*/React.createElement("div", {
    className: "ff-seg ff-seg--wrap"
  }, sec.to.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: `ff-seg__opt ${form.cls_to === c ? 'is-on' : ''}`,
    onClick: () => set('cls_to', c)
  }, c)))));
}
function FF_ReasonSeg({
  sec,
  form,
  set,
  fieldKey = 'reasonChoice'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-seg ff-seg--wrap"
  }, sec.options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    className: `ff-seg__opt ${form[fieldKey] === o ? 'is-on' : ''}`,
    onClick: () => set(fieldKey, o)
  }, o)));
}
function FF_Urgency({
  sec,
  form,
  set
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-seg ff-seg--wrap"
  }, sec.levels.map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: `ff-seg__opt ff-urgency-${i} ${form.urgency === l ? 'is-on' : ''}`,
    onClick: () => set('urgency', l)
  }, l)));
}
function FF_Documents({
  list,
  form,
  set,
  docFiles,
  setDocFiles
}) {
  const visible = list.filter(d => !d.for || (d.for + '').split('|').includes(form.cls));
  const pickFile = async (key, docName) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,.pdf';
    input.onchange = async () => {
      const f = input.files && input.files[0];
      if (!f) return;
      if (f.size > 8 * 1024 * 1024) {
        alert(`${f.name} يتجاوز 8MB — اختر ملفاً أصغر.`);
        return;
      }
      const buf = await window.readFileAsArrayBuffer(f);
      const preview = f.type.startsWith('image/') ? await window.readFileAsDataURL(f) : null;
      setDocFiles(prev => ({
        ...prev,
        [key]: {
          name: f.name,
          size: f.size,
          type: f.type,
          _buf: buf,
          _preview: preview,
          label: docName
        }
      }));
      // Auto-tick the document checkbox
      set('docs', {
        ...(form.docs || {}),
        [docName]: true
      });
    };
    input.click();
  };
  const removeFile = (key, docName) => {
    setDocFiles(prev => {
      const n = {
        ...prev
      };
      delete n[key];
      return n;
    });
    set('docs', {
      ...(form.docs || {}),
      [docName]: false
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-docs"
  }, visible.map((d, i) => {
    const key = `doc_${i}`;
    const ticked = !!(form.docs || {})[d.n];
    const file = docFiles && docFiles[key];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `ff-doc ${ticked ? 'is-on' : ''} ${file ? 'has-file' : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "ff-doc__main",
      onClick: () => !file && set('docs', {
        ...(form.docs || {}),
        [d.n]: !ticked
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__box"
    }, ticked && /*#__PURE__*/React.createElement(Icon, {
      name: "check"
    })), /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__text"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__name"
    }, d.n), d.opt && /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__opt"
    }, d.opt))), file ? /*#__PURE__*/React.createElement("div", {
      className: "ff-doc__file"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__filebadge"
    }, file._preview ? /*#__PURE__*/React.createElement("img", {
      src: file._preview,
      alt: ""
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: file.type === 'application/pdf' ? 'picture_as_pdf' : 'description'
    })), /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__filemeta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__filename",
      title: file.name
    }, file.name), /*#__PURE__*/React.createElement("span", {
      className: "ff-doc__filesize"
    }, (file.size / 1024).toFixed(0), " KB")), /*#__PURE__*/React.createElement("button", {
      className: "ff-doc__btn ff-doc__btn--replace",
      onClick: () => pickFile(key, d.n),
      title: "\u0627\u0633\u062A\u0628\u062F\u0627\u0644"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "swap_horiz"
    })), /*#__PURE__*/React.createElement("button", {
      className: "ff-doc__btn ff-doc__btn--remove",
      onClick: () => removeFile(key, d.n),
      title: "\u062D\u0630\u0641"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "close"
    }))) : /*#__PURE__*/React.createElement("button", {
      className: "ff-doc__upload",
      onClick: () => pickFile(key, d.n)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload_file"
    }), /*#__PURE__*/React.createElement("span", null, "\u0625\u0631\u0641\u0627\u0642")));
  }), /*#__PURE__*/React.createElement("p", {
    className: "ff-docs__hint"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  }), "\u0627\u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0623\u0648 PDF \u0644\u0643\u0644 \u0645\u0633\u062A\u0646\u062F \u2014 \u064A\u064F\u0636\u0627\u0641 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0644\u0644\u0640 PDF \u0627\u0644\u0645\u0648\u062D\u0651\u062F \u0639\u0646\u062F \u0627\u0644\u062A\u0635\u062F\u064A\u0631."));
}

// =============================================================
// Fee computation
// =============================================================
function computeFees(fees, form) {
  if (!fees || fees.kind === 'none') return {
    rows: [],
    total: 0,
    note: ''
  };
  if (fees.kind === 'fixed') {
    return {
      rows: [{
        k: 'fixed',
        l: fees.label,
        amt: fees.amount
      }],
      total: fees.amount
    };
  }
  if (fees.kind === 'inspection_plus_meter') {
    const cls = form.cls || 'منزلي';
    const insp = fees.base[cls] || fees.base['منزلي'];
    const rows = [{
      k: 'insp',
      l: `أجور الكشف (${cls})`,
      amt: insp
    }];
    let total = insp;
    fees.addons.forEach(a => {
      const on = !!form['fee_' + a.k];
      rows.push({
        k: 'fee_' + a.k,
        l: a.l,
        amt: a.amount,
        toggle: true,
        on
      });
      if (on) total += a.amount;
    });
    return {
      rows,
      total
    };
  }
  if (fees.kind === 'inspection_only') {
    const cls = form.cls_to || form.cls || Object.keys(fees.base)[0];
    const amt = fees.base[cls] || 0;
    return {
      rows: [{
        k: 'insp',
        l: fees.label + ' (' + cls + ')',
        amt
      }],
      total: amt
    };
  }
  if (fees.kind === 'reconnect') {
    const k = form.reconnectKind || Object.keys(fees.table)[0];
    const amt = fees.table[k];
    return {
      rows: [{
        k: 'rec',
        l: 'أجور إعادة التيار — ' + k,
        amt
      }],
      total: amt,
      selector: {
        label: 'نوع وقطع التيار',
        key: 'reconnectKind',
        options: Object.keys(fees.table),
        current: k
      }
    };
  }
  if (fees.kind === 'inspection_table') {
    const k = form.reasonChoice || Object.keys(fees.table)[0];
    const amt = fees.table[k];
    return {
      rows: [{
        k: 'insp',
        l: k,
        amt
      }],
      total: amt
    };
  }
  if (fees.kind === 'meter_swap') {
    const k = form.meterSwapKind || Object.keys(fees.table)[0];
    const amt = fees.table[k];
    return {
      rows: [{
        k: 'sw',
        l: 'تبديل المقياس — ' + k,
        amt
      }],
      total: amt,
      selector: {
        label: 'نوع التبديل',
        key: 'meterSwapKind',
        options: Object.keys(fees.table),
        current: k
      }
    };
  }
  if (fees.kind === 'installment') {
    const total = +form.totalDebt || 0;
    const down = +form.downPayment || 0;
    const minDown = Math.ceil(total * fees.minDownPct / 100);
    const months = Math.min(+form.months || 0, fees.monthlyCap);
    const monthly = months > 0 ? Math.round((total - down) / months) : 0;
    return {
      rows: [{
        k: 'total',
        l: 'إجمالي المديونية',
        amt: total
      }, {
        k: 'down',
        l: 'الدفعة الأولى المقترحة',
        amt: down
      }, {
        k: 'min',
        l: `الحد الأدنى المطلوب (${fees.minDownPct}٪)`,
        amt: minDown,
        note: down >= minDown ? 'مقبول' : 'غير كافٍ'
      }],
      total: monthly,
      totalLabel: months > 0 ? `قسط شهري × ${months}` : 'القسط الشهري',
      note: months > fees.monthlyCap ? `الحد الأقصى ${fees.monthlyCap} أشهر` : ''
    };
  }
  if (fees.kind === 'temp_daily') {
    const days = Math.max(0, Math.ceil((new Date(form.toDate) - new Date(form.fromDate)) / 86400000) || 0);
    const cls = form.cls || 'تجاري';
    const insp = fees.inspectionFromClass && fees.inspectionFromClass[cls] || 0;
    return {
      rows: [{
        k: 'insp',
        l: `أجور الكشف (${cls})`,
        amt: insp
      }, {
        k: 'days',
        l: `مصروفات يومية × ${days} يوم`,
        amt: fees.daily * days
      }],
      total: insp + fees.daily * days
    };
  }
  if (fees.kind === 'cable_length') {
    return {
      rows: [],
      total: 0,
      note: fees.note || 'يُحدّد بعد الكشف الموقعي'
    };
  }
  if (fees.kind === 'note') {
    return {
      rows: [],
      total: 0,
      note: fees.text
    };
  }
  return {
    rows: [],
    total: 0
  };
}

// =============================================================
// FORM PAGE
// =============================================================
function FormPage({
  nav,
  code
}) {
  const svc = window.SERVICE_MAP[code] || window.SERVICE_MAP['CS0001'];
  const sec = window.SECTION_MAP[svc.section];
  const schema = window.getFormSchema(svc.code);
  const storageKey = 'tq-form-' + svc.code;
  const toast = window.useToast ? window.useToast() : null;
  const [tab, setTab] = useState('pro');
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [docFiles, setDocFiles] = useState({});
  // wizard + submission state
  const [step, setStep] = useState(0);
  const [visited, setVisited] = useState({
    0: true
  });
  const [submitState, setSubmitState] = useState('idle'); // idle | submitting | success | error
  const [submitMsg, setSubmitMsg] = useState('');
  const [refId, setRefId] = useState('');
  const initial = () => ({
    docs: {},
    cls: 'منزلي',
    phase: 'أحادي الطور'
  });
  const [form, setForm] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || 'null') || initial();
    } catch {
      return initial();
    }
  });
  useEffect(() => {
    setSaving(true);
    const id = setTimeout(() => {
      localStorage.setItem(storageKey, JSON.stringify(form));
      setSaving(false);
      setSavedAt(new Date());
    }, 600);
    return () => clearTimeout(id);
  }, [form, storageKey]);
  const set = (k, v) => {
    setForm(f => ({
      ...f,
      [k]: v
    }));
    if (errors[k]) setErrors(es => {
      const n = {
        ...es
      };
      delete n[k];
      return n;
    });
  };

  // ---- which fields are required ----
  const REQUIRED_KEYS = new Set(['name', 'phone', 'nid', 'subId']);
  const isRequired = f => !!f.required || REQUIRED_KEYS.has(f.k);

  // ---- validators for a single field ----
  const fieldRules = f => {
    const list = [];
    if (isRequired(f)) list.push(window.Validate.required);
    if (f.k === 'phone') list.push(window.Validate.phoneIQ);
    if (f.k === 'nid') list.push(window.Validate.digits);
    if (f.type === 'number') list.push(window.Validate.digits);
    return list;
  };

  // validate one field live (on blur)
  const validateField = f => {
    const fns = fieldRules(f);
    let msg = '';
    for (const fn of fns) {
      msg = fn(form[f.k]);
      if (msg) break;
    }
    setErrors(es => {
      const n = {
        ...es
      };
      if (msg) n[f.k] = msg;else delete n[f.k];
      return n;
    });
    return msg;
  };

  // ---- step model: one step per schema section + a final review step ----
  const steps = useMemo(() => {
    const arr = (schema.sections || []).map((sx, i) => ({
      type: 'section',
      sx,
      i
    }));
    arr.push({
      type: 'review'
    });
    return arr;
  }, [schema]);
  const lastStep = steps.length - 1;

  // collect the validatable field metas inside a section
  const sectionFields = sx => {
    const fs = [];
    (sx.rows || []).forEach(row => row.forEach(f => fs.push(f)));
    return fs;
  };

  // validate every required field in a given step; returns errors object
  const validateStep = idx => {
    const st = steps[idx];
    const errs = {};
    if (st && st.type === 'section') {
      sectionFields(st.sx).forEach(f => {
        const fns = fieldRules(f);
        for (const fn of fns) {
          const m = fn(form[f.k]);
          if (m) {
            errs[f.k] = m;
            break;
          }
        }
      });
    }
    if (st && st.type === 'review' && schema.declaration && !form.declAgreed) {
      errs.declAgreed = 'يلزم الموافقة على الإقرار';
    }
    return errs;
  };
  const focusFirstError = errs => {
    const firstKey = Object.keys(errs)[0];
    if (!firstKey) return;
    setTimeout(() => {
      const el = document.querySelector(`[data-fk="${firstKey}"]`);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        const inp = el.querySelector('input,select,textarea');
        inp && inp.focus();
      }
    }, 60);
  };
  const goToStep = idx => {
    setStep(idx);
    setVisited(v => ({
      ...v,
      [idx]: true
    }));
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const next = () => {
    const errs = validateStep(step);
    if (Object.keys(errs).length) {
      setErrors(es => ({
        ...es,
        ...errs
      }));
      setShowErrors(true);
      toast && toast.push({
        kind: 'error',
        title: 'أكمل الحقول المطلوبة',
        body: `${Object.keys(errs).length} حقل في هذه الخطوة بحاجة لمراجعة.`
      });
      focusFirstError(errs);
      return;
    }
    if (step < lastStep) goToStep(step + 1);
  };
  const back = () => {
    if (step > 0) goToStep(step - 1);
  };

  // simulate the request to the department system
  const submitRequest = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (navigator.onLine === false) reject(new Error('لا يوجد اتصال بالشبكة — تحقّق ثم أعد المحاولة'));else resolve('TQ-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 90000) + 10000));
    }, 1300);
  });
  const submit = async () => {
    // validate ALL steps before sending
    let firstBad = -1;
    const allErrs = {};
    for (let i = 0; i < steps.length; i++) {
      const e = validateStep(i);
      if (Object.keys(e).length && firstBad === -1) firstBad = i;
      Object.assign(allErrs, e);
    }
    if (Object.keys(allErrs).length) {
      setErrors(allErrs);
      setShowErrors(true);
      toast && toast.push({
        kind: 'error',
        title: 'لا يمكن إرسال الطلب',
        body: `${Object.keys(allErrs).length} حقل بحاجة مراجعة قبل الإرسال.`
      });
      if (firstBad >= 0) goToStep(firstBad);
      focusFirstError(allErrs);
      return;
    }
    setSubmitState('submitting');
    try {
      const id = await submitRequest();
      setRefId(id);
      setSubmitState('success');
      toast && toast.push({
        kind: 'success',
        title: 'تم استلام الطلب',
        body: `رقم المتابعة ${id}`
      });
    } catch (e) {
      setSubmitMsg(e.message || 'تعذّر الإرسال');
      setSubmitState('error');
      toast && toast.push({
        kind: 'error',
        title: 'تعذّر إرسال الطلب',
        body: e.message
      });
    }
  };
  const resetForm = () => {
    setForm(initial());
    setErrors({});
    setShowErrors(false);
    setConfirmReset(false);
    setAttachments([]);
    setDocFiles({});
    setStep(0);
    setVisited({
      0: true
    });
    setSubmitState('idle');
    toast && toast.push({
      kind: 'info',
      title: 'تم إعادة تهيئة النموذج'
    });
  };

  // Merge per-document files into the unified attachments stream
  const allAttachments = () => {
    const docArr = Object.entries(docFiles).map(([k, f]) => ({
      ...f,
      name: f.label + ' — ' + f.name
    }));
    return [...docArr, ...attachments];
  };
  const onPickFiles = async e => {
    const files = Array.from(e.target.files || []);
    e.target.value = '';
    const next = [];
    for (const f of files) {
      if (f.size > 8 * 1024 * 1024) {
        toast && toast.push({
          kind: 'warn',
          title: 'ملف كبير',
          body: `${f.name} > 8MB — تم تجاهله`
        });
        continue;
      }
      try {
        const buf = await window.readFileAsArrayBuffer(f);
        const url = f.type.startsWith('image/') ? await window.readFileAsDataURL(f) : null;
        next.push({
          name: f.name,
          type: f.type,
          size: f.size,
          _buf: buf,
          _preview: url
        });
      } catch (err) {
        console.error(err);
      }
    }
    setAttachments(a => [...a, ...next]);
  };
  const removeAttachment = i => setAttachments(a => a.filter((_, j) => j !== i));
  const feeResult = computeFees(schema.fees, form);
  const total = useCountUp(feeResult.total || 0);

  // ---- step presentation helpers ----
  const stepMeta = steps.map((s, i) => s.type === 'review' ? {
    label: 'المراجعة والإرسال',
    icon: 'fact_check'
  } : {
    label: s.sx.title || `القسم ${i + 1}`,
    icon: s.sx.icon || 'edit'
  });
  const current = steps[step];
  const stepErrCount = idx => Object.keys(validateStep(idx)).length;

  // review summary — labelled values the officer entered
  const reviewRows = () => {
    const out = [];
    (schema.sections || []).forEach(sx => (sx.rows || []).forEach(row => row.forEach(f => {
      if (form[f.k]) out.push({
        l: f.l,
        v: form[f.k]
      });
    })));
    if (form.cls) out.push({
      l: 'الصنف',
      v: form.cls
    });
    return out;
  };
  const renderSectionBody = sx => /*#__PURE__*/React.createElement("div", {
    className: "ff-section__body"
  }, sx.rows && /*#__PURE__*/React.createElement(FF_Rows, {
    rows: sx.rows,
    form: form,
    set: set,
    errors: showErrors ? errors : null,
    onBlur: validateField,
    isRequired: isRequired
  }), sx.kind === 'classification' && /*#__PURE__*/React.createElement(FF_Classification, {
    sec: sx,
    form: form,
    set: set
  }), sx.kind === 'class_change' && /*#__PURE__*/React.createElement(FF_ClassChange, {
    sec: sx,
    form: form,
    set: set
  }), sx.kind === 'reason_seg' && /*#__PURE__*/React.createElement(FF_ReasonSeg, {
    sec: sx,
    form: form,
    set: set
  }), sx.kind === 'urgency' && /*#__PURE__*/React.createElement(FF_Urgency, {
    sec: sx,
    form: form,
    set: set
  }), sx.kind === 'documents' && /*#__PURE__*/React.createElement(FF_Documents, {
    list: sx.list,
    form: form,
    set: set,
    docFiles: docFiles,
    setDocFiles: setDocFiles
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-enter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fp-back",
    onClick: () => nav('detail', {
      code: svc.code
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward"
  }), " ", svc.name), /*#__PURE__*/React.createElement("div", {
    className: "ff-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit_document"
  })), "\u0646\u0645\u0648\u0630\u062C ", svc.code, " \u2014 ", svc.name), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, "\u0627\u0644\u0646\u0633\u062E\u062A\u0627\u0646 \u0645\u062A\u0637\u0627\u0628\u0642\u062A\u0627\u0646 \u0628\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u2014 \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0644\u0644\u062A\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u0623\u0635\u0644\u064A\u0629 \u0644\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0631\u0633\u0645\u064A\u0629")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: `ff-autosave ${saving ? 'is-saving' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-autosave__dot"
  }), saving ? 'يحفظ…' : savedAt ? 'محفوظ تلقائياً' : 'جاهز'), /*#__PURE__*/React.createElement("div", {
    className: "ff-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: `ff-tab ${tab === 'pro' ? 'is-on' : ''}`,
    onClick: () => setTab('pro')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "auto_awesome"
  }), " \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629"), /*#__PURE__*/React.createElement("button", {
    className: `ff-tab ${tab === 'orig' ? 'is-on' : ''}`,
    onClick: () => setTab('orig')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "description"
  }), " \u0627\u0644\u0623\u0635\u0644\u064A\u0629")))), tab === 'orig' ? /*#__PURE__*/React.createElement(window.OfficialPaper, {
    svc: svc,
    schema: schema,
    form: form,
    attachments: allAttachments()
  }) : submitState === 'success' ?
  /*#__PURE__*/
  /* ─────────── SUCCESS ─────────── */
  React.createElement("div", {
    className: "ff-result ff-result--ok fp-enter"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-result__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle"
  })), /*#__PURE__*/React.createElement("h3", null, "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D"), /*#__PURE__*/React.createElement("p", null, "\u0633\u064F\u062C\u0650\u0651\u0644 \u0637\u0644\u0628 \xAB", svc.name, "\xBB \u0648\u062D\u064F\u0648\u0650\u0651\u0644 \u0625\u0644\u0649 ", sec.name, ". \u0627\u062D\u062A\u0641\u0638 \u0628\u0631\u0642\u0645 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629:"), /*#__PURE__*/React.createElement("div", {
    className: "ff-result__ref"
  }, refId), /*#__PURE__*/React.createElement("div", {
    className: "ff-result__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "schedule"
  }), " \u0627\u0644\u0645\u062F\u0651\u0629 \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629 ", svc.sla, " \u0623\u064A\u0627\u0645"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "place"
  }), " \u0627\u0644\u0631\u0635\u0627\u0641\u0629 \u2014 \u0641\u0631\u0639 \u0627\u0644\u0646\u0636\u0627\u0644")), /*#__PURE__*/React.createElement("div", {
    className: "ff-result__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary",
    onClick: () => setTab('orig')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "print"
  }), " \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0631\u0633\u0645\u064A\u0629"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: () => nav('cases')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "inventory_2"
  }), " \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062D\u0627\u0644\u0627\u062A"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: resetForm
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "add"
  }), " \u0637\u0644\u0628 \u062C\u062F\u064A\u062F"))) :
  /*#__PURE__*/
  /* ─────────── WIZARD ─────────── */
  React.createElement("div", {
    className: "ff-wizard"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "ff-steps",
    role: "list"
  }, stepMeta.map((m, i) => {
    const done = visited[i] && i < step && stepErrCount(i) === 0;
    const state = i === step ? 'is-current' : done ? 'is-done' : visited[i] ? 'is-seen' : '';
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: `ff-step ${state}`
    }, /*#__PURE__*/React.createElement("button", {
      className: "ff-step__btn",
      onClick: () => (visited[i] || i < step) && goToStep(i),
      disabled: !visited[i] && i > step,
      "aria-current": i === step ? 'step' : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-step__num"
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check"
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      className: "ff-step__lbl"
    }, m.label)), i < stepMeta.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "ff-step__bar"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "ff-layout"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, current.type === 'section' ? /*#__PURE__*/React.createElement("div", {
    className: "f-card ff-section fp-enter",
    key: step
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: current.sx.icon || (current.sx.kind === 'documents' ? 'folder_open' : 'edit')
  }), current.sx.title || (current.sx.kind === 'documents' ? 'الوثائق / المستمسكات' : 'القسم')), /*#__PURE__*/React.createElement("span", {
    className: "ff-step__count"
  }, "\u0627\u0644\u062E\u0637\u0648\u0629 ", step + 1, " \u0645\u0646 ", steps.length)), renderSectionBody(current.sx)) :
  /*#__PURE__*/
  /* review step: summary + declaration + attachments */
  React.createElement("div", {
    className: "fp-enter",
    key: "review",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card ff-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "fact_check"
  }), " \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"), /*#__PURE__*/React.createElement("span", {
    className: "ff-step__count"
  }, "\u0627\u0644\u062E\u0637\u0648\u0629 ", step + 1, " \u0645\u0646 ", steps.length)), /*#__PURE__*/React.createElement("div", {
    className: "ff-section__body"
  }, reviewRows().length === 0 ? /*#__PURE__*/React.createElement(window.EmptyState, {
    compact: true,
    icon: "edit_note",
    title: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0639\u062F",
    body: "\u0639\u064F\u062F \u0625\u0644\u0649 \u0627\u0644\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u0633\u0627\u0628\u0642\u0629 \u0648\u0623\u062F\u062E\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0644\u0628."
  }) : /*#__PURE__*/React.createElement("dl", {
    className: "ff-review"
  }, reviewRows().map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ff-review__row"
  }, /*#__PURE__*/React.createElement("dt", null, r.l), /*#__PURE__*/React.createElement("dd", null, r.v)))))), schema.declaration && /*#__PURE__*/React.createElement("div", {
    className: "f-card ff-section ff-decl-card",
    "data-fk": "declAgreed"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gavel"
  }), " \u0627\u0644\u0625\u0642\u0631\u0627\u0631 \u0648\u0627\u0644\u062A\u0639\u0647\u062F"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u064A\u064F\u0637\u0628\u0639 \u0643\u0627\u0645\u0644\u0627\u064B \u0645\u0639 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u0623\u0635\u0644\u064A")), /*#__PURE__*/React.createElement("div", {
    className: "ff-section__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ff-decl-text"
  }, schema.declaration), /*#__PURE__*/React.createElement("label", {
    className: `ff-check ff-check--decl ${showErrors && errors.declAgreed ? 'is-invalid' : ''}`,
    onClick: () => {
      set('declAgreed', !form.declAgreed);
      setErrors(es => {
        const n = {
          ...es
        };
        delete n.declAgreed;
        return n;
      });
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-check__box"
  }, form.declAgreed && /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), "\u0642\u0631\u0623\u062A \u0627\u0644\u0625\u0642\u0631\u0627\u0631 \u0648\u0623\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0645\u0627 \u0648\u0631\u062F \u0641\u064A\u0647"), /*#__PURE__*/React.createElement(window.FieldError, {
    msg: showErrors ? errors.declAgreed : ''
  }))), /*#__PURE__*/React.createElement("div", {
    className: "f-card ff-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "attach_file"
  }), " \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u0635\u0648\u0631 \u0623\u0648 PDFs \u0644\u0644\u0645\u0633\u062A\u0645\u0633\u0643\u0627\u062A \u2014 \u0627\u062E\u062A\u064A\u0627\u0631\u064A\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "ff-section__body"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ff-attach-drop"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    multiple: true,
    accept: "image/*,.pdf",
    onChange: onPickFiles,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "cloud_upload"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "\u0627\u0633\u062D\u0628 \u0648\u0623\u0641\u0644\u062A \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0647\u0646\u0627"), /*#__PURE__*/React.createElement("small", null, "\u0623\u0648 \u0627\u0636\u063A\u0637 \u0644\u0644\u0627\u062E\u062A\u064A\u0627\u0631 \u2014 JPG \xB7 PNG \xB7 PDF (\u062D\u062A\u0649 8MB \u0644\u0643\u0644 \u0645\u0644\u0641)"))), attachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ff-attach-list"
  }, attachments.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ff-attach-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-attach-thumb"
  }, a._preview ? /*#__PURE__*/React.createElement("img", {
    src: a._preview,
    alt: ""
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: a.type === 'application/pdf' ? 'picture_as_pdf' : 'description'
  })), /*#__PURE__*/React.createElement("span", {
    className: "ff-attach-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-attach-name"
  }, a.name), /*#__PURE__*/React.createElement("span", {
    className: "ff-attach-size"
  }, (a.size / 1024).toFixed(0), " KB \xB7 ", a.type || 'ملف')), /*#__PURE__*/React.createElement("button", {
    className: "ff-attach-rm",
    onClick: () => removeAttachment(i),
    "aria-label": "\u062D\u0630\u0641"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ff-attach-summary"
  }, attachments.length, " \u0645\u0644\u0641")))), submitState === 'error' && /*#__PURE__*/React.createElement("div", {
    className: "ff-result ff-result--err"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-result__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "error"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\u062A\u0639\u0630\u0651\u0631 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628"), /*#__PURE__*/React.createElement("p", null, submitMsg)), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary",
    onClick: submit
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh"
  }), " \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629"))), showErrors && Object.keys(errors).length > 0 && /*#__PURE__*/React.createElement(window.ValidationSummary, {
    errors: errors
  }), /*#__PURE__*/React.createElement("div", {
    className: "ff-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: back,
    disabled: step === 0
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward"
  }), " \u0627\u0644\u0633\u0627\u0628\u0642"), /*#__PURE__*/React.createElement("span", {
    className: "ff-nav__progress"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-nav__bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: `${(step + 1) / steps.length * 100}%`
    }
  })), step + 1, " / ", steps.length), step < lastStep ? /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary",
    onClick: next
  }, "\u0627\u0644\u062A\u0627\u0644\u064A ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back"
  })) : /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary",
    onClick: submit,
    disabled: submitState === 'submitting'
  }, submitState === 'submitting' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "ff-spin"
  }), " \u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "send"
  }), " \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0637\u0644\u0628")))), /*#__PURE__*/React.createElement("aside", {
    className: "ff-feepanel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-feepanel__head"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "request_quote"
  }), " \u0627\u0644\u0623\u062C\u0648\u0631 \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629"), feeResult.selector && /*#__PURE__*/React.createElement("div", {
    className: "ff-field",
    style: {
      padding: '0 14px 0'
    }
  }, /*#__PURE__*/React.createElement("label", null, feeResult.selector.label), /*#__PURE__*/React.createElement("select", {
    value: feeResult.selector.current,
    onChange: e => set(feeResult.selector.key, e.target.value)
  }, feeResult.selector.options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o)))), /*#__PURE__*/React.createElement("div", {
    className: "ff-feepanel__rows"
  }, feeResult.rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "ff-feerow"
  }, /*#__PURE__*/React.createElement("span", null, "\u0647\u0630\u0647 \u0627\u0644\u062E\u062F\u0645\u0629 \u0628\u062F\u0648\u0646 \u0623\u062C\u0648\u0631"), /*#__PURE__*/React.createElement("b", null, "\u2014")), feeResult.rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    className: "ff-feerow",
    style: r.toggle ? {
      cursor: 'pointer'
    } : null,
    onClick: r.toggle ? () => set(r.k, !r.on) : undefined
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, r.toggle && /*#__PURE__*/React.createElement("span", {
    className: "ff-check__box",
    style: {
      background: r.on ? 'var(--f-ok)' : 'transparent',
      borderColor: r.on ? 'var(--f-ok)' : 'var(--f-border-2)'
    }
  }, r.on && /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), r.l, r.note && /*#__PURE__*/React.createElement("small", {
    style: {
      marginInlineStart: 6,
      opacity: .7
    }
  }, "(", r.note, ")")), /*#__PURE__*/React.createElement("b", null, fmtIQD(r.amt)))), feeResult.note && /*#__PURE__*/React.createElement("div", {
    className: "ff-feerow ff-feerow--note"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  }), " ", feeResult.note)), feeResult.total > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ff-feepanel__total"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, feeResult.totalLabel || 'المجموع'), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, fmt(total), /*#__PURE__*/React.createElement("small", null, "\u062F.\u0639"))), /*#__PURE__*/React.createElement("div", {
    className: "ff-feepanel__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: () => setTab('orig')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "description"
  }), " \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0623\u0635\u0644\u064A\u0629"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn",
    onClick: () => setConfirmReset(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh"
  }), " \u0625\u0639\u0627\u062F\u0629 \u062A\u0647\u064A\u0626\u0629"))))), /*#__PURE__*/React.createElement(window.ConfirmDialog, {
    open: confirmReset,
    danger: true,
    icon: "restart_alt",
    title: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u061F",
    description: "\u0633\u062A\u0641\u0642\u062F \u062C\u0645\u064A\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u062E\u0644\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0646\u0645\u0648\u0630\u062C. \u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0631\u0627\u062C\u0639 \u0639\u0646 \u0627\u0644\u0639\u0645\u0644\u064A\u0629.",
    confirmLabel: "\u0646\u0639\u0645\u060C \u0623\u0639\u062F \u0627\u0644\u062A\u0647\u064A\u0626\u0629",
    cancelLabel: "\u0625\u0644\u063A\u0627\u0621",
    onConfirm: resetForm,
    onCancel: () => setConfirmReset(false)
  }));
}

// =============================================================
// ORIGINAL PAPER — generated from schema
// =============================================================
function cb(on) {
  return on ? '☑' : '☐';
}
function PaperFieldRows({
  rows,
  form
}) {
  return rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, row.flatMap(f => [/*#__PURE__*/React.createElement("th", {
    key: f.k + '-l',
    style: {
      width: '18%'
    }
  }, f.l), /*#__PURE__*/React.createElement("td", {
    key: f.k + '-v',
    colSpan: f.full ? row.length === 1 ? 7 : 3 : 1
  }, form[f.k] || ' ')])));
}
function OriginalPaper({
  svc,
  schema,
  form
}) {
  const d = form.docs || {};
  return /*#__PURE__*/React.createElement("div", {
    className: "ff-paper-wrap fp-enter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ff-paper",
    dir: "rtl"
  }, /*#__PURE__*/React.createElement("h2", null, schema.paperTitle), /*#__PURE__*/React.createElement("div", {
    className: "ff-paper__sub"
  }, "\u0646\u0645\u0648\u0630\u062C \u0631\u0642\u0645 (", svc.code, ")"), /*#__PURE__*/React.createElement("div", {
    className: "head-band"
  }, /*#__PURE__*/React.createElement("span", null, "\u0631\u0642\u0645 \u0648\u0635\u0644 \u0642\u0628\u0636 (\u0631\u0633\u0648\u0645 \u0637\u0644\u0628 \u0627\u0644\u062E\u062F\u0645\u0629): ............"), /*#__PURE__*/React.createElement("span", null, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0631\u0643\u0632: \u0627\u0644\u0631\u0635\u0627\u0641\u0629 \u2014 \u0641\u0631\u0639 \u0627\u0644\u0646\u0636\u0627\u0644 (RS-014)"), /*#__PURE__*/React.createElement("span", null, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0644\u0628: ", new Date().toLocaleDateString('ar-IQ-u-ca-gregory'))), schema.sections.map((sx, i) => {
    if (sx.kind === 'documents') return null;
    return /*#__PURE__*/React.createElement("table", {
      key: i
    }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      colSpan: 8,
      style: {
        background: '#e8e5db'
      }
    }, sx.title)), sx.rows && /*#__PURE__*/React.createElement(PaperFieldRows, {
      rows: sx.rows,
      form: form
    }), sx.kind === 'classification' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0627\u0644\u0635\u0646\u0641 \u0627\u0644\u0645\u062E\u062A\u0627\u0631"), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.classes.map(c => `${cb(form.cls === c)} ${c}`).join('    '))), sx.phases && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0642\u0648\u0629 \u0627\u0644\u062A\u063A\u0630\u064A\u0629"), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.phases.map(p => `${cb(form.phase === p)} ${p}`).join('    ')))), sx.kind === 'class_change' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0645\u0646"), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.from.map(c => `${cb(form.cls_from === c)} ${c}`).join('    '))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0625\u0644\u0649"), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.to.map(c => `${cb(form.cls_to === c)} ${c}`).join('    ')))), sx.kind === 'reason_seg' && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, sx.title), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.options.map(o => `${cb(form.reasonChoice === o)} ${o}`).join('    '))), sx.kind === 'urgency' && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629"), /*#__PURE__*/React.createElement("td", {
      colSpan: 7
    }, sx.levels.map(l => `${cb(form.urgency === l)} ${l}`).join('    ')))));
  }), schema.sections.filter(s => s.kind === 'documents').map((sx, i) => /*#__PURE__*/React.createElement("table", {
    key: 'doc' + i
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 34
    }
  }, "\u0627\u0644\u062D\u0627\u0644\u0629"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 24
    }
  }, "#"), /*#__PURE__*/React.createElement("th", null, "\u0627\u0644\u0648\u062B\u0627\u0626\u0642 / \u0627\u0644\u0645\u0633\u062A\u0645\u0633\u0643\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '34%'
    }
  }, "\u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0645\u0634\u0645\u0648\u0644\u0629 / \u0645\u0644\u0627\u062D\u0638\u0627\u062A"))), /*#__PURE__*/React.createElement("tbody", null, sx.list.map((doc, idx) => /*#__PURE__*/React.createElement("tr", {
    key: idx
  }, /*#__PURE__*/React.createElement("td", {
    className: "c"
  }, cb(!!d[doc.n])), /*#__PURE__*/React.createElement("td", {
    className: "c"
  }, idx + 1), /*#__PURE__*/React.createElement("td", null, doc.n), /*#__PURE__*/React.createElement("td", {
    className: "c",
    style: {
      fontSize: '0.68rem',
      color: '#555'
    }
  }, doc.all ? 'جميع الأصناف' : doc.opt || '—')))))), schema.extraDocsTable && /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0627\u0644\u0648\u062B\u064A\u0642\u0629"), /*#__PURE__*/React.createElement("th", null, "\u0631\u0642\u0645 \u0627\u0644\u0648\u062B\u064A\u0642\u0629"), /*#__PURE__*/React.createElement("th", null, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u062B\u064A\u0642\u0629"))), /*#__PURE__*/React.createElement("tbody", null, schema.extraDocsTable.map(v => /*#__PURE__*/React.createElement("tr", {
    key: v
  }, /*#__PURE__*/React.createElement("td", null, v), /*#__PURE__*/React.createElement("td", null, ' '), /*#__PURE__*/React.createElement("td", null, ' '))))), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: '40%'
    }
  }, "\u0631\u0642\u0645 \u0648\u0635\u0644 \u0642\u0628\u0636 (\u0631\u0633\u0648\u0645 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0628\u0639\u062F \u0627\u0644\u062F\u0631\u0627\u0633\u0629)"), /*#__PURE__*/React.createElement("td", null, ' ')), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u064A\u062D\u0648\u064E\u0651\u0644 \u0644\u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"), /*#__PURE__*/React.createElement("td", null, (schema.routing || ['خدمات المشتركين', 'الدائرة الفنية', 'الدائرة القانونية', 'الصندوق', 'إلغاء الطلب']).map(r => `☐ ${r}`).join('   '))))), /*#__PURE__*/React.createElement("div", {
    className: "sig-row"
  }, /*#__PURE__*/React.createElement("div", null, "\u0627\u0633\u0645 \u0648\u062A\u0648\u0642\u064A\u0639 \u0645\u0648\u0638\u0641 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u064A\u0646", /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, ' ')), /*#__PURE__*/React.createElement("div", null, "\u0627\u0633\u0645 \u0648\u062A\u0648\u0642\u064A\u0639 \u0645\u0642\u062F\u0645 \u0627\u0644\u0637\u0644\u0628", /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, form.name || ' ')), /*#__PURE__*/React.createElement("div", null, "\u0627\u0633\u0645 \u0648\u062A\u0648\u0642\u064A\u0639 \u0645\u0633\u0624\u0648\u0644 \u0645\u0631\u0643\u0632 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u064A\u0646", /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, ' '))), schema.declaration && /*#__PURE__*/React.createElement("div", {
    className: "decl"
  }, /*#__PURE__*/React.createElement("h3", null, "\u0625\u0642\u0631\u0627\u0631 \u0648\u062A\u0639\u0647\u0651\u062F \u0648\u0627\u0644\u062A\u0632\u0627\u0645"), schema.declaration.split('\n').map((line, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, line)), /*#__PURE__*/React.createElement("div", {
    className: "sig-row",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u0627\u0633\u0645 \u0648\u062A\u0648\u0642\u064A\u0639 \u0645\u0642\u062F\u0645 \u0627\u0644\u0637\u0644\u0628", /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, form.name || ' ')), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E", /*#__PURE__*/React.createElement("div", {
    className: "line"
  }, new Date().toLocaleDateString('ar-IQ-u-ca-gregory')))))));
}
Object.assign(window, {
  FormPage,
  OriginalPaper
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_form.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_forms_data.js
try { (() => {
// =============================================================
// Tadfuq Al-Khayr — service form schemas (all 31 services)
// Declarative. final_form.jsx renders any service from its schema.
// =============================================================

(function () {
  // ---- shared field libraries -------------------------------------------
  const APPLICANT = {
    title: 'بيانات مقدم الطلب',
    icon: 'person',
    rows: [[{
      k: 'name',
      l: 'الاسم الرباعي واللقب',
      ph: 'مثال: علي عبدالله حسين الكرخي'
    }, {
      k: 'nid',
      l: 'رقم البطاقة الموحدة / الهوية',
      ph: '199801012345',
      mono: true
    }], [{
      k: 'housing',
      l: 'رقم بطاقة السكن',
      mono: true
    }, {
      k: 'phone',
      l: 'رقم هاتف / موبايل',
      ph: '07xxxxxxxxx',
      mono: true
    }]]
  };
  const APPLICANT_WITH_RELATION = {
    title: 'بيانات مقدم الطلب وصفته',
    icon: 'person',
    rows: [[{
      k: 'name',
      l: 'الاسم الرباعي واللقب'
    }, {
      k: 'nid',
      l: 'رقم البطاقة الموحدة',
      mono: true
    }], [{
      k: 'phone',
      l: 'الهاتف / الموبايل',
      mono: true
    }, {
      k: 'relation',
      l: 'الصفة',
      type: 'select',
      options: ['المشترك', 'وكيل قانوني', 'وريث', 'مستأجر مفوّض', 'صاحب الشأن']
    }]]
  };
  const ACCOUNT_BLOCK = {
    title: 'بيانات الاشتراك',
    icon: 'tag',
    rows: [[{
      k: 'acct',
      l: 'رقم الحساب المخصص',
      mono: true,
      ph: 'مثال: 4081-552'
    }, {
      k: 'subName',
      l: 'اسم المشترك على الفاتورة'
    }], [{
      k: 'meterNo',
      l: 'رقم المقياس',
      mono: true
    }, {
      k: 'subClass',
      l: 'صنف الاشتراك الحالي',
      type: 'select',
      options: ['منزلي', 'تجاري', 'صناعي', 'حكومي', 'زراعي']
    }]]
  };
  const ADDRESS_BLOCK = {
    title: 'عنوان العقار',
    icon: 'home_pin',
    rows: [[{
      k: 'hay',
      l: 'حي'
    }, {
      k: 'mahalla',
      l: 'محلة',
      mono: true
    }, {
      k: 'zuqaq',
      l: 'زقاق',
      mono: true
    }, {
      k: 'dar',
      l: 'دار',
      mono: true
    }], [{
      k: 'ramz',
      l: 'الترميز الجديد',
      mono: true
    }, {
      k: 'piece',
      l: 'القطعة والمقاطعة'
    }, {
      k: 'floor',
      l: 'الطابق'
    }, {
      k: 'apt',
      l: 'رقم الشقة',
      mono: true
    }], [{
      k: 'gps',
      l: 'GPS / نقطة دالة',
      ph: '33.3152, 44.3661'
    }, {
      k: 'landmark',
      l: 'علامة مميزة',
      ph: 'قرب جامع/مدرسة…'
    }]]
  };
  const CLASSIFICATION = (opts = ['منزلي', 'تجاري', 'صناعي', 'حكومي', 'زراعي'], phases = ['أحادي الطور', 'ثلاثي الطور']) => ({
    title: 'صنف الاشتراك المطلوب',
    icon: 'category',
    kind: 'classification',
    classes: opts,
    phases
  });
  const DOCS_NEW_SUB = [{
    n: 'نسخة من هوية الأحوال المدنية',
    all: true
  }, {
    n: 'نسخة من بطاقة السكن',
    all: true
  }, {
    n: 'كتاب تأييد سكن مصدّق',
    all: true
  }, {
    n: 'صورة موثّقة للقسام الشرعي',
    opt: 'عند اللزوم'
  }, {
    n: 'كتاب ضريبة العقار'
  }, {
    n: 'إجازة البناء مصدّقة',
    opt: 'بدل ضريبة العقار'
  }, {
    n: 'سند قيد التسجيل للعقار (الطابو)'
  }, {
    n: 'صورة من قائمة حساب المجاور'
  }, {
    n: 'كتاب التنمية الصناعية',
    opt: 'صناعي',
    for: 'صناعي'
  }, {
    n: 'كتاب المضخة الزراعية',
    opt: 'زراعي',
    for: 'زراعي'
  }, {
    n: 'كتاب من الدائرة',
    opt: 'حكومي',
    for: 'حكومي'
  }, {
    n: 'إجازة الاستثمار',
    opt: 'استثماري',
    for: 'مجمع سكني|مشروع استثماري'
  }];
  const DOCS_OWNERSHIP = [{
    n: 'هوية أحوال البائع والمشتري',
    all: true
  }, {
    n: 'بطاقة سكن البائع والمشتري',
    all: true
  }, {
    n: 'عقد بيع موثّق أو صك انتقال ملكية',
    all: true
  }, {
    n: 'سند الطابو الجديد',
    all: true
  }, {
    n: 'براءة ذمة من مركز الخدمة',
    all: true
  }, {
    n: 'قسام شرعي موثّق',
    opt: 'ورثة'
  }, {
    n: 'تخويل من جميع الورثة',
    opt: 'ورثة متعددون'
  }, {
    n: 'كتاب لجنة فصل العقارات',
    opt: 'فصل عقارات'
  }];
  const DOCS_DAMAGE_REPORT = [{
    n: 'هوية أحوال المبلّغ',
    all: true
  }, {
    n: 'صور للموقع والضرر (٤ زوايا)',
    all: true
  }, {
    n: 'شهادة شهود (اختياري)',
    opt: 'إن وُجدت'
  }, {
    n: 'تقرير شرطة',
    opt: 'حوادث مرورية/إجرامية'
  }];
  const DOCS_BILLING = [{
    n: 'نسخة القائمة الأصلية',
    all: true
  }, {
    n: 'هوية المشترك',
    all: true
  }, {
    n: 'كشف حساب من المركز',
    opt: 'تسوية مالية'
  }, {
    n: 'كتاب رسمي',
    opt: 'دوائر حكومية'
  }];
  const DOCS_INSPECTION = [{
    n: 'هوية المشترك',
    all: true
  }, {
    n: 'صورة المقياس الحالي',
    all: true
  }, {
    n: 'نسخة آخر قائمة',
    all: true
  }];
  const DECL_GENERIC = `أقر أنا الموقع أدناه بصحة المعلومات المقدّمة وأتحمّل المسؤولية القانونية عن أي بيان مخالف للحقيقة. كما أتعهّد بالامتثال لأنظمة شركة توزيع الكهرباء — كهرباء الرصافة — والتعليمات الصادرة عنها بخصوص هذه الخدمة.`;
  const DECL_NEW_SUB = `أقر أنا الموقع أدناه وأتعهد والتزم لشركة توزيع الكهرباء بما يلي:
أولاً: أقر بعلمي وموافقتي وأنا بكامل أهليتي القانونية أن الأساس القانوني الذي ينظم علاقتي بشركة تدفّق الخير والشركة العامة لتوزيع كهرباء بغداد — كهرباء الرصافة هي الأنظمة الصادرة عن هذه الشركة في كل ما يتعلق بشؤون الكهرباء.
ثانياً: ألتزم وأتعهّد بعدم التعرّض للتجهيزات الكهربائية الخاصة بالشركة وعدم السماح لأي شخص بالتزود بالتيار من اشتراكي.
ثالثاً: أقر بأنني أُخلي مسؤولية الشركة عن أية أضرار ناجمة عن مخالفة الالتزامات أو عن انقطاع التيار لأعمال الصيانة.`;
  const DECL_TRANSFER = `أقر أنا (نحن) الموقعون أدناه بتنازلي عن اشتراك الكهرباء المذكور أعلاه وانتقال جميع الحقوق والالتزامات المترتبة عليه إلى صاحب الملكية الجديد، وأتحمّل المسؤولية الكاملة عن صحة المستندات وعن أي ذمة سابقة لتاريخ النقل.`;
  const DECL_HAZARD = `أقر أن البلاغ المقدّم يستند إلى ملاحظة فعلية ولا أرفع هذا البلاغ كيداً، وأن المعلومات الواردة فيه صحيحة على حد علمي، وأوافق على متابعة التحقيق إذا اقتضت الحاجة.`;

  // ---- fee logic helpers -------------------------------------------------
  const FEES_INSPECTION_PLUS_METER = {
    kind: 'inspection_plus_meter',
    base: {
      'منزلي': 15000,
      'تجاري': 100000,
      'صناعي': 150000,
      'حكومي': 150000,
      'زراعي': 50000,
      'مجمع سكني': 150000,
      'مشروع استثماري': 150000
    },
    addons: [{
      k: 'meter',
      l: 'مقياس المستهلك',
      amount: 62500
    }, {
      k: 'cover',
      l: 'الغطاء السفلي للمقياس',
      amount: 12500
    }]
  };
  const FEES_FIXED = (amount, label = 'أجور الخدمة') => ({
    kind: 'fixed',
    amount,
    label
  });
  const FEES_RECONNECT = {
    kind: 'reconnect',
    table: {
      'منزلي طور واحد': 50000,
      'منزلي 3 أطوار': 100000,
      'تجاري طور واحد': 150000,
      'تجاري 3 أطوار': 250000,
      'صناعي طور واحد': 100000,
      'صناعي 3 أطوار': 250000,
      'زراعي طور واحد': 75000,
      'زراعي 3 أطوار': 100000,
      'حكومي طور واحد': 100000,
      'حكومي 3 أطوار': 250000,
      'جهد 11 ك.ف.': 500000
    }
  };
  const FEES_INSPECTION_TABLE = {
    kind: 'inspection_table',
    table: {
      'فحص طور واحد — مقر الدائرة': 12500,
      'فحص طور واحد — موقع العمل': 22500,
      'فحص 3 أطوار — مقر الدائرة': 25000,
      'فحص 3 أطوار — موقع العمل': 37500,
      'فحص 3 أطوار قدرة عظمى — مقر الدائرة': 31250,
      'فحص 3 أطوار قدرة عظمى — موقع العمل': 60000
    }
  };
  const FEES_METER_SWAP = {
    kind: 'meter_swap',
    table: {
      'منزلي طور واحد': 12500,
      'منزلي 3 أطوار': 17500,
      'تجاري طور واحد': 25000,
      'تجاري 3 أطوار': 50000,
      'صناعي طور واحد': 50000,
      'صناعي 3 أطوار مباشر': 150000,
      'صناعي 3 أطوار غير مباشر': 300000,
      'زراعي طور واحد': 37500,
      'زراعي 3 أطوار': 75000,
      'حكومي طور واحد': 37500,
      'حكومي 3 أطوار': 75000
    }
  };
  const FEES_INSTALLMENT = {
    kind: 'installment',
    monthlyCap: 6,
    minDownPct: 25
  };
  const FEES_NONE = {
    kind: 'none'
  };

  // ---- per-service custom field groups ----------------------------------
  const REASON_FREETEXT = (title = 'سبب الطلب', icon = 'subject') => ({
    title,
    icon,
    rows: [[{
      k: 'reason',
      l: 'تفاصيل',
      type: 'textarea',
      ph: 'اكتب وصفاً واضحاً للسبب…',
      full: true
    }]]
  });
  const URGENCY_SEG = {
    title: 'مستوى الأولوية',
    icon: 'priority_high',
    kind: 'urgency',
    levels: ['طبيعي', 'عاجل', 'طارئ — خطر مباشر']
  };

  // ===========================================================
  // PER-SERVICE SCHEMAS
  // ===========================================================
  const F = {};

  // ---- CS — Subscriptions ----
  F.CS0001 = {
    paperTitle: 'طلب عمل اشتراك جديد',
    sections: [APPLICANT, CLASSIFICATION(['منزلي', 'تجاري', 'صناعي', 'حكومي', 'زراعي', 'مجمع سكني', 'مشروع استثماري']), ADDRESS_BLOCK, {
      kind: 'documents',
      list: DOCS_NEW_SUB
    }],
    fees: FEES_INSPECTION_PLUS_METER,
    declaration: DECL_NEW_SUB,
    routing: ['خدمات المشتركين', 'الدائرة الفنية', 'الدائرة القانونية', 'الصندوق', 'شؤون الموظفين', 'إلغاء الطلب'],
    extraDocsTable: ['كتاب ضريبة العقار', 'كتاب التنمية الصناعية', 'كتاب الدائرة الحكومية', 'إجازة الاستثمار', 'القسام الشرعي']
  };
  F.CS0002 = {
    paperTitle: 'طلب إضافة اسم منتفع للفاتورة',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'بيانات المنتفع المراد إضافته',
      icon: 'person_add',
      rows: [[{
        k: 'benefName',
        l: 'الاسم الرباعي للمنتفع'
      }, {
        k: 'benefNid',
        l: 'الهوية الموحدة',
        mono: true
      }], [{
        k: 'benefRelation',
        l: 'العلاقة',
        type: 'select',
        options: ['مستأجر', 'زوجة', 'ابن/ابنة', 'أخ/أخت', 'وكيل', 'أخرى']
      }, {
        k: 'leaseDate',
        l: 'تاريخ بدء العلاقة',
        type: 'date'
      }]]
    }, {
      kind: 'documents',
      list: [{
        n: 'هوية المشترك الأصلي',
        all: true
      }, {
        n: 'هوية المنتفع',
        all: true
      }, {
        n: 'بطاقة سكن المنتفع',
        all: true
      }, {
        n: 'عقد إيجار موثّق',
        opt: 'مستأجر',
        for: 'مستأجر'
      }, {
        n: 'صلة قرابة',
        opt: 'أقارب'
      }]
    }],
    fees: FEES_NONE,
    declaration: DECL_GENERIC
  };
  F.CS0003 = {
    paperTitle: 'طلب تغيير صنف الاشتراك',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'تغيير الصنف',
      icon: 'sync_alt',
      kind: 'class_change',
      from: ['منزلي', 'تجاري', 'صناعي', 'حكومي', 'زراعي'],
      to: ['منزلي', 'تجاري', 'صناعي', 'حكومي', 'زراعي']
    }, REASON_FREETEXT('مبرر التغيير'), {
      kind: 'documents',
      list: [{
        n: 'هوية المشترك',
        all: true
      }, {
        n: 'سند الطابو أو إجازة البناء',
        all: true
      }, {
        n: 'كتاب الجهة المختصة (تجاري/صناعي/حكومي)',
        opt: 'حسب الصنف الجديد'
      }, {
        n: 'كشف فني يثبت مطابقة الحمل',
        all: true
      }]
    }],
    fees: {
      kind: 'inspection_only',
      base: FEES_INSPECTION_PLUS_METER.base,
      label: 'أجور الكشف للصنف الجديد'
    },
    declaration: DECL_GENERIC
  };
  F.CS0004 = {
    paperTitle: 'طلب إيقاف خدمة / قطع تيار مؤقت',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'فترة الإيقاف المطلوبة',
      icon: 'event_busy',
      rows: [[{
        k: 'fromDate',
        l: 'من تاريخ',
        type: 'date'
      }, {
        k: 'toDate',
        l: 'إلى تاريخ',
        type: 'date'
      }], [{
        k: 'stopReason',
        l: 'سبب الإيقاف',
        type: 'select',
        options: ['سفر طويل', 'إغلاق العقار', 'إعادة إعمار', 'أخرى']
      }, {
        k: 'notes',
        l: 'ملاحظات إضافية'
      }]]
    }],
    fees: FEES_NONE,
    declaration: DECL_GENERIC
  };
  F.CS0005 = {
    paperTitle: 'طلب تفعيل اشتراك موقوف',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'سبب التفعيل',
      icon: 'restart_alt',
      kind: 'reason_seg',
      options: ['عودة سكن', 'تشغيل عقار', 'إنهاء سفر', 'تسوية ذمم', 'أخرى']
    }, {
      kind: 'documents',
      list: [{
        n: 'هوية المشترك',
        all: true
      }, {
        n: 'براءة ذمة من قسم الجباية',
        all: true
      }, {
        n: 'إيصال تسوية الدفعات السابقة',
        opt: 'إن وُجدت'
      }]
    }],
    fees: FEES_RECONNECT,
    declaration: DECL_GENERIC
  };
  F.CS0006 = {
    paperTitle: 'طلب إلغاء اشتراك (غلق حساب)',
    sections: [APPLICANT_WITH_RELATION, ACCOUNT_BLOCK, REASON_FREETEXT('سبب الإلغاء'), {
      kind: 'documents',
      list: [{
        n: 'هوية المشترك',
        all: true
      }, {
        n: 'سند الطابو الحديث',
        all: true
      }, {
        n: 'براءة ذمة كاملة',
        all: true
      }, {
        n: 'محضر استلام مقياس',
        all: true
      }]
    }],
    fees: FEES_NONE,
    declaration: `أقر بطلب إلغاء الاشتراك المذكور أعلاه نهائياً، وأخلي مسؤولية الشركة من أي مطالبة لاحقة بعد إتمام التسوية المالية.`
  };
  F.CS0007 = {
    paperTitle: 'اعتراض على قائمة أو قطع تيار',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'تفاصيل القائمة المعترض عليها',
      icon: 'receipt_long',
      rows: [[{
        k: 'invoiceNo',
        l: 'رقم القائمة',
        mono: true
      }, {
        k: 'invoicePeriod',
        l: 'فترة الاستهلاك'
      }], [{
        k: 'invoiceAmount',
        l: 'مبلغ القائمة',
        type: 'number',
        unit: 'د.ع',
        mono: true
      }, {
        k: 'lastReading',
        l: 'آخر قراءة معتمدة',
        mono: true
      }]]
    }, REASON_FREETEXT('مبرر الاعتراض'), {
      kind: 'documents',
      list: [{
        n: 'نسخة من القائمة',
        all: true
      }, {
        n: 'صورة المقياس وآخر قراءة',
        all: true
      }, {
        n: 'إيصالات الدفعات السابقة',
        opt: 'إن وُجدت'
      }]
    }],
    fees: FEES_NONE,
    declaration: DECL_GENERIC
  };
  F.CS0008 = {
    paperTitle: 'طلب تعديل بيانات / عنوان مشترك',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'البيانات الحالية',
      icon: 'history',
      rows: [[{
        k: 'oldAddr',
        l: 'العنوان كما هو مسجّل',
        full: true
      }], [{
        k: 'oldPhone',
        l: 'الهاتف المسجّل',
        mono: true
      }, {
        k: 'oldName',
        l: 'الاسم على القائمة'
      }]]
    }, {
      title: 'البيانات الجديدة المطلوبة',
      icon: 'edit_location',
      rows: [[{
        k: 'newHay',
        l: 'حي'
      }, {
        k: 'newMahalla',
        l: 'محلة',
        mono: true
      }, {
        k: 'newZuqaq',
        l: 'زقاق',
        mono: true
      }, {
        k: 'newDar',
        l: 'دار',
        mono: true
      }], [{
        k: 'newRamz',
        l: 'الترميز الجديد',
        mono: true
      }, {
        k: 'newPhone',
        l: 'هاتف جديد',
        mono: true
      }]]
    }, {
      kind: 'documents',
      list: [{
        n: 'هوية المشترك',
        all: true
      }, {
        n: 'بطاقة السكن المحدّثة',
        all: true
      }, {
        n: 'كتاب الترميز الجديد من البلدية',
        opt: 'تغيير ترميز'
      }]
    }],
    fees: FEES_NONE,
    declaration: DECL_GENERIC
  };
  F.CS0009 = {
    paperTitle: 'طلب قراءة مقياس',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'تفاصيل الطلب',
      icon: 'speed',
      rows: [[{
        k: 'readPurpose',
        l: 'الغرض من القراءة',
        type: 'select',
        options: ['اعتراض على قائمة', 'بيع عقار', 'مراجعة استهلاك', 'أخرى']
      }, {
        k: 'preferredDate',
        l: 'الموعد المفضّل',
        type: 'date'
      }]]
    }, {
      kind: 'documents',
      list: DOCS_INSPECTION
    }],
    fees: FEES_FIXED(25000, 'أجور قراءة المقياس'),
    declaration: DECL_GENERIC
  };
  F.CS0010 = {
    paperTitle: 'طلب اشتراك مؤقت',
    sections: [APPLICANT, {
      title: 'مدّة الاشتراك المؤقت',
      icon: 'event',
      rows: [[{
        k: 'fromDate',
        l: 'من تاريخ',
        type: 'date'
      }, {
        k: 'toDate',
        l: 'إلى تاريخ',
        type: 'date'
      }], [{
        k: 'purpose',
        l: 'الغرض',
        type: 'select',
        options: ['موقع بناء', 'مهرجان/فعالية', 'تشغيل ضخ', 'معرض مؤقت', 'أخرى']
      }, {
        k: 'expectedLoad',
        l: 'الحمل المتوقع (كيلوواط)',
        type: 'number',
        unit: 'kW'
      }]]
    }, CLASSIFICATION(['تجاري', 'صناعي', 'حكومي']), ADDRESS_BLOCK, {
      kind: 'documents',
      list: [{
        n: 'هوية صاحب المشروع',
        all: true
      }, {
        n: 'إجازة البناء أو الفعالية',
        all: true
      }, {
        n: 'موافقة الجهة المختصة',
        all: true
      }, {
        n: 'تعهّد بإزالة التمديدات بعد انتهاء المدة',
        all: true
      }]
    }],
    fees: {
      kind: 'temp_daily',
      daily: 3500,
      inspectionFromClass: FEES_INSPECTION_PLUS_METER.base
    },
    declaration: `أتعهد بإنهاء الاشتراك المؤقت بانتهاء المدة المذكورة وإزالة التمديدات على نفقتي الخاصة، وأقبل تحويل أي تجاوز إلى مطالبة قانونية.`
  };
  F.CS0011 = {
    paperTitle: 'طلب نقل ملكية اشتراك',
    sections: [{
      title: 'بيانات البائع / المتنازل',
      icon: 'logout',
      rows: [[{
        k: 'sellerName',
        l: 'الاسم الرباعي'
      }, {
        k: 'sellerNid',
        l: 'الهوية الموحدة',
        mono: true
      }], [{
        k: 'sellerPhone',
        l: 'الهاتف',
        mono: true
      }, {
        k: 'sellerRelation',
        l: 'الصفة',
        type: 'select',
        options: ['المالك السابق', 'وكيل قانوني', 'أحد الورثة', 'أخرى']
      }]]
    }, {
      title: 'بيانات المشتري / المنتقل إليه',
      icon: 'login',
      rows: [[{
        k: 'buyerName',
        l: 'الاسم الرباعي'
      }, {
        k: 'buyerNid',
        l: 'الهوية الموحدة',
        mono: true
      }], [{
        k: 'buyerPhone',
        l: 'الهاتف',
        mono: true
      }, {
        k: 'buyerHousing',
        l: 'بطاقة السكن',
        mono: true
      }]]
    }, ACCOUNT_BLOCK, {
      title: 'نوع النقل',
      icon: 'swap_horiz',
      kind: 'reason_seg',
      options: ['بيع وشراء', 'وراثة', 'هبة', 'فصل عقارات', 'حكم محكمة']
    }, {
      kind: 'documents',
      list: DOCS_OWNERSHIP
    }],
    fees: FEES_FIXED(25000, 'أجور تغيير اسم المشترك'),
    declaration: DECL_TRANSFER
  };

  // ---- CT — Technical ----
  F.CT0001 = {
    paperTitle: 'شكوى ضرر / طلب تغيير موقع عامود',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'تفاصيل العامود والموقع المطلوب',
      icon: 'bolt',
      rows: [[{
        k: 'poleNo',
        l: 'رقم العامود (إن وُجد)',
        mono: true
      }, {
        k: 'poleType',
        l: 'نوع العامود',
        type: 'select',
        options: ['كونكريتي', 'حديدي', 'خشبي']
      }], [{
        k: 'oldLoc',
        l: 'الموقع الحالي',
        full: true
      }], [{
        k: 'newLoc',
        l: 'الموقع الجديد المقترح',
        full: true
      }]]
    }, REASON_FREETEXT('سبب نقل/تغيير العامود'), {
      kind: 'documents',
      list: DOCS_DAMAGE_REPORT
    }],
    fees: FEES_FIXED(1000000, 'أجور تغيير موقع عامود'),
    declaration: `أقر بصحة طلب نقل العامود وأتحمّل مسؤولية أي تأثير على المشتركين المجاورين، وأوافق على الكشف الميداني المشترك قبل تنفيذ العمل.`
  };
  F.CT0002 = {
    paperTitle: 'شكوى ضرر / طلب تغيير موقع ركيزة محولة',
    sections: [APPLICANT, {
      title: 'بيانات المحولة',
      icon: 'transform',
      rows: [[{
        k: 'trafoNo',
        l: 'رقم المحولة',
        mono: true
      }, {
        k: 'trafoKva',
        l: 'سعتها (kVA)',
        type: 'number',
        mono: true
      }], [{
        k: 'currentLoc',
        l: 'الموقع الحالي',
        full: true
      }], [{
        k: 'newLoc',
        l: 'الموقع الجديد المقترح',
        full: true
      }]]
    }, REASON_FREETEXT('مبرر تغيير الموقع'), {
      kind: 'documents',
      list: [...DOCS_DAMAGE_REPORT, {
        n: 'موافقة قسم التشغيل والتخطيط',
        all: true
      }, {
        n: 'مخطط هندسي للموقع الجديد',
        all: true
      }]
    }],
    fees: FEES_FIXED(2500000, 'أجور تغيير موقع ركيزة محولة'),
    declaration: `أقر بأن تنفيذ تغيير موقع الركيزة يستوجب فصل التغذية عن منطقة واسعة وأقبل بالجدولة الليلية المعتمدة من قسم التشغيل.`
  };
  F.CT0003 = {
    paperTitle: 'طلب تغيير كابل مشترك',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'تفاصيل الكابل',
      icon: 'cable',
      rows: [[{
        k: 'cableLength',
        l: 'الطول التقريبي (متر)',
        type: 'number',
        unit: 'م',
        mono: true
      }, {
        k: 'cableSize',
        l: 'المقطع المطلوب (mm²)',
        type: 'select',
        options: ['6', '10', '16', '25', '35', '50', '70', '95']
      }], [{
        k: 'cableReason',
        l: 'سبب التغيير',
        type: 'select',
        options: ['تلف الكابل', 'زيادة قوة التغذية', 'تغيير موقع المقياس', 'أخرى']
      }]]
    }, {
      kind: 'documents',
      list: DOCS_INSPECTION
    }],
    fees: {
      kind: 'cable_length',
      perMeter: 0,
      note: 'يُحدّد بعد الكشف الموقعي'
    },
    declaration: DECL_GENERIC
  };
  F.CT0004 = {
    paperTitle: 'طلب تجزئة اشتراك / تحويل 3 فاز إلى 3 اشتراكات',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'تفاصيل التجزئة',
      icon: 'call_split',
      rows: [[{
        k: 'unitsCount',
        l: 'عدد الوحدات المراد فصلها',
        type: 'number',
        mono: true
      }, {
        k: 'phasePerUnit',
        l: 'نوع كل اشتراك',
        type: 'select',
        options: ['أحادي الطور', 'ثلاثي الطور', 'مزيج']
      }]]
    }, {
      kind: 'documents',
      list: [{
        n: 'سند الطابو يبيّن الوحدات',
        all: true
      }, {
        n: 'مخطط هندسي للوحدات',
        all: true
      }, {
        n: 'هويات أصحاب كل وحدة',
        all: true
      }, {
        n: 'إجازة بناء أو فصل وحدات',
        all: true
      }]
    }],
    fees: {
      kind: 'inspection_only',
      base: FEES_INSPECTION_PLUS_METER.base,
      label: 'أجور كشف لكل اشتراك جديد'
    },
    declaration: DECL_GENERIC
  };
  F.CT0005 = {
    paperTitle: 'طلب تجميع أحمال / دمج اشتراكات',
    sections: [APPLICANT, {
      title: 'الاشتراكات المراد دمجها',
      icon: 'merge',
      rows: [[{
        k: 'acct1',
        l: 'رقم الاشتراك (١)',
        mono: true
      }, {
        k: 'acct2',
        l: 'رقم الاشتراك (٢)',
        mono: true
      }], [{
        k: 'acct3',
        l: 'رقم الاشتراك (٣)',
        mono: true
      }, {
        k: 'totalLoad',
        l: 'الحمل الكلي المتوقّع (kW)',
        type: 'number',
        mono: true
      }]]
    }, CLASSIFICATION(['تجاري', 'صناعي']), {
      kind: 'documents',
      list: [{
        n: 'هوية المشترك',
        all: true
      }, {
        n: 'كتاب التنمية الصناعية أو الإجازة التجارية',
        all: true
      }, {
        n: 'مخطط الحمل الموقّع من مهندس مختص',
        all: true
      }, {
        n: 'موافقة قسم التخطيط',
        all: true
      }]
    }],
    fees: {
      kind: 'inspection_only',
      base: {
        'تجاري': 100000,
        'صناعي': 150000
      },
      label: 'أجور الكشف للحمل المدموج'
    },
    declaration: DECL_GENERIC
  };
  F.CT0006 = {
    paperTitle: 'طلب تعديل جهد اشتراك',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'الجهد',
      icon: 'tune',
      kind: 'class_change',
      from: ['منخفض (380V)'],
      to: ['متوسط (11kV)', 'متوسط (33kV)']
    }, REASON_FREETEXT('مبرر تعديل الجهد'), {
      kind: 'documents',
      list: [{
        n: 'إجازة استثمار أو صناعي',
        all: true
      }, {
        n: 'مخطط الحمل',
        all: true
      }, {
        n: 'موافقة هندسية',
        all: true
      }]
    }],
    fees: {
      kind: 'note',
      text: 'تُحتسب الأجور حسب جدول هندسة الجهد المتوسط'
    },
    declaration: DECL_GENERIC
  };
  F.CT0007 = {
    paperTitle: 'طلب تغيير نوع المقياس / زيادة قوة',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'المقياس المطلوب',
      icon: 'memory',
      rows: [[{
        k: 'currentType',
        l: 'النوع الحالي',
        type: 'select',
        options: ['أحادي الطور', 'ثلاثي الطور']
      }, {
        k: 'newType',
        l: 'النوع المطلوب',
        type: 'select',
        options: ['أحادي الطور', 'ثلاثي الطور', 'ثلاثي قدرة عظمى']
      }], [{
        k: 'newAmps',
        l: 'التيار المطلوب (Amp)',
        type: 'number',
        mono: true
      }, {
        k: 'usageReason',
        l: 'سبب الزيادة',
        type: 'select',
        options: ['إضافة أجهزة', 'توسعة محل', 'مشروع جديد', 'أخرى']
      }]]
    }, {
      kind: 'documents',
      list: DOCS_INSPECTION
    }],
    fees: FEES_METER_SWAP,
    declaration: DECL_GENERIC
  };
  F.CT0008 = {
    paperTitle: 'طلب تغيير موقع المقياس داخل المبنى',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'موقع المقياس',
      icon: 'move_to_inbox',
      rows: [[{
        k: 'fromLoc',
        l: 'الموقع الحالي للمقياس',
        full: true
      }], [{
        k: 'toLoc',
        l: 'الموقع الجديد المطلوب',
        full: true
      }]]
    }, REASON_FREETEXT('مبرر النقل'), {
      kind: 'documents',
      list: DOCS_INSPECTION
    }],
    fees: FEES_FIXED(35000, 'أجور تغيير موقع المقياس'),
    declaration: DECL_GENERIC
  };
  F.CT0009 = {
    paperTitle: 'طلب فحص / تبديل / صيانة مقياس',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'نوع الفحص المطلوب',
      icon: 'fact_check',
      kind: 'reason_seg',
      options: ['فحص طور واحد — مقر الدائرة', 'فحص طور واحد — موقع العمل', 'فحص 3 أطوار — مقر الدائرة', 'فحص 3 أطوار — موقع العمل', 'فحص 3 أطوار قدرة عظمى — مقر الدائرة', 'فحص 3 أطوار قدرة عظمى — موقع العمل']
    }, REASON_FREETEXT('مبرر طلب الفحص'), {
      kind: 'documents',
      list: DOCS_INSPECTION
    }],
    fees: FEES_INSPECTION_TABLE,
    declaration: `أقر بأن نتيجة الفحص توثَّق بمحضر رسمي موقّع من لجنة الفحص وأُلزم بقبولها، وفي حال ثبت عطل المقياس من جهة الشركة تُعاد الأجور المستوفاة.`
  };

  // ---- CB — Billing ----
  F.CB0001 = {
    paperTitle: 'تسديد قائمة أجور كهرباء',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'تفاصيل القائمة',
      icon: 'payments',
      rows: [[{
        k: 'invoiceNo',
        l: 'رقم القائمة',
        mono: true
      }, {
        k: 'period',
        l: 'فترة الاستهلاك'
      }], [{
        k: 'amount',
        l: 'المبلغ المستحق',
        type: 'number',
        unit: 'د.ع',
        mono: true
      }, {
        k: 'payMethod',
        l: 'طريقة الدفع',
        type: 'select',
        options: ['نقداً في الصندوق', 'تحويل مصرفي', 'بطاقة ماستر', 'محفظة إلكترونية']
      }]]
    }, {
      kind: 'documents',
      list: [{
        n: 'القائمة الأصلية',
        all: true
      }, {
        n: 'هوية الدافع',
        all: true
      }]
    }],
    fees: FEES_NONE,
    declaration: `أقر بأن المبلغ المسدّد مطابق للقائمة المعروضة وأن الإيصال الصادر يعتبر إثبات دفع رسمياً.`
  };
  F.CB0002 = {
    paperTitle: 'طلب تقرير استهلاك مفصّل',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'الفترة المطلوبة',
      icon: 'analytics',
      rows: [[{
        k: 'fromDate',
        l: 'من',
        type: 'date'
      }, {
        k: 'toDate',
        l: 'إلى',
        type: 'date'
      }], [{
        k: 'reportPurpose',
        l: 'الغرض من التقرير',
        type: 'select',
        options: ['مراجعة شخصية', 'بيع عقار', 'قضية قانونية', 'عرض على الدائرة', 'أخرى']
      }]]
    }, {
      kind: 'documents',
      list: DOCS_BILLING
    }],
    fees: FEES_NONE,
    declaration: DECL_GENERIC
  };
  F.CB0003 = {
    paperTitle: 'طلب مراجعة قائمة / قائمة مصححة',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'القائمة المراد مراجعتها',
      icon: 'edit_document',
      rows: [[{
        k: 'invoiceNo',
        l: 'رقم القائمة',
        mono: true
      }, {
        k: 'invoiceAmount',
        l: 'المبلغ',
        type: 'number',
        unit: 'د.ع',
        mono: true
      }]]
    }, REASON_FREETEXT('سبب طلب التصحيح'), {
      kind: 'documents',
      list: DOCS_BILLING
    }],
    fees: FEES_NONE,
    declaration: DECL_GENERIC
  };
  F.CB0004 = {
    paperTitle: 'طلب نسخة قائمة أجور (بدل مفقود)',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'القائمة المطلوبة',
      icon: 'description',
      rows: [[{
        k: 'period',
        l: 'فترة القائمة'
      }, {
        k: 'invoiceNo',
        l: 'رقم القائمة (إن عُرف)',
        mono: true
      }]]
    }, {
      kind: 'documents',
      list: [{
        n: 'هوية المشترك',
        all: true
      }, {
        n: 'إقرار بفقدان الأصل',
        all: true
      }]
    }],
    fees: FEES_NONE,
    declaration: `أقر بفقدان النسخة الأصلية وأنّ النسخة البديلة لا تستعمل لإسقاط أي ذمة مالية.`
  };
  F.CB0005 = {
    paperTitle: 'إجراءات دفعة متأخرة / قسيمة متأخرة',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'الدفعة المتأخرة',
      icon: 'history',
      rows: [[{
        k: 'invoiceNo',
        l: 'رقم القسيمة',
        mono: true
      }, {
        k: 'lateDays',
        l: 'عدد أيام التأخير',
        type: 'number',
        mono: true
      }], [{
        k: 'amount',
        l: 'مبلغ الدفعة',
        type: 'number',
        unit: 'د.ع',
        mono: true
      }, {
        k: 'lateReason',
        l: 'سبب التأخير',
        type: 'select',
        options: ['عدم استلام القائمة', 'سفر', 'ظرف صحي', 'عذر مالي', 'أخرى']
      }]]
    }, {
      kind: 'documents',
      list: DOCS_BILLING
    }],
    fees: FEES_NONE,
    declaration: DECL_GENERIC
  };
  F.CB0006 = {
    paperTitle: 'طلب تسوية مالية / تقسيط',
    sections: [APPLICANT, ACCOUNT_BLOCK, {
      title: 'تفاصيل المديونية والاقتراح',
      icon: 'request_quote',
      rows: [[{
        k: 'totalDebt',
        l: 'إجمالي المديونية',
        type: 'number',
        unit: 'د.ع',
        mono: true
      }, {
        k: 'downPayment',
        l: 'الدفعة الأولى المقترحة',
        type: 'number',
        unit: 'د.ع',
        mono: true
      }], [{
        k: 'months',
        l: 'عدد الأشهر المقترحة',
        type: 'number',
        mono: true,
        max: 6
      }, {
        k: 'monthlyAmount',
        l: 'القسط الشهري المقترح',
        type: 'number',
        unit: 'د.ع',
        mono: true
      }]]
    }, {
      title: 'الكفيل (للمبالغ فوق ٥ ملايين)',
      icon: 'verified_user',
      rows: [[{
        k: 'guarantorName',
        l: 'اسم الكفيل'
      }, {
        k: 'guarantorNid',
        l: 'هوية الكفيل',
        mono: true
      }], [{
        k: 'guarantorWork',
        l: 'دائرة العمل',
        ph: 'موظف حكومي يُفضّل'
      }, {
        k: 'guarantorPhone',
        l: 'هاتف الكفيل',
        mono: true
      }]]
    }, {
      kind: 'documents',
      list: [{
        n: 'هوية المشترك',
        all: true
      }, {
        n: 'كشف حساب من قسم الجباية',
        all: true
      }, {
        n: 'هوية الكفيل وكتاب من دائرته',
        opt: 'فوق ٥ ملايين'
      }, {
        n: 'إيصال الدفعة الأولى',
        all: true
      }]
    }],
    fees: FEES_INSTALLMENT,
    declaration: `أقر بصحة المديونية وأتعهد بالتزام جدول التقسيط، وفي حالة التأخر عن قسطين متتاليين تُفصل التغذية ويصبح المبلغ كلّه واجب الأداء فوراً.`
  };

  // ---- CA — Reports ----
  F.CA0001 = {
    paperTitle: 'بلاغ تلاعب في المقياس / الوصلة',
    sections: [APPLICANT_WITH_RELATION, {
      title: 'موقع التلاعب',
      icon: 'gpp_bad',
      rows: [[{
        k: 'targetName',
        l: 'اسم المشترك المخالف (إن عُرف)'
      }, {
        k: 'targetAcct',
        l: 'رقم الاشتراك',
        mono: true
      }], [{
        k: 'targetAddr',
        l: 'العنوان الدقيق للموقع',
        full: true
      }]]
    }, {
      title: 'وصف التلاعب',
      icon: 'description',
      kind: 'reason_seg',
      options: ['تجاوز بدون مقياس', 'عبث بختم المقياس', 'وصلة مباشرة', 'قراءة محرّفة', 'أخرى']
    }, REASON_FREETEXT('تفاصيل إضافية وزمن الملاحظة'), URGENCY_SEG, {
      kind: 'documents',
      list: [{
        n: 'هوية المبلّغ',
        all: true
      }, {
        n: 'صور أو فيديو من الموقع',
        all: true
      }, {
        n: 'شهادة شهود',
        opt: 'إن وُجدت'
      }]
    }],
    fees: FEES_NONE,
    declaration: `أقر بأن البلاغ صحيح ولا أرفعه كيداً، وأوافق على إحالته للجنة التجاوزات والقانونية لاتخاذ الإجراءات اللازمة.`
  };
  F.CA0002 = {
    paperTitle: 'بلاغ حالة خطر',
    sections: [APPLICANT, {
      title: 'موقع الخطر',
      icon: 'warning',
      rows: [[{
        k: 'hazardAddr',
        l: 'العنوان الدقيق',
        full: true
      }], [{
        k: 'gps',
        l: 'GPS',
        mono: true
      }, {
        k: 'landmark',
        l: 'علامة مميزة'
      }]]
    }, {
      title: 'نوع الخطر',
      icon: 'priority_high',
      kind: 'reason_seg',
      options: ['عامود مائل/ساقط', 'كابل مكشوف/متهدّل', 'شرارة/حريق', 'صعقة كهربائية', 'محولة تتسرّب زيت', 'أخرى']
    }, URGENCY_SEG, REASON_FREETEXT('وصف ما رأيت'), {
      kind: 'documents',
      list: [{
        n: 'صور/فيديو من الموقع',
        all: true
      }, {
        n: 'رقم هاتف لمتابعة الفريق',
        all: true
      }]
    }],
    fees: FEES_NONE,
    declaration: DECL_HAZARD
  };
  F.CA0003 = {
    paperTitle: 'بلاغ ضرر أو فقد في مكونات الشبكة',
    sections: [APPLICANT, {
      title: 'المكوّن المتضرر',
      icon: 'build',
      kind: 'reason_seg',
      options: ['عامود', 'محولة', 'كابل', 'لوحة مقاييس', 'إنارة شارع', 'أخرى']
    }, {
      title: 'الموقع والوصف',
      icon: 'place',
      rows: [[{
        k: 'damageAddr',
        l: 'العنوان',
        full: true
      }], [{
        k: 'damageDate',
        l: 'تاريخ الملاحظة',
        type: 'date'
      }, {
        k: 'estimateLoss',
        l: 'تقدير الضرر إن أمكن'
      }]]
    }, REASON_FREETEXT('وصف الحالة'), {
      kind: 'documents',
      list: DOCS_DAMAGE_REPORT
    }],
    fees: FEES_NONE,
    declaration: DECL_HAZARD
  };
  F.CA0004 = {
    paperTitle: 'شكوى إدارية',
    sections: [APPLICANT, {
      title: 'موضوع الشكوى',
      icon: 'support_agent',
      kind: 'reason_seg',
      options: ['تأخير في إنجاز خدمة', 'تعامل غير لائق', 'تجاوز موظف', 'نوعية خدمة', 'شفافية الأجور', 'أخرى']
    }, {
      title: 'الجهة المشكو عليها',
      icon: 'apartment',
      rows: [[{
        k: 'unitName',
        l: 'الدائرة/الموظف (إن عُرف)'
      }, {
        k: 'incidentDate',
        l: 'تاريخ الحادثة',
        type: 'date'
      }]]
    }, REASON_FREETEXT('تفاصيل الشكوى'), {
      kind: 'documents',
      list: [{
        n: 'هوية الشاكي',
        all: true
      }, {
        n: 'مستندات داعمة',
        opt: 'إن وُجدت'
      }]
    }],
    fees: FEES_NONE,
    declaration: `أقر بصحة الشكوى المقدّمة وأوافق على تحويلها لمسؤول المركز للمتابعة خلال ٢٤ ساعة، وأتفهّم أن الشكاوى الكيدية تعرّض صاحبها للمساءلة.`
  };

  // ---- helpers --------------------------------------------------------
  window.SERVICE_FORMS = F;

  // Get schema for a code with safe fallback to a generic schema
  window.getFormSchema = function (code) {
    if (F[code]) return F[code];
    const svc = window.SERVICE_MAP[code];
    return {
      paperTitle: svc ? svc.name : 'طلب خدمة',
      sections: [APPLICANT, ACCOUNT_BLOCK, REASON_FREETEXT('سبب الطلب'), {
        kind: 'documents',
        list: [{
          n: 'هوية مقدّم الطلب',
          all: true
        }, {
          n: 'مستندات داعمة للطلب',
          all: true
        }]
      }],
      fees: FEES_NONE,
      declaration: DECL_GENERIC
    };
  };

  // Make building blocks reusable from other files if needed
  window.FORM_BUILDING = {
    APPLICANT,
    ACCOUNT_BLOCK,
    ADDRESS_BLOCK,
    CLASSIFICATION,
    DOCS_NEW_SUB,
    FEES_INSPECTION_PLUS_METER,
    FEES_NONE
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_forms_data.js", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_globals.jsx
try { (() => {
// =============================================================
// FINAL — shared globals for all page scripts
// (each Babel script has its own scope; share via window)
// =============================================================
const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;
const DEPT_COLORS = {
  CS: 'var(--f-cs)',
  CT: 'var(--f-ct)',
  CB: 'var(--f-cb)',
  CA: 'var(--f-ca)'
};
function Icon({
  name,
  size
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: size ? {
      fontSize: size
    } : null
  }, name);
}
Object.assign(window, {
  DEPT_COLORS,
  Icon,
  useState,
  useEffect,
  useMemo,
  useRef
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_globals.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_login.jsx
try { (() => {
// =============================================================
// FINAL — Login Page
// Uses the project's design tokens (--f-*) and motion language.
// Wraps window.Auth for sign-in; surfaces lockout / policy errors.
// =============================================================

function LoginPage({
  onSuccess
}) {
  const [identifier, setIdentifier] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPwd, setShowPwd] = React.useState(false);
  const [remember, setRemember] = React.useState(true);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState(null); // { code, message }
  const [forgotOpen, setForgotOpen] = React.useState(false);
  const idRef = React.useRef(null);
  React.useEffect(() => {
    idRef.current && idRef.current.focus();
  }, []);

  // Show the first-run hint only when an admin password is still the default seed.
  // We only know that on a fresh install — check if mustChangePassword is true
  // for the admin user (a proxy for "first run").
  const [firstRunHint, setFirstRunHint] = React.useState(null);
  React.useEffect(() => {
    if (!window.DB) return;
    const admin = window.DB.users.find ? window.DB.users.find(u => u.username === 'admin' && u.mustChangePassword) : null;
    if (admin) {
      setFirstRunHint({
        username: 'admin',
        password: window.DB.FIRST_RUN_ADMIN_PASSWORD
      });
    }
  }, []);
  const submit = async e => {
    e && e.preventDefault();
    setError(null);
    if (!identifier.trim() || !password) {
      setError({
        code: 'EMPTY',
        message: 'الرجاء إدخال اسم المستخدم وكلمة المرور'
      });
      return;
    }
    setBusy(true);
    const res = await window.Auth.signIn(identifier, password);
    setBusy(false);
    if (res.ok) {
      onSuccess && onSuccess(res);
      return;
    }
    setError(mapError(res));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "lg-shell",
    dir: "rtl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-bg__pool lg-bg__pool--a"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lg-bg__pool lg-bg__pool--b"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lg-bg__grid"
  })), /*#__PURE__*/React.createElement("div", {
    className: "lg-card"
  }, /*#__PURE__*/React.createElement("header", {
    className: "lg-card__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-card__mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "lg-card__brand-txt"
  }, /*#__PURE__*/React.createElement("strong", null, "\u062A\u062F\u0641\u0651\u0642 \u0627\u0644\u062E\u064A\u0631"), /*#__PURE__*/React.createElement("small", null, "\u0645\u0646\u0635\u0629 \u0643\u0647\u0631\u0628\u0627\u0621 \u0627\u0644\u0631\u0635\u0627\u0641\u0629"))), /*#__PURE__*/React.createElement("div", {
    className: "lg-card__head"
  }, /*#__PURE__*/React.createElement("h1", null, "\u0623\u0647\u0644\u0627\u064B \u0628\u0639\u0648\u062F\u062A\u0643"), /*#__PURE__*/React.createElement("p", null, "\u0633\u062C\u0651\u0644 \u062F\u062E\u0648\u0644\u0643 \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0625\u0644\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u0639\u0645\u0644")), firstRunHint && /*#__PURE__*/React.createElement("div", {
    className: "lg-hint"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "key"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\u062A\u0634\u063A\u064A\u0644 \u0623\u0648\u0644 \u0645\u0631\u0629"), /*#__PURE__*/React.createElement("small", null, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645: ", /*#__PURE__*/React.createElement("code", null, firstRunHint.username), " \xB7 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631:", /*#__PURE__*/React.createElement("code", null, firstRunHint.password), /*#__PURE__*/React.createElement("br", null), "\u0633\u064A\u064F\u0637\u0644\u0628 \u0645\u0646\u0643 \u062A\u063A\u064A\u064A\u0631\u0647\u0627 \u0641\u0648\u0631 \u0627\u0644\u062F\u062E\u0648\u0644."))), /*#__PURE__*/React.createElement("form", {
    className: "lg-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("label", {
    className: "lg-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__lbl"
  }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0623\u0648 \u0627\u0644\u0628\u0631\u064A\u062F"), /*#__PURE__*/React.createElement("span", {
    className: "lg-field__wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__ico"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "person")), /*#__PURE__*/React.createElement("input", {
    ref: idRef,
    type: "text",
    autoComplete: "username",
    value: identifier,
    onChange: e => {
      setIdentifier(e.target.value);
      setError(null);
    },
    placeholder: "\u0645\u062B\u0644\u0627\u064B admin",
    disabled: busy
  }))), /*#__PURE__*/React.createElement("label", {
    className: "lg-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__lbl"
  }, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"), /*#__PURE__*/React.createElement("span", {
    className: "lg-field__wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__ico"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock")), /*#__PURE__*/React.createElement("input", {
    type: showPwd ? 'text' : 'password',
    autoComplete: "current-password",
    value: password,
    onChange: e => {
      setPassword(e.target.value);
      setError(null);
    },
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    disabled: busy
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lg-field__action",
    onClick: () => setShowPwd(s => !s),
    "aria-label": showPwd ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, showPwd ? 'visibility_off' : 'visibility')))), /*#__PURE__*/React.createElement("div", {
    className: "lg-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "lg-check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: remember,
    onChange: e => setRemember(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "lg-check__box"
  }, remember && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "check")), /*#__PURE__*/React.createElement("span", null, "\u062A\u0630\u0643\u0651\u0631\u0646\u064A \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062C\u0647\u0627\u0632")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lg-link",
    onClick: () => setForgotOpen(true)
  }, "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F")), error && /*#__PURE__*/React.createElement("div", {
    className: `lg-alert lg-alert--${error.tone || 'err'}`,
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, error.tone === 'warn' ? 'warning' : 'error'), /*#__PURE__*/React.createElement("span", null, error.message)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "lg-submit",
    disabled: busy
  }, busy ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lg-submit__spin"
  }), /*#__PURE__*/React.createElement("span", null, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642\u2026")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_back")))), /*#__PURE__*/React.createElement("footer", {
    className: "lg-card__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-card__foot-l"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "shield"), "\u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0645\u0634\u0641\u0651\u0631 \u062F\u0627\u062E\u0644 \u0627\u0644\u0634\u0628\u0643\u0629 \u0627\u0644\u0645\u062D\u0644\u064A\u0629"), /*#__PURE__*/React.createElement("span", {
    className: "lg-card__foot-r"
  }, "\xA9 2026 \u0634\u0631\u0643\u0629 \u062A\u062F\u0641\u0651\u0642 \u0627\u0644\u062E\u064A\u0631"))), forgotOpen && /*#__PURE__*/React.createElement(ForgotPasswordModal, {
    onClose: () => setForgotOpen(false)
  }));
}
function mapError(res) {
  switch (res.code) {
    case 'USER_NOT_FOUND':
      return {
        tone: 'err',
        message: 'اسم المستخدم أو كلمة المرور غير صحيحة'
      };
    case 'BAD_PASSWORD':
      {
        const r = res.remaining;
        return {
          tone: 'err',
          message: r != null ? `كلمة المرور غير صحيحة (تبقّى ${r} محاولات قبل الإيقاف المؤقت)` : 'كلمة المرور غير صحيحة'
        };
      }
    case 'LOCKED':
      {
        const min = Math.ceil((res.retryAfter || 0) / 60);
        return {
          tone: 'warn',
          message: `الحساب موقوف مؤقتاً بسبب محاولات فاشلة متكررة. حاول بعد ${min} دقيقة`
        };
      }
    case 'DISABLED':
      return {
        tone: 'err',
        message: 'هذا الحساب موقوف. راجع مدير النظام'
      };
    case 'BAD_INPUT':
      return {
        tone: 'err',
        message: 'الرجاء إدخال جميع الحقول'
      };
    case 'EMPTY':
      return {
        tone: 'err',
        message: res.message
      };
    default:
      return {
        tone: 'err',
        message: 'تعذّر تسجيل الدخول، حاول مرة أخرى'
      };
  }
}

// ----- Forgot password modal -----
function ForgotPasswordModal({
  onClose
}) {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    // Foundation: log the request, instruct user to contact admin.
    if (window.DB && email.trim()) {
      window.DB.log('auth.password.reset.request', email.trim().toLowerCase());
    }
    setSent(true);
  };
  React.useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: "lg-modal",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-modal__sheet",
    onClick: e => e.stopPropagation(),
    dir: "rtl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-modal__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "help"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"), /*#__PURE__*/React.createElement("p", null, "\u0631\u0627\u0633\u0644 \u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645 \u0644\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")), /*#__PURE__*/React.createElement("button", {
    className: "lg-modal__close",
    onClick: onClose,
    "aria-label": "\u0625\u063A\u0644\u0627\u0642"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "close"))), !sent ? /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    className: "lg-form",
    style: {
      padding: '0 24px 24px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "lg-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__lbl"
  }, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0645\u0624\u0633\u0633\u064A \u0623\u0648 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"), /*#__PURE__*/React.createElement("span", {
    className: "lg-field__wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__ico"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "mail")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@rasafa.iq",
    autoFocus: true
  }))), /*#__PURE__*/React.createElement("p", {
    className: "lg-modal__note"
  }, "\u0633\u064A\u064F\u0633\u062C\u064E\u0651\u0644 \u0637\u0644\u0628\u0643 \u0641\u064A \u0633\u062C\u0644 \u0627\u0644\u062A\u062F\u0642\u064A\u0642. \u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0639\u064A\u064A\u0646 \u062E\u0644\u0627\u0644 \u0623\u0642\u0644 \u0645\u0646 24 \u0633\u0627\u0639\u0629."), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "lg-submit"
  }, /*#__PURE__*/React.createElement("span", null, "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "send"))) : /*#__PURE__*/React.createElement("div", {
    className: "lg-modal__done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "check_circle"), /*#__PURE__*/React.createElement("h4", null, "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643"), /*#__PURE__*/React.createElement("p", null, "\u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645 \u0642\u0631\u064A\u0628\u0627\u064B \u0644\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631."), /*#__PURE__*/React.createElement("button", {
    className: "lg-submit",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("span", null, "\u062D\u0633\u0646\u0627\u064B")))));
}

// =============================================================
// Force-change-password screen — shown after first login if
// mustChangePassword is set on the user.
// =============================================================
function ForceChangePassword({
  onDone
}) {
  const [current, setCurrent] = React.useState('');
  const [next, setNext] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState(null);
  const submit = async e => {
    e.preventDefault();
    setError(null);
    if (next !== confirm) {
      setError('كلمتا المرور غير متطابقتين');
      return;
    }
    setBusy(true);
    const res = await window.Auth.changePassword(current, next);
    setBusy(false);
    if (res.ok) {
      onDone && onDone();
      return;
    }
    setError(res.message || (res.code === 'BAD_CURRENT' ? 'كلمة المرور الحالية غير صحيحة' : 'تعذّر التغيير'));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "lg-shell",
    dir: "rtl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-bg__pool lg-bg__pool--a"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lg-bg__pool lg-bg__pool--b"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lg-bg__grid"
  })), /*#__PURE__*/React.createElement("div", {
    className: "lg-card"
  }, /*#__PURE__*/React.createElement("header", {
    className: "lg-card__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-card__mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "lg-card__brand-txt"
  }, /*#__PURE__*/React.createElement("strong", null, "\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"), /*#__PURE__*/React.createElement("small", null, "\u0645\u0637\u0644\u0648\u0628 \u0642\u0628\u0644 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629"))), /*#__PURE__*/React.createElement("div", {
    className: "lg-card__head"
  }, /*#__PURE__*/React.createElement("h1", null, "\u0623\u0646\u0634\u0626 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062C\u062F\u064A\u062F\u0629"), /*#__PURE__*/React.createElement("p", null, "\u0627\u062E\u062A\u0631 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0642\u0648\u064A\u0629 \u0644\u0627 \u062A\u064F\u0634\u0627\u0631\u0643\u0647\u0627 \u0645\u0639 \u0623\u062D\u062F")), /*#__PURE__*/React.createElement("form", {
    className: "lg-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("label", {
    className: "lg-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__lbl"
  }, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629"), /*#__PURE__*/React.createElement("span", {
    className: "lg-field__wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__ico"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock_open")), /*#__PURE__*/React.createElement("input", {
    type: show ? 'text' : 'password',
    value: current,
    onChange: e => setCurrent(e.target.value),
    autoFocus: true
  }))), /*#__PURE__*/React.createElement("label", {
    className: "lg-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__lbl"
  }, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629"), /*#__PURE__*/React.createElement("span", {
    className: "lg-field__wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__ico"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock")), /*#__PURE__*/React.createElement("input", {
    type: show ? 'text' : 'password',
    value: next,
    onChange: e => setNext(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lg-field__action",
    onClick: () => setShow(s => !s)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, show ? 'visibility_off' : 'visibility')))), /*#__PURE__*/React.createElement("label", {
    className: "lg-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__lbl"
  }, "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"), /*#__PURE__*/React.createElement("span", {
    className: "lg-field__wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-field__ico"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "check")), /*#__PURE__*/React.createElement("input", {
    type: show ? 'text' : 'password',
    value: confirm,
    onChange: e => setConfirm(e.target.value)
  }))), /*#__PURE__*/React.createElement(PasswordStrength, {
    password: next
  }), error && /*#__PURE__*/React.createElement("div", {
    className: "lg-alert lg-alert--err",
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "error"), /*#__PURE__*/React.createElement("span", null, error)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "lg-submit",
    disabled: busy
  }, busy ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lg-submit__spin"
  }), /*#__PURE__*/React.createElement("span", null, "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638\u2026")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\u062D\u0641\u0638 \u0648\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_back"))))));
}
function PasswordStrength({
  password
}) {
  const score = React.useMemo(() => {
    if (!password) return 0;
    let s = 0;
    if (password.length >= 8) s++;
    if (password.length >= 12) s++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) s++;
    if (/\d/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return Math.min(s, 4);
  }, [password]);
  if (!password) return null;
  const labels = ['ضعيفة جداً', 'ضعيفة', 'متوسطة', 'جيدة', 'قوية'];
  return /*#__PURE__*/React.createElement("div", {
    className: "lg-strength",
    "data-score": score
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-strength__bar"
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: i < score ? 'on' : ''
  }))), /*#__PURE__*/React.createElement("small", null, "\u0642\u0648\u0651\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631: ", /*#__PURE__*/React.createElement("b", null, labels[score])));
}
window.LoginPage = LoginPage;
window.ForceChangePassword = ForceChangePassword;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_micro.js
try { (() => {
// =============================================================
// MICRO-MOTION ENGINE — pointer-aware tilt + glare
// Sets --mx/--my (-1..1 from center) and --gx/--gy (% position)
// on hovered cards. Pure vanilla; respects reduced motion.
// =============================================================
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  var SEL = '.hub-pass__card, .hub-stack__card, .f-deck__panel';
  var current = null;
  function reset(el) {
    if (!el) return;
    el.classList.remove('is-tilting');
    el.style.setProperty('--mx', '0');
    el.style.setProperty('--my', '0');
  }
  document.addEventListener('pointermove', function (e) {
    var el = e.target && e.target.closest ? e.target.closest(SEL) : null;
    if (current && current !== el) reset(current);
    current = el;
    if (!el) return;
    var r = el.getBoundingClientRect();
    if (r.width < 10) return;
    var mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    var my = ((e.clientY - r.top) / r.height - 0.5) * 2;
    el.style.setProperty('--mx', mx.toFixed(3));
    el.style.setProperty('--my', my.toFixed(3));
    el.style.setProperty('--gx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
    el.style.setProperty('--gy', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    el.classList.add('is-tilting');
  }, {
    passive: true
  });
  document.addEventListener('pointerleave', function () {
    reset(current);
    current = null;
  });
  document.addEventListener('scroll', function () {
    reset(current);
    current = null;
  }, {
    passive: true,
    capture: true
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_micro.js", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_pdf_fill.js
try { (() => {
// =============================================================
// In-browser PDF fill + print  (zero server, zero install)
//
// Strategy:
//   1) Templates are pre-converted .docx → .pdf (one time, in repo).
//   2) At runtime:
//        a. pdf.js extracts every "{{key}}" placeholder along with
//           its (x, y, w, h, fontSize) on each page.
//        b. pdf-lib opens the same PDF, draws a white rectangle to
//           hide the placeholder, then writes the value on top.
//        c. The resulting filled PDF is returned as a Blob.
//   3) The caller embeds it in a hidden iframe and calls print().
//
// Arabic note: the embedded font (NotoNaskh) shapes RTL correctly.
// =============================================================

(function () {
  // ---- pdf.js worker setup ----
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'vendor/pdf.worker.min.js';
  }

  // ---- Arabic font (lazy, cached) -----------------------------
  let _fontBytesCache = null;
  async function loadArabicFont() {
    if (_fontBytesCache) return _fontBytesCache;
    // Try a small set of likely-present locations
    const candidates = ['fonts/NotoNaskhArabic-Regular.ttf', 'fonts/Amiri-Regular.ttf', 'fonts/Cairo-Regular.ttf', 'fonts/Tajawal-Regular.ttf'];
    for (const url of candidates) {
      try {
        const r = await fetch(url);
        if (!r.ok) continue;
        const buf = await r.arrayBuffer();
        _fontBytesCache = new Uint8Array(buf);
        return _fontBytesCache;
      } catch {}
    }
    throw new Error('لا يوجد خط عربي محلّي — ضع NotoNaskhArabic-Regular.ttf في مجلّد fonts/');
  }

  // ---- Extract every {{key}} position from a PDF --------------
  // Returns: { placeholders: [{page,key,x,y,w,h,fontSize}],
  //            stains:       [{page,x,y,w,h}]  (every run with { or }) }
  async function extractPlaceholders(pdfBytes) {
    const {
      pdfjsLib
    } = window;
    // pdf.js may take ownership of the buffer (transfer it); always clone.
    const copy = pdfBytes.slice ? pdfBytes.slice(0) : new Uint8Array(pdfBytes);
    const task = pdfjsLib.getDocument({
      data: copy,
      isEvalSupported: false
    });
    const pdf = await task.promise;
    const all = []; // { page, key, x, y, w, h, fontSize }
    const stains = []; // any text item containing { or } — wipe these

    // Pattern matches {{name}} potentially split across text runs
    const PLACE_RE = /\{\{\s*([a-zA-Z_][\w]*)\s*\}\}/g;
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const vp = page.getViewport({
        scale: 1
      });
      const tc = await page.getTextContent({
        disableNormalization: false
      });

      // Join all text items linearly so split placeholders are caught
      let joined = '';
      const map = []; // index → { item, offsetInItem }
      for (const it of tc.items) {
        if (!it.str) continue;
        // Mark any item containing braces as a "stain" — covers leftover
        // placeholder fragments that the regex pass might miss
        if (/[{}]/.test(it.str)) {
          const [a, b,,, ix, iy] = it.transform;
          const fs = Math.hypot(a, b) || it.height || 12;
          stains.push({
            page: i - 1,
            x: ix - 1,
            y: iy - 2,
            w: it.width + 4,
            h: fs * 1.25
          });
        }
        for (let c = 0; c < it.str.length; c++) {
          map.push({
            item: it,
            offset: c
          });
        }
        joined += it.str;
      }
      let m;
      PLACE_RE.lastIndex = 0;
      while ((m = PLACE_RE.exec(joined)) !== null) {
        const start = m.index;
        const end = start + m[0].length;
        const startEntry = map[start];
        const endEntry = map[end - 1];
        if (!startEntry || !endEntry) continue;

        // Collect every unique text run that contains part of the placeholder.
        const items = [];
        const seen = new Set();
        for (let k = start; k < end; k++) {
          const it = map[k].item;
          if (seen.has(it)) continue;
          seen.add(it);
          items.push(it);
        }
        const startItem = startEntry.item;
        const [a, b,,, sx, sy] = startItem.transform;
        const fontSize = Math.hypot(a, b) || startItem.height || 12;

        // Each individual run becomes a stain so the whole placeholder is wiped
        // regardless of how it's split. Compute bbox in parallel for value overlay.
        let minX = +Infinity,
          maxX = -Infinity;
        let minY = +Infinity,
          maxY = -Infinity;
        for (const it of items) {
          const [ia, ib,,, ix, iy] = it.transform;
          const ifs = Math.hypot(ia, ib) || it.height || fontSize;
          stains.push({
            page: i - 1,
            x: ix - 1,
            y: iy - 2,
            w: it.width + 4,
            h: ifs * 1.25
          });
          minX = Math.min(minX, ix);
          maxX = Math.max(maxX, ix + it.width);
          minY = Math.min(minY, iy);
          maxY = Math.max(maxY, iy + ifs);
        }
        all.push({
          page: i - 1,
          key: m[1],
          x: minX,
          y: sy,
          w: Math.max(maxX - minX, fontSize * 0.5 * m[0].length),
          h: Math.max(maxY - minY, fontSize * 1.2),
          fontSize
        });
      }
    }
    return {
      placeholders: all,
      stains
    };
  }

  // ---- Render a text string to a PNG via Canvas ----------------
  // We use Canvas (not pdf-lib's drawText) because the browser's
  // 2D context handles Arabic shaping + bidi natively — pdf-lib
  // doesn't. The result is a pixel-perfect image we can overlay.
  function renderTextToPng(text, opts) {
    const {
      fontSize = 12,
      fontFamily = '"Tajawal", "Noto Naskh Arabic", "Arial", sans-serif',
      color = '#000',
      paddingX = 2,
      paddingY = 2,
      dpr = 3 // 3× for crisp print
    } = opts || {};

    // First pass: measure
    const meas = document.createElement('canvas').getContext('2d');
    meas.font = `${fontSize}px ${fontFamily}`;
    meas.direction = 'rtl';
    const m = meas.measureText(text);
    const ascent = m.actualBoundingBoxAscent || fontSize * 0.85;
    const descent = m.actualBoundingBoxDescent || fontSize * 0.20;
    const w = Math.ceil(m.width) + paddingX * 2;
    const h = Math.ceil(ascent + descent) + paddingY * 2;

    // Second pass: render
    const cnv = document.createElement('canvas');
    cnv.width = w * dpr;
    cnv.height = h * dpr;
    const ctx = cnv.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.direction = 'rtl'; // browser shapes Arabic
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'right'; // RTL anchor at right edge
    ctx.fillText(text, w - paddingX, paddingY + ascent);
    return {
      dataUrl: cnv.toDataURL('image/png'),
      w,
      h
    };
  }
  function dataUrlToBytes(dataUrl) {
    const b64 = dataUrl.split(',')[1];
    const bin = atob(b64);
    const u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return u8;
  }

  // ---- Fill a template PDF with form values --------------------
  async function fillPdfTemplate(pdfBytes, values) {
    const PDFLib = window.PDFLib;
    if (!PDFLib) throw new Error('pdf-lib غير محمّل');
    const {
      placeholders,
      stains
    } = await extractPlaceholders(pdfBytes);
    const docBytes = pdfBytes.slice ? pdfBytes.slice(0) : new Uint8Array(pdfBytes);
    const pdfDoc = await PDFLib.PDFDocument.load(docBytes);
    const pages = pdfDoc.getPages();

    // 0) Wipe every text run that has braces — covers leftover placeholder fragments
    for (const s of stains) {
      const page = pages[s.page];
      if (!page) continue;
      page.drawRectangle({
        x: s.x,
        y: s.y,
        width: s.w,
        height: s.h,
        color: PDFLib.rgb(1, 1, 1)
      });
    }
    for (const ph of placeholders) {
      const page = pages[ph.page];
      if (!page) continue;
      const raw = values[ph.key];
      const text = (raw == null ? '' : String(raw)).trim();

      // 1) Cover the {{placeholder}} with white so it's hidden
      page.drawRectangle({
        x: ph.x - 1,
        y: ph.y - 2,
        width: ph.w + 4,
        height: ph.h + 2,
        color: PDFLib.rgb(1, 1, 1)
      });
      if (!text) continue;

      // 2) Render the value to a PNG via Canvas (handles Arabic
      //    shaping/bidi perfectly because the browser does it).
      const {
        dataUrl,
        w,
        h
      } = renderTextToPng(text, {
        fontSize: ph.fontSize,
        fontFamily: '"Tajawal", "Noto Naskh Arabic", "Arial", sans-serif'
      });
      const png = await pdfDoc.embedPng(dataUrlToBytes(dataUrl));

      // 3) Overlay it at the placeholder position.
      //    The text is RTL-anchored at the right edge of the field,
      //    so position the image so its right edge aligns with (x+w).
      const targetH = ph.fontSize * 1.05;
      const targetW = w * (targetH / h);
      page.drawImage(png, {
        x: ph.x + ph.w - targetW,
        y: ph.y - 1,
        width: targetW,
        height: targetH
      });
    }
    const out = await pdfDoc.save();
    return new Blob([out], {
      type: 'application/pdf'
    });
  }

  // ---- Public: load template + fill + return PDF Blob ---------
  async function buildFilledPdf(svc, formValues) {
    const url = `https://cdn.jsdelivr.net/gh/Xboxiq/tadfuq-khayr@main/forms_pdf/${svc.code}.pdf`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`قالب PDF غير موجود: ${svc.code}`);
    const bytes = new Uint8Array(await res.arrayBuffer());
    return await fillPdfTemplate(bytes, formValues);
  }

  // ---- Public: print a PDF Blob via a hidden iframe -----------
  function printPdfBlob(blob) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(blob);
      const old = document.getElementById('tq-pdf-print-frame');
      if (old) old.remove();
      const frame = document.createElement('iframe');
      frame.id = 'tq-pdf-print-frame';
      frame.src = url;
      frame.style.cssText = 'position:fixed;right:-10000px;top:-10000px;width:900px;height:1200px;border:0;visibility:hidden;';
      document.body.appendChild(frame);
      const cleanup = () => {
        setTimeout(() => {
          try {
            frame.remove();
          } catch {}
          URL.revokeObjectURL(url);
        }, 2000);
      };
      let printed = false;
      const doPrint = () => {
        if (printed) return;
        printed = true;
        setTimeout(() => {
          try {
            frame.contentWindow.focus();
            frame.contentWindow.print();
            try {
              frame.contentWindow.addEventListener('afterprint', cleanup);
            } catch {}
            setTimeout(cleanup, 90000);
            resolve();
          } catch (e) {
            cleanup();
            reject(e);
          }
        }, 350);
      };
      frame.addEventListener('load', doPrint);
      setTimeout(doPrint, 2500);
    });
  }
  window.TadfuqPdfFill = {
    buildFilledPdf,
    printPdfBlob,
    extractPlaceholders
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_pdf_fill.js", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_primitives.jsx
try { (() => {
// =============================================================
// FINAL — shared UI primitives (faithful to the --f-* system)
// Provides components the production app defines elsewhere:
//   • ErrorBoundary   — stops one bad component white-screening the app
//   • ToastProvider   — real toast feedback (success/error/warn/info)
//   • useToast        — push toasts from any screen
//   • ConfirmDialog   — accessible confirm modal (focus-trap, Esc)
//   • ValidationSummary — lists form errors, jumps to the field
// All RTL-first, token-driven, reduced-motion aware.
// =============================================================
(function () {
  const {
    useState,
    useEffect,
    useRef,
    useCallback
  } = React;

  /* ---------------- ErrorBoundary ---------------- */
  class ErrorBoundary extends React.Component {
    constructor(p) {
      super(p);
      this.state = {
        err: null
      };
    }
    static getDerivedStateFromError(err) {
      return {
        err
      };
    }
    componentDidCatch(err, info) {
      console.error('[caught by ErrorBoundary]', err, info);
    }
    render() {
      if (!this.state.err) return this.props.children;
      return React.createElement('div', {
        className: 'f-errboundary',
        role: 'alert',
        dir: 'rtl'
      }, React.createElement('div', {
        className: 'f-errboundary__card'
      }, React.createElement('span', {
        className: 'f-errboundary__ico material-symbols-outlined'
      }, 'error'), React.createElement('h2', null, 'حدث خطأ غير متوقع'), React.createElement('p', null, 'تعذّر عرض هذا القسم. تم حفظ بياناتك المدخلة تلقائياً ويمكنك المتابعة.'), React.createElement('pre', {
        className: 'f-errboundary__detail'
      }, String(this.state.err && this.state.err.message || this.state.err)), React.createElement('div', {
        className: 'f-errboundary__actions'
      }, React.createElement('button', {
        className: 'f-btn f-btn--primary',
        onClick: () => this.setState({
          err: null
        })
      }, React.createElement('span', {
        className: 'material-symbols-outlined'
      }, 'refresh'), ' إعادة المحاولة'), React.createElement('button', {
        className: 'f-btn',
        onClick: () => location.reload()
      }, 'تحديث الصفحة'))));
    }
  }

  /* ---------------- Toasts ---------------- */
  const ToastCtx = React.createContext({
    push: () => {}
  });
  const ICONS = {
    success: 'check_circle',
    error: 'error',
    warn: 'warning',
    info: 'info'
  };
  function ToastProvider({
    children
  }) {
    const [toasts, setToasts] = useState([]);
    const remove = useCallback(id => setToasts(ts => ts.filter(t => t.id !== id)), []);
    const push = useCallback(t => {
      const id = Math.random().toString(36).slice(2);
      const toast = {
        id,
        kind: t.kind || 'info',
        title: t.title || '',
        body: t.body || '',
        action: t.action || null
      };
      setToasts(ts => [...ts, toast]);
      const ttl = t.kind === 'error' ? 7000 : 4500;
      setTimeout(() => remove(id), ttl);
      return id;
    }, [remove]);
    return React.createElement(ToastCtx.Provider, {
      value: {
        push
      }
    }, children, React.createElement('div', {
      className: 'f-toasts',
      role: 'region',
      'aria-live': 'polite',
      'aria-label': 'تنبيهات'
    }, toasts.map(t => React.createElement('div', {
      key: t.id,
      className: `f-toast f-toast--${t.kind}`,
      role: t.kind === 'error' ? 'alert' : 'status'
    }, React.createElement('span', {
      className: 'f-toast__ico material-symbols-outlined'
    }, ICONS[t.kind] || 'info'), React.createElement('div', {
      className: 'f-toast__main'
    }, t.title && React.createElement('div', {
      className: 'f-toast__title'
    }, t.title), t.body && React.createElement('div', {
      className: 'f-toast__body'
    }, t.body), t.action && React.createElement('button', {
      className: 'f-toast__action',
      onClick: () => {
        t.action.onClick && t.action.onClick();
        remove(t.id);
      }
    }, t.action.label)), React.createElement('button', {
      className: 'f-toast__close',
      'aria-label': 'إغلاق',
      onClick: () => remove(t.id)
    }, React.createElement('span', {
      className: 'material-symbols-outlined'
    }, 'close'))))));
  }
  const useToast = () => React.useContext(ToastCtx);

  /* ---------------- ConfirmDialog ---------------- */
  function ConfirmDialog({
    open,
    danger,
    icon,
    title,
    description,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel
  }) {
    const cardRef = useRef(null);
    const prevFocus = useRef(null);
    useEffect(() => {
      if (!open) return;
      prevFocus.current = document.activeElement;
      const card = cardRef.current;
      const focusables = card ? card.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])') : [];
      focusables[focusables.length - 1] && focusables[focusables.length - 1].focus(); // default to safe (cancel)
      const onKey = e => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onCancel && onCancel();
        }
        if (e.key === 'Tab' && focusables.length) {
          const first = focusables[0],
            last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener('keydown', onKey);
      return () => {
        document.removeEventListener('keydown', onKey);
        prevFocus.current && prevFocus.current.focus && prevFocus.current.focus();
      };
    }, [open, onCancel]);
    if (!open) return null;
    return React.createElement('div', {
      className: 'f-confirm',
      dir: 'rtl',
      onMouseDown: e => {
        if (e.target === e.currentTarget) onCancel && onCancel();
      }
    }, React.createElement('div', {
      className: `f-confirm__card ${danger ? 'is-danger' : ''}`,
      ref: cardRef,
      role: 'alertdialog',
      'aria-modal': 'true',
      'aria-labelledby': 'f-confirm-t',
      'aria-describedby': 'f-confirm-d'
    }, React.createElement('span', {
      className: 'f-confirm__ico material-symbols-outlined'
    }, icon || (danger ? 'warning' : 'help')), React.createElement('h3', {
      id: 'f-confirm-t',
      className: 'f-confirm__title'
    }, title), description && React.createElement('p', {
      id: 'f-confirm-d',
      className: 'f-confirm__desc'
    }, description), React.createElement('div', {
      className: 'f-confirm__actions'
    }, React.createElement('button', {
      className: `f-btn ${danger ? 'f-btn--danger' : 'f-btn--primary'}`,
      onClick: onConfirm
    }, confirmLabel || 'تأكيد'), React.createElement('button', {
      className: 'f-btn',
      onClick: onCancel
    }, cancelLabel || 'إلغاء'))));
  }

  /* ---------------- ValidationSummary ---------------- */
  function ValidationSummary({
    errors
  }) {
    const keys = Object.keys(errors || {});
    if (!keys.length) return null;
    const jump = k => {
      const el = document.querySelector(`[data-fk="${k}"]`);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        const inp = el.querySelector('input,select,textarea');
        inp && inp.focus();
      }
    };
    return React.createElement('div', {
      className: 'f-valsum',
      role: 'alert',
      dir: 'rtl'
    }, React.createElement('div', {
      className: 'f-valsum__head'
    }, React.createElement('span', {
      className: 'material-symbols-outlined'
    }, 'error'), `${keys.length} حقل بحاجة إلى مراجعة قبل الإرسال`), React.createElement('ul', {
      className: 'f-valsum__list'
    }, keys.map(k => React.createElement('li', {
      key: k
    }, React.createElement('button', {
      type: 'button',
      onClick: () => jump(k)
    }, React.createElement('span', {
      className: 'material-symbols-outlined'
    }, 'arrow_back'), errors[k])))));
  }
  Object.assign(window, {
    ErrorBoundary,
    ToastProvider,
    useToast,
    ConfirmDialog,
    ValidationSummary,
    FieldError
  });

  /* ---------------- Validation helpers ---------------- */
  // Each validator returns '' when valid, or an Arabic error message.
  const Validate = {
    required: v => v == null || String(v).trim() === '' ? 'هذا الحقل مطلوب' : '',
    phoneIQ: v => {
      if (!v) return '';
      const digits = String(v).replace(/[\s-]/g, '');
      return /^(?:07\d{9}|\+9647\d{9})$/.test(digits) ? '' : 'رقم هاتف عراقي غير صحيح (مثال: 07XXXXXXXXX)';
    },
    digits: v => {
      if (v == null || v === '') return '';
      return /^\d+$/.test(String(v).trim()) ? '' : 'يُسمح بالأرقام فقط';
    },
    minLen: n => v => v && String(v).trim().length < n ? `يجب ألا يقل عن ${n} أحرف` : ''
  };

  // Run a rules map { fieldKey: [validatorFn, ...] } against form values.
  // Returns { fieldKey: firstErrorMessage } for every failing field.
  function validateForm(form, rules) {
    const errs = {};
    Object.keys(rules || {}).forEach(k => {
      const fns = rules[k] || [];
      for (const fn of fns) {
        const msg = fn(form ? form[k] : undefined);
        if (msg) {
          errs[k] = msg;
          break;
        }
      }
    });
    return errs;
  }
  Object.assign(window, {
    Validate,
    validateForm
  });

  /* ---------------- FieldError ---------------- */
  function FieldError({
    msg,
    id
  }) {
    if (!msg) return null;
    return React.createElement('span', {
      className: 'ff-err',
      role: 'alert',
      id
    }, React.createElement('span', {
      className: 'material-symbols-outlined'
    }, 'error'), msg);
  }

  /* ---------------- EmptyState ---------------- */
  // Standard "nothing here" block: icon + title + line + optional action.
  // Use for filtered lists that return zero, or not-yet-populated views.
  function EmptyState({
    icon,
    title,
    body,
    actionLabel,
    onAction,
    compact
  }) {
    return React.createElement('div', {
      className: `f-empty ${compact ? 'is-compact' : ''}`,
      role: 'status'
    }, React.createElement('span', {
      className: 'f-empty__ico material-symbols-outlined'
    }, icon || 'inbox'), title && React.createElement('div', {
      className: 'f-empty__title'
    }, title), body && React.createElement('p', {
      className: 'f-empty__body'
    }, body), actionLabel && React.createElement('button', {
      className: 'f-btn f-btn--sm',
      onClick: onAction
    }, actionLabel));
  }
  Object.assign(window, {
    FieldError,
    EmptyState
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_print.jsx
try { (() => {
// =============================================================
// FINAL — Word-only flow (simple)
//   * Preview: docx-preview renders the filled .docx inline
//   * Download: same filled .docx
//   * Print: window.print() on the preview
// =============================================================

// Renders the official form two ways:
//   • HTML paper (schema-driven, window.OriginalPaper) — ALWAYS works, the
//     reliable preview + the source for window.print().
//   • docx-preview (filled .docx) — a progressive ENHANCEMENT: if the Word
//     template can be fetched & filled, it replaces the HTML paper for
//     pixel-exact fidelity. If it can't (offline, template unavailable),
//     we silently keep the HTML paper instead of showing an error.
function OfficialPaper({
  svc,
  schema,
  form,
  attachments
}) {
  const docxRef = React.useRef(null);
  // 'html'  → showing the schema HTML paper (default, reliable)
  // 'docx'  → the filled .docx rendered successfully (enhanced)
  const [mode, setMode] = React.useState('html');
  const toast = window.useToast && window.useToast();
  const formKey = React.useMemo(() => JSON.stringify(form), [form]);

  // Try to enhance with the real .docx; never surface an error if it fails.
  React.useEffect(() => {
    if (!docxRef.current || !window.renderFilledDocx) return;
    let cancelled = false;
    setMode('html');
    const t = setTimeout(() => {
      if (cancelled) return;
      window.renderFilledDocx(svc, form, docxRef.current).then(() => {
        if (!cancelled) setMode('docx');
      }).catch(() => {
        if (!cancelled) setMode('html'); /* keep HTML paper */
      });
    }, 200);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [svc.code, formKey]);
  const onPrint = () => {
    // Print whichever preview is showing — print CSS isolates .of-docx-host.
    window.print();
  };
  const onDownloadWord = async () => {
    if (!window.downloadFilledDocx) {
      toast && toast.push({
        kind: 'warn',
        title: 'تنزيل Word غير متاح',
        body: 'استخدم «طباعة» ثم احفظ كـ PDF من نافذة المتصفّح.'
      });
      return;
    }
    try {
      await window.downloadFilledDocx(svc, form);
      toast && toast.push({
        kind: 'success',
        title: 'تم تنزيل ملف Word'
      });
    } catch (e) {
      // Graceful, honest fallback — the print-to-PDF path always works.
      toast && toast.push({
        kind: 'warn',
        title: 'تنزيل Word غير متاح حالياً',
        body: 'قالب Word غير متوفر في وضع العرض — استخدم «طباعة» ثم «حفظ كـ PDF».'
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "of-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "of-toolbar no-print"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary f-btn--lg",
    onClick: onPrint
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "print"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "\u0637\u0628\u0627\u0639\u0629"), /*#__PURE__*/React.createElement("small", null, "\u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u0631\u0633\u0645\u064A \u2014 \u0623\u0648 \u062D\u0641\u0638 \u0643\u0640 PDF"))), /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--lg",
    onClick: onDownloadWord
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "description"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "\u062A\u0646\u0632\u064A\u0644 \u0645\u0644\u0641 Word"), /*#__PURE__*/React.createElement("small", null, "\u0644\u0644\u0623\u0631\u0634\u0641\u0629 \u0623\u0648 \u0627\u0644\u062A\u0639\u062F\u064A\u0644"))), mode === 'docx' && /*#__PURE__*/React.createElement("span", {
    className: "of-fidelity",
    title: "\u0645\u0639\u0631\u0648\u0636 \u0645\u0646 \u0642\u0627\u0644\u0628 Word \u0627\u0644\u0631\u0633\u0645\u064A"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "verified"
  }), " \u0646\u0633\u062E\u0629 Word \u0627\u0644\u0631\u0633\u0645\u064A\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "of-docx-shell",
    id: "of-print-root"
  }, /*#__PURE__*/React.createElement("div", {
    ref: docxRef,
    className: "of-docx-host",
    style: {
      display: mode === 'docx' ? 'flex' : 'none'
    }
  }), mode !== 'docx' && /*#__PURE__*/React.createElement("div", {
    className: "of-docx-host"
  }, /*#__PURE__*/React.createElement(window.OriginalPaper, {
    svc: svc,
    schema: schema,
    form: form
  }))));
}
window.OfficialPaper = OfficialPaper;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_print.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_services.jsx
try { (() => {
// =============================================================
// FINAL — Services Hub (Service Wallet) + Service Detail
// =============================================================

// advisory meta — type → icon / color / label
const ADV_META = {
  danger: {
    i: 'emergency_home',
    c: 'var(--f-err)',
    l: 'تنبيه خطر'
  },
  review: {
    i: 'gavel',
    c: 'var(--f-cs)',
    l: 'مراجعة رسمية'
  },
  scale: {
    i: 'move_up',
    c: 'var(--f-cb)',
    l: 'قابل للتوسع'
  },
  tip: {
    i: 'lightbulb',
    c: 'var(--f-ct)',
    l: 'نصيحة ميدانية'
  },
  faq: {
    i: 'contact_support',
    c: 'var(--f-ca)',
    l: 'سؤال متكرر'
  }
};
function AdvisoryDock({
  svc,
  flush
}) {
  if (!svc) return null;
  const items = window.getAdvisories(svc.code);
  if (!items.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: `adv-dock ${flush ? 'fd-adv' : ''}`,
    key: svc.code
  }, /*#__PURE__*/React.createElement("div", {
    className: "adv-dock__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "adv-dock__label"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield_person"
  }), " \u0625\u0631\u0634\u0627\u062F\u0627\u062A \u0648\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0631\u0633\u0645\u064A\u0629"), /*#__PURE__*/React.createElement("span", {
    className: "adv-dock__code"
  }, svc.code)), /*#__PURE__*/React.createElement("div", {
    className: "adv-rows"
  }, items.map((it, i) => {
    const m = ADV_META[it.t] || ADV_META.tip;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "adv-row",
      style: {
        '--a-c': m.c,
        '--i': i
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "adv-row__ico"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.i
    })), /*#__PURE__*/React.createElement("span", {
      className: "adv-row__main"
    }, /*#__PURE__*/React.createElement("span", {
      className: "adv-row__tag"
    }, m.l), /*#__PURE__*/React.createElement("span", {
      className: "adv-row__tx"
    }, it.x)));
  })));
}

// 3D coverflow scroller — sets --d / --ad per pass from scroll position
function PassFlow({
  list,
  nav
}) {
  const ref = useRef(null);
  const [focus, setFocus] = useState(0);
  const update = () => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    let best = 0,
      bestD = 1e9;
    el.querySelectorAll('.hub-pass').forEach((c, i) => {
      const cr = c.getBoundingClientRect();
      let d = (cr.left + cr.width / 2 - cx) / (r.width * 0.55);
      d = Math.max(-1, Math.min(1, d));
      c.style.setProperty('--d', d.toFixed(3));
      c.style.setProperty('--ad', Math.abs(d).toFixed(3));
      c.style.zIndex = String(100 - Math.round(Math.abs(d) * 50));
      if (Math.abs(d) < bestD) {
        bestD = Math.abs(d);
        best = i;
      }
    });
    setFocus(best);
  };
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    el.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    update();
    const t = setTimeout(update, 120);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [list]);
  const goTo = i => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelectorAll('.hub-pass')[i];
    if (!card) return;
    const r = el.getBoundingClientRect();
    const cr = card.getBoundingClientRect();
    el.scrollBy({
      left: cr.left + cr.width / 2 - (r.left + r.width / 2),
      behavior: 'smooth'
    });
  };

  // keyboard arrows
  useEffect(() => {
    const onKey = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(Math.min(focus + 1, list.length - 1));
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(Math.max(focus - 1, 0));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [focus, list.length]);
  if (list.length === 0) return /*#__PURE__*/React.createElement("div", {
    className: "hub-empty"
  }, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u062F\u0645\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629 \u2014 \u062C\u0631\u0651\u0628 \u0643\u0644\u0645\u0629 \u0623\u062E\u0631\u0649.");
  const focusSvc = list[focus];
  const scrubC = focusSvc ? DEPT_COLORS[focusSvc.section] : 'var(--f-navy)';
  return /*#__PURE__*/React.createElement("div", {
    className: "hub-flow-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-flow",
    ref: ref,
    dir: "rtl"
  }, list.map((svc, i) => /*#__PURE__*/React.createElement("div", {
    key: svc.code,
    className: `hub-pass ${i === focus ? 'is-focus' : ''}`,
    style: {
      '--p-c': DEPT_COLORS[svc.section]
    },
    onClick: () => {
      if (i !== focus) goTo(i);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-pass__card"
  }, svc.urgent && /*#__PURE__*/React.createElement("span", {
    className: "hub-pass__urgent"
  }, "\u0637\u0627\u0631\u0626"), /*#__PURE__*/React.createElement("div", {
    className: "hub-pass__band"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-pass__dept"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: window.SECTION_MAP[svc.section].icon
  }), window.SECTION_MAP[svc.section].name), /*#__PURE__*/React.createElement("span", {
    className: "hub-pass__code"
  }, svc.code)), /*#__PURE__*/React.createElement("div", {
    className: "hub-pass__body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(window.StickerIco, {
    kind: svc.section,
    size: 48,
    className: "hub-pass__stk"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "hub-pass__name"
  }, svc.name)), /*#__PURE__*/React.createElement("div", {
    className: "hub-pass__perf"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hub-pass__specs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-pass__spec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-pass__spec-l"
  }, "\u0627\u0644\u0623\u062C\u0648\u0631"), /*#__PURE__*/React.createElement("span", {
    className: "hub-pass__spec-v"
  }, svc.fixedPrice ? fmtIQD(svc.fixedPrice) : svc.priceNote || 'بدون أجور')), /*#__PURE__*/React.createElement("span", {
    className: "hub-pass__spec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-pass__spec-l"
  }, "\u0627\u0644\u0625\u0646\u062C\u0627\u0632"), /*#__PURE__*/React.createElement("span", {
    className: "hub-pass__spec-v"
  }, svc.sla, " \u0623\u064A\u0627\u0645 \u0639\u0645\u0644")))), /*#__PURE__*/React.createElement("div", {
    className: "hub-pass__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "hub-pass__go",
    onClick: e => {
      e.stopPropagation();
      nav('form', {
        code: svc.code
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit_document"
  }), " \u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0639\u0628\u0626\u0629"), /*#__PURE__*/React.createElement("button", {
    className: "hub-pass__alt",
    onClick: e => {
      e.stopPropagation();
      nav('detail', {
        code: svc.code
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  }), " \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644")))))), /*#__PURE__*/React.createElement("div", {
    className: "hub-scrub",
    style: {
      '--scrub-c': scrubC
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hub-scrub__arrow",
    onClick: () => goTo(Math.max(focus - 1, 0)),
    "aria-label": "\u0627\u0644\u0633\u0627\u0628\u0642"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hub-scrub__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-scrub__fill",
    style: {
      width: `${(focus + 1) / list.length * 100}%`
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "hub-scrub__arrow",
    onClick: () => goTo(Math.min(focus + 1, list.length - 1)),
    "aria-label": "\u0627\u0644\u062A\u0627\u0644\u064A"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left"
  })), /*#__PURE__*/React.createElement("span", {
    className: "hub-scrub__count"
  }, focus + 1, " / ", list.length)), /*#__PURE__*/React.createElement(AdvisoryDock, {
    svc: focusSvc
  }));
}
function ServicesPage({
  nav,
  section
}) {
  const [sec, setSec] = useState(section || 'all');
  const [q, setQ] = useState('');
  const [mode, setMode] = useState(() => localStorage.getItem('tq-hub-mode') || 'wallet');
  useEffect(() => {
    if (section) setSec(section);
  }, [section]);
  useEffect(() => {
    localStorage.setItem('tq-hub-mode', mode);
  }, [mode]);
  const list = useMemo(() => {
    return window.SERVICES.filter(s => {
      if (sec !== 'all' && s.section !== sec) return false;
      const t = q.trim();
      if (t && !s.name.includes(t) && !s.code.toLowerCase().includes(t.toLowerCase())) return false;
      return true;
    });
  }, [sec, q]);
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-enter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fp-back",
    onClick: () => nav('overview')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward"
  }), " \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"), /*#__PURE__*/React.createElement("div", {
    className: "f-h2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-h2__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "f-h2__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-h2__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wallet"
  })), "\u0645\u062D\u0641\u0638\u0629 \u0627\u0644\u062E\u062F\u0645\u0627\u062A"), /*#__PURE__*/React.createElement("span", {
    className: "f-h2__sub"
  }, window.SERVICES.length, " \u062E\u062F\u0645\u0629 \u2014 \u0627\u062E\u062A\u0631 \u0631\u0632\u0645\u0629 \u0642\u0633\u0645 \u062B\u0645 \u0642\u0644\u0651\u0628 \u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "fs-pill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0631\u0642\u0645\u2026"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-pill__count"
  }, list.length)), /*#__PURE__*/React.createElement("div", {
    className: "hub-mode",
    role: "tablist",
    "aria-label": "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0639\u0631\u0636"
  }, /*#__PURE__*/React.createElement("button", {
    className: `hub-mode__btn ${mode === 'wallet' ? 'is-on' : ''}`,
    onClick: () => setMode('wallet'),
    title: "\u0639\u0631\u0636 \u0627\u0644\u0645\u062D\u0641\u0638\u0629"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "style"
  })), /*#__PURE__*/React.createElement("button", {
    className: `hub-mode__btn ${mode === 'grid' ? 'is-on' : ''}`,
    onClick: () => setMode('grid'),
    title: "\u0639\u0631\u0636 \u0627\u0644\u0634\u0628\u0643\u0629"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "grid_view"
  })), /*#__PURE__*/React.createElement("button", {
    className: `hub-mode__btn ${mode === 'liquid' ? 'is-on' : ''}`,
    "data-mode": "liquid",
    onClick: () => setMode('liquid'),
    title: "\u062A\u062F\u0641\u0651\u0642 \u0633\u0627\u0626\u0644"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "water_drop"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "hub-stacks"
  }, /*#__PURE__*/React.createElement("button", {
    className: `hub-stack ${sec === 'all' ? 'is-on' : ''}`,
    style: {
      '--hs-c': 'var(--f-navy)'
    },
    onClick: () => setSec('all')
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-stack__card"
  }, /*#__PURE__*/React.createElement(window.StickerIco, {
    kind: "all",
    size: 34,
    className: "hub-stack__stk",
    tilt: -8
  }), /*#__PURE__*/React.createElement("span", {
    className: "hub-stack__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-stack__n"
  }, window.SERVICES.length)), /*#__PURE__*/React.createElement("span", {
    className: "hub-stack__name"
  }, "\u0643\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A"))), window.SECTIONS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.code,
    className: `hub-stack ${sec === s.code ? 'is-on' : ''}`,
    style: {
      '--hs-c': DEPT_COLORS[s.code]
    },
    onClick: () => setSec(s.code)
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-stack__card"
  }, /*#__PURE__*/React.createElement(window.StickerIco, {
    kind: s.code,
    size: 34,
    className: "hub-stack__stk",
    tilt: s.code === 'CT' ? 7 : -8
  }), /*#__PURE__*/React.createElement("span", {
    className: "hub-stack__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-stack__n"
  }, window.SERVICES.filter(x => x.section === s.code).length)), /*#__PURE__*/React.createElement("span", {
    className: "hub-stack__name"
  }, s.name))))), mode === 'wallet' ? /*#__PURE__*/React.createElement(PassFlow, {
    list: list,
    nav: nav,
    key: sec + '|' + q
  }) : /*#__PURE__*/React.createElement("div", {
    className: `fs-grid ${mode === 'liquid' ? 'is-liquid' : ''}`,
    key: sec + '|' + q
  }, list.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "fs-empty"
  }, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u062F\u0645\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629 \u2014 \u062C\u0631\u0651\u0628 \u0643\u0644\u0645\u0629 \u0623\u062E\u0631\u0649."), list.map((svc, i) => /*#__PURE__*/React.createElement("button", {
    key: svc.code,
    className: "fs-card",
    "data-code": svc.code,
    style: {
      '--c-c': DEPT_COLORS[svc.section],
      '--stagger': `${Math.min(i, 12) * 40}ms`
    },
    onClick: () => nav('detail', {
      code: svc.code
    })
  }, svc.urgent && /*#__PURE__*/React.createElement("span", {
    className: "fs-card__urgent"
  }, "\u0637\u0627\u0631\u0626"), /*#__PURE__*/React.createElement("div", {
    className: "fs-card__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-card__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: svc.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "fs-card__code"
  }, svc.code)), /*#__PURE__*/React.createElement("h3", {
    className: "fs-card__name"
  }, svc.name), /*#__PURE__*/React.createElement("div", {
    className: "fs-card__foot"
  }, /*#__PURE__*/React.createElement("span", null, "SLA ", svc.sla, "\u064A"), /*#__PURE__*/React.createElement("span", {
    className: "fs-card__fee"
  }, svc.fixedPrice ? fmtIQD(svc.fixedPrice) : svc.priceNote || 'بدون أجور'), /*#__PURE__*/React.createElement("span", {
    className: "fs-card__go"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back"
  })))))));
}

// =============================================================
// SERVICE DETAIL
// =============================================================
const FD_STEPS = [{
  ico: 'inbox',
  t: 'استلام الطلب',
  s: 'فوري'
}, {
  ico: 'travel_explore',
  t: 'الكشف الميداني',
  s: '١-٢ يوم'
}, {
  ico: 'analytics',
  t: 'الدراسة',
  s: '١-٣ أيام'
}, {
  ico: 'payments',
  t: 'الدفع',
  s: 'الصندوق'
}, {
  ico: 'construction',
  t: 'التنفيذ',
  s: 'فريق الميدان'
}, {
  ico: 'verified',
  t: 'الإغلاق',
  s: 'إشعار المشترك'
}];
const FD_DOCS = {
  default: [{
    n: 'نسخة من هوية الأحوال المدنية / البطاقة الموحدة'
  }, {
    n: 'نسخة من بطاقة السكن'
  }, {
    n: 'طلب خطي موقّع من المشترك'
  }],
  CS0001: [{
    n: 'نسخة من هوية الأحوال المدنية'
  }, {
    n: 'نسخة من بطاقة السكن'
  }, {
    n: 'كتاب تأييد سكن مصدق'
  }, {
    n: 'صورة موثقة للقسام الشرعي',
    opt: 'عند اللزوم'
  }, {
    n: 'كتاب ضريبة العقار'
  }, {
    n: 'إجازة البناء مصدقة',
    opt: 'بدل ضريبة العقار'
  }, {
    n: 'سند قيد التسجيل للعقار (الطابو)'
  }, {
    n: 'صورة من قائمة حساب المجاور'
  }, {
    n: 'كتاب التنمية الصناعية',
    opt: 'صناعي'
  }, {
    n: 'كتاب المضخة الزراعية',
    opt: 'زراعي'
  }, {
    n: 'كتاب من الدائرة',
    opt: 'حكومي'
  }, {
    n: 'إجازة الاستثمار',
    opt: 'استثماري'
  }]
};
function ServiceDetailPage({
  nav,
  code
}) {
  const svc = window.SERVICE_MAP[code] || window.SERVICES[0];
  const sec = window.SECTION_MAP[svc.section];
  const docs = FD_DOCS[svc.code] || FD_DOCS.default;
  const insp = window.PRICING.inspection.items;
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-enter",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "fp-back",
    onClick: () => nav('services', {
      section: svc.section
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward"
  }), " \u062F\u0644\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A"), /*#__PURE__*/React.createElement("div", {
    className: "fd-hero",
    style: {
      '--d-c': DEPT_COLORS[svc.section]
    }
  }, /*#__PURE__*/React.createElement(window.StickerIco, {
    kind: svc.section,
    size: 66,
    className: "fd-hero__stk",
    tilt: -6
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fd-hero__chips"
  }, /*#__PURE__*/React.createElement("span", {
    className: "f-deck__code",
    style: {
      '--d-c': DEPT_COLORS[svc.section]
    }
  }, svc.code), /*#__PURE__*/React.createElement("span", {
    className: "f-deck__chip"
  }, sec.name), svc.urgent && /*#__PURE__*/React.createElement("span", {
    className: "fs-card__urgent",
    style: {
      position: 'static'
    }
  }, "\u0637\u0627\u0631\u0626")), /*#__PURE__*/React.createElement("h1", {
    className: "fd-hero__name"
  }, svc.name), /*#__PURE__*/React.createElement("div", {
    className: "fd-hero__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "schedule",
    size: 16
  }), " \u0645\u062F\u0629 \u0627\u0644\u0625\u0646\u062C\u0627\u0632 \u0627\u0644\u0645\u0639\u062A\u0627\u062F\u0629 ", svc.sla, " \u0623\u064A\u0627\u0645 \u0639\u0645\u0644"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "local_fire_department",
    size: 16
  }), " \u0646\u0633\u0628\u0629 \u0627\u0644\u0637\u0644\u0628 ", svc.popularity, "\u066A"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "payments",
    size: 16
  }), " ", svc.fixedPrice ? fmtIQD(svc.fixedPrice) : svc.priceNote || 'بدون أجور ثابتة'))), /*#__PURE__*/React.createElement("div", {
    className: "fd-hero__side"
  }, /*#__PURE__*/React.createElement("button", {
    className: "f-btn f-btn--primary f-btn--lg",
    onClick: () => nav('form', {
      code: svc.code
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit_document"
  }), " \u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0639\u0628\u0626\u0629"), /*#__PURE__*/React.createElement("button", {
    className: "f-btn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu_book"
  }), " \u062F\u0644\u064A\u0644 \u0627\u0644\u0625\u062C\u0631\u0627\u0621"))), /*#__PURE__*/React.createElement(AdvisoryDock, {
    svc: svc,
    flush: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "route"
  }), " \u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u0627\u0644\u0645\u0631\u0627\u062D\u0644 \u0627\u0644\u0642\u064A\u0627\u0633\u064A\u0629 \u0645\u0646 \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645 \u062D\u062A\u0649 \u0627\u0644\u0625\u063A\u0644\u0627\u0642"))), /*#__PURE__*/React.createElement("div", {
    className: "fd-steps"
  }, FD_STEPS.map((st, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "fd-step",
    style: {
      '--i': i
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fd-step__dot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: st.ico
  })), /*#__PURE__*/React.createElement("span", {
    className: "fd-step__t"
  }, st.t), /*#__PURE__*/React.createElement("span", {
    className: "fd-step__s"
  }, st.s))))), /*#__PURE__*/React.createElement("div", {
    className: "fd-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder_open"
  }), " \u0627\u0644\u0645\u0633\u062A\u0645\u0633\u0643\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u062D\u0633\u0628 \u0646\u0645\u0648\u0630\u062C ", svc.code, " \u0627\u0644\u0631\u0633\u0645\u064A"))), /*#__PURE__*/React.createElement("div", {
    className: "fd-docs"
  }, docs.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "fd-doc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fd-doc__n"
  }, i + 1), d.n, d.opt && /*#__PURE__*/React.createElement("span", {
    className: "fd-doc__opt"
  }, d.opt))))), /*#__PURE__*/React.createElement("div", {
    className: "f-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "f-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "f-card__title"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "request_quote"
  }), " \u0623\u062C\u0648\u0631 \u0627\u0644\u0643\u0634\u0641 \u062D\u0633\u0628 \u0627\u0644\u0635\u0646\u0641"), /*#__PURE__*/React.createElement("p", {
    className: "f-card__sub"
  }, "\u0644\u0627\u0626\u062D\u0629 \u0662\u0660\u0662\u0666 \u0627\u0644\u0631\u0633\u0645\u064A\u0629"))), /*#__PURE__*/React.createElement("div", {
    className: "fd-fees"
  }, insp.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.key,
    className: "fd-fee"
  }, /*#__PURE__*/React.createElement("span", null, it.name), /*#__PURE__*/React.createElement("span", {
    className: "fd-fee__amount"
  }, fmtIQD(it.amount))))), /*#__PURE__*/React.createElement("div", {
    className: "f-card__foot"
  }, /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0641\u064A \u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u0623\u062C\u0648\u0631"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      nav('pricing');
    }
  }, "\u062C\u062F\u0648\u0644 \u0627\u0644\u0623\u062C\u0648\u0631 \u2190")))));
}
Object.assign(window, {
  ServicesPage,
  ServiceDetailPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_spotlight.jsx
try { (() => {
// =============================================================
// SPOTLIGHT — macOS-style global search overlay (⌘K)
// =============================================================

function SpotlightOverlay({
  open,
  onClose,
  nav
}) {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  useEffect(() => {
    if (open) {
      setQ('');
      setSel(0);
      setTimeout(() => inputRef.current && inputRef.current.focus(), 60);
    }
  }, [open]);

  // Global Escape + focus trap — works regardless of which child has focus.
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll('input, button, [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0],
          last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    const pages = [{
      kind: 'page',
      icon: 'inventory_2',
      name: 'متابعة الحالات',
      go: () => nav('cases')
    }, {
      kind: 'page',
      icon: 'request_quote',
      name: 'جدول الأجور ٢٠٢٦',
      go: () => nav('pricing')
    }, {
      kind: 'page',
      icon: 'menu_book',
      name: 'دليل الموظف',
      go: () => nav('guide')
    }, {
      kind: 'page',
      icon: 'apps',
      name: 'كل الخدمات',
      go: () => nav('services')
    }];
    if (!t) {
      const top = [...window.SERVICES].sort((a, b) => b.popularity - a.popularity).slice(0, 5).map(s => ({
        kind: 'svc',
        svc: s,
        go: () => nav('detail', {
          code: s.code
        })
      }));
      return [...top, ...pages];
    }
    const svcs = window.SERVICES.filter(s => s.name.toLowerCase().includes(t) || s.code.toLowerCase().includes(t)).slice(0, 7).map(s => ({
      kind: 'svc',
      svc: s,
      go: () => nav('detail', {
        code: s.code
      })
    }));
    const pg = pages.filter(p => p.name.includes(q.trim()));
    return [...svcs, ...pg];
  }, [q]);
  useEffect(() => {
    setSel(0);
  }, [results.length, q]);
  if (!open) return null;
  const onKey = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSel(s => Math.min(s + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSel(s => Math.max(s - 1, 0));
    } else if (e.key === 'Enter' && results[sel]) {
      results[sel].go();
      onClose();
    } else if (e.key === 'Escape') onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "sp-veil",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-panel",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "\u0628\u062D\u062B \u0633\u0631\u064A\u0639",
    ref: panelRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-input"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: onKey,
    placeholder: "\u0627\u0628\u062D\u062B \u0639\u0646 \u062E\u062F\u0645\u0629\u060C \u0635\u0641\u062D\u0629\u060C \u0623\u0648 \u0631\u0642\u0645 \u0646\u0645\u0648\u0630\u062C\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sp-esc",
    onClick: onClose,
    "aria-label": "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0628\u062D\u062B"
  }, "esc")), /*#__PURE__*/React.createElement("div", {
    className: "sp-results"
  }, results.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "sp-empty"
  }, "\u0644\u0627 \u0646\u062A\u0627\u0626\u062C \u0644\u0640 \xAB", q, "\xBB"), results.map((r, i) => r.kind === 'svc' ? /*#__PURE__*/React.createElement("button", {
    key: r.svc.code,
    className: `sp-row ${i === sel ? 'is-sel' : ''}`,
    onMouseEnter: () => setSel(i),
    onClick: () => {
      r.go();
      onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-row__ico",
    style: {
      '--s-c': DEPT_COLORS[r.svc.section]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.svc.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-row__name"
  }, r.svc.name), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__sub"
  }, window.SECTION_MAP[r.svc.section].name)), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__code"
  }, r.svc.code), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__enter"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "keyboard_return"
  }))) : /*#__PURE__*/React.createElement("button", {
    key: 'p' + i,
    className: `sp-row ${i === sel ? 'is-sel' : ''}`,
    onMouseEnter: () => setSel(i),
    onClick: () => {
      r.go();
      onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-row__ico sp-row__ico--page"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp-row__name"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__sub"
  }, "\u0627\u0646\u062A\u0642\u0627\u0644")), /*#__PURE__*/React.createElement("span", {
    className: "sp-row__enter"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "keyboard_return"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "sp-foot"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "\u2191\u2193"), " \u062A\u0646\u0642\u0651\u0644"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "\u21B5"), " \u0641\u062A\u062D"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "esc"), " \u0625\u063A\u0644\u0627\u0642"))));
}
Object.assign(window, {
  SpotlightOverlay
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_spotlight.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_sticker.jsx
try { (() => {
// =============================================================
// ENAMEL PIN ICONS — luxury badge treatment
// Custom SVG glyphs in white enamel on a polished colored gem,
// ringed by a champagne-gold metallic rim. Apple gloss × luxury.
// =============================================================

const STK_COLORS = {
  CS: 'var(--f-cs)',
  CT: 'var(--f-ct)',
  CB: 'var(--f-cb)',
  CA: 'var(--f-ca)',
  all: 'var(--f-navy)',
  bolt: 'var(--f-gold)'
};
const STK_PATHS = {
  // plug with bolt cutout
  CS: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M9.6 3.2c.6 0 1.1.5 1.1 1.1V7h2.6V4.3a1.1 1.1 0 0 1 2.2 0V7h.6a2 2 0 0 1 2 2v3.4a6.1 6.1 0 0 1-5 6v1.9a1.1 1.1 0 0 1-2.2 0v-1.9a6.1 6.1 0 0 1-5-6V9a2 2 0 0 1 2-2h.6V4.3c0-.6.5-1.1 1.1-1.1Z",
    fill: "currentColor",
    style: {
      fill: "rgb(93, 126, 178)"
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.9 9.4 10.4 13h1.7l-1 3 3.5-4.2h-1.8l1.2-2.4Z",
    fill: "var(--stk-edge)"
  })),
  // wrench
  CT: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M19.8 7.2a4.6 4.6 0 0 1-6 4.4l-5.2 5.2a2.5 2.5 0 1 1-3.5-3.5l5.2-5.2a4.6 4.6 0 0 1 5.8-5.7c.5.2.6.8.2 1.2L14 5.9l2 2 2.3-2.3c.4-.4 1-.3 1.2.2.2.4.3.9.3 1.4Z",
    fill: "currentColor",
    style: {
      fill: "rgb(164, 127, 77)"
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6.9",
    cy: "15",
    r: "1.15",
    fill: "var(--stk-edge)"
  })),
  // receipt with zigzag tail
  CB: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M7 2.8h10a1 1 0 0 1 1 1v16.3c0 .8-.9 1.2-1.5.7l-1.2-1-1.5 1.2c-.4.3-.9.3-1.3 0L11 19.8l-1.5 1.2c-.4.3-.9.3-1.3 0l-1.2-1c-.6.5-1.5.1-1.5-.7V3.8a1 1 0 0 1 1-1Z",
    transform: "translate(.5 0)",
    fill: "currentColor",
    style: {
      fill: "rgb(63, 147, 144)"
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "7",
    width: "7",
    height: "1.7",
    rx: "0.85",
    fill: "var(--stk-edge)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "11",
    width: "5",
    height: "1.7",
    rx: "0.85",
    fill: "var(--stk-edge)"
  })),
  // shield with alert
  CA: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M11.6 2.6a1.4 1.4 0 0 1 .8 0l6.6 2.3c.6.2 1 .7 1 1.3v4.5c0 4.9-3.2 8.2-7.4 9.9a1.4 1.4 0 0 1-1.2 0C7.2 18.9 4 15.6 4 10.7V6.2c0-.6.4-1.1 1-1.3l6.6-2.3Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10.9",
    y: "7",
    width: "2.2",
    height: "6",
    rx: "1.1",
    fill: "var(--stk-edge)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "15.6",
    r: "1.25",
    fill: "var(--stk-edge)"
  })),
  // all — playful grid, one tile tilted
  all: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "3.2",
    y: "3.2",
    width: "8",
    height: "8",
    rx: "2.2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "3.6",
    width: "8",
    height: "8",
    rx: "2.2",
    fill: "currentColor",
    transform: "rotate(7 17 7.6)",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3.2",
    y: "13",
    width: "8",
    height: "8",
    rx: "2.2",
    fill: "currentColor",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "12.8",
    y: "12.8",
    width: "8",
    height: "8",
    rx: "2.2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16.8",
    cy: "16.8",
    r: "1.5",
    fill: "var(--stk-edge)"
  })),
  // bolt
  bolt: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M13.6 2.2c.5-.7 1.6-.2 1.4.6l-1.5 6.4h4.4c.7 0 1 .8.6 1.3L10.4 21.8c-.5.7-1.6.2-1.4-.6l1.5-6.4H6.1c-.7 0-1-.8-.6-1.3l8.1-11.3Z",
    fill: "currentColor"
  }))
};
function StickerIco({
  kind,
  size = 44,
  className = '',
  tilt
}) {
  const k = STK_PATHS[kind] ? kind : 'all';
  return /*#__PURE__*/React.createElement("span", {
    className: `pin ${className}`,
    style: {
      '--pin-c': STK_COLORS[k],
      '--pin-s': size + 'px',
      '--stk-tilt': (tilt != null ? tilt : -6) + 'deg'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "pin__glyph",
    viewBox: "0 0 24 24",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("g", {
    className: "pin__ghost"
  }, STK_PATHS[k]), /*#__PURE__*/React.createElement("g", {
    className: "pin__main"
  }, STK_PATHS[k])));
}
Object.assign(window, {
  StickerIco
});

// =============================================================
// SIG BADGE — نقل حرفي لنموذج «التوقيع» (R1) من بنك الاعتماد
// حلقة تُرسم عند المرور + نواة زجاجية مصقولة + رسم مميز لكل قسم.
// لا توهج، لا دوران، لا وميض — فقط رسمٌ هادئ يكتمل مرة واحدة.
// =============================================================
const SIG_COLORS = {
  CS: 'var(--f-cs)',
  CT: 'var(--f-ct)',
  CB: 'var(--f-cb)',
  CA: 'var(--f-ca)'
};
const SIG_GLYPHS = {
  // CS — التوقيع (أول علاقة بين الموظف والمشترك)
  CS: /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 27 H31",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    className: "sig-line",
    pathLength: "100",
    d: "M5 22 C 9 17, 12 25, 16 19 C 19 15, 23 25, 27 18 C 29 14, 31 19, 32 19"
  })),
  // CT — المفك (الطلبات الفنية)
  CT: /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("g", {
    className: "tool"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 25 L9 27"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 27 L7 29 A 2.5 2.5 0 0 0 10.5 32.5 L 12.5 30.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 25 L20 16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 16 L23 13 A 4 4 0 1 0 26.5 16.5 L 23.5 19.5 L 21.5 17.5 Z"
  }))),
  // CB — الميزان (الفواتير والعملة)
  CB: /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "14",
    x2: "18",
    y2: "30"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 30 H24"
  }), /*#__PURE__*/React.createElement("g", {
    className: "scale-bar"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "14",
    x2: "29",
    y2: "14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14 L7 22 A 3 3 0 0 0 13 22 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27 14 L25 22 A 3 3 0 0 0 31 22 Z"
  }))),
  // CA — الجرس (الشكاوى والإنذارات الإدارية)
  CA: /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("g", {
    className: "bell"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 24 C 11 16, 13 12, 18 12 C 23 12, 25 16, 25 24 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 24 H27"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "f",
    cx: "18",
    cy: "28",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "8",
    x2: "18",
    y2: "11"
  })))
};
function SigBadge({
  kind,
  size = 90,
  className = ''
}) {
  const k = SIG_GLYPHS[kind] ? kind : 'CS';
  return /*#__PURE__*/React.createElement("span", {
    className: `sig sig--${k.toLowerCase()} ${className}`,
    style: {
      '--c-c': SIG_COLORS[k],
      '--sig-s': size + 'px'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "sig__ring",
    viewBox: "0 0 90 90",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "t",
    cx: "45",
    cy: "45",
    r: "43.5"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "p",
    cx: "45",
    cy: "45",
    r: "43.5",
    pathLength: "100"
  })), /*#__PURE__*/React.createElement("span", {
    className: "sig__core"
  }, SIG_GLYPHS[k]));
}
Object.assign(window, {
  SigBadge
});

// =============================================================
// UNDO WINDOW (K6) — كبسولة تراجع عائمة. روح فيرسيل + Gmail:
// الإجراء يقع بعد 5 ثوانٍ — تظهر كبسولة سوداء تمنحك مهلة للتراجع.
// استخدام: window.scheduleUndoableAction({ msg, onCommit, onUndo? })
// =============================================================
function UndoWindow({
  msg,
  onCommit,
  onUndo,
  onClose
}) {
  const [count, setCount] = React.useState(5);
  const committed = React.useRef(false);
  React.useEffect(() => {
    if (count <= 0) {
      if (!committed.current) {
        committed.current = true;
        onCommit && onCommit();
        onClose && onClose();
      }
      return;
    }
    const t = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(t);
  }, [count, onCommit, onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: "undo-win",
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("span", {
    className: "undo-win__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "delete"
  })), /*#__PURE__*/React.createElement("span", {
    className: "undo-win__msg"
  }, msg), /*#__PURE__*/React.createElement("span", {
    className: "undo-win__count"
  }, count), /*#__PURE__*/React.createElement("button", {
    className: "undo-win__btn",
    onClick: () => {
      committed.current = true;
      onUndo && onUndo();
      onClose && onClose();
    }
  }, "\u062A\u0631\u0627\u062C\u0639"), /*#__PURE__*/React.createElement("span", {
    className: "undo-win__bar",
    "aria-hidden": "true"
  }));
}

// Lightweight global scheduler — renders into a single host node.
(function setupUndoScheduler() {
  if (window.scheduleUndoableAction) return;
  let host = null;
  let root = null;
  function getRoot() {
    if (!host) {
      host = document.createElement('div');
      host.id = 'undo-host';
      document.body.appendChild(host);
      root = ReactDOM.createRoot(host);
    }
    return root;
  }
  window.scheduleUndoableAction = function ({
    msg,
    onCommit,
    onUndo
  }) {
    const r = getRoot();
    const close = () => r.render(null);
    r.render(React.createElement(UndoWindow, {
      msg,
      onCommit,
      onUndo,
      onClose: close
    }));
  };
})();
Object.assign(window, {
  UndoWindow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_sticker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/service-hub/final_trends.js
try { (() => {
// =============================================================
// TRENDS 2026 — ambient layer bootstrap (additive, framework-free)
// =============================================================
(function () {
  'use strict';

  // ---------- aurora + grain layers ----------
  function mountAmbient() {
    if (document.querySelector('.trend-aurora')) return;
    const a = document.createElement('div');
    a.className = 'trend-aurora';
    a.setAttribute('aria-hidden', 'true');
    a.innerHTML = '<i></i><i></i><i></i>';
    document.body.prepend(a);
    const g = document.createElement('div');
    g.className = 'trend-grain';
    g.setAttribute('aria-hidden', 'true');
    document.body.append(g);
  }

  // ---------- cursor glow on cards ----------
  const GLOW_SEL = '.f-deck__panel, .fs-card, .f-stat, .fg-card, .f-exp, .f-ticker, .fd-hero, .hub-pass.is-front';
  function glowify(root) {
    root.querySelectorAll(GLOW_SEL).forEach(el => {
      if (el.querySelector(':scope > .trend-glow')) return;
      el.classList.add('trend-host');
      const glow = document.createElement('span');
      glow.className = 'trend-glow';
      glow.setAttribute('aria-hidden', 'true');
      el.prepend(glow);
    });
  }
  document.addEventListener('pointermove', e => {
    const host = e.target.closest && e.target.closest('.trend-host');
    if (!host) return;
    const r = host.getBoundingClientRect();
    host.style.setProperty('--gx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
    host.style.setProperty('--gy', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
  }, {
    passive: true
  });

  // ---------- scroll reveal ----------
  const seen = new WeakSet();
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('trend-in');
        io.unobserve(en.target);
      }
    });
  }, {
    threshold: 0.08
  }) : null;
  function revealify() {
    if (!io) return;
    const page = document.querySelector('.f-page');
    if (!page) return;
    let i = 0;
    page.querySelectorAll(':scope > *, :scope > div > section').forEach(el => {
      if (seen.has(el)) return;
      seen.add(el);
      el.classList.add('trend-reveal');
      el.style.setProperty('--tr-d', Math.min(i * 60, 240) + 'ms');
      // already in view? reveal next frame so transition still plays
      requestAnimationFrame(() => requestAnimationFrame(() => io.observe(el)));
      i++;
    });
  }

  // ---------- top bar progressive glass ----------
  function watchScroll() {
    const onScroll = () => {
      const top = document.querySelector('.f-top');
      if (top) top.classList.toggle('trend-scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
  }

  // ---------- observe React re-renders ----------
  function start() {
    mountAmbient();
    watchScroll();
    const tick = () => {
      glowify(document);
      revealify();
    };
    tick();
    const mo = new MutationObserver(() => {
      clearTimeout(start._t);
      start._t = setTimeout(tick, 120);
    });
    mo.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/service-hub/final_trends.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.SLATag = __ds_scope.SLATag;

__ds_ns.SaveBadge = __ds_scope.SaveBadge;

__ds_ns.SectionBadge = __ds_scope.SectionBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
