import type { L } from '../i18n';

/**
 * Building materials catalogue.
 *
 * Every card, product page, quote form option, related-products list, sitemap entry and
 * search-engine tag is built from this file. To add a product, add one entry to `products`
 * (and photos: Unsplash photo IDs, 4:3 crops are made automatically).
 *
 * All specifications are typical values; pages always show "Typical. Contact us for exact availability."
 */

export type GroupId = 'steel' | 'timber' | 'cement' | 'sheets' | 'fixings';

export const groups: { id: GroupId; name: L }[] = [
  { id: 'steel', name: { en: 'Steel & Reinforcement', ar: 'الحديد والتسليح' } },
  { id: 'timber', name: { en: 'Timber & Plywood', ar: 'الأخشاب والبلايوود' } },
  { id: 'cement', name: { en: 'Cement & Aggregates', ar: 'الإسمنت والركام' } },
  { id: 'sheets', name: { en: 'Sheets & Protection', ar: 'الأغطية والحماية' } },
  { id: 'fixings', name: { en: 'Fixings', ar: 'المسامير والتثبيت' } },
];

export type ProductImage = {
  /** Unsplash photo ID (the part after "photo-" in an images.unsplash.com link). */
  id: string;
  alt: L;
};

export type Product = {
  slug: string;
  group: GroupId;
  name: L;
  /** One-line benefit shown on the card. */
  benefit: L;
  /** 2–3 short spec tags shown on the card. */
  tags: L[];
  /** Short spec summary used in the search-engine description. */
  summary: L;
  overview: [L, L];
  specs: { label: L; value: L }[];
  applications: L[];
  supply: { label: L; value: L }[];
  images: ProductImage[];
};

