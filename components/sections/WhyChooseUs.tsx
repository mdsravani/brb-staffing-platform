export default function WhyChooseUs() {
  const points = [
  {
    title: "Specialized IT Talent Acquisition",
    description:
      "Strategic sourcing and placement of highly skilled IT professionals across enterprise environments.",
  },
  {
    title: "Comprehensive Visa Sponsorship",
    description:
      "Structured immigration support including H-1B, OPT/STEM, TN, and permanent residency processes.",
  },
  {
    title: "E-Verify & Compliance Commitment",
    description:
      "Employment verification and regulatory alignment to ensure workforce authorization standards.",
  },
  {
    title: "Long-Term Workforce Partnerships",
    description:
      "Building sustainable engagement models for both consultants and enterprise clients.",
  },
];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">
          Why Choose BRB Data InfoTech
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Delivering IT staffing and immigration-enabled workforce solutions with enterprise-grade professionalism and compliance standards.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
          {points.map((point) => (
            <div key={point.title} className="p-6 border rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}