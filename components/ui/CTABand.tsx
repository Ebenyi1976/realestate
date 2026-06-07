import Link from "next/link";
import { LOAN_FACTORY_URL } from "@/lib/constants";

interface CTABandProps {
  title?: string;
  lede?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
}

export default function CTABand({
  title = "Let's find your next step together",
  lede = "Book a free, no-pressure consultation. We'll figure out where you are, where you want to go, and the smartest way to get there — across both real estate and financing.",
  primaryLabel = "Book a Consultation →",
  primaryHref = "/contact",
  secondaryLabel = "Start a Mortgage Application",
  secondaryHref = LOAN_FACTORY_URL,
  secondaryExternal = true,
}: CTABandProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div className="cta-glow" aria-hidden="true" />
          <div style={{ position: "relative", maxWidth: "60ch" }}>
            <h2 className="h2" style={{ marginBottom: 20 }}>{title}</h2>
            <p className="lede" style={{ marginBottom: 32 }}>{lede}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href={primaryHref} className="btn btn-primary btn-lg">
                {primaryLabel}
              </Link>
              {secondaryExternal ? (
                <a
                  href={secondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  {secondaryLabel}
                </a>
              ) : (
                <Link href={secondaryHref} className="btn btn-secondary btn-lg">
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
