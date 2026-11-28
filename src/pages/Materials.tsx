import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import QuoteForm from '../components/QuoteForm';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { whatsappLink } from '../company';
import { groups, imageSrcSet, imageUrl, materialsHero, products, type GroupId } from '../data/products';
import { fill, localePath, ui } from '../i18n';
import { useLang } from '../router';

export default function Materials() {
  const lang = useLang();
  const m = ui.materials;
  const [group, setGroup] = useState<GroupId | 'all'>('all');
  const shown = group === 'all' ? products : products.filter((p) => p.group === group);

  const chip = (active: boolean) =>
    `whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      active ? 'border-[#191919] bg-[#191919] text-white' : 'border-gray-300 bg-white text-[#191919]/80 hover:border-[#191919] hover:text-[#191919]'
    }`;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#191919] pt-16 sm:pt-[4.5rem]">
        <img
          src={imageUrl(materialsHero.id, 1600, 9 / 16)}
          srcSet={imageSrcSet(materialsHero.id, [800, 1200, 1600, 2000], 9 / 16)}
          sizes="100vw"
          alt={materialsHero.alt[lang]}
          width={1600}
          height={900}
          {...{ fetchpriority: 'high' }}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r rtl:bg-gradient-to-l from-black/80 via-black/55 to-black/20" />
        <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-16 sm:py-24 md:py-28 text-white">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 font-medium">{m.eyebrow[lang]}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight">
            {m.title[lang]}
          </h1>
          <p className="mt-5 max-w-xl text-sm sm:text-base text-white/80 leading-relaxed">{m.lead[lang]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="rounded-lg bg-white px-6 py-3.5 text-center text-sm font-medium text-[#191919] hover:bg-white/90 transition-colors duration-200"
            >
              {m.quote[lang]}
            </a>
            <a
              href={whatsappLink(ui.whatsapp.hello[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-medium text-[#0b3d1f] hover:bg-[#1fbe5b] transition-colors duration-200"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {m.whatsapp[lang]}
            </a>
          </div>
        </div>
      </section>

      <div className="border-b border-gray-200 bg-[#F4F3F3]">
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-3 px-6 sm:px-10 md:px-14 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {m.trust.map((item) => (
            <li key={item.en} className="flex items-center gap-2.5 text-sm font-medium text-[#191919]">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#191919]/60" />
              {item[lang]}
            </li>
          ))}
        </ul>
      </div>

      <section aria-labelledby="products-title" className="mx-auto max-w-6xl px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-20">
        <Breadcrumbs
          label={m.breadcrumb[lang]}
          items={[{ name: ui.nav.home[lang], to: localePath('/', lang) }, { name: m.breadcrumb[lang] }]}
        />
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="products-title" className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#191919]">
            {m.productsTitle[lang]}
          </h2>
          <p className="text-sm text-[#191919]/60" aria-live="polite">
            {fill(m.count[lang], { n: shown.length })}
          </p>
        </div>

        <div role="group" aria-label={m.filterLabel[lang]} className="-mx-6 mt-6 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          <button type="button" aria-pressed={group === 'all'} onClick={() => setGroup('all')} className={chip(group === 'all')}>
            {m.all[lang]}
          </button>
          {groups.map((g) => (
            <button key={g.id} type="button" aria-pressed={group === g.id} onClick={() => setGroup(g.id)} className={chip(group === g.id)}>
              {g.name[lang]}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {shown.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <p className="mt-6 text-xs text-[#191919]/50">
          {ui.product.typical[lang]} {ui.product.photoNote[lang]}
        </p>
      </section>

      <section aria-labelledby="quote-title" className="border-t border-gray-200 bg-[#F4F3F3]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:px-10 md:px-14 py-14 sm:py-20 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-16">
          <div>
            <h2 id="quote-title" className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#191919]">
              {m.quoteTitle[lang]}
            </h2>
            <p className="mt-3 max-w-md text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">{m.quoteLead[lang]}</p>
            <ul className="mt-8 space-y-5">
              {ui.why.map((w) => (
                <li key={w.title.en}>
                  <p className="font-medium text-[#191919]">{w.title[lang]}</p>
                  <p className="mt-1 text-sm text-[#191919]/65 leading-relaxed">{w.text[lang]}</p>
                </li>
              ))}
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
