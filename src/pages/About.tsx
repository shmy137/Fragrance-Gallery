import atelier from "@/assets/about-atelier.jpg";

const stats = [
  { value: "2007", label: "House founded" },
  { value: "9", label: "Signature compositions" },
  { value: "42", label: "Raw materials, known by name" },
  { value: "6 wks", label: "Resting every batch" },
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
    </div>
  );
}
