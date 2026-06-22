import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand-col">
            <Link href="/" className="brand">
              <span className="brand__mark">GZ</span>
              <span className="brand__text">
                <span className="brand__name">{site.name}</span>
                <span className="brand__sub">Demolition &amp; Excavation</span>
              </span>
            </Link>
            <p className="footer__about">{site.description}</p>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={site.emailHref}>{site.email}</a>
              </li>
              <li>{site.address}</li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            Serving the Greater Toronto Area &amp; Ontario ·{" "}
            {services.map((s) => s.title).join(" & ")}
          </span>
        </div>
      </div>
    </footer>
  );
}
