export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  size: string;
  dimensions: {
    width: number;
    height: number;
    depth: number; // in inches or mm
    unit: string;
  };
  price: number;
  formattedPrice: string;
  category: string;
  lightingType: string;
  material: string;
  finish: string;
  shape: 'rectangular' | 'circular' | 'asymmetric-curve' | 'rounded-rect';
  tagline: string;
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  inStock: boolean;
  leadTime: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'origin-01',
    slug: 'moonlit-palm-triple-lit-led-mirror',
    name: 'Moonlit Palm Triple-Lit LED Mirror',
    shortName: 'Moonlit Palm',
    size: '36 × 24 inches',
    dimensions: {
      width: 36,
      height: 24,
      depth: 1.5,
      unit: 'inches',
    },
    price: 7200,
    formattedPrice: '₹7,200',
    category: 'Artistic LED Mirrors',
    lightingType: 'Triple-Lit LED (Warm 3000K, Natural 4500K, Cool 6500K)',
    material: '5mm High-Definition Copper-Free Silver Glass with Laser-Etched Luminance',
    finish: 'Frameless Beveled Edge with Edge-Glow Illumination',
    shape: 'rectangular',
    tagline: 'Illuminated celestial oasis with glowing palm silhouette and star-scape.',
    description:
      'The Moonlit Palm Triple-Lit LED Mirror harmonizes evocative botanical silhouettes with advanced LED illumination. Precision laser-etched palm tree and celestial constellation details emanate diffused ambient light, transforming modern bathrooms and statement powder rooms into serene sanctuaries.',
    specifications: [
      { label: 'Dimensions', value: '36 × 24 inches (914 × 610 mm)' },
      { label: 'Glass Specification', value: '5mm Ultra-Clear Copper-Free Distortion-Free Mirror' },
      { label: 'Illumination', value: 'Triple-Tone Ambient Backlit & Front Laser-Diffused LED' },
      { label: 'Color Temperatures', value: '3000K (Warm), 4500K (Natural), 6500K (Daylight)' },
      { label: 'Switch Control', value: 'Capacitive Feather-Touch Dimmer & CCT Switch' },
      { label: 'Ingress Protection', value: 'IP44 Rated Moisture & Steam Resistant' },
      { label: 'Mounting', value: 'Heavy-Duty Cleat Bracket (Horizontal Orientation)' },
    ],
    features: [
      'Luminous palm tree and celestial crescent-moon laser glow',
      'Three selectable color tones with smooth touch dimming',
      'Anti-fog defogger pad integration option',
      'Sleek frameless profile with safety-polished arrissed edges',
    ],
    inStock: true,
    leadTime: 'Dispatch in 2–4 business days',
  },
  {
    id: 'origin-02',
    slug: 'ss-304-pvd-circular-orbit-mirror-gold-frame',
    name: 'S.S 304 PVD Circular Orbit Mirror with Gold Frame',
    shortName: 'Circular Orbit Gold',
    size: '30 × 30 inches',
    dimensions: {
      width: 30,
      height: 30,
      depth: 1.8,
      unit: 'inches',
    },
    price: 12500,
    formattedPrice: '₹12,500',
    category: 'Architectural Metal Mirrors',
    lightingType: 'Reflective Orbital Geometry with Ambient Backlight Glow',
    material: 'Marine Grade S.S 304 Stainless Steel & 5mm Distortionless Mirror',
    finish: 'Brushed Champagne Gold Physical Vapor Deposition (PVD)',
    shape: 'circular',
    tagline: 'Celestial dual-ring orbital silhouette encased in corrosion-resistant PVD gold.',
    description:
      'A masterwork of geometric poise, the Circular Orbit Mirror features an off-center concentric gold orbit ring suspended within an outer 30-inch circular stainless steel frame. Finished in resilient marine-grade S.S 304 with titanium PVD gold coating, it is impervious to humidity and oxidation in luxury bath suites.',
    specifications: [
      { label: 'Dimensions', value: '30 × 30 inches (762 × 762 mm)' },
      { label: 'Frame Material', value: 'Grade S.S 304 Austenitic Stainless Steel' },
      { label: 'Surface Finish', value: 'Champagne Gold PVD (Physical Vapor Deposition)' },
      { label: 'Glass Specification', value: '5mm Lead-Free Silver Mirror with Hydrophobic Coat' },
      { label: 'Design Detail', value: 'Dual-Orbit Concentric Floating Ring Inlay' },
      { label: 'Corrosion Warranty', value: 'Lifetime Rust-Proof & Moisture-Proof Assurance' },
      { label: 'Mounting', value: 'Concealed Heavy-Gauge Z-Bar Suspension' },
    ],
    features: [
      'Genuine architectural S.S 304 stainless steel frame construction',
      'PVD titanium coating resists scratching, tarnishing, and steam',
      'Unique concentric inner orbit design for bold visual depth',
      'Engineered for luxury powder rooms, master vanities, and entry halls',
    ],
    inStock: true,
    leadTime: 'Dispatch in 3–5 business days',
  },
  {
    id: 'origin-03',
    slug: 'ss-304-gold-pvd-nova-curve-triple-lit-led-mirror',
    name: 'S.S 304 Gold PVD Nova Curve Triple-Lit LED Mirror',
    shortName: 'Nova Curve Gold',
    size: '24 × 36 inches',
    dimensions: {
      width: 24,
      height: 36,
      depth: 1.8,
      unit: 'inches',
    },
    price: 16800,
    formattedPrice: '₹16,800',
    category: 'Sculptural LED Mirrors',
    lightingType: 'Triple-Lit Integrated Architectural Ribbon LED',
    material: 'S.S 304 Stainless Steel Frame, Optical Diffuser & High-Index Mirror',
    finish: 'Rich Brushed Gold PVD Bezel',
    shape: 'asymmetric-curve',
    tagline: 'Asymmetric architectural curve bordered in brushed gold PVD and surround illumination.',
    description:
      'The Nova Curve introduces a distinctive asymmetrical silhouette, sweeping from a gentle curved arch on one quadrant to a tailored architectural vertical edge. Encased in a brushed gold S.S 304 PVD perimeter frame with an internal frosted light channel, it casts both direct cosmetic lighting and an atmospheric wall glow.',
    specifications: [
      { label: 'Dimensions', value: '24 × 36 inches (610 × 914 mm)' },
      { label: 'Chassis Material', value: 'Laser-Cut S.S 304 Stainless Steel' },
      { label: 'Frame Finish', value: 'Brushed Gold PVD Coating (Anti-Tarnish)' },
      { label: 'Lighting Technology', value: 'Triple-Tone High CRI (>95) Solid State LED' },
      { label: 'Color Control', value: 'Warm 3000K, Soft Neutral 4500K, Daylight 6500K' },
      { label: 'Power Specs', value: '110V–240V AC with Internal IP67 Sealed Driver' },
      { label: 'Mounting Support', value: 'Precision Dual-Anchor Wall Alignment Kit' },
    ],
    features: [
      'Sculptural asymmetric arch silhouette tailored for luxury vanities',
      'Triple-Lit LED provides flicker-free, color-accurate illumination',
      'PVD Gold S.S 304 frame provides enduring protection in humid environments',
      'Touch-activated memory sensor retains your preferred light level',
    ],
    inStock: true,
    leadTime: 'Dispatch in 2–4 business days',
  },
  {
    id: 'origin-04',
    slug: 'ss-matt-black-urban-curve-rectangular-led-mirror',
    name: 'S.S Matt Black Urban Curve Rectangular LED Mirror',
    shortName: 'Urban Curve Matt Black',
    size: '30 × 24 inches',
    dimensions: {
      width: 30,
      height: 24,
      depth: 1.6,
      unit: 'inches',
    },
    price: 14000,
    formattedPrice: '₹14,000',
    category: 'Contemporary LED Mirrors',
    lightingType: 'High-Density Perimeter LED Channel with Soft Diffuser',
    material: 'S.S 304 Stainless Steel Case with Matte Powder Coating',
    finish: 'Velvet Matte Black Anodized/Coated Stainless Steel',
    shape: 'rounded-rect',
    tagline: 'Modern softened rectangle with industrial matte black rim and front-lit glow.',
    description:
      'Engineered for contemporary urban residences, the Urban Curve mirror features softened pill-radius corners within an ultra-slim matte black stainless steel chassis. The inner frosted LED diffuser offers shadowless lighting ideal for daily rituals, while the tactile matte black frame provides subtle contrast against stone or fluted tile surfaces.',
    specifications: [
      { label: 'Dimensions', value: '30 × 24 inches (762 × 610 mm)' },
      { label: 'Frame Construction', value: 'S.S 304 Stainless Steel with Matte Black Texture' },
      { label: 'Glass Composition', value: '5mm Environmental Silver Mirror, Copper-Free' },
      { label: 'Lighting Architecture', value: 'Uniform Frosted Polycarbonate Diffused LED Strip' },
      { label: 'Lighting Modes', value: 'Triple Light Adjustment (Warm, Natural, Cool)' },
      { label: 'Touch Interface', value: 'Backlit Square Touch Sensor with Soft Transition' },
      { label: 'Installation', value: 'Dual-Orientation Mount (Horizontal or Vertical)' },
    ],
    features: [
      'Timeless rounded-rectangle profile fits modern and Japandi aesthetics',
      'Matte black stainless steel frame resists fingerprints and moisture',
      'High lumen output with smooth continuous dimming capability',
      'Pre-fitted with internal safety film and moisture-sealed electronics',
    ],
    inStock: true,
    leadTime: 'Dispatch in 2–4 business days',
  },
];

export const BRAND_INFO = {
  name: 'ORIGIN MIRRORS',
  company: 'ORIGIN CREATIVE GLASSES INDIA',
  tagline: 'REFLECTION, REDEFINED.',
  subheading: 'Statement mirrors designed to bring light, form and character to contemporary spaces.',
  address: {
    line1: 'K-29, Pyare Lal Marg',
    line2: 'Karawal Nagar',
    city: 'Delhi',
    pincode: '110094',
    country: 'India',
  },
  established: 'Crafted in Delhi, India',
  ethos: [
    {
      title: 'Architectural Precision',
      desc: 'Engineered with Grade 304 stainless steel and Physical Vapor Deposition (PVD) finishes for unyielding longevity in humid environments.',
    },
    {
      title: 'Triple-Lit Illumination',
      desc: 'Tunable warm, neutral, and daylight color temperatures with high color rendering (CRI > 95) for true-to-life reflections.',
    },
    {
      title: 'Copper-Free Glass',
      desc: '5mm distortion-free silver mirror glass with environmental eco-backing that resists black-edge oxidation for decades.',
    },
  ],
};
