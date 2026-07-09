import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="container center">
        <div
          style={{
            fontSize: "clamp(5rem, 18vw, 9rem)",
            fontWeight: 800,
            lineHeight: 1,
            color: "var(--accent)",
            letterSpacing: "-0.03em",
          }}
        >
          404
        </div>
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Page Not Found
        </span>
        <h1 className="section-title">This ground has been cleared</h1>
        <p className="section-lead" style={{ marginBottom: 32 }}>
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on solid ground.
        </p>

        <div
          className="hero__actions"
          style={{ justifyContent: "center", marginBottom: 44 }}
        >
          <Link href="/" className="btn btn--primary">
            Back to Home
          </Link>
          <a href={site.phoneHref} className="btn btn--ghost">
            <PhoneIcon size={18} /> {site.phone}
          </a>
        </div>

        <nav
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav__link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
