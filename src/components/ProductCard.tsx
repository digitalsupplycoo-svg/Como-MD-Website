import { groupName, type Product } from '../data/products';
import { localePath, ui } from '../i18n';
import { Link, useLang } from '../router';
import ProductImg from './ProductImg';

export default function ProductCard({ product }: { product: Product }) {
  const lang = useLang();
  const href = localePath(`/building-materials/${product.slug}`, lang);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <Link to={href} tabIndex={-1} aria-hidden="true" className="block aspect-[4/3] overflow-hidden bg-[#F4F3F3]">
        <ProductImg
          img={product.images[0]}
          lang={lang}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
          {groupName(product.group)[lang]}
        </p>
        <h3 className="mt-2 font-serif text-xl sm:text-2xl font-normal leading-snug tracking-tight text-[#191919]">
          <Link to={href} className="hover:underline underline-offset-4 decoration-gray-300">
            {product.name[lang]}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-[#191919]/70 leading-relaxed">{product.benefit[lang]}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={ui.product.specs[lang]}>
          {product.tags.map((tag) => (
            <li key={tag.en} className="rounded-md bg-[#F4F3F3] px-2.5 py-1 text-xs font-medium text-[#191919]/80">
              <bdi>{tag[lang]}</bdi>
            </li>
          ))}
        </ul>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
          <Link
            to={href}
            className="rounded-lg border border-gray-300 px-3 py-2.5 text-center text-sm font-medium text-[#191919] hover:bg-[#F4F3F3] transition-colors duration-200"
          >
            {ui.card.details[lang]}
          </Link>
          <Link
            to={`${href}#quote`}
            className="rounded-lg bg-[#191919] px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-[#191919]/90 transition-colors duration-200"
          >
            {ui.card.quote[lang]}
          </Link>
        </div>
      </div>
    </article>
  );
}
