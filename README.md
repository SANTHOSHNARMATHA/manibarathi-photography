# ManiBarathi Photography — Studio Website

> **Capturing Moments, Creating Memories Forever.**

A premium, fully responsive photography studio website (dark + light theme,
gold accents, cinematic feel) built for weddings, films, pre-wedding, mehendi,
maternity, drone and more.

---

## Folder structure

```
manibarathi/
├── index.html              # All 16 sections (single page)
├── css/
│   └── style.css           # Design tokens, themes, all styles
├── js/
│   └── main.js             # Loader, nav, gallery, lightbox, form, etc.
├── assets/
│   └── images/             # Your photos (see README.txt inside)
│       ├── logo.jpg
│       ├── favicon.png
│       └── ...gallery images
├── .nojekyll               # Lets GitHub Pages serve the /assets folder
└── README.md
```

## What's included

**Sections:** Hero · About · Services · Portfolio (filterable) · Featured Albums ·
Before/After · Packages · Achievements + Counters · Testimonials · Team · FAQ ·
Blog · Contact · Booking form · WhatsApp · Google Map · Footer.

**Features:** camera-aperture loading screen, sticky navbar with scroll-spy,
dark/light theme toggle, image lightbox (keyboard + arrows), portfolio filtering,
animated counters, draggable before/after slider, testimonial carousel,
accordion FAQ, form validation, back-to-top, AOS scroll animations,
SEO tags + JSON-LD, and reduced-motion / keyboard-focus accessibility.

**Tech:** HTML5, CSS3, vanilla JavaScript, Bootstrap 5, Font Awesome 6, AOS
(all via CDN — no build step needed).

## The inquiry form

On submit, the form validates the fields, then builds a `mailto:` link and opens
the visitor's email app with **all the details pre-filled**, addressed to the
studio. Change the studio email in `js/main.js`:

```js
const STUDIO_EMAIL = "manibharathiphotography@gmail.com";
```

## Things to personalise

| What | Where |
|------|-------|
| Studio email | `js/main.js` → `STUDIO_EMAIL` |
| Phone / WhatsApp number | `index.html` (search `918754045410`) + `CONTACT` in `js/main.js` |
| Instagram / contact for founder | `CONTACT` object at the top of `js/main.js` |
| Address & map | `#contact` section in `index.html` |
| Prices & package features | `#packages` section in `index.html` |
| Services, gallery, team, FAQ, blog, testimonials | data arrays at the top of `js/main.js` |
| Social links | search `aria-label="Instagram"` etc. in `index.html` |
| Photos | drop new files into `assets/images/` (keep the same names — see the guide there) |

## Deploy to GitHub Pages

1. Create a new repository and upload the whole `manibarathi` folder contents
   (so `index.html` is at the repo root).
2. Repo **Settings → Pages** → Source: `main` branch, `/root`.
3. Wait ~1 minute — your site is live at
   `https://<username>.github.io/<repo>/`.

The included `.nojekyll` file ensures the `assets/` folder is served correctly.

---

© ManiBarathi Photography.
