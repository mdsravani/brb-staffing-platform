export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <span className="font-bold text-lg">
          BRB Data InfoTech
        </span>

        <div className="space-x-6 text-sm">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/services" className="hover:text-blue-600">Services</a>
          <a href="/compliance" className="hover:text-blue-600">Compliance</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}