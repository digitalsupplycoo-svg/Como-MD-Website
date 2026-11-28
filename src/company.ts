import type { L } from './i18n';

/**
 * Company details (from the COMO M D GENERAL TRADING LLC Google Business profile and the owner).
 * Edit here to update the header, contact section, quote forms, footer and search data together.
 */
export const company = {
  legalName: 'COMO M D GENERAL TRADING LLC',
  shortName: 'COMO MD',
  category: { en: 'Building materials supplier', ar: 'مورد مواد بناء' } as L,

  /** Live site address, e.g. "https://www.comomd.ae". Used for canonical links and the sitemap.
   *  When empty, the Vercel production domain is used at build time. */
  siteUrl: '',

  addressLines: [
    { en: 'M35, Plot 36, Store No. 5, Block B', ar: 'M35، قطعة 36، محل رقم 5، بلوك B' },
    { en: 'Musaffah, Abu Dhabi', ar: 'مصفح، أبوظبي' },
    { en: 'United Arab Emirates', ar: 'الإمارات العربية المتحدة' },
  ] as L[],

  phoneDisplay: '056 432 1548',
  phoneHref: 'tel:+971564321548',
  phoneIntl: '+971564321548',

  /** WhatsApp number in international format, digits only. Quote forms and WhatsApp buttons send here. */
  whatsapp: '971508101202',
  whatsappDisplay: '050 810 1202',

  hours: [
    { days: { en: 'Monday – Saturday', ar: 'الاثنين – السبت' }, time: { en: '8:00 AM – 5:30 PM', ar: '8:00 ص – 5:30 م' } },
    { days: { en: 'Sunday', ar: 'الأحد' }, time: { en: 'Closed', ar: 'مغلق' } },
  ] as { days: L; time: L }[],

  /** Opens the company's Google Maps listing. */
  mapsUrl: 'https://maps.google.com/?cid=13104237731529881579',
  /** Opens Google Maps directions to the company. */
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=COMO+M+D+GENERAL+TRADING+LLC%2C+Musaffah%2C+Abu+Dhabi',
  /** Embedded map (no API key needed); {lang} is replaced with en or ar. */
  mapEmbedUrl:
    'https://www.google.com/maps?q=COMO+M+D+GENERAL+TRADING+LLC,+Musaffah,+Abu+Dhabi&hl={lang}&z=15&output=embed',
};

/** Projects the company supplies materials to. Add new ones to this list. */
export const projects: { name: L; location: L; scope: L }[] = [
  {
    name: { en: 'Saadiyat Lagoons Project', ar: 'Saadiyat Lagoons Project' },
    location: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    scope: { en: 'Building materials supply', ar: 'توريد مواد البناء' },
  },
];

/** Opens a WhatsApp chat with the company, with the message already typed. */
export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
