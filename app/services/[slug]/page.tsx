import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services, site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { CheckIcon, DemolitionIcon, ExcavationIcon } from "@/components/Icons";

const icons: Record<string, React.ReactNode> = {
  demolition: <DemolitionIcon size={28} />,
  excavation: <ExcavationIcon size={28} />,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <Image
            src={service.image}
            alt={`${service.title} work by Ground Zero Demolition`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
            {service.title}
          </div>
          <span className="eyebrow">
            <span style={{ display: "inline-flex", color: "var(--accent)" }}>
              {icons[service.slug]}
            </span>
            {service.title}
          </span>
          <h1>{service.title}</h1>
          <p>{service.tagline}</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 26 }}>
            <Link href="/contact" className="btn btn--primary">
              Get a Free Quote
            </Link>
            <a href={site.phoneHref} className="btn btn--light">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Intro + features */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Overview</span>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>
                What we do
              </h2>
              {service.intro.map((para, i) => (
                <p
                  key={i}
                  className="section-lead"
                  style={{ marginBottom: 18, maxWidth: "none" }}
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="service-detail__card">
              <h3 style={{ fontSize: "1.2rem", marginBottom: 18 }}>
                {service.title} includes
              </h3>
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
                style={{ marginTop: 24, width: "100%" }}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section--alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Our Work</span>
            <h2 className="section-title">{service.title} Projects</h2>
            <p className="section-lead">
              Recent {service.title.toLowerCase()} work across the Greater Toronto
              Area.
            </p>
          </div>
          <div className="service-gallery">
            {service.gallery.map((img) => (
              <div key={img.src} className="service-gallery__item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section section--tight">
        <div className="container">
          <div className="center" style={{ marginBottom: 32 }}>
            <span className="eyebrow">Explore More</span>
            <h2 className="section-title">Our Other Services</h2>
          </div>
          <div className="grid grid--2">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card"
                style={{ display: "block" }}
              >
                <div className="card__icon">{icons[s.slug]}</div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span
                  className="btn btn--ghost"
                  style={{ marginTop: 18, pointerEvents: "none" }}
                >
                  Learn More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading={`Need ${service.title.toLowerCase()} in the GTA?`}
        text="Tell us about your project and we'll put together a free, no-obligation quote."
      />
    </>
  );
}
