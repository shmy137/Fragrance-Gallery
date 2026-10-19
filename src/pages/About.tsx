import { useEffect, useRef, useState } from "react";
import atelier from "@/assets/about-atelier.jpg";

const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 2026, label: "House founded" },
  { value: 2863, suffix: "+", label: "Signature compositions sold" },
  { value: 2, label: "Countries we deliver to" },
  { value: 6, label: "Signature Collections" },
];

function formatCount(value: number) {
  return value.toLocaleString("en-US");
}

function CountUp({
  value,
  suffix,
  duration = 1800,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const start = () => {
      const startedAt = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(value * eased));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          start();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${formatCount(value)}${suffix ?? ""}`}>
      {formatCount(display)}
      {suffix}
    </span>
  );
}

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
                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                  className="block font-display text-4xl text-gold lg:text-5xl"
                />
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
