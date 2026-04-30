function ProductBDRegions(){
  // Map of Russia with pulsing nodes + block data panel
  const blocks = [
    { k: "licenses", v: "broadcasting and communications licenses, frequency permits" },
    { k: "contracts", v: "revenue, communications services, rights transfer, protocols" },
    { k: "equipment", v: "towers and broadcasting hardware in use" },
    { k: "finance",  v: "approximated figures for aggregate reports" },
  ];
  const [active, setActive] = React.useState(0);

  // Pseudo-coords on a 100x60 "map"
  const nodes = [
    { x: 18, y: 40, name: "Kaliningrad" },
    { x: 28, y: 30, name: "St. Petersburg" },
    { x: 32, y: 36, name: "Moscow", big:true },
    { x: 42, y: 44, name: "Rostov" },
    { x: 48, y: 30, name: "Kazan" },
    { x: 52, y: 36, name: "Samara" },
    { x: 58, y: 42, name: "Volgograd" },
    { x: 64, y: 32, name: "Yekaterinburg" },
    { x: 72, y: 28, name: "Novosibirsk" },
    { x: 82, y: 30, name: "Irkutsk" },
    { x: 90, y: 34, name: "Vladivostok" },
  ];

  return (
    <ProductBand
      idx={3} id="bd-regions" screen="06 Product · DB Regions"
      name="DB:Regions"
      subtitle="Licenses · contracts · equipment"
      tagline="A storage and processing system for licenses, contracts and other data tied to broadcasting in regional branches."
      features={[
        { title: "Licensing block", desc: "frequencies, broadcasting and communications licenses, permits" },
        { title: "Contracts block", desc: "revenue contracts, communications services, rights transfer, protocols" },
        { title: "Technical equipment", desc: "data on towers and the hardware in use" },
        { title: "Finance block",   desc: "approximated figures for aggregate reports" },
      ]}
      meta={[
        { k: "100+", v: "regional branches" },
        { k: "11", v: "time zones" },
      ]}
    >
      <div className="bd-mock">
        <div className="bd-head">
          <div className="bd-title mono">BROADCAST MAP · RU</div>
          <div className="bd-blocks">
            {blocks.map((b,i)=>(
              <button key={i} className={`bd-tab ${active===i?'on':''}`} onClick={()=>setActive(i)}>{b.k}</button>
            ))}
          </div>
        </div>
        <div className="bd-map">
          <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="bd-svg">
            {/* abstract landmass silhouette */}
            <path d="M4 38 C 10 28, 22 22, 30 26 C 36 20, 50 22, 58 26 C 66 22, 80 22, 92 28 L 96 36 C 88 42, 78 44, 68 40 C 58 46, 44 48, 36 44 C 26 48, 14 46, 6 42 Z"
              fill="var(--bg)" stroke="var(--line-strong)" strokeWidth=".2" vectorEffect="non-scaling-stroke"/>
            {nodes.map((n,i)=>(
              <g key={i}>
                <circle cx={n.x} cy={n.y} r={n.big ? .9 : .5} fill="var(--accent-2)"/>
                <circle cx={n.x} cy={n.y} r={n.big ? 2.2 : 1.5} fill="none" stroke="var(--accent-2)" strokeWidth=".15"
                  style={{ animation:`bd-pulse 2.4s ${i*0.15}s ease-out infinite` }}/>
              </g>
            ))}
          </svg>
          {nodes.map((n,i)=>(
            <div key={i} className="bd-label mono" style={{left:`${n.x}%`, top:`${n.y}%`}}>{n.name}</div>
          ))}
        </div>
        <div className="bd-panel">
          <div className="bd-blockname mono">BLOCK / {blocks[active].k.toUpperCase()}</div>
          <div className="bd-blockdesc">{blocks[active].v}</div>
          <div className="bd-rows">
            {[
              ["RU‑77", "Moscow", "Active", "27.11.2029"],
              ["RU‑78", "SPb",    "Active", "12.03.2028"],
              ["RU‑66", "Ekb",    "Active", "05.08.2027"],
              ["RU‑54", "Nsk",    "Renew",  "18.11.2026"],
            ].map((r,i)=>(
              <div key={i} className="bd-row mono">
                {r.map((c,j)=><span key={j} className={`c c${j}`}>{c}</span>)}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes bd-pulse{ 0%{ transform: scale(1); opacity: .8;} 100%{ transform: scale(3); opacity: 0;} }
        `}</style>
      </div>
      <style>{`
        .bd-mock{ width: 100%; display:flex; flex-direction:column; background: var(--bg);}
        .bd-head{ display:flex; justify-content:space-between; align-items:center; padding: 12px 16px; border-bottom: 1px solid var(--line); gap: 10px; flex-wrap: wrap;}
        .bd-title{ font-size: 11px; color: var(--muted); letter-spacing: .08em;}
        .bd-blocks{ display:flex; gap: 4px;}
        .bd-tab{ font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .04em; text-transform: uppercase;
          padding: 5px 8px; border: 1px solid var(--line); border-radius: 4px; color: var(--muted); transition: all .2s ease;}
        .bd-tab.on{ background: var(--fg); color: var(--bg); border-color: var(--fg);}
        .bd-map{ position: relative; height: 180px; background: var(--bg-2); }
        .bd-svg{ position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
        .bd-label{ position: absolute; transform: translate(8px, -50%); font-size: 9.5px; color: var(--muted); letter-spacing: .04em; white-space: nowrap; pointer-events: none;}
        .bd-panel{ padding: 14px 16px; border-top: 1px solid var(--line); }
        .bd-blockname{ font-size: 10.5px; color: var(--accent-2); letter-spacing: .08em;}
        .bd-blockdesc{ font-size: 13px; color: var(--fg-2); margin: 4px 0 12px;}
        .bd-rows{ display:flex; flex-direction: column; gap: 2px;}
        .bd-row{ display:grid; grid-template-columns: 60px 1fr 80px 100px; padding: 6px 0; border-top: 1px dashed var(--line); font-size: 11px; color: var(--fg-2); }
        .bd-row .c2{ color: var(--accent-2); }
      `}</style>
    </ProductBand>
  );
}

window.ProductBDRegions = ProductBDRegions;
