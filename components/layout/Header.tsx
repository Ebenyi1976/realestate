"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, moreNav } from "@/lib/navData";
import { LOAN_FACTORY_URL } from "@/lib/constants";

interface HeaderProps {
  onQuizOpen?: () => void;
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">E</span>
            <div>
              <div className="brand-name">Edit Benyi</div>
              <div className="brand-sub">Real Estate &amp; Mortgage</div>
            </div>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href || pathname.startsWith(item.href + "/") ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}

            <div className="nav-dropdown" ref={dropdownRef}>
              <button
                className="nav-dropdown-toggle"
                onClick={() => setMoreOpen((o) => !o)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {moreOpen && (
                <div className="nav-dropdown-menu" role="menu">
                  {moreNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="nav-dropdown-item"
                      role="menuitem"
                      onClick={() => setMoreOpen(false)}
                    >
                      <div className="nav-dropdown-item-title">{item.label}</div>
                      <div className="nav-dropdown-item-sub">{item.sub}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <Link href="/contact" className="btn btn-primary header-cta" style={{ marginLeft: "auto" }}>
            Schedule a Consultation
          </Link>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="mobile-overlay"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-drawer" role="dialog" aria-label="Mobile navigation">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <Link href="/" className="brand" onClick={() => setMobileOpen(false)}>
                <span className="brand-mark">E</span>
                <div className="brand-name">Edit Benyi</div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-drawer-link">
                {item.label}
              </Link>
            ))}
            {moreNav.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-drawer-link">
                {item.label}
              </Link>
            ))}

            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/contact" className="btn btn-primary btn-lg" style={{ justifyContent: "center" }}>
                Schedule a Consultation
              </Link>
              <a
                href={LOAN_FACTORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                style={{ justifyContent: "center" }}
              >
                Start a Mortgage Application
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
