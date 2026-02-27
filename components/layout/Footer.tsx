export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-white font-semibold mb-4">
            BRB Data InfoTech
          </h3>
          <p className="text-sm">
            Connecting skilled IT professionals with opportunities 
            across the United States.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Workforce Solutions</li>
            <li>Resume Marketing</li>
            <li>Vendor Coordination</li>
            <li>Compliance Support</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Industries</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BRB Data InfoTech. All rights reserved.
      </div>
    </footer>
  );
}