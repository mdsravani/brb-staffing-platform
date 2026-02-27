export default function Services() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Workforce Solutions Designed for Growth
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Supporting both staffing partners and skilled IT consultants 
            with structured placement and marketing solutions across the United States.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">

          {/* Vendors */}
          <div className="border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">
              For Staffing Partners & Vendors
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>• Pre-screened IT consultants</li>
              <li>• Rapid consultant deployment</li>
              <li>• Flexible engagement models</li>
              <li>• Ongoing vendor coordination support</li>
            </ul>
          </div>

          {/* Candidates */}
          <div className="border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">
              For IT Consultants & Job Seekers
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>• Professional resume marketing</li>
              <li>• Interview coordination</li>
              <li>• Vendor submission management</li>
              <li>• Visa & compliance guidance</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}