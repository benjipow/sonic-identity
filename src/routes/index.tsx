import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ASSETS, SITE_URL } from "../lib/constants";
import { SectionLabel } from "../components/SectionLabel";
import { SonicInquiryForm } from "../components/SonicInquiryForm";
import { Hero } from "../components/Hero";
import { TransformationSection } from "../components/BeforeAfterSlider";
import { TheProblem } from "../components/brand-kit/TheProblem";
import { BrandBand } from "../components/brand-kit/BrandBand";
import { ThreeWaysIn } from "../components/brand-kit/ThreeWaysIn";
import { MeetTheLab } from "../components/brand-kit/MeetTheLab";
import { FreeGuide } from "../components/brand-kit/FreeGuide";
import { TheArchitect } from "../components/brand-kit/TheArchitect";

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
      { property: "og:image", content: `${SITE_URL}${ASSETS.alligatorSkin}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}${ASSETS.alligatorSkin}` },
    ],
  }),
  component: HomePage,
});

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
            <a href="#audio-lab" className="hover:text-sand transition-colors">
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

      {/* Before / After Sonic Transformation */}
      <TransformationSection />

      {/* Brand-kit redesign sections (Oct 2026) */}
      <TheProblem />
      <BrandBand />
      <ThreeWaysIn />
      {/* Includes the original Audio Lab player, hidden until "Enter the Audio Lab" */}
      <MeetTheLab />
      <FreeGuide />
      <TheArchitect />

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
                <a href="#services" className="hover:text-sand transition-colors">
                  Sound Architecture
                </a>
              </div>
              <div>
                <a href="#audio-lab" className="hover:text-sand transition-colors">
                  Audio Lab
                </a>
              </div>
              <div>
                <a href="#audio-lab" className="hover:text-sand transition-colors">
                  Visual & Sound Gallery
                </a>
              </div>
              <div>
                <a href="#about" className="hover:text-sand transition-colors">
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
