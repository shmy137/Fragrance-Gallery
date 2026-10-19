import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { FragranceCard } from "@/components/FragranceCard";
import { FRAGRANCES } from "@/data/fragrances";

const FEATURED_FRAGRANCE_IDS = [
  "enso-sunset-crush",
  "enso-blue-legend-a1",
  "enso-blue-legend-b2",
];
const FEATURED_FRAGRANCES = FEATURED_FRAGRANCE_IDS.map((id) =>
  FRAGRANCES.find((fragrance) => fragrance.id === id),
).filter((fragrance) => fragrance !== undefined);
import { About } from "./About";
import { CTABanner } from "./CTABanner";
import { Footer } from "./Footer";
import hero from "@/assets/hero.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";

const slides = [
  {
    image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405349/hero.png",
    alt: "Scenté perfume bottles with peonies",
    tag: "New Collection",
    title: (
      <>
        Find Your Signature
        <br />
        <em className="text-gold">Leave Your <br />Scent</em>
      </>
    ),
    text: "Luxury perfumes crafted to inspire confidence and elegance.",
  },
  {
    image: hero2,
    alt: "Velvet Orchid perfume bottle with golden orchids",
    tag: "Best Seller",
    title: (
      <>
        Sunset Crush
        <br />
        <em className="text-gold">Warm &amp; <br className="sm:hidden" />Timeless</em>
      </>
    ),
    text: "Golden amber and rare orchids wrapped in pure sophistication.",
  },
  {
    image: hero3,
    alt: "Veridan perfume bottle with white roses",
    tag: "Botanical Essence",
    title: (
      <>
        Veridan
        <br />
        <em className="text-gold">Fresh &amp; Bold</em>
      </>
    ),
    text: "White roses and green botanicals for a scent that lingers.",
  },
];

export function Index() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active]!;

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />

      <section className="relative flex min-h-[34rem] items-center overflow-hidden sm:min-h-[36rem] lg:min-h-[38rem]">
        {slides.map((s, i) => (
          <img
            key={s.alt}
            src={s.image}
            alt={s.alt}
            width={1920}
            height={832}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover object-[62%_center] transition-opacity duration-700 lg:object-right ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20 lg:from-background/90 lg:via-background/50 lg:to-transparent" />
        <div className="relative w-full px-6 py-0 sm:py-8 lg:px-16 lg:py-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{slide.tag}</p>
          <h1 className="mt-6 min-h-[2.5em] font-display text-4xl leading-tight min-[420px]:text-5xl sm:whitespace-nowrap lg:text-6xl">{slide.title}</h1>
          <p className="mt-6 min-h-[3em] max-w-xs text-lg font-light">{slide.text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/collections"
              className="border border-foreground/40 bg-background/60 px-8 py-4 text-xs font-medium uppercase tracking-widest transition-colors hover:border-foreground"
            >
              Explore Collection
            </Link>
          </div>
          <div className="mt-14 flex gap-3">
            {slides.map((s, i) => (
              <button
                key={s.alt}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 w-2 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-muted-foreground/40 hover:bg-muted-foreground/70"}`}
              />
            ))}
          </div>
        </div>
        <div className="absolute right-10 top-16 hidden h-32 w-32 flex-col items-center justify-center rounded-full bg-background/90 text-center text-[10px] font-medium uppercase tracking-wider lg:flex">
          <Leaf className="mb-1 h-5 w-5 text-gold" />
          Premium
          <br />
          Quality
          <br />
          Ingredients
        </div>
      </section>

      <About />
      {/* Curated Collection Preview */}
      <section
        id="collections"
        className="border-t border-[#ECE5D8] bg-[#FAF7F2] px-6 py-16 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center sm:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              EXCLUSIVE FINE FRAGRANCES{" "}
            </p>
            <h2 className="mt-3 font-display text-3xl font-normal text-[#1A1816] sm:text-4xl lg:text-5xl">
              Our Signature Scents
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_FRAGRANCES.map((fragrance) => (
              <FragranceCard key={fragrance.id} fragrance={fragrance} availableSizes={["100ml"]} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/collections"
              className="border border-[#141311] bg-[#141311] px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-[#FAF8F5] transition-all duration-200 hover:bg-transparent hover:text-[#141311]"
            >
              Show All
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
}
