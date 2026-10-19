/**
 * Giveaway configuration — the single source of truth for the promotion.
 *
 * ⚠️ PLACEHOLDER CONTENT
 * Most values below are placeholders. The business must approve and replace
 * the real prize, deadline, eligibility and entry method before the /giveaway
 * page is published or the promotion is announced. The Terms and Conditions
 * ("Conditions Apply") have been supplied by the business.
 */

/**
 * The real, fixed closing date/time of the giveaway, written as an ISO 8601
 * string with an explicit timezone, e.g. "2026-11-30T23:59:59+05:30".
 *
 * TODO(business): replace this placeholder with the confirmed deadline.
 *
 * Both countdowns (the floating card and the /giveaway page) read this single
 * value, so the deadline only ever needs to be changed here. It is a fixed
 * point in time, so it does not restart on page refresh, remount or reopen.
 */
export const GIVEAWAY_DEADLINE_ISO = "2026-12-31T23:59:59Z"; // PLACEHOLDER

export interface GiveawayConfig {
  brand: string;
  eyebrow: string;
  heading: string;
  shortDescription: string;
  pageIntro: string;
  prizeName: string;
  prizeDescription: string;
  closingDateLabel: string;
  entryInstructions: string[];
  terms: string[];
  entryActionLabel: string;
  entryWhatsAppMessage: string;
}

export const GIVEAWAY: GiveawayConfig = {
  brand: "Fragrance Gallery",
  eyebrow: "Exclusive Giveaway",
  heading: "A little gift, just for you.",
  shortDescription:
    "Enter our exclusive giveaway for the chance to win a fragrance from our signature collection.",
  pageIntro:
    "One lucky guest will receive a fragrance from our signature collection, presented in signature Fragrance Gallery style. Entry is free.",

  // TODO(business): confirm the actual prize before publishing.
  prizeName: "Prize Plots 1–5",
  prizeDescription:
    "The prize plots numbered 1–5 are shown above. Additional prize plots 6–20 follow the same layout below.",


  closingDateLabel: "30 April 2027",

  // TODO(business): confirm the official entry method.
  entryInstructions: [
    "Tap the button above to purchase perfume based on your interest through our WhatsApp concierge.",
    "The official entry method, and any required details, will be confirmed by Fragrance Gallery.",
  ],



  terms: [
    "This offer is valid only on purchase of this product mentioned here.",
    "This is a promotional scheme/offer.",
    "All taxes as per government rules will be applicable on all gifts.",
    "The registration fee and other expenses for the prize must be borne by the winner.",
    "This coupon is valid until the scheme lasts.",
    "The company reserves the right to postpone the lucky draw date.",
    "If a customer is dissatisfied with the Lucky Draw Terms and Conditions of the lucky draw, the sole and exclusive remedy is not to participate in the lucky draw.",
  ],

  entryActionLabel: "Enter the Giveaway",

  // TODO(business): confirm the entry message and channel.
  entryWhatsAppMessage: "Hi Fragrance Gallery, I'd like to enter the giveaway.",
};
