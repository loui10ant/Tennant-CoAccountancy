import Link from "next/link";

const styles = {
  primary:
    "bg-green-900 text-paper hover:bg-green-950 focus-visible:outline-green-900",
  secondary:
    "border border-green-900 text-green-900 hover:bg-green-100 focus-visible:outline-green-900",
  inverse:
    "bg-paper text-green-900 hover:bg-green-100 focus-visible:outline-paper",
} as const;

const base =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-body font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

type Variant = keyof typeof styles;

type ButtonAsLink = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  variant?: Variant;
};

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
}: ButtonAsLink) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export default function Button({
  variant = "primary",
  className = "",
  ...buttonProps
}: ButtonAsButton) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...buttonProps} />
  );
}
