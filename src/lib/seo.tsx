import { useEffect } from "react";
import type { Fragrance } from "@/data/fragrances";

// Single source of truth for the canonical site origin used by runtime metadata.
// The same origin is also hard-coded in index.html, public/robots.txt and
// public/sitemap.xml (static files that cannot import this module) — keep them in sync.
export const SITE_URL = "https://fragrancegallary.com";
export const SITE_NAME = "Fragrance Gallery";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  image?: string | undefined;
  type?: "website" | "article";
  noindex?: boolean;
}

/**
 * Keeps document metadata in sync with the active route on a client-rendered
 * SPA: title, description, canonical URL, robots directive and Open
 * Graph / Twitter cards. Static defaults live in index.html for crawlers that
 * do not execute JavaScript.
 */
export function useSeo({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
}: SeoConfig) {
  useEffect(() => {
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    // Product/hero images may already be absolute (Cloudinary) or local Vite
    // asset URLs (e.g. "/assets/hero-abc.png") — only prefix the latter.
    const absoluteImage = image
      ? image.startsWith("http")
        ? image
        : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`
      : undefined;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setLink("canonical", url);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("name", "twitter:card", absoluteImage ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    if (absoluteImage) {
      setMeta("property", "og:image", absoluteImage);
      setMeta("name", "twitter:image", absoluteImage);
    }
  }, [title, description, path, image, type, noindex]);
}

/** Renders a JSON-LD block into the DOM. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

/**
 * Builds an ItemList of Product structured data from the catalogue.
 * Reads every value (including the image URL) straight from the product data,
 * so swapping local assets for Cloudinary URLs later needs no SEO changes.
 * Only facts present in the data are emitted — no ratings, reviews, stock
 * or shipping details.
 */
export function buildProductsJsonLd(fragrances: Fragrance[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Scent Collection",
    numberOfItems: fragrances.length,
    itemListElement: fragrances.map((fragrance, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@context": "https://schema.org",
        "@type": "Product",
        name: fragrance.name,
        category: fragrance.category,
        brand: { "@type": "Brand", name: SITE_NAME },
        image: toAbsoluteUrl(fragrance.image),
        offers: {
          "@type": "Offer",
          price: fragrance.prices["100ml"],
          priceCurrency: "INR",
          url: `${SITE_URL}/collections`,
        },
      },
    })),
  };
}

/** Prefixes a root-relative path with the site origin; passes absolute URLs through. */
function toAbsoluteUrl(value: string): string {
  if (value.startsWith("http")) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}
