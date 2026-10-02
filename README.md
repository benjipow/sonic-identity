# Sonic Identity — homepage redesign handoff

Mockup approved in the browser on thesonicidentity.com, 2 Oct 2026. Nothing in this package has touched the live site or the repo.

## What's in this folder

| File | What it is |
|---|---|
| `README.md` | This file: every change, the final copy, and the launch checklist |
| `CLAUDE_CODE_PROMPT.md` | Paste into Claude Code inside the `sonic-identity` repo |
| `sections.html` | Markup for the 6 new blocks, in page order |
| `styles.css` | All new styles. Every class starts with `si-` so nothing clashes with the site's Tailwind |
| `fonts.css` + `assets/fonts/` | Self-hosted brand fonts: Bodoni Moda, Anton, Inter, Permanent Marker, Space Mono (all SIL Open Font License) |
| `assets/textures/` | Original SVG textures drawn for this build: croc, zebra, leopard, the groove waveform, and grain |
| `script.js` | The "Enter the Audio Lab" toggle, plus re-pointed nav anchors |
| `preview.html` | Open in a browser to see the new sections on their own |

## Changes in page order

| # | Section | Before | After |
|---|---|---|---|
| — | Hero | Portrait plus scrolling headline | **Unchanged** |
| 01 | Introduction | "Your Brand Has a Look. Now Give It a Soul." | **Unchanged** |
| — | Acoustic Sanctuary | "(02) Personalized sound architecture…" with brand-board image | **Removed** |
| 02 | Transformation | Numbered "(02·5)" | Renumbered **(02)**; sits directly under the intro |
| 03 | **The problem** (new) | — | Bodoni headline, body copy, red handwritten line, groove-motif panel with track credits |
| — | **Scrolling band** (new) | — | Bone strip with three brand lines |
| 04 | **Three ways in** (new) | Old "Curated Acoustic Offerings" cards | Three services on skins (croc, zebra, leopard), each name on a plate, with an outline button |
| 05 | **Meet the Lab** (new) | Old Audio Lab section, always visible | Bone page with the 3 testimonials as message cards, a spinning CM record, and an "Enter the Audio Lab" button that reveals the **original interactive Audio Lab** below it |
| 06 | **Free guide** (new) | — | "THE SONIC IMPRINT" in Anton on croc, "(it's already yours.)", and a "Send me the guide" button |
| 07 | **The architect** (new) | Old "The Story" section | Grid-paper page, black-and-white portrait, first-person bio, red "Claim your sound" button |
| — | Visual & Acoustic Synergy gallery | Four brand-board tiles | **Removed** |
| — | Client Resonance testimonials | Three-column quotes | **Moved** into Meet the Lab |
| — | Inquiry form | — | **Unchanged** (see checklist: it doesn't currently send) |
| — | Footer | — | **Unchanged**; links re-pointed |
| — | Nav | "Audio Lab" → `#atelier` | → `#audio-lab` |

Anchor map: `#atelier → #audio-lab`, `#architecture → #services`, `#portfolio → #audio-lab`, `#story → #about`.

Copy removed from the services: "Custom 432Hz & 528Hz Biophilic Loop Architecture" and "High-Touch Nervous System Grounding Frequencies". These were health-adjacent claims. Add them back only if Chayenne wants them.

## Final copy, word for word

### (03) The problem
**Most founders built a brand people can see… and no one can *hear*.**

Not for lack of taste. They're building half a brand.

She did the subconscious work. She paid the coaches. She signed off on the logo, the palette, the photoshoot.

Then she opened the app and picked the same trending sound as everyone else in her feed.

The result? She looks expensive. She sounds borrowed. And the room forgets her by the next post.

The fix isn't another trending sound.

*(handwritten, red)* It's a sound you own.

Panel credit: TRACK 03 · PROD. CM · 2026

### Scrolling band
STOP RENTING YOUR SOUND ● YOUR SOUND IS YOUR SIGNATURE ● IT'S ALREADY YOURS ●

### (04) Three ways in…
**Own your *sound*.**

**Flagship: The Signature Sonic Identity.** Label: BUILD THE WHOLE SOUND
3-note and 5-note audio logos, a brand anthem in 90, 60 and 30-second cuts, and a walk-on theme for the stage. Delivered with your sonic brand guidelines and master audio vault.
Button: RESERVE THE SUITE

**Diagnostic: Sonic Audit & Frequency Refresh.** Tag: MOST SELECTED. Label: HEAR WHAT YOU SOUND LIKE NOW
A full audit of your podcast, video, events and ads. You get a competitor sound analysis, your sound archetype and palette, and a 14-day upgrade playbook.
Button: BOOK THE AUDIT

**Atmospheres: Atmospheric Spaces & Sanctuaries.** Label: SCORE THE ROOM
Ambient soundscapes for boutiques, spas, summits and retreats. Loop design, speaker placement and room advice, and a launch-night soundscape.
Button: CURATE A SPACE

### (05) The Audio Lab
**Meet the *Lab*.**

Four signature sounds you can play right here in your browser. Press play and feel it before you read a word.

BEST WITH HEADPHONES

DON'T TAKE OUR WORD FOR IT
- "When our audio logo plays at the start of our podcast and live masterminds, our attendees literally get goosebumps. Chayenne translated our brand into four pure notes." (Sienna R. Delacroix · Delacroix Haute Perfumery)
- "We had spent hundreds of thousands on our visual rebrand, yet our events and media still sounded generic. Working with Chayenne gave our company an acoustic footprint that feels undeniably sovereign." (Victoria Kensington · Astraea Ventures)
- "Chayenne engineered the spatial soundscape for our 3 flagship spa sanctuaries. Guests constantly inquire about the music—it immediately slows their breathing and elevates our brand value." (Elena Thorne · Thorne Botanicals)

Button: ▶ ENTER THE AUDIO LAB / ■ CLOSE THE AUDIO LAB
Record caption: SIDE A · 4 TRACKS · PLAYS IN YOUR BROWSER

### (06) Free guide
**THE SONIC IMPRINT**
*(handwritten, red)* (it's already yours.)
Button: SEND ME THE GUIDE ↗ (currently jumps to the inquiry form)

### (07) The architect
**Built by someone who's *done* the work.**

**Hi, I'm Chayenne.** I'm a sound architect. My work sits where classical composition, neuroscience and luxury brand strategy meet.

I believe every woman who leads already has a sound. Most never hear it, because they were taught to brand for the eyes and borrow for the ears.

I built Sonic Identity for them.

We map your archetype first, then build the sound: audio logos, walk-on themes, and the rooms your clients step into. Not off a trending list. Not off a stock library. From you.

Button: CLAIM YOUR SOUND

## Launch checklist

**Must clear before this goes live**
- [ ] **The inquiry form sends nothing.** Its fields have no `name` attributes and it submits back to the homepage. Every "book / reserve / claim" button on the page leads here, so wire it to a real destination (email, CRM or form service) and test it.
- [ ] **Testimonials.** Confirm Sienna R. Delacroix, Victoria Kensington and Elena Thorne are real clients who agreed in writing to be quoted by name and company. If not, remove them or replace them with real ones.
- [ ] **"Most selected" tag** on the Audit card. Keep it only if it's true.
- [ ] **Chayenne approves the new copy**, especially the first-person bio. Confirm the "classical composition, neuroscience" background claim, which is carried over from the old site.
- [ ] **Free guide.** Does "The Sonic Imprint" exist? If yes, link the button to it. If not, change the section or hold it back.
- [ ] **Portrait.** Confirm the photo can be used on the site, in two places now, and whether the photographer needs credit.
- [ ] **Images moved off GoHighLevel.** All site images still load from `vibe.filesafe.space` (GHL's CDN). They'll break if the GHL account closes, and the CDN already blocked the portrait in a local test. Copy them into the repo.

**Carried over from the old site, not new, still worth reviewing**
- [ ] Intro stats: "86% higher brand recall", "0.14s", "95% of visionary women founders", "neuroscience proves". Source them or soften them.
- [ ] Audio Lab demo names (Maison Aurelia, Verve Botanicals, Luminary App, Global Female Founders Summit) read as client work. Confirm, or label them as concept pieces.
- [ ] "528 Hz (Miracle Tone)" in the Audio Lab, "full worldwide commercial master rights", and "NDA standards" on the form. These should match Chayenne's actual contracts.

**Technical QA after the port**
- [ ] Desktop 1440 and phone 390 look like `preview.html` (verified in the mockup: no sideways scroll on mobile)
- [ ] "Enter the Audio Lab" opens the original lab and the sounds still play
- [ ] Nav "Audio Lab" and footer links land on the right sections
- [ ] Fonts load from the repo, not Google, so there are no third-party font requests
- [ ] Reduced-motion setting stops the band and the record spin
- [ ] Meta description and OG image unchanged, or updated on purpose

**Still in the old style (next round, optional):** the hero, intro, transformation, inquiry form and footer use the old Playfair and yellow look. They can be moved onto the brand kit in a follow-up.
