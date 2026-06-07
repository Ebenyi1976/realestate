import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CheckList from "@/components/ui/CheckList";
import CTABand from "@/components/ui/CTABand";
import SectionHeader from "@/components/ui/SectionHeader";
import { LOAN_FACTORY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Buying Guide",
  description: "Your complete path to homeownership in Southern California — from first thoughts to closing day, with real estate and mortgage guidance under one roof.",
  openGraph: { title: "Home Buying Guide | Edit Benyi", description: "Buying a home in SoCal? Get aligned real estate and mortgage guidance from one trusted advisor." },
};

const thinkingSteps = [
  "Check your credit score across all three bureaus",
  "Set a realistic savings target for your down payment",
  "Understand your debt-to-income ratio and borrowing power",
  "Get pre-approved so you shop with confidence",
];

const readySteps = [
  "Complete a full mortgage pre-approval (not just pre-qualification)",
  "Tour homes with a clear must-have vs. nice-to-have list",
  "Submit a strong offer with aligned financing in place",
  "Navigate inspection, escrow, and closing with expert guidance",
];

const dualAdvantage = [
  "Your offer price and loan amount are modeled together from day one",
  "No miscommunication between your agent and loan officer",
  "Faster pre-approval decisions — your advisor knows your file",
  "Coordinated timeline from offer acceptance to clear-to-close",
];

export default function BuyingPage() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Home Buying</span>
              <h1 className="display" style={{ marginTop: 16, marginBottom: 20 }}>Your path to homeownership</h1>
              <p className="lede" style={{ maxWidth: "46ch", marginBottom: 32 }}>
                Whether you&apos;re just starting to think about buying or ready to make offers, the right guidance makes all the difference — especially when your real estate agent and mortgage advisor are the same person.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary btn-lg">Schedule a Consultation</Link>
                <a href={LOAN_FACTORY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">Get Pre-Approved →</a>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80"
                alt="A beautiful home ready for new owners"
                width={800}
                height={600}
                crossOrigin="anonymous"
                style={{ width: "100%", height: "auto", borderRadius: 20, border: "1px solid var(--line)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* THINKING ABOUT BUYING */}
      <section className="section bg-alt" id="thinking">
        <div className="container">
          <div className="grid-2">
            <div>
              <SectionHeader
                eyebrow="Stage one"
                title="Thinking about buying"
                lede="Not ready to tour homes yet? That's completely normal. The smartest buyers spend time preparing before they ever enter a house."
              />
              <CheckList items={thinkingSteps} />
              <Link href="/resources#buying" className="btn btn-secondary" style={{ marginTop: 28, display: "inline-flex" }}>
                Explore buying resources →
              </Link>
            </div>
            <div className="card" style={{ padding: 36 }}>
              <div style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.5rem", fontWeight: 500, marginBottom: 16, lineHeight: 1.2 }}>
                Start with your credit score
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>
                A score above 740 unlocks the best conventional rates. Below 620 and you&apos;ll likely need FHA financing. Understanding your score now gives you time to improve it before you apply.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {["FHA: 580+ minimum score, 3.5% down", "Conventional: 620+ minimum, 3% down", "VA: No minimum (lender specific), 0% down", "Jumbo: Typically 700+, 10–20% down"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", fontSize: 16, marginTop: 1 }}>·</span>
                    <span style={{ fontSize: 14.5, color: "var(--ink-soft)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO BUY */}
      <section className="section" id="ready">
        <div className="container">
          <div className="grid-2">
            <div className="card" style={{ padding: 36 }}>
              <div style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.5rem", fontWeight: 500, marginBottom: 16, lineHeight: 1.2 }}>
                The pre-approval advantage
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>
                Pre-approval means a lender has reviewed your income, assets, and credit and committed to a loan amount. In Southern California&apos;s competitive market, sellers take pre-approved buyers seriously.
              </p>
              <a href={LOAN_FACTORY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-flex" }}>
                Start pre-approval process →
              </a>
            </div>
            <div>
              <SectionHeader
                eyebrow="Stage two"
                title="Ready to buy"
                lede="You've done your homework. Now it's time to move with confidence — with financing and representation working as one."
              />
              <CheckList items={readySteps} />
            </div>
          </div>
        </div>
      </section>

      {/* DUAL ADVANTAGE */}
      <section className="section bg-alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <SectionHeader
                eyebrow="The difference"
                title="One advisor for both sides of the transaction"
                lede="Most buyers work with a separate real estate agent and loan officer. That means two timelines, two conversations, and too many gaps. Working with a dual-licensed advisor changes that."
              />
              <CheckList items={dualAdvantage} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Real estate agent", detail: "Licensed with Coldwell Banker · DRE #01918439", icon: "🏠" },
                { label: "Mortgage originator", detail: "Licensed with Loan Factory · NMLS #1762484", icon: "📋" },
                { label: "Single point of contact", detail: "One person. One strategy. Zero miscommunication.", icon: "🤝" },
              ].map((item) => (
                <div key={item.label} className="card" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 24 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "var(--muted)" }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOAN OPTIONS */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Financing"
            title="Loan options for every buyer"
            lede="Because the mortgage is part of the strategy from day one, you&apos;ll know your options before you make an offer."
            right={<Link href="/mortgage" className="btn btn-secondary">See all loan types →</Link>}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { name: "FHA Loan", desc: "3.5% down, flexible credit requirements. Great for first-time buyers." },
              { name: "Conventional", desc: "As low as 3% down. Best rates for 740+ credit scores." },
              { name: "VA Loan", desc: "Zero down for eligible veterans and active military." },
              { name: "Jumbo", desc: "Financing above conforming limits for higher-priced SoCal homes." },
              { name: "CalHFA / DPA", desc: "Down payment assistance for qualifying first-time buyers in California." },
              { name: "Investment Loans", desc: "DSCR and conventional options for rental and investment properties." },
            ].map((l) => (
              <div key={l.name} className="card">
                <div style={{ fontWeight: 600, marginBottom: 8 }}>{l.name}</div>
                <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>{l.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to take the first step?"
        lede="Schedule a free consultation to map out your buying strategy — or start your pre-approval now through our secure Loan Factory portal."
        primaryLabel="Schedule a Consultation →"
        primaryHref="/contact"
        secondaryLabel="Start a Mortgage Application"
        secondaryHref={LOAN_FACTORY_URL}
      />
    </>
  );
}
