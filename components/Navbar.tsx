"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark">GZ</span>
          <span className="brand__text">
            <span className="brand__name">{site.name}</span>
            <span className="brand__sub">Demolition &amp; Excavation</span>
          </span>
        </Link>

        <nav className={open ? "nav nav--open" : "nav"}>
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active ? "nav__link nav__link--active" : "nav__link"
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href={site.phoneHref}
            className="nav__link nav__call"
            onClick={() => setOpen(false)}
          >
            <PhoneIcon size={16} /> Call {site.phone}
          </a>
        </nav>

        <div className="header__right">
          <a href={site.phoneHref} className="header__phone">
            <PhoneIcon size={16} /> {site.phone}
          </a>

          <Link href="/contact" className="btn btn--primary header__cta">
            Get a Quote
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
