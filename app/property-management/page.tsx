import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CheckList from "@/components/ui/CheckList";
import CTABand from "@/components/ui/CTABand";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Property Management",
  description: "Run rentals like a business. Systems, tenant selection, pricing strategy, and the mindset shift that separates passive income from passive stress.",
  openGraph: { title: "Property Management | Edit Benyi", description: "Turn your rental property into a well-run business with the right systems and strategy." },
};

export default function PropertyManagementPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Property Management</span>
              <h1 className="display" style={{ marginTop: 16, marginBottom: 20 }}>Run rentals like a business</h1>
              <p className="lede" style={{ maxWidth: "46ch", marginBottom: 32 }}>
                The landlords who build real wealth don&apos;t wing it — they build systems. From tenant selection to pricing to scaling, here&apos;s how to do it right.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">Talk about your property</Link>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                alt="Well-maintained Southern California rental property"
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
              <SectionHeader eyebrow="STR setup" title="Short-term rental setup" lede="Getting an STR off the ground requires more than listing it on Airbnb. Setup matters." />
              <CheckList items={[
                "Verify permits and local compliance before listing",
                "Furnish and photograph to attract premium guests",
                "Set up automated guest communication and check-in",
                "Establish cleaning protocols and vendor relationships",
              ]} />
            </div>
            <div>
              <SectionHeader eyebrow="Revenue" title="Pricing & occupancy strategy" lede="The goal isn't the highest nightly rate — it's the highest revenue over time, which requires dynamic pricing and smart availability management." />
              <CheckList items={[
                "Use dynamic pricing tools (PriceLabs, Wheelhouse) from day one",
                "Set minimum stays strategically by season",
                "Optimize listing title, photos, and description for search rank",
                "Build toward Superhost / Premier Host status",
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Systems"
            title="Management systems that scale"
            lede="Managing more than 2–3 properties without systems is a recipe for burnout. Build the infrastructure early."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { title: "Rent collection", desc: "Automate via PayRent, Buildium, or AppFolio. Late fees enforced automatically." },
              { title: "Maintenance", desc: "Dedicated intake system — text line, email, or property management app." },
              { title: "Bookkeeping", desc: "Separate accounts for each property. Track income, expenses, and depreciation." },
              { title: "Leasing", desc: "Digital lease signing and cloud storage. Never lose a document." },
              { title: "Tenant screening", desc: "Systematic process: credit, income, rental history — every time." },
              { title: "Insurance", desc: "Landlord policy required. STRs need specialized short-term rental coverage." },
            ].map(item => (
              <div key={item.title} className="card">
                <div style={{ fontWeight: 600, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <SectionHeader eyebrow="Growth" title="Scaling your portfolio" lede="Once your systems work at one property, scaling is about repeating the process — with better financing as your equity grows." />
              <CheckList items={[
                "Refinance to access equity for the next acquisition",
                "DSCR loans let rental income qualify you without W-2s",
                "Consider a property management company at 3–4+ units",
                "1031 exchanges let you upgrade without triggering capital gains",
              ]} />
              <Link href="/investing" className="btn btn-secondary" style={{ marginTop: 28, display: "inline-flex" }}>
                Explore investing strategy →
              </Link>
            </div>
            <div className="card" style={{ padding: 36 }}>
              <div style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.4rem", fontWeight: 500, marginBottom: 16, lineHeight: 1.2 }}>DIY vs. property management</div>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>A property manager typically charges 8–12% of monthly rent. Worth it when you want truly passive income, live far from the property, or manage more than 3–4 units.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Self-manage: Higher income, significant time commitment", "Co-host: Split income, local operational support", "Full PM: Typically 20–30% for STRs, 8–12% for LTRs"].map(item => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", marginTop: 1 }}>·</span>
                    <span style={{ fontSize: 14.5, color: "var(--ink-soft)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Let's talk about your property"
        lede="Whether you're setting up your first rental or looking to professionalize an existing portfolio, schedule a consultation to map out the right strategy."
        primaryLabel="Talk About Your Property →"
        primaryHref="/contact"
        secondaryLabel="Explore investing strategy"
        secondaryHref="/investing"
        secondaryExternal={false}
      />
    </>
  );
}
