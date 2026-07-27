# Arkeos Terminal — Waitlist Landing Page

Static HTML/Tailwind landing page built from the Canva mockup, plus a working
`/api/waitlist` endpoint so the form actually has somewhere to POST to. Zero
build step — deploys to Vercel as-is.

```
├── index.html          entry point
├── styles.css           corner glow + input/button glow (kept out of Tailwind arbitrary values)
├── script.js             form submit handling, loading/success/error states
├── api/waitlist.js      Vercel serverless function — receives the email POST
├── assets/
│   ├── logo.png           cropped + made transparent from your source file
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   └── og-image.png       1200×630 share card for Twitter/Discord link previews
└── package.json
```

## Run locally
No build step, so any static server works:
```bash
npx serve .
```
The `/api/waitlist` route only runs under Vercel's environment, so for local
testing of the full flow use the Vercel CLI instead: `npx vercel dev`.

## Deploy
Push to a GitHub repo and import it in Vercel, or:
```bash
npx vercel --prod
```
No `vercel.json` needed — Vercel serves the static files from root and
auto-detects `api/waitlist.js` as a serverless function.

## About the fonts — read before you ship
You specified **Eurostile Round** and **Canva Sans**. Neither could go in the
build directly:

- **Eurostile Round** is a paid commercial typeface from URW++ — desktop
  license from ~$20/style, family bundle ~$299, webfont license (what you'd
  need to legally `@font-face` it on a live site) priced separately on top.
  If you buy a webfont license, drop the files in `/assets/fonts/` and swap
  the `font-display` stack in the `tailwind.config` script block in
  `index.html`.
- **Canva Sans** can't be used outside Canva at all — Canva's own content
  license only permits its font software inside the Canva app or baked into
  a flattened export (an image/PDF), not as live, selectable web text on an
  external site. There's no license tier that changes this, so there's no
  legitimate way to self-host it here.

In their place I used **Orbitron** (display/title/tagline) and **Poppins**
(waitlist label + button) — both free, OFL-licensed, pulled from Google
Fonts. Visually close in spirit (geometric, technical, wide letterforms for
Orbitron; rounded and friendly for Poppins), not a pixel match to the
originals. This is called out again in a comment at the top of `index.html`.

## About the logo
Your uploaded `.svg` was actually a JPEG photo/export embedded inside SVG
wrapper tags, not real vector paths, so it would've pixelated at large sizes
either way. I extracted the embedded image, cropped it tight, and converted
the black background to transparency so it drops cleanly onto the gradient.
If you have true vector source (e.g. the original Illustrator/Figma file),
swapping in a real `.svg` would look crisper at very large sizes.

## Connecting the waitlist to something real
`api/waitlist.js` currently validates the email and logs it — nothing is
persisted yet. Before launch, wire the `TODO` in that file to an actual
destination: Resend Audiences, ConvertKit, beehiiv, or a Supabase table are
all a handful of lines from where it is now.

## Colors used
Sampled directly from your PNG mockup rather than eyeballed:
- Background: `#000000`
- Corner glow: `#0300bb`
- Input border glow: `#302ebb`
