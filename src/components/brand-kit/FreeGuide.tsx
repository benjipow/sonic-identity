// Brand-kit homepage section, ported from the approved redesign handoff (sections.html).
// Copy is word for word from the handoff; styles live in src/styles/brand-kit.css.
export function FreeGuide() {
  return (
    <section className="si si-guide" id="free-guide">
      <div className="si-wrap">
        <p className="si-mono si-label-plate">(06) Free guide</p>
        <h2 className="si-anton">
          The Sonic
          <br />
          Imprint
        </h2>
        <span className="si-hand-row">
          <span className="si-hand si-hand--lit">(it’s already yours.)</span>
        </span>
        <a className="si-btn si-btn--bone" href="#inquiry">
          Send me the guide <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
