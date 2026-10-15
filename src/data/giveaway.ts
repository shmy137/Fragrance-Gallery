
export const GIVEAWAY_DEADLINE_ISO = "2026-11-31T23:59:59Z"; // PLACEHOLDER

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
