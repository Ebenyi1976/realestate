import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { LOAN_FACTORY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Edit Benyi",
  description: "Schedule a free consultation with Edit Benyi — real estate agent and mortgage loan originator in Southern California.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container">
          <div className="grid-2-wide">
            <div>
              <span className="eyebrow">Get in touch</span>
              <h1 className="display" style={{ marginTop: 16, marginBottom: 20 }}>Let&apos;s connect</h1>
              <p className="lede" style={{ maxWidth: "44ch", marginBottom: 40 }}>
                Whether you&apos;re ready to buy, thinking about selling, or just want to understand your options — every conversation starts with a free, no-pressure consultation.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
                {[
                  { icon: "📍", label: "Service area", value: "Serving Southern California" },
                  { icon: "📞", label: "Phone", value: "Contact for number" },
                  { icon: "✉️", label: "Email", value: "edit@editbenyi.com" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: 15.5 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mortgage application CTA */}
              <div className="card" style={{ background: "var(--accent-tint)", border: "1px solid var(--accent-soft)" }}>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>Ready to apply for a mortgage?</div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 16, lineHeight: 1.5 }}>
                  Applications are processed securely through Loan Factory — available 24/7.
                </p>
                <a
                  href={LOAN_FACTORY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Start a Mortgage Application →
                </a>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: 36 }}>
                <h2 style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.5rem", fontWeight: 500, marginBottom: 8 }}>Send a message</h2>
                <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 28 }}>Edit responds within 1 business day.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking section */}
      <section className="section bg-alt">
        <div className="container" style={{ maxWidth: 680 }}>
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Prefer to schedule directly?</span>
            <h2 className="h2" style={{ marginTop: 12, marginBottom: 16 }}>Book a time that works for you</h2>
            <p className="lede" style={{ marginBottom: 32 }}>
              Choose a time for a free, no-pressure conversation about where you are and where you&apos;re trying to go.
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Book a time →
            </a>
            <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 16 }}>
              Scheduling powered by Calendly (link coming soon)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
