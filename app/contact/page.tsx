import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ground Zero Demolition for a free demolition or excavation quote in the Greater Toronto Area.",
};

const details = [
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: <MailIcon />,
    label: "Email",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: <MapPinIcon />,
    label: "Address",
    value: site.address,
  },
  {
    icon: <ClockIcon />,
    label: "Hours",
    value: site.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <Image
            src={images.digger}
            alt="Excavator on a job site"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Contact Us
          </div>
          <span className="eyebrow">Contact Us</span>
          <h1>Get a Free Quote</h1>
          <p>
            Have a demolition or excavation project in mind? Reach out and our
            team will get back to you with a free, no-obligation estimate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">Get in Touch</span>
              <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
                We&apos;re here to help
              </h2>
              <p
                className="section-lead"
                style={{ marginBottom: 28 }}
              >
                Call, email, or send us a message and we&apos;ll be in touch
                quickly. Proudly serving the Greater Toronto Area and
                surrounding Ontario.
              </p>

              {details.map((d) => (
                <div key={d.label} className="contact-card">
                  <div className="contact-card__icon">{d.icon}</div>
                  <div>
                    <div className="contact-card__label">{d.label}</div>
                    <div className="contact-card__value">
                      {d.href ? <a href={d.href}>{d.value}</a> : d.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Service area note */}
      <section className="section section--tight section--alt">
        <div className="container center">
          <span className="eyebrow">Service Area</span>
          <h2 className="section-title">Where We Operate</h2>
          <p className="section-lead">{site.serviceArea}</p>
        </div>
      </section>
    </>
  );
}
