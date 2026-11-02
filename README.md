# Skana portfolio

Static site. No build step and no dependencies. Open `index.html` directly or serve the folder.

## Change a bilingual string

Every translated string in the body is one line in `index.html`:

```html
<span class="bi"><span lang="zh-CN">中文</span><span lang="en">English</span></span>
```

1. Find the string with `grep -n "the current text" index.html`.
2. Edit the text inside the matching `lang` span.
3. Keep both spans on one line. Do not add whitespace between them.
4. Do not nest one `.bi` inside another. The CSS hides only direct children.

## Add a third project

1. In `index.html`, copy one `<li class="project">` block inside `.work__list`.
2. Set a new `id` on the list item and on its `h3`. Update `aria-labelledby` on the list item to match.
3. Fill the name, year, summary pair, meta pair, and link.
4. Add a `.project__media` block. Use two `<img>` elements with matching `lang` and `alt` for a screenshot. Set the real `width` and `height`, `loading="lazy"`, and `decoding="async"`. Use the `.typeplate` block when no public screenshot exists.
5. Add the project to the hero index if it belongs one click from the first screen.

No CSS or JavaScript change is needed. The row number comes from the CSS counter.

## Change the default language

The shipped default is `zh-CN`. To ship English first:

1. Set `<html lang="en" data-title-zh="Skana · 独立开发者" data-title-en="Skana · Independent developer">`.
2. Set `<title>` to the English title.
3. Set `aria-pressed="true"` on the `EN` button and `aria-pressed="false"` on `中文`.

`main.js` syncs the title and both button states on load.

## DevSweep screenshot

`assets/devsweep-main.png` is copied from the DevSweep repository at `docs/screenshots/main.png`. It is 2720 by 900. Replace the file and update `width` and `height` on both `<img>` elements if the size changes.

## Manual test

Run from the repository root:

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/` and check both languages at 360 px and 1440 px:

- No horizontal scrollbar at 360 px.
- The language buttons show the current state and keep it after a reload.
- Every link opens the intended page in the same tab.
- The screenshot loads and the Moment Bloom plate keeps its 16:10 shape.
- Tab through the skip link, header, hero index, project links, and contact link. Focus is visible.
- With JavaScript disabled, the Chinese page is complete and the language control is absent.