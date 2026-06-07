interface QuoteCardProps {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export default function QuoteCard({ quote, name, role, initials }: QuoteCardProps) {
  return (
    <div className="quote-card">
      <div className="stars">★★★★★</div>
      <blockquote>&ldquo;{quote}&rdquo;</blockquote>
      <div className="who">
        <div className="avatar">{initials}</div>
        <div>
          <div className="who-name">{name}</div>
          <div className="who-meta">{role}</div>
        </div>
      </div>
    </div>
  );
}
