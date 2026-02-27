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
            A structured middle-vendor staffing partner connecting skilled IT professionals 
            with workforce opportunities across the United States.
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
              BRB Data InfoTech operates as a professional workforce coordination partner, 
              supporting staffing firms and prime vendors by marketing qualified 
              IT consultants and facilitating structured placement processes.
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
              Structured consultant evaluation
            </div>
            <div className="p-6 border rounded-lg bg-white">
              Vendor-focused submission management
            </div>
            <div className="p-6 border rounded-lg bg-white">
              Transparent coordination processes
            </div>
            <div className="p-6 border rounded-lg bg-white">
              Long-term engagement support
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