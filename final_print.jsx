// =============================================================
// FINAL — Official paper: Word-based preview & print
//
// Fills the official Word template (forms_word/<CODE>.docx) with
// the user's data via docxtemplater, then renders it in-browser
// with docx-preview. Print outputs the same document.
// =============================================================

function OfficialPaper({ svc, schema, form, attachments }) {
  const ref = React.useRef(null);
  const [state, setState] = React.useState('loading');
  const [errMsg, setErrMsg] = React.useState('');

  const formKey = React.useMemo(() => JSON.stringify(form), [form]);
  React.useEffect(() => {
    if (!ref.current) return;
    if (!window.renderFilledDocx) {
      setState('error');
      setErrMsg('وحدة Word غير محمّلة');
      return;
    }
    setState('loading');
    let cancelled = false;
    const t = setTimeout(() => {
      if (cancelled) return;
      window.renderFilledDocx(svc, form, ref.current)
        .then(() => { if (!cancelled) setState('ready'); })
        .catch(e => {
          if (cancelled) return;
          setState('error');
          setErrMsg(e.message || 'فشل التجهيز');
        });
    }, 250);
    return () => { cancelled = true; clearTimeout(t); };
  }, [svc.code, formKey]);

  const hasAttachments = attachments && attachments.length > 0;
  const fileName = window.docxFileNameFor
    ? window.docxFileNameFor(svc, form)
    : `${svc.code}_${(form.name || 'بدون-اسم').replace(/\s/g,'-')}`;

  const onDownloadWord = async () => {
    try { await window.downloadFilledDocx(svc, form); }
    catch (e) { alert('تعذّر تنزيل ملف Word: ' + e.message); }
  };
  const onPrint = async () => {
    try {
      if (window.printDocxForm) await window.printDocxForm(svc, form);
      else alert('وحدة الطباعة غير متاحة');
    }
    catch (e) { alert('تعذّر الطباعة: ' + e.message); }
  };
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
              <strong>تنزيل Word</strong>
              <small>النموذج الرسمي المعبّأ ببياناتك</small>
            </span>
          </button>
        </div>
        <div className="of-toolbar__btns">
          <button className="f-btn f-btn--primary" onClick={onPrint}>
            <Icon name="print" /> طباعة
          </button>
          {window.exportFormWithAttachments && (
            <button className="f-btn" onClick={onPdfWithAttach}>
              <Icon name="file_save" /> PDF + المرفقات
              {hasAttachments && <small style={{ opacity: 0.7 }}>(+ {attachments.length})</small>}
            </button>
          )}
        </div>
      </div>

      <div className="of-docx-shell" id="of-print-root">
        {state === 'loading' && (
          <div className="of-docx-loading">
            <div className="of-docx-spinner" />
            جاري تجهيز النموذج…
          </div>
        )}
        {state === 'error' && (
          <div className="of-docx-state of-docx-state--err">
            <Icon name="warning" />
            <div>
              <strong>تعذّر تجهيز النموذج</strong>
              <div style={{ fontSize:'0.82rem', marginTop:4, opacity:0.85 }}>{errMsg}</div>
            </div>
          </div>
        )}
        <div ref={ref} className="of-docx-host" />
      </div>
    </div>
  );
}

window.OfficialPaper = OfficialPaper;
