/**
 * Company details, taken from the COMO M D GENERAL TRADING LLC Google Business profile.
 * Edit here to update the projects list, location section and footer together.
 */
export const company = {
  legalName: 'COMO M D GENERAL TRADING LLC',
  shortName: 'COMO MD',
  category: 'Building materials supplier',
  supplies: 'Building materials, consumables, hardware, hand tools and safety / PPE',

  addressLines: ['M35, Plot 36, Store No. 5, Block B', 'Musaffah, Abu Dhabi', 'United Arab Emirates'],

  phoneDisplay: '056 432 1548',
  phoneHref: 'tel:+971564321548',

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
export const projects = [
  {
    name: 'Saadiyat Lagoons Project',
    location: 'Abu Dhabi',
    scope: 'Building materials supply',
  },
];
