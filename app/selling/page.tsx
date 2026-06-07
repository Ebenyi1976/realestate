import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CheckList from "@/components/ui/CheckList";
import CTABand from "@/components/ui/CTABand";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Selling Your Home",
  description: "Sell smart, move confidently. Accurate valuation, strategic marketing, and a coordinated plan for what comes next.",
  openGraph: { title: "Selling Your Home | Edit Benyi", description: "Sell for more with a strategy that considers both your sale and your next move." },
};

export default function SellingPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Home Selling</span>
              <h1 className="display" style={{ marginTop: 16, marginBottom: 20 }}>Sell smart, move confidently</h1>
              <p className="lede" style={{ maxWidth: "46ch", marginBottom: 32 }}>
                Selling your home is a financial transaction — and when it&apos;s also the beginning of your next chapter, every decision matters. Get strategy, not just a listing.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">Schedule a Listing Consultation</Link>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f28f5d82?auto=format&fit=crop&w=800&q=80"
                alt="Home ready to sell in Southern California"
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
              <SectionHeader eyebrow="Pricing" title="Valuation & pricing strategy" lede="The right price isn't the highest price — it's the price that generates the most competitive offers in the shortest time." />
              <CheckList items={[
                "Comprehensive comparative market analysis (CMA)",
                "Neighborhood-level pricing strategy based on recent sales",
                "Understanding buyer psychology and how price anchoring works",
                "Strategic pricing to attract multiple offers",
              ]} />
            </div>
            <div className="card" style={{ padding: 36 }}>
              <blockquote style={{ fontFamily: "var(--font-newsreader, serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.5, color: "var(--ink-soft)", marginBottom: 20 }}>
                &ldquo;Overpricing is the #1 mistake sellers make. It leads to longer days on market, price reductions, and ultimately a lower final sale price.&rdquo;
              </blockquote>
              <div style={{ fontSize: 14, fontWeight: 600 }}>The pricing truth most agents won&apos;t tell you</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card" style={{ padding: 36 }}>
              <div style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.4rem", fontWeight: 500, marginBottom: 16, lineHeight: 1.2 }}>Marketing that reaches real buyers</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {["Professional photography (non-negotiable)", "Video walkthrough or 3D Matterport tour", "Strategic social media promotion", "Agent network exposure through Coldwell Banker", "MLS syndication to Zillow, Redfin, and all major platforms"].map(item => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", marginTop: 1 }}>→</span>
                    <span style={{ fontSize: 14.5, color: "var(--ink-soft)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader eyebrow="Marketing" title="Beyond the MLS" lede="Today&apos;s buyers find homes online before they ever call an agent. Your listing needs to stop the scroll." />
              <CheckList items={[
                "Staging consultation to maximize perceived value",
                "High-impact listing description and photography brief",
                "Pre-market exposure through agent networks",
                "Targeted digital advertising to qualified buyers",
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <SectionHeader eyebrow="Negotiation" title="Negotiation & closing" lede="Getting the offer is just the start. Protecting your proceeds through inspection, appraisal, and closing is where expertise matters most." />
              <CheckList items={[
                "Evaluate each offer beyond the headline price",
                "Negotiate contingencies, credits, and closing costs",
                "Navigate inspection requests and appraisal gaps",
                "Coordinate with escrow and title for a smooth close",
              ]} />
            </div>
            <div>
              <SectionHeader eyebrow="What comes next" title="Your coordinated next move" lede="If you're selling to buy something else, the sequencing matters. Working with a dual-licensed advisor means your proceeds are modeled into your next purchase before you accept an offer." />
              <CheckList items={[
                "Model your net proceeds and purchasing power simultaneously",
                "Coordinate contingencies across both transactions",
                "Use your equity strategically as a down payment",
                "Avoid the gap between selling and buying",
              ]} />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to list your home?"
        lede="Schedule a listing consultation to get a no-obligation valuation and a marketing strategy tailored to your home and your timeline."
        primaryLabel="Schedule a Listing Consultation →"
        primaryHref="/contact"
        secondaryLabel="Learn more about the process"
        secondaryHref="/resources#selling"
        secondaryExternal={false}
      />
    </>
  );
}
