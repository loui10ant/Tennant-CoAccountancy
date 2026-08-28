export default function ValuePillar({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-t-2 border-green-900 pt-4">
      <h3 className="text-body-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-body text-ink-muted">{description}</p>
    </div>
  );
}
