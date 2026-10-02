import { ASSETS } from "../../lib/constants";

// Brand-kit homepage section, ported from the approved redesign handoff (sections.html).
// Copy is word for word from the handoff; styles live in src/styles/brand-kit.css.
export function TheArchitect() {
  return (
    <section className="si si-about si-paper si-grain" id="about">
      <div className="si-wrap si-about__grid">
        <figure className="si-about__photo">
          <img src={ASSETS.chayennePortrait} alt="Chayenne Mallari" loading="lazy" />
          <figcaption className="si-mono">
            <span>Chayenne Mallari</span>
            <span>Sound architect</span>
          </figcaption>
        </figure>
        <div className="si-about__copy">
          <p className="si-mono si-kicker">(07) The architect</p>
          <h2 className="si-display">
            Built by someone who’s <em>done</em> the work.
          </h2>
          <div className="si-body si-body--dark">
            <p>
              <strong>Hi, I’m Chayenne.</strong> I’m a sound architect. My work sits where classical
              composition, neuroscience and luxury brand strategy meet.
            </p>
            <p>
              I believe every woman who leads already has a sound. Most never hear it, because they
              were taught to brand for the eyes and borrow for the ears.
            </p>
            <p>I built Sonic Identity for them.</p>
            <p>
              We map your archetype first, then build the sound: audio logos, walk-on themes, and
              the rooms your clients step into. Not off a trending list. Not off a stock library.
              From you.
            </p>
          </div>
          <a className="si-btn si-btn--red" href="#inquiry">
            Claim your sound
          </a>
        </div>
      </div>
    </section>
  );
}
