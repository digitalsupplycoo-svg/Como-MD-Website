import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { products } from './data/products';
import { parseRoute } from './router';
import { getHead, renderHead } from './seo';

/** Every page to pre-render. */
export function allPaths() {
  return ['/', '/building-materials', ...products.map((p) => `/building-materials/${p.slug}`)];
}

export function render(path: string, siteUrl: string) {
  const html = renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  );
  return { html, head: renderHead(getHead(parseRoute(path), siteUrl), siteUrl) };
}
