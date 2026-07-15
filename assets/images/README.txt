IMAGE REPLACEMENT GUIDE
=======================
Replace / add any file below (keep the SAME filename) to update the site.
Recommended: JPG, optimized under ~300KB each. Logo should be PNG.


*** NEW FILES — ALL ADDED & WIRED (DONE) ***
--------------------------------------------
mani-barathi.jpeg      -> Founder photo (Leadership section)          [ADDED]
logo.png               -> CLEAN studio logo, auto-cropped from your   [ADDED]
                          screenshot (white circle only). Shown in
                          navbar, footer and loading screen.
favicon.png            -> Browser-tab icon, generated from logo.png   [ADDED]
wedding-ceremony.jpeg  -> Wedding couple + sacred fire (yellow saree) [ADDED]
bride-pearls.jpeg      -> Bridal makeup profile with pearl jewellery  [ADDED]
baby-pool.jpeg         -> Baby splashing in the pink pool             [ADDED]
baby-lying.jpeg        -> Baby in the blue checked dungaree           [ADDED]
prewedding-forest.jpeg -> Couple on the fallen log                    [ADDED]
prewedding-stream.jpeg -> Couple by the forest stream                 [ADDED]

logo.jpeg = your original full screenshot (kept only as a source; unused).


*** EXISTING FILES ***
----------------------
favicon.png              -> Browser tab icon (square)
cinematic-arch.jpg       -> HERO background (wide) + gallery
cinematic-arch-2.jpg     -> Gallery (wide)
prewedding-bookshelf.jpg -> Pre-wedding album + gallery + blog (wide)
bride-makeup.jpg         -> About section + team + gallery (portrait)
bride-portrait.jpg       -> Before/After demo + album + gallery + team (portrait)
mehendi-01.jpg           -> Gallery + blog (portrait)
mehendi-02.jpg           -> Gallery (portrait)
mehendi-03.jpg           -> Gallery (portrait)
groom-detail.jpg         -> Team + gallery (square/portrait)
logo.jpg                 -> OLD logo (kept only as a fallback for logo.png)


To add MORE gallery images: open js/main.js, find the "gallery" array,
and add a line like:
  { img: "your-file.jpg", cat: "wedding", tag: "Wedding", title: "Your Title" },
Categories: wedding | prewedding | baby | mehendi | portrait | cinematic
