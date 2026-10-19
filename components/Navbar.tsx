"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";

function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ marginLeft: 4 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="brand" onClick={close}>
          <span className="brand__mark">GZ</span>
          <span className="brand__text">
            <span className="brand__name">{site.name}</span>
            <span className="brand__sub">Demolition &amp; Excavation</span>
          </span>
        </Link>

        <nav className={open ? "nav nav--open" : "nav"}>
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.href} className="nav__group">
                <Link
                  href={link.href}
                  className={
                    isActive(link.href)
                      ? "nav__link nav__link--active"
                      : "nav__link"
                  }
                  onClick={close}
                >
                  {link.label}
                  <ChevronDown />
                </Link>
                <div className="nav__dropdown">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={
                        pathname === child.href
                          ? "nav__dropdown-link nav__dropdown-link--active"
                          : "nav__dropdown-link"
                      }
                      onClick={close}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "nav__link nav__link--active"
                    : "nav__link"
                }
                onClick={close}
              >
                {link.label}
              </Link>
            )
          )}

          <a href={site.phoneHref} className="nav__link nav__call" onClick={close}>
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
