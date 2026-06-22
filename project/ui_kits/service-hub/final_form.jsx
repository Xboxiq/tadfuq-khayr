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
    const tick = (now) => {
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
    name:    { autoComplete: 'name',  inputMode: 'text' },
    subName: { autoComplete: 'name',  inputMode: 'text' },
    phone:   { autoComplete: 'tel',   inputMode: 'tel',     type: 'tel' },
    email:   { autoComplete: 'email', inputMode: 'email',   type: 'email' },
    nid:     { autoComplete: 'off',   inputMode: 'numeric' },
    housing: { autoComplete: 'off',   inputMode: 'numeric' },
    meterNo: { autoComplete: 'off',   inputMode: 'numeric' },
    acct:    { autoComplete: 'off',   inputMode: 'text' },
  };
  const base = map[k] || {};
  if (f.type === 'number') base.inputMode = base.inputMode || 'numeric';
  return base;
}

function FF_Field({ f, value, onChange, onBlur, error, required }) {
  const reqd = required != null ? required : !!f.required;
  const cls = `ff-field${f.full ? ' ff-field--full' : ''}${f.mono ? ' ff-field--mono' : ''}${error ? ' is-invalid' : ''}`;
  const Err = window.FieldError;
  const errId = error ? `err-${f.k}` : undefined;
  const a11y = ffA11y(f);
  const Label = (
    <label htmlFor={`f-${f.k}`}>
      {f.l}
      {f.unit && <span className="ff-field__unit"> ({f.unit})</span>}
      {reqd && <span className="ff-field__req" aria-hidden="true"> *</span>}
    </label>
  );
  const common = {
    id: `f-${f.k}`, name: f.k,
    value: value || '',
    onChange: e => onChange(e.target.value),
    onBlur: () => onBlur && onBlur(f),
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': errId,
    'aria-required': reqd || undefined,
  };

  if (f.type === 'textarea') {
    return (
      <div className={cls} data-fk={f.k}>
        {Label}
        <textarea {...common} rows={3} placeholder={f.ph || ''} enterKeyHint="enter" />
        <Err msg={error} id={errId} />
      </div>
    );
  }
  if (f.type === 'select') {
    return (
      <div className={cls} data-fk={f.k}>
        {Label}
        <select {...common}>
          <option value="">— اختر —</option>
          {f.options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <Err msg={error} id={errId} />
      </div>
    );
  }
  if (f.type === 'date') {
    return (
      <div className={cls} data-fk={f.k}>
        {Label}
        <input type="date" {...common} autoComplete="off" />
        <Err msg={error} id={errId} />
      </div>
    );
  }
  if (f.type === 'number') {
    return (
      <div className={cls} data-fk={f.k}>
        {Label}
        <input type="number" {...common} placeholder={f.ph || ''} max={f.max}
               dir="ltr" style={{ textAlign:'start' }} inputMode={a11y.inputMode}
               enterKeyHint="next" autoComplete="off" />
        <Err msg={error} id={errId} />
      </div>
    );
  }
  return (
    <div className={cls} data-fk={f.k}>
      {Label}
      <input type={a11y.type || 'text'} {...common} placeholder={f.ph || ''}
             dir={f.mono ? 'ltr' : 'auto'} style={f.mono ? { textAlign:'start' } : null}
             inputMode={a11y.inputMode} autoComplete={a11y.autoComplete || 'off'}
             enterKeyHint="next" />
      <Err msg={error} id={errId} />
    </div>
  );
}

// =============================================================
// Section renderers
// =============================================================
function FF_Rows({ rows, form, set, errors, onBlur, isRequired }) {
  return (
    <>
      {rows.map((row, ri) => (
        <div key={ri} className="ff-row" style={{ '--cols': row.length }}>
          {row.map(f => (
            <FF_Field key={f.k} f={f} value={form[f.k]} onChange={(v) => set(f.k, v)}
                      onBlur={onBlur}
                      required={isRequired ? isRequired(f) : f.required}
                      error={errors && errors[f.k]} />
          ))}
        </div>
      ))}
    </>
  );
}

function FF_Classification({ sec, form, set }) {
  return (
    <>
      <div className="ff-seg">
        {sec.classes.map(c => (
          <button key={c} className={`ff-seg__opt ${form.cls === c ? 'is-on' : ''}`} onClick={() => set('cls', c)}>
            {c}
          </button>
        ))}
      </div>
      {sec.phases && (
        <div className="ff-field">
          <label>قوة التغذية المطلوبة (نوع الربط)</label>
          <div className="ff-seg">
            {sec.phases.map(p => (
              <button key={p} className={`ff-seg__opt ${form.phase === p ? 'is-on' : ''}`} onClick={() => set('phase', p)}>
                {p}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function FF_ClassChange({ sec, form, set }) {
  return (
    <div className="ff-row" style={{ '--cols': 2 }}>
      <div className="ff-field">
        <label>من</label>
        <div className="ff-seg ff-seg--wrap">
          {sec.from.map(c => (
            <button key={c} className={`ff-seg__opt ${form.cls_from === c ? 'is-on' : ''}`}
                    onClick={() => set('cls_from', c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="ff-field">
        <label>إلى</label>
        <div className="ff-seg ff-seg--wrap">
          {sec.to.map(c => (
            <button key={c} className={`ff-seg__opt ${form.cls_to === c ? 'is-on' : ''}`}
                    onClick={() => set('cls_to', c)}>{c}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FF_ReasonSeg({ sec, form, set, fieldKey = 'reasonChoice' }) {
  return (
    <div className="ff-seg ff-seg--wrap">
      {sec.options.map(o => (
        <button key={o} className={`ff-seg__opt ${form[fieldKey] === o ? 'is-on' : ''}`}
                onClick={() => set(fieldKey, o)}>{o}</button>
      ))}
    </div>
  );
}

function FF_Urgency({ sec, form, set }) {
  return (
    <div className="ff-seg ff-seg--wrap">
      {sec.levels.map((l, i) => (
        <button key={l} className={`ff-seg__opt ff-urgency-${i} ${form.urgency === l ? 'is-on' : ''}`}
                onClick={() => set('urgency', l)}>{l}</button>
      ))}
    </div>
  );
}

function FF_Documents({ list, form, set, docFiles, setDocFiles }) {
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
        [key]: { name: f.name, size: f.size, type: f.type, _buf: buf, _preview: preview, label: docName },
      }));
      // Auto-tick the document checkbox
      set('docs', { ...(form.docs || {}), [docName]: true });
    };
    input.click();
  };

  const removeFile = (key, docName) => {
    setDocFiles(prev => { const n = { ...prev }; delete n[key]; return n; });
    set('docs', { ...(form.docs || {}), [docName]: false });
  };

  return (
    <div className="ff-docs">
      {visible.map((d, i) => {
        const key = `doc_${i}`;
        const ticked = !!(form.docs || {})[d.n];
        const file = docFiles && docFiles[key];
        return (
          <div key={i} className={`ff-doc ${ticked ? 'is-on' : ''} ${file ? 'has-file' : ''}`}>
            <div className="ff-doc__main"
                 onClick={() => !file && set('docs', { ...(form.docs || {}), [d.n]: !ticked })}>
              <span className="ff-doc__box">
                {ticked && <Icon name="check" />}
              </span>
              <span className="ff-doc__text">
                <span className="ff-doc__name">{d.n}</span>
                {d.opt && <span className="ff-doc__opt">{d.opt}</span>}
              </span>
            </div>

            {file ? (
              <div className="ff-doc__file">
                <span className="ff-doc__filebadge">
                  {file._preview
                    ? <img src={file._preview} alt="" />
                    : <Icon name={file.type === 'application/pdf' ? 'picture_as_pdf' : 'description'} />}
                </span>
                <span className="ff-doc__filemeta">
                  <span className="ff-doc__filename" title={file.name}>{file.name}</span>
                  <span className="ff-doc__filesize">{(file.size / 1024).toFixed(0)} KB</span>
                </span>
                <button className="ff-doc__btn ff-doc__btn--replace" onClick={() => pickFile(key, d.n)} title="استبدال">
                  <Icon name="swap_horiz" />
                </button>
                <button className="ff-doc__btn ff-doc__btn--remove" onClick={() => removeFile(key, d.n)} title="حذف">
                  <Icon name="close" />
                </button>
              </div>
            ) : (
              <button className="ff-doc__upload" onClick={() => pickFile(key, d.n)}>
                <Icon name="upload_file" />
                <span>إرفاق</span>
              </button>
            )}
          </div>
        );
      })}
      <p className="ff-docs__hint">
        <Icon name="info" />
        ارفع صورة أو PDF لكل مستند — يُضاف تلقائياً للـ PDF الموحّد عند التصدير.
      </p>
    </div>
  );
}

// =============================================================
// Fee computation
// =============================================================
function computeFees(fees, form) {
  if (!fees || fees.kind === 'none') return { rows: [], total: 0, note: '' };
  if (fees.kind === 'fixed') {
    return { rows: [{ k:'fixed', l: fees.label, amt: fees.amount }], total: fees.amount };
  }
  if (fees.kind === 'inspection_plus_meter') {
    const cls = form.cls || 'منزلي';
    const insp = fees.base[cls] || fees.base['منزلي'];
    const rows = [{ k:'insp', l:`أجور الكشف (${cls})`, amt: insp }];
    let total = insp;
    fees.addons.forEach(a => {
      const on = !!form['fee_' + a.k];
      rows.push({ k:'fee_' + a.k, l: a.l, amt: a.amount, toggle:true, on });
      if (on) total += a.amount;
    });
    return { rows, total };
  }
  if (fees.kind === 'inspection_only') {
    const cls = form.cls_to || form.cls || Object.keys(fees.base)[0];
    const amt = fees.base[cls] || 0;
    return { rows: [{ k:'insp', l: fees.label + ' (' + cls + ')', amt }], total: amt };
  }
  if (fees.kind === 'reconnect') {
    const k = form.reconnectKind || Object.keys(fees.table)[0];
    const amt = fees.table[k];
    return { rows: [{ k:'rec', l:'أجور إعادة التيار — ' + k, amt }], total: amt,
             selector: { label:'نوع وقطع التيار', key:'reconnectKind', options: Object.keys(fees.table), current:k } };
  }
  if (fees.kind === 'inspection_table') {
    const k = form.reasonChoice || Object.keys(fees.table)[0];
    const amt = fees.table[k];
    return { rows:[{ k:'insp', l: k, amt }], total: amt };
  }
  if (fees.kind === 'meter_swap') {
    const k = form.meterSwapKind || Object.keys(fees.table)[0];
    const amt = fees.table[k];
    return { rows: [{ k:'sw', l:'تبديل المقياس — ' + k, amt }], total: amt,
             selector: { label:'نوع التبديل', key:'meterSwapKind', options: Object.keys(fees.table), current:k } };
  }
  if (fees.kind === 'installment') {
    const total = +form.totalDebt || 0;
    const down = +form.downPayment || 0;
    const minDown = Math.ceil(total * fees.minDownPct / 100);
    const months = Math.min(+form.months || 0, fees.monthlyCap);
    const monthly = months > 0 ? Math.round((total - down) / months) : 0;
    return {
      rows: [
        { k:'total', l:'إجمالي المديونية', amt: total },
        { k:'down',  l:'الدفعة الأولى المقترحة', amt: down },
        { k:'min',   l:`الحد الأدنى المطلوب (${fees.minDownPct}٪)`, amt: minDown, note: down >= minDown ? 'مقبول' : 'غير كافٍ' },
      ],
      total: monthly,
      totalLabel: months > 0 ? `قسط شهري × ${months}` : 'القسط الشهري',
      note: months > fees.monthlyCap ? `الحد الأقصى ${fees.monthlyCap} أشهر` : '',
    };
  }
  if (fees.kind === 'temp_daily') {
    const days = Math.max(0, Math.ceil((new Date(form.toDate) - new Date(form.fromDate)) / 86400000) || 0);
    const cls = form.cls || 'تجاري';
    const insp = (fees.inspectionFromClass && fees.inspectionFromClass[cls]) || 0;
    return {
      rows: [
        { k:'insp', l:`أجور الكشف (${cls})`, amt: insp },
        { k:'days', l:`مصروفات يومية × ${days} يوم`, amt: fees.daily * days },
      ],
      total: insp + fees.daily * days,
    };
  }
  if (fees.kind === 'cable_length') {
    return { rows: [], total: 0, note: fees.note || 'يُحدّد بعد الكشف الموقعي' };
  }
  if (fees.kind === 'note') {
    return { rows: [], total: 0, note: fees.text };
  }
  return { rows: [], total: 0 };
}

// =============================================================
// FORM PAGE
// =============================================================
function FormPage({ nav, code }) {
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
  const [visited, setVisited] = useState({ 0: true });
  const [submitState, setSubmitState] = useState('idle'); // idle | submitting | success | error
  const [submitMsg, setSubmitMsg] = useState('');
  const [refId, setRefId] = useState('');

  const initial = () => ({ docs: {}, cls:'منزلي', phase:'أحادي الطور' });
  const [form, setForm] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || 'null') || initial(); }
    catch { return initial(); }
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
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(es => { const n = { ...es }; delete n[k]; return n; });
  };

  // ---- which fields are required ----
  const REQUIRED_KEYS = new Set(['name', 'phone', 'nid', 'subId']);
  const isRequired = (f) => !!f.required || REQUIRED_KEYS.has(f.k);

  // ---- validators for a single field ----
  const fieldRules = (f) => {
    const list = [];
    if (isRequired(f)) list.push(window.Validate.required);
    if (f.k === 'phone') list.push(window.Validate.phoneIQ);
    if (f.k === 'nid') list.push(window.Validate.digits);
    if (f.type === 'number') list.push(window.Validate.digits);
    return list;
  };

  // validate one field live (on blur)
  const validateField = (f) => {
    const fns = fieldRules(f);
    let msg = '';
    for (const fn of fns) { msg = fn(form[f.k]); if (msg) break; }
    setErrors(es => {
      const n = { ...es };
      if (msg) n[f.k] = msg; else delete n[f.k];
      return n;
    });
    return msg;
  };

  // ---- step model: one step per schema section + a final review step ----
  const steps = useMemo(() => {
    const arr = (schema.sections || []).map((sx, i) => ({ type: 'section', sx, i }));
    arr.push({ type: 'review' });
    return arr;
  }, [schema]);
  const lastStep = steps.length - 1;

  // collect the validatable field metas inside a section
  const sectionFields = (sx) => {
    const fs = [];
    (sx.rows || []).forEach(row => row.forEach(f => fs.push(f)));
    return fs;
  };

  // validate every required field in a given step; returns errors object
  const validateStep = (idx) => {
    const st = steps[idx];
    const errs = {};
    if (st && st.type === 'section') {
      sectionFields(st.sx).forEach(f => {
        const fns = fieldRules(f);
        for (const fn of fns) { const m = fn(form[f.k]); if (m) { errs[f.k] = m; break; } }
      });
    }
    if (st && st.type === 'review' && schema.declaration && !form.declAgreed) {
      errs.declAgreed = 'يلزم الموافقة على الإقرار';
    }
    return errs;
  };

  const focusFirstError = (errs) => {
    const firstKey = Object.keys(errs)[0];
    if (!firstKey) return;
    setTimeout(() => {
      const el = document.querySelector(`[data-fk="${firstKey}"]`);
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); const inp = el.querySelector('input,select,textarea'); inp && inp.focus(); }
    }, 60);
  };

  const goToStep = (idx) => {
    setStep(idx);
    setVisited(v => ({ ...v, [idx]: true }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const next = () => {
    const errs = validateStep(step);
    if (Object.keys(errs).length) {
      setErrors(es => ({ ...es, ...errs }));
      setShowErrors(true);
      toast && toast.push({ kind: 'error', title: 'أكمل الحقول المطلوبة',
        body: `${Object.keys(errs).length} حقل في هذه الخطوة بحاجة لمراجعة.` });
      focusFirstError(errs);
      return;
    }
    if (step < lastStep) goToStep(step + 1);
  };
  const back = () => { if (step > 0) goToStep(step - 1); };

  // simulate the request to the department system
  const submitRequest = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (navigator.onLine === false) reject(new Error('لا يوجد اتصال بالشبكة — تحقّق ثم أعد المحاولة'));
      else resolve('TQ-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 90000) + 10000));
    }, 1300);
  });

  const submit = async () => {
    // validate ALL steps before sending
    let firstBad = -1; const allErrs = {};
    for (let i = 0; i < steps.length; i++) {
      const e = validateStep(i);
      if (Object.keys(e).length && firstBad === -1) firstBad = i;
      Object.assign(allErrs, e);
    }
    if (Object.keys(allErrs).length) {
      setErrors(allErrs);
      setShowErrors(true);
      toast && toast.push({ kind: 'error', title: 'لا يمكن إرسال الطلب',
        body: `${Object.keys(allErrs).length} حقل بحاجة مراجعة قبل الإرسال.` });
      if (firstBad >= 0) goToStep(firstBad);
      focusFirstError(allErrs);
      return;
    }
    setSubmitState('submitting');
    try {
      const id = await submitRequest();
      setRefId(id);
      setSubmitState('success');
      toast && toast.push({ kind: 'success', title: 'تم استلام الطلب',
        body: `رقم المتابعة ${id}` });
    } catch (e) {
      setSubmitMsg(e.message || 'تعذّر الإرسال');
      setSubmitState('error');
      toast && toast.push({ kind: 'error', title: 'تعذّر إرسال الطلب', body: e.message });
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
    setVisited({ 0: true });
    setSubmitState('idle');
    toast && toast.push({ kind: 'info', title: 'تم إعادة تهيئة النموذج' });
  };

  // Merge per-document files into the unified attachments stream
  const allAttachments = () => {
    const docArr = Object.entries(docFiles).map(([k, f]) => ({
      ...f,
      name: f.label + ' — ' + f.name,
    }));
    return [...docArr, ...attachments];
  };

  const onPickFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = '';
    const next = [];
    for (const f of files) {
      if (f.size > 8 * 1024 * 1024) {
        toast && toast.push({ kind:'warn', title:'ملف كبير', body: `${f.name} > 8MB — تم تجاهله` });
        continue;
      }
      try {
        const buf = await window.readFileAsArrayBuffer(f);
        const url = (f.type.startsWith('image/'))
          ? await window.readFileAsDataURL(f)
          : null;
        next.push({ name: f.name, type: f.type, size: f.size, _buf: buf, _preview: url });
      } catch (err) { console.error(err); }
    }
    setAttachments(a => [...a, ...next]);
  };
  const removeAttachment = (i) => setAttachments(a => a.filter((_, j) => j !== i));


  const feeResult = computeFees(schema.fees, form);
  const total = useCountUp(feeResult.total || 0);

  // ---- step presentation helpers ----
  const stepMeta = steps.map((s, i) =>
    s.type === 'review'
      ? { label: 'المراجعة والإرسال', icon: 'fact_check' }
      : { label: s.sx.title || `القسم ${i + 1}`, icon: s.sx.icon || 'edit' }
  );
  const current = steps[step];
  const stepErrCount = (idx) => Object.keys(validateStep(idx)).length;

  // review summary — labelled values the officer entered
  const reviewRows = () => {
    const out = [];
    (schema.sections || []).forEach(sx => (sx.rows || []).forEach(row => row.forEach(f => {
      if (form[f.k]) out.push({ l: f.l, v: form[f.k] });
    })));
    if (form.cls) out.push({ l: 'الصنف', v: form.cls });
    return out;
  };

  const renderSectionBody = (sx) => (
    <div className="ff-section__body">
      {sx.rows && <FF_Rows rows={sx.rows} form={form} set={set}
        errors={showErrors ? errors : null} onBlur={validateField} isRequired={isRequired} />}
      {sx.kind === 'classification' && <FF_Classification sec={sx} form={form} set={set} />}
      {sx.kind === 'class_change' && <FF_ClassChange sec={sx} form={form} set={set} />}
      {sx.kind === 'reason_seg' && <FF_ReasonSeg sec={sx} form={form} set={set} />}
      {sx.kind === 'urgency' && <FF_Urgency sec={sx} form={form} set={set} />}
      {sx.kind === 'documents' && <FF_Documents list={sx.list} form={form} set={set} docFiles={docFiles} setDocFiles={setDocFiles} />}
    </div>
  );

  return (
    <div className="fp-enter" style={{ display:'flex', flexDirection:'column', gap:16 }}>
      <button className="fp-back" onClick={() => nav('detail', { code: svc.code })}>
        <Icon name="arrow_forward" /> {svc.name}
      </button>

      <div className="ff-head">
        <div className="f-h2__main">
          <h2 className="f-h2__title">
            <span className="f-h2__icon"><Icon name="edit_document" /></span>
            نموذج {svc.code} — {svc.name}
          </h2>
          <span className="f-h2__sub">النسختان متطابقتان بالمعلومات — الاحترافية للتعبئة والأصلية للطباعة الرسمية</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:14, flexWrap:'wrap' }}>
          <span className={`ff-autosave ${saving ? 'is-saving' : ''}`}>
            <span className="ff-autosave__dot" />
            {saving ? 'يحفظ…' : savedAt ? 'محفوظ تلقائياً' : 'جاهز'}
          </span>
          <div className="ff-tabs">
            <button className={`ff-tab ${tab === 'pro' ? 'is-on' : ''}`} onClick={() => setTab('pro')}>
              <Icon name="auto_awesome" /> الاحترافية
            </button>
            <button className={`ff-tab ${tab === 'orig' ? 'is-on' : ''}`} onClick={() => setTab('orig')}>
              <Icon name="description" /> الأصلية
            </button>
          </div>
        </div>
      </div>

      {tab === 'orig' ? (
        <window.OfficialPaper svc={svc} schema={schema} form={form} attachments={allAttachments()} />
      ) : submitState === 'success' ? (
        /* ─────────── SUCCESS ─────────── */
        <div className="ff-result ff-result--ok fp-enter">
          <span className="ff-result__ico"><Icon name="check_circle" /></span>
          <h3>تم استلام الطلب بنجاح</h3>
          <p>سُجِّل طلب «{svc.name}» وحُوِّل إلى {sec.name}. احتفظ برقم المتابعة:</p>
          <div className="ff-result__ref">{refId}</div>
          <div className="ff-result__meta">
            <span><Icon name="schedule" /> المدّة المتوقعة {svc.sla} أيام</span>
            <span><Icon name="place" /> الرصافة — فرع النضال</span>
          </div>
          <div className="ff-result__actions">
            <button className="f-btn f-btn--primary" onClick={() => setTab('orig')}>
              <Icon name="print" /> طباعة النسخة الرسمية
            </button>
            <button className="f-btn" onClick={() => nav('cases')}>
              <Icon name="inventory_2" /> متابعة الحالات
            </button>
            <button className="f-btn" onClick={resetForm}>
              <Icon name="add" /> طلب جديد
            </button>
          </div>
        </div>
      ) : (
        /* ─────────── WIZARD ─────────── */
        <div className="ff-wizard">
          {/* progress stepper */}
          <ol className="ff-steps" role="list">
            {stepMeta.map((m, i) => {
              const done = visited[i] && i < step && stepErrCount(i) === 0;
              const state = i === step ? 'is-current' : done ? 'is-done' : (visited[i] ? 'is-seen' : '');
              return (
                <li key={i} className={`ff-step ${state}`}>
                  <button className="ff-step__btn" onClick={() => (visited[i] || i < step) && goToStep(i)}
                          disabled={!visited[i] && i > step}
                          aria-current={i === step ? 'step' : undefined}>
                    <span className="ff-step__num">{done ? <Icon name="check" /> : i + 1}</span>
                    <span className="ff-step__lbl">{m.label}</span>
                  </button>
                  {i < stepMeta.length - 1 && <span className="ff-step__bar" />}
                </li>
              );
            })}
          </ol>

          <div className="ff-layout">
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {current.type === 'section' ? (
                <div className="f-card ff-section fp-enter" key={step}>
                  <div className="f-card__head">
                    <h3 className="f-card__title">
                      <Icon name={current.sx.icon || (current.sx.kind === 'documents' ? 'folder_open' : 'edit')} />
                      {current.sx.title || (current.sx.kind === 'documents' ? 'الوثائق / المستمسكات' : 'القسم')}
                    </h3>
                    <span className="ff-step__count">الخطوة {step + 1} من {steps.length}</span>
                  </div>
                  {renderSectionBody(current.sx)}
                </div>
              ) : (
                /* review step: summary + declaration + attachments */
                <div className="fp-enter" key="review" style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  <div className="f-card ff-section">
                    <div className="f-card__head">
                      <h3 className="f-card__title"><Icon name="fact_check" /> مراجعة البيانات</h3>
                      <span className="ff-step__count">الخطوة {step + 1} من {steps.length}</span>
                    </div>
                    <div className="ff-section__body">
                      {reviewRows().length === 0 ? (
                        <window.EmptyState compact icon="edit_note" title="لا توجد بيانات بعد"
                          body="عُد إلى الخطوات السابقة وأدخل بيانات الطلب." />
                      ) : (
                        <dl className="ff-review">
                          {reviewRows().map((r, i) => (
                            <div key={i} className="ff-review__row">
                              <dt>{r.l}</dt><dd>{r.v}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                    </div>
                  </div>

                  {schema.declaration && (
                    <div className="f-card ff-section ff-decl-card" data-fk="declAgreed">
                      <div className="f-card__head">
                        <h3 className="f-card__title"><Icon name="gavel" /> الإقرار والتعهد</h3>
                        <p className="f-card__sub">يُطبع كاملاً مع النموذج الأصلي</p>
                      </div>
                      <div className="ff-section__body">
                        <p className="ff-decl-text">{schema.declaration}</p>
                        <label className={`ff-check ff-check--decl ${showErrors && errors.declAgreed ? 'is-invalid' : ''}`}
                               onClick={() => { set('declAgreed', !form.declAgreed); setErrors(es => { const n = {...es}; delete n.declAgreed; return n; }); }}>
                          <span className="ff-check__box">{form.declAgreed && <Icon name="check" />}</span>
                          قرأت الإقرار وأوافق على ما ورد فيه
                        </label>
                        <window.FieldError msg={showErrors ? errors.declAgreed : ''} />
                      </div>
                    </div>
                  )}

                  <div className="f-card ff-section">
                    <div className="f-card__head">
                      <h3 className="f-card__title"><Icon name="attach_file" /> المرفقات</h3>
                      <p className="f-card__sub">صور أو PDFs للمستمسكات — اختيارية</p>
                    </div>
                    <div className="ff-section__body">
                      <label className="ff-attach-drop">
                        <input type="file" multiple accept="image/*,.pdf" onChange={onPickFiles} style={{ display:'none' }} />
                        <Icon name="cloud_upload" />
                        <span>
                          <strong>اسحب وأفلت الملفات هنا</strong>
                          <small>أو اضغط للاختيار — JPG · PNG · PDF (حتى 8MB لكل ملف)</small>
                        </span>
                      </label>
                      {attachments.length > 0 && (
                        <div className="ff-attach-list">
                          {attachments.map((a, i) => (
                            <div key={i} className="ff-attach-item">
                              <span className="ff-attach-thumb">
                                {a._preview ? <img src={a._preview} alt="" />
                                  : <Icon name={a.type === 'application/pdf' ? 'picture_as_pdf' : 'description'} />}
                              </span>
                              <span className="ff-attach-meta">
                                <span className="ff-attach-name">{a.name}</span>
                                <span className="ff-attach-size">{(a.size / 1024).toFixed(0)} KB · {a.type || 'ملف'}</span>
                              </span>
                              <button className="ff-attach-rm" onClick={() => removeAttachment(i)} aria-label="حذف">
                                <Icon name="close" />
                              </button>
                            </div>
                          ))}
                          <div className="ff-attach-summary">{attachments.length} ملف</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {submitState === 'error' && (
                    <div className="ff-result ff-result--err">
                      <span className="ff-result__ico"><Icon name="error" /></span>
                      <div>
                        <strong>تعذّر إرسال الطلب</strong>
                        <p>{submitMsg}</p>
                      </div>
                      <button className="f-btn f-btn--primary" onClick={submit}>
                        <Icon name="refresh" /> إعادة المحاولة
                      </button>
                    </div>
                  )}
                </div>
              )}

              {showErrors && Object.keys(errors).length > 0 && (
                <window.ValidationSummary errors={errors} />
              )}

              {/* sticky step nav */}
              <div className="ff-nav">
                <button className="f-btn" onClick={back} disabled={step === 0}>
                  <Icon name="arrow_forward" /> السابق
                </button>
                <span className="ff-nav__progress">
                  <span className="ff-nav__bar"><span style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></span>
                  {step + 1} / {steps.length}
                </span>
                {step < lastStep ? (
                  <button className="f-btn f-btn--primary" onClick={next}>
                    التالي <Icon name="arrow_back" />
                  </button>
                ) : (
                  <button className="f-btn f-btn--primary" onClick={submit} disabled={submitState === 'submitting'}>
                    {submitState === 'submitting'
                      ? <><span className="ff-spin" /> جاري الإرسال…</>
                      : <><Icon name="send" /> تقديم الطلب</>}
                  </button>
                )}
              </div>
            </div>

            {/* fee panel (sticky, always visible) */}
            <aside className="ff-feepanel">
              <div className="ff-feepanel__head"><Icon name="request_quote" /> الأجور المتوقعة</div>
              {feeResult.selector && (
                <div className="ff-field" style={{ padding:'0 14px 0' }}>
                  <label>{feeResult.selector.label}</label>
                  <select value={feeResult.selector.current}
                          onChange={e => set(feeResult.selector.key, e.target.value)}>
                    {feeResult.selector.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              )}
              <div className="ff-feepanel__rows">
                {feeResult.rows.length === 0 && (
                  <div className="ff-feerow"><span>هذه الخدمة بدون أجور</span><b>—</b></div>
                )}
                {feeResult.rows.map(r => (
                  <div key={r.k} className="ff-feerow"
                       style={r.toggle ? { cursor:'pointer' } : null}
                       onClick={r.toggle ? () => set(r.k, !r.on) : undefined}>
                    <span style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                      {r.toggle && (
                        <span className="ff-check__box"
                              style={{ background: r.on ? 'var(--f-ok)' : 'transparent',
                                       borderColor: r.on ? 'var(--f-ok)' : 'var(--f-border-2)' }}>
                          {r.on && <Icon name="check" />}
                        </span>
                      )}
                      {r.l}
                      {r.note && <small style={{ marginInlineStart:6, opacity:.7 }}>({r.note})</small>}
                    </span>
                    <b>{fmtIQD(r.amt)}</b>
                  </div>
                ))}
                {feeResult.note && (
                  <div className="ff-feerow ff-feerow--note"><Icon name="info" /> {feeResult.note}</div>
                )}
              </div>
              {feeResult.total > 0 && (
                <div className="ff-feepanel__total">
                  <span className="lbl">{feeResult.totalLabel || 'المجموع'}</span>
                  <span className="val">{fmt(total)}<small>د.ع</small></span>
                </div>
              )}
              <div className="ff-feepanel__actions">
                <button className="f-btn" onClick={() => setTab('orig')}>
                  <Icon name="description" /> النسخة الأصلية
                </button>
                <button className="f-btn" onClick={() => setConfirmReset(true)}>
                  <Icon name="refresh" /> إعادة تهيئة
                </button>
              </div>
            </aside>
          </div>
        </div>
      )}

      <window.ConfirmDialog
        open={confirmReset}
        danger
        icon="restart_alt"
        title="إعادة تهيئة النموذج؟"
        description="ستفقد جميع البيانات المدخلة في هذا النموذج. لا يمكن التراجع عن العملية."
        confirmLabel="نعم، أعد التهيئة"
        cancelLabel="إلغاء"
        onConfirm={resetForm}
        onCancel={() => setConfirmReset(false)}
      />
    </div>
  );
}

// =============================================================
// ORIGINAL PAPER — generated from schema
// =============================================================
function cb(on) { return on ? '☑' : '☐'; }

function PaperFieldRows({ rows, form }) {
  return rows.map((row, ri) => (
    <tr key={ri}>
      {row.flatMap((f) => [
        <th key={f.k + '-l'} style={{ width: '18%' }}>{f.l}</th>,
        <td key={f.k + '-v'} colSpan={f.full ? (row.length === 1 ? 7 : 3) : 1}>
          {form[f.k] || ' '}
        </td>,
      ])}
    </tr>
  ));
}

function OriginalPaper({ svc, schema, form }) {
  const d = form.docs || {};
  return (
    <div className="ff-paper-wrap fp-enter">
      <div className="ff-paper" dir="rtl">
        <h2>{schema.paperTitle}</h2>
        <div className="ff-paper__sub">نموذج رقم ({svc.code})</div>

        <div className="head-band">
          <span>رقم وصل قبض (رسوم طلب الخدمة): ............</span>
          <span>اسم المركز: الرصافة — فرع النضال (RS-014)</span>
          <span>تاريخ الطلب: {new Date().toLocaleDateString('ar-IQ-u-ca-gregory')}</span>
        </div>

        {schema.sections.map((sx, i) => {
          if (sx.kind === 'documents') return null;
          return (
            <table key={i}>
              <tbody>
                <tr><th colSpan={8} style={{ background:'#e8e5db' }}>{sx.title}</th></tr>
                {sx.rows && <PaperFieldRows rows={sx.rows} form={form} />}
                {sx.kind === 'classification' && (
                  <>
                    <tr>
                      <th>الصنف المختار</th>
                      <td colSpan={7}>{sx.classes.map(c => `${cb(form.cls === c)} ${c}`).join('    ')}</td>
                    </tr>
                    {sx.phases && (
                      <tr>
                        <th>قوة التغذية</th>
                        <td colSpan={7}>{sx.phases.map(p => `${cb(form.phase === p)} ${p}`).join('    ')}</td>
                      </tr>
                    )}
                  </>
                )}
                {sx.kind === 'class_change' && (
                  <>
                    <tr><th>من</th><td colSpan={7}>{sx.from.map(c => `${cb(form.cls_from === c)} ${c}`).join('    ')}</td></tr>
                    <tr><th>إلى</th><td colSpan={7}>{sx.to.map(c => `${cb(form.cls_to === c)} ${c}`).join('    ')}</td></tr>
                  </>
                )}
                {sx.kind === 'reason_seg' && (
                  <tr><th>{sx.title}</th><td colSpan={7}>{sx.options.map(o => `${cb(form.reasonChoice === o)} ${o}`).join('    ')}</td></tr>
                )}
                {sx.kind === 'urgency' && (
                  <tr><th>الأولوية</th><td colSpan={7}>{sx.levels.map(l => `${cb(form.urgency === l)} ${l}`).join('    ')}</td></tr>
                )}
              </tbody>
            </table>
          );
        })}

        {/* Documents checklist */}
        {schema.sections.filter(s => s.kind === 'documents').map((sx, i) => (
          <table key={'doc' + i}>
            <thead>
              <tr>
                <th style={{ width: 34 }}>الحالة</th>
                <th style={{ width: 24 }}>#</th>
                <th>الوثائق / المستمسكات المطلوبة</th>
                <th style={{ width:'34%' }}>الأصناف المشمولة / ملاحظات</th>
              </tr>
            </thead>
            <tbody>
              {sx.list.map((doc, idx) => (
                <tr key={idx}>
                  <td className="c">{cb(!!d[doc.n])}</td>
                  <td className="c">{idx + 1}</td>
                  <td>{doc.n}</td>
                  <td className="c" style={{ fontSize:'0.68rem', color:'#555' }}>
                    {doc.all ? 'جميع الأصناف' : (doc.opt || '—')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}

        {schema.extraDocsTable && (
          <table>
            <thead>
              <tr><th>الوثيقة</th><th>رقم الوثيقة</th><th>تاريخ الوثيقة</th></tr>
            </thead>
            <tbody>
              {schema.extraDocsTable.map(v => (
                <tr key={v}><td>{v}</td><td>{' '}</td><td>{' '}</td></tr>
              ))}
            </tbody>
          </table>
        )}

        <table>
          <tbody>
            <tr>
              <th style={{ width:'40%' }}>رقم وصل قبض (رسوم المطالبة المالية بعد الدراسة)</th>
              <td>{' '}</td>
            </tr>
            <tr>
              <th>يحوَّل لاستكمال الإجراءات</th>
              <td>
                {(schema.routing || ['خدمات المشتركين','الدائرة الفنية','الدائرة القانونية','الصندوق','إلغاء الطلب'])
                  .map(r => `☐ ${r}`).join('   ')}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="sig-row">
          <div>اسم وتوقيع موظف خدمات المشتركين<div className="line">{' '}</div></div>
          <div>اسم وتوقيع مقدم الطلب<div className="line">{form.name || ' '}</div></div>
          <div>اسم وتوقيع مسؤول مركز خدمات المشتركين<div className="line">{' '}</div></div>
        </div>

        {schema.declaration && (
          <div className="decl">
            <h3>إقرار وتعهّد والتزام</h3>
            {schema.declaration.split('\n').map((line, i) => <p key={i}>{line}</p>)}
            <div className="sig-row" style={{ marginTop: 12 }}>
              <div>اسم وتوقيع مقدم الطلب<div className="line">{form.name || ' '}</div></div>
              <div></div>
              <div>التاريخ<div className="line">{new Date().toLocaleDateString('ar-IQ-u-ca-gregory')}</div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { FormPage, OriginalPaper });
