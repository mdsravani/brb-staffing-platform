export default function Hero() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Connecting Skilled IT Professionals With America's Leading Enterprises
            <span className="text-blue-700"> Across the United States</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Delivering workforce solutions, visa sponsorship support, and structured talent engagement across the United States.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Hire Talent
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100">
              Submit Resume
            </button>
          </div>
        </div>

        {/* Right Placeholder */}
        <div className="relative">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-200 rounded-full blur-2xl opacity-50"></div>

        <div className="relative bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-slate-900">
            Trusted Workforce Partner
          </h3>

          <div className="space-y-4 text-gray-600 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span>Direct H-1B Sponsorship</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span>E-Verify Participating Employer</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span>Enterprise IT Staffing Solutions</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span>Immigration-Compliant Workforce</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}