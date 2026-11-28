import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { products } from './data/products';
import { dirOf, localePath, type Lang } from './i18n';
import { parseRoute } from './router';
import { getHead, renderHead } from './seo';

/** Every page to pre-render, in both languages. */
export function allPaths() {
  const base = ['/', '/building-materials', ...products.map((p) => `/building-materials/${p.slug}`)];
  const langs: Lang[] = ['en', 'ar'];
  return langs.flatMap((lang) => base.map((path) => localePath(path, lang)));
}

export function render(path: string, siteUrl: string) {
  const route = parseRoute(path);
  const html = renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  );
  return {
    html,
    head: renderHead(getHead(route, siteUrl), siteUrl),
    lang: route.lang,
    dir: dirOf(route.lang),
    base: getHead(route, siteUrl).base,
  };
}
