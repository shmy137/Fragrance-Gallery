import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { FRAGRANCES } from "@/data/fragrances";
import { FragranceCard } from "@/components/FragranceCard";
import { FragranceModal } from "@/components/FragranceModal";
import { useSeo, JsonLd, buildProductsJsonLd } from "@/lib/seo";

type FilterFamily = "all" | "floral" | "woody" | "oriental" | "fresh" | "private";
type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

const FAMILY_FILTERS: { id: FilterFamily; label: string }[] = [
  { id: "all", label: "All Fragrances" },
  { id: "floral", label: "Floral Soliflore" },
  { id: "oriental", label: "Oriental Amber" },
  { id: "woody", label: "Woody Botanical" },
  { id: "fresh", label: "Fresh & Citrus" },
  { id: "private", label: "Private Blend" },
];

// Counts are derived from the catalogue so they can never drift from the data.
const FAMILY_TABS = FAMILY_FILTERS.map((filter) => ({
  ...filter,
  count:
    filter.id === "all"
      ? FRAGRANCES.length
      : FRAGRANCES.filter((fragrance) => fragrance.family === filter.id).length,
}));

const PRODUCTS_JSON_LD = buildProductsJsonLd(FRAGRANCES);

export function Collections() {
  useSeo({
    title: "The Scent Collection — Fragrance Gallery",
    description:
      "Browse the Fragrance Gallery scent collection of nine artisanal perfumes. Filter floral, woody, oriental, fresh and private blends, with notes and pricing.",
    path: "/collections",
    image: "/logo-fgt.png",
  });

  const [activeFamily, setActiveFamily] = useState<FilterFamily>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance | null>(null);

  // Filter and sort items
  const filteredFragrances = useMemo(() => {
    let list = [...FRAGRANCES];

    // Family filter
    if (activeFamily !== "all") {
      list = list.filter((f) => f.family === activeFamily);
    }

    // Search query filter (matches name, category, notes, description)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q) ||
          f.topNotes.toLowerCase().includes(q) ||
          f.heartNotes.toLowerCase().includes(q) ||
          f.baseNotes.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q),
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.prices["100ml"] - b.prices["100ml"]);
        break;
      case "price-desc":
        list.sort((a, b) => b.prices["100ml"] - a.prices["100ml"]);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        // Keep initial curated order
        break;
    }

    return list;
  }, [activeFamily, searchQuery, sortBy]);

  const resetFilters = () => {
    setActiveFamily("all");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      {/* Hero Header Section */}
      <section className="relative border-b border-[#ECE5D8] bg-[#F7F2E9] px-6 py-8 sm:py-10 lg:px-16 lg:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Collections</span>
          </nav>

          <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                Fragrance Gallery
              </p>
              <h1 className="mt-2 font-display text-3xl font-normal tracking-tight text-[#1A1816] sm:text-4xl lg:text-5xl">
                The Scent Collection
              </h1>
              <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-[#4A453F]">
                Explore our curated gallery of nine artisanal creations. Distilled from
                dawn-harvested Grasse petals, rare resins, and aged botanical wood oils.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fragrance Gallery */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-16 lg:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FRAGRANCES.map((fragrance) => (
            <FragranceCard key={fragrance.id} fragrance={fragrance} availableSizes={["100ml"]} />
          ))}
        </div>
      </main>

      {/* Quick View Modal */}
      <FragranceModal fragrance={selectedFragrance} onClose={() => setSelectedFragrance(null)} />

      <JsonLd data={PRODUCTS_JSON_LD} />
    </div>
  );
}

export default Collections;


