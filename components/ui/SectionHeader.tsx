interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  right?: React.ReactNode;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, title, lede, right, centered }: SectionHeaderProps) {
  return (
    <div
      style={{
        display: right ? "flex" : undefined,
        justifyContent: right ? "space-between" : undefined,
        alignItems: right ? "flex-end" : undefined,
        marginBottom: 48,
      }}
    >
      <div className="section-head" style={{ textAlign: centered ? "center" : undefined, maxWidth: centered ? "none" : undefined }}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="h2" style={{ marginTop: 12 }}>{title}</h2>
        {lede && <p className="lede" style={{ marginTop: 16 }}>{lede}</p>}
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}
