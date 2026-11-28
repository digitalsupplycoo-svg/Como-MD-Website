export type Lang = 'en' | 'ar';

/** A piece of text in both languages. */
export type L = { en: string; ar: string };

export const dirOf = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** Adds the /ar prefix for Arabic pages. `path` is the English path, e.g. "/building-materials". */
export function localePath(path: string, lang: Lang) {
  if (lang === 'en') return path;
  const [pathname, hash] = path.split('#');
  const prefixed = pathname === '/' ? '/ar' : `/ar${pathname}`;
  return hash ? `${prefixed}#${hash}` : prefixed;
}

/** Interface wording used across the site. */
export const ui = {
  nav: {
    home: { en: 'Home', ar: 'الرئيسية' },
    materials: { en: 'Building Materials', ar: 'مواد البناء' },
    projects: { en: 'Projects', ar: 'المشاريع' },
    contact: { en: 'Contact', ar: 'تواصل معنا' },
    quote: { en: 'Request a Quotation', ar: 'اطلب عرض سعر' },
    quoteShort: { en: 'Request a Quote', ar: 'اطلب عرض سعر' },
    switchTo: { en: 'العربية', ar: 'English' },
    switchToShort: { en: 'ع', ar: 'EN' },
    switchLabel: { en: 'View this page in Arabic', ar: 'View this page in English' },
    menu: { en: 'Menu', ar: 'القائمة' },
    closeMenu: { en: 'Close menu', ar: 'إغلاق القائمة' },
    homeLabel: { en: 'COMO MD home', ar: 'الصفحة الرئيسية لـ COMO MD' },
  },

  home: {
    eyebrowA: { en: 'Building materials supplier', ar: 'مورد مواد بناء' },
    eyebrowB: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    titleA: { en: 'Quality materials,', ar: 'مواد بجودة عالية،' },
    titleB: { en: 'delivered on time.', ar: 'تصلك في موعدها.' },
    lead: {
      en: 'Building materials, consumables, hardware, hand tools and safety equipment — supplied from Musaffah to construction sites across Abu Dhabi.',
      ar: 'مواد بناء ومستهلكات وعدد وأدوات يدوية ومعدات سلامة، نورّدها من مصفح إلى مواقع البناء في جميع أنحاء أبوظبي.',
    },
    cta: { en: 'Request a Quotation', ar: 'اطلب عرض سعر' },
    materialsLink: { en: 'Browse building materials', ar: 'تصفّح مواد البناء' },
  },

  projects: {
    eyebrow: { en: 'Projects', ar: 'المشاريع' },
    title: { en: 'Projects we supply', ar: 'مشاريع نورّد لها' },
    lead: {
      en: 'Building materials, consumables, hardware, hand tools and safety / PPE, delivered to construction projects across Abu Dhabi.',
      ar: 'مواد بناء ومستهلكات وعدد وأدوات يدوية ومعدات سلامة، نوصلها إلى مشاريع البناء في أنحاء أبوظبي.',
    },
  },

  contact: {
    eyebrow: { en: 'Location', ar: 'الموقع' },
    title: { en: 'Visit our store in Musaffah', ar: 'زورونا في محلنا في مصفح' },
    company: { en: 'Company', ar: 'الشركة' },
    address: { en: 'Address', ar: 'العنوان' },
    phone: { en: 'Phone', ar: 'الهاتف' },
    whatsapp: { en: 'WhatsApp', ar: 'واتساب' },
    hours: { en: 'Opening hours', ar: 'ساعات العمل' },
    call: { en: 'Call us', ar: 'اتصل بنا' },
    directions: { en: 'Get directions', ar: 'الاتجاهات' },
    mapTitle: {
      en: 'Map showing COMO M D GENERAL TRADING LLC in Musaffah, Abu Dhabi',
      ar: 'خريطة توضح موقع COMO M D GENERAL TRADING LLC في مصفح، أبوظبي',
    },
  },

  materials: {
    eyebrow: { en: 'Building materials · Abu Dhabi', ar: 'مواد البناء · أبوظبي' },
    title: { en: 'Reliable Building Materials for UAE Projects', ar: 'مواد بناء موثوقة لمشاريع الإمارات' },
    lead: {
      en: 'Reinforcement steel, timber and plywood, cement and sand, protection sheets and fixings, supplied from Musaffah to your site.',
      ar: 'حديد التسليح، الأخشاب والبلايوود، الإسمنت والرمل، أغطية الحماية والمسامير، نورّدها من مصفح إلى موقعك.',
    },
    quote: { en: 'Request a Quote', ar: 'اطلب عرض سعر' },
    whatsapp: { en: 'WhatsApp Us', ar: 'راسلنا على واتساب' },
    trust: [
      { en: 'Quality-certified products', ar: 'منتجات معتمدة الجودة' },
      { en: 'Wide range in stock', ar: 'تشكيلة واسعة متوفرة' },
      { en: 'Competitive project pricing', ar: 'أسعار منافسة للمشاريع' },
      { en: 'Fast delivery across Abu Dhabi & UAE', ar: 'توصيل سريع في أبوظبي والإمارات' },
    ],
    productsTitle: { en: 'Our building materials', ar: 'مواد البناء لدينا' },
    filterLabel: { en: 'Filter products by group', ar: 'تصفية المنتجات حسب المجموعة' },
    all: { en: 'All', ar: 'الكل' },
    count: { en: '{n} products', ar: '{n} منتجات' },
    quoteTitle: { en: 'Request a quote', ar: 'اطلب عرض سعر' },
    quoteLead: {
      en: 'Tell us what you need and where. The form opens WhatsApp with your request ready to send.',
      ar: 'أخبرنا بما تحتاجه وأين. يفتح النموذج واتساب وطلبك جاهز للإرسال.',
    },
    breadcrumb: { en: 'Building Materials', ar: 'مواد البناء' },
  },

  card: {
    details: { en: 'View Details', ar: 'عرض التفاصيل' },
    quote: { en: 'Get Quote', ar: 'اطلب السعر' },
  },

  product: {
    typical: {
      en: 'Typical. Contact us for exact availability.',
      ar: 'مواصفات نموذجية. تواصل معنا لتأكيد التوفر.',
    },
    overview: { en: 'Overview', ar: 'نظرة عامة' },
    specs: { en: 'Key specifications', ar: 'المواصفات الرئيسية' },
    applications: { en: 'Typical applications', ar: 'الاستخدامات الشائعة' },
    supply: { en: 'Sizes, packing and supply unit', ar: 'المقاسات والتعبئة ووحدة التوريد' },
    why: { en: 'Why buy from COMO MD', ar: 'لماذا تشتري من COMO MD' },
    related: { en: 'Related products', ar: 'منتجات ذات صلة' },
    getQuote: { en: 'Get a quote for this product', ar: 'اطلب عرض سعر لهذا المنتج' },
    gallery: { en: 'Product photos', ar: 'صور المنتج' },
    showPhoto: { en: 'Show photo {n}', ar: 'عرض الصورة {n}' },
    photoNote: { en: 'Photos are illustrative.', ar: 'الصور للتوضيح.' },
  },

  why: [
    {
      title: { en: 'One supplier for the whole list', ar: 'مورد واحد لكل القائمة' },
      text: {
        en: 'Steel, timber, cement, sand, protection sheets and fixings from one store in Musaffah, on one order.',
        ar: 'الحديد والأخشاب والإسمنت والرمل وأغطية الحماية والمسامير من محل واحد في مصفح وبطلب واحد.',
      },
    },
    {
      title: { en: 'Project pricing on request', ar: 'أسعار المشاريع عند الطلب' },
      text: {
        en: 'Send your quantities or BOQ and get a quotation priced for your project.',
        ar: 'أرسل الكميات أو جدول الكميات واحصل على عرض سعر خاص بمشروعك.',
      },
    },
    {
      title: { en: 'Delivered to your site', ar: 'توصيل إلى موقعك' },
      text: {
        en: 'We deliver to construction sites across Abu Dhabi, sized to the stage of your project.',
        ar: 'نوصل إلى مواقع البناء في أنحاء أبوظبي، بكميات تناسب مرحلة مشروعك.',
      },
    },
  ],

  form: {
    title: { en: 'Request a Quote', ar: 'اطلب عرض سعر' },
    lead: {
      en: 'Fill in what you know. We reply on WhatsApp.',
      ar: 'املأ ما تعرفه، ونرد عليك على واتساب.',
    },
    product: { en: 'Product', ar: 'المنتج' },
    productAny: { en: 'Several items / full material list', ar: 'عدة مواد / قائمة مواد كاملة' },
    name: { en: 'Name', ar: 'الاسم' },
    company: { en: 'Company', ar: 'الشركة' },
    phone: { en: 'Phone', ar: 'رقم الهاتف' },
    location: { en: 'Project location', ar: 'موقع المشروع' },
    quantity: { en: 'Quantity', ar: 'الكمية' },
    date: { en: 'Delivery date', ar: 'تاريخ التوصيل' },
    notes: { en: 'Notes', ar: 'ملاحظات' },
    optional: { en: 'optional', ar: 'اختياري' },
    locationHint: { en: 'e.g. Musaffah, Saadiyat', ar: 'مثال: مصفح، السعديات' },
    quantityHint: { en: 'e.g. 10 tons, 200 sheets', ar: 'مثال: 10 طن، 200 لوح' },
    submit: { en: 'Send request on WhatsApp', ar: 'أرسل الطلب عبر واتساب' },
    required: { en: 'Please enter your {field}.', ar: 'يرجى إدخال {field}.' },
    phoneInvalid: { en: 'Please enter a valid phone number.', ar: 'يرجى إدخال رقم هاتف صحيح.' },
    sent: {
      en: 'WhatsApp has opened with your request. Press send in WhatsApp to deliver it.',
      ar: 'تم فتح واتساب وطلبك جاهز. اضغط إرسال في واتساب لإيصاله.',
    },
    privacy: {
      en: 'Your details go only into the WhatsApp message you send us.',
      ar: 'بياناتك تذهب فقط إلى رسالة الواتساب التي ترسلها لنا.',
    },
    msgTitle: { en: 'Quotation request', ar: 'طلب عرض سعر' },
    msgFooter: { en: 'Sent from the COMO MD website', ar: 'مرسل من موقع COMO MD' },
  },

  boq: {
    title: { en: 'Need a full BOQ priced? Send us your material list.', ar: 'لديك جدول كميات كامل تريد تسعيره؟ أرسل لنا قائمة المواد.' },
    lead: {
      en: 'Attach your BOQ as a PDF or Excel file in the WhatsApp chat and we will price the full list.',
      ar: 'أرفق جدول الكميات كملف PDF أو Excel في محادثة واتساب وسنسعّر القائمة كاملة.',
    },
    button: { en: 'Send your BOQ (PDF / Excel)', ar: 'أرسل جدول الكميات (PDF / Excel)' },
    message: {
      en: 'Hello COMO MD, I would like a price for my BOQ / material list. I am attaching the file here.',
      ar: 'مرحباً COMO MD، أريد تسعير جدول الكميات / قائمة المواد. أرفقت الملف هنا.',
    },
  },

  whatsapp: {
    float: { en: 'Chat with COMO MD on WhatsApp', ar: 'تواصل مع COMO MD على واتساب' },
    hello: {
      en: 'Hello COMO MD, I would like a quote for building materials.',
      ar: 'مرحباً COMO MD، أريد عرض سعر لمواد بناء.',
    },
    product: {
      en: 'Hello COMO MD, I would like a quote for {product}.',
      ar: 'مرحباً COMO MD، أريد عرض سعر لـ {product}.',
    },
  },

  notFound: {
    title: { en: 'Page not found', ar: 'الصفحة غير موجودة' },
    text: { en: 'This page does not exist or has moved.', ar: 'هذه الصفحة غير موجودة أو تم نقلها.' },
    back: { en: 'Go to the home page', ar: 'العودة إلى الرئيسية' },
    materials: { en: 'See building materials', ar: 'تصفّح مواد البناء' },
  },

  footer: {
    rights: { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  },
};

/** Replaces {key} placeholders. */
export function fill(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? ''));
}
