import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ground Zero Demolition — a professional demolition and excavation contractor serving the Greater Toronto Area and Ontario.",
};

const values = [
  {
    title: "Professionalism",
    text: "We show up on time, communicate clearly, and treat every property with respect from start to finish.",
  },
  {
    title: "Safety",
    text: "Strict safety practices and fully insured crews protect your property, our team, and everyone around the site.",
  },
  {
    title: "Reliability",
    text: "When we commit to a timeline and a price, we stick to it. No surprises, no run-around.",
  },
  {
    title: "Clean Workmanship",
    text: "We finish what we start and leave every site clean, level, and ready for the next phase.",
  },
];

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "500+", label: "Projects Completed" },
  { value: "GTA", label: "& Ontario Coverage" },
  { value: "100%", label: "Licensed & Insured" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <Image
            src={images.cityBuild}
            alt="Construction site in the city"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / About Us
          </div>
          <span className="eyebrow">About Us</span>
          <h1>Built on Hard Work &amp; Trust</h1>
          <p>
            {site.name} is a professional demolition and excavation contractor
            proudly serving the Greater Toronto Area and surrounding Ontario
            communities.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__media">
              <Image
                src={images.siteWork}
                alt="Ground Zero Demolition crew at work"
                fill
                sizes="(max-width: 900px) 100vw, 600px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-title">Your local demolition experts</h2>
              <p className="section-lead" style={{ marginBottom: 18 }}>
                {site.name} was founded on a simple idea: demolition and
                excavation should be handled by professionals who take pride in
                doing the job safely and properly. Over the years we've grown
                into a trusted name across the GTA, taking on residential and
                commercial projects of all sizes.
              </p>
              <p className="section-lead" style={{ marginBottom: 18 }}>
                From clearing a single lot to tearing down a commercial
                structure, we bring the right equipment, experienced operators,
                and a commitment to getting it right the first time. Our team
                handles the heavy lifting — and the details — so you can move
                your project forward with confidence.
              </p>
              <ul className="feature-list">
                <li>
                  <CheckIcon /> Locally owned and operated
                </li>
                <li>
                  <CheckIcon /> Experienced, fully insured crews
                </li>
                <li>
                  <CheckIcon /> Residential &amp; commercial projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--tight section--alt">
        <div className="container">
          <div className="statbar">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="statbar__value">{s.value}</div>
                <div className="statbar__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">What We Stand For</span>
            <h2 className="section-title">Our Values</h2>
            <p className="section-lead">
              The principles that guide every project we take on.
            </p>
          </div>
          <div className="grid grid--4">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="card__icon">
                  <CheckIcon size={24} />
                </div>
                <h3 style={{ fontSize: "1.15rem" }}>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section section--tight section--alt">
        <div className="container center">
          <span className="eyebrow">Service Area</span>
          <h2 className="section-title">Proudly Serving Ontario</h2>
          <p className="section-lead">{site.serviceArea}</p>
        </div>
      </section>

      <CtaBand
        heading="Let's talk about your project"
        text="Reach out for a free quote — we'd be glad to help you get started."
      />
    </>
  );
}
