  import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Search, RotateCcw, ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { FRAGRANCES, type Fragrance } from "@/data/fragrances";
import { FragranceCard } from "@/components/FragranceCard";
import { FragranceModal } from "@/components/FragranceModal";

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

export function Collections() {
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

      {/* Main Filter & Gallery Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-16 lg:py-12">
        {/* Filter Controls Bar */}
        <section
          aria-label="Filters and Sorting"
          className="mb-10 flex flex-col gap-5 border-b border-[#ECE5D8] pb-8 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {FAMILY_TABS.map((tab) => {
              const active = activeFamily === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFamily(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                    active
                      ? "bg-[#141311] text-[#FAF8F5] font-medium shadow-xs"
                      : "border border-[#E0D7C8] bg-[#FAF7F2] text-[#4A453F] hover:border-[#141311]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] ${active ? "text-[#C59B27]" : "text-muted-foreground"}`}
                  >
                    ({tab.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort Row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search notes or scents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-none border border-[#E0D7C8] bg-[#FAF7F2] py-2 pl-9 pr-3 text-xs font-light text-foreground placeholder:text-muted-foreground/70 focus:border-[#141311] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <label htmlFor="sort-fragrances" className="sr-only">
                Sort Fragrances
              </label>
              <select
                id="sort-fragrances"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none rounded-none border border-[#E0D7C8] bg-[#FAF7F2] py-2 pl-3.5 pr-8 text-xs font-medium uppercase tracking-[0.12em] text-[#2F2C28] focus:border-[#141311] focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured / Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Reset Filters if modified */}
            {(activeFamily !== "all" || searchQuery || sortBy !== "featured") && (
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </button>
            )}
          </div>
        </section>

        {/* Results Info Counter */}
        <div className="mb-6 flex items-center justify-between text-xs font-light text-muted-foreground">
          <p>
            Showing <span className="font-medium text-foreground">{filteredFragrances.length}</span>{" "}
            of <span className="font-medium text-foreground">{FRAGRANCES.length}</span> luxury
            fragrances
          </p>
          <p className="hidden text-[11px] tracking-wider uppercase sm:block">
            Standard 100ml / 50ml Available
          </p>
        </div>

        {/* 3x3 Desktop Grid Section */}
        {filteredFragrances.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredFragrances.map((fragrance) => (
              <FragranceCard
                key={fragrance.id}
                fragrance={fragrance}
                onQuickView={(f) => setSelectedFragrance(f)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-display text-2xl text-muted-foreground">
              No fragrances found matching your query.
            </p>
            <p className="mt-2 text-xs font-light text-muted-foreground">
              Try adjusting your search notes or category filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 border border-foreground/30 bg-[#FAF7F2] px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition hover:border-foreground"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Quick View Modal */}
      <FragranceModal fragrance={selectedFragrance} onClose={() => setSelectedFragrance(null)} />
    </div>
  );
}

export default Collections;
