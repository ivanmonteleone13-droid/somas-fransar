export const business = {
  name: "Somas Fransar",
  tagline: "Fransförlängning & microblading i Gottsunda",
  description:
    "Fransstudio på Blomdahls väg 1 i Gottsunda — volymfransar, singelfransar, megavolym och microblading ögonbryn med Soma Saadi.",
  category: "Fransstudio",
  address: {
    street: "Blomdahls väg 1",
    postalCode: "756 49",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "073-336 99 71",
  phoneLink: "tel:+46733369971",
  email: "soma_saadi@hotmail.com",
  emailLink: "mailto:soma_saadi@hotmail.com",
  bookingUrl: "https://www.bokadirekt.se/places/somas-fransar-38130",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: null as string | null,
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Soma Saadi",
  rating: 4.7,
  reviewCount: 29,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8113, lng: 17.6233 },
  hours: {
    note: "Boka tid via Bokadirekt.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    { title: "4,7 på Bokadirekt", description: "29 verifierade omdömen." },
    { title: "Volym & singel", description: "Volym, singel och megavolym — enligt Bokadirekt." },
    { title: "Microblading", description: "Permanent tatuering ögonbryn — enligt Bokadirekt." },
    { title: "Gottsunda", description: "Blomdahls väg 1 i Uppsala." },
  ],
  services: [
    { id: "volymfransar", name: "Volymfransar", description: "Den vanligaste typen idag — lite extra men inte för mycket.", duration: "—", priceFrom: null, note: "Källa: Bokadirekt." },
    { id: "singelfransar", name: "Singelfransar", description: "Naturligt resultat med mascara-effekt.", duration: "—", priceFrom: null, note: "Källa: Bokadirekt." },
    { id: "megavolym", name: "Megavolym", description: "Festligare och intensivare look.", duration: "—", priceFrom: 800, note: "Källa: Bokadirekt." },
    { id: "microblading", name: "Microblading ögonbryn", description: "Permanent tatuering ögonbryn.", duration: "—", priceFrom: 2500, note: "Källa: Bokadirekt." },
    { id: "quickfix", name: "Quickfix påfyllning", description: "Påfyllning inom 1 vecka efter nytt set.", duration: "—", priceFrom: 300, note: "Källa: Bokadirekt." },
  ],
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-1.jpg",
  gallery: [
    { id: 1, label: "Volymfransar", image: "/images/hero.jpg" },
    { id: 2, label: "Studio", image: "/images/gallery-1.jpg" },
    { id: 3, label: "Resultat", image: "/images/gallery-2.jpg" },
    { id: 4, label: "Fransar", image: "/images/gallery-3.jpg" },
    { id: 5, label: "Behandling", image: "/images/gallery-4.jpg" },
    { id: 6, label: "Atmosfär", image: "/images/gallery-5.jpg" },
    { id: 7, label: "Styling", image: "/images/gallery-6.jpg" },
  ],
  about: {
    headline: "Fransstudio i Gottsunda",
    paragraphs: [
      "Somas Fransar drivs av fransstylisten Soma Saadi på Blomdahls väg 1 i Uppsala.",
      "Erbjuder volymfransar, singelfransar, megavolym, quickfix och microblading ögonbryn — boka via Bokadirekt.",
    ],
  },
  testimonials: [
    {
      text: "Jag försökte nå henne genom att ringa, fick inget svar, fick vänta 30 min och ingen kom. Jag blev besviken då hon inte hörde  av sig.",
      author: "Noor S.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/somas-fransar-38130",
      rating: 2,
      date: "2025-05-23",
    },
    {
      text: "Bästa och trevligaste fransstylisten i Uppsala! Blir alltid så väl omhändertagen och fransarna håller så bra 🌟",
      author: "Jessica J.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/somas-fransar-38130",
      rating: 5,
      date: "2025-04-10",
    },
    {
      text: "Älskar 👏🏾😍😍😍",
      author: "Joyce M.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/somas-fransar-38130",
      rating: 5,
      date: "2024-12-23",
    },
    {
      text: "Soma är en helt fantastisk fransstylist och person🌟 Fransarna håller så bra och jag rekommenderar henne verkligen! Har haft fransar i 10 år+ men aldrig haft så fina fransar som jag har nu 🤩🙏",
      author: "Jessica J.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/somas-fransar-38130",
      rating: 5,
      date: "2024-11-12",
    },
  ],
  seoKeywords: ["fransförlängning Gottsunda", "microblading Uppsala", "Somas Fransar", "volymfransar Uppsala"],
  brandColors: { primary: "#8b4a6b", secondary: "#e8b4bc", accent: "#fdf6f8", dark: "#5c2d42" },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(getFullAddress())}&output=embed`;
}

export function getMapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress())}`;
}
