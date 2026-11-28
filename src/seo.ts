import { company } from './company';
import { findProduct, groupName, imageUrl, materialsHero, products } from './data/products';
import { localePath, type Lang } from './i18n';
import { basePath, type Route } from './router';

export type Head = {
  title: string;
  description: string;
  /** English path of the page (no /ar), used for canonical and language alternates. */
  base: string;
  lang: Lang;
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

function business(siteUrl: string, lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': abs(siteUrl, '/#business'),
    name: company.legalName,
    alternateName: company.shortName,
    description:
      lang === 'ar'
        ? 'مورد مواد بناء في مصفح، أبوظبي: حديد التسليح والأخشاب والبلايوود والإسمنت والرمل وأغطية الحماية والمسامير.'
        : 'Building materials supplier in Musaffah, Abu Dhabi: reinforcement steel, timber and plywood, cement, sand, protection sheets and fixings.',
    ...(siteUrl ? { url: abs(siteUrl, localePath('/', lang)) } : {}),
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

function breadcrumbs(siteUrl: string, lang: Lang, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(siteUrl, localePath(item.path, lang)),
    })),
  };
}

export function getHead(route: Route, siteUrl: string): Head {
  const lang = route.lang;
  const ar = lang === 'ar';
  const homeName = ar ? 'الرئيسية' : 'Home';
  const materialsName = ar ? 'مواد البناء' : 'Building Materials';
  const defaultImage = abs(siteUrl, '/media/hero-poster.jpg');

  if (route.page === 'materials') {
    return {
      lang,
      base: '/building-materials',
      title: ar ? `مورد مواد بناء في أبوظبي | ${brand}` : `Building Materials Supplier in Abu Dhabi | ${brand}`,
      description: ar
        ? 'حديد التسليح، شبك التسليح، سلك الربط، الخشب الأبيض، البلايوود، الإسمنت، الرمل، النايلون، لوح فلكسل والمسامير لمشاريع الإمارات. من مصفح، أبوظبي. اطلب عرض سعر.'
        : 'Rebar, wire mesh, binding wire, white wood, plywood, cement, sand, polythene, Flexel board and nails for UAE projects. Supplied from Musaffah, Abu Dhabi. Request a quote.',
      image: shareImage(materialsHero.id, 1200, 630 / 1200),
      jsonLd: [
        business(siteUrl, lang),
        breadcrumbs(siteUrl, lang, [
          { name: homeName, path: '/' },
          { name: materialsName, path: '/building-materials' },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: materialsName,
          itemListElement: products.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.name[lang],
            url: abs(siteUrl, localePath(`/building-materials/${p.slug}`, lang)),
          })),
        },
      ],
    };
  }

  if (route.page === 'product') {
    const product = findProduct(route.slug)!;
    const name = product.name[lang];
    return {
      lang,
      base: basePath(route),
      title: ar ? `مورد ${name} في أبوظبي | ${brand}` : `${name} Supplier in Abu Dhabi | ${brand}`,
      description: ar
        ? `مورد ${name} في أبوظبي: ${product.summary.ar}. اطلب سعر ${name} لمشروعك في الإمارات من COMO MD في مصفح.`
        : `${name} supplier in Abu Dhabi: ${product.summary.en}. Request a ${name} price for your UAE project from COMO MD in Musaffah.`,
      image: shareImage(product.images[0].id, 1200),
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name,
          description: product.overview[0][lang],
          category: groupName(product.group)[lang],
          image: product.images.map((img) => shareImage(img.id, 1200)),
          url: abs(siteUrl, localePath(basePath(route), lang)),
          additionalProperty: product.specs.map((s) => ({
            '@type': 'PropertyValue',
            name: s.label[lang],
            value: s.value[lang],
          })),
        },
        breadcrumbs(siteUrl, lang, [
          { name: homeName, path: '/' },
          { name: materialsName, path: '/building-materials' },
          { name, path: basePath(route) },
        ]),
        business(siteUrl, lang),
      ],
    };
  }

  if (route.page === 'notfound') {
    return {
      lang,
      base: '/404',
      title: ar ? `الصفحة غير موجودة | ${brand}` : `Page not found | ${brand}`,
      description: ar ? 'هذه الصفحة غير موجودة.' : 'This page does not exist.',
      image: defaultImage,
      noindex: true,
      jsonLd: [],
    };
  }

  return {
    lang,
    base: '/',
    title: ar ? `${brand} | مورد مواد بناء في أبوظبي` : `${brand} | Building Materials Supplier in Abu Dhabi`,
    description: ar
      ? 'COMO M D General Trading LLC تورّد مواد البناء والمستهلكات والعدد والأدوات اليدوية ومعدات السلامة لمشاريع البناء في أبوظبي من محلها في مصفح.'
      : 'COMO M D General Trading LLC supplies building materials, consumables, hardware, hand tools and safety equipment to construction projects across Abu Dhabi from its store in Musaffah.',
    image: defaultImage,
    jsonLd: [business(siteUrl, lang)],
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
    `<meta property="og:locale" content="${head.lang === 'ar' ? 'ar_AE' : 'en_AE'}" />`,
    `<meta property="og:image" content="${esc(head.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];
  if (head.noindex) tags.push('<meta name="robots" content="noindex" />');
  if (siteUrl && !head.noindex) {
    const url = abs(siteUrl, localePath(head.base, head.lang));
    tags.push(`<link rel="canonical" href="${url}" />`, `<meta property="og:url" content="${url}" />`);
    tags.push(`<link rel="alternate" hreflang="en" href="${abs(siteUrl, head.base)}" />`);
    tags.push(`<link rel="alternate" hreflang="ar" href="${abs(siteUrl, localePath(head.base, 'ar'))}" />`);
    tags.push(`<link rel="alternate" hreflang="x-default" href="${abs(siteUrl, head.base)}" />`);
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
  meta('property', 'og:locale', head.lang === 'ar' ? 'ar_AE' : 'en_AE');

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
    const origin = new URL(canonical.href).origin;
    canonical.href = origin + localePath(head.base, head.lang);
    meta('property', 'og:url', canonical.href);
    const alt = (lang: string, href: string) =>
      document.head.querySelector(`link[rel="alternate"][hreflang="${lang}"]`)?.setAttribute('href', href);
    alt('en', origin + head.base);
    alt('ar', origin + localePath(head.base, 'ar'));
    alt('x-default', origin + head.base);
  }
}
