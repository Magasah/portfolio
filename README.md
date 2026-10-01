# Muhammad — Portfolio

Fullstack developer from Dushanbe, Tajikistan. Personal site with selected projects, skills and contacts.

- Live: https://portfolio.spartanecsparta91.workers.dev/
- GitHub: [github.com/Magasah](https://github.com/Magasah)
- Telegram: [t.me/vvewrix](https://t.me/vvewrix)

Static HTML, CSS and vanilla JavaScript. No build step, no runtime dependencies, no third-party requests (fonts are self-hosted).

## Structure

```
index.html            page markup (Russian by default)
assets/css/style.css  styles, light and dark themes
assets/js/init.js     applies saved theme/language before first paint
assets/js/main.js     RU/EN dictionary, theme, menu, scroll behavior
assets/fonts/         Inter, JetBrains Mono (woff2)
assets/img/           logo, favicon, Open Graph image
_headers              security and cache headers (Cloudflare)
robots.txt, sitemap.xml
```

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000.

## Editing content

- Text: change it in `index.html` (Russian) and in the `T.ru` / `T.en` dictionaries in `assets/js/main.js`. The `data-i18n` key links them.
- Site URL: if the domain changes, update `canonical`, `og:*`, `twitter:*` and JSON-LD in `index.html`, plus `robots.txt` and `sitemap.xml`.

## Deploy

Cloudflare builds from this repository on every push to the production branch.
