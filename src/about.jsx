function About(){
  return (
    <section id="about" className="section about" data-screen-label="02 About">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-left">
            <div className="eyebrow">About the company</div>
            <h2>
              Part of <a href="https://emg.fm" target="_blank" rel="noopener" className="emg-pill">EMG</a><br/>
              <span style={{color:'var(--muted)', fontWeight: 400}}>— Russia&rsquo;s leading radio broadcaster.</span>
            </h2>
          </div>
          <div className="about-right">
            <p className="lead">
              Softify LLC is part of the <a href="https://emg.fm" target="_blank" rel="noopener" className="emg-link"><strong>European Media Group</strong></a> — the country&rsquo;s largest radio holding.
              We build internal enterprise software used every day by newsrooms, advertising departments, accountants
              and legal teams across the holding&rsquo;s radio stations.
            </p>
            <div className="about-cards">
              <div className="about-card">
                <div className="num mono">01</div>
                <div>
                  <h4>Radio advertising sales</h4>
                  <p>Working with advertisers and putting material on air.</p>
                </div>
              </div>
              <div className="about-card">
                <div className="num mono">02</div>
                <div>
                  <h4>Document workflow</h4>
                  <p>An internal document circulation system across every level of the holding.</p>
                </div>
              </div>
              <div className="about-card">
                <div className="num mono">03</div>
                <div>
                  <h4>Accounting &amp; finance</h4>
                  <p>Consolidated bookkeeping and management accounting.</p>
                </div>
              </div>
              <div className="about-card">
                <div className="num mono">04</div>
                <div>
                  <h4>IT support</h4>
                  <p>Round-the-clock support for infrastructure and business applications.</p>
                </div>
              </div>
            </div>

            <div className="asterisk mono">
              * Mediascope · Radio Index · Russia 100K+ · Daily/Weekly Reach · AQH Share · 12+
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .about-grid{ display:grid; grid-template-columns: 1fr 1.3fr; gap: clamp(32px, 5vw, 80px); align-items: start; }
        @media (max-width: 960px){ .about-grid{ grid-template-columns: 1fr; } }
        .about-left h2{ margin-top: 18px; }
        .emg-pill{
          display:inline-flex; align-items:center; padding: 0 12px;
          border: 1.5px solid var(--fg); border-radius: 999px;
          font-family: var(--font-mono); font-size: .5em; letter-spacing: .08em;
          vertical-align: middle; position: relative; top: -0.15em;
          color: var(--fg); transition: background .2s ease, color .2s ease, border-color .2s ease;
        }
        .emg-pill:hover{ background: var(--fg); color: var(--bg); }
        .emg-link{ border-bottom: 1px dashed var(--line-strong); transition: color .2s ease, border-color .2s ease; }
        .emg-link:hover{ color: var(--accent-2); border-color: var(--accent-2); }
        .about-cards{
          margin-top: 32px; display:grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }
        @media (max-width: 700px){ .about-cards{ grid-template-columns: 1fr; } }
        .about-card{
          background: var(--bg); padding: 22px; display:flex; gap: 18px; align-items: flex-start;
          transition: background .25s ease;
        }
        .about-card:hover{ background: var(--bg-2); }
        .about-card .num{ color: var(--muted); font-size: 12px; min-width: 22px; padding-top: 2px; }
        .about-card h4{ margin-bottom: 6px; }
        .about-card p{ color: var(--fg-2); font-size: 14px; line-height: 1.5; }
        .asterisk{ margin-top: 20px; color: var(--muted); font-size: 11px; letter-spacing: .04em; }
      `}</style>
    </section>
  );
}

window.About = About;
