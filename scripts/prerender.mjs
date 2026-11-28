// Pre-renders every page to static HTML after `vite build`, so search engines and slow phones
// get the full content without running JavaScript. Also writes sitemap.xml, robots.txt and 404.html.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, allPaths } = await import(pathToFileURL(path.join(root, 'dist-server/entry-server.js')).href);

// Live address: company.siteUrl (via SITE_URL) or the Vercel production domain.
const companySrc = fs.readFileSync(path.join(root, 'src/company.ts'), 'utf8');
const configured = companySrc.match(/siteUrl:\s*'([^']*)'/)?.[1] ?? '';
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = (process.env.SITE_URL || configured || (vercelHost ? `https://${vercelHost}` : '')).replace(/\/$/, '');

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

function page(urlPath) {
  const { html, head, lang, dir } = render(urlPath, siteUrl);
  return template
    .replace('<html lang="en">', `<html lang="${lang}" dir="${dir}">`)
    .replace(/<!--head-start-->[\s\S]*?<!--head-end-->/, head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

const paths = allPaths();
for (const urlPath of paths) {
  const file = urlPath === '/' ? path.join(dist, 'index.html') : path.join(dist, urlPath.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(urlPath));
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'));

if (siteUrl) {
  const enPaths = paths.filter((p) => !p.startsWith('/ar'));
  const toAr = (p) => (p === '/' ? '/ar' : `/ar${p}`);
  const entry = (loc, en) => `  <url>
    <loc>${siteUrl}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}${en}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${siteUrl}${toAr(en)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${en}" />
  </url>`;
  const urls = enPaths.flatMap((en) => [entry(en, en), entry(toAr(en), en)]);
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`,
  );
}
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ''}`,
);

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log(`Pre-rendered ${paths.length} pages + 404${siteUrl ? `, sitemap for ${siteUrl}` : ' (no site URL: sitemap skipped)'}`);
