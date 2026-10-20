import { Link } from "react-router-dom";
import { ScrollText, ListChecks, Users, Gift } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "./Footer";
import { GIVEAWAY, GIVEAWAY_DEADLINE_ISO } from "@/data/giveaway";
import { useCountdown } from "@/lib/useCountdown";
import { buildWhatsAppMessageUrl } from "@/lib/whatsapp";
import { useSeo } from "@/lib/seo";
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
  { number: 6, string: "TVS Jupiter (110cc)", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405817/6.png" },
  { number: 7, string: "IPhone 16", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405818/7.png" },
  { number: 8, string: "HP Laptop", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405818/8.png" },
  { number: 9, string: "Gold Coin 2g", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405819/9.png" },
  { number: 10, string: "Gold Coin 2g", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405820/10.png" },
  { number: 11, string: "Godrej AC (1 Tone 3 Star)", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405821/11.png" },
  { number: 12, string: "LG Double Door Fridge", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405822/12.png", size: "h-80 sm:h-96" },
  {
    number: 13,
    string: "Samsung Galaxy Tab",
    image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405824/13.png",
    cardClass: "flex flex-col justify-end lg:self-stretch lg:pb-4",
    imgClass: "lg:flex-1",
  },
  {
    number: 14,
    string: "Washing Machine 7kg LG Fully Automatic",
    image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405825/14.png",
    size: "h-72 sm:h-64",
    cardClass: "flex flex-col justify-end lg:self-stretch",
    imgClass: "lg:flex-1",
  },
  { number: 15, string: "Door Refrigerator Samsung Single", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405826/15.png", size: "h-80 sm:h-96" },
  {
    number: 16,
    string: "Android Mobile Phone",
    image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405827/16.png",
    cardClass: "flex flex-col justify-end lg:self-stretch",
    imgClass: "lg:flex-1",
  },
  {
    number: 17,
    string: "Samsung Semi Automatic Washing Machine",
    image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405828/17.png",
    cardClass: "flex flex-col justify-end lg:self-stretch",
    imgClass: "lg:flex-1",
  },
  { number: 18, string: "Water Purifier", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405830/18.png" },
  { number: 19, string: "32 inch Smart Led Tv", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405831/19.png" },
  { number: 20, string: "V-Guard Air Cooler", image: "https://res.cloudinary.com/mpfeep2s/image/upload/v1792405832/20.png" },
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
        live ? "border-gold/40 bg-gold/10" : "border-[#E6DFD2] bg-white/70"
      }`}
    >
      <span
        className={`font-display text-4xl leading-none tabular-nums sm:text-5xl ${
          live ? "text-gold" : "text-[#141311]"
        }`}
      >
        {pad(value)}
      </span>
      <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[#7A5E2E]">
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
  useSeo({
    title: "Giveaway — Fragrance Gallery",
    description:
      "Enter the Fragrance Gallery perfume giveaway for a chance to win a signature flacon. See how to enter, eligibility and the closing date.",
    path: "/giveaway",
    noindex: true,
  });

  const countdown = useCountdown(GIVEAWAY_DEADLINE_ISO);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <h1 className="sr-only">Fragrance Gallery Perfume Giveaway</h1>

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
          <div className="mt-6 rounded-lg border border-[#E6DFD2] bg-[#FAF7F2] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-gold">
                <Gift className="h-3.5 w-3.5" />
                Giveaway ends in
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#7A5E2E]/70">
                {GIVEAWAY.closingDateLabel}
              </span>
            </div>

            {countdown.expired ? (
              <p className="mt-5 font-display text-2xl text-[#1A1816]">
                This giveaway has now closed.
              </p>
            ) : (
              <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
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
              src={"https://res.cloudinary.com/mpfeep2s/image/upload/v1792405818/1-5_.png"}
              alt="Giveaway prizes 1 to 5"
              className="-mx-6 h-auto w-[calc(100%+3rem)] object-contain sm:mx-0 sm:w-full sm:max-h-[34rem] lg:max-h-[26rem]"
            />
            <h2 className="mt-3 text-center font-anek text-2xl font-semibold uppercase tracking-[0.16em] text-[#7A5E2E] sm:text-lg">
              Prize 1–5
            </h2>
            <h2 className="mt-3 text-center font-anek text-lg font-medium uppercase tracking-[0.16em] text-[#7A5E2E] sm:text-lg sm:font-medium">
             10 cent plot for each first five winners
            </h2>
          </article>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-20 sm:gap-y-30 lg:grid-cols-3">
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
                <h3 className="mt-3 text-center font-anek text-2xl font-semibold uppercase tracking-[0.16em] text-[#7A5E2E] sm:text-lg">
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
