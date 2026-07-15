// Phase-A mock catalogue. Replaced by the Medusa Store API in Phase B —
// the components consuming this shape stay identical.

export type Product = {
  slug: string;
  name: string;
  collection: Collection;
  price: number; // in Rand
  colorway: string;
  sizes: string[];
  images: string[];
  description: string;
  /** editorial grid emphasis */
  feature?: boolean;
  soldOut?: boolean;
};

export type Collection = "T-Shirts" | "Hoodies" | "Outerwear" | "Headwear";

export const COLLECTIONS: Collection[] = [
  "T-Shirts",
  "Hoodies",
  "Outerwear",
  "Headwear",
];

// Curated editorial imagery (swapped for Sean's own photography in Phase B).
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=82`;

export const PRODUCTS: Product[] = [
  {
    slug: "sniper-scope-tee",
    name: "Sniper Scope Tee",
    collection: "T-Shirts",
    price: 550,
    colorway: "Off Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img("1521572163474-6864f9cf17ab"), img("1583743814966-8936f5b7be1a")],
    description:
      "Heavyweight 240gsm cotton tee carrying the STS scope motif across the back. Boxy fit, ribbed collar, garment-washed for a broken-in hand.",
    feature: true,
  },
  {
    slug: "ah-monogram-hoodie",
    name: "AH Monogram Hoodie",
    collection: "Hoodies",
    price: 1250,
    colorway: "Bone",
    sizes: ["S", "M", "L", "XL"],
    images: [img("1556821840-3a63f95609a7"), img("1620799140408-edc6dcb6d633")],
    description:
      "Brushed-back 400gsm fleece with a tonal AH monogram at the chest and EST. 2015 embroidery on the cuff. Oversized, dropped shoulder.",
    feature: true,
  },
  {
    slug: "short-films-crewneck",
    name: "Short Films Crewneck",
    collection: "Hoodies",
    price: 980,
    colorway: "Faded Gold",
    sizes: ["S", "M", "L", "XL"],
    images: [img("1618354691373-d851c5c3a990"), img("1434389677669-e08b4cac3105")],
    description:
      "A crewneck for the SHORT FILMS series — sunflower-gold flat-knit rib and a screen-printed frame graphic at the back hem.",
  },
  {
    slug: "anointed-cap",
    name: "Anointed Cap",
    collection: "Headwear",
    price: 420,
    colorway: "Black / Gold",
    sizes: ["One Size"],
    images: [img("1588850561407-ed78c282e89b"), img("1622445275576-721325763efe")],
    description:
      "Unstructured six-panel cap with a low crown and antique-brass slider. Raised AH monogram, sunflower-gold underbrim.",
    feature: true,
  },
  {
    slug: "hustlaz-work-jacket",
    name: "Hustlaz Work Jacket",
    collection: "Outerwear",
    price: 1890,
    colorway: "Washed Charcoal",
    sizes: ["S", "M", "L", "XL"],
    images: [img("1591047139829-d91aecb6caea"), img("1544022613-e87ca75a784a")],
    description:
      "A chore jacket cut from 12oz washed cotton canvas. Three utility pockets, corozo buttons, and an embroidered scope at the placket.",
    feature: true,
  },
  {
    slug: "scope-longsleeve",
    name: "Scope Longsleeve",
    collection: "T-Shirts",
    price: 690,
    colorway: "Ecru",
    sizes: ["S", "M", "L", "XL"],
    images: [img("1571945153237-4929e783af4a"), img("1503341504253-dff4815485f1")],
    description:
      "Long-sleeve tee with a wrap-around scope print down the left arm. 220gsm ringspun cotton, relaxed body.",
  },
  {
    slug: "est-2015-beanie",
    name: "EST. 2015 Beanie",
    collection: "Headwear",
    price: 350,
    colorway: "Off Black",
    sizes: ["One Size"],
    images: [img("1576871337622-98d48d1cf531"), img("1517254797898-04edd251bfb3")],
    description:
      "Fine-gauge merino-blend beanie with a woven EST. 2015 tab. Cuffed, everyday weight.",
  },
  {
    slug: "anointed-tee",
    name: "Anointed Tee",
    collection: "T-Shirts",
    price: 550,
    colorway: "White",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [img("1503342217505-b0a15ec3261c"), img("1490481651871-ab68de25d43d")],
    description:
      "Clean-front tee with a small chest hit and the AnointedHustlaz wordmark set across the shoulders. 240gsm, boxy.",
    soldOut: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function featured(): Product[] {
  return PRODUCTS.filter((p) => p.feature);
}

export function byCollection(collection?: string): Product[] {
  if (!collection || collection === "All") return PRODUCTS;
  return PRODUCTS.filter((p) => p.collection === collection);
}
