import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CheckList from "@/components/ui/CheckList";
import CTABand from "@/components/ui/CTABand";
import SectionHeader from "@/components/ui/SectionHeader";
import { LOAN_FACTORY_URL, NMLS, LENDER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mortgage & Financing",
  description: "Financing built around your goals. Purchase loans, refinancing, DSCR, and equity access — with the same advisor who understands your real estate strategy.",
  openGraph: { title: "Mortgage & Financing | Edit Benyi", description: "Because Edit Benyi understands both the loan and the deal, your mortgage isn't an afterthought." },
};

const loanTypes = [
  { name: "Conventional", desc: "As low as 3% down. Best rates for buyers with strong credit. PMI cancellable at 20% equity." },
  { name: "FHA", desc: "3.5% minimum down. Flexible credit requirements. Great for first-time buyers." },
  { name: "VA", desc: "Zero down for eligible veterans and active-duty service members. No monthly PMI." },
  { name: "Jumbo", desc: "Financing above conforming loan limits for higher-priced Southern California homes." },
  { name: "Investment & DSCR", desc: "Qualify based on rental income, not personal income. No tax returns required." },
  { name: "Refinance", desc: "Rate-and-term or cash-out. Lower your payment, access equity, or shorten your term." },
];

const preApprovalItems = [
  "Know exactly how much you can offer before you tour",
  "Sellers take pre-approved buyers more seriously",
  "Understand your true monthly payment including taxes and insurance",
];

const strategyItems = [
  "Model your payment across multiple loan scenarios before deciding",
  "Understand how your rate impacts your long-term wealth picture",
  "Align your financing term with your real estate exit strategy",
];

const refinanceItems = [
  "Cash-out refinance: access equity for improvements, investments, or consolidation",
  "Rate-and-term: lower your rate or shorten your loan term",
  "HELOC overview: flexible line of credit based on your home's equity",
];

export default function MortgagePage() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Mortgage &amp; Financing</span>
              <h1 className="display" style={{ marginTop: 16, marginBottom: 20 }}>Financing built around your goals</h1>
              <p className="lede" style={{ maxWidth: "46ch", marginBottom: 12 }}>
                Because Edit Benyi understands both the loan and the deal, your mortgage isn&apos;t an afterthought — it&apos;s part of the strategy from day one. Apply anytime through our secure Loan Factory portal.
              </p>
              <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 28 }}>
                Applications are handled securely via {LENDER} · loanfactory.com/editbenyi · {NMLS}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={LOAN_FACTORY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  Start a Mortgage Application →
                </a>
                <Link href="/contact" className="btn btn-secondary btn-lg">Talk through your options</Link>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"
                alt="Beautiful Southern California home and mortgage strategy"
                width={800}
                height={600}
                crossOrigin="anonymous"
                style={{ width: "100%", height: "auto", borderRadius: 20, border: "1px solid var(--line)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOAN OPTIONS */}
      <section className="section bg-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Loan types"
            title="Financing for every situation"
            lede="From first-time buyers to seasoned investors, the right loan depends on your goals, your credit, and your timeline."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {loanTypes.map((l) => (
              <div key={l.name} className="card card-hover">
                <div style={{ fontWeight: 700, marginBottom: 10, fontSize: 16 }}>{l.name}</div>
                <div style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>{l.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRE-APPROVAL */}
      <section className="section" id="preapproval">
        <div className="container">
          <div className="grid-2">
            <div>
              <SectionHeader
                eyebrow="Before you shop"
                title="Shop like a serious buyer"
                lede="In Southern California's competitive market, pre-approval isn't optional — it's the starting line."
              />
              <CheckList items={preApprovalItems} />
              <a href={LOAN_FACTORY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 28, display: "inline-flex" }}>
                Get Pre-Approved →
              </a>
            </div>
            <div className="card" style={{ padding: 36 }}>
              <div style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.5rem", fontWeight: 500, marginBottom: 16, lineHeight: 1.2 }}>
                What you&apos;ll need to apply
              </div>
              {[
                { label: "Income documents", detail: "Last 2 years of W-2s or tax returns, recent pay stubs" },
                { label: "Asset statements", detail: "2 months of bank and investment account statements" },
                { label: "Credit check", detail: "We&apos;ll pull your tri-merge credit report with your permission" },
                { label: "Employment verification", detail: "Employer contact info for verification" },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: 18 }}>
                  <div style={{ fontWeight: 600, fontSize: 14.5, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 13.5, color: "var(--muted)" }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="section bg-alt">
        <div className="container">
          <div className="grid-2">
            <div className="card" style={{ padding: 36, background: "var(--ink)", color: "#F4EFE7" }}>
              <div style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.5rem", fontWeight: 500, marginBottom: 16, lineHeight: 1.2 }}>
                A loan is a strategy, not just a rate
              </div>
              <p style={{ color: "#C0B8AF", fontSize: 15, lineHeight: 1.6 }}>
                The rate matters. But so does the term, the structure, the amortization, and how this loan fits into your broader real estate plan. We model all of it before you commit.
              </p>
            </div>
            <div>
              <SectionHeader
                eyebrow="Mortgage planning"
                title="Financing that fits your life"
                lede="The best mortgage isn't necessarily the lowest rate — it's the one that aligns with your goals, timeline, and overall financial picture."
              />
              <CheckList items={strategyItems} />
            </div>
          </div>
        </div>
      </section>

      {/* REFINANCE / EQUITY */}
      <section className="section" id="refinance">
        <div className="container">
          <div className="grid-2">
            <div>
              <SectionHeader
                eyebrow="Already own?"
                title="Here are your options"
                lede="Homeownership builds equity. Here's how to put that equity to work — or simply reduce what you're paying every month."
              />
              <CheckList items={refinanceItems} />
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <a href={LOAN_FACTORY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply now →</a>
                <Link href="/contact" className="btn btn-secondary">Discuss your options</Link>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { name: "Rate & Term Refi", desc: "Lower your interest rate or shorten your loan term without taking cash out." },
                { name: "Cash-Out Refi", desc: "Access your home equity as cash. Use for improvements, investments, or consolidation." },
                { name: "HELOC", desc: "A flexible line of credit using your home as collateral. Draw what you need, when you need it." },
              ].map((item) => (
                <div key={item.name} className="card">
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>{item.name}</div>
                  <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to explore your financing options?"
        lede="Apply through our secure Loan Factory portal, or schedule a consultation to walk through which loan type fits your goals."
        primaryLabel="Start a Mortgage Application →"
        primaryHref={LOAN_FACTORY_URL}
        secondaryLabel="Schedule a Consultation"
        secondaryHref="/contact"
        secondaryExternal={false}
      />
    </>
  );
}
