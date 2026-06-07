"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PathCard from "@/components/ui/PathCard";
import QuoteCard from "@/components/ui/QuoteCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/ui/CTABand";
import QuizModal from "@/components/quiz/QuizModal";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blogData";
import { LOAN_FACTORY_URL } from "@/lib/constants";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const pathCards = [
  {
    num: "01", title: "I'm thinking about buying", description: "Exploring the idea, learning what's possible, and getting ready.", href: "/buying", goLabel: "Explore buying",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>,
  },
  {
    num: "02", title: "I'm ready to buy", description: "Pre-approval, home search, and a confident path to closing.", href: "/buying#ready", goLabel: "Get buying ready",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/></svg>,
  },
  {
    num: "03", title: "I own a home", description: "Refinance, tap equity, or plan your next strategic move.", href: "/mortgage", goLabel: "Plan your options",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/></svg>,
  },
  {
    num: "04", title: "I want to sell", description: "Accurate valuation, smart marketing, and a coordinated next move.", href: "/selling", goLabel: "Explore selling",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 13.5 12 22l-9-9V4h9z"/><circle cx="8" cy="8" r="1.6"/></svg>,
  },
  {
    num: "05", title: "I want to invest", description: "Rental properties, STRs, and building a real estate portfolio.", href: "/investing", goLabel: "Explore investing",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></svg>,
  },
  {
    num: "06", title: "I need mortgage help only", description: "Rate shopping, refinancing, or financing as a standalone service.", href: "/mortgage", goLabel: "See mortgage options",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
  },
];

const steps = [
  { num: "1", title: "One conversation", body: "Tell me where you are and what you're trying to do." },
  { num: "2", title: "Aligned strategy", body: "Get a real estate plan and financing plan that work together." },
  { num: "3", title: "Expert execution", body: "Representation and/or mortgage origination from a single licensed professional." },
  { num: "4", title: "Confident outcome", body: "Close knowing every number was modeled before you committed." },
];

const testimonials = [
  { quote: "Having buying and financing handled by one person meant zero surprises. We knew exactly what we could afford before we ever toured a home.", name: "Jordan & Mia", role: "First-time buyers", initials: "JM" },
  { quote: "Sold our home and lined up the next purchase in one coordinated plan. The timing just worked — no scrambling between two professionals.", name: "Rachel P.", role: "Move-up seller", initials: "RP" },
  { quote: "Edit helped me finance my first two rentals and set up management. It actually feels like a wealth strategy, not just a transaction.", name: "David K.", role: "Investor & STR owner", initials: "DK" },
];

const resources = [
  "Home Buying", "Mortgage Education", "Credit Improvement", "Investing", "Selling Strategies", "Property Management",
];

const resourceHrefs: Record<string, string> = {
  "Home Buying": "/resources#buying",
  "Mortgage Education": "/resources#mortgage",
  "Credit Improvement": "/resources#credit",
  "Investing": "/resources#investing",
  "Selling Strategies": "/resources#selling",
  "Property Management": "/resources#management",
};

export default function HomePage() {
  const [quizOpen, setQuizOpen] = useState(false);
  const featured = blogPosts.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container">
          <div className="grid-2-wide">
            <div className="hero-copy">
              <span className="eyebrow">Real Estate &amp; Mortgage · One Trusted Advisor</span>
              <h1 className="display" style={{ marginTop: 20 }}>Where are you in your real estate journey?</h1>
              <p className="lede" style={{ marginTop: 24, maxWidth: "46ch" }}>
                Whether you&apos;re preparing to buy, ready to purchase, considering selling, exploring investments, or looking for financing — get guidance designed around your goals.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
                <button className="btn btn-primary btn-lg" onClick={() => setQuizOpen(true)}>
                  Find Your Path <ArrowRight />
                </button>
                <Link href="/contact" className="btn btn-secondary btn-lg">
                  Schedule a Consultation
                </Link>
              </div>
              <div className="stat-row" style={{ marginTop: 48 }}>
                <div className="stat">
                  <div className="num font-serif">2-in-1</div>
                  <div className="lbl">Licensed in real estate<br />&amp; mortgage</div>
                </div>
                <div className="stat">
                  <div className="num font-serif">6</div>
                  <div className="lbl">Guided paths for<br />every stage</div>
                </div>
                <div className="stat">
                  <div className="num font-serif">1</div>
                  <div className="lbl">Advisor, start<br />to finish</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <Image
                className="media"
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80"
                alt="On the journey to your new home"
                width={900}
                height={1125}
                crossOrigin="anonymous"
                priority
                style={{ width: "100%", height: "auto", aspectRatio: "4/5", objectFit: "cover", borderRadius: 20, border: "1px solid var(--line)" }}
              />
              <div className="hero-float card">
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <Image
                    src="/images/edit-benyi.jpg"
                    alt="Edit Benyi"
                    width={46}
                    height={46}
                    style={{ borderRadius: "50%", objectFit: "cover", flex: "none" }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14.5 }}>Under one roof</div>
                    <div className="muted" style={{ fontSize: 13 }}>Real estate + financing, aligned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR PATH */}
      <section className="section bg-alt" id="paths">
        <div className="container">
          <SectionHeader
            eyebrow="Choose your path"
            title="Start with where you actually are"
            lede="Real estate looks different at every stage. Pick the moment that matches yours, and we'll meet you there with the right next step."
          />
          <div className="path-grid">
            {pathCards.map((c) => (
              <PathCard key={c.num} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="The advantage"
            title="Real estate and mortgage, aligned by design"
            lede="When your agent and your loan officer are the same person, nothing falls through the cracks."
          />
          <div className="steps">
            {steps.map((s) => (
              <div key={s.num} className="step">
                <div className="step-num">{s.num}</div>
                <h3 style={{ fontSize: "1.1rem", fontFamily: "var(--font-newsreader, serif)", fontWeight: 500, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-alt">
        <div className="container">
          <SectionHeader eyebrow="Client stories" title="What clients say" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {testimonials.map((t) => (
              <QuoteCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Resources"
            title="Learn before you leap"
            right={<Link href="/resources" className="btn btn-secondary">Visit the resource center →</Link>}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {resources.map((r) => (
              <Link
                key={r}
                href={resourceHrefs[r] ?? "/resources"}
                className="card card-hover"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6 }}>{r}</div>
                <div style={{ fontSize: 13.5, color: "var(--muted)" }}>Guides, calculators, and expert takes →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section bg-alt">
        <div className="container">
          <SectionHeader
            eyebrow="From the blog"
            title="Latest insights &amp; guides"
            right={<Link href="/blog" className="btn btn-secondary">Read the blog →</Link>}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {featured.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <CTABand />

      <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
