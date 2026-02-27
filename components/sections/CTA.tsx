export default function CTA() {
  return (
    <section className="w-full py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let’s Build the Right Workforce Together
        </h2>

        <p className="mt-6 text-gray-300">
          Partner with us to connect skilled IT professionals with 
          opportunities across the United States.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
            Hire Talent
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-md font-medium hover:bg-slate-800">
            Submit Resume
          </button>
        </div>
      </div>
    </section>
  );
}