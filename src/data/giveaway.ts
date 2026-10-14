/**
 * Giveaway configuration — the single source of truth for the promotion.
 *
 * ⚠️ PLACEHOLDER CONTENT
 * Every value below is a placeholder. The business must approve and replace
 * the real prize, deadline, eligibility, entry method and terms before the
 * /giveaway page is published or the promotion is announced.
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
  eligibility: string[];
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
  prizeName: "A Signature Fragrance from the Collection",
  prizeDescription:
    "The winner receives a full-sized signature fragrance of their choice, beautifully presented. The exact prize and its value must be confirmed by Fragrance Gallery before this page goes live.",

  // TODO(business): confirm the exact closing date/time and its timezone.
  closingDateLabel: "Closing date to be confirmed",

  // TODO(business): confirm the official entry method.
  entryInstructions: [
    "Tap the button below to register your interest through our WhatsApp concierge.",
    "The official entry method, and any required details, will be confirmed by Fragrance Gallery before the giveaway opens.",
  ],

  // TODO(business): confirm eligibility rules and region.
  eligibility: [
    "Open to entrants aged 18 and over.",
    "The eligible region and any geographic restrictions are to be confirmed.",
    "One entry per person unless otherwise stated.",
  ],

  // TODO(business): confirm the final terms with the business.
  terms: [
    "These terms are placeholders and must be reviewed before publication.",
    "The prize is non-transferable and no cash alternative is offered.",
    "The winner will be selected and notified as set out in the final terms.",
  ],

  entryActionLabel: "Enter the Giveaway",

  // TODO(business): confirm the entry message and channel.
  entryWhatsAppMessage: "Hi Fragrance Gallery, I'd like to enter the giveaway.",
};
