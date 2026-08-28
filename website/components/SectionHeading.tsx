export default function SectionHeading({
  eyebrow,
  title,
  lede,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-[42ch]">
      {eyebrow && (
        <p className="mb-3 text-label font-medium uppercase tracking-[0.06em] text-green-900">
          {eyebrow}
        </p>
      )}
      <Tag className="font-serif text-h2 font-semibold text-ink">{title}</Tag>
      {lede && <p className="mt-4 text-body-lg text-ink-muted">{lede}</p>}
    </div>
  );
}
