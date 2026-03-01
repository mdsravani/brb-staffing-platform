export default function Industries() {
  const industries = [
    "Healthcare Technology",
    "Financial Services & FinTech",
    "Retail & eCommerce",
    "SaaS & Cloud Platforms",
    "Enterprise Technology",
    "Data Engineering & Analytics",
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold">
          Industries We Support
        </h2>
        
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Delivering specialized IT staffing and visa-sponsored workforce solutions 
          across high-demand technology-driven industries in the United States.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry}
              className="border rounded-lg p-6 bg-white hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold">
                {industry}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}