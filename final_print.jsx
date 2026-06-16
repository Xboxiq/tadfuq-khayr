// =============================================================
// FINAL — Official paper (print template)
// A faithful, government-style print layout for any service form.
// Drives @media print CSS in final_print.css.
// =============================================================

function cbBox(on) { return on ? '☑' : '☐'; }

function fmtDateAR() {
  return new Date().toLocaleDateString('ar-IQ-u-ca-gregory', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

// ---------- helpers ----------
function PPCell({ label, value, full }) {
  return (
    <div className={`pp-cell ${full ? 'pp-cell--full' : ''}`}>
      <div className="pp-cell__l">{label}</div>
      <div className="pp-cell__v">{value || ' '}</div>
    </div>
  );
}
function PPSection({ title, code, children }) {
  return (
    <section className="pp-section">
      <header className="pp-section__head">
        {code && <span className="pp-section__code">{code}</span>}
        <h3 className="pp-section__title">{title}</h3>
      </header>
      <div className="pp-section__body">{children}</div>
    </section>
  );
}

// ---------- main paper ----------
function OfficialPaper({ svc, schema, form, branch = 'الرصافة — فرع النضال (RS-014)' }) {
  const docs = form.docs || {};
  const today = fmtDateAR();
  const serial = (form._serial || `TQ-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`);

  return (
    <div className="pp-wrap">
      {/* on-screen toolbar (hidden in print) */}
      <div className="pp-toolbar no-print">
        <span className="pp-toolbar__hint">
          <Icon name="info" />
          معاينة نموذج الطباعة الرسمي — اضغط طباعة أو حفظ كـ PDF
        </span>
        <div className="pp-toolbar__btns">
          <button className="f-btn" onClick={() => window.print()}>
            <Icon name="print" /> طباعة
          </button>
          <button className="f-btn f-btn--primary" onClick={() => window.print()}>
            <Icon name="file_download" /> حفظ كـ PDF
          </button>
        </div>
      </div>

      {/* The printable sheet */}
      <article className="pp-sheet" dir="rtl" id="pp-print-root">

        {/* HEADER BAND */}
        <header className="pp-header">
          <div className="pp-header__col pp-header__col--start">
            <div className="pp-header__mini">جمهورية العراق</div>
            <div className="pp-header__mini">وزارة الكهرباء</div>
            <div className="pp-header__org">الشركة العامة لتوزيع كهرباء بغداد</div>
            <div className="pp-header__org pp-header__org--accent">كهرباء الرصافة</div>
          </div>

          <div className="pp-header__col pp-header__col--center">
            <div className="pp-crest" aria-hidden="true">
              <span className="pp-crest__ring" />
              <span className="pp-crest__mark">⚡</span>
            </div>
            <div className="pp-header__brand">تدفّق الخير</div>
            <div className="pp-header__brand-sub">مركز خدمات المشتركين</div>
          </div>

          <div className="pp-header__col pp-header__col--end">
            <div className="pp-stamp">
              <div className="pp-stamp__row"><span>رقم النموذج</span><b>{svc.code}</b></div>
              <div className="pp-stamp__row"><span>التاريخ</span><b>{today}</b></div>
              <div className="pp-stamp__row"><span>المسلسل</span><b dir="ltr">{serial}</b></div>
            </div>
          </div>
        </header>

        {/* TITLE BAR */}
        <div className="pp-titlebar">
          <span className="pp-titlebar__deco" aria-hidden="true">◆</span>
          <h1 className="pp-titlebar__title">{schema.paperTitle || svc.name}</h1>
          <span className="pp-titlebar__deco" aria-hidden="true">◆</span>
        </div>

        {/* META STRIP */}
        <div className="pp-meta">
          <div className="pp-meta__cell">
            <span className="pp-meta__l">المركز</span>
            <span className="pp-meta__v">{branch}</span>
          </div>
          <div className="pp-meta__cell">
            <span className="pp-meta__l">رمز الخدمة</span>
            <span className="pp-meta__v" dir="ltr">{svc.code}</span>
          </div>
          <div className="pp-meta__cell">
            <span className="pp-meta__l">مدّة الإنجاز المعتادة</span>
            <span className="pp-meta__v">{svc.sla} أيام عمل</span>
          </div>
          <div className="pp-meta__cell">
            <span className="pp-meta__l">رقم وصل القبض</span>
            <span className="pp-meta__v pp-meta__v--blank">..........................</span>
          </div>
        </div>

        {/* SECTIONS */}
        {schema.sections && schema.sections.map((sx, i) => {
          // documents section gets a dedicated rendering
          if (sx.kind === 'documents') {
            return (
              <PPSection key={i} title={sx.title} code={`(${i + 1})`}>
                <ul className="pp-docs">
                  {sx.items.map((it, j) => (
                    <li key={j} className="pp-docs__row">
                      <span className="pp-docs__cb">{cbBox(!!docs[it.k])}</span>
                      <span className="pp-docs__name">{it.l}</span>
                      {it.note && <span className="pp-docs__note">— {it.note}</span>}
                    </li>
                  ))}
                </ul>
              </PPSection>
            );
          }

          // classification (segmented chooser → label row)
          if (sx.kind === 'classification') {
            return (
              <PPSection key={i} title={sx.title} code={`(${i + 1})`}>
                <div className="pp-row">
                  <PPCell full label="الصنف المختار"
                          value={sx.classes.map(c => `${cbBox(form.cls === c)} ${c}`).join('    ')} />
                </div>
                {sx.phases && (
                  <div className="pp-row">
                    <PPCell full label="قوة التغذية / نوع الربط"
                            value={sx.phases.map(p => `${cbBox(form.phase === p)} ${p}`).join('    ')} />
                  </div>
                )}
              </PPSection>
            );
          }

          // generic rows of fields
          if (sx.rows) {
            return (
              <PPSection key={i} title={sx.title} code={`(${i + 1})`}>
                {sx.rows.map((row, ri) => (
                  <div key={ri} className="pp-row" style={{ '--pp-cols': row.length }}>
                    {row.map(f => (
                      <PPCell key={f.k} label={f.l} value={form[f.k]} full={f.full} />
                    ))}
                  </div>
                ))}
              </PPSection>
            );
          }

          return null;
        })}

        {/* DECLARATION */}
        {schema.declaration && (
          <PPSection title="الإقرار والتعهّد" code="(✓)">
            <p className="pp-decl">{schema.declaration}</p>
            <div className="pp-decl__ack">
              <span className="pp-docs__cb">{cbBox(!!form.declAgreed)}</span>
              <span>أُقرّ بصحّة المعلومات أعلاه وأتحمّل المسؤولية القانونية الكاملة عن أيّ مخالفة.</span>
            </div>
          </PPSection>
        )}

        {/* SIGNATURE BLOCK */}
        <section className="pp-signs">
          <div className="pp-sign">
            <div className="pp-sign__l">توقيع مقدّم الطلب</div>
            <div className="pp-sign__line" />
            <div className="pp-sign__sub">الاسم الثلاثي: ........................</div>
            <div className="pp-sign__sub">التاريخ: ........................</div>
          </div>
          <div className="pp-sign">
            <div className="pp-sign__l">الموظف المسؤول</div>
            <div className="pp-sign__line" />
            <div className="pp-sign__sub">الاسم: ........................</div>
            <div className="pp-sign__sub">التوقيع/الختم</div>
          </div>
          <div className="pp-sign">
            <div className="pp-sign__l">مدير المركز</div>
            <div className="pp-sign__line" />
            <div className="pp-sign__sub">الاسم: ........................</div>
            <div className="pp-sign__sub">التوقيع/الختم</div>
          </div>
        </section>

        {/* FOOTER STRIP */}
        <footer className="pp-foot">
          <div className="pp-foot__col">
            <span>هذا النموذج وثيقة رسمية صادرة عن شركة توزيع كهرباء الرصافة.</span>
            <span>أيّ تعديل خطّيّ يستوجب توقيع مدير المركز وختمه.</span>
          </div>
          <div className="pp-foot__col pp-foot__col--end">
            <span>صفحة <b className="pp-foot__pg" /></span>
            <span>صدر بتاريخ {today}</span>
          </div>
        </footer>
      </article>
    </div>
  );
}

window.OfficialPaper = OfficialPaper;
