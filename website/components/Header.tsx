import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        <Image
          src="/images/logo_basic.png"
          alt="Tennant & Co Accountancy"
          width={240}
          height={70}
          priority
        />

        <nav>
          <ul className="flex items-center gap-10 text-sm font-medium text-gray-700">
            <li className="cursor-pointer transition hover:text-green-900">
              Home
            </li>
            <li className="cursor-pointer transition hover:text-green-900">
              Services
            </li>
            <li className="cursor-pointer transition hover:text-green-900">
              About
            </li>
            <li className="cursor-pointer transition hover:text-green-900">
              Pricing
            </li>
            <li className="cursor-pointer transition hover:text-green-900">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}