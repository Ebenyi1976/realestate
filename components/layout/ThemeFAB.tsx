"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const themes = [
  {
    id: "editorial" as const,
    name: "Warm Editorial",
    desc: "Warm terracotta palette",
    swatch: "#F47C20",
    bg: "#FAF7F1",
  },
  {
    id: "trust" as const,
    name: "Cool Trust",
    desc: "Navy & slate blue palette",
    swatch: "#1E5A99",
    bg: "#F6F8FB",
  },
  {
    id: "minimal" as const,
    name: "AI Minimal",
    desc: "Monochrome near-black palette",
    swatch: "#1F1D18",
    bg: "#FBFBF9",
  },
];

export default function ThemeFAB() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-fab">
      {open && (
        <div className="theme-popup">
          <div className="theme-popup-title">Design theme</div>
          <div className="theme-popup-sub">Change the look of the site</div>
          {themes.map((t) => (
            <button
              key={t.id}
              className={`theme-option ${theme === t.id ? "active" : ""}`}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
            >
              <div
                className="theme-swatch"
                style={{ background: `linear-gradient(135deg, ${t.bg} 50%, ${t.swatch} 50%)` }}
              />
              <div>
                <div className="theme-option-name">{t.name}</div>
                <div className="theme-option-desc">{t.desc}</div>
              </div>
            </button>
          ))}
        </div>
      )}
      <button className="theme-fab-btn" onClick={() => setOpen((o) => !o)}>
        <span className="theme-dot" />
        Tweaks
      </button>
    </div>
  );
}
