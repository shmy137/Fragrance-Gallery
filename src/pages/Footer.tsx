import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-fgt.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="w-full">
      {/* Main Footer Links & Newsletter */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            {/* Brand column */}
            <div className="lg:col-span-6">
              <a href="/" className="inline-block">
                <img
                  src={logo}
                  alt="Fragrance Gallery"
                  className="h-12 w-auto max-w-full object-contain"
                />
              </a>
              <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
                Luxury perfumes crafted to inspire confidence and elegance.
              </p>
              <div className="mt-5 flex items-center gap-5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
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
