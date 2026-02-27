export default function WhyChooseUs() {
  const points = [
    {
      title: "Pre-Screened Talent Network",
      description:
        "Carefully evaluated IT consultants ready for rapid deployment across various industries.",
    },
    {
      title: "Structured Vendor Coordination",
      description:
        "Efficient communication and submission management with prime vendors and partners.",
    },
    {
      title: "Compliance Focused Approach",
      description:
        "Adherence to work authorization and employment verification standards.",
    },
    {
      title: "Long-Term Relationship Support",
      description:
        "Ongoing engagement support for both consultants and vendor partners.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">
          Why Choose BRB Data InfoTech
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Delivering structured workforce solutions with professionalism,
          transparency, and long-term partnership focus.
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