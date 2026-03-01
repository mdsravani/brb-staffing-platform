import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
        <Link href="/" className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center">
          <Image
          src="/logo.png"
          alt="BRB Data InfoTech"
          width={48}
          height={48}
          className="object-contain"
          priority
          /></div>
          <span className="text-lg font-semibold text-slate-900 whitespace-nowrap">
          BRB Data InfoTech
        </span>
        </Link>

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