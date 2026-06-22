import Image from "next/image";
import Link from "next/link";
import { images, services, site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import {
  CheckIcon,
  ClipboardIcon,
  DemolitionIcon,
  ExcavationIcon,
  ShieldIcon,
  TruckIcon,
} from "@/components/Icons";

const serviceIcons = {
  demolition: <DemolitionIcon />,
  excavation: <ExcavationIcon />,
} as const;

const whyUs = [
  {
    icon: <ShieldIcon />,
    title: "Safety First",
    text: "Every job is run to strict safety standards, with fully insured crews and controlled, methodical site management.",
  },
  {
    icon: <ClipboardIcon />,
    title: "Licensed & Insured",
    text: "Professional, fully insured operators who handle permits and paperwork so your project stays on the right side of the rules.",
  },
  {
    icon: <TruckIcon />,
    title: "Clean Site Hand-off",
    text: "We haul away debris and leave a clean, level, build-ready site — no mess left behind for you to deal with.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <Image
            src={images.heroDemolition}
            alt="Excavator demolishing a building"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <span className="eyebrow">Greater Toronto Area &amp; Ontario</span>
          <h1>
            Professional Demolition &amp; <span>Excavation</span> Done Right
          </h1>
          <p className="hero__lead">
            {site.name} delivers safe, reliable demolition and excavation
            services across the GTA and surrounding Ontario communities — on
            schedule, on budget, and cleaned up when we leave.
          </p>
          <div className="hero__actions">
            <Link href="/contact" className="btn btn--primary">
              Get a Free Quote
            </Link>
            <Link href="/services" className="btn btn--ghost">
              View Our Services
            </Link>
          </div>
          <div className="hero__stats">
            <div className="stat">
              <div className="stat__value">15+</div>
              <div className="stat__label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat__value">500+</div>
              <div className="stat__label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat__value">100%</div>
              <div className="stat__label">Licensed &amp; Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section section--alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-lead">
              Two things, done properly. We focus on demolition and excavation
              so every project gets a crew that knows the work inside out.
            </p>
          </div>
          <div className="grid grid--2">
            {services.map((service) => (
              <div key={service.slug} className="card">
                <div className="card__icon">
                  {serviceIcons[service.slug as keyof typeof serviceIcons]}
                </div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <ul className="feature-list" style={{ margin: "18px 0 22px" }}>
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f}>
                      <CheckIcon /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.slug}`}
                  className="btn btn--ghost"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <Image
                src={images.crew}
                alt="Demolition crew on a job site"
                fill
                sizes="(max-width: 900px) 100vw, 600px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <span className="eyebrow">Why Ground Zero</span>
              <h2 className="section-title">
                A professional team you can build on
              </h2>
              <p className="section-lead" style={{ marginBottom: 28 }}>
                We treat every site like it matters — because it does. From the
                first walkthrough to the final clean-up, you get clear
                communication and dependable, professional work.
              </p>
              <div className="grid" style={{ gap: 18 }}>
                {whyUs.map((item) => (
                  <div
                    key={item.title}
                    style={{ display: "flex", gap: 16 }}
                  >
                    <div className="card__icon" style={{ marginBottom: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.1rem", marginBottom: 4 }}>
                        {item.title}
                      </h3>
                      <p style={{ color: "var(--text-muted)" }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className="section section--alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Our Work</span>
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-lead">
              A look at demolition and excavation work across the Greater
              Toronto Area.
            </p>
          </div>
          <div className="gallery">
            <div className="gallery__item gallery__item--wide">
              <Image
                src={images.siteWork}
                alt="Active demolition site"
                width={800}
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="gallery__item">
              <Image
                src={images.machinery}
                alt="Heavy machinery clearing a site"
                width={500}
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="gallery__item">
              <Image
                src={images.digger}
                alt="Excavator digging foundation"
                width={500}
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="gallery__item">
              <Image
                src={images.rubble}
                alt="Cleared rubble after demolition"
                width={500}
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="gallery__item gallery__item--wide">
              <Image
                src={images.groundwork}
                alt="Excavation groundwork in progress"
                width={800}
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service area strip */}
      <section className="section section--tight">
        <div className="container center">
          <span className="eyebrow">Where We Work</span>
          <h2 className="section-title">Serving the GTA &amp; Ontario</h2>
          <p className="section-lead">{site.serviceArea}</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
