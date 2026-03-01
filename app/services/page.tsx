export default function ServicesPage() {
  return (
    <main className="w-full">

      {/* Hero */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            IT Staffing & Immigration Solutions
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Delivering specialized IT staffing solutions with structured immigration 
            and compliance support across the United States.
          </p>
        </div>
      </section>

      {/* Vendor Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-semibold mb-6">
             For Enterprise Clients
            </h2>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>• Specialized IT talent acquisition</li>
              <li>• Rapid consultant onboarding</li>
              <li>• Flexible workforce engagement models</li>
              <li>• Immigration-compliant workforce deployment</li>
              <li>• Long-term staffing partnerships</li>
            </ul>
          </div>

          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-400">
            Vendor Services Placeholder
          </div>

        </div>
      </section>

      {/* Consultant Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-400 order-2 md:order-1">
            Consultant Support Placeholder
          </div>

          <div className="order-1 md:order-2">
             <h2 className="text-3xl font-semibold mb-6">
                For IT Professionals
            </h2>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>• Structured career placement support</li>
              <li>• Visa sponsorship & immigration assistance</li>
              <li>• Work authorization guidance</li>
              <li>• H-1B transfers and OPT/STEM processing</li>
              <li>• Long-term project engagement opportunities</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Visa Sponsorship Section */}
      {/* Visa Sponsorship Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-10 text-center">
      Visa Sponsorship & Immigration Support
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="p-6 border rounded-lg bg-white">
        <h3 className="font-semibold mb-2">H-1B Visa Sponsorship</h3>
        <p className="text-sm text-gray-600">
          Direct employer-based H-1B sponsorship with structured petition filing,
          documentation management, and compliance oversight.
        </p>
      </div>

      <div className="p-6 border rounded-lg bg-white">
        <h3 className="font-semibold mb-2">OPT / STEM OPT</h3>
        <p className="text-sm text-gray-600">
          E-Verify enrolled employer supporting 24-month STEM OPT extensions
          for eligible graduates in designated fields.
        </p>
      </div>

      <div className="p-6 border rounded-lg bg-white">
        <h3 className="font-semibold mb-2">H-1B Transfers</h3>
        <p className="text-sm text-gray-600">
          Employer-to-employer H-1B transfer processing with streamlined
          documentation and rapid compliance alignment.
        </p>
      </div>

      <div className="p-6 border rounded-lg bg-white">
        <h3 className="font-semibold mb-2">CPT Programs</h3>
        <p className="text-sm text-gray-600">
          Curricular Practical Training placement support for international students.
        </p>
      </div>

      <div className="p-6 border rounded-lg bg-white">
        <h3 className="font-semibold mb-2">TN-1 / TN-2 Visas</h3>
        <p className="text-sm text-gray-600">
          USMCA professional visas for Canadian and Mexican citizens.
        </p>
      </div>

      <div className="p-6 border rounded-lg bg-white">
        <h3 className="font-semibold mb-2">Green Card (EB-2 / EB-3)</h3>
        <p className="text-sm text-gray-600">
          PERM labor certification and permanent residency filing support.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Engagement Process */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Our Engagement Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-left">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">1. Talent Assessment</h3>
            <p className="text-sm text-gray-600">
              Technical evaluation and workforce alignment review.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">2. Client Alignment</h3>
            <p className="text-sm text-gray-600">
              Matching qualified professionals with enterprise requirements.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">3. Immigration Processing</h3>
            <p className="text-sm text-gray-600">
              Visa sponsorship and compliance documentation handling.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">4. Workforce Deployment</h3>
            <p className="text-sm text-gray-600">
              Structured onboarding and ongoing engagement support.
            </p>
          </div>
        </div>
        </div>
      </section>

    </main>
  );
}