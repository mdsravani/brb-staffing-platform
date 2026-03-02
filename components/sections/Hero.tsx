export default function Hero() {
  return (
    <section className="w-full py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Connecting Skilled IT Professionals With
            <span className="text-blue-700"> America's Leading Enterprises</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Direct H-1B sponsorship, E-Verify compliance, and enterprise-grade
            IT staffing solutions across the United States.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition"
            >
              Partner With Us
            </a>

            <a
              href="/services"
              className="border border-slate-900 px-6 py-3 rounded-md font-medium hover:bg-slate-900 hover:text-white transition"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 border">
          <h3 className="text-xl font-semibold mb-6 text-slate-900">
            Why BRB Data InfoTech
          </h3>

          <ul className="space-y-4 text-gray-600">
            <li>✓ Direct H-1B Sponsorship</li>
            <li>✓ E-Verify Participating Employer</li>
            <li>✓ Structured Immigration Processing</li>
            <li>✓ Enterprise IT Workforce Deployment</li>
          </ul>
        </div>

      </div>
    </section>
  );
}