export default function CareersPage() {
  return (
    <main className="w-full">

      {/* Hero */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Career Opportunities
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Partner with us to explore IT consulting opportunities 
            across the United States.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Why Work With BRB Data InfoTech
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Structured Resume Marketing</h3>
              <p className="text-sm text-gray-600">
                Professional profile presentation to vendor partners.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Vendor Network Access</h3>
              <p className="text-sm text-gray-600">
                Access to staffing partners across multiple industries.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Ongoing Engagement Support</h3>
              <p className="text-sm text-gray-600">
                Communication and coordination throughout placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Current Opportunities
          </h2>

          <div className="border rounded-lg p-8 bg-white text-gray-600">
            <p>
              We are continuously onboarding IT consultants across various 
              technology domains. Submit your resume to be considered 
              for relevant opportunities.
            </p>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Submit Resume
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}