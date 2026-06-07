"use client";

import { useState } from "react";
import Link from "next/link";
import PathCard from "@/components/ui/PathCard";
import CTABand from "@/components/ui/CTABand";
import QuizModal from "@/components/quiz/QuizModal";

const pathCards = [
  {
    num: "01", title: "I'm thinking about buying", description: "Exploring the idea, learning what's possible, and getting ready. Start with credit, down payment, and understanding the market.", href: "/buying", goLabel: "Explore buying",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>,
  },
  {
    num: "02", title: "I'm ready to buy", description: "Pre-approval, home search, and a confident path to closing. Let's find the right home with financing already aligned.", href: "/buying#ready", goLabel: "Get buying ready",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/></svg>,
  },
  {
    num: "03", title: "I own a home", description: "Refinance, tap equity, or plan your next strategic move. Your home is an asset — let's make it work harder for you.", href: "/mortgage", goLabel: "Plan your options",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/></svg>,
  },
  {
    num: "04", title: "I want to sell", description: "Accurate valuation, smart marketing, and a coordinated next move. Sell for more, stress less.", href: "/selling", goLabel: "Explore selling",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 13.5 12 22l-9-9V4h9z"/><circle cx="8" cy="8" r="1.6"/></svg>,
  },
  {
    num: "05", title: "I want to invest", description: "Rental properties, STRs, and building a real estate portfolio. Income, appreciation, and strategy from day one.", href: "/investing", goLabel: "Explore investing",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></svg>,
  },
  {
    num: "06", title: "I need mortgage help only", description: "Rate shopping, refinancing, or financing as a standalone service. Expert origination without the full real estate engagement.", href: "/mortgage", goLabel: "See mortgage options",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
  },
];

export default function StartHerePage() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Where to begin</span>
          <h1 className="display" style={{ marginTop: 16, marginBottom: 20 }}>Find your path</h1>
          <p className="lede" style={{ maxWidth: "52ch" }}>
            Real estate and mortgage advice is most powerful when it&apos;s tailored to your specific moment. Pick the path that matches where you are right now — we&apos;ll handle the rest.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-primary btn-lg" onClick={() => setQuizOpen(true)}>
              Take the quiz →
            </button>
            <Link href="/contact" className="btn btn-secondary btn-lg">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="path-grid">
            {pathCards.map((c) => (
              <PathCard key={c.num} {...c} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Not sure which path fits?"
        lede="Take the 2-minute quiz to get a personalized recommendation — or just schedule a free consultation and we'll figure it out together."
        primaryLabel="Take the quiz →"
        primaryHref="/start-here"
        secondaryLabel="Schedule a consultation"
        secondaryHref="/contact"
        secondaryExternal={false}
      />

      <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
