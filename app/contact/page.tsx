export default function ContactPage() {
  return (
    <main className="w-full">

      {/* Hero */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Connect with our team to discuss vendor partnerships 
            or consultant opportunities.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Email
                </h3>
                <p>info@brbdatainfotech.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Phone
                </h3>
                <p>+1 (000) 000-0000</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Service Region
                </h3>
                <p>United States (Vendor & Consultant Support)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}