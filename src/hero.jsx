function Hero({animOn=true}){
  return (
    <section id="top" className="hero" data-screen-label="01 Hero">
      <div className="wrap hero-grid">
        <div className="hero-meta">
          <div className="eyebrow">IT × Broadcasting / Moscow</div>
          <div className="hero-index mono">— 01 / Home</div>
        </div>

        <div className="hero-head">
          <h1>
            <span className="h1-line">Software for the air.</span>
            <span className="h1-line dim">From scheduling to&nbsp;financial accounting.</span>
          </h1>
        </div>

        <HeroWave animOn={animOn} />

        <div className="hero-foot">
          <p className="lead">
            We build the IT systems that power the largest radio stations in Russia.
            From broadcast scheduling to document workflow and analytics — we streamline the whole stack.
          </p>
          <div className="hero-ctas">
            <a href="#products" className="btn btn-primary">Products <span className="arr">→</span></a>
            <a href="#contact"  className="btn btn-ghost">Start a project</a>
          </div>
        </div>

        <div className="hero-strip">
          <div className="strip-item"><span className="mono-num">04</span><span>products in the suite</span></div>
          <div className="strip-item"><span className="mono-num">15+</span><span>years on the market</span></div>
          <div className="strip-item"><span className="mono-num">EMG</span><span>European Media Group</span></div>
          <div className="strip-item"><span className="mono-num">№564</span><span>state IT accreditation</span></div>
        </div>
      </div>
      <style>{`
        .hero{ padding: clamp(40px, 6vw, 72px) 0 clamp(60px, 8vw, 110px); position: relative; overflow: hidden; }
        .hero-grid{
          display:grid;
          grid-template-columns: 1fr;
          gap: clamp(28px, 4vw, 56px);
        }
        .hero-meta{
          display:flex; align-items:center; justify-content:space-between;
          color: var(--muted); font-family: var(--font-mono); font-size: 12px; letter-spacing: .08em; text-transform: uppercase;
        }
        .hero-head h1{ max-width: 16ch; }
        .h1-line{ display:block; }
        .h1-line.dim{ color: var(--muted); font-weight: 400; }
        .hero-foot{
          display:grid; grid-template-columns: 1.3fr 1fr; gap: clamp(24px, 4vw, 72px);
          align-items: end;
          padding-top: clamp(12px, 2vw, 24px);
          border-top: 1px solid var(--line);
        }
        @media (max-width: 860px){ .hero-foot{ grid-template-columns: 1fr; } }
        .hero-ctas{ display:flex; gap: 12px; flex-wrap: wrap; justify-content: flex-end; }
        @media (max-width: 860px){ .hero-ctas{ justify-content: flex-start; } }

        .hero-strip{
          display:grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          margin-top: clamp(20px, 3vw, 40px);
        }
        @media (max-width: 860px){ .hero-strip{ grid-template-columns: 1fr 1fr; } }
        .strip-item{
          padding: 16px 20px; border-right: 1px solid var(--line);
          display:flex; flex-direction: column; gap: 4px;
          font-family: var(--font-mono); font-size: 12px; color: var(--muted);
          letter-spacing: .04em; text-transform: uppercase;
        }
        .strip-item:last-child{ border-right: none; }
        @media (max-width: 860px){
          .strip-item:nth-child(2){ border-right: none; }
        }
        .mono-num{
          font-family: var(--font-display); font-weight: 500;
          color: var(--fg); font-size: clamp(22px, 2vw, 30px); letter-spacing: -0.02em; text-transform: none;
        }
      `}</style>
    </section>
  );
}

