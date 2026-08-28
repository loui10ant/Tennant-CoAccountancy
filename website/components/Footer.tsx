export default function Footer() {
  return (
    <footer className="border-t border-rule bg-green-100 py-8">
      <div className="mx-auto max-w-content px-6 text-center text-small text-ink-muted md:px-8">
        <p>© {new Date().getFullYear()} Tennant &amp; Co Accountancy Limited</p>
        <p className="mt-1">
          Company No. 17002564 · Registered office: 4 Grovelands, Boundary
          Way, Hemel Hempstead, Hertfordshire, United Kingdom, HP2 7TE
        </p>
      </div>
    </footer>
  );
}
