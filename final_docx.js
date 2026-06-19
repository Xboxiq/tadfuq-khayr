// =============================================================
// FINAL — Native Word template fill
//   Loads the original .docx (with {{placeholders}} pre-injected),
//   substitutes form values, then either downloads as .docx or
//   renders+prints via docx-preview.
//
// This gives the user the **exact** Word layout, fonts, spacing,
// page numbers and repeating header — because it IS the original
// Word document, just with the data filled in.
// =============================================================

(function () {

  function _today() {
    return new Date().toLocaleDateString('ar-IQ-u-ca-gregory',
      { day:'2-digit', month:'2-digit', year:'numeric' });
  }

  function _serial(svc, settings) {
    return `${svc.code}-${(settings.centerCode || 'RS-014')}-${String(Math.floor(Math.random()*9000)+1000)}`;
  }

  function _buildData(svc, form, settings) {
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

  async function fillTemplate(svc, form) {
    const settings = (window.DB && window.DB.settings.get()) || {};
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
    doc.render(_buildData(svc, form, settings));
    return doc.getZip().generate({ type: 'arraybuffer' });
  }

  function fileNameFor(svc, form) {
    const safeName = (form.name || 'بدون-اسم').replace(/[\\/:*?"<>|]/g, '').replace(/\s+/g, '-');
    return `${svc.code}_${safeName}_${new Date().toISOString().slice(0,10)}`;
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

  async function renderDocxInto(svc, form, container) {
    const buf = await fillTemplate(svc, form);
    container.innerHTML = '';
    await window.docx.renderAsync(buf, container, null, {
      className: 'docx-render',
      inWrapper: true,
      breakPages: true,
      ignoreLastRenderedPageBreak: true,
      experimental: false,
      trimXmlDeclaration: true,
      useBase64URL: false,
      renderHeaders: true,
      renderFooters: true,
      renderFootnotes: false,
    });
    return buf;
  }

  // Print the filled docx via an in-memory iframe — keeps the user
  // on the page, no popup, prompts the native print dialog with
  // perfect Word-rendered output.
  async function printDocx(svc, form) {
    // Render in an offscreen container, then trigger print of that frame.
    const stage = document.createElement('div');
    stage.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:794px;background:#fff;';
    document.body.appendChild(stage);
    try {
      await renderDocxInto(svc, form, stage);
      // Move into a print-only container & call print
      const printRoot = document.getElementById('docx-print-stage') || (() => {
        const d = document.createElement('div');
        d.id = 'docx-print-stage';
        document.body.appendChild(d);
        return d;
      })();
      printRoot.innerHTML = '';
      while (stage.firstChild) printRoot.appendChild(stage.firstChild);
      stage.remove();
      document.body.classList.add('printing-docx');
      const cleanup = () => {
        document.body.classList.remove('printing-docx');
        window.removeEventListener('afterprint', cleanup);
      };
      window.addEventListener('afterprint', cleanup);
      window.print();
    } catch (e) {
      stage.remove();
      throw e;
    }
  }

  window.fillDocxTemplate = fillTemplate;
  window.downloadFilledDocx = downloadDocx;
  window.renderFilledDocx = renderDocxInto;
  window.printFilledDocx = printDocx;
  window.docxFileNameFor = fileNameFor;
})();
