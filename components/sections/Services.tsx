export default function Services() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Workforce & Immigration Solutions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Delivering specialized IT staffing and structured immigration support 
            across high-demand technology sectors in the United States.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">

          {/* Enterprise Clients */}
          <div className="border rounded-lg p-6 bg-white hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6">
              For Enterprise Clients
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>• Specialized IT talent acquisition</li>
              <li>• Rapid consultant onboarding</li>
              <li>• Flexible engagement structures</li>
              <li>• Compliance-aligned workforce deployment</li>
            </ul>
          </div>

          {/* Consultants */}
          <div className="border rounded-lg p-6 bg-white hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6">
              For IT Professionals
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>• Structured career placement support</li>
              <li>• Visa sponsorship & immigration assistance</li>
              <li>• Work authorization guidance</li>
              <li>• Long-term engagement opportunities</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}