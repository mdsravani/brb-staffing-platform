export default function Trusted() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <p className="text-sm uppercase tracking-wide text-gray-500">
          Trusted & Collaborated With
        </p>

        <h2 className="mt-3 text-2xl font-semibold">
          Leading Staffing & Enterprise Partners
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          
          {[1,2,3,4].map((item) => (
            <div 
              key={item}
              className="h-20 bg-white border rounded-md flex items-center justify-center text-gray-400"
            >
              Logo Placeholder
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}