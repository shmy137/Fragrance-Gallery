import { useEffect, useState } from "react";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function getRemaining(deadlineMs: number): Countdown {
  const diff = deadlineMs - Date.now();

  if (!Number.isFinite(deadlineMs) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    expired: false,
  };
}

/**
 * Live countdown to a fixed deadline. Recomputes from the deadline on every
 * tick, so it is accurate across refreshes and never restarts from a duration.
 */
export function useCountdown(deadlineIso: string): Countdown {
  const deadlineMs = Date.parse(deadlineIso);
  const [remaining, setRemaining] = useState(() => getRemaining(deadlineMs));

  useEffect(() => {
    const update = () => setRemaining(getRemaining(deadlineMs));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, [deadlineMs]);

  return remaining;
}
