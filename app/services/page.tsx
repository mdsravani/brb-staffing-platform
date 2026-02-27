export default function ServicesPage() {
  return (
    <main className="w-full">

      {/* Hero */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Workforce Solutions
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Structured staffing support designed for vendor partners 
            and skilled IT consultants across the United States.
          </p>
        </div>
      </section>

      {/* Vendor Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              For Staffing Partners & Vendors
            </h2>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>• Pre-screened IT consultant network</li>
              <li>• Rapid candidate submission support</li>
              <li>• Structured communication & coordination</li>
              <li>• Flexible engagement alignment</li>
              <li>• Ongoing placement support</li>
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
              For IT Consultants & Job Seekers
            </h2>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>• Resume marketing to vendor partners</li>
              <li>• Interview coordination assistance</li>
              <li>• Submission tracking & updates</li>
              <li>• Work authorization & compliance guidance</li>
              <li>• Long-term career engagement support</li>
            </ul>
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
              <h3 className="font-semibold mb-2">1. Consultant Evaluation</h3>
              <p className="text-sm text-gray-600">
                Structured screening and profile validation.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">2. Vendor Submission</h3>
              <p className="text-sm text-gray-600">
                Coordinated candidate marketing and submission.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">3. Interview Support</h3>
              <p className="text-sm text-gray-600">
                Scheduling and communication management.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">4. Placement Follow-Up</h3>
              <p className="text-sm text-gray-600">
                Ongoing coordination and engagement tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}