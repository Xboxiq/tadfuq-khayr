// =============================================================
// TADFUQ KHAYR — PLATFORM v3 (Luminous Calm)
// A third, professional version of the real platform, rebuilt on
// design-system-v3 + the 8 skills + visual feeding. Wired to data.js.
// Isolated: uses --v3-* / .v3 only. Does not touch the original app.
// =============================================================
const { useState, useMemo, useEffect, useRef } = React;

const deptToken = { CS:'var(--v3-cs)', CT:'var(--v3-ct)', CB:'var(--v3-cb)', CA:'var(--v3-ca)' };
const Icon = ({n, s}) => <span className="ms" style={s?{fontSize:s}:null}>{n}</span>;
const fmt = window.fmt, fmtIQD = window.fmtIQD;

/* deterministic sparkline bars (ported from original) */
function bars(seed, n = 7) { const a=[]; let s=seed; for(let i=0;i<n;i++){s=(s*9301+49297)%233280; a.push(20+(s/233280)*80);} return a; }

/* ---- TRUST + TRANSPARENCY: honest fee view (never fake a number) ---- */
function feeView(c) {
  if (c.fee > 0) return <span className="v3-trust v3-trust--confirmed"><Icon n="verified" s={15} /> {fmtIQD(c.fee)}</span>;
  if (c.status === 'موافقة مدير') return <span className="v3-gate"><Icon n="admin_panel_settings" s={15} /> موافقة مدير</span>;
  return <span className="v3-pending-value"><Icon n="hourglass_empty" s={16} /> تُحدّد بعد الكشف</span>;
}
function svcPrice(s) {
  if (s.fixedPrice) return <span className="v3-trust v3-trust--confirmed">{fmtIQD(s.fixedPrice)}</span>;
  if (s.hasPrice)   return <span className="v3-trust v3-trust--estimate"><Icon n="info" s={14} /> {s.priceNote||'حسب الصنف'}</span>;
  return <span className="v3-trust v3-trust--pending">بلا أجور</span>;
}

// =============================================================
// TOP CHROME — brand + tabs + morphing search + theme + avatar
// =============================================================
const TABS = [
  { k:'overview', l:'نظرة عامة', i:'space_dashboard' },
  { k:'services', l:'الخدمات',   i:'apps' },
  { k:'cases',    l:'الحالات',   i:'fact_check' },
  { k:'pricing',  l:'الأجور',    i:'payments' },
  { k:'guide',    l:'الدليل',    i:'menu_book' },
];

function Chrome({tab, setTab, dark, setDark, query, setQuery}) {
  return (
    <header className="v3-chrome">
      <div className="v3-brand">
        <span className="v3-brand__mark">ت</span>
        <span>تدفّق الخير<br/><span className="v3-mono" style={{fontWeight:500,color:'var(--v3-ink-3)'}}>RASAFA · CS HUB · v3</span></span>
      </div>
      <button className="v3-chip"><span className="v3-avatar" style={{width:20,height:20,fontSize:10,border:'none'}}>رص</span> RS-014 · النضال <Icon n="unfold_more" s={16} /></button>
      <label className="v3-search" style={{marginInlineStart:'auto'}}>
        <Icon n="search" />
        <input placeholder="ابحث برقم اشتراك، اسم، أو رقم خدمة…" aria-label="بحث" value={query} onChange={e=>setQuery(e.target.value)} />
        <span className="v3-mono">⌘K</span>
      </label>
      <span className="v3-sync"><Icon n="cloud_done" s={15} /> محدّث</span>
      <button className="v3-toggle" aria-checked={dark} aria-label="الوضع الليلي" onClick={()=>setDark(d=>!d)}></button>
      <span className="v3-avatar v3-avatar--gold" title="رامز · مشرف">ر</span>
      <nav className="v3-utabs" style={{position:'absolute',insetBlockEnd:0,insetInlineStart:'var(--v3-page-pad)',insetInlineEnd:'var(--v3-page-pad)',borderBottom:'none',gap:'var(--v3-s5)',transform:'translateY(100%)'}}>
        {TABS.map(t=>(
          <button key={t.k} className="v3-utab" aria-selected={tab===t.k} onClick={()=>setTab(t.k)}>
            <Icon n={t.i} s={17} /> {t.l}
          </button>
        ))}
      </nav>
    </header>
  );
}

