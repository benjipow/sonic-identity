import { ASSETS } from "../lib/constants";

/**
 * Faithful recreation of the Elementis.co hero:
 * full-bleed background, venetian-blind mask, huge serif marquee
 * scrolling horizontally, and a bottom bar with a centered tagline,
 * "Scroll to Explore", and a down arrow.
 */
export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-deep-charcoal">
      {/* Full-bleed alligator skin background image with Chayenne Mallari */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroAlligatorBg}
          alt="Chayenne Mallari, Sound Architect against luxury alligator skin texture - Sonic Identity"
          className="h-full w-full object-cover object-center"
        />
        {/* Solid black behind the woman — radial mask keeps her centered figure visible,
            surrounding background falls to pure deep charcoal/black */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 38% 62% at 50% 48%, rgba(10,8,9,0) 0%, rgba(10,8,9,0.35) 48%, rgba(10,8,9,0.92) 78%, #0a0809 100%)",
          }}
        />
        {/* Ground the bottom navigation bar */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-charcoal to-transparent pointer-events-none" />
      </div>

      {/* Center — huge serif marquee scrolling horizontally (Elementis hero title) */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full overflow-hidden">
          <h1 className="sr-only">Sound • Architecture • Frequency • Identity</h1>
          <div className="animate-marquee whitespace-nowrap will-change-transform">
            <span className="font-serif-luxury text-[14vw] sm:text-[12vw] lg:text-[10.5vw] leading-none tracking-[-0.02em] text-sand font-normal inline-block">
              Sound&nbsp;•&nbsp;Architecture&nbsp;•&nbsp;Frequency&nbsp;•&nbsp;Identity&nbsp;•&nbsp;
            </span>
            <span className="font-serif-luxury text-[14vw] sm:text-[12vw] lg:text-[10.5vw] leading-none tracking-[-0.02em] text-sand font-normal inline-block">
              Sound&nbsp;•&nbsp;Architecture&nbsp;•&nbsp;Frequency&nbsp;•&nbsp;Identity&nbsp;•&nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar — centered tagline + scroll prompt + down arrow (Elementis layout) */}
      <div className="absolute inset-x-0 bottom-0 z-30">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          {/* Top hairline border spanning the content width */}
          <div className="h-px w-full bg-sand/25" />
        </div>
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 py-6 sm:py-8">
          <div className="flex flex-col items-center gap-5 text-center">
            {/* Down arrow icon (Elementis hero arrow) */}
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-sand animate-bounce"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.452431 10.9351C0.228003 10.7107 0.228003 10.3384 0.452431 10.114C0.676859 9.88959 1.04908 9.88959 1.27351 10.114L5.90394 14.7444L5.90393 0.819627C5.90393 0.502145 6.17763 0.2394 6.48416 0.2394C6.80164 0.2394 7.06439 0.502145 7.06439 0.819629L7.06439 14.7454L11.6957 10.114C11.9202 9.88959 12.2924 9.88959 12.5168 10.114C12.7412 10.3384 12.7412 10.7107 12.5168 10.9351L6.89516 16.5567C6.83478 16.6171 6.7637 16.6613 6.68769 16.6892C6.62419 16.7134 6.55556 16.7266 6.48417 16.7266C6.40304 16.7266 6.32548 16.7095 6.25498 16.6786C6.18898 16.6507 6.12737 16.61 6.07408 16.5567L0.452431 10.9351Z"
                fill="currentColor"
              />
            </svg>

            {/* Centered two-line tagline */}
            <p className="font-serif-luxury text-lg sm:text-xl lg:text-2xl text-sand/95 font-light leading-snug tracking-tight">
              A sonic revolution for visionary
              <br />
              women-led brands
            </p>

            {/* Scroll to Explore */}
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-sand/70">
              Scroll to Explore
            </span>
          </div>
        </div>
      </div>

      {/* Play indicator (Elementis hero play glyph) */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 hidden sm:block">
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-sand/80"
        >
          <path
            d="M13.125 6.91747C13.9583 7.39859 13.9583 8.60141 13.125 9.08253L3.375 14.7117C2.54167 15.1928 1.5 14.5914 1.5 13.6292L1.5 2.37084C1.5 1.40858 2.54167 0.807178 3.375 1.2883L13.125 6.91747Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
}
