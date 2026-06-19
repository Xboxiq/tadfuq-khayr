// =============================================================
// FINAL — Pixel-perfect printable form
//
// Uses HTML templates pre-generated from the official Word docs
// via LibreOffice. The HTML is a 1:1 reproduction of the .docx
// (same widths, borders, fonts, RTL flow, checkbox positions).
// We substitute {{placeholders}} with the form values at render
// time. Printing this preview produces output identical to Word.
//
// Two artifacts to the user:
//   * The printable preview (HTML, perfect Word fidelity)
//   * A downloadable .docx (the exact official document with
//     the data filled in, for archival/submission).
// =============================================================

function OfficialPaper({ svc, schema, form, attachments }) {
  const ref = React.useRef(null);
  const [state, setState] = React.useState('loading');
  const [errMsg, setErrMsg] = React.useState('');

  React.useEffect(() => {
    if (!ref.current) return;
    if (!window.renderHtmlForm) {
      setState('error');
      setErrMsg('وحدة عرض النموذج لم تُحمَّل بعد');
      return;
    }
    setState('loading');
    let cancelled = false;
    window.renderHtmlForm(svc, form, ref.current)
      .then(() => { if (!cancelled) setState('ready'); })
      .catch(e => {
        if (cancelled) return;
        setState('error');
        setErrMsg(e.message || 'فشل تحميل النموذج');
      });
    return () => { cancelled = true; };
  }, [svc.code, JSON.stringify(form)]);

  const hasAttachments = attachments && attachments.length > 0;
  const fileName = window.docxFileNameFor
    ? window.docxFileNameFor(svc, form)
    : `${svc.code}_${(form.name || 'بدون-اسم').replace(/\s/g,'-')}`;

  const onDownloadWord = async () => {
    try { await window.downloadFilledDocx(svc, form); }
    catch (e) { alert('تعذّر تنزيل ملف Word: ' + e.message); }
  };
  const onPrint = () => window.printHtmlForm(svc, form);
  const onSavePdf = () => window.printHtmlForm(svc, form);
  const onPdfWithAttach = () => {
    if (!window.exportFormWithAttachments) return;
    window.exportFormWithAttachments({ svc, schema, form, attachments: attachments || [], fileName });
  };

  return (
    <div className="of-wrap">
      <div className="of-toolbar no-print">
        <div className="of-toolbar__lhs">
          <button className="f-btn f-btn--primary f-btn--lg" onClick={onDownloadWord}>
            <Icon name="description" />
            <span>
              <strong>تنزيل ملف Word الرسمي</strong>
              <small>للأرشفة والإرسال للجهات المختصة</small>
            </span>
          </button>
        </div>
        <div className="of-toolbar__btns">
          <button className="f-btn" onClick={onPrint}>
            <Icon name="print" /> طباعة
          </button>
          <button className="f-btn" onClick={onSavePdf}>
            <Icon name="picture_as_pdf" /> حفظ PDF
          </button>
          {window.exportFormWithAttachments && (
            <button className="f-btn" onClick={onPdfWithAttach}>
              <Icon name="file_save" /> PDF + المرفقات
              {hasAttachments && <small style={{ opacity: 0.7 }}>(+ {attachments.length})</small>}
            </button>
          )}
        </div>
      </div>

      <div className="of-lo-shell" id="of-print-root">
        {state === 'loading' && (
          <div className="of-docx-state">
            <div className="of-docx-spinner" />
            جاري تحميل النموذج…
          </div>
        )}
        {state === 'error' && (
          <div className="of-docx-state of-docx-state--err">
            <Icon name="warning" />
            <div>
              <strong>تعذّر تحميل النموذج</strong>
              <div style={{ fontSize:'0.82rem', marginTop:4, opacity:0.85 }}>{errMsg}</div>
            </div>
          </div>
        )}
        <div ref={ref} />
      </div>
    </div>
  );
}

window.OfficialPaper = OfficialPaper;
