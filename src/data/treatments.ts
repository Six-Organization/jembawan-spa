export type Localized = { en: string; id: string };

export type Duration = { minutes: number; price: number };

export type Treatment = {
  id: string;
  category: string;
  name: string;
  desc: Localized;
  durations: Duration[];
  tags?: ("popular" | "signature")[];
};

export type TreatmentCategory = { id: string; label: Localized; kicker?: Localized };

export const treatmentCategories: TreatmentCategory[] = [
  { id: "massage", label: { en: "Massage", id: "Pijat" } },
  { id: "body", label: { en: "Body Treatments", id: "Perawatan Tubuh" } },
  { id: "beauty", label: { en: "Face, Hands & Feet", id: "Wajah, Tangan & Kaki" } },
  { id: "packages", label: { en: "Signature Packages", id: "Paket Signature" } },
];

/**
 * Treatment menu — durations & prices are indicative starting points (in IDR);
 * update to the spa's actual pricing. Names kept in English (spa convention).
 */
export const treatments: Treatment[] = [
  {
    id: "balinese",
    category: "massage",
    name: "Traditional Balinese Massage",
    tags: ["popular"],
    desc: {
      en: "Gentle stretches, acupressure, and long flowing strokes with aromatic oil to release tension.",
      id: "Peregangan lembut, akupresur, dan usapan panjang dengan minyak aromatik untuk melepas ketegangan.",
    },
    durations: [
      { minutes: 60, price: 120000 },
      { minutes: 90, price: 170000 },
    ],
  },
  {
    id: "aromatherapy",
    category: "massage",
    name: "Aromatherapy Massage",
    desc: {
      en: "A soothing full-body massage with your choice of essential oil for deep relaxation.",
      id: "Pijat seluruh tubuh yang menenangkan dengan pilihan minyak esensial untuk relaksasi mendalam.",
    },
    durations: [
      { minutes: 60, price: 140000 },
      { minutes: 90, price: 190000 },
    ],
  },
  {
    id: "deep-tissue",
    category: "massage",
    name: "Deep Tissue Massage",
    desc: {
      en: "Firm, focused pressure that targets deeper muscle layers and stubborn knots.",
      id: "Tekanan kuat dan terfokus pada lapisan otot lebih dalam serta simpul yang membandel.",
    },
    durations: [
      { minutes: 60, price: 150000 },
      { minutes: 90, price: 200000 },
    ],
  },
  {
    id: "hot-stone",
    category: "massage",
    name: "Hot Stone Massage",
    tags: ["signature"],
    desc: {
      en: "Warm volcanic stones glide over the body to melt away tension and improve circulation.",
      id: "Batu vulkanik hangat diusapkan ke tubuh untuk meluruhkan ketegangan dan melancarkan peredaran darah.",
    },
    durations: [{ minutes: 90, price: 220000 }],
  },
  {
    id: "reflexology",
    category: "massage",
    name: "Foot Reflexology",
    tags: ["popular"],
    desc: {
      en: "Pressure-point work on the feet to restore balance and leave you refreshed.",
      id: "Pijat titik tekan pada kaki untuk mengembalikan keseimbangan dan menyegarkan tubuh.",
    },
    durations: [
      { minutes: 45, price: 90000 },
      { minutes: 60, price: 110000 },
    ],
  },
  {
    id: "lulur",
    category: "body",
    name: "Balinese Lulur Body Scrub",
    desc: {
      en: "A traditional turmeric-and-spice scrub that exfoliates and softens the skin.",
      id: "Lulur tradisional dari kunyit dan rempah yang mengangkat sel kulit mati dan melembutkan kulit.",
    },
    durations: [{ minutes: 60, price: 130000 }],
  },
  {
    id: "scrub-massage",
    category: "body",
    name: "Scrub + Massage",
    desc: {
      en: "A Balinese massage followed by a full-body scrub — cleansed, smooth, and relaxed.",
      id: "Pijat Bali dilanjutkan lulur seluruh tubuh — bersih, halus, dan rileks.",
    },
    durations: [{ minutes: 120, price: 240000 }],
  },
  {
    id: "facial",
    category: "beauty",
    name: "Natural Facial",
    desc: {
      en: "Cleanse, exfoliate, mask, and massage with natural products for a glowing complexion.",
      id: "Membersihkan, eksfoliasi, masker, dan pijat wajah dengan produk alami untuk kulit bercahaya.",
    },
    durations: [{ minutes: 60, price: 130000 }],
  },
  {
    id: "cream-bath",
    category: "beauty",
    name: "Hair Cream Bath",
    desc: {
      en: "A nourishing hair and scalp treatment with a relaxing head, neck, and shoulder massage.",
      id: "Perawatan rambut dan kulit kepala yang menutrisi dengan pijat kepala, leher, dan bahu.",
    },
    durations: [{ minutes: 60, price: 110000 }],
  },
  {
    id: "mani-pedi",
    category: "beauty",
    name: "Manicure & Pedicure",
    desc: {
      en: "Tidy, shape, and pamper your hands and feet — a clean, polished finish.",
      id: "Merapikan dan memanjakan tangan serta kaki — hasil bersih dan rapi.",
    },
    durations: [{ minutes: 90, price: 150000 }],
  },
  {
    id: "signature",
    category: "packages",
    name: "Jembawan Signature Ritual",
    tags: ["signature", "popular"],
    desc: {
      en: "Balinese massage + lulur scrub + flower bath — our complete 2.5-hour journey of bliss.",
      id: "Pijat Bali + lulur + mandi bunga — perjalanan relaksasi lengkap selama 2,5 jam.",
    },
    durations: [{ minutes: 150, price: 350000 }],
  },
  {
    id: "couple",
    category: "packages",
    name: "Couple's Retreat",
    desc: {
      en: "Side-by-side massage and flower bath for two — perfect for a special escape together.",
      id: "Pijat berdampingan dan mandi bunga untuk berdua — momen istimewa bersama.",
    },
    durations: [{ minutes: 120, price: 520000 }],
  },
];

export function formatPrice(v: number): string {
  return "Rp " + v.toLocaleString("id-ID");
}

/** Flat option list for the booking dropdown. */
export const bookingOptions: { value: string; label: string }[] = treatments.map((t) => ({
  value: t.name,
  label: t.name,
}));
