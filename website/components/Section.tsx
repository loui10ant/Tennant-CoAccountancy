import Container from "@/components/Container";

const backgrounds = {
  paper: "",
  "paper-alt": "bg-paper-alt",
  "green-100": "bg-green-100",
} as const;

export default function Section({
  children,
  alt = false,
  tint,
  className = "",
}: {
  children: React.ReactNode;
  /** Alternates to the neutral section background per Buildspec §3 section rhythm. */
  alt?: boolean;
  /** Tints the section with a brand colour instead of the neutral alt background. */
  tint?: keyof typeof backgrounds;
  className?: string;
}) {
  const background = tint ? backgrounds[tint] : alt ? backgrounds["paper-alt"] : "";

  return (
    <section className={`py-16 md:py-24 ${background} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
