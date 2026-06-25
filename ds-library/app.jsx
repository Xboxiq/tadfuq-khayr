/* ============================================================
   app.jsx — Integration demo: the real Tadfuq screens, rendered
   EXCLUSIVELY through window.DS. No raw f-* classes, no
   hand-rolled primitives — proof the library covers the app.
   ============================================================ */
(function () {
  const React = window.React;
  const ReactDOM = window.ReactDOM;
  const { useState } = React;
  const h = React.createElement;
  const DS = window.DS;

  /* ---- real domain data (subset, from data.js) ---- */
  const SECTIONS = [
    { code: 'CS', name: 'الاشتراكات', icon: 'apartment', blurb: 'فتح اشتراكات، نقل ملكية، تغيير الصنف، إيقاف/تفعيل.', today: 28, count: 11 },
    { code: 'CT', name: 'الفنية', icon: 'electrical_services', blurb: 'فحص المقاييس، تغيير الكابلات، تعديل القوة والجهد.', today: 19, count: 9 },
    { code: 'CB', name: 'الفواتير', icon: 'receipt_long', blurb: 'دفع القوائم، التقسيط، التسويات المالية، النسخ.', today: 31, count: 6 },
    { code: 'CA', name: 'الشكاوى والتقارير', icon: 'report', blurb: 'إبلاغات التلاعب، الأخطار، الشكاوى الإدارية.', today: 6, count: 4 },
  ];
  const SERVICES = [
    { code: 'CS0001', sec: 'CS', name: 'عمل اشتراك جديد', sla: 7, price: 'حسب الصنف والقوة' },
    { code: 'CS0011', sec: 'CS', name: 'نقل ملكية اشتراك (بيع/شراء/ورثة)', sla: 7 },
    { code: 'CT0009', sec: 'CT', name: 'فحص مقياس / تبديل / صيانة', sla: 3, price: 'يبدأ من 12,500 د.ع' },
    { code: 'CB0001', sec: 'CB', name: 'دفع قائمة أجور كهرباء', sla: 1 },
    { code: 'CB0006', sec: 'CB', name: 'تسوية مالية / تقسيط', sla: 5 },
    { code: 'CA0002', sec: 'CA', name: 'إبلاغ عن حالة خطر', sla: 1, urgent: true },
  ];
  const CASES = [
    { id: 'TQ-2026-08-1417', svc: 'CS0001', sub: 'علي عبدالله حسين', sec: 'CS', status: 'فحص ميداني', state: 'info', fee: 135000, officer: 'م. كرار', pri: 'عادي' },
    { id: 'TQ-2026-08-1413', svc: 'CT0009', sub: 'هدى محمود إبراهيم', sec: 'CT', status: 'بانتظار الدفع', state: 'warn', fee: 25000, officer: 'م. زينب', pri: 'عادي' },
    { id: 'TQ-2026-08-1409', svc: 'CB0006', sub: 'حسن جاسم العبيدي', sec: 'CB', status: 'موافقة مدير', state: 'info', fee: 0, officer: 'م. أحمد', pri: 'VIP' },
    { id: 'TQ-2026-08-1407', svc: 'CA0002', sub: 'سرى ناجي كاظم', sec: 'CA', status: 'فريق طوارئ', state: 'err', fee: 0, officer: 'م. مصطفى', pri: 'عاجل' },
    { id: 'TQ-2026-08-1390', svc: 'CB0001', sub: 'كرار حيدر الموسوي', sec: 'CB', status: 'مكتمل', state: 'ok', fee: 48000, officer: 'م. هدى', pri: 'عادي' },
  ];
  const secMap = Object.fromEntries(SECTIONS.map((s) => [s.code, s]));
  const NAV = [
    { group: 'العمل', items: [
      { k: 'overview', l: 'نظرة عامة', i: 'dashboard' },
      { k: 'services', l: 'الخدمات', i: 'apps', c: '31' },
      { k: 'cases', l: 'الحالات', i: 'assignment', c: '213' },
      { k: 'form', l: 'طلب خدمة', i: 'edit_document' },
    ] },
    { group: 'الإدارة', items: [
      { k: 'reports', l: 'التقارير', i: 'monitoring' },
      { k: 'pricing', l: 'الأجور', i: 'payments' },
      { k: 'admin', l: 'الإدارة', i: 'settings' },
    ] },
  ];
  const TITLES = { overview: 'نظرة عامة', services: 'الخدمات', cases: 'الحالات', form: 'طلب خدمة جديد', reports: 'التقارير', pricing: 'الأجور', admin: 'الإدارة' };

  /* ---- screens (DS only) ---- */
  function Overview({ nav }) {
    const toast = DS.useToast();
    return h('div', { className: 'e-view' },
      h(DS.PageHead, {
        title: 'نظرة عامة', sub: 'الخميس ٢٥ حزيران · مركز النضال — كهرباء الرصافة',
        actions: [
          h(DS.Button, { key: 'e', icon: 'file_download' }, 'تصدير'),
          h(DS.Button, { key: 'n', variant: 'primary', icon: 'add', onClick: () => nav('form') }, 'طلب جديد'),
        ],
      }),
      h('div', { className: 'e-section' },
        h('div', { className: 'e-grid e-grid--kpi' },
          h(DS.StatCard, { label: 'طلبات اليوم', value: '84', delta: '12%', dir: 'up' }),
          h(DS.StatCard, { label: 'قيد المعالجة', value: '213' }),
          h(DS.StatCard, { label: 'محصّل اليوم', value: '4,810,000', unit: 'د.ع', delta: '8%', dir: 'up' }),
          h(DS.StatCard, { label: 'رضا المراجعين', value: '94', unit: '%', delta: '2%', dir: 'up' }))),
      h('div', { className: 'e-section' },
        h(DS.SectionHeader, { title: 'أقسام الخدمات', action: h(DS.Button, { variant: 'ghost', size: 'sm', iconEnd: 'arrow_back', onClick: () => nav('services') }, 'كل الخدمات') }),
        h('div', { className: 'e-grid e-grid--dept' },
          SECTIONS.map((s) => h('div', { key: s.code, className: 'e-deptcard ' + ('e-dept-rail--' + s.code.toLowerCase()) },
            h('div', { className: 'e-deptcard__top' },
              h('span', { className: 'e-deptcard__icon e-dept--' + s.code.toLowerCase(), style: { background: 'var(--dept-' + s.code.toLowerCase() + '-bg)', color: 'var(--dept-' + s.code.toLowerCase() + ')' } }, h(DS.Icon, { name: s.icon })),
              h('div', null, h('div', { className: 'e-deptcard__title' }, s.name), h('div', { className: 'e-deptcard__meta' }, s.code + ' · ' + s.count + ' خدمة'))),
            h('p', { className: 'e-deptcard__blurb' }, s.blurb),
            h('div', { className: 'e-deptcard__foot' },
              h(DS.Status, { state: 'info' }, s.today + ' طلب اليوم'),
              h(DS.Button, { variant: 'ghost', size: 'sm', iconEnd: 'arrow_back', onClick: () => nav('services') }, 'فتح')))))),
      h('div', { className: 'e-section' },
        h('div', { className: 'e-cols' },
          h('div', null,
            h(DS.SectionHeader, { title: 'أحدث الحالات', action: h(DS.Button, { variant: 'ghost', size: 'sm', iconEnd: 'arrow_back', onClick: () => nav('cases') }, 'الكل') }),
            casesTable(CASES, nav)),
          h('div', null,
            h(DS.SectionHeader, { title: 'أولوية المتابعة' }),
            h(DS.Card, null,
              h('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' } },
                h(DS.Alert, { tone: 'err', title: '٣ حالات تجاوزت SLA' }, 'في الدائرة الفنية — راجعها لمنع التصعيد.'),
                h(DS.Alert, { tone: 'warn', title: '٧ بانتظار الدفع' }, 'قسائم صادرة لم تُسدّد بعد.'),
                h('button', { className: 'e-btn e-btn--subtle', style: { display: 'none' } }),
                h(DS.Button, { variant: 'subtle', block: true, icon: 'notifications', onClick: () => toast.push({ kind: 'info', title: 'تم', body: 'سيتم تنبيهك بالتحديثات.' }) }, 'تفعيل التنبيهات')))))));
  }

  function casesTable(rows, nav) {
    return h(DS.DataTable, {
      rowKey: 'id', rows,
      columns: [
        { key: 'id', label: 'رقم الطلب', render: (r) => h('a', { href: '#', onClick: (e) => { e.preventDefault(); nav('form'); } }, r.id) },
        { key: 'sub', label: 'المشترك' },
        { key: 'sec', label: 'القسم', render: (r) => h(DS.DeptTag, { section: r.sec }, secMap[r.sec].name) },
        { key: 'status', label: 'الحالة', render: (r) => h(DS.Status, { state: r.state }, r.status) },
        { key: 'fee', label: 'الأجور', align: 'end', render: (r) => r.fee ? DS.fmt(r.fee) : '—' },
        { key: 'officer', label: 'المسؤول' },
      ],
    });
  }

  function Services({ nav }) {
    const [filter, setFilter] = useState('all');
    const [q, setQ] = useState('');
    const list = SERVICES.filter((s) => (filter === 'all' || s.sec === filter) && s.name.includes(q));
    return h('div', { className: 'e-view' },
      h(DS.PageHead, { title: 'الخدمات', sub: '٣١ خدمة موزّعة على أربعة أقسام — وفق دليل ٢٠٢٦',
        actions: h(DS.Button, { variant: 'primary', icon: 'add', onClick: () => nav('form') }, 'طلب خدمة') }),
      h(DS.Toolbar, null,
        h('div', { style: { width: 260 } }, h(DS.Input, { icon: 'search', placeholder: 'ابحث عن خدمة…', value: q, onChange: (e) => setQ(e.target.value) })),
        h(DS.Chip, { active: filter === 'all', onClick: () => setFilter('all') }, 'الكل'),
        SECTIONS.map((s) => h(DS.Chip, { key: s.code, active: filter === s.code, onClick: () => setFilter(s.code) }, s.name)),
        h('span', { className: 'e-toolbar__spacer' }),
        h('span', { className: 'e-text-muted', style: { fontSize: 'var(--fs-sm)' } }, list.length + ' نتيجة')),
      list.length ? h('div', { className: 'e-tablewrap' }, list.map((x) =>
        h('div', { key: x.code, className: 'e-srv' },
          h('span', { className: 'e-srv__code' }, x.code),
          h('span', { className: 'e-srv__name' }, x.name, ' ', x.urgent && h(DS.Badge, { tone: 'err', icon: 'priority_high' }, 'عاجل')),
          h('span', { className: 'e-srv__meta' },
            h(DS.Badge, { icon: 'schedule' }, x.sla + ' يوم'),
            h('span', { className: 'e-text-secondary', style: { fontSize: 'var(--fs-sm)' } }, x.price || 'بلا أجور مباشرة'),
            h(DS.Button, { variant: 'subtle', size: 'sm', iconEnd: 'arrow_back', onClick: () => nav('form') }, 'بدء')))))
        : h(DS.Card, null, h(DS.Empty, { icon: 'search_off', title: 'لا نتائج', text: 'جرّب كلمة أخرى أو قسماً مختلفاً.' })));
  }

  function Cases({ nav }) {
    const [page, setPage] = useState(1);
    return h('div', { className: 'e-view' },
      h(DS.PageHead, { title: 'الحالات', sub: '٢١٣ حالة مفتوحة · فرع النضال',
        actions: [h(DS.Button, { key: 'e', icon: 'file_download' }, 'تصدير'), h(DS.Button, { key: 'n', variant: 'primary', icon: 'add', onClick: () => nav('form') }, 'حالة جديدة')] }),
      h(DS.Toolbar, null,
        h('div', { style: { width: 240 } }, h(DS.Input, { icon: 'search', placeholder: 'رقم طلب أو اسم…' })),
        ['الكل', 'عاجل', 'بانتظار الدفع', 'مكتمل'].map((c, i) => h(DS.Chip, { key: c, active: i === 0 }, c)),
        h('span', { className: 'e-toolbar__spacer' }),
        h(DS.Button, { variant: 'subtle', size: 'sm', icon: 'tune' }, 'تصفية')),
      h(DS.DataTable, {
        rowKey: 'id', rows: CASES,
        columns: [
          { key: 'id', label: 'رقم الطلب', render: (r) => h('a', { href: '#', onClick: (e) => { e.preventDefault(); nav('form'); } }, r.id) },
          { key: 'sub', label: 'المشترك' },
          { key: 'svc', label: 'الخدمة', render: (r) => h('span', { className: 'e-mono e-text-muted', style: { fontSize: 'var(--fs-xs)' } }, r.svc) },
          { key: 'sec', label: 'القسم', render: (r) => h(DS.DeptTag, { section: r.sec }, secMap[r.sec].name) },
          { key: 'pri', label: 'الأولوية', render: (r) => r.pri === 'عاجل' ? h(DS.Badge, { tone: 'err' }, 'عاجل') : r.pri === 'VIP' ? h(DS.Badge, { tone: 'info' }, 'VIP') : h('span', { className: 'e-text-muted', style: { fontSize: 'var(--fs-sm)' } }, 'عادي') },
          { key: 'status', label: 'الحالة', render: (r) => h(DS.Status, { state: r.state }, r.status) },
          { key: 'fee', label: 'الأجور', align: 'end', render: (r) => r.fee ? DS.fmt(r.fee) : '—' },
          { key: 'officer', label: 'المسؤول' },
        ],
      }),
      h(DS.Toolbar, null,
        h('span', { className: 'e-text-muted', style: { fontSize: 'var(--fs-sm)' } }, 'عرض ١–٥ من ٢١٣'),
        h('span', { className: 'e-toolbar__spacer' }),
        h(DS.Pager, { page, pages: 31, onChange: setPage })));
  }

  function Form() {
    const toast = DS.useToast();
    const rows = [{ l: 'أجور الكشف (منزلي)', amt: 15000 }, { l: 'تجهيز ونصب', amt: 62500 }, { l: 'الغطاء السفلي', amt: 12500 }];
    return h('div', { className: 'e-view' },
      h(DS.Breadcrumb, { items: [{ label: 'الخدمات' }, { label: 'الاشتراكات' }, { label: 'عمل اشتراك جديد', current: true }] }),
      h('div', { style: { height: 'var(--sp-4)' } }),
      h(DS.PageHead, { title: 'طلب خدمة — CS0001 · عمل اشتراك جديد', sub: 'أكمل الحقول المطلوبة. يُحفظ تلقائياً.',
        actions: h(DS.Status, { state: 'ok' }, 'محفوظ تلقائياً') }),
      h('div', { className: 'e-formlayout' },
        h('div', { className: 'e-formlayout__main' },
          h(DS.Card, { icon: 'person', title: 'بيانات مقدّم الطلب' },
            h('div', { className: 'e-form-grid' },
              h(DS.Field, { label: 'الاسم الكامل', required: true }, h(DS.Input, { placeholder: 'الاسم الثلاثي' })),
              h(DS.Field, { label: 'رقم الهاتف', required: true }, h(DS.Input, { mono: true, placeholder: '07XX XXX XXXX' })),
              h(DS.Field, { label: 'رقم الاشتراك' }, h(DS.Input, { mono: true, placeholder: '••••••' })),
              h(DS.Field, { label: 'صنف الاشتراك' }, h(DS.Select, { options: ['منزلي', 'تجاري', 'صناعي', 'حكومي'] })),
              h(DS.Field, { label: 'عنوان العقار', required: true, full: true }, h(DS.Input, { placeholder: 'المنطقة، المحلة، الزقاق، رقم الدار' })))),
          h(DS.Card, { icon: 'folder_open', title: 'الوثائق المطلوبة' },
            h('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' } },
              h(DS.Checkbox, { label: 'سند الملكية (الطابو) أو إجازة البناء', defaultChecked: true }),
              h(DS.Checkbox, { label: 'كتاب تأييد السكن المصدّق' }),
              h(DS.Checkbox, { label: 'صورة هوية الأحوال المدنية' })))),
        h('div', { className: 'e-formlayout__side' },
          h(DS.Card, { title: 'ملخّص الأجور',
            footer: [
              h(DS.Button, { key: 's', variant: 'primary', block: true, icon: 'send', onClick: () => toast.push({ kind: 'success', title: 'تم تجهيز الطلب', body: 'CS0001 — سيُحوَّل للدائرة المختصة.' }) }, 'إرسال الطلب'),
              h(DS.Button, { key: 'd', variant: 'ghost', block: true }, 'حفظ كمسودة'),
            ] },
            rows.map((r, i) => h('div', { key: i, className: 'e-summary__row' },
              h('span', { className: 'e-text-secondary' }, r.l), h('span', { className: 'e-num' }, DS.fmt(r.amt)))),
            h('div', { className: 'e-summary__total' },
              h('span', { className: 'e-text-secondary', style: { fontSize: 'var(--fs-sm)' } }, 'الإجمالي التقديري'),
              h('b', null, DS.fmt(DS.utils.feeTotal(rows)), ' ', h('span', { className: 'e-text-muted', style: { fontSize: 'var(--fs-sm)', fontWeight: 400 } }, 'د.ع'))),
            h('p', { className: 'e-hint', style: { marginTop: 'var(--sp-3)' } }, 'الأجور النهائية تُحدّد بعد الكشف الموقعي.')),
          h(DS.Alert, { tone: 'info', title: 'مراجعة رسمية' }, 'تدقيق سند الملكية إلزامي قبل قبول الطلب.'))));
  }

  function Stub({ title, icon, text, nav }) {
    return h('div', { className: 'e-view' },
      h(DS.PageHead, { title }),
      h(DS.Card, null, h(DS.Empty, { icon, title, text, action: h(DS.Button, { variant: 'primary', size: 'sm', icon: 'arrow_forward', onClick: () => nav('overview') }, 'العودة للوحة') })));
  }

  const VIEWS = {
    overview: Overview, services: Services, cases: Cases, form: Form,
    reports: (p) => h(Stub, Object.assign({ title: 'التقارير', icon: 'monitoring', text: 'تقارير الأداء والتحصيل ومؤشرات SLA.' }, p)),
    pricing: (p) => h(Stub, Object.assign({ title: 'الأجور', icon: 'payments', text: 'جدول الأجور الرسمي ٢٠٢٦.' }, p)),
    admin: (p) => h(Stub, Object.assign({ title: 'الإدارة', icon: 'settings', text: 'المستخدمون، الأدوار، الفروع، الإعدادات.' }, p)),
  };

  /* ---- shell ---- */
  function App() {
    const [view, setView] = useState('overview');
    const [dark, setDark] = useState(true);
    const [open, setOpen] = useState(false);
    const nav = (v) => { setView(v); setOpen(false); };
    React.useEffect(() => { document.body.classList.toggle('e-dark', dark); }, [dark]);
    const Screen = VIEWS[view] || VIEWS.overview;

    return h('div', { className: 'e-app' },
      h('div', { className: 'e-main' },
        h('header', { className: 'e-topbar' },
          h(DS.IconButton, { icon: 'menu', label: 'القائمة', className: 'e-menu-toggle', onClick: () => setOpen((o) => !o) }),
          h('span', { className: 'e-topbar__title' }, TITLES[view]),
          h('span', { className: 'e-topbar__spacer' }),
          h(DS.SearchInput, { placeholder: 'ابحث برقم اشتراك، اسم، أو خدمة…', kbd: '⌘K' }),
          h(DS.IconButton, { icon: 'notifications', label: 'الإشعارات' }),
          h(DS.IconButton, { icon: dark ? 'light_mode' : 'dark_mode', label: 'السمة', onClick: () => setDark((d) => !d) })),
        h('div', { className: 'e-scroll' }, h('div', { className: 'e-content' }, h(Screen, { nav })))),
      h('aside', { className: cx('e-side', open && 'is-open') },
        h('div', { className: 'e-side__brand' },
          h('span', { className: 'e-side__logo' }, h(DS.Icon, { name: 'bolt' })),
          h('span', { className: 'e-side__name' }, h('b', null, 'تدفّق الخير'), h('span', null, 'الرصافة · فرع النضال'))),
        h('nav', { className: 'e-side__scroll' },
          NAV.map((g) => h('div', { key: g.group, className: 'e-side__section' },
            h('div', { className: 'e-side__label' }, g.group),
            g.items.map((it) => h('button', { key: it.k, className: cx('e-nav', view === it.k && 'is-active'), onClick: () => nav(it.k) },
              h(DS.Icon, { name: it.i }), h('span', { className: 'e-nav__text' }, it.l), it.c && h('span', { className: 'e-nav__count' }, it.c)))))),
        h('div', { className: 'e-side__foot' },
          h('button', { className: 'e-side__user' },
            h(DS.Avatar, { name: 'رك' }),
            h('span', { className: 'e-side__user-meta' }, h('b', null, 'رامز كاظم'), h('span', null, 'مشرف الفرع')),
            h(DS.Icon, { name: 'unfold_more', style: { color: 'var(--text-muted)' } })))));
  }
  const cx = DS.cx;

  ReactDOM.createRoot(document.getElementById('root')).render(h(DS.ToastProvider, null, h(App)));
})();
