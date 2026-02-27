export default function Industries() {
  const industries = [
    "Healthcare IT",
    "FinTech Solutions",
    "Retail & eCommerce",
    "SaaS & Cloud Services",
    "Enterprise Applications",
    "Data & Analytics",
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold">
          Industries We Serve
        </h2>
        
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We support talent placement and workforce solutions across multiple key sectors.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold">
                {industry}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}