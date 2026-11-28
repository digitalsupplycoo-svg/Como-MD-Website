import { company } from './company';
import { findProduct, groupName, imageUrl, materialsHero, products } from './data/products';
import type { Route } from './router';

export type Head = {
  title: string;
  description: string;
  path: string;
  image: string;
  noindex?: boolean;
  jsonLd: object[];
};

const brand = 'COMO MD';

/** Share images as JPEG: some chat apps do not preview WebP. */
const shareImage = (id: string, width: number, ratio?: number) => imageUrl(id, width, ratio).replace('fm=webp', 'fm=jpg');

function abs(siteUrl: string, path: string) {
  return siteUrl ? `${siteUrl.replace(/\/$/, '')}${path}` : path;
}

function business(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': abs(siteUrl, '/#business'),
    name: company.legalName,
    alternateName: company.shortName,
    logo: abs(siteUrl, '/logo.png'),
    image: abs(siteUrl, '/logo.png'),
    description:
      'Building materials supplier in Musaffah, Abu Dhabi: reinforcement steel, timber and plywood, cement, sand, protection sheets and fixings.',
    ...(siteUrl ? { url: abs(siteUrl, '/') } : {}),
    telephone: company.phoneIntl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'M35, Plot 36, Store No. 5, Block B',
      addressLocality: 'Musaffah',
      addressRegion: 'Abu Dhabi',
      addressCountry: 'AE',
    },
    areaServed: 'Abu Dhabi',
    hasMap: company.mapsUrl,
    sameAs: [company.mapsUrl],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:30',
      },
    ],
  };
}

function breadcrumbs(siteUrl: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(siteUrl, item.path),
    })),
  };
}

export function getHead(route: Route, siteUrl: string): Head {
  const defaultImage = abs(siteUrl, '/media/hero-poster.jpg');

  if (route.page === 'materials') {
    return {
      path: '/building-materials',
      title: `Building Materials Supplier in Abu Dhabi | ${brand}`,
      description:
        'Rebar, wire mesh, binding wire, white wood, plywood, cement, sand, polythene, Flexel board and nails for UAE projects. Supplied from Musaffah, Abu Dhabi. Request a quote.',
      image: shareImage(materialsHero.id, 1200, 630 / 1200),
      jsonLd: [
        business(siteUrl),
        breadcrumbs(siteUrl, [
          { name: 'Home', path: '/' },
          { name: 'Building Materials', path: '/building-materials' },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Building Materials',
          itemListElement: products.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.name,
            url: abs(siteUrl, `/building-materials/${p.slug}`),
          })),
        },
      ],
    };
  }

  if (route.page === 'product') {
    const product = findProduct(route.slug)!;
    const path = `/building-materials/${product.slug}`;
    return {
      path,
      title: `${product.name} Supplier in Abu Dhabi | ${brand}`,
      description: `${product.name} supplier in Abu Dhabi: ${product.summary}. Request a ${product.name} price for your UAE project from COMO MD in Musaffah.`,
      image: shareImage(product.images[0].id, 1200),
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.overview[0],
          category: groupName(product.group),
          image: product.images.map((img) => shareImage(img.id, 1200)),
          url: abs(siteUrl, path),
          additionalProperty: product.specs.map((s) => ({ '@type': 'PropertyValue', name: s.label, value: s.value })),
        },
        breadcrumbs(siteUrl, [
          { name: 'Home', path: '/' },
          { name: 'Building Materials', path: '/building-materials' },
          { name: product.name, path },
        ]),
        business(siteUrl),
      ],
    };
  }

  if (route.page === 'notfound') {
    return {
      path: '/404',
      title: `Page not found | ${brand}`,
      description: 'This page does not exist.',
      image: defaultImage,
      noindex: true,
      jsonLd: [],
    };
  }

  return {
    path: '/',
    title: `${brand} | Building Materials Supplier in Abu Dhabi`,
    description:
      'COMO M D General Trading LLC supplies building materials, consumables, hardware, hand tools and safety equipment to construction projects across Abu Dhabi from its store in Musaffah.',
    image: defaultImage,
    jsonLd: [business(siteUrl)],
  };
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Head tags as HTML, for the pre-rendered pages. */
export function renderHead(head: Head, siteUrl: string) {
  const tags = [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${brand}" />`,
    `<meta property="og:title" content="${esc(head.title)}" />`,
    `<meta property="og:description" content="${esc(head.description)}" />`,
    `<meta property="og:locale" content="en_AE" />`,
    `<meta property="og:image" content="${esc(head.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];
  if (head.noindex) tags.push('<meta name="robots" content="noindex" />');
  if (siteUrl && !head.noindex) {
    const url = abs(siteUrl, head.path);
    tags.push(`<link rel="canonical" href="${url}" />`, `<meta property="og:url" content="${url}" />`);
  }
  for (const data of head.jsonLd) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`);
  }
  return tags.join('\n    ');
}

/** Updates the document head after a page change in the browser. */
export function applyHead(head: Head) {
  document.title = head.title;
  const meta = (attr: 'name' | 'property', key: string, value: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.content = value;
  };
  meta('name', 'description', head.description);
  meta('property', 'og:title', head.title);
  meta('property', 'og:description', head.description);
  meta('property', 'og:image', head.image);

  const robots = document.head.querySelector('meta[name="robots"]');
  if (head.noindex && !robots) meta('name', 'robots', 'noindex');
  if (!head.noindex && robots) robots.remove();

  document.head.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());
  for (const data of head.jsonLd) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) {
    canonical.href = new URL(canonical.href).origin + head.path;
    meta('property', 'og:url', canonical.href);
  }
}
