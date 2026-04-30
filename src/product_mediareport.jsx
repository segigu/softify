function ProductMediaReport(){
  // Data flow diagram + chart
  const sources = ["1C:ERP","Mediator","EDM","CRM","Billing"];
  const [hovered, setHovered] = React.useState(-1);

  // Bar chart data
  const bars = [62, 48, 71, 55, 78, 66, 82, 74, 88, 91, 84, 95];
  const maxBar = Math.max(...bars);

  return (
    <ProductBand
      idx={4} id="mediareport" screen="07 Product · Mediareport" reverse
      name="Mediareport"
      subtitle="BI & analytics"
      tagline="Collects and stores enterprise data. Imports, transforms, builds reports and distributes them on a schedule."
      features={[
        { title: "Data import",        desc: "from a wide range of enterprise systems on schedule" },
        { title: "Transformation",     desc: "shaping data into analysis-ready structures" },
        { title: "Report generation",  desc: "breakdowns by stations, regions and advertisers" },
        { title: "Scheduled delivery", desc: "automatic and event-driven — fast and reliable" },
      ]}
      meta={[
        { k: "5+", v: "data sources" },
        { k: "15 min", v: "integration cycle" },
      ]}
    >
      <div className="mr-mock">
        <div className="mr-head">
          <div className="mono" style={{color:'var(--muted)'}}>DASHBOARD / revenue by station</div>
          <div className="mono" style={{color:'var(--accent-2)'}}>● live</div>
        </div>
        <div className="mr-flow">
          <div className="mr-sources">
            {sources.map((s,i)=>(
              <div key={i} className={`mr-src ${hovered===i?'on':''}`}
                onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(-1)}>
                <span className="mono idx">{String(i+1).padStart(2,'0')}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <svg className="mr-pipes" viewBox="0 0 120 200" preserveAspectRatio="none" aria-hidden>
            {sources.map((_,i)=>{
              const y1 = 20 + i * 36;
              return (
                <path key={i}
                  d={`M 0 ${y1} C 40 ${y1}, 40 100, 120 100`}
                  fill="none"
                  stroke={hovered===i ? 'var(--accent-2)' : 'var(--line-strong)'}
                  strokeWidth={hovered===i ? 1.2 : 0.6}
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="2 3"
                  style={{ transition: 'stroke .2s ease, stroke-width .2s ease' }}
                />
              );
            })}
          </svg>
          <div className="mr-hub">
            <div className="mono" style={{fontSize:10, color:'var(--muted)', letterSpacing:'.08em'}}>ETL</div>
            <div style={{fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.02em'}}>Mediareport</div>
            <div className="mono" style={{fontSize:10, color:'var(--muted)'}}>normalize · aggregate</div>
            <div className="mr-hub-dot"/>
          </div>
        </div>

        <div className="mr-chart">
          <div className="mr-chart-head">
            <div className="mono">revenue 2026 · ₽, M</div>
            <div className="mono" style={{color:'var(--accent-2)'}}>+ 18,4%</div>
          </div>
          <div className="mr-bars">
            {bars.map((b,i)=>(
              <div key={i} className="mr-bar"
                style={{height: `${(b/maxBar)*100}%`, animationDelay: `${i*0.04}s`}}
                title={`${b}M`}
              />
            ))}
          </div>
          <div className="mr-axis mono">
            {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m,i)=>(
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .mr-mock{ width:100%; display:flex; flex-direction:column; background: var(--bg);}
        .mr-head{ display:flex; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid var(--line); font-size: 11px; letter-spacing: .06em; }
        .mr-flow{ display:grid; grid-template-columns: 1fr 120px 1.4fr; align-items: center; padding: 18px 16px; gap: 0; min-height: 200px;}
        .mr-sources{ display:flex; flex-direction: column; gap: 8px;}
        .mr-src{ display:flex; align-items: center; gap: 10px; padding: 8px 10px; border: 1px solid var(--line); border-radius: 4px; font-size: 12px; font-family: var(--font-mono); letter-spacing: .02em; transition: all .2s ease; background: var(--bg); }
        .mr-src.on{ border-color: var(--accent-2); color: var(--accent-2); transform: translateX(2px); }
        .mr-src .idx{ color: var(--muted); font-size: 10px;}
        .mr-pipes{ height: 100%; width: 100%;}
        .mr-hub{ display:flex; flex-direction: column; gap: 4px; border: 1px solid var(--fg); padding: 16px 18px; border-radius: 6px; position: relative; background: var(--bg);}
        .mr-hub-dot{ position: absolute; left: -5px; top: 50%; width: 10px; height: 10px; border-radius: 50%; background: var(--accent-2); transform: translateY(-50%);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent-2) 22%, transparent); }
        .mr-chart{ padding: 12px 16px 16px; border-top: 1px solid var(--line); }
        .mr-chart-head{ display:flex; justify-content: space-between; font-size: 11px; letter-spacing: .06em; color: var(--muted); margin-bottom: 8px;}
        .mr-bars{ display:flex; gap: 4px; align-items: flex-end; height: 120px; }
        .mr-bar{ flex: 1; background: var(--fg); border-radius: 2px 2px 0 0; min-height: 4px;
          animation: bar-in .6s both ease; transform-origin: bottom;}
        .mr-bar:nth-child(odd){ background: var(--accent-2); }
        @keyframes bar-in{ from{ transform: scaleY(0);} to{ transform: none;}}
        .mr-axis{ display:grid; grid-template-columns: repeat(12, 1fr); font-size: 10px; color: var(--muted); margin-top: 6px; gap: 4px; text-align: center; }
        @media (max-width: 600px){
          .mr-flow{ grid-template-columns: 1fr; }
          .mr-pipes{ display: none; }
        }
      `}</style>
    </ProductBand>
  );
}

window.ProductMediaReport = ProductMediaReport;
