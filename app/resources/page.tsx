import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free guides, tools, and expert takes on home buying, mortgage, credit, investing, selling, and property management in Southern California.",
};

const sections = [
  {
    id: "buying",
    eyebrow: "Home Buying",
    title: "Your path to owning",
    lede: "From first thoughts to closing day — what you need to know at every stage of the buying process.",
    resources: [
      { title: "First-time buyer checklist", category: "Buying", desc: "A step-by-step guide to everything you need to do before you make an offer." },
      { title: "How to read a CMA", category: "Buying", desc: "Understand how agents determine a home's fair market value." },
      { title: "Escrow explained", category: "Buying", desc: "What happens between offer acceptance and close — and what to watch for." },
    ],
  },
  {
    id: "mortgage",
    eyebrow: "Mortgage",
    title: "Understanding your financing",
    lede: "Loans, rates, pre-approval, and the strategies that separate smart buyers from the rest.",
    resources: [
      { title: "FHA vs. conventional: the real comparison", category: "Mortgage", desc: "Which loan actually saves you more money over time?" },
      { title: "How mortgage rates are set", category: "Mortgage", desc: "Why your rate isn't just about the Fed — and how to shop effectively." },
      { title: "The pre-approval process explained", category: "Mortgage", desc: "What lenders look at and how to prepare a strong application." },
    ],
  },
  {
    id: "credit",
    eyebrow: "Credit",
    title: "Building your credit profile",
    lede: "Your credit score is the biggest lever on your mortgage rate. Here's how to improve it before you apply.",
    resources: [
      { title: "How to read your credit report", category: "Credit", desc: "Pull your free reports and understand what you're looking at." },
      { title: "Fastest ways to raise your score", category: "Credit", desc: "What actually moves the needle in 30–90 days." },
      { title: "Credit do's and don'ts before applying", category: "Credit", desc: "Avoid the mistakes that sink last-minute mortgage applications." },
    ],
  },
  {
    id: "investing",
    eyebrow: "Investing",
    title: "Real estate as a wealth strategy",
    lede: "Rental properties, STRs, and portfolio building — the investor's education center.",
    resources: [
      { title: "DSCR loans explained", category: "Investing", desc: "How investors finance rentals without W-2 documentation." },
      { title: "Cap rate vs. cash-on-cash: what matters", category: "Investing", desc: "Two essential metrics for evaluating any investment property." },
      { title: "STR market selection guide", category: "Investing", desc: "How to pick the right short-term rental market in Southern California." },
    ],
  },
  {
    id: "selling",
    eyebrow: "Selling",
    title: "Maximize your home's value",
    lede: "Pricing strategy, preparation, marketing, and timing — what separates top-dollar sales from sitting on the market.",
    resources: [
      { title: "How to price your home correctly", category: "Selling", desc: "Why overpricing costs you money, and how to find the sweet spot." },
      { title: "Pre-sale improvements that deliver ROI", category: "Selling", desc: "Not all upgrades are equal. Here's where to spend and where to skip." },
      { title: "What to expect during escrow (seller edition)", category: "Selling", desc: "Contingencies, inspections, and the walk-through — a seller's guide." },
    ],
  },
  {
    id: "management",
    eyebrow: "Property Management",
    title: "Running rentals like a business",
    lede: "Systems, tenant selection, pricing strategy, and the mindset that separates passive income from passive stress.",
    resources: [
      { title: "Tenant screening checklist", category: "Management", desc: "The 5-step process that protects your investment from day one." },
      { title: "STR setup guide for Southern California", category: "Management", desc: "Permits, platforms, pricing, and operations — start to launch." },
      { title: "When to hire a property manager", category: "Management", desc: "The math behind DIY vs. professional management at different scales." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Resources</span>
          <h1 className="display" style={{ marginTop: 16, marginBottom: 20 }}>Learn before you leap</h1>
          <p className="lede" style={{ maxWidth: "50ch" }}>
            Real estate and mortgage decisions are too important to make without the right information. These resources are designed to give you confidence at every stage.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 32 }}>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="tag" style={{ cursor: "pointer" }}>{s.eyebrow}</a>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.id} id={section.id} className={`section ${i % 2 === 1 ? "bg-alt" : ""}`}>
          <div className="container">
            <div style={{ marginBottom: 40 }}>
              <span className="eyebrow">{section.eyebrow}</span>
              <h2 className="h2" style={{ marginTop: 12, marginBottom: 12 }}>{section.title}</h2>
              <p className="lede" style={{ maxWidth: "52ch" }}>{section.lede}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {section.resources.map(r => (
                <div key={r.title} className="card card-hover">
                  <span className="badge" style={{ marginBottom: 12 }}>{r.category}</span>
                  <h3 style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.1rem", fontWeight: 500, marginBottom: 10, lineHeight: 1.3 }}>{r.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABand
        title="Have questions? Let's talk."
        lede="Resources are a start. A free consultation gives you answers specific to your situation, your goals, and your numbers."
        primaryLabel="Schedule a Consultation →"
        primaryHref="/contact"
        secondaryLabel="Read the blog"
        secondaryHref="/blog"
        secondaryExternal={false}
      />
    </>
  );
}
