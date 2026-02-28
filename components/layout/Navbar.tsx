import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <span className="font-bold text-lg">
          BRB Data InfoTech
        </span>

        <div className="space-x-6 text-sm">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/compliance" className="hover:text-blue-600">Compliance</Link>
          <Link href="/careers" className="hover:text-blue-600">Careers</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}