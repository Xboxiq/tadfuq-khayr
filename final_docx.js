// =============================================================
// FINAL — Word-based form rendering & export
//   * Preview: fills forms_word/<CODE>.docx via docxtemplater,
//     renders in-browser with docx-preview.
//   * Print: same filled Word document — what you see is what prints.
//   * Download: same filled .docx file.
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

  const _DOCX_OPTS = {
    className: 'docx',
    inWrapper: true,
    ignoreWidth: false,
    ignoreHeight: false,
    ignoreFonts: false,
    breakPages: true,
    ignoreLastRenderedPageBreak: true,
    renderHeaders: true,
    renderFooters: true,
    renderFootnotes: true,
    renderEndnotes: true,
    useBase64URL: true,
  };

  // ---------- Word fill (via docxtemplater) ----------
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

  // ---------- In-browser Word preview (docx-preview) ----------
  async function renderDocxInto(svc, form, container) {
    if (!window.docx || !window.docx.renderAsync) {
      throw new Error('مكتبة معاينة Word غير محمّلة');
    }
    const buf = await fillTemplate(svc, form);
    const blob = new Blob([buf], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    container.innerHTML = '';
    const styleHost = document.createElement('div');
    styleHost.className = 'docx-style-host';
    const viewHost = document.createElement('div');
    viewHost.className = 'docx-view-host';
    container.appendChild(styleHost);
    container.appendChild(viewHost);
    await window.docx.renderAsync(blob, viewHost, styleHost, _DOCX_OPTS);
    if (document.fonts && document.fonts.ready) {
      try { await document.fonts.ready; } catch (_) { /* ignore */ }
    }
  }

  // Print the filled Word document (same render as preview)
  async function printDocxForm(svc, form) {
    const stageId = 'docx-print-stage';
    let stage = document.getElementById(stageId);
    if (!stage) {
      stage = document.createElement('div');
      stage.id = stageId;
      document.body.appendChild(stage);
    }
    await renderDocxInto(svc, form, stage);
    document.body.classList.add('printing-docx');
    const cleanup = () => {
      document.body.classList.remove('printing-docx');
      stage.innerHTML = '';
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    setTimeout(() => window.print(), 200);
  }

  window.fillDocxTemplate = fillTemplate;
  window.downloadFilledDocx = downloadDocx;
  window.renderFilledDocx = renderDocxInto;
  window.printDocxForm = printDocxForm;
  window.docxFileNameFor = fileNameFor;
})();
