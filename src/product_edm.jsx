function ProductEDM(){
  // Interactive document approval timeline mockup
  const steps = [
    { t: "14:02", who: "Initiator", status: "done",   title: "Document created: Contract №2026‑04‑17", meta: "Service agreement" },
    { t: "14:18", who: "Department head", status: "done",  title: "Approved", meta: "A. Kharzeev" },
    { t: "15:44", who: "Legal", status: "active", title: "In review", meta: "waiting 1d 2h" },
    { t: "—",     who: "Finance control", status: "queued", title: "Queued", meta: "—" },
    { t: "—",     who: "CEO", status: "queued", title: "Queued", meta: "—" },
  ];
  const [focus, setFocus] = React.useState(2);

  return (
    <ProductBand
      idx={1} id="edm" screen="04 Product · EDM"
      name="EDM"
      subtitle="Document workflow system"
      tagline="Contract and finance approvals, an electronic archive, and correspondence handling — all in a single workspace."
      features={[
        { title: "Document approvals", desc: "contracts, barter deal sheets, addenda" },
        { title: "Financial expenses", desc: "decisions on projects, requests and funding applications" },
        { title: "Electronic archive", desc: "long-term storage of documents in digital form" },
        { title: "Correspondence", desc: "inbound, outbound documents, courier orders" },
      ]}
      meta={[
        { k: "up to 70%", v: "faster approvals" },
        { k: "5", v: "roles per route" },
      ]}
    >
      <div className="edm-mock">
        <div className="edm-head">
          <div className="edm-tabs">
            <div className="edm-tab active">Route</div>
            <div className="edm-tab">Card</div>
            <div className="edm-tab">Archive</div>
          </div>
          <div className="edm-badge mono">№2026‑04‑17 · in review</div>
        </div>
        <div className="edm-body">
          <ol className="edm-steps">
            {steps.map((s, i) => (
              <li key={i}
                className={`edm-step ${s.status} ${focus===i?'focus':''}`}
                onMouseEnter={()=>setFocus(i)}>
                <div className="edm-time mono">{s.t}</div>
                <div className="edm-dot"><span/></div>
                <div className="edm-info">
                  <div className="edm-who mono">{s.who}</div>
                  <div className="edm-title">{s.title}</div>
                  <div className="edm-meta mono">{s.meta}</div>
                </div>
                <div className="edm-status mono">
                  {s.status==='done' && '✓ approved'}
                  {s.status==='active' && '● in progress'}
                  {s.status==='queued' && '○ waiting'}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <style>{`
        .edm-mock{ width:100%; display:flex; flex-direction:column; background: var(--bg); }
        .edm-head{ display:flex; justify-content:space-between; align-items:center; padding: 14px 18px; border-bottom: 1px solid var(--line); }
        .edm-tabs{ display:flex; gap: 6px; }
        .edm-tab{
          font-family: var(--font-mono); font-size: 11px; letter-spacing:.06em; text-transform: uppercase;
          padding: 6px 10px; border: 1px solid var(--line); border-radius: 4px; color: var(--muted);
        }
        .edm-tab.active{ background: var(--fg); color: var(--bg); border-color: var(--fg); }
        .edm-badge{
          font-size: 11px; color: var(--muted); padding: 6px 10px; border: 1px solid var(--line); border-radius: 4px;
        }
        .edm-body{ padding: 22px 18px; flex:1; }
        .edm-steps{ list-style: none; margin: 0; padding: 0; position: relative; }
        .edm-steps::before{
          content:""; position: absolute; left: 72px; top: 18px; bottom: 18px; width: 1px;
          background: var(--line);
        }
        .edm-step{
          display:grid; grid-template-columns: 56px 20px 1fr auto; align-items: center;
          gap: 14px; padding: 10px 8px; border-radius: 6px; position: relative;
          transition: background .2s ease;
          cursor: default;
        }
        .edm-step.focus{ background: var(--bg-2); }
        .edm-time{ font-size: 11px; color: var(--muted); }
        .edm-dot{ display:flex; justify-content:center; }
        .edm-dot span{ width: 10px; height: 10px; border-radius: 50%; background: var(--line-strong); display:block; border: 2px solid var(--bg); }
        .edm-step.done .edm-dot span{ background: var(--fg); }
        .edm-step.active .edm-dot span{ background: var(--accent-2); box-shadow: 0 0 0 4px color-mix(in oklab, var(--accent-2) 22%, transparent); animation: pulse 1.6s ease-in-out infinite; }
        @keyframes pulse{ 50%{ box-shadow: 0 0 0 9px color-mix(in oklab, var(--accent-2) 0%, transparent); } }
        .edm-who{ font-size: 10.5px; color: var(--muted); letter-spacing: .06em; text-transform: uppercase; }
        .edm-title{ font-size: 14px; line-height: 1.3; margin: 2px 0; color: var(--fg); }
        .edm-meta{ font-size: 11px; color: var(--muted); }
        .edm-status{ font-size: 11px; color: var(--muted); white-space: nowrap; }
        .edm-step.done .edm-status{ color: color-mix(in oklab, var(--fg) 70%, var(--muted)); }
        .edm-step.active .edm-status{ color: var(--accent-2); }
        @media (max-width: 600px){
          .edm-step{ grid-template-columns: 44px 18px 1fr; }
          .edm-status{ display:none; }
        }
      `}</style>
    </ProductBand>
  );
}

window.ProductEDM = ProductEDM;
