import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../dist/${path}`, import.meta.url), 'utf8');
const jsonLdOf = (html) => JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1] ?? 'null');

const home = read('index.html');
const missing = read('404.html');
const sitemap = read('sitemap.xml');
const robots = read('robots.txt');
const llms = read('llms.txt');

const pages = {
  '/': home,
  '/work/': read('work/index.html'),
  '/work/bonsai-sushi/': read('work/bonsai-sushi/index.html'),
  '/approach/': read('approach/index.html'),
  '/experience/': read('experience/index.html'),
  '/contact/': read('contact/index.html'),
};

for (const [path, html] of Object.entries(pages)) {
  const url = `https://www.alifah.my.id${path}`.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
  assert.match(html, new RegExp(`<link rel="canonical" href="${url}"`), `canonical for ${path}`);
  assert.match(html, new RegExp(`<meta property="og:url" content="${url}"`), `og:url for ${path}`);
  assert.equal(html.match(/<h1[\s>]/g)?.length, 1, `exactly one h1 on ${path}`);
  assert.ok(jsonLdOf(html)?.['@graph']?.length, `JSON-LD on ${path}`);
  assert.ok(sitemap.includes(`<loc>https://www.alifah.my.id${path}</loc>`), `${path} in sitemap`);
  if (path !== '/') assert.ok(jsonLdOf(html)['@graph'].some((node) => node['@type'] === 'BreadcrumbList'), `breadcrumbs on ${path}`);
}

assert.match(home, /Performance Marketer &amp; Meta Ads Specialist/);
assert.ok(jsonLdOf(home)['@graph'].some((node) => node['@type'] === 'FAQPage'));
assert.ok(!sitemap.includes('404'));
assert.ok(![home, sitemap, robots].some(text => text.includes('alifahazhar.com')));
assert.ok(![home, llms].some(text => /Rp 10B|Rp 10 billion|10 billion/i.test(text)));
assert.match(missing, /Page not found/);
assert.match(missing, /href="\/"/);
assert.match(missing, /noindex, follow/);
console.log('Site metadata and 404 checks passed');
