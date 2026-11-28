import { imageSrcSet, imageUrl, type ProductImage } from '../data/products';

type Props = {
  img: ProductImage;
  sizes: string;
  className?: string;
  eager?: boolean;
};

/** Product photo: 4:3, WebP, responsive sizes, lazy-loaded unless `eager`. */
export default function ProductImg({ img, sizes, className, eager }: Props) {
  return (
    <img
      src={imageUrl(img.id, 800)}
      srcSet={imageSrcSet(img.id, [400, 640, 800, 1200])}
      sizes={sizes}
      alt={img.alt}
      width={800}
      height={600}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchpriority: 'high' } : {})}
      className={className}
    />
  );
}
