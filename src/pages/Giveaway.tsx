import { Link } from "react-router-dom";
import { CalendarDays, ExternalLink, ScrollText, ListChecks, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "./Footer";
import { GIVEAWAY, GIVEAWAY_DEADLINE_ISO } from "@/data/giveaway";
import { useCountdown } from "@/lib/useCountdown";
import { buildWhatsAppMessageUrl } from "@/lib/whatsapp";
import prize from "@/assets/hero-3.jpg";

const pad = (value: number) => String(value).padStart(2, "0");

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-md border border-[#E6DFD2] bg-[#FAF7F2] px-3 py-3">
      <span className="font-display text-3xl leading-none text-[#141311] sm:text-4xl">
        {pad(value)}
      </span>
      <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7A5E2E]">
        {label}
      </span>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#ECE5D8] py-8">
      <h2 className="flex items-center gap-2.5 font-display text-2xl text-[#1A1816]">
        <span className="text-gold">{icon}</span>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function Giveaway() {
  const countdown = useCountdown(GIVEAWAY_DEADLINE_ISO);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="relative border-b border-[#ECE5D8] bg-[#F7F2E9] px-6 py-8 sm:py-10 lg:px-16 lg:py-12">
        <div className="mx-auto max-w-5xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">Giveaway</span>
          </nav>

          {/* Countdown timer */}
          <div className="mt-6 rounded-lg border border-[#E6DFD2] bg-[#FAF7F2] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-[#7A5E2E]">
              <span>Giveaway ends in</span>
              <span className="flex items-center gap-2">
                <CalendarDays className="h-3.5 w-3.5 text-gold" />
                {GIVEAWAY.closingDateLabel}
              </span>
            </div>

            {countdown.expired ? (
              <p className="mt-4 font-display text-2xl text-[#1A1816]">
                This giveaway has now closed.
              </p>
            ) : (
              <div className="mt-4 grid max-w-lg grid-cols-4 gap-3">
                <CountdownUnit value={countdown.days} label="Days" />
                <CountdownUnit value={countdown.hours} label="Hours" />
                <CountdownUnit value={countdown.minutes} label="Minutes" />
                <CountdownUnit value={countdown.seconds} label="Seconds" />
              </div>
            )}
          </div>

          <p className="mt-6 rounded-sm border border-dashed border-[#C9B98E] bg-[#FBF6EA] px-4 py-3 text-xs leading-relaxed text-[#7A5E2E]">
            <strong className="font-medium">Draft content:</strong> the prize, closing date,
            eligibility and entry method shown on this page are placeholders. They must be replaced
            with approved details before the page is published.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-10 lg:px-16 lg:py-14">
        <div className="overflow-hidden rounded-lg border border-[#E6DFD2] bg-white/60">
          <div className="grid gap-0 md:grid-cols-2">
            <img
              src={prize}
              alt="A signature Fragrance Gallery perfume bottle with white roses"
              className="h-64 w-full object-cover md:h-full"
            />
            <div className="flex flex-col justify-center p-6 lg:p-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7A5E2E]">
                The prize
              </p>
              <h2 className="mt-2 font-display text-2xl leading-snug text-[#1A1816] sm:text-3xl">
                {GIVEAWAY.prizeName}
              </h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-[#4A453F]">
                {GIVEAWAY.prizeDescription}
              </p>
            </div>
          </div>
        </div>

        <Section icon={<ListChecks className="h-5 w-5" />} title="How to enter">
          <ol className="space-y-3">
            {GIVEAWAY.entryInstructions.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 text-sm font-light leading-relaxed text-[#4A453F]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E6DFD2] bg-white/70 text-xs font-medium text-[#7A5E2E]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Section>

        <Section icon={<Users className="h-5 w-5" />} title="Eligibility">
          <ul className="list-disc space-y-2 pl-5 text-sm font-light leading-relaxed text-[#4A453F]">
            {GIVEAWAY.eligibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section icon={<ScrollText className="h-5 w-5" />} title="Conditions Apply">
          <ul className="list-disc space-y-2 pl-5 text-sm font-light leading-relaxed text-[#4A453F]">
            {GIVEAWAY.terms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <div className="border-t border-[#ECE5D8] pt-8 text-center">
          <a
            href={buildWhatsAppMessageUrl(GIVEAWAY.entryWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#141311] bg-[#141311] px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-[#FAF8F5] transition-all duration-200 hover:bg-transparent hover:text-[#141311]"
          >
            {GIVEAWAY.entryActionLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <p className="mx-auto mt-3 max-w-md text-xs font-light leading-relaxed text-muted-foreground">
            Placeholder entry channel — this currently opens a WhatsApp message. Confirm the
            official entry method before the giveaway opens.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Giveaway;
