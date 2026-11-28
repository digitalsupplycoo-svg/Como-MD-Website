import { imageSrcSet, imageUrl, type ProductImage } from '../data/products';
import type { Lang } from '../i18n';

type Props = {
  img: ProductImage;
  lang: Lang;
  sizes: string;
  className?: string;
  eager?: boolean;
};

/** Product photo: 4:3, WebP, responsive sizes, lazy-loaded unless `eager`. */
export default function ProductImg({ img, lang, sizes, className, eager }: Props) {
  return (
    <img
      src={imageUrl(img.id, 800)}
      srcSet={imageSrcSet(img.id, [400, 640, 800, 1200])}
      sizes={sizes}
      alt={img.alt[lang]}
      width={800}
      height={600}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchpriority: 'high' } : {})}
      className={className}
    />
  );
}