// =============================================================
// OVERVIEW
// =============================================================
function Hero({period, setPeriod}) {
  const K = window.KPIS;
  return (
    <div className="hero-card v3-grain v3-grad-navy col-8 row-2 v3-rise">
      <div>
        <span className="v3-handoff v3-handoff--system" style={{background:'rgba(255,255,255,.15)',color:'#fff'}}><Icon n="auto_awesome" s={14} /> ملخّص آلي</span>
        <h1 className="v3-display" style={{margin:'12px 0 4px',fontSize:'var(--v3-fs-xl)',color:'#fff'}}>أهلاً أستاذ رامز</h1>
        <p style={{margin:0,color:'rgba(255,255,255,.7)',fontSize:'var(--v3-fs-sm)'}}>مركز الرصافة · فرع النضال · ابدأ من القسم أو من خدمة سريعة</p>
      </div>
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'var(--v3-s4)',flexWrap:'wrap'}}>
        <div>
          <div className="v3-hero-num" style={{fontSize:'clamp(3rem,7vw,5rem)',color:'#fff'}}>{fmt(K.todayCases)}</div>
          <div style={{color:'rgba(255,255,255,.7)',fontSize:'var(--v3-fs-sm)'}}>طلب {period==='day'?'اليوم':period==='week'?'الأسبوع':'الشهر'} · <span style={{color:'var(--v3-gold-soft)'}}>+{K.todayDelta}%</span></div>
        </div>
        <div className="v3-seg" role="tablist" style={{background:'rgba(255,255,255,.14)',border:'none'}}>
          {[['day','اليوم'],['week','الأسبوع'],['month','الشهر']].map(([k,l])=>(
            <button key={k} className="v3-seg__opt" aria-selected={period===k} onClick={()=>setPeriod(k)} style={period!==k?{color:'rgba(255,255,255,.8)'}:null}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function OpsPanel() {
  const [saving, setSaving] = useState(false);
  const [dismiss, setDismiss] = useState(false);
  useEffect(()=>{ const t=setInterval(()=>{setSaving(true);setTimeout(()=>setSaving(false),900);},6000); return ()=>clearInterval(t); },[]);
  const K = window.KPIS;
  const urgent = window.RECENT_CASES.find(c=>c.priority==='urgent');
  const adv = urgent ? window.getAdvisories(urgent.svc).find(a=>a.t==='danger') : null;
  return (
    <div className="col-4 row-2 v3-rise v3-rise-1" style={{display:'flex'}}>
      <div className="v3-card" style={{flex:1,display:'flex',flexDirection:'column',gap:'var(--v3-s3)'}}>
        <div className="panel-head"><h2>الحالة التشغيلية</h2></div>
        <div className="ops-block" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <span className={"v3-autosave"+(saving?" v3-autosave--saving":"")}><span className="v3-autosave__dot"></span>{saving?'يُحفظ…':'كل التغييرات محفوظة'}</span>
          <span className="v3-handoff v3-handoff--system"><Icon n="sync" s={13} /> النظام</span>
        </div>
        <div className="ops-block">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span className="v3-sync"><Icon n="database" s={15} /> مزامنة البيانات</span><span className="v3-source">SOURCE · SCADA</span>
          </div>
          <div style={{marginTop:8,fontSize:'var(--v3-fs-sm)',color:'var(--v3-ink-3)'}}>آخر تحديث قبل 12 ثانية · {fmt(K.pending)} طلب قيد المعالجة</div>
        </div>
        {adv && !dismiss && (
          <div className="v3-confirm">
            <Icon n="warning" />
            <span className="v3-confirm__txt"><b>بلاغ خطر · {urgent.id}</b><br/>{adv.x}</span>
            <div style={{display:'flex',gap:8}}>
              <button className="v3-btn v3-btn--primary" style={{minHeight:38,padding:'8px 14px'}}>إشعار الطوارئ</button>
              <button className="v3-btn v3-btn--ghost" style={{minHeight:38,padding:'8px 14px'}} onClick={()=>setDismiss(true)}>لاحقاً</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DeptDeck({nav}) {
  const [open, setOpen] = useState(0);
  const today = { CS:28, CT:19, CB:31, CA:6 };
  return (
    <div className="col-12 v3-rise v3-rise-2">
      <div className="panel-head"><h2 style={{fontSize:'var(--v3-fs-lg)'}}>أقسام الخدمات</h2><span className="v3-sub" style={{fontSize:'var(--v3-fs-xs)'}}>{window.SERVICES.length} خدمة · مرّر على القسم لفتحه</span></div>
      <div className="deck">
        {window.SECTIONS.map((s,i)=>{
          const svcs = window.SERVICES.filter(v=>v.section===s.code);
          const avgSla = Math.round(svcs.reduce((a,v)=>a+(v.sla||0),0)/svcs.length);
          const isOpen = open===i;
          return (
            <div key={s.code} className={"deck-panel v3-dept v3-dept--"+s.code.toLowerCase()+(isOpen?" is-open":"")}
                 tabIndex={0} role="button" onMouseEnter={()=>setOpen(i)} onFocus={()=>setOpen(i)} onClick={()=>setOpen(i)}>
              <span className="deck-wm">{s.code}</span>
              <div className="row" style={{justifyContent:'space-between'}}>
                <span className="v3-dept__icn"><Icon n={s.icon} /></span>
                <span className="v3-dept__code">{s.code}</span>
              </div>
              <div className="v3-dept__name">{s.name}</div>
              <div className="deck-full">
                <p className="v3-dept__desc">{s.blurb}</p>
                <div className="row" style={{gap:6,margin:'10px 0'}}>
                  {svcs.slice(0,4).map(v=><span key={v.code} className="v3-badge" style={{fontSize:10}}>{v.code}</span>)}
                  {svcs.length>4 && <span className="v3-badge v3-badge--gold" style={{fontSize:10}}>+{svcs.length-4}</span>}
                </div>
                <div className="row" style={{justifyContent:'space-between',alignItems:'flex-end'}}>
                  <div className="row" style={{gap:16}}>
                    <span><b className="v3-num">{svcs.length}</b> <span className="v3-dept__desc">خدمة</span></span>
                    <span><b className="v3-num">{today[s.code]}</b> <span className="v3-dept__desc">اليوم</span></span>
                    <span><b className="v3-num">{avgSla}ي</b> <span className="v3-dept__desc">متوسط</span></span>
                  </div>
                  <button className="v3-btn v3-btn--primary" style={{minHeight:38,padding:'8px 14px'}} onClick={(e)=>{e.stopPropagation();nav('services',{section:s.code});}}>افتح القسم <Icon n="arrow_back" s={16} /></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Express({nav}) {
  const top = useMemo(()=>[...window.SERVICES].sort((a,b)=>b.popularity-a.popularity).slice(0,8),[]);
  return (
    <div className="col-8 v3-rise v3-rise-3">
      <div className="v3-card">
        <div className="panel-head"><h2>ابدأ خدمة مباشرة</h2><span className="v3-mono" style={{color:'var(--v3-ink-3)'}}>الأكثر استخداماً</span></div>
        <div className="v3-grid v3-grid--2">
          {top.map(svc=>{
            const sec = window.SECTION_MAP[svc.section];
            return (
              <button key={svc.code} className="svc-row" style={{textAlign:'start',border:'1px solid var(--v3-border)',background:'var(--v3-surface)'}} onClick={()=>nav('form',{code:svc.code})}>
                <span className="svc-icn" style={{background:`linear-gradient(150deg, color-mix(in srgb, ${deptToken[svc.section]} 75%, #fff), ${deptToken[svc.section]})`}}><Icon n={svc.icon} /></span>
                <span style={{flex:1,minWidth:0}}>
                  <span style={{fontWeight:600,fontSize:'var(--v3-fs-sm)',display:'block',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{svc.short||svc.name}</span>
                  <span className="v3-mono" style={{color:deptToken[svc.section]}}>{svc.code} · {svc.sla}ي · {sec.name}</span>
                </span>
                <Icon n="arrow_back" s={18} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatsMini() {
  const k = window.KPIS;
  const items = [
    {dept:'CS',ico:'bolt',lbl:'طلبات اليوم',val:fmt(k.todayCases),d:'+12%',seed:3},
    {dept:'CT',ico:'pending_actions',lbl:'قيد المعالجة',val:fmt(k.pending),d:'+5%',seed:9},
    {dept:'CB',ico:'payments',lbl:'محصّل اليوم',val:fmtIQD(k.collected),d:'+8%',seed:17},
    {dept:'CA',ico:'sentiment_satisfied',lbl:'رضا المشتركين',val:k.satisfaction+'٪',d:'+2%',seed:11},
  ];
  return (
    <div className="col-4 v3-rise v3-rise-3" style={{display:'flex',flexDirection:'column',gap:'var(--v3-s4)'}}>
      <div className="v3-card">
        <div className="panel-head"><h2>الإحصاءات</h2></div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {items.map((it,i)=>(
            <div key={i} className="row" style={{justifyContent:'space-between','--dept':deptToken[it.dept]}}>
              <span className="row" style={{gap:8}}><span className="v3-stat__icn" style={{width:30,height:30}}><Icon n={it.ico} s={17} /></span><span style={{fontSize:'var(--v3-fs-sm)',color:'var(--v3-ink-2)'}}>{it.lbl}</span></span>
              <span className="row" style={{gap:8}}><b className="v3-num">{it.val}</b><span className="v3-stat__delta up">{it.d}</span></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Activity({nav}) {
  const prio = { urgent:'var(--v3-err)', vip:'var(--v3-gold)', standard:'var(--v3-ok)' };
  return (
    <div className="col-12 v3-rise v3-rise-4">
      <div className="v3-card">
        <div className="panel-head"><h2>آخر الحركة</h2><span className="v3-sync"><Icon n="cloud_done" s={15} /> تتحدّث آلياً</span></div>
        <div className="v3-table-wrap">
          <table className="v3-table">
            <thead><tr><th>رقم الطلب</th><th>الخدمة</th><th>المشترك</th><th>الموظف</th><th>الحالة</th><th>الأجور</th><th></th></tr></thead>
            <tbody>
              {window.RECENT_CASES.map(c=>{
                const svc = window.SERVICE_MAP[c.svc];
                return (
                  <tr key={c.id} style={{cursor:'pointer'}} onClick={()=>nav('cases')}>
                    <td><span className="v3-mono" style={{color:deptToken[svc.section]}}>{c.id}</span></td>
                    <td>{svc.name}</td>
                    <td>{c.subscriber}</td>
                    <td className="v3-mono">{c.officer}</td>
                    <td><span className="v3-badge"><span className="v3-dot" style={{background:prio[c.priority]}}></span> {c.status}</span></td>
                    <td>{feeView(c)}</td>
                    <td><Icon n="chevron_left" s={18} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Overview({nav, period, setPeriod}) {
  return (
    <div className="v3-bento">
      <Hero period={period} setPeriod={setPeriod} />
      <OpsPanel />
      <DeptDeck nav={nav} />
      <Express nav={nav} />
      <StatsMini />
      <Activity nav={nav} />
    </div>
  );
}

// =============================================================
// SERVICES — full list, grouped, filterable (progressive-disclosure)
// =============================================================
function Services({nav, query, initialSection}) {
  const [section, setSection] = useState(initialSection || 'ALL');
  const list = useMemo(()=>window.SERVICES.filter(s=>
    (section==='ALL'||s.section===section) &&
    (!query || s.name.includes(query) || s.code.includes(query))
  ),[section,query]);
  return (
    <div>
      <div className="panel-head" style={{marginBottom:'var(--v3-s5)'}}>
        <div><h1 className="v3-display" style={{fontSize:'var(--v3-fs-xl)',margin:0}}>الخدمات</h1><p className="v3-sub">{list.length} خدمة · مصنّفة وفق دليل 2026</p></div>
      </div>
      <div className="v3-seg" role="tablist" style={{marginBottom:'var(--v3-s5)',flexWrap:'wrap'}}>
        <button className="v3-seg__opt" aria-selected={section==='ALL'} onClick={()=>setSection('ALL')}>الكل</button>
        {window.SECTIONS.map(s=><button key={s.code} className="v3-seg__opt" aria-selected={section===s.code} onClick={()=>setSection(s.code)}>{s.name}</button>)}
      </div>
      {list.length===0 ? (
        <div className="v3-empty"><Icon n="search_off" s={28} /><strong>لا نتائج</strong><span>جرّب كلمة بحث أو قسماً آخر.</span></div>
      ) : (
        <div className="v3-grid v3-grid--3">
          {list.map(svc=>{
            const sec = window.SECTION_MAP[svc.section];
            return (
              <div key={svc.code} className="v3-card v3-lift" style={{display:'flex',flexDirection:'column',gap:10,cursor:'pointer','--dept':deptToken[svc.section]}} tabIndex={0} onClick={()=>nav('form',{code:svc.code})}>
                <div className="row" style={{justifyContent:'space-between'}}>
                  <span className="svc-icn" style={{width:40,height:40,background:`linear-gradient(150deg, color-mix(in srgb, ${deptToken[svc.section]} 75%, #fff), ${deptToken[svc.section]})`}}><Icon n={svc.icon} /></span>
                  <span className="v3-mono" style={{color:deptToken[svc.section]}}>{svc.code}</span>
                </div>
                <div style={{fontWeight:650,fontSize:'var(--v3-fs-md)',lineHeight:1.35}}>{svc.name}</div>
                <div className="row" style={{justifyContent:'space-between',marginTop:'auto'}}>
                  <span className="v3-badge"><Icon n="schedule" s={13} /> {svc.sla} أيام</span>
                  {svcPrice(svc)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// =============================================================
// CASES — table with transparency, filterable
// =============================================================
function Cases({query}) {
  const [prio, setPrio] = useState('ALL');
  const prioColor = { urgent:'var(--v3-err)', vip:'var(--v3-gold)', standard:'var(--v3-ok)' };
  const list = window.RECENT_CASES.filter(c=>{
    const svc=window.SERVICE_MAP[c.svc];
    return (prio==='ALL'||c.priority===prio) && (!query||c.subscriber.includes(query)||c.id.includes(query)||svc.name.includes(query));
  });
  return (
    <div>
      <div className="panel-head" style={{marginBottom:'var(--v3-s5)'}}>
        <div><h1 className="v3-display" style={{fontSize:'var(--v3-fs-xl)',margin:0}}>الحالات</h1><p className="v3-sub">213 حالة نشطة · عرض {list.length}</p></div>
        <button className="v3-btn v3-btn--primary"><Icon n="add" s={18} /> حالة جديدة</button>
      </div>
      <div className="v3-seg" style={{marginBottom:'var(--v3-s5)'}}>
        {[['ALL','الكل'],['urgent','عاجل'],['vip','مهم'],['standard','عادي']].map(([k,l])=><button key={k} className="v3-seg__opt" aria-selected={prio===k} onClick={()=>setPrio(k)}>{l}</button>)}
      </div>
      <div className="v3-table-wrap">
        <table className="v3-table">
          <thead><tr><th>رقم الطلب</th><th>الخدمة</th><th>المشترك</th><th>الموظف</th><th>الأولوية</th><th>الحالة</th><th>الأجور</th><th>المدّة</th></tr></thead>
          <tbody>
            {list.map(c=>{
              const svc=window.SERVICE_MAP[c.svc];
              return (
                <tr key={c.id}>
                  <td><span className="v3-mono" style={{color:deptToken[svc.section]}}>{c.id}</span></td>
                  <td>{svc.name}</td><td>{c.subscriber}</td><td className="v3-mono">{c.officer}</td>
                  <td><span className="v3-badge"><span className="v3-dot" style={{background:prioColor[c.priority]}}></span>{c.priority==='urgent'?'عاجل':c.priority==='vip'?'مهم':'عادي'}</span></td>
                  <td>{c.status}</td><td>{feeView(c)}</td><td className="v3-mono" style={{color:'var(--v3-ink-4)'}}>{c.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// =============================================================
// PRICING — services with fees (trust-calibration: honest amounts)
// =============================================================
function Pricing({query}) {
  const list = window.SERVICES.filter(s=>!query||s.name.includes(query)||s.code.includes(query));
  return (
    <div>
      <div className="panel-head" style={{marginBottom:'var(--v3-s4)'}}>
        <div><h1 className="v3-display" style={{fontSize:'var(--v3-fs-xl)',margin:0}}>الأجور</h1><p className="v3-sub">المبالغ المؤكّدة تُعرض مباشرة؛ غير المؤكّدة تُحدّد بعد الكشف الميداني</p></div>
      </div>
      <div className="v3-alert v3-alert--info" style={{marginBottom:'var(--v3-s5)'}}><Icon n="info" /><div className="v3-alert__body">لا نعرض رقماً نهائياً قبل الكشف الفعلي. القيم التقديرية موسومة بوضوح للحفاظ على ثقة المشترك.</div></div>
      <div className="v3-table-wrap">
        <table className="v3-table">
          <thead><tr><th>الرمز</th><th>الخدمة</th><th>القسم</th><th>المدّة</th><th>الأجور</th></tr></thead>
          <tbody>
            {list.map(s=>(
              <tr key={s.code}>
                <td><span className="v3-mono" style={{color:deptToken[s.section]}}>{s.code}</span></td>
                <td>{s.name}</td><td>{window.SECTION_MAP[s.section].name}</td>
                <td className="num">{s.sla} أيام</td><td>{svcPrice(s)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// =============================================================
// GUIDE — advisories per service (transparency: classified honestly)
// =============================================================
const ADV_META = {
  danger:{c:'err',i:'dangerous',l:'تحذير'}, review:{c:'info',i:'fact_check',l:'مراجعة'},
  scale:{c:'ok',i:'trending_up',l:'قابل للتوسّع'}, faq:{c:'warn',i:'help',l:'سؤال شائع'}, tip:{c:'info',i:'lightbulb',l:'إرشاد'},
};
function Guide({query}) {
  const [open, setOpen] = useState(window.SECTIONS[0].code);
  return (
    <div>
      <div className="panel-head" style={{marginBottom:'var(--v3-s5)'}}>
        <div><h1 className="v3-display" style={{fontSize:'var(--v3-fs-xl)',margin:0}}>الدليل التشغيلي</h1><p className="v3-sub">إرشادات رسمية مصنّفة بصدق لكل خدمة</p></div>
      </div>
      {window.SECTIONS.map(sec=>{
        const svcs = window.SERVICES.filter(s=>s.section===sec.code && (!query||s.name.includes(query)));
        return (
          <div key={sec.code} className="v3-card" style={{marginBottom:'var(--v3-s4)','--dept':deptToken[sec.code]}}>
            <div className="v3-disclose__head" onClick={()=>setOpen(open===sec.code?null:sec.code)} role="button" aria-expanded={open===sec.code} tabIndex={0}>
              <span className="row" style={{gap:10}}><span className="svc-icn" style={{background:`linear-gradient(150deg, color-mix(in srgb, ${deptToken[sec.code]} 75%, #fff), ${deptToken[sec.code]})`}}><Icon n={sec.icon} /></span><b>{sec.name}</b></span>
              <Icon n="expand_more" s={20} />
            </div>
            {open===sec.code && (
              <div style={{marginTop:'var(--v3-s3)',display:'flex',flexDirection:'column',gap:10}}>
                {svcs.slice(0,6).map(s=>{
                  const adv = window.getAdvisories(s.code).slice(0,1);
                  return adv.map((a,j)=>{
                    const m = ADV_META[a.t] || ADV_META.tip;
                    return (
                      <div key={s.code+j} className={"v3-alert v3-alert--"+m.c}>
                        <Icon n={m.i} />
                        <div className="v3-alert__body"><b className="v3-mono" style={{color:deptToken[sec.code]}}>{s.code}</b> · <b>{m.l}</b><br/>{a.x}</div>
                      </div>
                    );
                  });
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// =============================================================
// APP
// =============================================================
function App() {
  const [tab, setTab] = useState('overview');
  const [dark, setDark] = useState(false);
  const [period, setPeriod] = useState('day');
  const [query, setQuery] = useState('');
  const [navArg, setNavArg] = useState({});
  useEffect(()=>{ document.body.classList.toggle('v3-dark', dark); },[dark]);
  const nav = (t, arg={}) => { setNavArg(arg); setTab(t); window.scrollTo({top:0,behavior:'smooth'}); };

  return (
    <React.Fragment>
      <Chrome tab={tab} setTab={(t)=>nav(t)} dark={dark} setDark={setDark} query={query} setQuery={setQuery} />
      <div className="wrap" style={{paddingTop:'var(--v3-s10)'}}>
        {tab==='overview' && <Overview nav={nav} period={period} setPeriod={setPeriod} />}
        {tab==='services' && <Services nav={nav} query={query} initialSection={navArg.section} />}
        {tab==='cases'    && <Cases query={query} />}
        {tab==='pricing'  && <Pricing query={query} />}
        {tab==='guide'    && <Guide query={query} />}
        {tab==='form'     && (
          <div className="v3-empty" style={{maxWidth:560,margin:'40px auto'}}>
            <Icon n="edit_document" s={30} />
            <strong>نموذج الخدمة {navArg.code ? '· '+navArg.code : ''}</strong>
            <span>معالج النموذج متعدد الخطوات (stepper + حفظ تلقائي + رفع مستندات) ضمن الدفعة القادمة.</span>
            <button className="v3-btn v3-btn--ghost" onClick={()=>nav('services')}>رجوع للخدمات</button>
          </div>
        )}
        <footer style={{marginTop:'var(--v3-s16)',textAlign:'center',color:'var(--v3-ink-3)'}}><span className="v3-mono">TADFUQ KHAYR · PLATFORM v3 · LUMINOUS CALM</span></footer>
      </div>
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
