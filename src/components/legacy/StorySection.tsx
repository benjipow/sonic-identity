import { ASSETS } from "../../lib/constants";
import { SectionLabel } from "../SectionLabel";

// Legacy homepage section, no longer rendered (homepage redesign, Oct 2026).
// The Story / founder profile (#story).
export function StorySection() {
  return (
    <>
      {/* The Story / Founder Profile (Elementis "The Story" Layout) */}
      <section id="story" className="py-24 sm:py-32 border-b border-border bg-card/30">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left image with minimal framing */}
            <div className="lg:col-span-5">
              <div className="border border-border relative overflow-hidden">
                <img
                  src={ASSETS.brandBoardPersonality}
                  alt="Chayenne Mallari — Sound Architect"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 border-t border-border bg-background flex items-center justify-between text-xs font-mono text-stone uppercase tracking-widest">
                  <span>Chayenne Mallari</span>
                  <span>Sound Architect</span>
                </div>
              </div>
            </div>

            {/* Right Story narrative */}
            <div className="lg:col-span-7 space-y-8">
              <SectionLabel title="The Story" number="06" />

              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-foreground font-normal leading-[1.08]">
                "When a woman leads, her acoustic presence should command the room before she
                speaks."
              </h2>

              <div className="space-y-4 text-muted-foreground font-light text-base leading-relaxed">
                <p>
                  As a sound architect,{" "}
                  <strong className="text-sand font-medium">Chayenne Mallari</strong> bridges the
                  distinct realms of classical musical composition, neuroscience, and high-growth
                  luxury brand strategy.
                </p>
                <p>
                  Recognizing that contemporary branding had become overwhelmingly sterile and
                  visually saturated, Chayenne established{" "}
                  <strong className="text-brand-red font-medium">Sonic Identity</strong> to provide
                  visionary female founders with their most underutilized competitive asset:
                  visceral acoustic authority.
                </p>
                <p>
                  Her private client portfolio spans venture-backed female executives, luxury haute
                  parfumerie houses, regenerative beauty lines, and world-renowned boutique retreat
                  sanctuaries.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-8 text-xs font-mono uppercase tracking-[0.25em] text-stone">
                <span>• Acoustic Composition</span>
                <span>• Psychoacoustic Engineering</span>
                <span>• Sovereign Brand Authority</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
