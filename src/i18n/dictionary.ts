export type Lang = "id" | "en";

type Dict = Record<string, { id: string; en: string }>;

export const t: Dict = {
  // Nav
  "nav.about": { id: "Tentang", en: "About" },
  "nav.why": { id: "Keunggulan", en: "Why Us" },
  "nav.treatments": { id: "Treatment", en: "Treatments" },
  "nav.experience": { id: "Pengalaman", en: "Experience" },
  "nav.gallery": { id: "Galeri", en: "Gallery" },
  "nav.location": { id: "Lokasi", en: "Location" },
  "nav.reviews": { id: "Ulasan", en: "Reviews" },
  "nav.book": { id: "Pesan via WhatsApp", en: "Book on WhatsApp" },
  "nav.bookShort": { id: "Pesan", en: "Book" },

  // Hero
  "hero.badge": { id: "Pijat Bali · Ubud, Bali", en: "Balinese Massage · Ubud, Bali" },
  "hero.title": { id: "Lepaskan penat, temukan tenang.", en: "Unwind, restore, and breathe again." },
  "hero.subtitle": {
    id: "Jembawan Spa menghadirkan pijat tradisional Bali oleh tangan-tangan terampil di jantung Ubud. Dicintai lebih dari 885 tamu dengan rating 4,8.",
    en: "Jembawan Spa brings you traditional Balinese massage by skilled hands in the heart of Ubud. Loved by 885+ guests at a 4.8 rating.",
  },
  "hero.cta.book": { id: "Pesan via WhatsApp", en: "Book on WhatsApp" },
  "hero.cta.treatments": { id: "Lihat Treatment", en: "View Treatments" },
  "hero.stat.rating": { id: "Rating Google", en: "Google Rating" },
  "hero.stat.reviews": { id: "Ulasan", en: "Reviews" },
  "hero.stat.treatments": { id: "Pilihan Treatment", en: "Treatments" },
  "hero.stat.ubud": { id: "Jantung Ubud", en: "Heart of Ubud" },

  // About
  "about.kicker": { id: "Selamat Datang", en: "Welcome" },
  "about.title": { id: "Sepotong ketenangan di Ubud", en: "A pocket of calm in Ubud" },
  "about.p1": {
    id: "Jembawan Spa adalah spa milik perempuan di Jalan Jembawan, Ubud — tempat sederhana nan hangat untuk melepas lelah dengan pijat tradisional Bali. Setiap tamu disambut dengan senyum, teh herbal, dan sentuhan penuh perhatian.",
    en: "Jembawan Spa is a women-owned spa on Jalan Jembawan, Ubud — a warm, unhurried place to let go with traditional Balinese massage. Every guest is welcomed with a smile, herbal tea, and attentive care.",
  },
  "about.p2": {
    id: "Selama bertahun-tahun, terapis kami dikenal teliti dan ramah, mengikuti kebutuhan tiap tamu. Tak heran ratusan tamu kembali lagi dan memberi kami rating 4,8.",
    en: "For years, our therapists have been known for being thorough and warm, adapting to each guest's needs. It's why hundreds of visitors return and rate us 4.8.",
  },
  "about.feature.women": { id: "Milik & dikelola perempuan", en: "Women-owned & led" },
  "about.feature.rating": { id: "4,8 dari 885+ ulasan", en: "4.8 from 885+ reviews" },
  "about.feature.ubud": { id: "Di jantung Ubud", en: "In the heart of Ubud" },
  "about.welcome": { id: "Sambutan hangat khas Bali", en: "A warm Balinese welcome" },

  // Why
  "why.kicker": { id: "Kenapa Jembawan", en: "Why Jembawan" },
  "why.title": { id: "Ketenangan yang terasa berbeda", en: "Calm that feels different" },
  "why.subtitle": {
    id: "Rating 4,8 dari lebih dari 885 tamu di Google.",
    en: "Rated 4.8 by more than 885 guests on Google.",
  },

  // Treatments
  "treat.kicker": { id: "Daftar Treatment", en: "Treatment Menu" },
  "treat.title": { id: "Pilih ritual Anda", en: "Choose your ritual" },
  "treat.subtitle": {
    id: "Pijat, perawatan tubuh, dan paket signature — semua dengan minyak & herbal alami.",
    en: "Massage, body care, and signature packages — all with natural oils & herbs.",
  },
  "treat.all": { id: "Semua", en: "All" },
  "treat.from": { id: "mulai", en: "from" },
  "treat.book": { id: "Pesan", en: "Book" },
  "treat.note": {
    id: "* Harga indikatif dalam Rupiah dan dapat berubah. Konfirmasi saat memesan.",
    en: "* Indicative prices in IDR and may change. Confirm when booking.",
  },
  "tag.popular": { id: "Favorit", en: "Popular" },
  "tag.signature": { id: "Signature", en: "Signature" },
  "unit.min": { id: "menit", en: "min" },

  // Experience
  "exp.kicker": { id: "Pengalaman", en: "The Experience" },
  "exp.title": { id: "Sentuhan kecil yang berarti", en: "The little touches" },
  "exp.subtitle": {
    id: "Hal-hal sederhana yang membuat kunjungan Anda terasa istimewa.",
    en: "The simple things that make your visit feel special.",
  },

  // Gallery
  "gallery.kicker": { id: "Galeri", en: "Gallery" },
  "gallery.title": { id: "Suasana kami", en: "Our space" },
  "gallery.subtitle": { id: "Sedikit gambaran suasana Jembawan Spa.", en: "A glimpse of the Jembawan Spa atmosphere." },
  "gallery.note": { id: "Placeholder — kirim foto asli spa Anda untuk hasil terbaik.", en: "Placeholder — send your real spa photos for the best result." },

  // Location
  "location.kicker": { id: "Lokasi", en: "Location" },
  "location.title": { id: "Temukan kami di Ubud", en: "Find us in Ubud" },
  "location.subtitle": {
    id: "Di Jalan Jembawan, hanya beberapa menit dari Puri Ubud.",
    en: "On Jalan Jembawan, just minutes from Ubud Palace.",
  },
  "location.address": { id: "Alamat", en: "Address" },
  "location.hours": { id: "Jam Buka", en: "Opening Hours" },
  "location.nearby": { id: "Tempat Terdekat", en: "Nearby" },
  "location.directions": { id: "Buka di Google Maps", en: "Open in Google Maps" },
  "location.everyday": { id: "Setiap hari", en: "Every day" },

  // Reviews
  "reviews.kicker": { id: "Kata Tamu", en: "Guest Words" },
  "reviews.title": { id: "Cerita dari ruang pijat", en: "Stories from the table" },
  "reviews.subtitle": { id: "Ulasan jujur dari tamu yang pernah datang.", en: "Honest words from guests who have visited." },

  // Booking
  "book.kicker": { id: "Reservasi", en: "Reservations" },
  "book.title": { id: "Pesan waktu tenang Anda", en: "Reserve your moment of calm" },
  "book.subtitle": {
    id: "Isi detail singkat, lalu kirim ke WhatsApp kami. Bisa juga langsung telепon.",
    en: "Fill in a few details, then send to our WhatsApp. You can also just call.",
  },
  "book.or": { id: "atau hubungi langsung", en: "or reach us directly" },
  "book.walkin": { id: "Tanpa reservasi? Datang langsung juga boleh saat jam buka.", en: "No booking? Walk-ins are welcome during opening hours." },

  // Booking form
  "form.title": { id: "Pesan via WhatsApp", en: "Book on WhatsApp" },
  "form.desc": { id: "Pilih treatment, tanggal & jam, lalu kirim ke WhatsApp kami untuk konfirmasi.", en: "Pick a treatment, date & time, then send to our WhatsApp to confirm." },
  "form.name": { id: "Nama", en: "Name" },
  "form.name.ph": { id: "Nama Anda", en: "Your name" },
  "form.treatment": { id: "Treatment", en: "Treatment" },
  "form.treatment.ph": { id: "Pilih treatment…", en: "Choose a treatment…" },
  "form.date": { id: "Tanggal", en: "Date" },
  "form.time": { id: "Jam", en: "Time" },
  "form.time.ph": { id: "Pilih jam…", en: "Choose a time…" },
  "form.people": { id: "Jumlah Orang", en: "Number of People" },
  "form.people.unit": { id: "orang", en: "person(s)" },
  "form.submit": { id: "Kirim ke WhatsApp", en: "Send to WhatsApp" },
  // WA message
  "form.msg.intro": { id: "Halo Jembawan Spa! Saya ingin memesan treatment:", en: "Hello Jembawan Spa! I'd like to book a treatment:" },
  "form.msg.name": { id: "Nama", en: "Name" },
  "form.msg.treatment": { id: "Treatment", en: "Treatment" },
  "form.msg.date": { id: "Tanggal", en: "Date" },
  "form.msg.time": { id: "Jam", en: "Time" },
  "form.msg.people": { id: "Jumlah orang", en: "People" },
  "form.msg.outro": { id: "Mohon konfirmasi ketersediaannya. Terima kasih!", en: "Please confirm availability. Thank you!" },

  // Footer
  "footer.tagline": { id: "Pijat tradisional Bali di jantung Ubud.", en: "Traditional Balinese massage in the heart of Ubud." },
  "footer.rights": { id: "Semua hak dilindungi.", en: "All rights reserved." },
};

export function translate(key: string, lang: Lang): string {
  return t[key]?.[lang] ?? key;
}
