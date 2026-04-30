function Clients(){
  // Real EMG holding brands, in DOM order from softify.ru.
  const stations = [
    { name: "EMG",              href: "https://emg.fm",        logo: "assets/stations/emg.svg",              note: "parent group" },
    { name: "Europa Plus",      href: "https://europaplus.ru", logo: "assets/stations/europa-plus.svg" },
    { name: "Dorozhnoe Radio",  href: "https://dorognoe.ru",   logo: "assets/stations/dorozhnoe.svg" },
    { name: "Retro FM",         href: "https://retrofm.ru",    logo: "assets/stations/retro-fm.svg" },
    { name: "Radio 7",          href: "https://radio7.ru",     logo: "assets/stations/radio-7.svg" },
    { name: "Novoe Radio",      href: "https://newradio.ru",   logo: "assets/stations/novoe-radio.svg" },
    { name: "Studio 21",        href: "https://studio21.ru",   logo: "assets/stations/studio-21.svg" },
    { name: "Kalina Krasnaya",  href: "https://kalina.fm",     logo: "assets/stations/kalina-krasnaya.svg" },
    { name: "Eldoradio",        href: "https://eldoradio.ru",  logo: "assets/stations/eldoradio.svg" },
    { name: "Profile",          href: "https://profile.ru",    logo: "assets/stations/profile.svg",          note: "business weekly" },
  ];
  return (
    <section id="clients" className="section clients" data-screen-label="09 Clients">
      <div className="wrap">
        <div className="clients-head">
          <div>
            <div className="eyebrow">Clients</div>
            <h2>Our software runs the brands of <span style={{color:'var(--muted)'}}>the <a href="https://emg.fm" target="_blank" rel="noopener" className="emg-link">European Media Group</a>.</span></h2>
          </div>
          <p className="lead" style={{maxWidth: '40ch'}}>
            We build products for internal use across the holding — which means our
            systems are battle-tested in daily, production-grade operation.
          </p>
        </div>

        <div className="clients-grid">
          {stations.map((s, i)=>(
            <a key={i} href={s.href} target="_blank" rel="noopener" className="client-cell" aria-label={s.name}>
              <span className="mono idx">{String(i+1).padStart(2,'0')}{s.note ? ` · ${s.note}` : ''}</span>
              <span className="client-logo">
                <img src={s.logo} alt={s.name} loading="lazy"/>
              </span>
              <span className="client-name">{s.name}</span>
            </a>
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
        .clients-head .emg-link{ color: var(--fg); border-bottom: 1px dashed var(--line-strong); transition: color .2s ease, border-color .2s ease; }
        .clients-head .emg-link:hover{ color: var(--accent-2); border-color: var(--accent-2); }

        .clients-grid{ display:grid; grid-template-columns: repeat(5, 1fr); gap: 0;
          border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        @media (max-width: 1100px){ .clients-grid{ grid-template-columns: repeat(3, 1fr); }}
        @media (max-width: 700px){ .clients-grid{ grid-template-columns: repeat(2, 1fr); }}

        .client-cell{ padding: 22px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line);
          display:flex; flex-direction: column; justify-content: space-between; min-height: 160px;
          transition: background .2s ease; position: relative; overflow: hidden; color: var(--fg); gap: 14px; }
        .client-cell:hover{ background: var(--bg-2); }

        .client-cell .idx{ color: var(--muted); font-size: 10.5px; letter-spacing: .06em; }
        .client-logo{ display:flex; align-items: center; justify-content: flex-start; flex: 1; min-height: 56px; }
        .client-logo img{
          max-height: 48px; max-width: 100%; width: auto; object-fit: contain; object-position: left center;
          filter: grayscale(1) contrast(0.85); opacity: .68;
          transition: filter .25s ease, opacity .25s ease, transform .25s ease;
        }
        html[data-theme="dark"] .client-logo img{ filter: grayscale(1) contrast(0.85) invert(1); opacity: .72; }
        .client-cell:hover .client-logo img{ filter: none; opacity: 1; transform: scale(1.04); }
        html[data-theme="dark"] .client-cell:hover .client-logo img{ filter: none; }

        .client-name{ font-family: var(--font-display); font-weight: 500; font-size: 14px; letter-spacing: -0.01em; color: var(--fg-2); }
        .client-cell:hover .client-name{ color: var(--accent-2); }

        .clients-note{ font-size: 10.5px; color: var(--muted); letter-spacing: .04em; margin-top: 16px; }
      `}</style>
    </section>
  );
}

window.Clients = Clients;
