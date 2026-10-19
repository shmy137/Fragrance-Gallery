import ensoImg from "@/assets/fragrance-enso-paris.jpg";
import santalImg from "@/assets/fragrance-santal-blanc.jpg";
import fleurNuitImg from "@/assets/fragrance-fleur-nuit.jpg";
import bergamoteImg from "@/assets/fragrance-bergamote.jpg";
import irisImg from "@/assets/fragrance-iris-celeste.jpg";
import cuirImg from "@/assets/fragrance-cuir-eternel.jpg";
import velvetOrchidImg from "@/assets/hero-2.jpg";
import veridanImg from "@/assets/hero-3.jpg";
import roseSolifloreImg from "@/assets/hero.jpg";

export type BottleSize = "100ml";

export interface Fragrance {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewsCount: string;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  prices: Record<BottleSize, number>;
  image: string;
}

export const FRAGRANCES: Fragrance[] = [
  {
    id: "enso-golden-amber",
    name: "Golden Amber",
    category: "Enso Paris",
    rating: 4.9,
    reviewsCount: "1.2k",
    topNotes: "Rose de Mai, Italian Bergamot",
    heartNotes: "Wild Peony, Damascena Essence",
    baseNotes: "White Musk, Florentine Orris",
    prices: {
      "100ml": 1000,
    },
    image: ensoImg,
  },
  {
    id: "enso-blue-legend-a1",
    name: "Blue Legend Pure A1",
    category: "Enso Paris",
    rating: 4.8,
    reviewsCount: "940",
    topNotes: "Black Truffle, Ylang Ylang, Golden Mandarin",
    heartNotes: "Rare Black Orchid, Spiced Plum, Lotus Wood",
    baseNotes: "Warm Amber, Patchouli, Vanilla Absolute",
    prices: {
      "100ml": 1000,
    },
    image: velvetOrchidImg,
  },
  {
    id: "enso-blue-legend-b2",
    name: "Blue Legend Noir B2",
    category: "Enso Paris",
    rating: 4.9,
    reviewsCount: "810",
    topNotes: "Crushed Eucalyptus, White Rose, Green Fig",
    heartNotes: "Dewy Violet, Clary Sage, Juniper Berry",
    baseNotes: "Virginia Cedar, Smoked Vetiver, Oakmoss",
    prices: {
      "100ml": 1000,
    },
    image: veridanImg,
  },
  {
    id: "enso-exotic",
    name: "Exotic",
    category: "Enso Paris",
    rating: 5.0,
    reviewsCount: "620",
    topNotes: "White Pepper, Fig Nectar, Cardamom",
    heartNotes: "Florentine Orris, Violet Leaf, Papyrus",
    baseNotes: "Mysore Sandalwood, Cashmere Wood, Warm Amber",
    prices: {
      "100ml": 1000,
    },
    image: santalImg,
  },
  {
    id: "enso-sunset-crush",
    name: "Sunset Crush",
    category: "Enso Paris",
    rating: 4.9,
    reviewsCount: "1.5k",
    topNotes: "Night Jasmine, Star Anise, Bitter Orange",
    heartNotes: "Tuberose, Black Vanilla, Damascus Plum",
    baseNotes: "Golden Benzoin, Tonka Bean, Sandalwood",
    prices: {
      "100ml": 1000,
    },
    image: fleurNuitImg,
  },
];
