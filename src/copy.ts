/** Site wording, kept in one place. */
export const ui = {
  nav: {
    home: 'Home',
    materials: 'Building Materials',
    projects: 'Projects',
    contact: 'Contact',
    quote: 'Request a Quotation',
    products: 'Products',
    allProducts: 'View all building materials',
    quoteForm: 'Request a quote for several items',
    menu: 'Menu',
    closeMenu: 'Close menu',
    homeLabel: 'COMO MD TRADING home',
  },

  home: {
    eyebrowA: 'Building materials supplier',
    eyebrowB: 'Abu Dhabi',
    titleA: 'Quality materials,',
    titleB: 'delivered on time.',
    lead: 'Building materials, consumables, hardware, hand tools and safety equipment — supplied from Musaffah to construction sites across Abu Dhabi.',
    cta: 'Request a Quotation',
    materialsLink: 'Browse building materials',
  },

  projects: {
    eyebrow: 'Projects',
    title: 'Projects we supply',
    lead: 'Building materials, consumables, hardware, hand tools and safety / PPE, delivered to construction projects across Abu Dhabi.',
  },

  contact: {
    eyebrow: 'Location',
    title: 'Visit our store in Musaffah',
    company: 'Company',
    address: 'Address',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    hours: 'Opening hours',
    call: 'Call us',
    directions: 'Get directions',
    mapTitle: 'Map showing COMO M D GENERAL TRADING LLC in Musaffah, Abu Dhabi',
  },

  materials: {
    eyebrow: 'Building materials · Abu Dhabi',
    title: 'Reliable Building Materials for UAE Projects',
    lead: 'Reinforcement steel, timber and plywood, cement and sand, protection sheets and fixings, supplied from Musaffah to your site.',
    quote: 'Request a Quote',
    whatsapp: 'WhatsApp Us',
    trust: [
      'Quality-certified products',
      'Wide range in stock',
      'Competitive project pricing',
      'Fast delivery across Abu Dhabi & UAE',
    ],
    productsTitle: 'Our building materials',
    filterLabel: 'Filter products by group',
    all: 'All',
    count: '{n} products',
    quoteTitle: 'Request a quote',
    quoteLead: 'Tell us what you need and where. The form opens WhatsApp with your request ready to send.',
    breadcrumb: 'Building Materials',
  },

  card: {
    details: 'View Details',
    quote: 'Get Quote',
  },

  product: {
    typical: 'Typical. Contact us for exact availability.',
    overview: 'Overview',
    specs: 'Key specifications',
    applications: 'Typical applications',
    supply: 'Sizes, packing and supply unit',
    why: 'Why buy from COMO MD',
    related: 'Related products',
    getQuote: 'Get a quote for this product',
    gallery: 'Product photos',
    showPhoto: 'Show photo {n}',
    photoNote: 'Photos are illustrative.',
  },

  why: [
    {
      title: 'One supplier for the whole list',
      text: 'Steel, timber, cement, sand, protection sheets and fixings from one store in Musaffah, on one order.',
    },
    {
      title: 'Project pricing on request',
      text: 'Send your quantities or BOQ and get a quotation priced for your project.',
    },
    {
      title: 'Delivered to your site',
      text: 'We deliver to construction sites across Abu Dhabi, sized to the stage of your project.',
    },
  ],

  form: {
    title: 'Request a Quote',
    lead: 'Fill in what you know. We reply on WhatsApp.',
    product: 'Product',
    productAny: 'Several items / full material list',
    name: 'Name',
    company: 'Company',
    phone: 'Phone',
    location: 'Project location',
    quantity: 'Quantity',
    date: 'Delivery date',
    notes: 'Notes',
    optional: 'optional',
    locationHint: 'e.g. Musaffah, Saadiyat',
    quantityHint: 'e.g. 10 tons, 200 sheets',
    submit: 'Send request on WhatsApp',
    required: 'Please enter your {field}.',
    phoneInvalid: 'Please enter a valid phone number.',
    sent: 'WhatsApp has opened with your request. Press send in WhatsApp to deliver it.',
    privacy: 'Your details go only into the WhatsApp message you send us.',
    msgTitle: 'Quotation request',
    msgFooter: 'Sent from the COMO MD website',
  },

  boq: {
    title: 'Need a full BOQ priced? Send us your material list.',
    lead: 'Attach your BOQ as a PDF or Excel file in the WhatsApp chat and we will price the full list.',
    button: 'Send your BOQ (PDF / Excel)',
    message: 'Hello COMO MD, I would like a price for my BOQ / material list. I am attaching the file here.',
  },

  whatsapp: {
    float: 'Chat with COMO MD on WhatsApp',
    hello: 'Hello COMO MD, I would like a quote for building materials.',
    product: 'Hello COMO MD, I would like a quote for {product}.',
  },

  notFound: {
    title: 'Page not found',
    text: 'This page does not exist or has moved.',
    back: 'Go to the home page',
    materials: 'See building materials',
  },

  footer: {
    rights: 'All rights reserved.',
  },
};

/** Replaces {key} placeholders. */
export function fill(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? ''));
}
