import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images, services } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional demolition and excavation services across the Greater Toronto Area and Ontario.",
};

const process = [
  {
    step: "01",
    title: "Site Assessment",
    text: "We visit the site, review the scope, and identify any hazards or constraints before a shovel hits the ground.",
  },
  {
    step: "02",
    title: "Quote & Planning",
    text: "You get a clear, itemized quote along with a plan for permits, scheduling, and safety.",
  },
  {
    step: "03",
    title: "The Work",
    text: "Our crew executes the demolition or excavation safely, efficiently, and on schedule.",
  },
  {
    step: "04",
    title: "Clean Hand-off",
    text: "We haul away debris and leave a clean, level, build-ready site.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <Image
            src={images.machinery}
            alt="Heavy demolition machinery"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Services
          </div>
          <span className="eyebrow">Our Services</span>
          <h1>Demolition &amp; Excavation</h1>
          <p>
            Two core services, handled by a professional crew with the right
            equipment for the job — from teardown to build-ready ground.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className={
                i % 2 === 1 ? "service-row service-row--reverse" : "service-row"
              }
            >
              <div className="service-row__media">
                <Image
                  src={service.image}
                  alt={`${service.title} work`}
                  fill
                  sizes="(max-width: 900px) 100vw, 600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <span className="eyebrow">
                  {String(i + 1).padStart(2, "0")} — Service
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="feature-list">
                  {service.features.map((f) => (
                    <li key={f}>
                      <CheckIcon /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn btn--primary"
                  style={{ marginTop: 26 }}
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section section--alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">How It Works</span>
            <h2 className="section-title">Our Process</h2>
            <p className="section-lead">
              A straightforward, professional process from first call to final
              clean-up.
            </p>
          </div>
          <div className="grid grid--4">
            {process.map((p) => (
              <div key={p.step} className="card">
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  {p.step}
                </div>
                <h3 style={{ fontSize: "1.15rem" }}>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Need demolition or excavation?"
        text="Tell us about your project and we'll put together a free, no-obligation quote."
      />
    </>
  );
}
