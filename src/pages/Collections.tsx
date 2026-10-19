import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { FRAGRANCES } from "@/data/fragrances";
import { FragranceCard } from "@/components/FragranceCard";

export function Collections() {
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

    </div>
  );
}

export default Collections;


