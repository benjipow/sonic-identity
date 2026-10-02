import { SonicPlayer } from "../SonicPlayer";
import { SectionLabel } from "../SectionLabel";

// Legacy homepage section, no longer rendered (homepage redesign, Oct 2026).
// Original Audio Lab wrapper (#atelier) with heading and intro. The redesign renders <SonicPlayer /> on its own under Meet the Lab.
export function AtelierSection() {
  return (
    <>
      {/* Interactive Sound Architecture Demo / Atelier Audio Lab */}
      <section id="atelier" className="py-24 sm:py-32 border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 space-y-3">
            <SectionLabel title="The Audio Lab" number="03" />
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-foreground font-normal tracking-tight">
              Step Into the Sonic Atelier.
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Audition live acoustic frequency syntheses crafted for high-jewelry, executive keynote
              entrances, luxury spa environments, and digital audio trademarks.
            </p>
          </div>

          <SonicPlayer />
        </div>
      </section>
    </>
  );
}
