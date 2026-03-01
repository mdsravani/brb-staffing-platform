export default function Hero() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Connecting Skilled IT Professionals With America's Leading Enterprises
            <span className="text-blue-600"> Across the United States</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Delivering workforce solutions, visa sponsorship support, and structured talent engagement across the United States.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Hire Talent
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100">
              Submit Resume
            </button>
          </div>
        </div>

        {/* Right Placeholder */}
        <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">
            Illustration Placeholder
          </span>
        </div>

      </div>
    </section>
  );
}