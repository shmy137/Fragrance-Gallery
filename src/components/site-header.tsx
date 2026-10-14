import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// `to` = real page route, `section` = id of a section on the home page
const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", section: "about" },
  { label: "Collections", section: "collections" },
  { label: "Contact", section: "contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // After navigating to the home page from another page, scroll to the requested section
  useEffect(() => {
    if (state?.scrollTo) scrollToSection(state.scrollTo);
  }, [pathname, state]);

  const goToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);

    // Wait for the mobile menu to close (it locks page scroll while open)
    setTimeout(() => {
      if (document.getElementById(id)) scrollToSection(id);
      else navigate("/", { state: { scrollTo: id } });
    }, 300);
  };

  const renderLinks = (className: string) =>
    nav.map(({ label, to, section }) =>
      to ? (
        <Link key={label} to={to} className={className} onClick={() => setMenuOpen(false)}>
          {label}
        </Link>
      ) : (
        <a key={label} href={`/#${section}`} className={className} onClick={(e) => goToSection(e, section!)}>
          {label}
        </a>
      )
    );

  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 sm:px-6 lg:flex lg:justify-between lg:px-16 lg:py-5">
      <Link to="/" className="flex min-w-0 items-center gap-3 lg:gap-4">
        <span className="shrink-0 font-display text-3xl italic text-gold lg:text-4xl">FG</span>
        <span className="min-w-0 text-center leading-none">
          <span className="block truncate font-display text-lg tracking-[0.25em] sm:text-xl lg:tracking-[0.3em]">
            FRAGRANCE
          </span>
          <span className="block truncate text-[9px] tracking-[0.35em] text-muted-foreground sm:text-[10px] lg:tracking-[0.4em]">
            GALLERY
          </span>
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden gap-9 text-sm uppercase tracking-[0.15em] lg:flex">
        {renderLinks("flex items-center gap-1 transition-colors hover:text-gold")}
      </nav>

      {/* Mobile hamburger */}
      <div className="flex shrink-0 items-center lg:hidden">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="grid h-9 w-9 place-items-center rounded-md border border-foreground/30 transition-colors hover:border-gold hover:text-gold"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-l border-foreground/10 bg-background p-0"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <SheetHeader className="border-b border-foreground/10 px-6 py-5 text-left">
              <SheetTitle className="font-display text-lg tracking-[0.3em]">MENU</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col px-6 py-4">
              {renderLinks(
                "flex items-center justify-between border-b border-foreground/5 py-4 text-sm uppercase tracking-[0.15em] transition-colors hover:text-gold"
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}