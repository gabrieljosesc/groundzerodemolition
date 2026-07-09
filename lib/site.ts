/**
 * Central content/config for the Ground Zero Demolition marketing site.
 * Contact details below are MOCK placeholders for the UI demo — swap them
 * out for the client's real phone / email / address before going live.
 */

export const site = {
  name: "Ground Zero Demolition",
  shortName: "Ground Zero",
  tagline: "Professional Demolition & Excavation",
  description:
    "Professional demolition and excavation contractor serving the Greater Toronto Area and surrounding Ontario communities.",

  // --- CONTACT DETAILS ---
  // Email is the client's REAL address (mailbox hosted at mail.groundzerodemo.ca).
  // Phone + address are still MOCK placeholders — swap for the client's real ones.
  phone: "(416) 555-0142",
  phoneHref: "tel:+14165550142",
  email: "info@groundzerodemo.ca",
  emailHref: "mailto:info@groundzerodemo.ca",
  address: "120 Industrial Drive, Unit 4, Toronto, ON",
  hours: "Mon–Sat: 7:00 AM – 6:00 PM",

  serviceArea:
    "Greater Toronto Area and surrounding Ontario regions, including Mississauga, Brampton, Vaughan, Markham, Hamilton, Oshawa and beyond.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;

/** Demolition / excavation imagery (Unsplash — free to use). */
export const images = {
  heroDemolition:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80",
  excavator:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  siteWork:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  machinery:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  crew:
    "https://images.unsplash.com/photo-1517089152318-42ec560349c0?auto=format&fit=crop&w=1200&q=80",
  rubble:
    "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80",
  digger:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  cityBuild:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  groundwork:
    "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80",
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "demolition",
    title: "Demolition",
    short: "Safe, controlled teardown of residential and commercial structures.",
    description:
      "From single-family homes to commercial buildings, our crew handles full and partial demolition with a focus on safety, site control, and clean execution. We manage the entire process — permits coordination, structure teardown, debris removal, and final site clearing — so your property is ready for whatever comes next.",
    features: [
      "Full & partial structure demolition",
      "Interior strip-outs & selective demolition",
      "Garage, shed & outbuilding removal",
      "Concrete & foundation removal",
      "Debris hauling & site clean-up",
    ],
    image: images.rubble,
  },
  {
    slug: "excavation",
    title: "Excavation",
    short: "Precise digging, grading, and site preparation for new builds.",
    description:
      "Whether you're breaking ground on a new build or preparing a lot for development, our excavation team delivers accurate, dependable site work. We handle digging, grading, trenching, and land clearing with the right equipment for the job — setting a solid foundation for the work that follows.",
    features: [
      "Site preparation & land clearing",
      "Foundation & basement excavation",
      "Grading & levelling",
      "Trenching for utilities & drainage",
      "Backfill & soil hauling",
    ],
    image: images.excavator,
  },
];
