"use client";

import { useEffect, useReducer } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

interface QuizOption {
  label: string;
  note?: string;
}

const step1Options: QuizOption[] = [
  { label: "Thinking about buying", note: "Exploring the idea, not sure where to start" },
  { label: "Ready to buy now", note: "Pre-approval, home search, moving fast" },
  { label: "I own a home", note: "Refinance, equity access, or next move" },
  { label: "Looking to sell", note: "Value my home, plan the move" },
  { label: "Want to invest", note: "Rental income and portfolio building" },
  { label: "Just need mortgage help", note: "Financing only, no agent needed" },
];

const step2Map: Record<string, { question: string; options: QuizOption[] }> = {
  "Thinking about buying": {
    question: "What's your main concern?",
    options: [
      { label: "My credit score", note: "Not sure if I'll qualify" },
      { label: "Down payment savings", note: "Working on saving up" },
      { label: "Monthly payment affordability", note: "Want to know what I can carry" },
      { label: "Market timing", note: "Wondering if now is the right time" },
    ],
  },
  "Ready to buy now": {
    question: "Have you been pre-approved?",
    options: [
      { label: "Yes, I have pre-approval", note: "Ready to make offers" },
      { label: "No, not yet", note: "Need to start the process" },
      { label: "Not sure what that means", note: "Need some education first" },
    ],
  },
  "I own a home": {
    question: "What's your goal?",
    options: [
      { label: "Lower my monthly payment", note: "Refinance to a better rate" },
      { label: "Access my equity", note: "Cash-out refi or HELOC" },
      { label: "Plan my next move", note: "Sell and buy something new" },
    ],
  },
  "Looking to sell": {
    question: "What's your timeline?",
    options: [
      { label: "I want to sell ASAP", note: "Within the next 1–2 months" },
      { label: "3–6 months out", note: "Preparing and planning" },
      { label: "Just exploring", note: "Curious about my home's value" },
    ],
  },
  "Want to invest": {
    question: "What type of property?",
    options: [
      { label: "Long-term rental", note: "Traditional buy-and-hold" },
      { label: "Short-term rental", note: "Airbnb / vacation rental" },
      { label: "Not sure yet", note: "Want to explore options" },
    ],
  },
  "Just need mortgage help": {
    question: "What type of financing?",
    options: [
      { label: "Purchase loan", note: "Buying a home or investment" },
      { label: "Refinance", note: "Lower rate or cash out" },
      { label: "Equity access", note: "HELOC or cash-out refi" },
    ],
  },
};

const resultMap: Record<string, { title: string; description: string; href: string }> = {
  "Thinking about buying": {
    title: "The Buyer's Starting Path",
    description: "Let's start with what you need to know before you're ready to buy — credit, down payment, and what the process actually looks like.",
    href: "/buying",
  },
  "Ready to buy now": {
    title: "The Ready-to-Buy Path",
    description: "You're ready. Let's get your pre-approval sorted and find you the right home with a financing strategy that's already aligned.",
    href: "/buying#ready",
  },
  "I own a home": {
    title: "The Homeowner's Path",
    description: "You've already made the smart move. Now let's figure out how to make your equity work harder — or plan your next chapter.",
    href: "/mortgage",
  },
  "Looking to sell": {
    title: "The Selling Path",
    description: "Accurate pricing, smart marketing, and a coordinated plan for your next move. Let's make your sale count.",
    href: "/selling",
  },
  "Want to invest": {
    title: "The Investor's Path",
    description: "Rental properties, STRs, and DSCR financing. Let's build a strategy that generates income and builds long-term wealth.",
    href: "/investing",
  },
  "Just need mortgage help": {
    title: "The Mortgage-Only Path",
    description: "Whether you're buying, refinancing, or accessing equity — you get the same dual-licensed expertise, focused entirely on your financing.",
    href: "/mortgage",
  },
};

type State =
  | { step: 1; s1: null; s2: null }
  | { step: 2; s1: string; s2: null }
  | { step: "result"; s1: string; s2: string };

type Action =
  | { type: "select1"; value: string }
  | { type: "select2"; value: string }
  | { type: "back" }
  | { type: "restart" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "select1":
      return { step: 2, s1: action.value, s2: null };
    case "select2":
      if (state.step === 2) return { step: "result", s1: state.s1, s2: action.value };
      return state;
    case "back":
      if (state.step === 2) return { step: 1, s1: null, s2: null };
      if (state.step === "result" && state.s1) return { step: 2, s1: state.s1, s2: null };
      return state;
    case "restart":
      return { step: 1, s1: null, s2: null };
    default:
      return state;
  }
}

