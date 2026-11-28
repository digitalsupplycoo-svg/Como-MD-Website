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

export const groups: { id: GroupId; name: string }[] = [
  { id: 'steel', name: 'Steel & Reinforcement' },
  { id: 'timber', name: 'Timber & Plywood' },
  { id: 'cement', name: 'Cement & Aggregates' },
  { id: 'sheets', name: 'Sheets & Protection' },
  { id: 'fixings', name: 'Fixings' },
];

export type ProductImage = {
  /** Unsplash photo ID (the part after "photo-" in an images.unsplash.com link). */
  id: string;
  alt: string;
};

export type Product = {
  slug: string;
  group: GroupId;
  name: string;
  /** One-line benefit shown on the card. */
  benefit: string;
  /** 2–3 short spec tags shown on the card. */
  tags: string[];
  /** Short spec summary used in the search-engine description. */
  summary: string;
  overview: [string, string];
  specs: { label: string; value: string }[];
  applications: string[];
  supply: { label: string; value: string }[];
  images: ProductImage[];
};

export const products: Product[] = [
  {
    slug: 'deformed-steel-bars',
    group: 'steel',
    name: 'Deformed Steel Bars (Rebar)',
    benefit: 'Ribbed reinforcement bars that grip concrete for strong, crack-resistant structures.',
    tags: [
      'Ø8–32 mm',
      'B500B / A615 Gr.60',
      '12 m lengths',
    ],
    summary: 'Ø8–32 mm, B500B / ASTM A615 Gr.60, 12 m lengths, by the ton',
    overview: [
      'Deformed bars carry the tension that concrete cannot take on its own. The raised ribs along each bar lock into the surrounding concrete, so loads pass evenly through foundations, columns, beams and slabs.',
      'We supply straight bars in standard 12-metre lengths across the common diameters, ready to cut and bend on site or at your steel fixing yard. Send us your bar schedule and we will quote by the ton.',
    ],
    specs: [
      { label: 'Diameter', value: '8–32 mm' },
      { label: 'Grade', value: 'B500B / ASTM A615 Grade 60' },
      { label: 'Length', value: '12 m' },
      { label: 'Surface', value: 'Ribbed (deformed)' },
    ],
    applications: [
      'Foundations and raft slabs',
      'Columns, beams and slabs',
      'Retaining walls and water tanks',
      'Precast concrete elements',
    ],
    supply: [
      { label: 'Sizes', value: 'Common diameters from Ø8 to Ø32 mm' },
      { label: 'Packing', value: 'Tied bundles of 12 m bars' },
      { label: 'Supply unit', value: 'Per ton' },
    ],
    images: [
      { id: '1763771420303-0f11ccf613d1', alt: 'Bundled steel rebar ready for construction' },
      { id: '1745909247906-123b53b70e06', alt: 'Rebar stacked horizontally, showing the ribbed surface' },
      { id: '1794329117362-2d41b1282f47', alt: 'Close-up of ribbed steel bars' },
      { id: '1768677903496-becc4be07258', alt: 'Worker checking rebar on a building site' },
    ],
  },

  {
    slug: 'wire-mesh',
    group: 'steel',
    name: 'Wire Mesh',
    benefit: 'Pre-welded reinforcement grids that cut fixing time on slabs and walls.',
    tags: [
      'A142–A393',
      'Fusion-welded',
      'Sheets or rolls',
    ],
    summary: 'electric fusion-welded mesh, A142, A193, A252, A393, sheets or rolls',
    overview: [
      'Welded wire mesh is a grid of steel wires joined by electric fusion welding at every crossing. Because the spacing is set at the factory, it goes down faster and more evenly than loose bars tied by hand.',
      'It is a standard choice for ground slabs, screeds, precast panels and crack control in walls. We supply the common reference sizes as flat sheets or rolls, so you can match the mesh to your drawings.',
    ],
    specs: [
      { label: 'Type', value: 'Electric fusion-welded mesh' },
      { label: 'References', value: 'A142, A193, A252, A393' },
      { label: 'Form', value: 'Flat sheets or rolls' },
      { label: 'Material', value: 'Steel wire' },
    ],
    applications: [
      'Ground-bearing slabs',
      'Floor screeds and toppings',
      'Precast panels',
      'Crack control in walls and paving',
    ],
    supply: [
      { label: 'Sizes', value: 'A142, A193, A252, A393' },
      { label: 'Packing', value: 'Flat sheets or rolls' },
      { label: 'Supply unit', value: 'Per sheet or per roll' },
    ],
    images: [
      { id: '1793280252157-f14680709d2b', alt: 'Welded steel mesh forming a square grid' },
      { id: '1793280252141-abeedea9969e', alt: 'Stacked sheets of steel reinforcement mesh' },
      { id: '1768677903496-becc4be07258', alt: 'Steel reinforcement laid out on a building site' },
    ],
  },

  {
    slug: 'binding-wire',
    group: 'steel',
    name: 'Binding Wire',
    benefit: 'Soft annealed tie wire for quick, secure rebar tying on site.',
    tags: [
      '1.2–1.6 mm',
      'Black annealed',
      'Coils',
    ],
    summary: 'black annealed tie wire, 1.2–1.6 mm, in coils',
    overview: [
      'Binding wire holds reinforcement bars in place while concrete is poured. Annealing makes the wire soft and flexible, so steel fixers can twist it tight around crossing bars by hand or with pliers without it snapping.',
      'We supply black annealed tie wire in coils, in the gauges commonly used on UAE sites. It is usually ordered with rebar and mesh, so one delivery covers the whole reinforcement package.',
    ],
    specs: [
      { label: 'Type', value: 'Black annealed tie wire' },
      { label: 'Diameter', value: '1.2–1.6 mm' },
      { label: 'Form', value: 'Coils' },
      { label: 'Finish', value: 'Black, uncoated' },
    ],
    applications: [
      'Tying rebar at crossings',
      'Fixing mesh to bars',
      'Securing spacers and chairs',
      'General site tying',
    ],
    supply: [
      { label: 'Sizes', value: '1.2–1.6 mm wire' },
      { label: 'Packing', value: 'Coils' },
      { label: 'Supply unit', value: 'Per coil' },
    ],
    images: [
      { id: '1644238017851-21f15062c213', alt: 'Coil of steel wire' },
      { id: '1736793513114-ba3d41fec65a', alt: 'Steel wire wound into a coil' },
      { id: '1768677903496-becc4be07258', alt: 'Worker checking tied rebar on a building site' },
    ],
  },

  {
    slug: 'white-wood',
    group: 'timber',
    name: 'White Wood',
    benefit: 'Light, easy-to-work softwood for formwork, framing and finishing.',
    tags: [
      'Softwood',
      'Common sections',
      'Various lengths',
    ],
    summary: 'sawn softwood in common sections and various lengths for formwork and finishing',
    overview: [
      'White wood is a pale softwood that is light to handle and easy to cut, nail and plane. On site it is the everyday timber for formwork supports, battens, bracing and temporary works.',
      'Its clean, even colour also suits interior joinery and finishing. We supply the common sawn sections in a range of lengths; send us your cutting list and we will match it.',
    ],
    specs: [
      { label: 'Type', value: 'Softwood (white wood)' },
      { label: 'Finish', value: 'Sawn' },
      { label: 'Sections', value: 'Common construction sizes' },
      { label: 'Lengths', value: 'Various' },
    ],
    applications: [
      'Formwork and shuttering supports',
      'Battens, bracing and props',
      'Temporary site works',
      'Interior joinery and finishing',
    ],
    supply: [
      { label: 'Sizes', value: 'Common sawn sections, various lengths' },
      { label: 'Packing', value: 'Loose pieces or bundles' },
      { label: 'Supply unit', value: 'Per piece or per cubic metre' },
    ],
    images: [
      { id: '1634672652995-ee7525bce595', alt: 'Stack of sawn timber planks' },
      { id: '1783779858962-5ec92319583c', alt: 'Worker arranging timber planks in a storage yard' },
      { id: '1761718061033-2cdc5b3ec64d', alt: 'Stacks of timber outside a building' },
    ],
  },

  {
    slug: 'marine-plywood',
    group: 'timber',
    name: 'Marine Plywood',
    benefit: 'WBP-bonded plywood that holds up in wet and humid site conditions.',
    tags: [
      'WBP bonded',
      '1220×2440 mm',
      '12 / 18 mm',
    ],
    summary: 'WBP waterproof bonded, 1220×2440 mm, 12 and 18 mm, for formwork and wet areas',
    overview: [
      'Marine plywood is built from veneer layers bonded with a waterproof (WBP) adhesive, so the sheets keep their strength when exposed to water and humidity. That makes it a dependable choice for formwork reused across several pours.',
      'It is also used wherever boards stay damp or outdoors, such as wet areas, external joinery and waterfront work. We supply full sheets in the standard size and common thicknesses.',
    ],
    specs: [
      { label: 'Bonding', value: 'WBP (waterproof)' },
      { label: 'Sheet size', value: '1220 × 2440 mm' },
      { label: 'Thickness', value: '12 mm, 18 mm' },
      { label: 'Construction', value: 'Multi-layer veneer' },
    ],
    applications: [
      'Concrete formwork and shuttering',
      'Wet areas and external work',
      'Waterfront and marine work',
      'Heavy-duty site hoarding',
    ],
    supply: [
      { label: 'Sizes', value: '1220 × 2440 mm, 12 or 18 mm thick' },
      { label: 'Packing', value: 'Full sheets, loose or in bundles' },
      { label: 'Supply unit', value: 'Per sheet' },
    ],
    images: [
      { id: '1690768162439-7ca7a1813038', alt: 'Stack of plywood sheets' },
      { id: '1605390044035-36f50ff9cfd6', alt: 'Close-up of a wooden board surface' },
      { id: '1773430273270-76f0a17224d0', alt: 'Workers building a timber structure outdoors' },
    ],
  },

  {
    slug: 'commercial-plywood',
    group: 'timber',
    name: 'Commercial Plywood',
    benefit: 'Versatile, cost-effective plywood for general construction and shuttering.',
    tags: [
      '1220×2440 mm',
      'Multiple thicknesses',
      'General construction',
    ],
    summary: '1220×2440 mm sheets in multiple thicknesses for shuttering and general construction',
    overview: [
      'Commercial plywood is a cost-effective board for everyday construction. Its cross-laminated veneers give good strength and stability for its weight, and it cuts cleanly with standard tools.',
      'Contractors use it for shuttering, site hoarding, temporary partitions and packing. For formwork that will be wetted again and again, marine plywood is the better choice. We supply full sheets in several thicknesses.',
    ],
    specs: [
      { label: 'Sheet size', value: '1220 × 2440 mm' },
      { label: 'Thickness', value: 'Multiple, on request' },
      { label: 'Construction', value: 'Cross-laminated veneer' },
      { label: 'Use', value: 'General construction and shuttering' },
    ],
    applications: [
      'Shuttering and formwork',
      'Site hoarding and partitions',
      'Temporary works and packing',
      'Fit-out and furniture bases',
    ],
    supply: [
      { label: 'Sizes', value: '1220 × 2440 mm, several thicknesses' },
      { label: 'Packing', value: 'Full sheets, loose or in bundles' },
      { label: 'Supply unit', value: 'Per sheet' },
    ],
    images: [
      { id: '1700973408133-b45276ec8feb', alt: 'Stacked wooden boards' },
      { id: '1611072337226-1140ab367200', alt: 'Light wood board surface' },
      { id: '1523034572918-be25535ca417', alt: 'Close-up of a wooden board' },
    ],
  },

  {
    slug: 'portland-limestone-cement',
    group: 'cement',
    name: 'Portland Limestone Cement (PLC)',
    benefit: 'Bagged cement from approved UAE factories for concrete, mortar and plaster.',
    tags: [
      '50 kg bags',
      'Approved UAE factories',
      'Bulk project supply',
    ],
    summary: '50 kg bags from approved UAE factories, bulk supply for projects',
    overview: [
      'Portland limestone cement blends Portland clinker with finely ground limestone. It sets and gains strength much like ordinary Portland cement and covers most general concrete, mortar and plaster work.',
      'We supply PLC in 50 kg bags from approved UAE cement factories, from small site orders up to regular deliveries for larger projects. Tell us your monthly requirement for project pricing.',
    ],
    specs: [
      { label: 'Type', value: 'Portland limestone cement (PLC)' },
      { label: 'Packing', value: '50 kg bags' },
      { label: 'Source', value: 'Approved UAE cement factories' },
      { label: 'Supply', value: 'Site orders and bulk project supply' },
    ],
    applications: [
      'Structural and general concrete',
      'Block-laying mortar',
      'Plaster and render',
      'Screeds and repairs',
    ],
    supply: [
      { label: 'Sizes', value: '50 kg bag' },
      { label: 'Packing', value: 'Bags' },
      { label: 'Supply unit', value: 'Per bag or by truckload' },
    ],
    images: [
      { id: '1773394089934-3e29f2a3d6a9', alt: 'Stacks of cement bags in sunlight' },
      { id: '1745680636997-dca47973113d', alt: 'Filled sacks standing against a wall' },
      { id: '1774931363306-5a896cd4dd02', alt: 'Workers pouring concrete on a sunny day' },
    ],
  },

  {
    slug: 'sand',
    group: 'cement',
    name: 'Sand (Various Types)',
    benefit: 'Washed, plaster, construction and landscaping sand, delivered by the load.',
    tags: [
      'Washed · plaster · construction',
      'Pickup to trailer loads',
    ],
    summary: 'washed, plaster, construction and landscaping sand by pickup, 6-wheeler or trailer load',
    overview: [
      'Different jobs need different sand. Washed sand is cleaned of silt and clay for concrete and screeds, plaster sand is finer for smooth wall finishes, construction sand suits filling and block work, and landscaping sand is used for levelling and garden work.',
      'We deliver by pickup, 6-wheeler or trailer load, so you can order the volume that matches the stage of your project. Tell us the type and quantity and we will quote delivered to site.',
    ],
    specs: [
      { label: 'Types', value: 'Washed, plaster, construction, landscaping' },
      { label: 'Delivery', value: 'Pickup, 6-wheeler or trailer' },
      { label: 'Supply', value: 'Loose, by the load' },
    ],
    applications: [
      'Concrete and screeds',
      'Plastering and rendering',
      'Block work and backfilling',
      'Landscaping and levelling',
    ],
    supply: [
      { label: 'Sizes', value: 'Pickup, 6-wheeler or trailer load' },
      { label: 'Packing', value: 'Loose, delivered by truck' },
      { label: 'Supply unit', value: 'Per load' },
    ],
    images: [
      { id: '1785791516517-aae4ca2fcfcb', alt: 'Large sand and gravel piles with conveyors' },
      { id: '1785791516569-07a837fb07b7', alt: 'Sand processing machinery beside a sand pile' },
      { id: '1648219247849-84242c30aad7', alt: 'Pile of sand on a pavement' },
    ],
  },

  {
    slug: 'polythene-sheet',
    group: 'sheets',
    name: 'Polythene Sheet',
    benefit: 'Damp-proof membrane and curing sheet that keeps moisture where it belongs.',
    tags: [
      '500–1000 gauge',
      'Damp-proof / curing',
      'Rolls',
    ],
    summary: 'damp-proof membrane and curing sheet, 500–1000 gauge, in rolls',
    overview: [
      'Polythene sheet is laid under ground slabs as a damp-proof membrane, stopping moisture in the ground from rising into the concrete. It also stops fresh concrete losing water too quickly into the sub-base.',
      'On site it also works as a curing cover, a dust and paint protection sheet and a temporary weather screen. We supply rolls in the common gauges; heavier gauges resist tearing better under foot traffic and rebar.',
    ],
    specs: [
      { label: 'Material', value: 'Polyethylene sheet' },
      { label: 'Gauge', value: '500–1000 gauge' },
      { label: 'Form', value: 'Rolls' },
      { label: 'Use', value: 'Damp-proof membrane and curing' },
    ],
    applications: [
      'Damp-proof membrane under slabs',
      'Concrete curing cover',
      'Protection during painting and finishing',
      'Temporary weather protection',
    ],
    supply: [
      { label: 'Sizes', value: '500–1000 gauge' },
      { label: 'Packing', value: 'Rolls' },
      { label: 'Supply unit', value: 'Per roll' },
    ],
    images: [
      { id: '1787422660673-3fb482d28f94', alt: 'Black waterproof membrane covering a timber wall frame' },
      { id: '1761434558151-e94186937da9', alt: 'Steel beams covered with dark plastic sheeting' },
      { id: '1786295866836-2949bbd847cd', alt: 'Worker taping plastic sheet over a window' },
    ],
  },

  {
    slug: 'flexel-insulation-board',
    group: 'sheets',
    name: 'Insulation (Flexel) Board',
    benefit: 'Bitumen-impregnated fibre board that protects waterproofing and fills expansion joints.',
    tags: [
      '1220×2440 mm',
      '12 mm',
      'Bitumen-impregnated',
    ],
    summary: 'bitumen-impregnated fibre board, 1220×2440 mm, 12 mm, for waterproofing protection and expansion joints',
    overview: [
      'Flexel board is a fibre board impregnated with bitumen, which keeps it firm, water-resistant and slightly compressible. Placed against below-ground walls, it shields the waterproofing membrane from damage during backfilling.',
      'Because it compresses and recovers, it is also used as a joint filler in concrete slabs and walls, letting the concrete expand and contract without cracking. We supply full sheets that can be cut to joint widths on site.',
    ],
    specs: [
      { label: 'Material', value: 'Bitumen-impregnated fibre board' },
      { label: 'Sheet size', value: '1220 × 2440 mm' },
      { label: 'Thickness', value: '12 mm' },
      { label: 'Properties', value: 'Water-resistant, compressible' },
    ],
    applications: [
      'Protection board over waterproofing',
      'Expansion joint filler in slabs',
      'Isolation joints around columns and walls',
      'Paving and hard landscaping joints',
    ],
    supply: [
      { label: 'Sizes', value: '1220 × 2440 mm, 12 mm thick' },
      { label: 'Packing', value: 'Full sheets' },
      { label: 'Supply unit', value: 'Per sheet' },
    ],
    images: [
      { id: '1757547601902-61787bb24fb1', alt: 'Concrete wall with a horizontal joint line' },
      { id: '1774931363306-5a896cd4dd02', alt: 'Workers pouring a concrete slab' },
      { id: '1616179058441-37aa58affac8', alt: 'Grey concrete wall' },
    ],
  },

  {
    slug: 'wood-nails',
    group: 'fixings',
    name: 'Wood Nails',
    benefit: 'Common wire nails for formwork, framing and general carpentry.',
    tags: [
      '1"–6"',
      'Common wire nails',
      'Boxes / cartons',
    ],
    summary: 'common wire nails from 1" to 6" in boxes and cartons',
    overview: [
      'Common wire nails are the everyday fixing for timber on site. Their flat heads and smooth shanks make them quick to drive and easy to pull out when formwork is stripped.',
      'We supply lengths from 1 inch for light work up to 6 inches for heavy timber and formwork, packed in boxes or cartons. Order them with your white wood and plywood to keep it to one delivery.',
    ],
    specs: [
      { label: 'Type', value: 'Common wire nails' },
      { label: 'Lengths', value: '1"–6"' },
      { label: 'Head', value: 'Flat' },
      { label: 'Packing', value: 'Boxes / cartons' },
    ],
    applications: [
      'Formwork and shuttering',
      'Timber framing and bracing',
      'Crates, pallets and packing',
      'General carpentry',
    ],
    supply: [
      { label: 'Sizes', value: '1" to 6"' },
      { label: 'Packing', value: 'Boxes or cartons' },
      { label: 'Supply unit', value: 'Per box or per carton' },
    ],
    images: [
      { id: '1640958899091-a1f55539eac0', alt: 'Pile of steel wire nails' },
      { id: '1792363896614-03613e6697d0', alt: 'Hammer, wooden block and nails on a dark surface' },
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
  alt: 'Building under construction with tower cranes at sunset',
};

/** Unsplash image URL cropped to 4:3 (or the given ratio), served as WebP. */
export function imageUrl(id: string, width: number, ratio = 3 / 4) {
  const height = Math.round(width * ratio);
  return `https://images.unsplash.com/photo-${id}?auto=format&fm=webp&fit=crop&w=${width}&h=${height}&q=70`;
}

export function imageSrcSet(id: string, widths: number[], ratio = 3 / 4) {
  return widths.map((w) => `${imageUrl(id, w, ratio)} ${w}w`).join(', ');
}
