import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ASSETS } from "../lib/constants";
import { SonicPlayer } from "../components/SonicPlayer";
import { SonicInquiryForm } from "../components/SonicInquiryForm";
import { Hero } from "../components/Hero";
import { TransformationSection } from "../components/BeforeAfterSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sonic Identity | Chayenne Mallari — Sound Architect",
      },
      {
        name: "description",
        content:
          "Bespoke sound architecture for women-led enterprises. Acoustic authority, frequency branding, audio logos, and atmospheric soundscapes designed by Chayenne Mallari.",
      },
      {
        property: "og:title",
        content: "Sonic Identity | Chayenne Mallari — Sound Architect",
      },
      {
        property: "og:description",
        content:
          "Acoustic prestige for women-led brands. Sonic branding, signature audio logos, and immersive acoustic architecture.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ASSETS.alligatorSkin },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ASSETS.alligatorSkin },
    ],
  }),
  component: HomePage,
});

function SectionLabel({ title, number }: { title: string; number?: string }) {
  return (
    <div className="flex items-center gap-3 text-stone mb-4">
      <svg
        width="12"
        height="15"
        viewBox="0 0 13 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.94753e-05 1.20954V0H12.0661V1.46243L8.94753e-05 1.20954ZM8.94753e-05 14.7904V16H12.0661V14.5375L8.94753e-05 14.7904ZM0 8.73043V7.52255L5.19475 7.52089H5.90313H6.87124L12.066 7.52255V8.73043H0Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-xs font-mono uppercase tracking-[0.25em] text-stone">{title}</span>
      {number && <span className="text-xs font-mono text-stone/60 ml-auto">({number})</span>}
    </div>
  );
}

