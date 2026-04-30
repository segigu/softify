function ProductsIntro(){
  return (
    <section id="products" className="section products-intro" data-screen-label="03 Products intro">
      <div className="wrap">
        <div className="eyebrow">Products / 4</div>
        <div className="products-headline">
          <h2>
            An ecosystem of four<br/>products that cover<br/>
            <span style={{color:'var(--muted)'}}>the full operating cycle of a media holding.</span>
          </h2>
          <ol className="products-list mono">
            <li><a href="#edm"><span>01 / EDM</span> <span className="tail">document workflow</span></a></li>
            <li><a href="#mediator"><span>02 / Mediator · Media&nbsp;Pilot</span> <span className="tail">on-air schedule</span></a></li>
            <li><a href="#bd-regions"><span>03 / DB:Regions</span> <span className="tail">licenses &amp; contracts</span></a></li>
            <li><a href="#mediareport"><span>04 / Mediareport</span> <span className="tail">BI &amp; reporting</span></a></li>
          </ol>
        </div>
      </div>
      <style>{`
        .products-headline{ display:grid; grid-template-columns: 1.4fr 1fr; gap: clamp(32px, 5vw, 80px); align-items: end; margin-top: 24px;}
        @media (max-width: 960px){ .products-headline{ grid-template-columns: 1fr; } }
        .products-list{ list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--line); }
        .products-list li{ border-bottom: 1px solid var(--line); }
        .products-list a{
          display:flex; justify-content: space-between; align-items: center;
          padding: 14px 0; font-size: 13px; color: var(--fg);
          transition: padding .25s ease, color .25s ease;
        }
        .products-list a:hover{ padding-left: 10px; color: var(--accent-2); }
        .products-list .tail{ color: var(--muted); font-size: 11px; letter-spacing: .06em; text-transform: uppercase; }
      `}</style>
    </section>
  );
}

function ProductBand({idx, id, name, subtitle, tagline, features, children, meta, reverse=false, screen}){
  return (
    <section id={id} className="section product-band" data-screen-label={screen}>
      <div className="wrap">
        <div className={`pb-grid ${reverse ? 'reverse' : ''}`}>
          <div className="pb-info">
            <div className="pb-index mono">{String(idx).padStart(2,'0')} / 04</div>
            <div className="pb-name">
              <h3>{name}</h3>
              {subtitle && <div className="pb-subtitle mono">{subtitle}</div>}
            </div>
            <p className="pb-tagline">{tagline}</p>
            <ul className="pb-features">
              {features.map((f, i) => (
                <li key={i}>
                  <span className="pb-marker mono">{String(i+1).padStart(2,'0')}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <span className="pb-desc"> — {f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            {meta && (
              <div className="pb-meta">
                {meta.map((m,i)=>(
                  <div key={i} className="pb-meta-item">
                    <span className="mono">{m.k}</span>
                    <span>{m.v}</span>
                  </div>
                ))}
              </div>
            )}
            <a href="#contact" className="btn btn-ghost" style={{marginTop: 28}}>Request a demo <span className="arr">→</span></a>
          </div>
          <div className="pb-visual">{children}</div>
        </div>
      </div>
      <style>{`
        .product-band{ padding: var(--row) 0; }
        .pb-grid{ display:grid; grid-template-columns: 1fr 1.25fr; gap: clamp(32px, 5vw, 80px); align-items: stretch; }
        .pb-grid.reverse{ grid-template-columns: 1.25fr 1fr; }
        .pb-grid.reverse .pb-info{ order: 2; }
        .pb-grid.reverse .pb-visual{ order: 1; }
        @media (max-width: 1000px){
          .pb-grid, .pb-grid.reverse{ grid-template-columns: 1fr; }
          .pb-grid.reverse .pb-info{ order: 1; }
          .pb-grid.reverse .pb-visual{ order: 2; }
        }
        .pb-info{ display:flex; flex-direction: column; gap: 18px; }
        .pb-index{ color: var(--muted); font-size: 12px; letter-spacing: .06em; }
        .pb-name h3{ font-size: clamp(32px, 4.2vw, 64px); line-height: 1; letter-spacing: -0.03em; font-weight: 500; }
        .pb-subtitle{ color: var(--muted); font-size: 12px; letter-spacing: .08em; text-transform: uppercase; margin-top: 10px; transition: color .25s ease; }
        .product-band:hover .pb-subtitle{ color: var(--accent-2); }
        .pb-tagline{ font-size: clamp(16px, 1.2vw, 19px); color: var(--fg-2); line-height: 1.5; max-width: 46ch; }
        .pb-features{ list-style: none; margin: 8px 0 0; padding: 0; display:flex; flex-direction: column; gap: 14px; border-top: 1px solid var(--line); padding-top: 20px; }
        .pb-features li{ display:flex; gap: 14px; align-items: baseline; font-size: 14px; line-height: 1.55; }
        .pb-marker{ color: var(--muted); font-size: 11px; min-width: 22px; }
        .pb-features strong{ font-weight: 500; color: var(--fg); }
        .pb-desc{ color: var(--fg-2); }
        .pb-meta{ display:flex; gap: 28px; margin-top: 18px; flex-wrap: wrap; }
        .pb-meta-item{ display:flex; flex-direction: column; gap: 2px; font-size: 11px; color: var(--muted); letter-spacing: .06em; text-transform: uppercase; }
        .pb-meta-item .mono{ color: var(--fg); font-size: 20px; letter-spacing: -0.01em; text-transform: none; font-family: var(--font-display); font-weight: 500;}
        .pb-visual{
          position: relative; min-height: 420px;
          border: 1px solid var(--line); border-radius: 12px;
          background: var(--bg-2);
          overflow: hidden;
          display:flex;
        }
      `}</style>
    </section>
  );
}

window.ProductsIntro = ProductsIntro;
window.ProductBand = ProductBand;
