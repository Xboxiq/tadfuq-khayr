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
function OfficialPaper({ svc, schema, form, attachments }) {
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
      window.renderFilledDocx(svc, form, docxRef.current)
        .then(() => { if (!cancelled) setMode('docx'); })
        .catch(() => { if (!cancelled) setMode('html'); /* keep HTML paper */ });
    }, 200);
    return () => { cancelled = true; clearTimeout(t); };
  }, [svc.code, formKey]);

  const onPrint = () => {
    // Print whichever preview is showing — print CSS isolates .of-docx-host.
    window.print();
  };

  const onDownloadWord = async () => {
    if (!window.downloadFilledDocx) {
      toast && toast.push({ kind: 'warn', title: 'تنزيل Word غير متاح',
        body: 'استخدم «طباعة» ثم احفظ كـ PDF من نافذة المتصفّح.' });
      return;
    }
    try {
      await window.downloadFilledDocx(svc, form);
      toast && toast.push({ kind: 'success', title: 'تم تنزيل ملف Word' });
    } catch (e) {
      // Graceful, honest fallback — the print-to-PDF path always works.
      toast && toast.push({ kind: 'warn', title: 'تنزيل Word غير متاح حالياً',
        body: 'قالب Word غير متوفر في وضع العرض — استخدم «طباعة» ثم «حفظ كـ PDF».' });
    }
  };

  return (
    <div className="of-wrap">
      <div className="of-toolbar no-print">
        <button className="f-btn f-btn--primary f-btn--lg" onClick={onPrint}>
          <Icon name="print" />
          <span>
            <strong>طباعة</strong>
            <small>النموذج الرسمي — أو حفظ كـ PDF</small>
          </span>
        </button>
        <button className="f-btn f-btn--lg" onClick={onDownloadWord}>
          <Icon name="description" />
          <span>
            <strong>تنزيل ملف Word</strong>
            <small>للأرشفة أو التعديل</small>
          </span>
        </button>
        {mode === 'docx' && (
          <span className="of-fidelity" title="معروض من قالب Word الرسمي">
            <Icon name="verified" /> نسخة Word الرسمية
          </span>
        )}
      </div>

      <div className="of-docx-shell" id="of-print-root">
        {/* docx enhancement mounts here; hidden until it succeeds */}
        <div ref={docxRef} className="of-docx-host" style={{ display: mode === 'docx' ? 'flex' : 'none' }} />
        {/* reliable schema HTML paper — the default, and the print source */}
        {mode !== 'docx' && (
          <div className="of-docx-host">
            <window.OriginalPaper svc={svc} schema={schema} form={form} />
          </div>
        )}
      </div>
    </div>
  );
}

window.OfficialPaper = OfficialPaper;
