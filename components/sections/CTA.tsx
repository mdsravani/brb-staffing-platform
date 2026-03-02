
export default function Hero() {
  return (/* Call To Action Section */
<section className="py-24 bg-slate-900 text-white">
  <div className="max-w-5xl mx-auto px-4 text-center">

    <h2 className="text-3xl md:text-4xl font-bold">
      Ready to Build Your Workforce With Confidence?
    </h2>

    <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
      Partner with BRB Data InfoTech for enterprise IT staffing,
      direct H-1B sponsorship, and compliance-driven workforce solutions.
    </p>

    <div className="mt-8 flex justify-center gap-4 flex-wrap">
      <a
        href="/contact"
        className="bg-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition"
      >
        Contact Our Team
      </a>

      <a
        href="/services"
        className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-slate-900 transition"
      >
        View Services
      </a>
    </div>
 </div>
</section>
 );
}