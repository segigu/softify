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
        <a href="#contact" className="btn btn-primary" style={{padding:'10px 16px', fontSize:13}}>
          Get in touch <span className="arr">→</span>
        </a>
      </div>
    </header>
  );
}

window.Nav = Nav;
