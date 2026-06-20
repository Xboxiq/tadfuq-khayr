// =============================================================
// FINAL — Form rendering & export
//   * HTML preview: loads forms_html/<CODE>.html (LibreOffice
//     conversion of the official Word — pixel-perfect layout)
//     and substitutes {{placeholders}} with form values.
//   * Word download: loads forms_word/<CODE>.docx, runs the same
//     substitution via docxtemplater, downloads.
//   * Print: fills forms_word/<CODE>.docx via docxtemplater, renders
//     with docx-preview, and prints — identical to the downloaded Word.
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

  function _substitute(str, data) {
    return str.replace(/\{\{(\w+)\}\}/g, (_, k) =>
      data[k] != null ? String(data[k]) : '');
  }

  // ---------- Word download (via docxtemplater) ----------
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

  async function downloadDocx(svc, form) {
    const buf = await fillTemplate(svc, form);
    const blob = new Blob([buf], { type:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), {
      href: url, download: fileNameFor(svc, form) + '.docx',
    });
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    window.DB && window.DB.log('form.docx', svc.code);
  }

  // ---------- HTML preview (pixel-perfect from LibreOffice) ----------
  const _htmlCache = new Map();

  async function loadHtmlTemplate(svc) {
    if (_htmlCache.has(svc.code)) return _htmlCache.get(svc.code);
    const res = await fetch(`forms_html/${svc.code}.html`);
    if (!res.ok) throw new Error(`HTML template not found: ${svc.code}`);
    const raw = await res.text();
    // Extract the inner <body> markup only (we'll inject into our own container)
    const m = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const body = (m ? m[1] : raw);
    // Extract <style> blocks from <head> so we can inject them once
    const styles = [];
    raw.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, css) => { styles.push(css); return ''; });
    const cached = { body, styles };
    _htmlCache.set(svc.code, cached);
    return cached;
  }

  async function renderHtmlInto(svc, form, container) {
    const tpl = await loadHtmlTemplate(svc);
    const data = _buildData(svc, form);
    container.innerHTML = '';
    // Inject style once per container
    if (tpl.styles.length) {
      const styleEl = document.createElement('style');
      styleEl.textContent = tpl.styles.join('\n');
      container.appendChild(styleEl);
    }
    // Inject body with placeholder substitution
    const wrap = document.createElement('div');
    wrap.className = 'lo-doc';
    wrap.setAttribute('dir', 'rtl');
    wrap.innerHTML = _substitute(tpl.body, data);
    container.appendChild(wrap);
  }

  // Print the filled Word document (same bytes as download) via docx-preview
  async function printFilledDocx(svc, form) {
    const renderAsync = window.docx && window.docx.renderAsync;
    if (!renderAsync) throw new Error('معاينة Word غير متاحة — أعد تحميل الصفحة');

    const buf = await fillTemplate(svc, form);

    const stageId = 'docx-print-stage';
    let stage = document.getElementById(stageId);
    if (!stage) {
      stage = document.createElement('div');
      stage.id = stageId;
      document.body.appendChild(stage);
    }
    stage.innerHTML = '';

    let styleHost = document.getElementById('docx-print-styles');
    if (!styleHost) {
      styleHost = document.createElement('div');
      styleHost.id = 'docx-print-styles';
      document.head.appendChild(styleHost);
    }
    styleHost.innerHTML = '';

    await renderAsync(buf, stage, styleHost, {
      className: 'docx',
      inWrapper: true,
      hideWrapperOnPrint: true,
      ignoreWidth: false,
      ignoreHeight: false,
      renderHeaders: true,
      renderFooters: true,
      breakPages: true,
    });

    document.body.classList.add('printing-docx');
    const cleanup = () => {
      document.body.classList.remove('printing-docx');
      stage.innerHTML = '';
      styleHost.innerHTML = '';
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);

    // Allow fonts and page layout to settle before opening the dialog
    await new Promise(r => setTimeout(r, 400));
    window.print();
    window.DB && window.DB.log('form.print', svc.code);
  }

  // Legacy alias — routes to the Word-faithful print path
  async function printHtmlForm(svc, form) {
    return printFilledDocx(svc, form);
  }

  window.fillDocxTemplate = fillTemplate;
  window.downloadFilledDocx = downloadDocx;
  window.renderHtmlForm = renderHtmlInto;
  window.printFilledDocx = printFilledDocx;
  window.printHtmlForm = printHtmlForm;
  window.docxFileNameFor = fileNameFor;
})();