interface QuizModalProps {
  open: boolean;
  onClose: () => void;
}

const TickIcon = ({ filled }: { filled?: boolean }) => (
  <div
    className="quiz-tick"
    style={filled ? { borderColor: "var(--accent)", background: "var(--accent)" } : {}}
    aria-hidden="true"
  >
    {filled && (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )}
  </div>
);

export default function QuizModal({ open, onClose }: QuizModalProps) {
  const [state, dispatch] = useReducer(reducer, { step: 1, s1: null, s2: null });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) {
      document.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const stepNum = state.step === "result" ? 3 : state.step;
  const totalSteps = 2;

  const content = (
    <div className="quiz-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="quiz-card" role="dialog" aria-modal="true" aria-label="Find your path quiz">
        <button
          onClick={onClose}
          style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", cursor: "pointer", padding: 8, color: "var(--muted)" }}
          aria-label="Close quiz"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {state.step !== "result" && (
          <div className="quiz-progress">
            {[1, 2].map((n) => (
              <div key={n} className={`quiz-dot ${stepNum >= n ? "active" : ""}`} />
            ))}
            <span className="quiz-step-label">Step {state.step} of {totalSteps}</span>
          </div>
        )}

        {state.step === 1 && (
          <>
            <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.6rem)", fontFamily: "var(--font-newsreader, serif)", fontWeight: 500, marginBottom: 8 }}>
              Where are you in your real estate journey?
            </h2>
            <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>Pick the moment that matches yours.</p>
            {step1Options.map((opt) => (
              <button
                key={opt.label}
                className="quiz-option"
                onClick={() => dispatch({ type: "select1", value: opt.label })}
              >
                <div>
                  <div className="quiz-option-label">{opt.label}</div>
                  {opt.note && <div className="quiz-option-note">{opt.note}</div>}
                </div>
                <TickIcon />
              </button>
            ))}
          </>
        )}

        {state.step === 2 && state.s1 && (
          <>
            <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.6rem)", fontFamily: "var(--font-newsreader, serif)", fontWeight: 500, marginBottom: 8 }}>
              {step2Map[state.s1]?.question}
            </h2>
            <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>Help us give you the most relevant guidance.</p>
            {step2Map[state.s1]?.options.map((opt) => (
              <button
                key={opt.label}
                className="quiz-option"
                onClick={() => dispatch({ type: "select2", value: opt.label })}
              >
                <div>
                  <div className="quiz-option-label">{opt.label}</div>
                  {opt.note && <div className="quiz-option-note">{opt.note}</div>}
                </div>
                <TickIcon />
              </button>
            ))}
            <button
              onClick={() => dispatch({ type: "back" })}
              style={{ marginTop: 12, background: "none", border: "none", color: "var(--muted)", fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: 4 }}
            >
              ← Back
            </button>
          </>
        )}

        {state.step === "result" && state.s1 && (
          <>
            <div style={{ textAlign: "center", padding: "8px 0 24px" }}>
              <span className="badge" style={{ marginBottom: 16 }}>Your recommended path</span>
              <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.7rem)", fontFamily: "var(--font-newsreader, serif)", fontWeight: 500, marginTop: 12, marginBottom: 16 }}>
                {resultMap[state.s1]?.title}
              </h2>
              <p className="lede" style={{ fontSize: "1rem", marginBottom: 32 }}>
                {resultMap[state.s1]?.description}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Link
                  href={resultMap[state.s1]?.href ?? "/start-here"}
                  className="btn btn-primary btn-lg"
                  style={{ justifyContent: "center" }}
                  onClick={onClose}
                >
                  Explore this path →
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-secondary btn-lg"
                  style={{ justifyContent: "center" }}
                  onClick={onClose}
                >
                  Schedule a consultation
                </Link>
              </div>
              <button
                onClick={() => dispatch({ type: "restart" })}
                style={{ marginTop: 20, background: "none", border: "none", color: "var(--muted)", fontSize: 13, cursor: "pointer", textDecoration: "underline" }}
              >
                Take the quiz again
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
