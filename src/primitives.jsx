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
  // Rounded-square mark inspired by the original softify.ru favicon aesthetic:
  // a solid tile with a waveform glyph cut through it.
  return (
    <svg className="brand-mark" width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="0" y="0" width="32" height="32" rx="7" fill="currentColor"/>
      <path d="M5 16 C 8 16, 8 9, 11 9 C 14 9, 14 23, 17 23 C 20 23, 20 11, 23 11 C 26 11, 26 18, 29 18"
        stroke="var(--bg)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

window.Section = Section;
window.Reveal = Reveal;
window.BrandMark = BrandMark;
