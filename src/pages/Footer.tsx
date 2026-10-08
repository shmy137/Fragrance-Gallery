import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  showCta?: boolean;
}

export function Footer({ showCta = true }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="w-full">
      {/* Pre-footer Call to Action Banner */}
      {showCta && (
        <section className="relative overflow-hidden bg-[#f7efe9] px-6 py-20 text-center sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Your story continues
            </p>
            <h2 className="mt-5 font-display text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Find Your Signature
              <span className="mt-2 block font-serif italic text-gold">Leave Your Scent</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-foreground/80 sm:text-base">
              Meet Belle, Luxe and Noir, and discover the expression that feels most like you.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/collections"
                className="bg-primary px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
              >
                Explore Collection
              </Link>
              <Link
                to="/collections"
                className="border border-foreground/30 bg-background/40 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground hover:bg-background/80"
              >
                Shop Gift Sets
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Main Footer Links & Newsletter */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            {/* Brand column */}
            <div className="lg:col-span-6">
              <a href="/" className="inline-block">
                <span className="block font-display text-2xl font-normal tracking-[0.25em] text-foreground">
                  FRAGRANCE
                </span>
                <span className="block text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
                  Gallery
                </span>
              </a>
              <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
                Luxury perfumes crafted to inspire confidence and elegance.
              </p>
            </div>

            {/* Newsletter Column */}
            <div className="sm:col-span-2 lg:col-span-6">
              <h3 className="font-display text-2xl font-normal text-foreground sm:text-3xl">
                A little SCENTÉ in your inbox.
              </h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                Discover new scents, collection stories and inspiration for your fragrance ritual.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 max-w-md">
                <div className="relative border-b border-foreground/30 pb-2 transition-colors focus-within:border-foreground">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full bg-transparent pr-10 text-sm font-light placeholder:text-muted-foreground/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-foreground transition-transform hover:translate-x-1"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                {subscribed ? (
                  <p className="mt-3 text-xs font-light text-gold">
                    Thank you for subscribing to SCENTÉ.
                  </p>
                ) : (
                  <p className="mt-3 text-[11px] font-light leading-normal text-muted-foreground">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Bottom Bar Divider & Copyright */}
          <div className="mt-16 border-t border-foreground/10 pt-8">
            <div className="flex flex-col items-start justify-between gap-4 text-xs font-light text-muted-foreground sm:flex-row sm:items-center">
              <p>© FRAGRANCE GALLERY. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </a>
                <a href="#" className="transition-colors hover:text-foreground">
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
