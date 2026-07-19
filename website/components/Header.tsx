export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="text-2xl font-semibold text-green-900">
          Tennant & Co
        </div>

        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
            <li className="cursor-pointer hover:text-green-900">Home</li>
            <li className="cursor-pointer hover:text-green-900">Services</li>
            <li className="cursor-pointer hover:text-green-900">About</li>
            <li className="cursor-pointer hover:text-green-900">Pricing</li>
            <li className="cursor-pointer hover:text-green-900">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}