export const products: Product[] = [
  {
    slug: 'deformed-steel-bars',
    group: 'steel',
    name: { en: 'Deformed Steel Bars (Rebar)', ar: 'حديد التسليح المحزّز' },
    benefit: {
      en: 'Ribbed reinforcement bars that grip concrete for strong, crack-resistant structures.',
      ar: 'أسياخ حديد محزّزة تتماسك مع الخرسانة لهياكل قوية ومقاومة للتشقق.',
    },
    tags: [
      { en: 'Ø8–32 mm', ar: 'قطر 8–32 مم' },
      { en: 'B500B / A615 Gr.60', ar: 'B500B / A615 Gr.60' },
      { en: '12 m lengths', ar: 'طول 12 م' },
    ],
    summary: {
      en: 'Ø8–32 mm, B500B / ASTM A615 Gr.60, 12 m lengths, by the ton',
      ar: 'قطر 8–32 مم، درجة B500B / ASTM A615، بطول 12 م، بالطن',
    },
    overview: [
      {
        en: 'Deformed bars carry the tension that concrete cannot take on its own. The raised ribs along each bar lock into the surrounding concrete, so loads pass evenly through foundations, columns, beams and slabs.',
        ar: 'تتحمّل أسياخ التسليح قوى الشد التي لا تتحمّلها الخرسانة وحدها. النتوءات البارزة على طول كل سيخ تتشابك مع الخرسانة المحيطة، فتنتقل الأحمال بشكل متوازن عبر الأساسات والأعمدة والجسور والبلاطات.',
      },
      {
        en: 'We supply straight bars in standard 12-metre lengths across the common diameters, ready to cut and bend on site or at your steel fixing yard. Send us your bar schedule and we will quote by the ton.',
        ar: 'نورّد الأسياخ المستقيمة بطول 12 متراً وبالأقطار الشائعة، جاهزة للقص والثني في الموقع أو في ورشة الحدادة. أرسل لنا جدول التسليح ونقدّم لك عرض سعر بالطن.',
      },
    ],
    specs: [
      { label: { en: 'Diameter', ar: 'القطر' }, value: { en: '8–32 mm', ar: '8–32 مم' } },
      { label: { en: 'Grade', ar: 'الدرجة' }, value: { en: 'B500B / ASTM A615 Grade 60', ar: 'B500B / ASTM A615 الدرجة 60' } },
      { label: { en: 'Length', ar: 'الطول' }, value: { en: '12 m', ar: '12 م' } },
      { label: { en: 'Surface', ar: 'السطح' }, value: { en: 'Ribbed (deformed)', ar: 'محزّز' } },
    ],
    applications: [
      { en: 'Foundations and raft slabs', ar: 'الأساسات والقواعد الحصيرية' },
      { en: 'Columns, beams and slabs', ar: 'الأعمدة والجسور والبلاطات' },
      { en: 'Retaining walls and water tanks', ar: 'الجدران الاستنادية وخزانات المياه' },
      { en: 'Precast concrete elements', ar: 'عناصر الخرسانة مسبقة الصب' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: 'Common diameters from Ø8 to Ø32 mm', ar: 'الأقطار الشائعة من 8 إلى 32 مم' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Tied bundles of 12 m bars', ar: 'حزم مربوطة من أسياخ بطول 12 م' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per ton', ar: 'بالطن' } },
    ],
    images: [
      { id: '1763771420303-0f11ccf613d1', alt: { en: 'Bundled steel rebar ready for construction', ar: 'حزم من أسياخ حديد التسليح جاهزة للبناء' } },
      { id: '1745909247906-123b53b70e06', alt: { en: 'Rebar stacked horizontally, showing the ribbed surface', ar: 'أسياخ حديد مكدّسة أفقياً يظهر سطحها المحزّز' } },
      { id: '1794329117362-2d41b1282f47', alt: { en: 'Close-up of ribbed steel bars', ar: 'لقطة قريبة لأسياخ حديد محزّزة' } },
      { id: '1768677903496-becc4be07258', alt: { en: 'Worker checking rebar on a building site', ar: 'عامل يفحص حديد التسليح في موقع بناء' } },
    ],
  },

  {
    slug: 'wire-mesh',
    group: 'steel',
    name: { en: 'Wire Mesh', ar: 'شبك التسليح الملحوم' },
    benefit: {
      en: 'Pre-welded reinforcement grids that cut fixing time on slabs and walls.',
      ar: 'شبكات تسليح ملحومة مسبقاً توفّر وقت التركيب في البلاطات والجدران.',
    },
    tags: [
      { en: 'A142–A393', ar: 'A142–A393' },
      { en: 'Fusion-welded', ar: 'ملحوم كهربائياً' },
      { en: 'Sheets or rolls', ar: 'ألواح أو لفّات' },
    ],
    summary: {
      en: 'electric fusion-welded mesh, A142, A193, A252, A393, sheets or rolls',
      ar: 'شبك ملحوم كهربائياً A142 وA193 وA252 وA393، ألواح أو لفّات',
    },
    overview: [
      {
        en: 'Welded wire mesh is a grid of steel wires joined by electric fusion welding at every crossing. Because the spacing is set at the factory, it goes down faster and more evenly than loose bars tied by hand.',
        ar: 'شبك التسليح الملحوم شبكة من أسلاك الحديد ملحومة كهربائياً عند كل نقطة تقاطع. ولأن المسافات بين الأسلاك محددة في المصنع، يُركَّب أسرع وبانتظام أكبر من الأسياخ المربوطة يدوياً.',
      },
      {
        en: 'It is a standard choice for ground slabs, screeds, precast panels and crack control in walls. We supply the common reference sizes as flat sheets or rolls, so you can match the mesh to your drawings.',
        ar: 'وهو خيار شائع لبلاطات الأرضيات والتسويات والألواح مسبقة الصب وللتحكم بالتشققات في الجدران. نورّد المقاسات المرجعية الشائعة على شكل ألواح أو لفّات لتختار الشبك المطابق للمخططات.',
      },
    ],
    specs: [
      { label: { en: 'Type', ar: 'النوع' }, value: { en: 'Electric fusion-welded mesh', ar: 'شبك ملحوم كهربائياً' } },
      { label: { en: 'References', ar: 'المقاسات المرجعية' }, value: { en: 'A142, A193, A252, A393', ar: 'A142، A193، A252، A393' } },
      { label: { en: 'Form', ar: 'الشكل' }, value: { en: 'Flat sheets or rolls', ar: 'ألواح مسطحة أو لفّات' } },
      { label: { en: 'Material', ar: 'المادة' }, value: { en: 'Steel wire', ar: 'سلك حديد' } },
    ],
    applications: [
      { en: 'Ground-bearing slabs', ar: 'بلاطات الأرضيات' },
      { en: 'Floor screeds and toppings', ar: 'التسويات والطبقات العلوية للأرضيات' },
      { en: 'Precast panels', ar: 'الألواح مسبقة الصب' },
      { en: 'Crack control in walls and paving', ar: 'التحكم بالتشققات في الجدران والأرصفة' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: 'A142, A193, A252, A393', ar: 'A142، A193، A252، A393' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Flat sheets or rolls', ar: 'ألواح مسطحة أو لفّات' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per sheet or per roll', ar: 'باللوح أو باللفّة' } },
    ],
    images: [
      { id: '1793280252157-f14680709d2b', alt: { en: 'Welded steel mesh forming a square grid', ar: 'شبك حديد ملحوم على شكل مربعات' } },
      { id: '1793280252141-abeedea9969e', alt: { en: 'Stacked sheets of steel reinforcement mesh', ar: 'ألواح شبك تسليح مكدّسة' } },
      { id: '1768677903496-becc4be07258', alt: { en: 'Steel reinforcement laid out on a building site', ar: 'حديد تسليح مفروش في موقع بناء' } },
    ],
  },

  {
    slug: 'binding-wire',
    group: 'steel',
    name: { en: 'Binding Wire', ar: 'سلك الربط' },
    benefit: {
      en: 'Soft annealed tie wire for quick, secure rebar tying on site.',
      ar: 'سلك ربط مُليّن لربط حديد التسليح بسرعة وثبات في الموقع.',
    },
    tags: [
      { en: '1.2–1.6 mm', ar: '1.2–1.6 مم' },
      { en: 'Black annealed', ar: 'أسود مُليّن' },
      { en: 'Coils', ar: 'لفّات' },
    ],
    summary: {
      en: 'black annealed tie wire, 1.2–1.6 mm, in coils',
      ar: 'سلك ربط أسود مُليّن، 1.2–1.6 مم، في لفّات',
    },
    overview: [
      {
        en: 'Binding wire holds reinforcement bars in place while concrete is poured. Annealing makes the wire soft and flexible, so steel fixers can twist it tight around crossing bars by hand or with pliers without it snapping.',
        ar: 'يثبّت سلك الربط أسياخ التسليح في مكانها أثناء صب الخرسانة. التليين يجعل السلك طرياً ومرناً، فيلفّه الحدادون بإحكام حول الأسياخ المتقاطعة باليد أو بالكمّاشة دون أن ينقطع.',
      },
      {
        en: 'We supply black annealed tie wire in coils, in the gauges commonly used on UAE sites. It is usually ordered with rebar and mesh, so one delivery covers the whole reinforcement package.',
        ar: 'نورّد سلك الربط الأسود المُليّن في لفّات وبالسماكات الشائعة في مواقع الإمارات. وعادة يُطلب مع حديد التسليح والشبك، فيغطي توصيل واحد حزمة التسليح كاملة.',
      },
    ],
    specs: [
      { label: { en: 'Type', ar: 'النوع' }, value: { en: 'Black annealed tie wire', ar: 'سلك ربط أسود مُليّن' } },
      { label: { en: 'Diameter', ar: 'القطر' }, value: { en: '1.2–1.6 mm', ar: '1.2–1.6 مم' } },
      { label: { en: 'Form', ar: 'الشكل' }, value: { en: 'Coils', ar: 'لفّات' } },
      { label: { en: 'Finish', ar: 'التشطيب' }, value: { en: 'Black, uncoated', ar: 'أسود بدون طلاء' } },
    ],
    applications: [
      { en: 'Tying rebar at crossings', ar: 'ربط حديد التسليح عند التقاطعات' },
      { en: 'Fixing mesh to bars', ar: 'تثبيت الشبك على الأسياخ' },
      { en: 'Securing spacers and chairs', ar: 'تثبيت الفواصل والكراسي' },
      { en: 'General site tying', ar: 'أعمال الربط العامة في الموقع' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: '1.2–1.6 mm wire', ar: 'سلك 1.2–1.6 مم' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Coils', ar: 'لفّات' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per coil', ar: 'باللفّة' } },
    ],
    images: [
      { id: '1644238017851-21f15062c213', alt: { en: 'Coil of steel wire', ar: 'لفّة سلك حديد' } },
      { id: '1736793513114-ba3d41fec65a', alt: { en: 'Steel wire wound into a coil', ar: 'سلك حديد ملفوف' } },
      { id: '1768677903496-becc4be07258', alt: { en: 'Worker checking tied rebar on a building site', ar: 'عامل يفحص حديد التسليح المربوط في موقع بناء' } },
    ],
  },

  {
    slug: 'white-wood',
    group: 'timber',
    name: { en: 'White Wood', ar: 'الخشب الأبيض' },
    benefit: {
      en: 'Light, easy-to-work softwood for formwork, framing and finishing.',
      ar: 'خشب طري خفيف وسهل التشغيل للشدّات والهياكل وأعمال التشطيب.',
    },
    tags: [
      { en: 'Softwood', ar: 'خشب طري' },
      { en: 'Common sections', ar: 'مقاطع شائعة' },
      { en: 'Various lengths', ar: 'أطوال مختلفة' },
    ],
    summary: {
      en: 'sawn softwood in common sections and various lengths for formwork and finishing',
      ar: 'خشب طري منشور بمقاطع شائعة وأطوال مختلفة للشدّات والتشطيب',
    },
    overview: [
      {
        en: 'White wood is a pale softwood that is light to handle and easy to cut, nail and plane. On site it is the everyday timber for formwork supports, battens, bracing and temporary works.',
        ar: 'الخشب الأبيض خشب طري فاتح اللون، خفيف في الحمل وسهل القص والتسمير والتسوية. وهو الخشب اليومي في المواقع لدعامات الشدّات والعوارض والتدعيم والأعمال المؤقتة.',
      },
      {
        en: 'Its clean, even colour also suits interior joinery and finishing. We supply the common sawn sections in a range of lengths; send us your cutting list and we will match it.',
        ar: 'ولونه النظيف المتجانس يناسب أيضاً أعمال النجارة الداخلية والتشطيب. نورّد المقاطع المنشورة الشائعة بأطوال مختلفة؛ أرسل لنا قائمة القص ونطابقها لك.',
      },
    ],
    specs: [
      { label: { en: 'Type', ar: 'النوع' }, value: { en: 'Softwood (white wood)', ar: 'خشب طري (أبيض)' } },
      { label: { en: 'Finish', ar: 'التشطيب' }, value: { en: 'Sawn', ar: 'منشور' } },
      { label: { en: 'Sections', ar: 'المقاطع' }, value: { en: 'Common construction sizes', ar: 'مقاسات البناء الشائعة' } },
      { label: { en: 'Lengths', ar: 'الأطوال' }, value: { en: 'Various', ar: 'مختلفة' } },
    ],
    applications: [
      { en: 'Formwork and shuttering supports', ar: 'دعامات الشدّات والقوالب' },
      { en: 'Battens, bracing and props', ar: 'العوارض والتدعيم والقوائم' },
      { en: 'Temporary site works', ar: 'الأعمال المؤقتة في الموقع' },
      { en: 'Interior joinery and finishing', ar: 'النجارة الداخلية والتشطيب' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: 'Common sawn sections, various lengths', ar: 'مقاطع منشورة شائعة بأطوال مختلفة' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Loose pieces or bundles', ar: 'قطع منفردة أو حزم' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per piece or per cubic metre', ar: 'بالقطعة أو بالمتر المكعب' } },
    ],
    images: [
      { id: '1634672652995-ee7525bce595', alt: { en: 'Stack of sawn timber planks', ar: 'كومة من ألواح الخشب المنشور' } },
      { id: '1783779858962-5ec92319583c', alt: { en: 'Worker arranging timber planks in a storage yard', ar: 'عامل يرتّب ألواح الخشب في مستودع' } },
      { id: '1761718061033-2cdc5b3ec64d', alt: { en: 'Stacks of timber outside a building', ar: 'أكوام من الخشب أمام مبنى' } },
    ],
  },

  {
    slug: 'marine-plywood',
    group: 'timber',
    name: { en: 'Marine Plywood', ar: 'البلايوود البحري (مارين)' },
    benefit: {
      en: 'WBP-bonded plywood that holds up in wet and humid site conditions.',
      ar: 'بلايوود بلاصق مقاوم للماء يتحمّل الرطوبة والظروف المبللة في المواقع.',
    },
    tags: [
      { en: 'WBP bonded', ar: 'لاصق WBP مقاوم للماء' },
      { en: '1220×2440 mm', ar: '1220×2440 مم' },
      { en: '12 / 18 mm', ar: '12 / 18 مم' },
    ],
    summary: {
      en: 'WBP waterproof bonded, 1220×2440 mm, 12 and 18 mm, for formwork and wet areas',
      ar: 'لاصق WBP مقاوم للماء، 1220×2440 مم، سماكة 12 و18 مم، للشدّات والأماكن الرطبة',
    },
    overview: [
      {
        en: 'Marine plywood is built from veneer layers bonded with a waterproof (WBP) adhesive, so the sheets keep their strength when exposed to water and humidity. That makes it a dependable choice for formwork reused across several pours.',
        ar: 'يُصنع البلايوود البحري من طبقات قشرة خشبية ملصقة بلاصق مقاوم للماء (WBP)، فتحافظ الألواح على قوتها عند التعرض للماء والرطوبة. لذلك هو خيار موثوق للشدّات التي يُعاد استخدامها في أكثر من صبّة.',
      },
      {
        en: 'It is also used wherever boards stay damp or outdoors, such as wet areas, external joinery and waterfront work. We supply full sheets in the standard size and common thicknesses.',
        ar: 'ويُستخدم أيضاً حيث تبقى الألواح رطبة أو في الخارج، مثل الأماكن الرطبة والنجارة الخارجية والأعمال قرب الماء. نورّد ألواحاً كاملة بالمقاس القياسي والسماكات الشائعة.',
      },
    ],
    specs: [
      { label: { en: 'Bonding', ar: 'اللاصق' }, value: { en: 'WBP (waterproof)', ar: 'WBP (مقاوم للماء)' } },
      { label: { en: 'Sheet size', ar: 'مقاس اللوح' }, value: { en: '1220 × 2440 mm', ar: '1220 × 2440 مم' } },
      { label: { en: 'Thickness', ar: 'السماكة' }, value: { en: '12 mm, 18 mm', ar: '12 مم، 18 مم' } },
      { label: { en: 'Construction', ar: 'التركيب' }, value: { en: 'Multi-layer veneer', ar: 'طبقات قشرة متعددة' } },
    ],
    applications: [
      { en: 'Concrete formwork and shuttering', ar: 'شدّات وقوالب الخرسانة' },
      { en: 'Wet areas and external work', ar: 'الأماكن الرطبة والأعمال الخارجية' },
      { en: 'Waterfront and marine work', ar: 'الأعمال البحرية وقرب الماء' },
      { en: 'Heavy-duty site hoarding', ar: 'أسوار المواقع للاستخدام الشاق' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: '1220 × 2440 mm, 12 or 18 mm thick', ar: '1220 × 2440 مم، بسماكة 12 أو 18 مم' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Full sheets, loose or in bundles', ar: 'ألواح كاملة، منفردة أو في حزم' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per sheet', ar: 'باللوح' } },
    ],
    images: [
      { id: '1690768162439-7ca7a1813038', alt: { en: 'Stack of plywood sheets', ar: 'رزمة من ألواح البلايوود' } },
      { id: '1605390044035-36f50ff9cfd6', alt: { en: 'Close-up of a wooden board surface', ar: 'لقطة قريبة لسطح لوح خشبي' } },
      { id: '1773430273270-76f0a17224d0', alt: { en: 'Workers building a timber structure outdoors', ar: 'عمال يبنون هيكلاً خشبياً في الهواء الطلق' } },
    ],
  },

  {
    slug: 'commercial-plywood',
    group: 'timber',
    name: { en: 'Commercial Plywood', ar: 'البلايوود التجاري' },
    benefit: {
      en: 'Versatile, cost-effective plywood for general construction and shuttering.',
      ar: 'بلايوود متعدد الاستخدامات واقتصادي للأعمال الإنشائية العامة والشدّات.',
    },
    tags: [
      { en: '1220×2440 mm', ar: '1220×2440 مم' },
      { en: 'Multiple thicknesses', ar: 'سماكات متعددة' },
      { en: 'General construction', ar: 'أعمال إنشائية عامة' },
    ],
    summary: {
      en: '1220×2440 mm sheets in multiple thicknesses for shuttering and general construction',
      ar: 'ألواح 1220×2440 مم بسماكات متعددة للشدّات والأعمال الإنشائية العامة',
    },
    overview: [
      {
        en: 'Commercial plywood is a cost-effective board for everyday construction. Its cross-laminated veneers give good strength and stability for its weight, and it cuts cleanly with standard tools.',
        ar: 'البلايوود التجاري لوح اقتصادي للأعمال الإنشائية اليومية. طبقاته المتعامدة تمنحه قوة وثباتاً جيدين مقارنة بوزنه، ويُقص بسهولة بالأدوات العادية.',
      },
      {
        en: 'Contractors use it for shuttering, site hoarding, temporary partitions and packing. For formwork that will be wetted again and again, marine plywood is the better choice. We supply full sheets in several thicknesses.',
        ar: 'يستخدمه المقاولون للشدّات وأسوار المواقع والقواطع المؤقتة والتغليف. أما للشدّات التي تتعرض للبلل مراراً، فالبلايوود البحري هو الخيار الأفضل. نورّد ألواحاً كاملة بعدة سماكات.',
      },
    ],
    specs: [
      { label: { en: 'Sheet size', ar: 'مقاس اللوح' }, value: { en: '1220 × 2440 mm', ar: '1220 × 2440 مم' } },
      { label: { en: 'Thickness', ar: 'السماكة' }, value: { en: 'Multiple, on request', ar: 'متعددة، حسب الطلب' } },
      { label: { en: 'Construction', ar: 'التركيب' }, value: { en: 'Cross-laminated veneer', ar: 'قشرة خشبية بطبقات متعامدة' } },
      { label: { en: 'Use', ar: 'الاستخدام' }, value: { en: 'General construction and shuttering', ar: 'أعمال إنشائية عامة وشدّات' } },
    ],
    applications: [
      { en: 'Shuttering and formwork', ar: 'الشدّات والقوالب' },
      { en: 'Site hoarding and partitions', ar: 'أسوار المواقع والقواطع' },
      { en: 'Temporary works and packing', ar: 'الأعمال المؤقتة والتغليف' },
      { en: 'Fit-out and furniture bases', ar: 'قواعد أعمال التشطيب والأثاث' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: '1220 × 2440 mm, several thicknesses', ar: '1220 × 2440 مم، بعدة سماكات' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Full sheets, loose or in bundles', ar: 'ألواح كاملة، منفردة أو في حزم' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per sheet', ar: 'باللوح' } },
    ],
    images: [
      { id: '1700973408133-b45276ec8feb', alt: { en: 'Stacked wooden boards', ar: 'ألواح خشبية مكدّسة' } },
      { id: '1611072337226-1140ab367200', alt: { en: 'Light wood board surface', ar: 'سطح لوح خشبي فاتح' } },
      { id: '1523034572918-be25535ca417', alt: { en: 'Close-up of a wooden board', ar: 'لقطة قريبة للوح خشبي' } },
    ],
  },

  {
    slug: 'portland-limestone-cement',
    group: 'cement',
    name: { en: 'Portland Limestone Cement (PLC)', ar: 'الإسمنت البورتلاندي الجيري (PLC)' },
    benefit: {
      en: 'Bagged cement from approved UAE factories for concrete, mortar and plaster.',
      ar: 'إسمنت معبّأ من مصانع إماراتية معتمدة للخرسانة والمونة واللياسة.',
    },
    tags: [
      { en: '50 kg bags', ar: 'أكياس 50 كغ' },
      { en: 'Approved UAE factories', ar: 'مصانع إماراتية معتمدة' },
      { en: 'Bulk project supply', ar: 'توريد كميات للمشاريع' },
    ],
    summary: {
      en: '50 kg bags from approved UAE factories, bulk supply for projects',
      ar: 'أكياس 50 كغ من مصانع إماراتية معتمدة، توريد كميات للمشاريع',
    },
    overview: [
      {
        en: 'Portland limestone cement blends Portland clinker with finely ground limestone. It sets and gains strength much like ordinary Portland cement and covers most general concrete, mortar and plaster work.',
        ar: 'يمزج الإسمنت البورتلاندي الجيري بين الكلنكر البورتلاندي والحجر الجيري المطحون ناعماً. يتصلّب ويكتسب قوته بشكل قريب من الإسمنت البورتلاندي العادي، ويناسب معظم أعمال الخرسانة والمونة واللياسة العامة.',
      },
      {
        en: 'We supply PLC in 50 kg bags from approved UAE cement factories, from small site orders up to regular deliveries for larger projects. Tell us your monthly requirement for project pricing.',
        ar: 'نورّد إسمنت PLC في أكياس 50 كغ من مصانع إسمنت إماراتية معتمدة، من الطلبات الصغيرة إلى التوريد المنتظم للمشاريع الكبيرة. أخبرنا باحتياجك الشهري لنقدّم لك سعر المشروع.',
      },
    ],
    specs: [
      { label: { en: 'Type', ar: 'النوع' }, value: { en: 'Portland limestone cement (PLC)', ar: 'إسمنت بورتلاندي جيري (PLC)' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: '50 kg bags', ar: 'أكياس 50 كغ' } },
      { label: { en: 'Source', ar: 'المصدر' }, value: { en: 'Approved UAE cement factories', ar: 'مصانع إسمنت إماراتية معتمدة' } },
      { label: { en: 'Supply', ar: 'التوريد' }, value: { en: 'Site orders and bulk project supply', ar: 'طلبات المواقع وتوريد كميات للمشاريع' } },
    ],
    applications: [
      { en: 'Structural and general concrete', ar: 'الخرسانة الإنشائية والعامة' },
      { en: 'Block-laying mortar', ar: 'مونة بناء البلوك' },
      { en: 'Plaster and render', ar: 'اللياسة والتلبيس' },
      { en: 'Screeds and repairs', ar: 'التسويات وأعمال الترميم' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: '50 kg bag', ar: 'كيس 50 كغ' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Bags', ar: 'أكياس' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per bag or by truckload', ar: 'بالكيس أو بحمولة الشاحنة' } },
    ],
    images: [
      { id: '1773394089934-3e29f2a3d6a9', alt: { en: 'Stacks of cement bags in sunlight', ar: 'أكياس إسمنت مكدّسة تحت أشعة الشمس' } },
      { id: '1745680636997-dca47973113d', alt: { en: 'Filled sacks standing against a wall', ar: 'أكياس معبّأة مسنودة إلى جدار' } },
      { id: '1774931363306-5a896cd4dd02', alt: { en: 'Workers pouring concrete on a sunny day', ar: 'عمال يصبّون الخرسانة في يوم مشمس' } },
    ],
  },

  {
    slug: 'sand',
    group: 'cement',
    name: { en: 'Sand (Various Types)', ar: 'الرمل (أنواع مختلفة)' },
    benefit: {
      en: 'Washed, plaster, construction and landscaping sand, delivered by the load.',
      ar: 'رمل مغسول ورمل لياسة ورمل بناء ورمل تنسيق حدائق، يورَّد بالحمولة.',
    },
    tags: [
      { en: 'Washed · plaster · construction', ar: 'مغسول · لياسة · بناء' },
      { en: 'Pickup to trailer loads', ar: 'من البيك أب إلى التريلا' },
    ],
    summary: {
      en: 'washed, plaster, construction and landscaping sand by pickup, 6-wheeler or trailer load',
      ar: 'رمل مغسول ولياسة وبناء وتنسيق حدائق، بحمولة بيك أب أو شاحنة 6 عجلات أو تريلا',
    },
    overview: [
      {
        en: 'Different jobs need different sand. Washed sand is cleaned of silt and clay for concrete and screeds, plaster sand is finer for smooth wall finishes, construction sand suits filling and block work, and landscaping sand is used for levelling and garden work.',
        ar: 'لكل عمل نوع الرمل المناسب له. الرمل المغسول خالٍ من الطمي والطين للخرسانة والتسويات، ورمل اللياسة أنعم لتشطيب الجدران بسطح أملس، ورمل البناء للردم وأعمال البلوك، ورمل التنسيق للتسوية وأعمال الحدائق.',
      },
      {
        en: 'We deliver by pickup, 6-wheeler or trailer load, so you can order the volume that matches the stage of your project. Tell us the type and quantity and we will quote delivered to site.',
        ar: 'نوصل الرمل بحمولة بيك أب أو شاحنة 6 عجلات أو تريلا، لتطلب الكمية التي تناسب مرحلة مشروعك. أخبرنا بالنوع والكمية ونقدّم لك سعراً شاملاً التوصيل إلى الموقع.',
      },
    ],
    specs: [
      { label: { en: 'Types', ar: 'الأنواع' }, value: { en: 'Washed, plaster, construction, landscaping', ar: 'مغسول، لياسة، بناء، تنسيق حدائق' } },
      { label: { en: 'Delivery', ar: 'التوصيل' }, value: { en: 'Pickup, 6-wheeler or trailer', ar: 'بيك أب، شاحنة 6 عجلات أو تريلا' } },
      { label: { en: 'Supply', ar: 'التوريد' }, value: { en: 'Loose, by the load', ar: 'سائب، بالحمولة' } },
    ],
    applications: [
      { en: 'Concrete and screeds', ar: 'الخرسانة والتسويات' },
      { en: 'Plastering and rendering', ar: 'اللياسة والتلبيس' },
      { en: 'Block work and backfilling', ar: 'أعمال البلوك والردم' },
      { en: 'Landscaping and levelling', ar: 'تنسيق الحدائق والتسوية' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: 'Pickup, 6-wheeler or trailer load', ar: 'حمولة بيك أب أو شاحنة 6 عجلات أو تريلا' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Loose, delivered by truck', ar: 'سائب، يوصل بالشاحنة' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per load', ar: 'بالحمولة' } },
    ],
    images: [
      { id: '1785791516517-aae4ca2fcfcb', alt: { en: 'Large sand and gravel piles with conveyors', ar: 'أكوام كبيرة من الرمل والحصى مع سيور ناقلة' } },
      { id: '1785791516569-07a837fb07b7', alt: { en: 'Sand processing machinery beside a sand pile', ar: 'معدات معالجة الرمل بجانب كومة رمل' } },
      { id: '1648219247849-84242c30aad7', alt: { en: 'Pile of sand on a pavement', ar: 'كومة رمل على رصيف' } },
    ],
  },

  {
    slug: 'polythene-sheet',
    group: 'sheets',
    name: { en: 'Polythene Sheet', ar: 'شرائح البولي إيثيلين (نايلون)' },
    benefit: {
      en: 'Damp-proof membrane and curing sheet that keeps moisture where it belongs.',
      ar: 'غشاء عازل للرطوبة وغطاء معالجة يمنع وصول الرطوبة ويحافظ على الخرسانة.',
    },
    tags: [
      { en: '500–1000 gauge', ar: 'سماكة 500–1000 جيج' },
      { en: 'Damp-proof / curing', ar: 'عزل رطوبة / معالجة' },
      { en: 'Rolls', ar: 'لفّات' },
    ],
    summary: {
      en: 'damp-proof membrane and curing sheet, 500–1000 gauge, in rolls',
      ar: 'غشاء عازل للرطوبة وغطاء معالجة، سماكة 500–1000 جيج، في لفّات',
    },
    overview: [
      {
        en: 'Polythene sheet is laid under ground slabs as a damp-proof membrane, stopping moisture in the ground from rising into the concrete. It also stops fresh concrete losing water too quickly into the sub-base.',
        ar: 'تُفرش شرائح البولي إيثيلين تحت بلاطات الأرضيات كغشاء عازل للرطوبة، فتمنع صعود رطوبة التربة إلى الخرسانة. كما تمنع الخرسانة الطازجة من فقدان مائها بسرعة في طبقة الأساس.',
      },
      {
        en: 'On site it also works as a curing cover, a dust and paint protection sheet and a temporary weather screen. We supply rolls in the common gauges; heavier gauges resist tearing better under foot traffic and rebar.',
        ar: 'وتُستخدم في الموقع أيضاً كغطاء لمعالجة الخرسانة، وكغطاء حماية من الغبار والدهان، وكحاجز مؤقت من الطقس. نورّد لفّات بالسماكات الشائعة؛ والسماكات الأعلى تقاوم التمزق أكثر تحت حركة العمال والحديد.',
      },
    ],
    specs: [
      { label: { en: 'Material', ar: 'المادة' }, value: { en: 'Polyethylene sheet', ar: 'شرائح بولي إيثيلين' } },
      { label: { en: 'Gauge', ar: 'السماكة' }, value: { en: '500–1000 gauge', ar: '500–1000 جيج' } },
      { label: { en: 'Form', ar: 'الشكل' }, value: { en: 'Rolls', ar: 'لفّات' } },
      { label: { en: 'Use', ar: 'الاستخدام' }, value: { en: 'Damp-proof membrane and curing', ar: 'عزل الرطوبة ومعالجة الخرسانة' } },
    ],
    applications: [
      { en: 'Damp-proof membrane under slabs', ar: 'غشاء عازل للرطوبة تحت البلاطات' },
      { en: 'Concrete curing cover', ar: 'غطاء لمعالجة الخرسانة' },
      { en: 'Protection during painting and finishing', ar: 'حماية أثناء الدهان والتشطيب' },
      { en: 'Temporary weather protection', ar: 'حماية مؤقتة من الطقس' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: '500–1000 gauge', ar: '500–1000 جيج' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Rolls', ar: 'لفّات' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per roll', ar: 'باللفّة' } },
    ],
    images: [
      { id: '1787422660673-3fb482d28f94', alt: { en: 'Black waterproof membrane covering a timber wall frame', ar: 'غشاء أسود عازل للماء يغطي هيكل جدار خشبي' } },
      { id: '1761434558151-e94186937da9', alt: { en: 'Steel beams covered with dark plastic sheeting', ar: 'جسور حديدية مغطاة بشرائح بلاستيكية داكنة' } },
      { id: '1786295866836-2949bbd847cd', alt: { en: 'Worker taping plastic sheet over a window', ar: 'عامل يثبّت غطاءً بلاستيكياً فوق نافذة' } },
    ],
  },

  {
    slug: 'flexel-insulation-board',
    group: 'sheets',
    name: { en: 'Insulation (Flexel) Board', ar: 'لوح فلكسل العازل' },
    benefit: {
      en: 'Bitumen-impregnated fibre board that protects waterproofing and fills expansion joints.',
      ar: 'لوح ألياف مشبّع بالبيتومين يحمي طبقات العزل ويملأ فواصل التمدد.',
    },
    tags: [
      { en: '1220×2440 mm', ar: '1220×2440 مم' },
      { en: '12 mm', ar: '12 مم' },
      { en: 'Bitumen-impregnated', ar: 'مشبّع بالبيتومين' },
    ],
    summary: {
      en: 'bitumen-impregnated fibre board, 1220×2440 mm, 12 mm, for waterproofing protection and expansion joints',
      ar: 'لوح ألياف مشبّع بالبيتومين، 1220×2440 مم، سماكة 12 مم، لحماية العزل وفواصل التمدد',
    },
    overview: [
      {
        en: 'Flexel board is a fibre board impregnated with bitumen, which keeps it firm, water-resistant and slightly compressible. Placed against below-ground walls, it shields the waterproofing membrane from damage during backfilling.',
        ar: 'لوح فلكسل لوح ألياف مشبّع بالبيتومين، مما يجعله متماسكاً ومقاوماً للماء وقابلاً للانضغاط قليلاً. عند تثبيته على الجدران تحت الأرض، يحمي غشاء العزل المائي من التلف أثناء الردم.',
      },
      {
        en: 'Because it compresses and recovers, it is also used as a joint filler in concrete slabs and walls, letting the concrete expand and contract without cracking. We supply full sheets that can be cut to joint widths on site.',
        ar: 'ولأنه ينضغط ثم يستعيد شكله، يُستخدم أيضاً كحشوة لفواصل التمدد في البلاطات والجدران الخرسانية، فيسمح للخرسانة بالتمدد والانكماش دون أن تتشقق. نورّد ألواحاً كاملة يمكن قصها بعرض الفاصل في الموقع.',
      },
    ],
    specs: [
      { label: { en: 'Material', ar: 'المادة' }, value: { en: 'Bitumen-impregnated fibre board', ar: 'لوح ألياف مشبّع بالبيتومين' } },
      { label: { en: 'Sheet size', ar: 'مقاس اللوح' }, value: { en: '1220 × 2440 mm', ar: '1220 × 2440 مم' } },
      { label: { en: 'Thickness', ar: 'السماكة' }, value: { en: '12 mm', ar: '12 مم' } },
      { label: { en: 'Properties', ar: 'الخصائص' }, value: { en: 'Water-resistant, compressible', ar: 'مقاوم للماء، قابل للانضغاط' } },
    ],
    applications: [
      { en: 'Protection board over waterproofing', ar: 'لوح حماية فوق طبقات العزل المائي' },
      { en: 'Expansion joint filler in slabs', ar: 'حشوة فواصل التمدد في البلاطات' },
      { en: 'Isolation joints around columns and walls', ar: 'فواصل العزل حول الأعمدة والجدران' },
      { en: 'Paving and hard landscaping joints', ar: 'فواصل الأرصفة وأعمال التنسيق الصلبة' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: '1220 × 2440 mm, 12 mm thick', ar: '1220 × 2440 مم، بسماكة 12 مم' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Full sheets', ar: 'ألواح كاملة' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per sheet', ar: 'باللوح' } },
    ],
    images: [
      { id: '1757547601902-61787bb24fb1', alt: { en: 'Concrete wall with a horizontal joint line', ar: 'جدار خرساني فيه خط فاصل أفقي' } },
      { id: '1774931363306-5a896cd4dd02', alt: { en: 'Workers pouring a concrete slab', ar: 'عمال يصبّون بلاطة خرسانية' } },
      { id: '1616179058441-37aa58affac8', alt: { en: 'Grey concrete wall', ar: 'جدار خرساني رمادي' } },
    ],
  },

  {
    slug: 'wood-nails',
    group: 'fixings',
    name: { en: 'Wood Nails', ar: 'مسامير الخشب' },
    benefit: {
      en: 'Common wire nails for formwork, framing and general carpentry.',
      ar: 'مسامير سلكية عادية للشدّات والهياكل الخشبية وأعمال النجارة العامة.',
    },
    tags: [
      { en: '1"–6"', ar: '1–6 إنش' },
      { en: 'Common wire nails', ar: 'مسامير سلكية عادية' },
      { en: 'Boxes / cartons', ar: 'علب / كراتين' },
    ],
    summary: {
      en: 'common wire nails from 1" to 6" in boxes and cartons',
      ar: 'مسامير سلكية عادية من 1 إلى 6 إنش في علب وكراتين',
    },
    overview: [
      {
        en: 'Common wire nails are the everyday fixing for timber on site. Their flat heads and smooth shanks make them quick to drive and easy to pull out when formwork is stripped.',
        ar: 'المسامير السلكية العادية هي وسيلة التثبيت اليومية للخشب في المواقع. رؤوسها المسطحة وأجسامها الملساء تجعل دقّها سريعاً ونزعها سهلاً عند فك الشدّات.',
      },
      {
        en: 'We supply lengths from 1 inch for light work up to 6 inches for heavy timber and formwork, packed in boxes or cartons. Order them with your white wood and plywood to keep it to one delivery.',
        ar: 'نورّد أطوالاً من 1 إنش للأعمال الخفيفة حتى 6 إنش للأخشاب الثقيلة والشدّات، معبّأة في علب أو كراتين. اطلبها مع الخشب الأبيض والبلايوود ليصلك كل شيء في توصيل واحد.',
      },
    ],
    specs: [
      { label: { en: 'Type', ar: 'النوع' }, value: { en: 'Common wire nails', ar: 'مسامير سلكية عادية' } },
      { label: { en: 'Lengths', ar: 'الأطوال' }, value: { en: '1"–6"', ar: '1–6 إنش' } },
      { label: { en: 'Head', ar: 'الرأس' }, value: { en: 'Flat', ar: 'مسطح' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Boxes / cartons', ar: 'علب / كراتين' } },
    ],
    applications: [
      { en: 'Formwork and shuttering', ar: 'الشدّات والقوالب' },
      { en: 'Timber framing and bracing', ar: 'الهياكل الخشبية والتدعيم' },
      { en: 'Crates, pallets and packing', ar: 'الصناديق والطبليات والتغليف' },
      { en: 'General carpentry', ar: 'أعمال النجارة العامة' },
    ],
    supply: [
      { label: { en: 'Sizes', ar: 'المقاسات' }, value: { en: '1" to 6"', ar: 'من 1 إلى 6 إنش' } },
      { label: { en: 'Packing', ar: 'التعبئة' }, value: { en: 'Boxes or cartons', ar: 'علب أو كراتين' } },
      { label: { en: 'Supply unit', ar: 'وحدة التوريد' }, value: { en: 'Per box or per carton', ar: 'بالعلبة أو بالكرتونة' } },
    ],
    images: [
      { id: '1640958899091-a1f55539eac0', alt: { en: 'Pile of steel wire nails', ar: 'كومة من المسامير السلكية' } },
      { id: '1792363896614-03613e6697d0', alt: { en: 'Hammer, wooden block and nails on a dark surface', ar: 'مطرقة وقطعة خشب ومسامير على سطح داكن' } },
    ],
  },
];

export const findProduct = (slug: string) => products.find((p) => p.slug === slug);

export const groupName = (id: GroupId) => groups.find((g) => g.id === id)!.name;

/** Up to `count` related products: same group first, then the rest of the catalogue in order. */
export function relatedProducts(product: Product, count = 3) {
  const same = products.filter((p) => p.group === product.group && p.slug !== product.slug);
  const others = products.filter((p) => p.group !== product.group);
  return [...same, ...others].slice(0, count);
}

/** Hero photo for the Building Materials page. */
export const materialsHero: ProductImage = {
  id: '1697164191047-704c373c0679',
  alt: {
    en: 'Building under construction with tower cranes at sunset',
    ar: 'مبنى قيد الإنشاء مع رافعات برجية عند الغروب',
  },
};

/** Unsplash image URL cropped to 4:3 (or the given ratio), served as WebP. */
export function imageUrl(id: string, width: number, ratio = 3 / 4) {
  const height = Math.round(width * ratio);
  return `https://images.unsplash.com/photo-${id}?auto=format&fm=webp&fit=crop&w=${width}&h=${height}&q=70`;
}

export function imageSrcSet(id: string, widths: number[], ratio = 3 / 4) {
  return widths.map((w) => `${imageUrl(id, w, ratio)} ${w}w`).join(', ');
}
