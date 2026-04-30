// Tweak defaults — editable via host
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "cyan",
  "density": "comfortable",
  "heroAnim": true
}/*EDITMODE-END*/;

const ACCENTS = {
  cyan:    { accent: "#0B3A55", accent2: "#1FA9E8", ink: "#FFFFFF" },
  indigo:  { accent: "#0A1F44", accent2: "#3B82F6", ink: "#FFFFFF" },
  graphite:{ accent: "#0E1116", accent2: "#4B5563", ink: "#FFFFFF" },
  emerald: { accent: "#0A3D2F", accent2: "#10B981", ink: "#FFFFFF" },
  amber:   { accent: "#2A1A06", accent2: "#F59E0B", ink: "#FFFFFF" },
};

function applyTweaks(state){
  const html = document.documentElement;
  html.dataset.theme = state.theme;
  html.dataset.density = state.density;
  const a = ACCENTS[state.accent] || ACCENTS.cyan;
  html.style.setProperty("--accent", a.accent);
  html.style.setProperty("--accent-2", a.accent2);
  html.style.setProperty("--accent-ink", a.ink);
}

function useTweaks(){
  const [state, setState] = React.useState(TWEAK_DEFAULTS);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(()=>{ applyTweaks(state); }, [state]);

  React.useEffect(()=>{
    function onMsg(e){
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setVisible(true);
      if (d.type === '__deactivate_edit_mode') setVisible(false);
    }
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return ()=> window.removeEventListener('message', onMsg);
  }, []);

  function set(patch){
    const next = {...state, ...patch};
    setState(next);
    try { window.parent.postMessage({type:'__edit_mode_set_keys', edits: patch}, '*'); } catch {}
  }

  return { state, set, visible };
}

function TweaksPanel({state, set}){
  return (
    <div className="tweaks" role="dialog" aria-label="Tweaks">
      <h5>Tweaks</h5>

      <div className="tweak-row">
        <span>Theme</span>
        <div className="sw">
          <button aria-pressed={state.theme==='light'} onClick={()=>set({theme:'light'})} style={{background:'#FAFAF9'}}></button>
          <button aria-pressed={state.theme==='dark'} onClick={()=>set({theme:'dark'})} style={{background:'#0A0C10'}}></button>
        </div>
      </div>

      <div className="tweak-row">
        <span>Accent</span>
        <div className="sw">
          {Object.entries(ACCENTS).map(([k,v])=>(
            <button key={k} aria-pressed={state.accent===k} onClick={()=>set({accent:k})} style={{background:v.accent2}} title={k}></button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <span>Density</span>
        <div className="sw" style={{gap:4}}>
          <button aria-pressed={state.density==='comfortable'} onClick={()=>set({density:'comfortable'})} style={{width:'auto', padding:'2px 8px', borderRadius:6, fontFamily:'inherit', fontSize:11}}>comfy</button>
          <button aria-pressed={state.density==='compact'} onClick={()=>set({density:'compact'})} style={{width:'auto', padding:'2px 8px', borderRadius:6, fontFamily:'inherit', fontSize:11}}>compact</button>
        </div>
      </div>

      <div className="tweak-row">
        <span>Hero animation</span>
        <div className="sw" style={{gap:4}}>
          <button aria-pressed={state.heroAnim===true} onClick={()=>set({heroAnim:true})} style={{width:'auto', padding:'2px 8px', borderRadius:6, fontFamily:'inherit', fontSize:11}}>on</button>
          <button aria-pressed={state.heroAnim===false} onClick={()=>set({heroAnim:false})} style={{width:'auto', padding:'2px 8px', borderRadius:6, fontFamily:'inherit', fontSize:11}}>off</button>
        </div>
      </div>
    </div>
  );
}

window.useTweaks = useTweaks;
window.TweaksPanel = TweaksPanel;
