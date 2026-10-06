import type { APIRoute } from 'astro';
import { absoluteUrl } from '../data/site';
import { projects, projectPath } from '../data/projects';

const lastmod = '2026-10-06';

const escape = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const pages: { path: string; priority: string; images?: { loc: string; title: string }[] }[] = [
  {
    path: '/',
    priority: '1.0',
    images: [{ loc: '/images/alifah.webp', title: 'Alifah Azhar Nurhazmi - Performance Marketer & Meta Ads Specialist' }],
  },
  { path: '/work/', priority: '0.9' },
  ...projects.map((project) => ({
    path: projectPath(project),
    priority: '0.8',
    images: [{ loc: project.image, title: `${project.client} — ${project.title}` }],
  })),
  {
    path: '/approach/',
    priority: '0.7',
    images: [{ loc: '/images/looker-dashboard.webp', title: 'Looker Studio Meta Ads attribution dashboard' }],
  },
  { path: '/experience/', priority: '0.7' },
  { path: '/contact/', priority: '0.6' },
];

export const GET: APIRoute = () => {
  const urls = pages.map(({ path, priority, images = [] }) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>${images.map((image) => `
    <image:image>
      <image:loc>${absoluteUrl(image.loc)}</image:loc>
      <image:title>${escape(image.title)}</image:title>
    </image:image>`).join('')}
  </url>`).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
