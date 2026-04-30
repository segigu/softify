function ProductMediator(){
  // Broadcast schedule mockup — hour grid with draggable-looking ad spots
  const hours = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"];
  const spots = [
    { row: 0, start: 5,   width: 32,  label: "AD · 30″", kind: "ad" },
    { row: 0, start: 45,  width: 22,  label: "JINGLE · 10″", kind: "jingle" },
    { row: 0, start: 72,  width: 52,  label: "LIVE · host", kind: "live" },
    { row: 1, start: 8,   width: 28,  label: "AD · 20″", kind: "ad" },
    { row: 1, start: 42,  width: 46,  label: "MUSIC · rotation", kind: "music" },
    { row: 2, start: 2,   width: 40,  label: "NEWS · 3′", kind: "news" },
    { row: 2, start: 55,  width: 30,  label: "AD · 25″", kind: "ad" },
  ];
  const stations = ["Europa Plus Moscow", "Retro FM", "Dorozhnoe Radio"];
  const [active, setActive] = React.useState(0);

  return (
    <ProductBand
      idx={2} id="mediator" screen="05 Product · Mediator" reverse
      name="Mediator · Media Pilot"
      subtitle="On-air schedule"
      tagline="Builds the on-air schedule for advertising material across radio stations. Broadcast and rate grids, spot inventory, reporting."
      features={[
        { title: "Schedule builder", desc: "module for handling advertising material on air" },
        { title: "Admin module", desc: "configuration of the entire software suite" },
        { title: "Add-on modules", desc: "schedule conversion and distribution" },
        { title: "Spot library", desc: "counterparties, payments, supporting documents" },
      ]}
      meta={[
        { k: "24/7", v: "uninterrupted broadcast" },
        { k: "∞", v: "spots in the library" },
      ]}
    >
      <div className="med-mock">
        <div className="med-head">
          <div className="med-stations">
            {stations.map((s,i)=>(
              <button key={i} className={`med-pill ${active===i?'on':''}`} onClick={()=>setActive(i)}>{s}</button>
            ))}
          </div>
          <div className="med-date mono">Friday · Apr 17, 2026</div>
        </div>

        <div className="med-grid">
          <div className="med-hours">
            {hours.map(h => <div key={h} className="mono">{h}</div>)}
          </div>
          <div className="med-tracks">
            {[0,1,2].map(row => (
              <div key={row} className="med-track">
                <div className="med-rowlabel mono">
                  {row===0 ? 'On air' : row===1 ? 'Ads' : 'Jingles'}
                </div>
                <div className="med-cells">
                  {[...Array(8)].map((_,i)=>(
                    <div key={i} className="med-cell"/>
                  ))}
                  {spots.filter(s=>s.row===row).map((s, i)=>(
                    <div key={i}
                      className={`med-spot spot-${s.kind}`}
                      style={{left: `${s.start}%`, width: `${s.width}%`, animationDelay: `${i*0.05}s`}}>
                      <span className="mono">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="med-foot mono">
          <span>78% filled</span>
          <span>·</span>
          <span>next spot: 10:42 · #A‑228</span>
        </div>
      </div>
      <style>{`
        .med-mock{ width:100%; display:flex; flex-direction:column; background: var(--bg); }
        .med-head{ display:flex; justify-content:space-between; align-items:center; gap: 12px;
          padding: 12px 16px; border-bottom: 1px solid var(--line); flex-wrap: wrap; }
        .med-stations{ display:flex; gap: 6px; flex-wrap: wrap; }
        .med-pill{ font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em; text-transform: uppercase;
          padding: 6px 10px; border: 1px solid var(--line); border-radius: 999px; color: var(--muted); transition: all .2s ease;}
        .med-pill.on{ border-color: var(--fg); color: var(--fg); background: var(--bg-2); }
        .med-date{ font-size: 11px; color: var(--muted); }
        .med-grid{ padding: 12px 16px; flex: 1; }
        .med-hours{ display:grid; grid-template-columns: 80px repeat(8, 1fr); align-items:center;
          font-size: 10px; color: var(--muted); padding-left: 80px; }
        .med-hours > div{ border-left: 1px dashed var(--line); padding: 4px 6px; }
        .med-tracks{ display:flex; flex-direction: column; gap: 6px; margin-top: 6px; }
        .med-track{ display:grid; grid-template-columns: 80px 1fr; gap: 0; align-items: stretch; }
        .med-rowlabel{ font-size: 10.5px; color: var(--muted); padding: 16px 8px; letter-spacing: .06em; text-transform: uppercase; }
        .med-cells{ position: relative; height: 46px; background: var(--bg-2); border-radius: 4px; overflow: hidden; }
        .med-cells{ display:grid; grid-template-columns: repeat(8, 1fr); }
        .med-cell{ border-left: 1px dashed var(--line); }
        .med-spot{
          position: absolute; top: 6px; bottom: 6px;
          border-radius: 3px; padding: 0 10px; display:flex; align-items:center;
          font-size: 10.5px; color: #fff; letter-spacing: .04em;
          transition: transform .2s ease, box-shadow .2s ease;
          animation: spot-in .5s both ease;
          overflow: hidden; white-space: nowrap;
        }
        @keyframes spot-in{ from{ opacity: 0; transform: translateY(4px);} to{ opacity: 1; transform: none;} }
        .med-spot:hover{ transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,.15); z-index: 2; }
        .spot-ad{ background: var(--accent); color: var(--accent-ink); }
        .spot-jingle{ background: var(--accent-2); }
        .spot-live{ background: transparent; color: var(--fg); border: 1px dashed var(--line-strong); }
        .spot-music{ background: color-mix(in oklab, var(--fg) 12%, transparent); color: var(--fg); }
        .spot-news{ background: var(--fg); color: var(--bg); }
        .med-foot{ padding: 10px 16px; border-top: 1px solid var(--line); display:flex; gap: 8px;
          color: var(--muted); font-size: 11px; letter-spacing: .04em;}
      `}</style>
    </ProductBand>
  );
}

window.ProductMediator = ProductMediator;
