import { Link } from "react-router-dom";
import shelf from "@/assets/about-shelf.jpg";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={shelf}
        alt="White roses, vanilla pods and amber resin arranged around a frosted perfume vial on linen"
        width={1200}
        height={1200}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20 lg:from-background/90 lg:via-background/50 lg:to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-16 lg:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            The collection
          </p>
          <h2 className="mt-5 font-display text-3xl leading-snug lg:text-4xl">
            Wear something
            <br />
            <em className="text-gold">worth remembering</em>
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-foreground/80 sm:text-base">
            Nine compositions carry this patience out into the world — find the one that sounds like
            you.
          </p>
          <div className="mt-9">
            <Link
              to="/collections"
              className="border border-[#141311] bg-[#141311] px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-[#FAF8F5] transition-all duration-200 hover:bg-transparent hover:text-[#141311]"
            >
              Discover the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
