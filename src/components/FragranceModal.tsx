import { useState, useEffect } from "react";
import { X, Star, MessageCircle, Sparkles } from "lucide-react";
import { type Fragrance, type BottleSize } from "@/data/fragrances";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";

interface FragranceModalProps {
  fragrance: Fragrance | null;
  onClose: () => void;
}

export function FragranceModal({ fragrance, onClose }: FragranceModalProps) {
  const [selectedSize, setSelectedSize] = useState<BottleSize>("100ml");

  useEffect(() => {
    setSelectedSize("100ml");
  }, [fragrance]);

  if (!fragrance) return null;

  const currentPrice = fragrance.prices[selectedSize];

  const bottleSizes: BottleSize[] = ["100ml", "50ml"];

  const handleWhatsAppOrder = () => {
    window.open(
      buildWhatsAppOrderUrl(fragrance.name, selectedSize),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm border border-[#E6DFD2] bg-[#FAF7F2] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-foreground/80 shadow-xs transition hover:text-foreground cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Column */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[440px] bg-[#F2EDE4]">
            <img
              src={fragrance.image}
              alt={fragrance.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4">
              <span className="bg-[#866838] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FAF7F0]">
                {fragrance.badge}
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="flex flex-col p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9E7A3E]">
                {fragrance.category}
              </span>
              <div className="flex items-center gap-1 text-xs">
                <Star className="h-3.5 w-3.5 fill-[#C59B27] text-[#C59B27]" />
                <span className="font-medium text-foreground">{fragrance.rating.toFixed(1)}</span>
                <span className="text-muted-foreground">({fragrance.reviewsCount})</span>
              </div>
            </div>

            <h2 id="modal-title" className="mt-2 font-display text-3xl font-normal text-[#1A1816]">
              {fragrance.name}
            </h2>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {fragrance.concentration}
            </p>

            <p className="mt-4 text-xs font-light leading-relaxed text-[#4A453F]">
              {fragrance.description}
            </p>

            {/* Olfactory pyramid */}
            <div className="mt-5 space-y-1.5 rounded-sm border border-[#E6DFD2] bg-[#F2EDE4] p-3.5 text-xs">
              {[
                { label: "TOP", value: fragrance.topNotes },
                { label: "HEART", value: fragrance.heartNotes },
                { label: "BASE", value: fragrance.baseNotes },
              ].map((note) => (
                <p key={note.label}>
                  <span className="font-semibold uppercase tracking-[0.12em] text-[#7A5E2E]">
                    {note.label}:
                  </span>{" "}
                  <span className="font-light text-[#2F2C28]">{note.value}</span>
                </p>
              ))}
            </div>

            {/* Main accords pills */}
            <div className="mt-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                Olfactory Accords
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {fragrance.accords.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center gap-1 border border-[#E0D7C8] bg-white/70 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#4A453F]"
                  >
                    <Sparkles className="h-2.5 w-2.5 text-[#9E7A3E]" />
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Size selector & Price */}
            <div className="mt-6 flex items-center justify-between border-t border-[#E8E2D6] pt-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
                  Select Size
                </p>
                <div className="flex gap-2">
                  {bottleSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 text-xs transition cursor-pointer ${
                        selectedSize === size
                          ? "bg-[#141311] font-medium text-[#FAF8F5]"
                          : "border border-[#D9D1C2] bg-white/90 text-[#4A453F]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Price
                </p>
                <span className="font-display text-3xl font-normal text-[#141311]">
                  ${currentPrice}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="flex w-full items-center justify-center gap-2 bg-[#141311] py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#FAF8F5] transition hover:opacity-90 cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
