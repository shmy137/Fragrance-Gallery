import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";

export function HomeButton() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  return (
    <Link
      to="/"
      aria-label="Go to home page"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-[#161513] px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#FAF8F5] shadow-xl transition-all hover:opacity-95"
    >
      <Home className="h-4 w-4 text-gold" />
      Home
    </Link>
  );
}
