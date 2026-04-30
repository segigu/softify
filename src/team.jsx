function Team(){
  const competences = [
    "Back‑end (Java, .NET, Node.js)",
    "Front‑end (React, TypeScript)",
    "1C: ERP, Accounting, Document workflow",
    "Databases: PostgreSQL, MS SQL",
    "BI & integrations (ETL)",
    "DevOps / infrastructure",
    "Systems & business analysis",
    "Maintenance & L2/L3 support",
  ];
  return (
    <section id="team" className="section team" data-screen-label="10 Team">
      <div className="wrap">
        <div className="team-grid">
          <div>
            <div className="eyebrow">Team</div>
            <h2>Multi-disciplinary<br/>specialists —<br/><span style={{color:'var(--muted)'}}>one project team.</span></h2>
          </div>
          <div className="team-right">
            <p className="lead">
              A breadth of skills lets us deliver projects across very different domains —
              from real-time on-air systems to financial accounting platforms.
            </p>
            <ul className="comp-list">
              {competences.map((c, i)=>(
                <li key={i}>
                  <span className="mono idx">{String(i+1).padStart(2,'0')}</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        .team-grid{ display:grid; grid-template-columns: 1fr 1.3fr; gap: clamp(32px, 5vw, 80px); align-items: start; }
        @media (max-width: 960px){ .team-grid{ grid-template-columns: 1fr; } }
        .team-grid h2{ margin-top: 18px; }
        .team-right .lead{ margin-bottom: 28px; }
        .comp-list{ list-style: none; margin: 0; padding: 0; display:grid; grid-template-columns: 1fr 1fr; gap: 0;
          border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        @media (max-width: 700px){ .comp-list{ grid-template-columns: 1fr; } }
        .comp-list li{ padding: 16px 18px; display:flex; gap: 12px; align-items: baseline;
          border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); font-size: 14px; color: var(--fg-2); }
        .comp-list .idx{ color: var(--muted); font-size: 11px; }
      `}</style>
    </section>
  );
}

window.Team = Team;
