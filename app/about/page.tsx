export default function AboutPage() {
  return (
    <main className="w-full">

      {/* Hero Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About BRB Data InfoTech
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            A professional IT staffing and workforce solutions company delivering talent acquisition and immigration support services across the United States.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              BRB Data InfoTech is an IT staffing and workforce solutions firm specializing in talent acquisition, visa sponsorship, and long-term consultant engagement across multiple industries in the United States.
            </p>
          </div>

          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-400">
            Company Overview Placeholder
          </div>

        </div>
      </section>

      {/* Our Approach */}
<section className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-10 text-center">
      Our Approach
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-6 border rounded-lg bg-white">
        Strategic Talent Acquisition
        <p className="text-sm text-gray-600 mt-2">
          Identifying and onboarding highly skilled IT professionals aligned with enterprise requirements.
        </p>
      </div>

      <div className="p-6 border rounded-lg bg-white">
        Immigration & Visa Support
        <p className="text-sm text-gray-600 mt-2">
          Structured visa sponsorship and employment authorization processes.
        </p>
      </div>

      <div className="p-6 border rounded-lg bg-white">
        Compliance & Documentation
        <p className="text-sm text-gray-600 mt-2">
          Maintaining employment verification and regulatory alignment.
        </p>
      </div>

      <div className="p-6 border rounded-lg bg-white">
        Long-Term Engagement
        <p className="text-sm text-gray-600 mt-2">
          Ongoing workforce support for consultants and client organizations.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Compliance Commitment */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Compliance Commitment
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We maintain adherence to employment verification standards and 
            support proper documentation processes aligned with workforce 
            compliance requirements across engagements.
          </p>
        </div>
      </section>

    </main>
  );
}