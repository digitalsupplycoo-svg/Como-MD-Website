import { whatsappLink } from '../company';
import { findProduct } from '../data/products';
import { fill, ui } from '../i18n';
import { useRoute } from '../router';
import WhatsAppIcon from './WhatsAppIcon';

/** Floating WhatsApp button shown on every page. On a product page the message names the product. */
export default function WhatsAppFloat() {
  const route = useRoute();
  const lang = route.lang;
  const product = route.page === 'product' ? findProduct(route.slug) : undefined;
  const message = product
    ? fill(ui.whatsapp.product[lang], { product: product.name[lang] })
    : ui.whatsapp.hello[lang];

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ui.whatsapp.float[lang]}
      title={ui.whatsapp.float[lang]}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] end-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform duration-200 hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
