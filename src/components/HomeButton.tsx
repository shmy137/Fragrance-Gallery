import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";

export function HomeButton() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  return (
    <Link
      to="/"
      aria-label="Go to home page"
      className="group fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#161513] shadow-xl duration-500 animate-in fade-in-0 slide-in-from-left-6 hover:scale-110 hover:shadow-2xl motion-reduce:animate-none"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-gold/20 motion-reduce:animate-none" />
      <Home className="relative h-5 w-5 text-gold transition-transform duration-300 group-hover:-translate-y-0.5" />
    </Link>
  );
}
