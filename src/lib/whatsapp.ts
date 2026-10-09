import type { BottleSize } from "@/data/fragrances";

const WHATSAPP_NUMBER = "918590727887";

export function buildWhatsAppOrderUrl(name: string, size: BottleSize): string {
  const message = `Hi, I'd like to order: ${name} (${size}) × 1`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
