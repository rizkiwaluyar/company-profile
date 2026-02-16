export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto py-20 bg-slate-50">
      {/* parnet */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT  */}
        <div>
          <h5 className="text-xs tracking-wider text-blue-500 font-bold mb-4">
            GET IN TOUCH
          </h5>
          <h4 className="text-3xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h4>
          <p className="text-slate-600 max-w-md mb-3">
            We are here to answer any questions you may have about our services.
            Reach out to us and we'll respond as soon as we can.
          </p>
          <div className="space-y-6">
            {/* ITEM */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                {/* ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                  <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                  <circle cx="10" cy="10" r="3" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Our Headquarters
                </h4>
                <p className="text-sm text-gray-500">
                  1234 Innovation Drive, Suite 100, Silicon Valley, CA 94025
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Email Us</h4>
                <p className="text-sm text-gray-500">hello@nexus-global.com</p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">Call Us</h4>
                <p className="text-sm text-gray-500">+1 (555) 000-1234</p>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Project Inquiry"
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
