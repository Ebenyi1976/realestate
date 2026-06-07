import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CheckList from "@/components/ui/CheckList";
import CTABand from "@/components/ui/CTABand";
import SectionHeader from "@/components/ui/SectionHeader";
import { LOAN_FACTORY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Real Estate Investing",
  description: "Build wealth through real estate — rental properties, STRs, DSCR loans, and portfolio strategy in Southern California.",
  openGraph: { title: "Real Estate Investing | Edit Benyi", description: "Rental income, appreciation, and smart financing — investing strategy that goes beyond the transaction." },
};

export default function InvestingPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Real Estate Investing</span>
              <h1 className="display" style={{ marginTop: 16, marginBottom: 20 }}>Build wealth through real estate</h1>
              <p className="lede" style={{ maxWidth: "46ch", marginBottom: 32 }}>
                The right investment isn&apos;t just about cash flow — it&apos;s about finding the right property, structuring the right financing, and building a portfolio with intention.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">Schedule an Investor Consultation</Link>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80"
                alt="Real estate investment property"
                width={800} height={600} crossOrigin="anonymous"
                style={{ width: "100%", height: "auto", borderRadius: 20, border: "1px solid var(--line)" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <SectionHeader eyebrow="Getting started" title="Rental property basics" lede="Long-term rentals remain one of the most reliable wealth-building vehicles in real estate — particularly in California's high-demand rental markets." />
              <CheckList items={[
                "Model cash flow, cap rate, and return on equity before buying",
                "Understand landlord-tenant law in California",
                "Screen tenants rigorously — the right tenant is everything",
                "Build systems that scale as your portfolio grows",
              ]} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Cash flow", desc: "Monthly rental income minus all expenses" },
                { label: "Cap rate", desc: "NOI ÷ property value — compare across markets" },
                { label: "Equity growth", desc: "Appreciation + mortgage paydown over time" },
                { label: "Tax advantages", desc: "Depreciation, expense deductions, 1031 exchanges" },
              ].map(item => (
                <div key={item.label} className="card" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "var(--muted)" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card" style={{ padding: 36 }}>
              <div style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.4rem", fontWeight: 500, marginBottom: 16, lineHeight: 1.2 }}>What is a DSCR loan?</div>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>
                Debt Service Coverage Ratio loans qualify based on the property&apos;s rental income — not your personal income. No W-2s or tax returns required. Ideal for self-employed investors or those with complex finances.
              </p>
              <div style={{ background: "var(--bg-alt)", borderRadius: 12, padding: 16, marginBottom: 20 }}>
                <div style={{ fontFamily: "monospace", fontSize: 14, color: "var(--accent)", marginBottom: 4 }}>DSCR = Rental Income ÷ PITI</div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>A ratio above 1.0 means the property covers its debt payments</div>
              </div>
              <a href={LOAN_FACTORY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-flex" }}>Explore DSCR financing →</a>
            </div>
            <div>
              <SectionHeader eyebrow="Investment financing" title="DSCR & investment loans" lede="Because investment property financing is different from owner-occupied financing, working with a mortgage originator who specializes in investor products matters." />
              <CheckList items={[
                "No personal income documentation required for DSCR loans",
                "Finance up to 10 properties with conventional financing",
                "Scale beyond 10 with DSCR and portfolio products",
                "Model financing scenarios before making an offer",
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Short-term rentals"
            title="STR strategy in Southern California"
            lede="Palm Springs, Big Bear, Mammoth, and coastal SoCal are among the strongest STR markets in the country — if you navigate local regulations correctly."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { step: "01", title: "Regulatory research", desc: "City permits, HOA rules, zoning codes, and TOT tax obligations vary dramatically by city." },
              { step: "02", title: "Revenue modeling", desc: "Occupancy rate × ADR × 365 minus expenses = NOI. Run the numbers before buying." },
              { step: "03", title: "STR financing", desc: "Some lenders underwrite based on projected STR income using AirDNA data. We know which ones." },
              { step: "04", title: "Listing optimization", desc: "Professional photography, dynamic pricing tools, and platform strategy to maximize occupancy." },
              { step: "05", title: "Operations setup", desc: "Cleaning protocols, guest communication systems, and co-host or management decisions." },
              { step: "06", title: "Scale the portfolio", desc: "Once one property performs, use its equity and income to finance the next." },
            ].map(item => (
              <div key={item.step} className="card">
                <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 700, color: "var(--faint)", marginBottom: 8 }}>{item.step}</div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <SectionHeader eyebrow="Portfolio building" title="Think beyond the first property" lede="The investors who build real wealth treat each purchase as part of a system — not a one-off transaction." />
              <CheckList items={[
                "Use equity from existing properties to fund future acquisitions",
                "1031 exchanges to defer capital gains and upgrade your portfolio",
                "Diversify across long-term, short-term, and commercial assets",
                "Work with an advisor who understands both the deal and the financing",
              ]} />
            </div>
            <div className="quote-card">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;Edit helped me finance my first two rentals and set up management. It actually feels like a wealth strategy, not just a transaction.&rdquo;</blockquote>
              <div className="who">
                <div className="avatar">DK</div>
                <div>
                  <div className="who-name">David K.</div>
                  <div className="who-meta">Investor &amp; STR owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to build your portfolio?"
        lede="Schedule an investor consultation to map out your strategy — from the first rental to a diversified real estate portfolio."
        primaryLabel="Schedule an Investor Consultation →"
        primaryHref="/contact"
        secondaryLabel="Explore DSCR Financing"
        secondaryHref={LOAN_FACTORY_URL}
      />
    </>
  );
}
