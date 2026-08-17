export type Localized = { en: string; id: string };

export const highlights: { icon: string; title: Localized; desc: Localized }[] = [
  {
    icon: "HandHeart",
    title: { en: "Skilled Balinese Therapists", id: "Terapis Bali Berpengalaman" },
    desc: {
      en: "Attentive, detailed hands that follow your needs and pressure preferences.",
      id: "Tangan yang telaten dan detail, mengikuti kebutuhan dan tekanan pijat Anda.",
    },
  },
  {
    icon: "Venus",
    title: { en: "Proudly Women-Led", id: "Dikelola Perempuan" },
    desc: {
      en: "A women-owned spa where guests feel safe, cared for, and at ease.",
      id: "Spa milik perempuan, tempat tamu merasa aman, diperhatikan, dan nyaman.",
    },
  },
  {
    icon: "Star",
    title: { en: "Loved by 885+ Guests", id: "Dicintai 885+ Tamu" },
    desc: {
      en: "A 4.8-star favourite in Ubud, trusted by hundreds of happy visitors.",
      id: "Favorit bintang 4,8 di Ubud, dipercaya ratusan tamu yang puas.",
    },
  },
  {
    icon: "Leaf",
    title: { en: "Warm Balinese Welcome", id: "Sambutan Hangat Bali" },
    desc: {
      en: "Free herbal tea and cookies, fresh towels, and a calm, homey setting.",
      id: "Teh herbal dan kue gratis, handuk bersih, dan suasana tenang bak di rumah.",
    },
  },
];

export const experience: { icon: string; label: Localized }[] = [
  { icon: "CupSoda", label: { en: "Free Herbal Tea", id: "Teh Herbal Gratis" } },
  { icon: "Cookie", label: { en: "Complimentary Cookies", id: "Kue Gratis" } },
  { icon: "Flower2", label: { en: "Natural Oils & Herbs", id: "Minyak & Herbal Alami" } },
  { icon: "Wind", label: { en: "Air-Conditioned Rooms", id: "Ruang Ber-AC" } },
  { icon: "ShowerHead", label: { en: "Fresh Towels & Shower", id: "Handuk Bersih & Shower" } },
  { icon: "Sparkles", label: { en: "Clean & Hygienic", id: "Bersih & Higienis" } },
  { icon: "MapPin", label: { en: "Central Ubud", id: "Pusat Ubud" } },
  { icon: "Footprints", label: { en: "Walk-ins Welcome", id: "Tanpa Reservasi Boleh" } },
];

export const galleryTiles: { label: Localized; from: string; to: string }[] = [
  { label: { en: "Massage Room", id: "Ruang Pijat" }, from: "160 30% 40%", to: "160 30% 20%" },
  { label: { en: "Flower Bath", id: "Mandi Bunga" }, from: "18 46% 60%", to: "340 30% 45%" },
  { label: { en: "Herbal Tea", id: "Teh Herbal" }, from: "36 52% 62%", to: "34 45% 42%" },
  { label: { en: "Reflexology", id: "Refleksi" }, from: "140 26% 55%", to: "140 26% 30%" },
  { label: { en: "Balinese Garden", id: "Taman Bali" }, from: "120 25% 55%", to: "150 30% 28%" },
];

export const reviews: {
  name: string;
  meta: Localized;
  rating: number;
  text: Localized;
}[] = [
  {
    name: "Sanae Abouallal",
    meta: { en: "Google Review", id: "Ulasan Google" },
    rating: 5,
    text: {
      en: "Wandering the streets we found this massage place and stopped in. The atmosphere was lovely, so we tried the Balinese body massage — and wow, it was extraordinary. The women here are amazing.",
      id: "Saat berjalan-jalan kami menemukan tempat pijat ini dan mampir. Suasananya menyenangkan, kami coba pijat tubuh Bali — dan wow, luar biasa. Para wanita di sini hebat.",
    },
  },
  {
    name: "Lidya Harmony",
    meta: { en: "Local Guide · Google", id: "Local Guide · Google" },
    rating: 5,
    text: {
      en: "Very detailed and attentive treatment, friendly, and they follow your condition and requests while keeping guests satisfied.",
      id: "Penanganan sangat detail, ramah, mengikuti kondisi/permintaan, juga menjaga kepuasan konsumen.",
    },
  },
  {
    name: "Ardix Bali",
    meta: { en: "Local Guide · Google", id: "Local Guide · Google" },
    rating: 5,
    text: {
      en: "Incredible massage & service. Guests leave happy and relaxed.",
      id: "Pijat & pelayanan luar biasa. Tamu pulang dengan puas dan rileks.",
    },
  },
];

export const nearby: { name: Localized; distance: string }[] = [
  { name: { en: "Ubud Palace", id: "Puri Ubud" }, distance: "~700 m" },
  { name: { en: "Ubud Traditional Art Market", id: "Pasar Seni Ubud" }, distance: "~750 m" },
  { name: { en: "Monkey Forest", id: "Monkey Forest" }, distance: "~1 km" },
  { name: { en: "Campuhan Ridge Walk", id: "Campuhan Ridge Walk" }, distance: "~1.8 km" },
];
