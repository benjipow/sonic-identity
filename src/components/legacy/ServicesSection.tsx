import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../SectionLabel";

// Legacy homepage section, no longer rendered (homepage redesign, Oct 2026).
// Services / Curated Acoustic Offerings (#architecture).
export function ServicesSection() {
  return (
    <>
      {/* Services / Architecture Offerings — Elementis Multi-Point Inspection Layout */}
      <section id="architecture" className="py-24 sm:py-32 border-b border-border bg-card/25">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-border">
            <div className="space-y-3">
              <SectionLabel title="Architecture Services" number="04" />
              <h2 className="font-serif-luxury text-3xl sm:text-5xl text-foreground font-normal">
                Curated Acoustic Offerings
              </h2>
            </div>
            <p className="max-w-md text-xs font-mono uppercase tracking-wider text-stone">
              Every deliverable includes full worldwide commercial master rights, stem vault, and
              curated acoustic playbook.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border border border-border">
            {/* Tier 1 */}
            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-card/40">
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-stone uppercase tracking-widest">
                  <span>Point 01</span>
                  <span>Flagship</span>
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-foreground font-normal">
                  The Signature <span className="text-brand-red">Sonic Identity</span>
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  The complete acoustic blueprint for established women-led brands ready for
                  definitive sensory sovereignty.
                </p>
                <ul className="space-y-3 pt-2 text-xs font-mono text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>Official 3-note & 5-note Audio Logos (Stingers)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>Full Brand Anthem & Theme (90s, 60s, 30s cuts)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>Keynote / Walk-On Entrance Audio Signature</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>Sonic Brand Guidelines PDF & Master Audio Vault</span>
                  </li>
                </ul>
              </div>

              <a
                href="#inquiry"
                className="inline-flex items-center justify-between pt-6 border-t border-border text-xs font-mono uppercase tracking-[0.2em] text-sand hover:text-primary transition-colors"
              >
                <span>Reserve Bespoke Suite</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Tier 2 */}
            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-card/60 relative">
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-terracotta uppercase tracking-widest">
                  <span>Point 02</span>
                  <span className="border border-terracotta/50 px-2 py-0.5 text-[10px]">
                    Most Selected
                  </span>
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-foreground font-normal">
                  Sonic Audit & Frequency Refresh
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  An intensive diagnostic across your current audio touchpoints—podcasts, video
                  campaigns, events, and advertising.
                </p>
                <ul className="space-y-3 pt-2 text-xs font-mono text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>360° Acoustic Frequency & Touchpoint Audit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>Competitor Sonic Differentiation Analysis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>Curated Sound Archetype & Harmonic Palette</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>14-Day Priority Acoustic Upgrade Playbook</span>
                  </li>
                </ul>
              </div>

              <a
                href="#inquiry"
                className="inline-flex items-center justify-between pt-6 border-t border-border text-xs font-mono uppercase tracking-[0.2em] text-sand hover:text-primary transition-colors"
              >
                <span>Book Diagnostic Audit</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Tier 3 */}
            <div className="p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-card/40">
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-stone uppercase tracking-widest">
                  <span>Point 03</span>
                  <span>Atmospheres</span>
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-foreground font-normal">
                  Atmospheric Spaces & Sanctuaries
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Generative ambient soundscapes engineered for flagship boutiques, luxury spas,
                  wellness summits, and executive retreats.
                </p>
                <ul className="space-y-3 pt-2 text-xs font-mono text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>Custom 432Hz & 528Hz Biophilic Loop Architecture</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>Spatial Audio Placement & Room Acoustic Advisory</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>VIP Immersive Gala Launch Soundscape</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">+</span>
                    <span>High-Touch Nervous System Grounding Frequencies</span>
                  </li>
                </ul>
              </div>

              <a
                href="#inquiry"
                className="inline-flex items-center justify-between pt-6 border-t border-border text-xs font-mono uppercase tracking-[0.2em] text-sand hover:text-primary transition-colors"
              >
                <span>Curate Atmospheric Space</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
