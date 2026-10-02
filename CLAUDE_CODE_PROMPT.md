Paste everything below the line into Claude Code, run from inside the `sonic-identity` repo, with this handoff folder copied into the repo root as `_handoff/`.

---

You're porting an approved homepage redesign into this repo. The site is a single-page React app (Vite + Tailwind) deployed to Cloudflare from GitHub. Everything you need is in `_handoff/`. Read `_handoff/README.md` first: it has every change in page order, the exact final copy, and the launch checklist.

**Ground rules**
- Do not commit, push, or deploy anything until I explicitly say "approved, push it."
- Work on a new branch called `redesign/brand-kit-sections`.
- Keep the hero, the (01) Introduction, the (02) Transformation slider, the inquiry form and the footer exactly as they are, except for the anchor changes listed below.
- Copy text word for word from `_handoff/sections.html`. Don't rewrite copy.
- If anything in the repo doesn't match what I describe here, stop and tell me before guessing.

**Steps**

1. **Map the repo first.** Find the homepage component, the components for each existing section, where `#atelier` (the interactive Audio Lab) lives, and how the inquiry form submits. Report back in a short list before changing anything.

2. **Assets.**
   - Copy `_handoff/assets/fonts/*` to `public/fonts/` and `_handoff/assets/textures/*` to `public/textures/`.
   - Add `_handoff/fonts.css` and `_handoff/styles.css` to the global styles, rewriting their `url('assets/fonts/…')` and `url('assets/textures/…')` paths to `/fonts/…` and `/textures/…`.
   - Keep the `si-` class prefix so nothing collides with Tailwind.

3. **Move images off GoHighLevel.** Every image currently loads from `https://vibe.filesafe.space/...`. Download each one into `public/images/` with a descriptive filename (for example `chayenne-portrait.png` for `b305cbf3-…png`) and update every reference, including the OG image meta tag. If a download is blocked, list it and keep going.

4. **Remove** the "Acoustic Sanctuary" section ("Personalized sound architecture, innovation, and frequency meet in synergy."). Also remove these from the homepage render: Services (`#architecture`), Visual & Acoustic Synergy (`#portfolio`), The Story (`#story`), and Client Resonance (testimonials). Don't delete their component files yet; just stop rendering them.

5. **Renumber** the Transformation section's label from "(02·5)" to "(02)".

6. **Add the new sections** directly after the Transformation section, as React components that reproduce `_handoff/sections.html` exactly, in this order:
   - `TheProblem` (id `the-problem`)
   - `BrandBand`
   - `ThreeWaysIn` (id `services`)
   - `MeetTheLab` (id `audio-lab`)
   - `FreeGuide` (id `free-guide`)
   - `TheArchitect` (id `about`)
   
   Use the local portrait from step 3 in `TheArchitect`. Keep the inline vinyl SVG markup as is.

7. **Audio Lab toggle.** Replace `_handoff/script.js` with React state. Render the existing Audio Lab component directly under `MeetTheLab`, hidden by default. The "Enter the Audio Lab" button toggles it, flips its label to "Close the Audio Lab" and its icon from ▶ to ■, adds `is-open` to the `si-lab` section so the record spins, sets `aria-expanded`, and scrolls the lab into view when it opens. Confirm the lab's sounds still play.

8. **Anchors.** Update nav and footer links: `#atelier` → `#audio-lab`, `#architecture` → `#services`, `#portfolio` → `#audio-lab`, `#story` → `#about`.

9. **Inquiry form: report only.** Tell me exactly how it submits today. I believe the fields have no `name` attributes and it posts to itself, so nothing arrives. Propose a fix, but don't implement it until I choose a destination.

10. **Preview.** Run the dev server and give me the local URL. Take screenshots at 1440px and 390px wide, top to bottom, and compare them against `_handoff/preview.html` opened at the same widths. Fix any differences. Then confirm:
    - nothing scrolls sideways on mobile
    - the Audio Lab toggle works
    - every nav and footer link lands on the right section
    - fonts load from `/fonts`, not Google
    - the browser console has no errors
    - `npm run build` succeeds

11. **Stop and wait.** Give me a summary of the files changed, the screenshots, and anything from the README's "Must clear before this goes live" list that's still open. Only after I reply "approved, push it": commit with a clear message, push the branch, open a PR to the production branch, and tell me which branch Cloudflare deploys from, so I know when the merge goes live.
