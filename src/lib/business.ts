export const business = {
  name: "Somas Fransar",
  tagline: "Lash & microblading in Gottsunda",
  description: "Lash and microblading studio in Gottsunda run by stylist Soma Saadi.",
  category: "Beauty",
  address: {
    street: "Blomdahls väg 1",
    postalCode: "756 49",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "073-336 99 00",
  phoneLink: "tel:+46733369900",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/somas-fransar-38130",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Soma Saadi",
  rating: 4.7,
  reviewCount: 29,
  foundedYear: null as number | null,
  coordinates: { lat: 59.82, lng: 17.64 },
  hours: {
    note: "Ring gärna innan besök.",
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
    {
      title: "Certifierad behandling",
      description: "Skönhetsbehandlingar med omsorg hos Somas Fransar.",
    },
    {
      title: "Personlig service",
      description: "Varje besök anpassas efter dina önskemål.",
    },
    {
      title: "Populärt val",
      description: "Starkt betyg med 29 recensioner.",
    },
    {
      title: "Bekvämt läge",
      description: "Finns på Blomdahls väg 1 i Uppsala.",
    },
  ],
  services: [
    {
      id: "volymfransar",
      name: "Volymfransar",
      description: "Professionell volymfransar med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "singelfransar",
      name: "Singelfransar",
      description: "Professionell singelfransar med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "megavolym",
      name: "Megavolym",
      description: "Professionell megavolym med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "microblading-gonbryn",
      name: "Microblading ögonbryn",
      description: "Professionell microblading ögonbryn med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "quickfix-p-fyllning",
      name: "Quickfix påfyllning",
      description: "Professionell quickfix påfyllning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Somas Fransar. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Somas Fransar varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "fransförlängning Gottsunda",
    "microblading Uppsala",
    "fransar Uppsala",
    "volymfransar Uppsala",
  ],
  brandColors: {
    primary: "#8b4a6b",
    secondary: "#e8b4bc",
    accent: "#fdf6f8",
    dark: "#5c2d42",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
