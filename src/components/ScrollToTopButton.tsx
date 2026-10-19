import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER_PX = 400;

export function ScrollToTopButton() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setShow(false);
      return;
    }

    const onScroll = () => setShow(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname !== "/" || !show) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#141311]/15 bg-[#FAF7F2] text-[#141311] shadow-xl duration-500 animate-in fade-in-0 slide-in-from-bottom-6 hover:scale-110 hover:border-gold hover:text-gold motion-reduce:animate-none"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
