import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type NavItem = { label: string; to?: string; href?: string };

const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Collections", href: "/#collections" },
  // { label: "Gift Sets", to: "/collections" },
  { label: "Contact", href: "#contact" },
];

function NavEntry({
  item,
  className,
  onNavigate,
}: {
  item: NavItem;
  className: string;
  onNavigate?: () => void;
}) {
  const inner = <>{item.label}</>;
  const handleClick = () => onNavigate?.();

  return item.to ? (
    <Link to={item.to} className={className} onClick={handleClick}>
      {inner}
    </Link>
  ) : item.href ? (
    <a href={item.href} className={className} onClick={handleClick}>
      {inner}
    </a>
  ) : (
    <a href="#" className={className} onClick={handleClick}>
      {inner}
    </a>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

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
      <nav className="hidden gap-9 text-sm uppercase tracking-[0.15em] lg:flex">
        {nav.map((n) => (
          <NavEntry
            key={n.label}
            item={n}
            className="flex items-center gap-1 transition-colors hover:text-gold"
          />
        ))}
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
              {nav.map((n) => (
                <NavEntry
                  key={n.label}
                  item={n}
                  onNavigate={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-foreground/5 py-4 text-sm uppercase tracking-[0.15em] transition-colors hover:text-gold"
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
