function Stats(){
  const rows = [
    { n: 4,   suf: "",   label: "products in the suite", sub: "EDM · Mediator · DB:Regions · Mediareport" },
    { n: 15,  suf: "+",  label: "years on the market",   sub: "company registered 29 Oct 2020, team earlier" },
    { n: 100, suf: "+",  label: "regions covered",       sub: "branches of EMG radio stations" },
    { n: 564, suf: "",   label: "accreditation №",        sub: "Russian Ministry of Digital Development · 29.10.2020" },
  ];
  return (
    <section id="stats" className="section stats" data-screen-label="08 Stats">
      <div className="wrap">
        <div className="eyebrow">Numbers</div>
        <div className="stats-grid">
          {rows.map((r, i)=> <StatTile key={i} row={r}/>)}
        </div>
      </div>
      <style>{`
        .stats-grid{ margin-top: 32px; display:grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        @media (max-width: 860px){ .stats-grid{ grid-template-columns: 1fr 1fr; }}
        .stat-tile{ padding: clamp(24px, 3vw, 44px) clamp(16px, 2vw, 28px); border-right: 1px solid var(--line); display: flex; flex-direction: column; gap: 8px; min-height: 180px; justify-content: space-between; }
        .stat-tile:last-child{ border-right: none; }
        @media (max-width: 860px){ .stat-tile:nth-child(2){ border-right: none; } .stat-tile:nth-child(-n+2){ border-bottom: 1px solid var(--line); }}
        .stat-num{ font-family: var(--font-display); font-size: clamp(56px, 6.5vw, 104px); line-height: .9; letter-spacing: -0.04em; font-weight: 500; }
        .stat-num .suf{ color: var(--accent-2); }
        .stat-label{ font-size: 13px; color: var(--fg-2); line-height: 1.35; }
        .stat-sub{ font-family: var(--font-mono); font-size: 10.5px; color: var(--muted); letter-spacing: .04em; text-transform: uppercase; }
      `}</style>
    </section>
  );
}

function StatTile({row}){
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(()=>{
    const el = ref.current; if(!el) return;
    const io = new IntersectionObserver(entries=>{
      if (entries[0].isIntersecting){
        let start = performance.now(); const dur = 1200;
        function tick(now){
          const t = Math.min(1, (now-start)/dur);
          const e = 1 - Math.pow(1-t, 3);
          setVal(Math.round(row.n * e));
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, {threshold: .3});
    io.observe(el);
    return ()=> io.disconnect();
  }, []);
  return (
    <div className="stat-tile" ref={ref}>
      <div className="stat-num">
        <span className="mono">{val}</span><span className="suf">{row.suf}</span>
      </div>
      <div>
        <div className="stat-label">{row.label}</div>
        <div className="stat-sub">{row.sub}</div>
      </div>
    </div>
  );
}

window.Stats = Stats;
