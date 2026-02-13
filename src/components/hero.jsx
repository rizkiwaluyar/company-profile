import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>

      {/* container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
              GLOBAL LEADERSHIP
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Innovating for a{" "}
              <span className="block text-blue-500">Better Tomorrow</span>
            </h1>

            <p className="mt-6 text-slate-300">
              We combine strategic thinking with cutting-edge technology to help
              organizations navigate the complexities of a rapidly evolving
              digital landscape.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-500 px-6 py-3 rounded-xl text-white font-semibold hover:bg-blue-600 transition">
                View Our Vision
              </button>
              <button className="px-6 py-3 rounded-xl border border-white/30 text-white backdrop-blur-md bg-white/10 hover:bg-white/20 transition">
                Our Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
