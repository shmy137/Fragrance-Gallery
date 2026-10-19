import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Gift, X } from "lucide-react";
import { GIVEAWAY, GIVEAWAY_DEADLINE_ISO } from "@/data/giveaway";
import { useCountdown } from "@/lib/useCountdown";
import prize from "@/assets/hero-2.jpg";

const REVEAL_DELAY_MS = 2500;
const SEEN_KEY = "fg-giveaway-card-seen";

const pad = (value: number) => String(value).padStart(2, "0");

function CountdownCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-md border border-[#E6DFD2] bg-white/70 py-2">
      <span className="font-display text-xl leading-none text-[#141311]">{pad(value)}</span>
      <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-[#7A5E2E]">
        {label}
      </span>
    </div>
  );
}

export function GiveawayCard() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  // Once the card has been shown (or dismissed) in this browser session,
  // it never returns — even across route changes or refreshes — until the
  // session ends.
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      return false;
    }
  });
  const countdown = useCountdown(GIVEAWAY_DEADLINE_ISO);

  useEffect(() => {
    if (pathname !== "/" || dismissed) return;

    const id = window.setTimeout(() => {
      setVisible(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // sessionStorage unavailable — fall back to in-memory only.
      }
    }, REVEAL_DELAY_MS);
    return () => window.clearTimeout(id);
  }, [pathname, dismissed]);

  const dismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  if (!visible || pathname !== "/") return null;

  return (
    <aside
      aria-label="Fragrance Gallery giveaway invitation"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 z-50 mx-auto max-h-[calc(100dvh-2rem)] w-auto max-w-[26rem] animate-in fade-in slide-in-from-bottom-4 overflow-y-auto rounded-2xl border border-[#E6DFD2] bg-[#FAF7F2] shadow-[0_20px_60px_-24px_rgba(20,19,17,0.45)] duration-500 motion-reduce:animate-none sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0 sm:w-[22rem]"
    >
      <div className="flex items-start justify-between gap-4 px-5 pt-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#7A5E2E]">
            {GIVEAWAY.brand}
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#E6DFD2] bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#141311]">
            <Gift className="h-3.5 w-3.5 text-gold" />
            {GIVEAWAY.eyebrow}
          </span>
        </div>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Close giveaway invitation"
          className="-mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E6DFD2] bg-[#FAF7F2]/90 text-[#4A453F] transition-colors hover:bg-white hover:text-[#141311]"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="px-5 pt-3">
        <h2 className="font-display text-2xl leading-snug text-[#1A1816]">{GIVEAWAY.heading}</h2>
        <p className="mt-2 text-xs font-light leading-relaxed text-[#4A453F]">
          {GIVEAWAY.shortDescription}
        </p>
      </div>

      <div className="relative mt-3 h-28 w-full overflow-hidden sm:h-32">
        <img
          src={prize}
          alt="Velvet Orchid perfume bottle with golden orchids"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
      </div>

      {countdown.expired ? (
        <div className="px-5 pb-5 pt-3">
          <p className="rounded-md border border-[#E6DFD2] bg-white/70 px-4 py-3 text-center text-xs font-light text-[#4A453F]">
            This giveaway has now closed. Thank you to everyone who took part.
          </p>
        </div>
      ) : (
        <div className="px-5 pb-5 pt-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#7A5E2E]">
            Giveaway ends in
          </p>
          <div className="mt-2 grid grid-cols-4 gap-2">
            <CountdownCell value={countdown.days} label="Days" />
            <CountdownCell value={countdown.hours} label="Hours" />
            <CountdownCell value={countdown.minutes} label="Mins" />
            <CountdownCell value={countdown.seconds} label="Secs" />
          </div>
          <Link
            to="/giveaway"
            className="mt-4 flex w-full items-center justify-center rounded-sm border border-[#141311] bg-[#141311] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#FAF8F5] transition-colors hover:bg-transparent hover:text-[#141311]"
          >
            Discover the Giveaway
          </Link>
        </div>
      )}
    </aside>
  );
}
