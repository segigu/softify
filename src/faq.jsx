function FAQ(){
  const items = [
    { q: "Can we buy your products outside the EMG holding?",
      a: "Our solutions are built for the radio holding, but on request we’re happy to discuss deployments at adjacent media organizations — drop us a note and we’ll put together a proposal." },
    { q: "What technologies do you use?",
      a: "Back-end in Java and .NET, front-end in React/TypeScript, PostgreSQL and MS SQL, ETL-based integrations, on-premise and hybrid infrastructure." },
    { q: "Are you state-accredited?",
      a: "Yes. Softify LLC is an accredited IT organization, Russian Ministry of Digital Development resolution №564 dated 29.10.2020. Registration number 12570, OGRN 1117746825690, INN 7709887924." },
    { q: "What does the rollout look like?",
      a: "Three phases: process and integration audit, pilot at a single branch, gradual rollout to the rest. A typical pilot runs 6–8 weeks." },
    { q: "Support and SLA?",
      a: "Round-the-clock L2/L3 support. SLA is agreed individually — for critical on-air systems response time goes down to 15 minutes." },
    { q: "Where is the data stored?",
      a: "On the holding’s servers in Moscow. All systems run on-premise; data never leaves the customer perimeter." },
  ];
  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" className="section faq" data-screen-label="11 FAQ">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2>Frequent<br/>questions.</h2>
            <p className="lead" style={{marginTop: 24, maxWidth: '38ch'}}>
              Didn’t find an answer? Write to us — we reply within one business day.
            </p>
          </div>
          <div className="faq-list">
            {items.map((it, i)=>(
              <div key={i} className={`faq-row ${open===i?'open':''}`}>
                <button className="faq-q" onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}>
                  <span className="mono idx">{String(i+1).padStart(2,'0')}</span>
                  <span className="faq-qtext">{it.q}</span>
                  <span className="faq-plus" aria-hidden>{open===i ? '–' : '+'}</span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{it.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .faq-grid{ display:grid; grid-template-columns: 1fr 1.6fr; gap: clamp(32px, 5vw, 80px); align-items: start;}
        @media (max-width: 960px){ .faq-grid{ grid-template-columns: 1fr; } }
        .faq-list{ border-top: 1px solid var(--line); }
        .faq-row{ border-bottom: 1px solid var(--line); }
        .faq-q{ width: 100%; display:grid; grid-template-columns: 36px 1fr auto; gap: 16px; align-items: center;
          padding: 22px 0; text-align: left; font-family: inherit; color: var(--fg); transition: padding .25s ease;}
        .faq-q:hover{ padding-left: 8px; }
        .faq-q .idx{ color: var(--muted); font-size: 11px;}
        .faq-qtext{ font-family: var(--font-display); font-weight: 500; font-size: clamp(17px, 1.5vw, 22px); letter-spacing: -0.015em; }
        .faq-plus{ font-family: var(--font-display); font-size: 28px; color: var(--muted); width: 24px; text-align:center; line-height: 1;}
        .faq-row.open .faq-plus{ color: var(--accent-2); }
        .faq-a{ max-height: 0; overflow: hidden; transition: max-height .4s ease; }
        .faq-row.open .faq-a{ max-height: 240px; }
        .faq-a-inner{ padding: 0 0 22px 52px; max-width: 64ch; color: var(--fg-2); font-size: 15px; line-height: 1.55;}
      `}</style>
    </section>
  );
}

window.FAQ = FAQ;
