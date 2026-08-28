export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-rule bg-paper p-8">
      <h3 className="font-serif text-h3 font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-body text-ink-muted">{description}</p>
    </div>
  );
}
