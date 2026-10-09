import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { FragranceCard } from "@/components/FragranceCard";
import { FRAGRANCES } from "@/data/fragrances";
import { About } from "./About";
import { CTABanner } from "./CTABanner";
import { Footer } from "./Footer";
import hero from "@/assets/hero.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero,
    alt: "Scenté perfume bottles with peonies",
    tag: "New Collection",
    title: (
      <>
        Find Your Signature
        <br />
        <em className="text-gold">Leave Your Scent</em>
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
        Velvet Orchid
        <br />
        <em className="text-gold">Warm &amp; Timeless</em>
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

      <section className="relative overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.alt}
            src={s.image}
            alt={s.alt}
            width={1920}
            height={832}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover object-right transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20 lg:from-background/90 lg:via-background/50 lg:to-transparent" />
        <div className="relative px-6 py-24 lg:px-16 lg:py-36">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{slide.tag}</p>
          <h1 className="mt-6 font-display text-5xl leading-tight lg:text-7xl">{slide.title}</h1>
          <p className="mt-6 max-w-xs text-lg font-light">{slide.text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            {/* <Link
              to="/collections"
              className="bg-primary px-8 py-4 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-85"
            >
              Shop Now
            </Link> */}
            <Link
              to="/collections"
              className="border border-foreground/40 bg-background/60 px-8 py-4 text-xs font-medium uppercase tracking-widest transition-colors hover:border-foreground"
            >
              Explore Collection
            </Link>
          </div>
          <div className="mt-16 flex gap-3">
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
              Artisanal Haute Parfumerie
            </p>
            <h2 className="mt-3 font-display text-3xl font-normal text-[#1A1816] sm:text-4xl lg:text-5xl">
              The Signature Flacons
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FRAGRANCES.slice(0, 3).map((fragrance) => (
              <FragranceCard key={fragrance.id} fragrance={fragrance} />
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
