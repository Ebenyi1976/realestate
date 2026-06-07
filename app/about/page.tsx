import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CheckList from "@/components/ui/CheckList";
import CTABand from "@/components/ui/CTABand";
import { DRE, NMLS, BROKER, LENDER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Edit Benyi",
  description: "Meet Edit Benyi — dual-licensed real estate agent and mortgage loan originator in Southern California, operating as The Deal Lady.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">About</span>
              <h1 className="display" style={{ marginTop: 16, marginBottom: 20 }}>Meet Edit Benyi</h1>
              <p className="lede" style={{ maxWidth: "46ch", marginBottom: 24 }}>
                Real estate agent. Mortgage loan originator. Southern California&apos;s &ldquo;Deal Lady.&rdquo; One advisor for both sides of your real estate transaction.
              </p>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: 32, maxWidth: "46ch" }}>
                Edit has been licensed in real estate since 2018 and holds dual licensure as a mortgage loan originator — a combination that lets her deliver something most advisors can&apos;t: a buying, selling, or investing strategy that accounts for both the deal and the financing from day one.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">Schedule a Consultation</Link>
            </div>
            <div style={{ position: "relative" }}>
              {/* TODO: Replace with a larger headshot when available */}
              <Image
                src="/images/edit-benyi.jpg"
                alt="Edit Benyi — Real Estate Agent &amp; Mortgage Loan Originator"
                width={600}
                height={750}
                style={{ width: "100%", height: "auto", borderRadius: 20, border: "1px solid var(--line)", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section bg-alt">
        <div className="container" style={{ maxWidth: 800 }}>
          <span className="eyebrow">Background</span>
          <h2 className="h2" style={{ marginTop: 12, marginBottom: 24 }}>The story behind The Deal Lady</h2>
          <div style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--ink-soft)", display: "flex", flexDirection: "column", gap: 20 }}>
            <p>Edit Benyi entered real estate in 2018 with a focus on Southern California&apos;s diverse markets — from first-time buyers in the Inland Empire to investors in coastal communities. What she noticed quickly: too many clients were getting fragmented advice. Their real estate agent didn&apos;t understand their financing, and their loan officer didn&apos;t understand the deal. The two sides weren&apos;t talking.</p>
            <p>So Edit added a mortgage license. She trained under experienced originators, built relationships with lenders across the product spectrum — FHA, conventional, VA, jumbo, DSCR — and developed the ability to model a client&apos;s complete financial picture: the real estate strategy and the financing strategy, together.</p>
            <p>The result was a practice she calls &ldquo;one roof&rdquo; — and the nickname that stuck was The Deal Lady. Not because she hunts for bargains, but because she understands every dimension of a deal: the property, the market, the financing, and the client&apos;s actual goals.</p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Credentials</span>
          <h2 className="h2" style={{ marginTop: 12, marginBottom: 40 }}>Licensed on both sides</h2>
          <div className="grid-2">
            <div className="card" style={{ padding: 36 }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>🏠</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Real Estate Agent</div>
              <div style={{ fontSize: 15, color: "var(--muted)", marginBottom: 4 }}>Coldwell Banker</div>
              <div style={{ fontSize: 13, color: "var(--faint)", marginBottom: 20 }}>{DRE}</div>
              <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.6 }}>
                Licensed in California since 2018. Serving buyers, sellers, and investors across Southern California — from the San Gabriel Valley to the Inland Empire and coastal communities.
              </p>
            </div>
            <div className="card" style={{ padding: 36 }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>📋</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Mortgage Loan Originator</div>
              <div style={{ fontSize: 15, color: "var(--muted)", marginBottom: 4 }}>Loan Factory</div>
              <div style={{ fontSize: 13, color: "var(--faint)", marginBottom: 20 }}>{NMLS}</div>
              <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.6 }}>
                Licensed to originate mortgages in California. Specializing in purchase loans, refinancing, investment property financing (including DSCR), and down payment assistance programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-alt">
        <div className="container">
          <span className="eyebrow">How I work</span>
          <h2 className="h2" style={{ marginTop: 12, marginBottom: 40 }}>The values behind every engagement</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              { title: "Transparency", icon: "👁", desc: "You get the full picture — including the numbers that make a deal less attractive. Honest advice, even when it&apos;s not what you want to hear." },
              { title: "Strategy", icon: "🎯", desc: "Every recommendation is rooted in your goals, timeline, and financial picture — not commission optimization or transaction volume." },
              { title: "One relationship", icon: "🤝", desc: "You shouldn&apos;t need to manage a team of professionals. One advisor, one strategy, one point of contact from start to close." },
            ].map(v => (
              <div key={v.title} className="card" style={{ textAlign: "center", padding: 36 }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                <div style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.4rem", fontWeight: 500, marginBottom: 12 }}>{v.title}</div>
                <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">The mission</span>
              <h2 className="h2" style={{ marginTop: 12, marginBottom: 20 }}>Why one advisor for both sides</h2>
              <p style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 20 }}>
                Most people work with a real estate agent and a separate loan officer. Those two professionals often don&apos;t talk to each other in real time — which means your offer price and your loan amount are never truly aligned until it&apos;s almost too late to change them.
              </p>
              <p style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 20 }}>
                A dual-licensed advisor closes that gap. The real estate strategy and the financing strategy are modeled together from the first conversation — so when you make an offer, every number has already been stress-tested.
              </p>
            </div>
            <div>
              <CheckList items={[
                "No miscommunication between your agent and loan officer — they're the same person",
                "Financing scenarios modeled before you make an offer",
                "Faster pre-approval decisions based on real property data",
                "Coordinated timeline from offer to close",
                "A single professional accountable for both sides of the transaction",
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to work together?"
        lede="Schedule a free consultation to discuss your real estate goals and build a strategy that covers both the deal and the financing."
        primaryLabel="Schedule a Consultation →"
        primaryHref="/contact"
        secondaryLabel="Explore your path"
        secondaryHref="/start-here"
        secondaryExternal={false}
      />
    </>
  );
}
