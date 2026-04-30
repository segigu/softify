function readInitialTheme(){
  try {
    const saved = localStorage.getItem('softify-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {}
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

function Nav(){
  const items = [
    ["#about", "About"],
    ["#products", "Products"],
    ["#clients", "Clients"],
    ["#team", "Team"],
    ["#faq", "FAQ"],
    ["#contact", "Contact"],
  ];
  const [active, setActive] = React.useState("");
  const [theme, setTheme] = React.useState(readInitialTheme);

  React.useEffect(()=>{
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('softify-theme', theme); } catch {}
  }, [theme]);

  React.useEffect(()=>{
    const ids = items.map(([h])=> h.slice(1));
    const els = ids.map(id=> document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(entries=>{
      const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=> b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive("#"+visible[0].target.id);
    }, {rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.1, 0.5]});
    els.forEach(el => io.observe(el));
    return ()=> io.disconnect();
  }, []);

  function toggleTheme(){ setTheme(t => t === 'dark' ? 'light' : 'dark'); }

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="Softify">
          <BrandMark size={22}/> <span>softify</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {items.map(([h, l]) => (
            <a key={h} href={h} className={active===h ? 'active' : ''}>{l}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light' : 'Dark'}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <a href="#contact" className="btn btn-primary" style={{padding:'10px 16px', fontSize:13}}>
            Get in touch <span className="arr">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

window.Nav = Nav;
