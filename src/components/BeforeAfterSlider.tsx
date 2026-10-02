import { useState, useRef, useCallback } from "react";
import { ASSETS } from "../lib/constants";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

/**
 * Before / After image comparison slider.
 * Drag, click, touch, or use arrow keys to reveal the transformation.
 */
export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={sliderRef}
      className="ba-slider group relative w-full overflow-hidden border border-border bg-card select-none"
      style={{ ["--pos" as string]: `${pos}%` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      role="slider"
      aria-label="Drag to compare before and after"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* AFTER image (underneath, full width) */}
      <img
        className="ba-img ba-after block w-full h-full object-cover pointer-events-none"
        src={afterImage}
        alt={afterAlt}
        draggable={false}
      />

      {/* BEFORE image (on top, clipped by slider position) */}
      <img
        className="ba-img ba-before absolute inset-0 h-full w-full object-cover pointer-events-none"
        src={beforeImage}
        alt={beforeAlt}
        draggable={false}
        style={{ clipPath: `inset(0 calc(100% - var(--pos)) 0 0)` }}
      />

      {/* Labels */}
      <span className="ba-label ba-label-before absolute top-4 left-4 px-3 py-1 rounded-full bg-deep-charcoal/70 text-sand text-xs font-mono uppercase tracking-[0.2em] pointer-events-none">
        {beforeLabel}
      </span>
      <span className="ba-label ba-label-after absolute top-4 right-4 px-3 py-1 rounded-full bg-deep-charcoal/70 text-sand text-xs font-mono uppercase tracking-[0.2em] pointer-events-none">
        {afterLabel}
      </span>

      {/* Divider line + handle */}
      <div
        className="ba-divider absolute top-0 bottom-0 w-[3px] bg-sand pointer-events-none"
        style={{ left: "var(--pos)", transform: "translateX(-50%)" }}
      >
        <div className="ba-handle absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-sand text-deep-charcoal grid place-items-center -translate-x-1/2 -translate-y-1/2 shadow-lg transition-transform group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 6 3 12 9 18" />
            <polyline points="15 6 21 12 15 18" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * Full "The Transformation" section with the before/after slider,
 * section label, heading, and copy. Extracted from index.tsx.
 */
export function TransformationSection() {
  return (
    <section className="py-24 sm:py-32 border-b border-border bg-card/25">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-12 space-y-3">
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
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-stone">
              The Transformation
            </span>
            <span className="text-xs font-mono text-stone/60 ml-auto">(02·5)</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-foreground font-normal tracking-tight">
            Drag to Reveal the Sonic Shift
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Slide between the before and after to witness how bespoke acoustic architecture
            transforms a brand's sensory presence from generic to sovereign.
          </p>
        </div>

        <BeforeAfterSlider
          beforeImage={ASSETS.acousticAtmosphere}
          afterImage={ASSETS.soundStudio}
          beforeAlt="Brand presence before sonic architecture"
          afterAlt="Brand presence after sonic architecture"
          beforeLabel="Before"
          afterLabel="After"
        />
      </div>
    </section>
  );
}
