export default function Services() {
  return (
    <section className="bg-slate-100 px-6 py-20">
      {/* parent */}
      <div className="container mx-auto">
        <p className="text-center text-blue-500 font-bold text-sm tracking-[.3 em]">
          BY THE NUMBERS
        </p>
        <h3 className="text-center font-bold text-4xl mt-3 tracking-wide ">
          Impact We've Made
        </h3>
        {/* parent card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
          {/* cards */}
          <div
            className="bg-white px-10 py-10 rounded-xl shadow-lg border border-slate-200 hover:border-blue-600
"
          >
            <div class="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-refresh-cw-icon lucide-refresh-cw"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-1">10+</h2>
            <p className="text-xl text-slate-600">Years of Experience</p>
            <div class="w-10 h-1 bg-blue-600 rounded-full mt-4 "></div>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-200 hover:border-blue-600">
            <div class="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-check-icon lucide-circle-check"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-1">500+</h2>
            <p className="text-xl text-slate-600">Project Completed</p>
            <div class="w-10 h-1 bg-blue-600 rounded-full mt-4"></div>
          </div>

          <div
            className="bg-white p-10 rounded-xl shadow-lg border border-slate-200 hover:border-blue-600">
            <div class="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trophy-icon lucide-trophy"
              >
                <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-1">50+</h2>
            <p className="text-xl text-slate-600">Global Awards</p>
            <div class="w-10 h-1 bg-blue-600 rounded-full mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
