import { Link } from "react-router-dom";
import { Leaf, Hand, Droplets } from "lucide-react";
import process from "@/assets/about-process.jpg";
import atelier from "@/assets/about-atelier.jpg";
import notes from "@/assets/about-notes.jpg";
import shelf from "@/assets/about-shelf.jpg";

const stats = [
  { value: "2007", label: "House founded" },
  { value: "9", label: "Signature compositions" },
  { value: "42", label: "Raw materials, known by name" },
  { value: "6 wks", label: "Resting every batch" },
];

const values = [
  {
    icon: Leaf,
    title: "Sourced with care",
    text: "Botanicals are bought in small lots from growers we know by name, so every harvest smells the way the season made it.",
  },
  {
    icon: Hand,
    title: "Blended by hand",
    text: "Each batch rests for six weeks before it is bottled. Nothing is rushed, nothing is machine-tuned for speed.",
  },
  {
    icon: Droplets,
    title: "Made to stay",
    text: "Higher oil concentrations mean a scent that unfolds slowly through the day instead of vanishing by lunchtime.",
  },
];

const steps = [
  {
    n: "01",
    t: "Sourcing",
    d: "Raw materials arrive in small lots — rose absolute, orris butter, vetiver — and are smelled against last season's lot before anything is approved.",
  },
  {
    n: "02",
    t: "Blending",
    d: "A formula is written by hand, weighed, and argued over. Most attempts are thrown away; the good ones are dated and kept.",
  },
  {
    n: "03",
    t: "Resting",
    d: "The blend sits in the dark for six weeks so the oils settle into each other instead of shouting over one another.",
  },
  {
    n: "04",
    t: "Bottling",
    d: "Filled in batches small enough to check by hand, then rested again before they reach a shelf.",
  },
];

export function About() {
  return (
    <div id="about">
      {/* Brand story hero */}
      <section className="border-b border-foreground/10 bg-card/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Maison de Parfum — Grasse
            </p>
            <h2 className="mt-5 font-display text-3xl leading-snug lg:text-4xl">
              Written by hand,
              <br />
              <em className="text-gold">worn like memory</em>
            </h2>
            <div className="mt-7 space-y-5 text-sm font-light leading-relaxed text-muted-foreground">
              <p>
                FRAGRANCE GALLERY began at a workbench under a west-facing window, where petals,
                resins and woods were weighed against the only test that mattered — the nose. The
                window hasn't changed, and neither has the rule that a formula is finished only when
                it stops asking questions.
              </p>
              <p>
                We compose in small lots for people who want a scent to mean something. Nine
                compositions so far, each written, revised and rested again before it earns a place
                on the shelf.
              </p>
            </div>
          </div>
          <img
            src={atelier}
            alt="A perfumer's workbench laid out with amber bottles, pipettes, dried petals and handwritten formula papers"
            width={1536}
            height={864}
            loading="lazy"
            className="h-72 w-full object-cover lg:h-[26rem]"
          />
        </div>
      </section>

      {/* Facts band */}
      <section className="border-b border-[#ECE5D8] bg-[#F7F2E9]">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-12 sm:gap-x-8 lg:grid-cols-4 lg:px-16 lg:py-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${i > 0 ? "lg:border-l lg:border-[#E0D7C8]" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-4xl text-gold lg:text-5xl">{s.value}</span>
                <span className="mt-3 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Perfumer's note + pull quote */}
      <section className="border-b border-foreground/10 bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-24">
          <img
            src={notes}
            alt="A marble shelf of amber and clear perfume flacons beside lavender and dried botanicals in warm afternoon light"
            width={1536}
            height={864}
            loading="lazy"
            className="h-72 w-full object-cover lg:h-[26rem]"
          />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              The perfumer's note
            </p>
            <h2 className="mt-5 font-display text-3xl leading-snug lg:text-4xl">
              Nothing here is
              <br />
              <em className="text-gold">made in a hurry</em>
            </h2>
            <div className="mt-7 space-y-5 text-sm font-light leading-relaxed text-muted-foreground">
              <p>
                Our raw materials arrive in small lots — rose absolute, orris butter, vetiver — and
                are smelled against last season's before anything is approved. If the harvest
                changed, the formula changes with it.
              </p>
              <p>
                Then the blend waits. Six weeks in the dark gives the oils time to settle into each
                other instead of competing, which is why a SCENTÉ composition opens slowly and
                stays.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-gold/60 pl-5">
              <p className="font-display text-xl italic leading-snug text-foreground lg:text-2xl">
                “A perfume should arrive before you do — and linger a little after you've gone.”
              </p>
              <footer className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                The house philosophy
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* From raw material to bottle */}
      <section className="border-b border-foreground/10 bg-card/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              From raw material to bottle
            </p>
            <h2 className="mt-5 font-display text-3xl leading-snug lg:text-4xl">
              Four steps, none of them quick
            </h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s) => (
                <li key={s.n} className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6">
                  <span className="font-display text-xl text-gold lg:text-2xl">{s.n}</span>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em]">{s.t}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <img
            src={process}
            alt="A perfumer's hands releasing a drop of essence from a glass pipette into an amber flask"
            width={1200}
            height={912}
            loading="lazy"
            className="h-72 w-full object-cover lg:h-[26rem]"
          />
        </div>
      </section>

      {/* House values */}
      <section className="border-b border-foreground/10 bg-card/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3 lg:px-16 lg:py-20">
          {values.map((v) => (
            <div key={v.title}>
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40">
                <v.icon className="h-5 w-5 text-gold" />
              </span>
              <h3 className="mt-5 font-display text-xl">{v.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy banner + CTA */}
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
              Nine compositions carry this patience out into the world — find the one that sounds
              like you.
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
    </div>
  );
}
