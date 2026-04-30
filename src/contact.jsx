function Contact(){
  const [form, setForm] = React.useState({name: '', phone: '', company: '', message: '', topic: 'Consultation'});
  const [sent, setSent] = React.useState(false);
  const topics = ["Consultation", "EDM", "Mediator · Media Pilot", "DB:Regions", "Mediareport", "Other"];
  function submit(e){ e.preventDefault(); setSent(true); }

  return (
    <section id="contact" className="section contact" data-screen-label="12 Contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="eyebrow">Contact</div>
            <h2>Write<br/>to us.</h2>
            <div className="contact-details">
              <div className="cd-row">
                <div className="cd-k mono">phone</div>
                <a className="cd-v" href="tel:+74957999797">+7 (495) 799‑97‑97</a>
              </div>
              <div className="cd-row">
                <div className="cd-k mono">email</div>
                <a className="cd-v" href="mailto:contact@softify.ru">contact@softify.ru</a>
              </div>
              <div className="cd-row">
                <div className="cd-k mono">address</div>
                <div className="cd-v">17 Bolshaya Andronyevskaya St.,<br/>Moscow 109544, Russia</div>
              </div>
              <div className="cd-row">
                <div className="cd-k mono">hours</div>
                <div className="cd-v">Mon–Fri · 09:00–19:00 (MSK)<br/><span className="mono" style={{color:'var(--accent-2)', fontSize:11}}>24/7 support</span></div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            {!sent ? (
              <>
                <div className="cf-label mono">01 / topic</div>
                <div className="cf-topics">
                  {topics.map(t=>(
                    <button type="button" key={t}
                      className={`cf-chip ${form.topic===t?'on':''}`}
                      onClick={()=>setForm({...form, topic:t})}>{t}</button>
                  ))}
                </div>

                <div className="cf-row">
                  <div className="cf-field">
                    <label className="mono">02 / name</label>
                    <input type="text" required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="John Smith"/>
                  </div>
                  <div className="cf-field">
                    <label className="mono">03 / phone</label>
                    <input type="tel" required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="+1 (___) ___‑____"/>
                  </div>
                </div>

                <div className="cf-field">
                  <label className="mono">04 / company</label>
                  <input type="text" value={form.company} onChange={e=>setForm({...form, company:e.target.value})} placeholder="Acme Radio Ltd."/>
                </div>

                <div className="cf-field">
                  <label className="mono">05 / message</label>
                  <textarea rows="3" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Describe your task, budget or demo request."/>
                </div>

                <div className="cf-foot">
                  <p className="mono cf-policy">
                    By clicking &ldquo;Send&rdquo;, you agree to our{' '}
                    <a href="https://disk.yandex.ru/i/Lkj0KQvwNnWr8Q" target="_blank" rel="noopener">privacy policy</a>.
                  </p>
                  <button className="btn btn-primary" type="submit">Send <span className="arr">→</span></button>
                </div>
              </>
            ) : (
              <div className="cf-done">
                <div className="mono" style={{color:'var(--accent-2)', fontSize:12, letterSpacing:'.08em'}}>● MESSAGE RECEIVED</div>
                <h3 style={{marginTop: 14}}>Thanks, {form.name || 'friend'}!</h3>
                <p className="lead" style={{marginTop: 10}}>We&rsquo;ll get back to you about &ldquo;{form.topic}&rdquo; within one business day.</p>
                <button className="btn btn-ghost" type="button" onClick={()=>{setSent(false); setForm({name:'',phone:'',company:'',message:'',topic:'Consultation'})}} style={{marginTop: 20}}>Send another</button>
              </div>
            )}
          </form>
        </div>
      </div>
      <style>{`
        .contact-grid{ display:grid; grid-template-columns: 1fr 1.3fr; gap: clamp(32px, 5vw, 80px); align-items: start;}
        @media (max-width: 960px){ .contact-grid{ grid-template-columns: 1fr; } }
        .contact-left h2{ margin-top: 18px; }
        .contact-details{ margin-top: 40px; border-top: 1px solid var(--line); }
        .cd-row{ display:grid; grid-template-columns: 90px 1fr; padding: 18px 0; border-bottom: 1px solid var(--line); gap: 16px;}
        .cd-k{ font-size: 10.5px; color: var(--muted); letter-spacing: .08em; text-transform: uppercase; padding-top: 4px;}
        .cd-v{ font-family: var(--font-display); font-weight: 500; font-size: clamp(16px, 1.4vw, 20px); letter-spacing: -0.015em; color: var(--fg); }
        a.cd-v:hover{ color: var(--accent-2); }

        .contact-form{ border: 1px solid var(--line); padding: clamp(24px, 3vw, 40px); border-radius: 8px; background: var(--bg); display:flex; flex-direction: column; gap: 22px;}
        .cf-label{ font-size: 10.5px; color: var(--muted); letter-spacing: .08em;}
        .cf-topics{ display:flex; flex-wrap:wrap; gap: 6px; margin-top: -14px;}
        .cf-chip{ font-family: var(--font-mono); font-size: 11px; padding: 6px 10px; border-radius: 999px; border: 1px solid var(--line); color: var(--muted); letter-spacing: .02em;}
        .cf-chip.on{ border-color: var(--fg); background: var(--fg); color: var(--bg);}
        .cf-row{ display:grid; grid-template-columns: 1fr 1fr; gap: 16px;}
        @media (max-width: 600px){ .cf-row{ grid-template-columns: 1fr; } }
        .cf-field{ display:flex; flex-direction: column; gap: 6px;}
        .cf-field label{ font-size: 10.5px; color: var(--muted); letter-spacing: .08em; }
        .cf-field input, .cf-field textarea{
          width: 100%; padding: 12px 14px; background: transparent; border: 1px solid var(--line-strong);
          border-radius: 6px; font-family: var(--font-body); font-size: 15px; color: var(--fg); outline: none; transition: border-color .2s ease; resize: vertical;
        }
        .cf-field input:focus, .cf-field textarea:focus{ border-color: var(--accent-2); }
        .cf-foot{ display:flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;}
        .cf-policy{ font-size: 10.5px; color: var(--muted); max-width: 40ch;}
        .cf-policy a{ text-decoration: underline;}
        .cf-done{ padding: 20px 0; }
      `}</style>
    </section>
  );
}

window.Contact = Contact;
