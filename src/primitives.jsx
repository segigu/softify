function Section({id, label, title, lead, children, className="", eyebrow, screen}){
  return (
    <section id={id} className={`section ${className}`} data-screen-label={screen||id}>
      <div className="wrap">
        {label && <div className="eyebrow" style={{marginBottom:18}}>{label}</div>}
        {title && <h2 style={{maxWidth: 16+'ch', marginBottom: 18}}>{title}</h2>}
        {lead && <p className="lead" style={{marginBottom: 56}}>{lead}</p>}
        {children}
      </div>
    </section>
  );
}

function Reveal({children, delay=0, as:Tag="div", style, className=""}){
  const ref = React.useRef(null);
  React.useEffect(()=>{
    const el = ref.current; if(!el) return;
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ setTimeout(()=>el.classList.add('in'), delay); io.disconnect(); }});
    }, {threshold: .15, rootMargin: '0px 0px -50px 0px'});
    io.observe(el);
    return ()=> io.disconnect();
  }, [delay]);
  return <Tag ref={ref} className={`fade-up ${className}`} style={style}>{children}</Tag>;
}

function BrandMark({size=24}){
  // Real Softify mark from softify.ru — three cyan chevrons (language-neutral).
  return (
    <img
      className="brand-mark"
      src="assets/softify-mark.png"
      width={size * 280/150}
      height={size}
      alt=""
      aria-hidden
    />
  );
}

window.Section = Section;
window.Reveal = Reveal;
window.BrandMark = BrandMark;
