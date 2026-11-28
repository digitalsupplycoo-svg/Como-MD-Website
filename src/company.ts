/**
 * Company details (from the COMO M D GENERAL TRADING LLC Google Business profile and the owner).
 * Edit here to update the header, contact section, quote forms, footer and search data together.
 */
export const company = {
  legalName: 'COMO M D GENERAL TRADING LLC',
  shortName: 'COMO MD',
  category: 'Building materials supplier',

  /** Live site address, e.g. "https://www.comomd.ae". Used for canonical links and the sitemap.
   *  When empty, the Vercel production domain is used at build time. */
  siteUrl: '',

  addressLines: [
    'M35, Plot 36, Store No. 5, Block B',
    'Musaffah, Abu Dhabi',
    'United Arab Emirates',
  ],

  phoneDisplay: '056 432 1548',
  phoneHref: 'tel:+971564321548',
  phoneIntl: '+971564321548',

  /** WhatsApp number in international format, digits only. Quote forms and WhatsApp buttons send here. */
  whatsapp: '971508101202',
  whatsappDisplay: '050 810 1202',

  hours: [
    { days: 'Monday – Saturday', time: '8:00 AM – 5:30 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],

  /** Opens the company's Google Maps listing. */
  mapsUrl: 'https://maps.google.com/?cid=13104237731529881579',
  /** Opens Google Maps directions to the company. */
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=COMO+M+D+GENERAL+TRADING+LLC%2C+Musaffah%2C+Abu+Dhabi',
  /** Embedded map (no API key needed). */
  mapEmbedUrl:
    'https://www.google.com/maps?q=COMO+M+D+GENERAL+TRADING+LLC,+Musaffah,+Abu+Dhabi&hl=en&z=15&output=embed',
};

/** Projects the company supplies materials to. Add new ones to this list. */
export const projects: { name: string; location: string; scope: string }[] = [
  {
    name: 'Saadiyat Lagoons Project',
    location: 'Abu Dhabi',
    scope: 'Building materials supply',
  },
];

/** Opens a WhatsApp chat with the company, with the message already typed. */
export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
