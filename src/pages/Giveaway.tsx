import { Link } from "react-router-dom";
import { ScrollText, ListChecks, Users, Gift } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "./Footer";
import { GIVEAWAY, GIVEAWAY_DEADLINE_ISO } from "@/data/giveaway";
import { useCountdown } from "@/lib/useCountdown";
import { buildWhatsAppMessageUrl } from "@/lib/whatsapp";
import prize1to5 from "@/assets/1-5_.png";
import prize6 from "@/assets/6.png";
import prize7 from "@/assets/7.png";
import prize8 from "@/assets/8.png";
import prize9 from "@/assets/9.png";
import prize10 from "@/assets/10.png";
import prize11 from "@/assets/11.png";
import prize12 from "@/assets/12.png";
import prize13 from "@/assets/13.png";
import prize14 from "@/assets/14.png";
import prize15 from "@/assets/15.png";
import prize16 from "@/assets/16.png";
import prize17 from "@/assets/17.png";
import prize18 from "@/assets/18.png";
import prize19 from "@/assets/19.png";
import prize20 from "@/assets/20.png";

const pad = (value: number) => String(value).padStart(2, "0");
const prizes: {
  number: number;
  string: string;
  image: string;
  size?: string;
  cardClass?: string;
  imgClass?: string;
}[] = [
  { number: 6, string: "TVS Jupiter (110cc)", image: prize6 },
  { number: 7, string: "IPhone 16", image: prize7 },
  { number: 8, string: "HP Laptop", image: prize8 },
  { number: 9, string: "Gold Coin 2g", image: prize9 },
  { number: 10, string: "Gold Coin 2g", image: prize10 },
  { number: 11, string: "Godrej AC (1 Tone 3 Star)", image: prize11 },
  { number: 12, string: "LG Double Door Fridge", image: prize12, size: "h-80 sm:h-96" },
  {
    number: 13,
    string: "Samsung Galaxy Tab",
    image: prize13,
    cardClass: "flex flex-col justify-end lg:self-stretch lg:pb-4",
    imgClass: "lg:flex-1",
  },
  {
    number: 14,
    string: "Washing Machine 7kg LG Fully Automatic",
    image: prize14,
    size: "h-72 sm:h-64",
    cardClass: "flex flex-col justify-end lg:self-stretch",
    imgClass: "lg:flex-1",
  },
  { number: 15, string: "Door Refrigerator Samsung Single", image: prize15, size: "h-80 sm:h-96" },
  {
    number: 16,
    string: "Android Mobile Phone",
    image: prize16,
    cardClass: "flex flex-col justify-end lg:self-stretch",
    imgClass: "lg:flex-1",
  },
  {
    number: 17,
    string: "Samsung Semi Automatic Washing Machine",
    image: prize17,
    cardClass: "flex flex-col justify-end lg:self-stretch",
    imgClass: "lg:flex-1",
  },
  { number: 18, string: "Water Purifier", image: prize18 },
  { number: 19, string: "32 inch Smart Led Tv", image: prize19 },
  { number: 20, string: "V-Guard Air Cooler", image: prize20 },
];

function CountdownUnit({
  value,
  label,
  live,
}: {
  value: number;
  label: string;
  live?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center rounded-lg border px-2 py-4 ${
        live ? "border-gold/40 bg-gold/10" : "border-[#FAF8F5]/10 bg-[#1F1D1A]"
      }`}
    >
      <span
        className={`font-display text-4xl leading-none tabular-nums sm:text-5xl ${
          live ? "text-gold" : "text-[#FAF8F5]"
        }`}
      >
        {pad(value)}
      </span>
      <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[#FAF8F5]/45">
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

      <section className="relative bg-[#F7F2E9] px-6 py-8 sm:py-10 lg:px-16 lg:py-12">
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
          <div className="mt-6 rounded-xl border border-[#2A2622] bg-[#161513] p-5 shadow-[0_20px_50px_-24px_rgba(20,19,17,0.6)] sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-gold">
                <Gift className="h-3.5 w-3.5" />
                Giveaway ends in
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#FAF8F5]/40">
                {GIVEAWAY.closingDateLabel}
              </span>
            </div>

            {countdown.expired ? (
              <p className="mt-5 font-display text-2xl text-[#FAF8F5]">
                This giveaway has now closed.
              </p>
            ) : (
              <div className="mt-5 grid max-w-lg grid-cols-4 gap-2 sm:gap-3">
                <CountdownUnit value={countdown.days} label="Days" />
                <CountdownUnit value={countdown.hours} label="Hours" />
                <CountdownUnit value={countdown.minutes} label="Minutes" />
                <CountdownUnit value={countdown.seconds} label="Seconds" live />
              </div>
            )}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-10 lg:px-16 lg:py-14">
        <section aria-label="Giveaway prizes" className="mb-10">
          <article className="mb-8 overflow-hidden">
            <img
              src={prize1to5}
              alt="Giveaway prizes 1 to 5"
              className="-mx-6 h-32 w-[calc(100%+3rem)] object-cover object-right sm:mx-0 sm:h-auto sm:w-full sm:max-h-[34rem] sm:object-contain lg:max-h-[26rem]"
            />
            <h2 className="mt-3 text-center font-anek text-2xl font-bold uppercase tracking-[0.16em] text-[#7A5E2E] sm:text-lg">
              Prize 1–5
            </h2>
          </article>

          <div className="grid grid-cols-1 gap-x-20 gap-y-30 sm:grid-cols-2 lg:grid-cols-3">
            {prizes.map(({ number, string, image, size, cardClass, imgClass }) => (
              <article
                key={number}
                className={`self-start overflow-hidden ${cardClass ?? ""}`}
              >
                <img
                  src={image}
                  alt={`Giveaway prize ${number}`}
                  loading="lazy"
                  className={`${size ?? "h-48 sm:h-55"} w-full object-contain ${imgClass ?? ""}`}
                />
                <h3 className="mt-3 text-center font-anek text-2xl font-bold uppercase tracking-[0.16em] text-[#7A5E2E] sm:text-lg">
                  {string}
                </h3>
              </article>
            ))}
          </div>
        </section>

        <div className="border-b border-[#ECE5D8] pb-8 text-center">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center gap-2 border border-[#141311] bg-[#141311] px-10 py-4 text-sm font-medium uppercase tracking-[0.25em] text-[#FAF8F5] transition-all duration-200 hover:bg-transparent hover:text-[#141311]"
          >
            {GIVEAWAY.entryActionLabel}
          </Link>
        </div>

        <Section icon={<ListChecks className="h-5 w-5" />} title="How to enter">
          <ol className="space-y-3">
            {GIVEAWAY.entryInstructions.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 text-base font-light leading-relaxed text-[#4A453F] lg:text-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E6DFD2] bg-white/70 text-sm font-medium text-[#7A5E2E]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Section>

        <Section icon={<ScrollText className="h-5 w-5" />} title="Conditions Apply">
          <ul className="list-disc space-y-2 pl-5 text-base font-light leading-relaxed text-[#4A453F] lg:text-sm">
            {GIVEAWAY.terms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  );
}

export default Giveaway;
