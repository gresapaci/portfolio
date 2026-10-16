# Gresa Paci: Portfolio

Static portfolio built with plain HTML, CSS and JavaScript. No build step, no dependencies (only Google Fonts is loaded from the web).

```
index.html            page structure + SEO metadata
css/style.css         design tokens (top of file) and all styles
js/i18n.js            interface text in English and Albanian
js/data.js            ALL editable content (contact, skills, projects, certificates, experience, education)
js/script.js          rendering, navigation, lightbox, animations (rarely needs editing)
qertifikata/          original certificate files
assets/thumbs/        small previews of the certificates (generated copies)
assets/icons/         favicon
assets/images/        put real project screenshots here
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```
npx serve .          # or: python -m http.server 8000
```

## Edit content (everything is in `js/data.js`)
- **Contact:** fill in `contact.email`, `phone`, `linkedin`, `github`, `portfolio`. Empty values are hidden; until at least one is set the Contact section shows a short "being updated" note.
- **Projects:** each project supports `image`, `alt`, `tech`, `live`, `github`, `caseStudy`. Buttons appear only when the URL is set. Without an `image`, a typographic placeholder is shown.
- **Skills / Experience / Education:** edit the arrays and objects directly.
- **Certificates:** add the file to `qertifikata/`, create a ~720px-wide JPG preview in `assets/thumbs/`, then add an entry to `certificates` (only details printed on the certificate). Filters are built from `certificateGroups`.

## Languages (English / Albanian)
The EN | SQ switch in the header changes the whole site. The site always opens in English.
- Content (projects, skills, certificates, experience, education): the English text is in `js/data.js`; add or edit the Albanian version inside each item's `sq: { ... }` block. Missing `sq` fields fall back to English.
- Fixed interface text (menu, headings, buttons): `js/i18n.js`, with `en` and `sq` sections.

## Colors, type, spacing
Change the CSS variables at the top of `css/style.css` (`--accent`, `--bg`, `--font-display`, …).

## Deploy (GitHub Pages)
1. Push this folder to a GitHub repository.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / root.
3. The site goes live at `https://<user>.github.io/<repo>/`. Add that URL to `contact.portfolio`, and add `og:url` / `og:image` meta tags in `index.html`.

All paths are relative, so it also works on Netlify, Vercel or any static host.