function HeroWave({animOn}){
  const canvasRef = React.useRef(null);
  const [hovering, setHovering] = React.useState(false);

  React.useEffect(()=>{
    const c = canvasRef.current; if(!c) return;
    const ctx = c.getContext('2d');
    let raf, t0 = performance.now();
    let w=0, h=0, dpr=1;
    let target = { mx: .5, my: .5, amp: 1, boost: 0 };
    let eased = { mx: .5, my: .5, amp: 1, boost: 0 };

    function resize(){
      const r = c.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    resize();
    const ro = new ResizeObserver(resize); ro.observe(c);

    function onMove(e){
      const r = c.getBoundingClientRect();
      target.mx = (e.clientX - r.left) / r.width;
      target.my = (e.clientY - r.top) / r.height;
      target.boost = 1;
    }
    function onLeave(){ target.mx = .5; target.my = .5; target.boost = 0; }
    c.addEventListener('pointermove', onMove);
    c.addEventListener('pointerleave', onLeave);

    function getCss(v){ return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }

    function frame(now){
      const t = (now - t0) / 1000;
      // ease toward targets
      const k = 0.08;
      eased.mx += (target.mx - eased.mx) * k;
      eased.my += (target.my - eased.my) * k;
      eased.boost += (target.boost - eased.boost) * 0.06;

      ctx.clearRect(0,0,w,h);

      const fg = getCss('--fg') || '#0E1116';
      const accent = getCss('--accent-2') || '#3B82F6';
      const lineCol = getCss('--line-strong') || 'rgba(14,17,22,.22)';

      // Grid backdrop
      ctx.save();
      ctx.globalAlpha = .5;
      ctx.strokeStyle = getCss('--line') || 'rgba(14,17,22,.08)';
      ctx.lineWidth = 1;
      const gx = 40;
      for(let x = 0; x <= w; x += gx){
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      ctx.restore();

      // Baseline
      ctx.strokeStyle = lineCol;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, h/2); ctx.lineTo(w, h/2); ctx.stroke();

      // Multiple sine lines stacked in depth
      const lines = 14;
      const maxAmp = Math.min(h*0.38, 140);
      const cursorPull = (eased.my - .5) * 2;     // -1..1
      const speed = animOn ? 1 : 0;

      for(let i = 0; i < lines; i++){
        const pct = i / (lines - 1);     // 0..1
        const alpha = 0.08 + pct * 0.92;
        const freq = 0.006 + pct * 0.010;
        const phase = t * (0.6 + pct * 1.8) * speed;
        const ampBase = maxAmp * (0.25 + pct * 0.85);
        const amp = ampBase * (1 + eased.boost * 0.35);

        ctx.beginPath();
        for(let x = 0; x <= w; x += 2){
          // Distance from cursor x in px — local lift.
          const cursorX = eased.mx * w;
          const dist = Math.abs(x - cursorX);
          const bump = Math.exp(-(dist*dist) / (180*180)) * eased.boost * 60 * (0.4 + pct*0.8);

          const y = h/2
            + Math.sin(x * freq + phase) * amp
            + Math.sin(x * freq * 2.1 + phase*1.3) * amp * 0.25
            + cursorPull * amp * 0.08
            - bump * Math.sign(0.5 - (eased.my));

          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }

        // Color: fade from fg->accent for top few lines
        const useAccent = i > lines - 4;
        ctx.strokeStyle = hexWithAlpha(useAccent ? accent : fg, alpha * (useAccent ? 0.9 : 0.55));
        ctx.lineWidth = useAccent ? 1.4 : 1;
        ctx.stroke();
      }

      // Ticker of numbers along baseline
      ctx.save();
      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.fillStyle = getCss('--muted') || '#6B7280';
      ctx.textBaseline = 'top';
      const step = 90;
      const offset = animOn ? ((t*22) % step) : 0;
      for(let x = -step + offset; x < w + step; x += step){
        ctx.fillText(fmtHz(Math.round(x*10)), x, h - 18);
      }
      ctx.restore();

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return ()=>{
      cancelAnimationFrame(raf);
      ro.disconnect();
      c.removeEventListener('pointermove', onMove);
      c.removeEventListener('pointerleave', onLeave);
    };
  }, [animOn]);

  return (
    <div className="hero-wave" onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>
      <div className="wave-frame">
        <canvas ref={canvasRef} aria-hidden />
        <div className="wave-tl mono">RX 01 · stable signal</div>
        <div className="wave-tr mono">{hovering ? '◉ live' : '○ preview'}</div>
        <div className="wave-bl mono">move your cursor</div>
        <div className="wave-br mono">24/7</div>
      </div>
      <style>{`
        .hero-wave{ position: relative; }
        .wave-frame{
          position: relative;
          height: clamp(260px, 38vw, 460px);
          border: 1px solid var(--line);
          border-radius: 12px;
          overflow: hidden;
          background: var(--bg);
        }
        .wave-frame canvas{ width:100%; height:100%; display:block; }
        .wave-tl,.wave-tr,.wave-bl,.wave-br{
          position:absolute; font-size:11px; color: var(--muted);
          letter-spacing: .06em; text-transform: uppercase;
        }
        .wave-tl{ top: 14px; left: 16px; }
        .wave-tr{ top: 14px; right: 16px; color: var(--accent-2); }
        .wave-bl{ bottom: 14px; left: 16px; }
        .wave-br{ bottom: 14px; right: 16px; }
      `}</style>
    </div>
  );
}

function hexWithAlpha(hex, a){
  if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;
  let h = hex.replace('#','');
  if (h.length === 3) h = h.split('').map(c=>c+c).join('');
  const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}
function fmtHz(n){
  const mhz = (87.5 + (n % 2000)/2000 * 20).toFixed(1);
  return `${mhz} MHz`;
}

window.Hero = Hero;
