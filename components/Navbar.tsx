"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

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
        </nav>

        <Link href="/contact" className="btn btn--primary header__cta">
          Get a Quote
        </Link>

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
