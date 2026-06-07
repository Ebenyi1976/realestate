import Link from "next/link";
import { footerNav } from "@/lib/navData";
import { LOAN_FACTORY_URL, DRE, NMLS, BROKER, LENDER, SITE_TAGLINE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, textDecoration: "none" }}>
              <span className="brand-mark">E</span>
              <div>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>Edit Benyi</div>
                <div style={{ fontSize: 12, color: "#8A827A" }}>Real Estate &amp; Mortgage</div>
              </div>
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#A89E96", maxWidth: "28ch", marginBottom: 24 }}>
              {SITE_TAGLINE}
            </p>
            <Link href="/contact" className="btn btn-secondary" style={{ color: "#D9D1C5", borderColor: "rgba(255,255,255,0.2)" }}>
              Book a Consultation →
            </Link>
          </div>

          {/* Navigate */}
          <div>
            <div className="footer-col-title">Navigate</div>
            {footerNav.navigate.map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-title">Services</div>
            {footerNav.services.map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact</div>
            <a href="tel:+1-placeholder" className="footer-link">Phone: Contact for number</a>
            <a href="mailto:edit@editbenyi.com" className="footer-link">edit@editbenyi.com</a>
            <Link href="/contact" className="footer-link">Schedule a Consultation</Link>
            <a
              href={LOAN_FACTORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Apply for Mortgage ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Edit Benyi. All rights reserved.</span>
          <span>{DRE} · {NMLS} · {BROKER} · {LENDER}</span>
          <div style={{ display: "flex", gap: 16 }}>
            <Link href="/privacy" className="footer-link" style={{ padding: 0 }}>Privacy</Link>
            <Link href="/terms" className="footer-link" style={{ padding: 0 }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
