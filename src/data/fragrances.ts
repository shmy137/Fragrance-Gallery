import ensoImg from "@/assets/fragrance-enso-paris.jpg";
import santalImg from "@/assets/fragrance-santal-blanc.jpg";
import fleurNuitImg from "@/assets/fragrance-fleur-nuit.jpg";
import bergamoteImg from "@/assets/fragrance-bergamote.jpg";
import irisImg from "@/assets/fragrance-iris-celeste.jpg";
import cuirImg from "@/assets/fragrance-cuir-eternel.jpg";
import velvetOrchidImg from "@/assets/hero-2.jpg";
import veridanImg from "@/assets/hero-3.jpg";
import roseSolifloreImg from "@/assets/hero.jpg";

export type BottleSize = "100ml" | "50ml";

export interface Fragrance {
  id: string;
  name: string;
  category: string;
  badge: "BESTSELLER" | "NEW ARRIVAL" | "LIMITED EDITION" | "SIGNATURE" | "PRIVATE BLEND";
  rating: number;
  reviewsCount: string;
  concentration: string;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  prices: Record<BottleSize, number>;
  image: string;
  family: "floral" | "woody" | "oriental" | "fresh" | "private";
  description: string;
  accords: string[];
}

export const FRAGRANCES: Fragrance[] = [
  {
    id: "enso-paris",
    name: "ENSO Paris",
    category: "FLORAL SOLIFLORE",
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: "1.2k",
    concentration: "EAU DE PARFUM",
    topNotes: "Rose de Mai, Italian Bergamot",
    heartNotes: "Wild Peony, Damascena Essence",
    baseNotes: "White Musk, Florentine Orris",
    prices: {
      "100ml": 280,
      "50ml": 195,
    },
    image: ensoImg,
    family: "floral",
    description:
      "An ethereal haute bouquet celebrating the rare May Rose of Grasse, enveloped in sheer peony petals and velvety Florentine orris butter.",
    accords: ["Floral", "Powdery Rose", "Fresh Citrus", "Soft Musk"],
  },
  {
    id: "velvet-orchid",
    name: "Velvet Orchid",
    category: "ORIENTAL AMBER",
    badge: "BESTSELLER",
    rating: 4.8,
    reviewsCount: "940",
    concentration: "EAU DE PARFUM",
    topNotes: "Black Truffle, Ylang Ylang, Golden Mandarin",
    heartNotes: "Rare Black Orchid, Spiced Plum, Lotus Wood",
    baseNotes: "Warm Amber, Patchouli, Vanilla Absolute",
    prices: {
      "100ml": 295,
      "50ml": 210,
    },
    image: velvetOrchidImg,
    family: "oriental",
    description:
      "A seductive oriental symphony of honeyed orchids, dark truffles, and golden balsamic amber wrapped in warm vanilla absolute.",
    accords: ["Warm Spicy", "Amber", "Sweet Floral", "Earthy"],
  },
  {
    id: "veridan",
    name: "Veridan",
    category: "WOODY BOTANICAL",
    badge: "SIGNATURE",
    rating: 4.9,
    reviewsCount: "810",
    concentration: "EAU DE PARFUM",
    topNotes: "Crushed Eucalyptus, White Rose, Green Fig",
    heartNotes: "Dewy Violet, Clary Sage, Juniper Berry",
    baseNotes: "Virginia Cedar, Smoked Vetiver, Oakmoss",
    prices: {
      "100ml": 275,
      "50ml": 190,
    },
    image: veridanImg,
    family: "woody",
    description:
      "Crisp alpine botanical air capturing dawn dew on white roses, crushed eucalyptus leaves, and smoky Virginia cedarwood.",
    accords: ["Woody Green", "Aromatic", "Dewy Rose", "Earthy Vetiver"],
  },
  {
    id: "santal-blanc",
    name: "Santal Blanc",
    category: "WOODY CREAMY",
    badge: "NEW ARRIVAL",
    rating: 5.0,
    reviewsCount: "620",
    concentration: "EXTRAIT DE PARFUM",
    topNotes: "White Pepper, Fig Nectar, Cardamom",
    heartNotes: "Florentine Orris, Violet Leaf, Papyrus",
    baseNotes: "Mysore Sandalwood, Cashmere Wood, Warm Amber",
    prices: {
      "100ml": 310,
      "50ml": 225,
    },
    image: santalImg,
    family: "woody",
    description:
      "Precious Mysore sandalwood cocooned in powdered white iris, milky green fig, and sheer cashmere wood for an intimate sillage.",
    accords: ["Creamy Sandalwood", "Lactonic Fig", "Powdery", "Warm Woody"],
  },
  {
    id: "fleur-de-nuit",
    name: "Fleur de Nuit",
    category: "ORIENTAL FLORAL",
    badge: "LIMITED EDITION",
    rating: 4.9,
    reviewsCount: "1.5k",
    concentration: "EXTRAIT DE PARFUM",
    topNotes: "Night Jasmine, Star Anise, Bitter Orange",
    heartNotes: "Tuberose, Black Vanilla, Damascus Plum",
    baseNotes: "Golden Benzoin, Tonka Bean, Sandalwood",
    prices: {
      "100ml": 330,
      "50ml": 240,
    },
    image: fleurNuitImg,
    family: "oriental",
    description:
      "An opulent nocturnal elixir of intoxicating night-blooming white jasmine, narcotic tuberose, and smoky bourbon vanilla.",
    accords: ["White Floral", "Sweet Vanilla", "Ambery", "Balsamic"],
  },
  {
    id: "bergamote-royale",
    name: "Bergamote Royale",
    category: "CITRUS AROMATIC",
    badge: "BESTSELLER",
    rating: 4.8,
    reviewsCount: "1.1k",
    concentration: "EAU DE PARFUM",
    topNotes: "Calabrian Bergamot, Petitgrain, Lemon Zest",
    heartNotes: "Orange Blossom, Lavender, Neroli Petals",
    baseNotes: "Haitian Vetiver, White Amber, Cedar",
    prices: {
      "100ml": 260,
      "50ml": 185,
    },
    image: bergamoteImg,
    family: "fresh",
    description:
      "Sun-drenched Mediterranean citrus groves distilled alongside neroli petals and sea-salted vetiver for an invigorating aura.",
    accords: ["Citrus Fresh", "White Floral", "Aromatic", "Bright"],
  },
  {
    id: "iris-celeste",
    name: "Iris Céleste",
    category: "POWDERY FLORAL",
    badge: "NEW ARRIVAL",
    rating: 4.9,
    reviewsCount: "780",
    concentration: "EAU DE PARFUM",
    topNotes: "Italian Mandarin, Angelica Seeds, Pink Pepper",
    heartNotes: "Pallida Iris Butter, Turkish Rose, Heliotrope",
    baseNotes: "Silky White Musk, Tonka Bean, Ambrette",
    prices: {
      "100ml": 290,
      "50ml": 205,
    },
    image: irisImg,
    family: "floral",
    description:
      "An aristocratic powdery veil of Florentine Pallida iris butter, delicate Turkish rosewater, and cloud-soft white musk.",
    accords: ["Powdery Iris", "Violet", "Floral", "Musky"],
  },
  {
    id: "cuir-eternel",
    name: "Cuir Éternel",
    category: "LEATHERY SMOKY",
    badge: "PRIVATE BLEND",
    rating: 4.9,
    reviewsCount: "530",
    concentration: "EXTRAIT DE PARFUM",
    topNotes: "Persian Saffron, Thyme, Wild Raspberry",
    heartNotes: "Olibanum, Night Jasmine, Smoked Birch",
    baseNotes: "Vintage Leather, Suede, Amber Wood",
    prices: {
      "100ml": 340,
      "50ml": 250,
    },
    image: cuirImg,
    family: "private",
    description:
      "Rich Cordovan leather infused with precious golden saffron stamens, smoky olibanum frankincense, and dark cedarwood.",
    accords: ["Smoky Leather", "Warm Saffron", "Animalic", "Resinous"],
  },
  {
    id: "rose-soliflore",
    name: "Rose Soliflore",
    category: "FLORAL SOLIFLORE",
    badge: "SIGNATURE",
    rating: 4.8,
    reviewsCount: "890",
    concentration: "EAU DE PARFUM",
    topNotes: "Centifolia Rose, Dewy Lychee, Pink Peppercorn",
    heartNotes: "Grasse Rose Absolute, Geranium, Magnolia",
    baseNotes: "Honeycomb, Ambergris, Cashmeran",
    prices: {
      "100ml": 270,
      "50ml": 190,
    },
    image: roseSolifloreImg,
    family: "floral",
    description:
      "The purest expression of morning-gathered Grasse Centifolia roses kissed with lychee nectar and honeyed golden woods.",
    accords: ["Pure Rose", "Fruity Lychee", "Fresh Dewy", "Amber"],
  },
];
