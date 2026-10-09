import { useState } from "react";
import { Star, MessageCircle, Eye } from "lucide-react";
import { type Fragrance, type BottleSize } from "@/data/fragrances";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";

interface FragranceCardProps {
  fragrance: Fragrance;
  onQuickView?: (fragrance: Fragrance) => void;
}

export function FragranceCard({ fragrance, onQuickView }: FragranceCardProps) {
  const [selectedSize, setSelectedSize] = useState<BottleSize>("100ml");

  const currentPrice = fragrance.prices[selectedSize];

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(
      buildWhatsAppOrderUrl(fragrance.name, selectedSize),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-[#E9E3D8] bg-[#FAF7F2] transition-all duration-300 hover:shadow-md">
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EDE4]">
        {/* Bestseller / Status Badge (matching screenshot) */}
        <div className="absolute left-3 top-3 z-10 sm:left-4 sm:top-4">
          <span className="inline-block bg-[#866838] px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#FAF7F0] shadow-xs">
            {fragrance.badge}
          </span>
        </div>

        {/* Perfume Bottle Image */}
        <img
          src={fragrance.image}
          alt={`${fragrance.name} - ${fragrance.category}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover Quick View Trigger */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onQuickView && onQuickView(fragrance)}
            className="flex items-center gap-1.5 rounded-none bg-[#FAF7F2] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#1A1816] shadow-sm transition-colors hover:bg-white"
          >
            <Eye className="h-3.5 w-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* Card Details Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Category & Star Rating Header */}
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9E7A3E]">
            {fragrance.category}
          </span>
          <div className="flex items-center gap-1 text-[11.5px] font-light text-foreground/85">
            <Star className="h-3 w-3 fill-[#C59B27] text-[#C59B27]" />
            <span className="font-medium text-foreground">{fragrance.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({fragrance.reviewsCount})</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="mt-2 font-display text-2xl font-normal tracking-tight text-[#1A1816] sm:text-[26px]">
          {fragrance.name}
        </h3>

        {/* Concentration */}
        <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/90">
          {fragrance.concentration}
        </p>

        {/* Olfactory Pyramid Box (matching screenshot exactly) */}
        <div className="mt-3.5 space-y-1 rounded-xs border border-[#E6DFD2] bg-[#F2EDE4] p-3 text-[11.5px] leading-relaxed">
          <p className="truncate">
            <span className="font-semibold uppercase tracking-[0.12em] text-[#7A5E2E]">TOP:</span>{" "}
            <span className="font-light text-[#2F2C28]">{fragrance.topNotes}</span>
          </p>
          <p className="truncate">
            <span className="font-semibold uppercase tracking-[0.12em] text-[#7A5E2E]">HEART:</span>{" "}
            <span className="font-light text-[#2F2C28]">{fragrance.heartNotes}</span>
          </p>
          <p className="truncate">
            <span className="font-semibold uppercase tracking-[0.12em] text-[#7A5E2E]">BASE:</span>{" "}
            <span className="font-light text-[#2F2C28]">{fragrance.baseNotes}</span>
          </p>
        </div>

        {/* Bottom Size Selection & Price Row */}
        <div className="mt-5 flex items-center justify-between pt-1">
          {/* Size Pills */}
          <div
            className="flex items-center gap-1.5"
            role="radiogroup"
            aria-label="Select bottle size"
          >
            <button
              type="button"
              role="radio"
              aria-checked={selectedSize === "100ml"}
              onClick={() => setSelectedSize("100ml")}
              className={`px-3 py-1 text-xs transition-colors cursor-pointer ${
                selectedSize === "100ml"
                  ? "bg-[#141311] font-medium text-[#FAF8F5]"
                  : "border border-[#D9D1C2] bg-white/90 font-light text-[#4A453F] hover:border-[#141311]"
              }`}
            >
              100ml
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={selectedSize === "50ml"}
              onClick={() => setSelectedSize("50ml")}
              className={`px-3 py-1 text-xs transition-colors cursor-pointer ${
                selectedSize === "50ml"
                  ? "bg-[#141311] font-medium text-[#FAF8F5]"
                  : "border border-[#D9D1C2] bg-white/90 font-light text-[#4A453F] hover:border-[#141311]"
              }`}
            >
              50ml
            </button>
          </div>

          {/* Price */}
          <span className="font-display text-2xl font-normal text-[#141311]">${currentPrice}</span>
        </div>

        {/* WhatsApp Order Direct Action */}
        <div className="mt-4 pt-1">
          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="flex w-full items-center justify-center gap-2 border border-foreground/30 bg-[#FAF7F2] py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-200 hover:border-foreground hover:bg-[#141311] hover:text-[#FAF8F5]"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Order on WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
}
