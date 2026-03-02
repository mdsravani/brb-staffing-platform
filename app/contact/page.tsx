"use client";
import { useState } from "react";
export default function ContactPage() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (res.ok) {
    setStatus("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  } else {
    setStatus(data.error || "Something went wrong.");
  }

  setLoading(false);
};
  return (
    <main className="w-full">

      {/* Hero */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Connect with our team to discuss enterprise staffing needs 
            or visa-sponsored career opportunities.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">

            {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8 text-gray-600">

              <div>
                <h3 className="font-semibold text-gray-900">
                  Email
                </h3>
                <a
                  href="mailto:hr@brbdatainfotech.com"
                  className="text-blue-600 hover:underline"
                >
                  hr@brbdatainfotech.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Phone
                </h3>
                <a
                  href="tel:5127377073"
                  className="text-blue-600 hover:underline"
                >
                  (512) 737-7073
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Service Region
                </h3>
                <p>United States</p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full border rounded-md px-4 py-3"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full border rounded-md px-4 py-3"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full border rounded-md px-4 py-3"
                  placeholder="Write your message..."
                />
              </div>

              <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>
            {status && (
                <p className="text-sm mt-4 text-center">
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}