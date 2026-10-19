import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { GIVEAWAY_DEADLINE_ISO } from "@/data/giveaway";
import { useCountdown } from "@/lib/useCountdown";

const REVEAL_DELAY_MS = 2500;

const prize =
  "https://res.cloudinary.com/mpfeep2s/image/upload/v1792406126/Fragrance-Giveaway.jpg.jpg";

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
  const [dismissed, setDismissed] = useState(false);
  const countdown = useCountdown(GIVEAWAY_DEADLINE_ISO);

  // Dismissal lives only in memory: it holds while the visitor stays on the
  // site (even across route changes) and resets on refresh, so the card
  // returns for the next visit.
  useEffect(() => {
    if (pathname !== "/" || dismissed) return;

    const id = window.setTimeout(() => setVisible(true), REVEAL_DELAY_MS);
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
      style={{
        backgroundImage: `linear-gradient(rgba(250, 247, 242, 0.01), rgba(250, 247, 242, 0.75)), url(${prize})`,
      }}
      className="fixed bottom-[max(10rem,env(safe-area-inset-bottom))] left-4 right-4 z-50 mx-auto flex max-h-[calc(100dvh-2rem)] min-h-[30rem] w-auto max-w-[26rem] animate-in fade-in slide-in-from-bottom-4 flex-col overflow-y-auto rounded-2xl border border-[#E6DFD2] bg-[#FAF7F2] bg-cover bg-center bg-no-repeat shadow-[0_20px_60px_-24px_rgba(20,19,17,0.45)] duration-500 motion-reduce:animate-none sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0 sm:w-[22rem]"
    >
      <div className="flex justify-end px-5 pt-4">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close giveaway invitation"
          className="-mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E6DFD2] bg-[#FAF7F2]/90 text-[#4A453F] transition-colors hover:bg-white hover:text-[#141311]"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-auto px-5 pb-5 pt-4">
        {countdown.expired ? (
          <p className="rounded-md border border-[#E6DFD2] bg-white/70 px-4 py-3 text-center text-xs font-light text-[#4A453F]">
            This giveaway has now closed. Thank you to everyone who took part.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-2">
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
          </>
        )}
      </div>
    </aside>
  );
}
