# Skana studio

Static site. No build step and no dependencies. Open `index.html` for the studio landing page or `devsweep/index.html` for the DevSweep page, or serve the folder.

## Pages

- `index.html` — the studio landing page: a software index with the current tools, the next slot, principles and studio. Self-contained CSS and JavaScript.
- `devsweep/` — the DevSweep product page. Uses `../styles.css`, `../main.js` and `devsweep/landing.css`.
- `assets/` — product images and favicon.

## Change a bilingual string

The landing page and the DevSweep page both use one line per translated string:

```html
<span class="bi"><span lang="zh-CN">中文</span><span lang="en">English</span></span>
```

1. Find the string with `grep -n "the current text" index.html devsweep/index.html`.
2. Edit the text inside the matching `lang` span.
3. Keep both spans on one line. Do not add whitespace between them.
4. Do not nest one `.bi` inside another. The CSS hides only direct children.

The landing page's language toggle is inline in `index.html`; the DevSweep page uses `main.js`. Both use the same `skana:lang` localStorage key, so a language choice carries across pages.

## Add a tool to the studio page

The page is built as an index, so a new tool is a new row and a new brief, not a redesign.

1. In `index.html`, add an `<a class="index-row">` in the hero sidebar with the next number.
2. Add a matching `<article class="brief">` in the `#briefs` grid: number, state, name, one-liner, meta, image and links. Keep the third brief as the "next" slot, or move it down.
3. Update the counters in the hero (`02 TOOLS`), the brief head (`02 NOW / 01 NEXT`) and the studio colophon.
4. Add the product image to `assets/` and use a relative path.
5. If the new tool needs its own page, add a folder like `devsweep/` and link to it. Do not invent a name, date, screenshot or release for a product that is not shipped; the `03 / NEXT` row is the honest placeholder.

## Change the default language

The shipped default is `zh-CN`.

For the landing page, set `<html lang="en" ...>`, set `<title>` to the English title, set `aria-pressed="true"` on `EN` and `"false"` on `中文`. The inline script syncs the title and both button states on load.

For the DevSweep page, follow the same changes in `devsweep/index.html`; `main.js` reads `data-title-zh` / `data-title-en`.

## Assets

- `assets/devsweep-main.png` — DevSweep main window, 2720 × 900, copied from `docs/screenshots/main.png` in the DevSweep repository.
- `assets/devsweep-icon.svg` — DevSweep icon, copied from `assets/icon.svg` in the DevSweep repository.
- `assets/mb-screen-5.jpg` — Moment Bloom countdown screen, cropped from the official App Store screenshot.
- `assets/favicon.svg` — site favicon.

Replace an image and update its `width` / `height` if the size changes. Images are relative paths; the site is multi-file, not a single-file export.

## DevSweep landing page

`devsweep/index.html` is the standalone product page. It loads the shared `styles.css` and `main.js`, then `devsweep/landing.css` for the page-only layout. The studio landing page links to it from the DevSweep index row and brief. The page links back with `../`.

Product facts come from the DevSweep repository README. To ship a release, update the version in the hero meta line and the platform file names in the install section if they change.

## Manual test

Run from the repository root:

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/` and `http://localhost:4173/devsweep/`, and check both languages at 360 px and 1440 px:

- No horizontal scrollbar at 360 px.
- The language buttons show the current state and keep it after a reload.
- The language choice carries between the landing page and `/devsweep/`.
- The DevSweep "详情" link opens `devsweep/`; its screenshot and styles load.
- The Moment Bloom image loads and the phone plate keeps its shape.
- Every link opens the intended page in the same tab.
- On `/devsweep/`, the screenshot link opens the full image, and the back and footer links return to `../`.
- Tab through the skip link, masthead, hero index, brief links, studio link and GitHub CTA. Focus is visible.
- With JavaScript disabled, the Chinese page is complete and the language control is absent or harmless.

## Design notes

The selected direction is documented in `direction-approved.md` (The Index / Editorial Brutalism). The six exploration versions and reference boards live in the local `design-demos/` folder; they are not part of the published site and are excluded via `.gitignore`.