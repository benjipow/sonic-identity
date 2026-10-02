// Brand-kit homepage section, ported from the approved redesign handoff (sections.html).
// Copy is word for word from the handoff; styles live in src/styles/brand-kit.css.
export function TheProblem() {
  return (
    <section className="si si-problem" id="the-problem">
      <div className="si-wrap si-problem__grid">
        <div>
          <p className="si-mono si-kicker">(03) The problem</p>
          <h2 className="si-display">
            Most founders built a brand people can see… and no one can <em>hear</em>.
          </h2>
          <div className="si-body">
            <p className="si-lead">Not for lack of taste. They’re building half a brand.</p>
            <p>
              She did the subconscious work. She paid the coaches. She signed off on the logo, the
              palette, the photoshoot.
            </p>
            <p>
              Then she opened the app and picked the same trending sound as everyone else in her
              feed.
            </p>
            <p>
              The result? She looks expensive. She sounds borrowed. And the room forgets her by the
              next post.
            </p>
            <p className="si-fix">The fix isn’t another trending sound.</p>
          </div>
          <p className="si-hand si-hand--lit">It’s a sound you own.</p>
        </div>
        <figure className="si-problem__art">
          <img src="/textures/groove-portrait.svg" alt="" aria-hidden="true" />
          <figcaption className="si-mono si-credits">Track 03 · Prod. CM · 2026</figcaption>
        </figure>
      </div>
    </section>
  );
}
