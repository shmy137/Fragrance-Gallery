import type { BottleSize } from "@/data/fragrances";

const WHATSAPP_NUMBER = "+916282835003";

export function buildWhatsAppMessageUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppOrderUrl(name: string, size: BottleSize): string {
  return buildWhatsAppMessageUrl(`Hi, I'd like to order: ${name} (${size}) × 1`);
}
