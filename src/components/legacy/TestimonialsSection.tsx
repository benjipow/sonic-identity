import { SectionLabel } from "../SectionLabel";

// Legacy homepage section, no longer rendered (homepage redesign, Oct 2026).
// Client Resonance testimonials.
export function TestimonialsSection() {
  return (
    <>
      {/* Words From Visionary Founders (Elementis Clean Quote Grid) */}
      <section className="py-24 sm:py-32 border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-16 space-y-3">
            <SectionLabel title="Client Resonance" number="07" />
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-foreground font-normal">
              Words From Visionary Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border">
            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-card/40">
              <p className="font-serif-luxury text-lg sm:text-xl text-foreground/90 font-light leading-relaxed italic">
                "When our audio logo plays at the start of our podcast and live masterminds, our
                attendees literally get goosebumps. Chayenne translated our brand into four pure
                notes."
              </p>
              <div className="pt-4 border-t border-border font-mono text-xs">
                <div className="text-sand font-medium">Sienna R. Delacroix</div>
                <div className="text-stone text-[11px] tracking-wider uppercase mt-0.5">
                  Founder, Delacroix Haute Perfumery
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-card/60">
              <p className="font-serif-luxury text-lg sm:text-xl text-foreground/90 font-light leading-relaxed italic">
                "We had spent hundreds of thousands on our visual rebrand, yet our events and media
                still sounded generic. Working with Chayenne gave our company an acoustic footprint
                that feels undeniably sovereign."
              </p>
              <div className="pt-4 border-t border-border font-mono text-xs">
                <div className="text-sand font-medium">Victoria Kensington</div>
                <div className="text-stone text-[11px] tracking-wider uppercase mt-0.5">
                  Managing Partner, Astraea Ventures
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-card/40">
              <p className="font-serif-luxury text-lg sm:text-xl text-foreground/90 font-light leading-relaxed italic">
                "Chayenne engineered the spatial soundscape for our 3 flagship spa sanctuaries.
                Guests constantly inquire about the music—it immediately slows their breathing and
                elevates our brand value."
              </p>
              <div className="pt-4 border-t border-border font-mono text-xs">
                <div className="text-sand font-medium">Elena Thorne</div>
                <div className="text-stone text-[11px] tracking-wider uppercase mt-0.5">
                  CEO & Creative Director, Thorne Botanicals
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
