import { ArrowUpRight } from "lucide-react";
import { ASSETS } from "../../lib/constants";
import { SectionLabel } from "../SectionLabel";

// Legacy homepage section, no longer rendered (homepage redesign, Oct 2026).
// Acoustic Sanctuary feature ("Personalized sound architecture…").
export function AcousticSanctuarySection() {
  return (
    <>
      {/* Half-Grid Feature: Image & Editorial Balance (Direct Elementis Pattern) */}
      <section className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          {/* Half image */}
          <div className="lg:col-span-6 relative overflow-hidden min-h-[380px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-border">
            <img
              src={ASSETS.soundStudio}
              alt="Sonic Identity Studio synthesizers and analog acoustic instruments"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-deep-charcoal/20" />
          </div>

          {/* Half editorial content */}
          <div className="lg:col-span-6 p-8 sm:p-14 lg:p-20 flex flex-col justify-between bg-card/40">
            <div className="space-y-6">
              <SectionLabel title="Acoustic Sanctuary" number="02" />

              <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-foreground font-normal leading-[1.12]">
                Personalized sound architecture, innovation, and frequency meet in synergy.
              </h3>

              <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed max-w-xl">
                We reject aggressive digital synthesizer tropes and off-the-shelf stock royalty
                tracks. Instead, we compose with acoustic warmth, analog depth, calibrated 432Hz and
                528Hz harmonic tunings, and crystal acoustic resonance designed specifically for
                women in leadership.
              </p>
            </div>

            <div className="pt-10">
              <a
                href="#atelier"
                className="group inline-flex items-center gap-3 border border-foreground/60 px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] text-sand hover:bg-sand hover:text-deep-charcoal transition-all"
              >
                <span>Audition Sound Lab</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
