// Brand-kit homepage section, ported from the approved redesign handoff (sections.html).
// Copy is word for word from the handoff; styles live in src/styles/brand-kit.css.
export function ThreeWaysIn() {
  return (
    <section className="si si-ways" id="services">
      <div className="si-wrap">
        <p className="si-mono si-kicker">(04) Three ways in…</p>
        <h2 className="si-display si-ways__title">
          Own your <em>sound</em>.
        </h2>
        <div className="si-ways__grid">
          <article className="si-card">
            <div className="si-card__skin si-skin--croc">
              <div className="si-plate si-plate--bone">
                <p className="si-mono">Flagship</p>
                <h3 className="si-display">The Signature Sonic Identity</h3>
              </div>
            </div>
            <p className="si-mono si-card__label">Build the whole sound</p>
            <p className="si-card__desc">
              3-note and 5-note audio logos, a brand anthem in 90, 60 and 30-second cuts, and a
              walk-on theme for the stage. Delivered with your sonic brand guidelines and master
              audio vault.
            </p>
            <a className="si-btn si-btn--ghost" href="#inquiry">
              Reserve the suite
            </a>
          </article>
          <article className="si-card">
            <div className="si-card__skin si-skin--zebra">
              <span className="si-mono si-tag">Most selected</span>
              <div className="si-plate si-plate--ox">
                <p className="si-mono">Diagnostic</p>
                <h3 className="si-display">Sonic Audit &amp; Frequency Refresh</h3>
              </div>
            </div>
            <p className="si-mono si-card__label">Hear what you sound like now</p>
            <p className="si-card__desc">
              A full audit of your podcast, video, events and ads. You get a competitor sound
              analysis, your sound archetype and palette, and a 14-day upgrade playbook.
            </p>
            <a className="si-btn si-btn--ghost" href="#inquiry">
              Book the audit
            </a>
          </article>
          <article className="si-card">
            <div className="si-card__skin si-skin--leopard">
              <div className="si-plate si-plate--ox">
                <p className="si-mono">Atmospheres</p>
                <h3 className="si-display">Atmospheric Spaces &amp; Sanctuaries</h3>
              </div>
            </div>
            <p className="si-mono si-card__label">Score the room</p>
            <p className="si-card__desc">
              Ambient soundscapes for boutiques, spas, summits and retreats. Loop design, speaker
              placement and room advice, and a launch-night soundscape.
            </p>
            <a className="si-btn si-btn--ghost" href="#inquiry">
              Curate a space
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
