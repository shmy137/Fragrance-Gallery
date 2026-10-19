import { MapPin, MessageCircle } from "lucide-react";
import { buildWhatsAppMessageUrl } from "@/lib/whatsapp";

const TEMPORARY_ADDRESS = "BUILDING NO:CP VI 61, ROAD STREET: M M ROAD, PILATHARA, KANNUR KERALA";
const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent}`;
const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent}&output=embed`;

export function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Links & Newsletter */}
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            {/* WhatsApp CTA & Brand column */}
            <div className="sm:col-span-1 lg:col-span-7">
              <h3 className="font-display text-2xl font-normal text-foreground sm:text-3xl">
                Let’s find your signature scent.
              </h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                Questions about our fragrances? Message us on WhatsApp and we’ll be happy to help.
              </p>
              <a
                href={buildWhatsAppMessageUrl("Hi, I'd like to know more about your fragrances.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 bg-[#141311] px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#FAF8F5] transition hover:bg-[#2D2A26]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>

              {/* Socials underneath the WhatsApp button */}
              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/__fragrancegallery.in"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <svg
                    className="h-6 w-6"
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <svg
                    className="h-6 w-6"
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
              
              </div>
            </div>
            {/* Temporary Location Map */}
            <div className="sm:col-span-1 lg:col-span-5">
              <h3 className="font-display text-2xl font-normal text-foreground sm:text-3xl">
                Visit us
              </h3>
              <p className="mt-3 flex items-start gap-2 text-sm font-light leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{TEMPORARY_ADDRESS} </span>
              </p>
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open temporary address in Google Maps: ${TEMPORARY_ADDRESS}`}
                className="group relative mt-5 block h-44 overflow-hidden border border-[#E9E3D8] bg-[#F2EDE4]"
              >
                <iframe
                  title={`Map preview for ${TEMPORARY_ADDRESS}`}
                  src={googleMapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none h-full w-full grayscale"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-xs font-medium uppercase tracking-[0.18em] text-transparent transition-colors group-hover:bg-black/10 group-hover:text-[#141311]">
                  Open in Google Maps
                </span>
              </a>
            </div>
          </div>
          {/* Bottom Bar Divider & Copyright */}
          <div className="mt-16 border-t border-foreground/10 pt-8">
            <div className="flex flex-col items-start justify-between gap-4 text-xs font-light text-muted-foreground sm:flex-row sm:items-center">
              <p>© FRAGRANCE GALLERY. All rights reserved.</p>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


