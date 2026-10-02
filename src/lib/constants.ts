// Production origin, used where a full URL is required (og:image / twitter:image).
export const SITE_URL = "https://thesonicidentity.com";

// All images are self-hosted from /public/images (moved off the GoHighLevel CDN).
export const ASSETS = {
  // Chayenne Mallari portrait on alligator skin texture (hero, The Architect, social preview)
  heroAlligatorBg: "/images/chayenne-portrait.png",
  alligatorSkin: "/images/chayenne-portrait.png",
  chayennePortrait: "/images/chayenne-portrait.png",
  alligatorSkinAlt: "/images/croc-leather-texture.jpg",
  // Brand-board slide "Personality & Voice" (was misnamed heroPortrait)
  brandBoardPersonality: "/images/brand-board-personality-voice.png",
  soundStudio: "/images/brand-board-visual-style.png",
  acousticAtmosphere: "/images/brand-board-logo-wordmark.png",
  brandCollateral: "/images/brand-board-typography.png",
  editorialPortrait: "/images/brand-board-color-palette.jpg",
};

// Shown when an inquiry fails to send, so the visitor still has a way to reach Chayenne.
// TODO: confirm the address before launch — the error message omits it while empty.
export const CONTACT = {
  email: "",
};

export const CRM_CONFIG = {
  endpoint: "https://backend.leadconnectorhq.com/external-tracking/events",
  locationId: "UrtSUZP8lUbC6kubja9Z",
  trackingId: "tk_86d76fed8e7045919a109051b39005ce",
  projectId: "1790806133931036680",
  customFields: {
    package: "wL782sGzVwRK0ks6RgQI",
    industry: "whDnocSMzqXEUTC8UPXC",
    brandStory: "klOllZgm9RYYpytEQ7O2",
  },
};
