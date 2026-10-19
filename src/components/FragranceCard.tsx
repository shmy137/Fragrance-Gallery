import { useState } from "react";
import { Star, MessageCircle, Eye } from "lucide-react";
import { type Fragrance, type BottleSize } from "@/data/fragrances";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";

const SIZES: BottleSize[] = ["100ml"];
const formatINR = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

const pillBase = "px-3 py-1 text-xs transition-colors cursor-pointer";
const pillActive = "bg-[#141311] font-medium text-[#FAF8F5]";
const pillInactive =
  "border border-[#D9D1C2] bg-white/90 font-light text-[#4A453F] hover:border-[#141311]";

interface FragranceCardProps {
  fragrance: Fragrance;
  onQuickView?: (fragrance: Fragrance) => void;
  availableSizes?: BottleSize[];
}

export function FragranceCard({ fragrance, onQuickView, availableSizes = SIZES }: FragranceCardProps) {
  const [selectedSize, setSelectedSize] = useState<BottleSize>(availableSizes[0] ?? "100ml");

  const currentPrice = fragrance.prices[selectedSize];

  const notes = [
    { label: "TOP:", value: fragrance.topNotes },
    { label: "HEART:", value: fragrance.heartNotes },
    { label: "BASE:", value: fragrance.baseNotes },
  ];

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
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EDE4]">
        <img
          src={fragrance.image}
          alt={`${fragrance.name} - ${fragrance.category}`}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-700 ease-out"
        />

       
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Category & rating */}
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

        {/* Name & concentration */}
        <h3 className="mt-2 font-display text-2xl font-normal tracking-tight text-[#1A1816] sm:text-[26px]">
          {fragrance.name}
        </h3>
      

        {/* Notes */}
        <div className="mt-3.5 space-y-1 rounded-xs border border-[#E6DFD2] bg-[#F2EDE4] p-3 text-[11.5px] leading-relaxed">
          {notes.map(({ label, value }) => (
            <p key={label} className="truncate">
              <span className="font-semibold uppercase tracking-[0.12em] text-[#7A5E2E]">
                {label}
              </span>{" "}
              <span className="font-light text-[#2F2C28]">{value}</span>
            </p>
          ))}
        </div>

        {/* Size & price */}
        <div className="mt-5 flex items-center justify-between pt-1">
          <div
            className="flex items-center gap-1.5"
            role="radiogroup"
            aria-label="Select bottle size"
          >
            {availableSizes.map((size) => (
              <button
                key={size}
                type="button"
                role="radio"
                aria-checked={selectedSize === size}
                onClick={() => setSelectedSize(size)}
                className={`${pillBase} ${selectedSize === size ? pillActive : pillInactive}`}
              >
                {size}
              </button>
            ))}
          </div>

          <span className="font-display text-2xl font-normal text-[#141311]">{formatINR(currentPrice)}</span>
        </div>

        {/* WhatsApp order */}
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
