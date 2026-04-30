function Clients(){
  // Placeholder for EMG radio stations — wordmarks in monochrome
  const stations = [
    "Europa Plus", "Dorozhnoe Radio", "Retro FM", "Radio 7",
    "Echo of Moscow", "Novoe Radio", "Radio Monte‑Carlo", "Radio ENERGY",
    "Nashe Radio", "Rock FM", "Radio Romantika", "Comedy Radio",
  ];
  return (
    <section id="clients" className="section clients" data-screen-label="09 Clients">
      <div className="wrap">
        <div className="clients-head">
          <div>
            <div className="eyebrow">Clients</div>
            <h2>Our software runs the largest<br/>radio stations of <span style={{color:'var(--muted)'}}>the European Media Group.</span></h2>
          </div>
          <p className="lead" style={{maxWidth: '40ch'}}>
            We build products for internal use across the holding — which means our
            systems are battle-tested in daily, production-grade operation.
          </p>
        </div>

        <div className="clients-grid">
          {stations.map((s, i)=>(
            <div key={i} className="client-cell">
              <span className="mono idx">{String(i+1).padStart(2,'0')}</span>
              <span className="client-name">{s}</span>
            </div>
          ))}
        </div>
        <div className="clients-note mono">
          * Trademarks belong to their respective owners. Listed as part of the EMG holding.
        </div>
      </div>
      <style>{`
        .clients-head{ display:grid; grid-template-columns: 1.4fr 1fr; gap: clamp(32px, 5vw, 80px); align-items: end; margin-bottom: 40px;}
        @media (max-width: 900px){ .clients-head{ grid-template-columns: 1fr; }}
        .clients-head h2{ margin-top: 18px; max-width: 22ch; }
        .clients-grid{ display:grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        @media (max-width: 900px){ .clients-grid{ grid-template-columns: repeat(2, 1fr); }}
        .client-cell{ padding: 24px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line);
          display:flex; flex-direction: column; justify-content: space-between; min-height: 120px;
          transition: background .2s ease; position: relative; overflow: hidden; }
        .client-cell::before{
          content:""; position:absolute; inset:0; background: var(--accent-2); transform: translateY(100%); transition: transform .35s ease; z-index:0;
        }
        .client-cell:hover::before{ transform: translateY(0); }
        .client-cell:hover .idx, .client-cell:hover .client-name{ color: #fff; }
        .client-cell > *{ position: relative; z-index: 1; }
        .client-cell .idx{ color: var(--muted); font-size: 11px; letter-spacing: .06em; }
        .client-name{ font-family: var(--font-display); font-weight: 500; font-size: clamp(16px, 1.4vw, 20px); letter-spacing: -0.015em; margin-top: auto; }
        .clients-note{ font-size: 10.5px; color: var(--muted); letter-spacing: .04em; margin-top: 16px; }
      `}</style>
    </section>
  );
}

window.Clients = Clients;
