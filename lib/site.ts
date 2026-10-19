/**
 * Central content/config for the Ground Zero Demolition marketing site.
 * Phone + email are the client's REAL details; address is still a placeholder.
 */

export const site = {
  name: "Ground Zero Demolition",
  shortName: "Ground Zero",
  tagline: "Professional Demolition & Excavation",
  description:
    "Professional demolition and excavation contractor serving the Greater Toronto Area and surrounding Ontario communities.",

  // --- CONTACT DETAILS ---
  // Phone + email are the client's REAL details.
  // Address is still a MOCK placeholder — swap for the client's real one.
  phone: "(647) 479-1690",
  phoneHref: "tel:+16474791690",
  email: "info@groundzerodemo.ca",
  emailHref: "mailto:info@groundzerodemo.ca",
  address: "120 Industrial Drive, Unit 4, Toronto, ON",
  hours: "Mon–Sat: 7:00 AM – 6:00 PM",

  serviceArea:
    "Greater Toronto Area and surrounding Ontario regions, including Mississauga, Brampton, Vaughan, Markham, Hamilton, Oshawa and beyond.",

  // --- SOCIAL ---
  facebook: "https://www.facebook.com/profile.php?id=61595404468815",

  // --- SEASONAL PROMO (Halloween free estimate) ---
  // The banner + callout hide automatically after `endsOn` (local date,
  // inclusive). Set enabled: false to hide early. After Nov 30, swap this
  // block for the Christmas Special (new title/text/emoji/endsOn).
  promo: {
    enabled: true,
    emoji: "🎃",
    title: "Halloween Special",
    text: "Book before Nov 30 and your on-site estimate is FREE — no tricks.",
    cta: "Claim Free Estimate",
    href: "/contact?promo=halloween",
    endsOn: "2026-11-30", // inclusive; promo stops showing after this date
  },
} as const;

/** True while the seasonal promo is enabled and today is on/before endsOn. */
export function isPromoActive(now: Date = new Date()): boolean {
  if (!site.promo.enabled) return false;
  const end = new Date(`${site.promo.endsOn}T23:59:59`);
  if (Number.isNaN(end.getTime())) return true; // bad date → don't hide
  return now.getTime() <= end.getTime();
}

/** Real project photos stored in /public/images. */
export const photos = {
  interiorDemo: "/images/interior-demolition.jpg",
  siteGrading: "/images/site-grading.jpg",
  garageDemo: "/images/garage-demolition.jpg",
  foundationExc: "/images/foundation-excavation.jpg",
  debrisRemoval: "/images/debris-removal.jpg",
  houseDemo: "/images/house-demolition.jpg",
  clearedLot: "/images/cleared-lot.jpg",
  concreteBreaking: "/images/concrete-breaking.jpg",
} as const;

/**
 * Semantic image slots used across the site, mapped to real project photos.
 * (Pages reference these keys, so imagery can be re-pointed in one place.)
 */
export const images = {
  heroDemolition: photos.houseDemo,
  excavator: photos.foundationExc,
  siteWork: photos.interiorDemo,
  machinery: photos.concreteBreaking,
  crew: photos.debrisRemoval,
  rubble: photos.garageDemo,
  digger: photos.siteGrading,
  cityBuild: photos.houseDemo,
  groundwork: photos.clearedLot,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Demolition", href: "/services/demolition" },
      { label: "Excavation", href: "/services/excavation" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  intro: string[];
  features: string[];
  image: string;
  gallery: { src: string; alt: string }[];
};

export const services: Service[] = [
  {
    slug: "demolition",
    title: "Demolition",
    short: "Safe, controlled teardown of residential and commercial structures.",
    tagline:
      "Safe, controlled teardown of homes, garages, and structures across the GTA.",
    description:
      "From single-family homes to commercial buildings, our crew handles full and partial demolition with a focus on safety, site control, and clean execution. We manage the entire process — permit coordination, structure teardown, debris removal, and final site clearing — so your property is ready for whatever comes next.",
    intro: [
      "Ground Zero Demolition provides full-service residential and commercial demolition across the Greater Toronto Area. Whether you're clearing a lot for a new build, removing an old garage, or gutting an interior for a renovation, our experienced operators get it done safely and on schedule.",
      "Every job is run to strict safety standards with fully insured crews. We handle the permits, protect the surrounding property, break down the structure methodically, and haul away every last bit of debris — leaving you a clean, build-ready site.",
    ],
    features: [
      "Full & partial structure demolition",
      "Interior strip-outs & selective demolition",
      "Garage, shed & outbuilding removal",
      "Concrete & foundation breaking and removal",
      "Debris hauling & disposal",
      "Permit coordination & site clean-up",
    ],
    image: photos.houseDemo,
    gallery: [
      { src: photos.houseDemo, alt: "Excavator demolishing a residential house" },
      { src: photos.interiorDemo, alt: "Interior strip-out during a renovation" },
      { src: photos.garageDemo, alt: "Backyard garage being torn down" },
      { src: photos.concreteBreaking, alt: "Hydraulic breaker breaking concrete" },
      { src: photos.debrisRemoval, alt: "Excavator loading demolition debris into a dump truck" },
    ],
  },
  {
    slug: "excavation",
    title: "Excavation",
    short: "Precise digging, grading, and site preparation for new builds.",
    tagline:
      "Accurate digging, grading, and site preparation that sets a solid foundation.",
    description:
      "Whether you're breaking ground on a new build or preparing a lot for development, our excavation team delivers accurate, dependable site work. We handle digging, grading, trenching, and land clearing with the right equipment for the job — setting a solid foundation for the work that follows.",
    intro: [
      "Ground Zero Demolition handles excavation and site preparation for new builds, additions, and developments throughout the GTA and surrounding Ontario. From the first cut to final grade, we bring the right machines and experienced operators to get your ground ready.",
      "We dig foundations and basements, grade and level lots, trench for utilities and drainage, and haul soil in or out as needed — working to your site plan and keeping everything on schedule.",
    ],
    features: [
      "Site preparation & land clearing",
      "Foundation & basement excavation",
      "Grading & levelling",
      "Trenching for utilities & drainage",
      "Backfill & soil hauling",
    ],
    image: photos.foundationExc,
    gallery: [
      { src: photos.foundationExc, alt: "Excavator digging a residential foundation" },
      { src: photos.siteGrading, alt: "Skid steer grading and levelling a lot" },
      { src: photos.clearedLot, alt: "Cleared and graded build-ready lot" },
      { src: photos.debrisRemoval, alt: "Hauling soil and material off site" },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
