import Link from "next/link";

interface PathCardProps {
  num: string;
  title: string;
  description: string;
  href: string;
  goLabel?: string;
  icon: React.ReactNode;
}

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function PathCard({ num, title, description, href, goLabel = "Explore", icon }: PathCardProps) {
  return (
    <Link href={href} className="path-card">
      <span className="pc-icon">{icon}</span>
      <span className="pc-num">{num}</span>
      <h3 style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", fontWeight: 600, lineHeight: 1.25 }}>{title}</h3>
      <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.5 }}>{description}</p>
      <span className="pc-go">{goLabel} <ArrowRight /></span>
    </Link>
  );
}
