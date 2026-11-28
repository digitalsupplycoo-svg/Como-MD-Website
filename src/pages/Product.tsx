import { useState } from 'react';
import { Check } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import ProductImg from '../components/ProductImg';
import QuoteForm from '../components/QuoteForm';
import { findProduct, groupName, imageUrl, relatedProducts } from '../data/products';
import { fill, ui } from '../copy';

export default function Product({ slug }: { slug: string }) {
  const product = findProduct(slug)!;
  const p = ui.product;
  const [active, setActive] = useState(0);
  const image = product.images[Math.min(active, product.images.length - 1)];

  const h2 = 'font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#191919]';
  const table = (rows: { label: string; value: string }[]) => (
    <table className="mt-4 w-full overflow-hidden rounded-xl border border-gray-200 text-sm">
      <tbody className="divide-y divide-gray-200">
        {rows.map((row) => (
          <tr key={row.label} className="bg-white even:bg-[#FAFAFA]">
            <th scope="row" className="w-2/5 px-4 py-3 text-start font-normal text-[#191919]/65 align-top">
              {row.label}
            </th>
            <td className="px-4 py-3 font-medium text-[#191919]">
              <bdi>{row.value}</bdi>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 pt-24 sm:pt-28">
        <Breadcrumbs
          label={ui.materials.breadcrumb}
          items={[
            { name: ui.nav.home, to: '/' },
            { name: ui.materials.breadcrumb, to: '/building-materials' },
            { name: product.name },
          ]}
        />

        <header className="mt-6 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">{groupName(product.group)}</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-normal leading-[1.08] tracking-tight text-[#191919]">
            {product.name}
          </h1>
          <p className="mt-4 text-base text-[#191919]/70 leading-relaxed">{product.benefit}</p>
          <a
            href="#quote"
            className="mt-5 inline-block rounded-lg bg-[#191919] px-5 py-3 text-sm font-medium text-white hover:bg-[#191919]/90 transition-colors duration-200 lg:hidden"
          >
            {p.getQuote}
          </a>
        </header>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 md:px-14 py-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-14">
        <div className="min-w-0 space-y-12">
          <section aria-label={p.gallery}>
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#F4F3F3]">
              <ProductImg
                key={image.id}
                img={image}
               
                eager={active === 0}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={img.id + i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={fill(p.showPhoto, { n: i + 1 })}
                    aria-pressed={active === i}
                    className={`aspect-[4/3] overflow-hidden rounded-lg border-2 transition-colors duration-200 ${
                      active === i ? 'border-[#191919]' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={imageUrl(img.id, 240)}
                      alt=""
                      width={240}
                      height={180}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
            <p className="mt-2 text-xs text-[#191919]/45">{p.photoNote}</p>
          </section>

          <section aria-labelledby="overview-title">
            <h2 id="overview-title" className={h2}>
              {p.overview}
            </h2>
            {product.overview.map((para) => (
              <p key={para} className="mt-4 text-[15px] text-[#191919]/75 leading-relaxed">
                {para}
              </p>
            ))}
          </section>

          <section aria-labelledby="specs-title">
            <h2 id="specs-title" className={h2}>
              {p.specs}
            </h2>
            {table(product.specs)}
            <p className="mt-3 text-xs text-[#191919]/55">{p.typical}</p>
          </section>

          <section aria-labelledby="apps-title">
            <h2 id="apps-title" className={h2}>
              {p.applications}
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="flex gap-2.5 text-[15px] text-[#191919]/80">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#191919]/50" />
                  {a}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="supply-title">
            <h2 id="supply-title" className={h2}>
              {p.supply}
            </h2>
            {table(product.supply)}
            <p className="mt-3 text-xs text-[#191919]/55">{p.typical}</p>
          </section>

          <section aria-labelledby="why-title">
            <h2 id="why-title" className={h2}>
              {p.why}
            </h2>
            <ol className="mt-5 grid gap-4 sm:grid-cols-3">
              {ui.why.map((w, i) => (
                <li key={w.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <span className="text-sm text-[#191919]/40 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-2 font-medium text-[#191919]">{w.title}</p>
                  <p className="mt-1.5 text-sm text-[#191919]/65 leading-relaxed">{w.text}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <QuoteForm product={product} />
        </aside>
      </div>

      <section aria-labelledby="related-title" className="border-t border-gray-200 bg-[#F4F3F3]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-14 sm:py-16">
          <h2 id="related-title" className={h2}>
            {p.related}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {relatedProducts(product).map((r) => (
              <ProductCard key={r.slug} product={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
