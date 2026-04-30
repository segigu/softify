function Footer(){
  return (
    <footer id="footer" className="footer" data-screen-label="13 Footer">
      <div className="wrap">
        <div className="foot-big">
          <span>softify</span>
          <BrandMark size={72}/>
        </div>
        <div className="foot-grid">
          <div className="fg-col">
            <div className="fg-k mono">COMPANY</div>
            <p>Softify, Limited Liability Company</p>
            <p className="mono fg-mono">OGRN 1117746825690</p>
            <p className="mono fg-mono">INN 7709887924</p>
            <p className="mono fg-mono">reg. №12570 · 29.10.2020</p>
          </div>
          <div className="fg-col">
            <div className="fg-k mono">ACCREDITATION</div>
            <p>State accreditation as an IT organization</p>
            <p className="mono fg-mono">Min. of Digital Dev. resolution №564</p>
            <p className="mono fg-mono">dated 29.10.2020</p>
            <div className="fg-badges">
              <span className="tag"><span className="dot"/> ACCREDITED</span>
              <span className="tag">SOFTWARE&nbsp;REGISTRY</span>
              <span className="tag">152‑FZ</span>
            </div>
          </div>
          <div className="fg-col">
            <div className="fg-k mono">LEADERSHIP</div>
            <p>CEO —<br/><strong>Alexander S. Kharzeev</strong></p>
            <p style={{marginTop: 8}}>Chief Accountant —<br/><strong>Olga A. Borisova</strong></p>
          </div>
          <div className="fg-col">
            <div className="fg-k mono">DOCUMENTS</div>
            <ul className="fg-docs">
              <li><a href="https://disk.yandex.ru/i/Lkj0KQvwNnWr8Q" target="_blank" rel="noopener">Privacy policy →</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div className="mono">© 2020–2026 · Softify LLC</div>
          <div className="mono">Moscow · 17 Bolshaya Andronyevskaya St.</div>
          <div className="mono">v2 · redesigned 2026</div>
        </div>
      </div>
      <style>{`
        .footer{ padding: var(--row) 0 clamp(40px, 4vw, 60px); border-top: 1px solid var(--line); }
        .foot-big{ display:flex; align-items: center; justify-content: space-between; gap: 24px;
          font-family: var(--font-display); font-weight: 500;
          font-size: clamp(72px, 16vw, 240px); line-height: .82; letter-spacing: -0.05em;
          padding-bottom: clamp(24px, 4vw, 60px);
          border-bottom: 1px solid var(--line); }
        .foot-big svg, .foot-big img{ flex-shrink: 0; opacity: .8; }
        .foot-grid{ display:grid; grid-template-columns: repeat(4, 1fr); gap: clamp(24px, 3vw, 48px); padding: clamp(32px, 4vw, 60px) 0;}
        @media (max-width: 900px){ .foot-grid{ grid-template-columns: 1fr 1fr; } }
        @media (max-width: 540px){ .foot-grid{ grid-template-columns: 1fr; } }
        .fg-col p{ font-size: 13px; color: var(--fg-2); line-height: 1.5; margin-bottom: 4px;}
        .fg-col strong{ color: var(--fg); font-weight: 500;}
        .fg-k{ font-size: 10.5px; color: var(--muted); letter-spacing: .08em; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid var(--line); }
        .fg-mono{ font-size: 11px; color: var(--muted); letter-spacing: .02em;}
        .fg-badges{ display:flex; gap: 6px; margin-top: 14px; flex-wrap: wrap;}
        .fg-docs{ list-style: none; margin: 0; padding: 0; display:flex; flex-direction: column; gap: 6px;}
        .fg-docs a{ font-size: 12.5px; color: var(--fg-2); border-bottom: 1px dashed transparent; transition: all .2s ease;}
        .fg-docs a:hover{ color: var(--accent-2); border-color: var(--accent-2);}
        .foot-bottom{ display:flex; justify-content: space-between; padding-top: 24px; border-top: 1px solid var(--line);
          font-size: 10.5px; color: var(--muted); letter-spacing: .06em; gap: 20px; flex-wrap: wrap;}
      `}</style>
    </footer>
  );
}

window.Footer = Footer;
