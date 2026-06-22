"use client";

import { useState } from "react";
import { services } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // UI demo only — no backend wired up yet.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form">
        <h3 style={{ fontSize: "1.4rem", marginBottom: 10 }}>
          Thanks for reaching out!
        </h3>
        <p style={{ color: "var(--text-muted)" }}>
          This is a demo form, so nothing was actually sent. Once the site is
          live, your message would land in our inbox and we&apos;d get back to
          you within one business day.
        </p>
        <button
          className="btn btn--ghost"
          style={{ marginTop: 22 }}
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="John Smith" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(416) 555-0000"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="service">Service Needed</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="both">Demolition &amp; Excavation</option>
          <option value="other">Not sure / Other</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Project Details</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project, location, and timeline…"
          required
        />
      </div>

      <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>
        Send Message
      </button>
      <p className="form__note">
        This is a demonstration form — submissions are not yet connected to a
        live inbox.
      </p>
    </form>
  );
}
