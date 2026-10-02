import { ASSETS } from "../../lib/constants";
import { SectionLabel } from "../SectionLabel";

// Legacy homepage section, no longer rendered (homepage redesign, Oct 2026).
// Visual & Acoustic Synergy gallery (#portfolio).
export function PortfolioSection() {
  return (
    <>
      {/* Visual & Acoustic Gallery — Clean Architectural Mosaic */}
      <section id="portfolio" className="py-24 sm:py-32 border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-16 space-y-3">
            <SectionLabel title="Visual & Acoustic Synergy" number="05" />
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-foreground font-normal">
              High Aesthetic Meets Sound Precision
            </h2>
            <p className="text-sm text-muted-foreground font-light">
              Every frequency is engineered in unison with the physical, visual, and architectural
              realities of modern luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Gallery Item 1: Large Studio */}
            <div className="md:col-span-7 border border-border relative group overflow-hidden bg-card min-h-[380px] lg:min-h-[460px]">
              <img
                src={ASSETS.soundStudio}
                alt="Sonic Identity Atelier and hardware"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.25em]">
                  The Atelier
                </span>
                <h4 className="font-serif-luxury text-xl sm:text-2xl text-foreground font-normal">
                  Analog Warmth & Psychoacoustic Precision
                </h4>
              </div>
            </div>

            {/* Gallery Item 2: Organic Atmosphere */}
            <div className="md:col-span-5 border border-border relative group overflow-hidden bg-card min-h-[380px] lg:min-h-[460px]">
              <img
                src={ASSETS.acousticAtmosphere}
                alt="Organic acoustic atmosphere"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.25em]">
                  Biophilic Audio
                </span>
                <h4 className="font-serif-luxury text-xl sm:text-2xl text-foreground font-normal">
                  Resonance for Spaces & Sanctuaries
                </h4>
              </div>
            </div>

            {/* Gallery Item 3: Brand Collateral */}
            <div className="md:col-span-5 border border-border relative group overflow-hidden bg-card min-h-[340px]">
              <img
                src={ASSETS.brandCollateral}
                alt="Sonic Identity collateral and waveform branding"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.25em]">
                  Guidelines & Stems
                </span>
                <h4 className="font-serif-luxury text-xl text-foreground font-normal">
                  Acoustic Brand Playbooks
                </h4>
              </div>
            </div>

            {/* Gallery Item 4: Editorial Portrait */}
            <div className="md:col-span-7 border border-border relative group overflow-hidden bg-card min-h-[340px]">
              <img
                src={ASSETS.editorialPortrait}
                alt="Chayenne Mallari, Sound Architect"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.25em]">
                  Principal Direction
                </span>
                <h4 className="font-serif-luxury text-xl text-foreground font-normal">
                  Direct Collaboration With Chayenne Mallari
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
