# Arkeos Terminal — Waitlist Landing Page

Static HTML/Tailwind landing page built from the Canva mockup, plus a working
`/api/waitlist` endpoint so the form actually has somewhere to POST to. Zero
build step — deploys to Vercel as-is.

```
├── index.html          entry point
├── refer.html           post-signup page: referral link, tier, share actions
├── styles.css           corner glow + input/button glow (kept out of Tailwind arbitrary values)
├── script.js             form submit handling, redirects to refer.html on success
├── refer.js              tier calculation, copy-to-clipboard, share actions
├── api/waitlist.js      Vercel serverless function — receives the email POST
├── assets/
│   ├── logo.png           cropped + made transparent from your source file
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   └── og-image.png       1200×630 share card for Twitter/Discord link previews
└── package.json
```

## Run locally
Paths are relative, so you can just double-click `index.html` and it'll
render correctly — no server required for that. The one thing that won't
work by double-clicking is the actual form submission, since `/api/waitlist`
is a Vercel serverless function and needs Vercel's environment to run:
```bash
npx vercel dev
```

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

## The referral flow
Submitting the form redirects to `refer.html`, which shows a referral link
and Post on X / Send Link buttons, with a line of copy telling people
referring moves them up the queue.

**Worth knowing:** there's no tracking behind that copy. The referral code
is generated client-side and saved to `localStorage` so the link is real and
personal-feeling, but nothing counts clicks or signups against it, and
nothing actually reorders anyone's position. That's a deliberate choice for
now, not an oversight — just flagging it here so it doesn't surprise anyone
digging through the code later. `?ref=CODE` is still captured from the URL
and sent to `/api/waitlist` in the POST body if you want to hook up real
tracking down the line; the endpoint just logs it for now.

## A note on Copy / Send Link locally
`navigator.clipboard` and `navigator.share` both require a secure context
(https, or `localhost`) — they may silently fail or no-op when `refer.html`
is opened straight from disk via `file://`. Both work fine once deployed on
Vercel. The Copy button falls back to auto-selecting the link text if the
clipboard API isn't available, so it's never a dead end.

## Colors used
Sampled directly from your PNG mockup rather than eyeballed:
- Background: `#000000`
- Corner glow: `#0300bb`
- Input border glow: `#302ebb`
