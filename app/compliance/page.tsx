export default function CompliancePage() {
  return (
    <main className="w-full">

      {/* Hero */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Compliance & Workforce Standards
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Maintaining structured employment verification practices 
            and workforce documentation standards across engagements.
          </p>
        </div>
      </section>

      {/* Employment Verification */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Employment Verification
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We support structured employment verification processes 
            aligned with applicable workforce requirements and vendor 
            expectations. Our coordination includes documentation review 
            and compliance communication where applicable.
          </p>
        </div>
      </section>

      {/* Work Authorization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Work Authorization Handling
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We assist consultants in maintaining appropriate work authorization 
            documentation and coordinate transparently with vendor partners 
            regarding employment status and eligibility.
          </p>
        </div>
      </section>

      {/* Vendor Alignment */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Vendor Alignment & Documentation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our processes are structured to support vendor submission guidelines, 
            onboarding documentation requirements, and communication clarity 
            throughout the placement lifecycle.
          </p>
        </div>
      </section>

    </main>
  );
}