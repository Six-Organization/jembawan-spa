export const site = {
  name: "Jembawan Spa",
  fullName: "Jembawan Spa",
  subtitle: {
    en: "Balinese Massage in Ubud",
    id: "Pijat Bali di Ubud",
  },
  location: "Ubud · Gianyar · Bali",
  url: "https://jembawanspa.com",
  tagline: {
    en: "Traditional Balinese Massage in the Heart of Ubud",
    id: "Pijat Tradisional Bali di Jantung Ubud",
  },
  ratings: {
    google: 4.8,
    googleReviews: 885,
  },
  womenOwned: true,
  address: {
    line: "Jl. Jembawan No.29, Ubud, Kec. Ubud, Kabupaten Gianyar, Bali 80571",
    area: "Ubud, Gianyar",
    plusCode: "F7P8+HG Ubud",
    lat: -8.5136065,
    lng: 115.2662794,
  },
  phone: {
    display: "0831-1561-9404",
    tel: "+6283115619404",
    whatsapp: "6283115619404",
  },
  hours: {
    open: "10:00",
    close: "21:00",
    note: { en: "Open daily", id: "Buka setiap hari" },
  },
  links: {
    booking: "https://wa.me/6283115619404",
    maps: "https://maps.app.goo.gl/n26rDdGbAXtWniii9",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=-8.5136065,115.2662794",
    instagram: "https://instagram.com/",
  },
} as const;

export type Site = typeof site;
