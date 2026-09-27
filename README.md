# Alifah Azhar Portfolio

Astro portfolio for Alifah Azhar Nurhazmi. Live site: https://www.alifah.my.id/.

## Local development

```sh
npm install
npx astro dev --background
```

Use `npx astro dev status`, `npx astro dev logs`, and `npx astro dev stop` to manage server.

## Build and check

```sh
npm run build
node scripts/check-site.mjs
```

`src/layouts/Layout.astro` owns canonical, social, and structured-data URLs. Keep `astro.config.mjs`, `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt` on live domain when changing it. `src/pages/404.astro` serves branded not-found page; static hosts must use generated `404.html` for unknown paths.

Hero uses a lazy-loaded Three.js dot field. It skips WebGL for reduced-motion visitors and falls back to static gradient when WebGL is unavailable; animation pauses when hero is offscreen or tab is hidden.
