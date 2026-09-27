import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const home = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const missing = readFileSync(new URL('../dist/404.html', import.meta.url), 'utf8');
const sitemap = readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
const robots = readFileSync(new URL('../dist/robots.txt', import.meta.url), 'utf8');
const jsonLd = JSON.parse(home.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1] ?? 'null');

assert.match(home, /<link rel="canonical" href="https:\/\/alifah\.my\.id\/"/);
assert.match(home, /<meta property="og:url" content="https:\/\/alifah\.my\.id\/"/);
assert.match(home, /Performance Marketer &amp; Meta Ads Specialist/);
assert.ok(jsonLd?.['@graph']?.length);
assert.ok(!JSON.stringify(jsonLd).includes('alifahazhar.com'));
assert.ok(![home, sitemap, robots].some(text => text.includes('alifahazhar.com')));
assert.ok(![home, readFileSync(new URL('../dist/llms.txt', import.meta.url), 'utf8')].some(text => /Rp 10B|Rp 10 billion|10 billion/i.test(text)));
assert.match(missing, /Page not found/);
assert.match(missing, /href="\/"/);
assert.match(missing, /noindex, follow/);
console.log('Site metadata and 404 checks passed');