function ZapButton() {
  const [zapping, setZapping] = useState(false);
  return (
    <a
      href="#inquiry"
      onClick={() => {
        setZapping(true);
        window.setTimeout(() => setZapping(false), 520);
      }}
      className={`group relative inline-flex items-center gap-2 border border-foreground/60 px-5 py-2.5 text-xs font-mono tracking-[0.2em] uppercase text-sand hover:bg-brand-red hover:text-sand hover:border-brand-red transition-colors duration-300 overflow-visible ${zapping ? "zapping" : ""}`}
    >
      <span>Claim Your Sound</span>
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-terracotta selection:text-sand">
      {/* Elementis-Style Navigation Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.08em] text-brand-red font-normal block leading-none">
              SONIC IDENTITY
            </span>
            <span className="hidden sm:inline-block text-[10px] tracking-[0.3em] text-primary uppercase font-mono pl-3 border-l border-border">
              by Chayenne Mallari
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10 text-[11px] font-mono tracking-[0.25em] uppercase text-stone">
            <a href="#philosophy" className="hover:text-sand transition-colors">
              Philosophy
            </a>
            <a href="#atelier" className="hover:text-sand transition-colors">
              Audio Lab
            </a>
          </nav>

          <ZapButton />
        </div>
      </header>

      {/* Hero — Faithful recreation of Elementis.co */}
      <Hero />

      {/* Introduction / The Acoustic Imperative (Split Grid like Elementis Story) */}
      <section id="philosophy" className="py-24 sm:py-32 border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left label & narrative */}
            <div className="lg:col-span-5 space-y-6">
              <SectionLabel title="Introduction" number="01" />

              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-foreground font-normal leading-[1.08] tracking-tight">
                Your Brand Has a Look. <br />
                <span className="italic font-light text-primary">Now Give It a Soul.</span>
              </h2>

              <p className="text-stone font-mono text-xs uppercase tracking-[0.2em] pt-2">
                Neuroscience of Auditory Cognition
              </p>
            </div>

            {/* Right detailed paragraph & metrics */}
            <div className="lg:col-span-7 space-y-8 lg:pt-8 text-muted-foreground font-light text-base sm:text-lg leading-relaxed">
              <p>
                Neuroscience proves that human hearing registers in less than 0.14 seconds — faster
                than sight, touch, or conscious language. Yet 95% of visionary women founders rely
                solely on visual brand guidelines, leaving their most potent emotional frequency
                uncurated.
              </p>
              <p>
                At <strong className="text-brand-red font-medium">Sonic Identity</strong>, Chayenne
                Mallari engineers the definitive acoustic blueprint for women-led enterprises:
                bespoke 3-note and 5-note audio logos, keynote walk-on themes, high-touch retail
                soundscapes, and harmonic frequency tunings that anchor sovereign authority.
              </p>

              {/* Elementis-style numbered points */}
              <div className="pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono">
                <div>
                  <div className="text-3xl text-sand font-serif-luxury font-normal">86%</div>
                  <div className="text-[11px] uppercase tracking-wider text-stone mt-1">
                    Higher Brand Recall Over Visual
                  </div>
                </div>
                <div>
                  <div className="text-3xl text-sand font-serif-luxury font-normal">0.14s</div>
                  <div className="text-[11px] uppercase tracking-wider text-stone mt-1">
                    Auditory Emotional Recognition
                  </div>
                </div>
                <div>
                  <div className="text-3xl text-sand font-serif-luxury font-normal">100%</div>
                  <div className="text-[11px] uppercase tracking-wider text-stone mt-1">
                    Worldwide Master Rights
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Before / After Sonic Transformation */}
      <TransformationSection />

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

      {/* The Story / Founder Profile (Elementis "The Story" Layout) */}
      <section id="story" className="py-24 sm:py-32 border-b border-border bg-card/30">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left image with minimal framing */}
            <div className="lg:col-span-5">
              <div className="border border-border relative overflow-hidden">
                <img
                  src={ASSETS.heroPortrait}
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

      {/* Inquiry Form Section (Direct Integration with Lead Tracking) */}
      <section className="py-24 sm:py-32 border-b border-border bg-card/20">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
          <SonicInquiryForm />
        </div>
      </section>

      {/* Elementis-Style Architectural Footer */}
      <footer className="bg-deep-charcoal text-stone py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-border">
            {/* Col 1 */}
            <div className="md:col-span-5 space-y-4">
              <span className="font-serif-luxury text-2xl tracking-[0.08em] text-brand-red font-normal block">
                SONIC IDENTITY
              </span>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-stone">
                By Chayenne Mallari
              </p>
              <p className="text-xs font-light text-muted-foreground/80 max-w-sm leading-relaxed pt-2">
                Premier Sound Architect crafting bespoke acoustic frequencies, audio trademarks, and
                sensory environments for women-led luxury and leadership enterprises.
              </p>
            </div>

            {/* Col 2 */}
            <div className="md:col-span-3 space-y-3 font-mono text-xs tracking-wider">
              <div className="text-sand uppercase tracking-[0.2em] mb-2 font-medium">Explore</div>
              <div>
                <a href="#philosophy" className="hover:text-sand transition-colors">
                  Philosophy
                </a>
              </div>
              <div>
                <a href="#architecture" className="hover:text-sand transition-colors">
                  Sound Architecture
                </a>
              </div>
              <div>
                <a href="#atelier" className="hover:text-sand transition-colors">
                  Audio Lab
                </a>
              </div>
              <div>
                <a href="#portfolio" className="hover:text-sand transition-colors">
                  Visual & Sound Gallery
                </a>
              </div>
              <div>
                <a href="#story" className="hover:text-sand transition-colors">
                  The Story
                </a>
              </div>
            </div>

            {/* Col 3 */}
            <div className="md:col-span-4 space-y-3 font-mono text-xs tracking-wider">
              <div className="text-sand uppercase tracking-[0.2em] mb-2 font-medium">
                Atelier Inquiries
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed font-light">
                Private consultations scheduled strictly by advance appointment.
              </p>
              <div className="pt-2">
                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-2 text-primary hover:text-sand uppercase tracking-[0.2em] transition-colors"
                >
                  <span>Transmit Inquiry</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone/70">
            <div>
              © {new Date().getFullYear()} <span className="text-brand-red">SONIC IDENTITY</span> BY
              CHAYENNE MALLARI. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-6">
              <span>FREQUENCY BRANDING</span>
              <span>•</span>
              <span>ACOUSTIC AUTHORITY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
