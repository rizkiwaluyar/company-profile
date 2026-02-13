export default function Portfolio() {
  return (
    <section className="container mx-auto">
      <div className="">
        <p className="text-xs text-blue-500 font-bold tracking-wider mb-3">
          OUR PORTFOLIO
        </p>
        <h3 className="text-2xl font-bold max-w-md mb-3">
          Showcasing Our Most Influential Projects
        </h3>
        <span className="text-blue-500 font-bold text-base">
          View All Projects{" "}
        </span>
      </div>

      {/* parent */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* CARDS */}
        <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          {/* Gambar */}
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa
"
            alt="Portfolio Project"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold">
              Cloud Infrastructure Migration
            </h3>
            <p className="text-sm opacity-90">
              Optimizing global operations for a Fortune 500 retailer.
            </p>
            <span className="mt-3 font-semibold">Explore Case Study ↗</span>
          </div>
        </div>
        {/* CARDS */}
        <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          {/* Gambar */}
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b
"
            alt="Portfolio Project"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold">
              Cloud Infrastructure Migration
            </h3>
            <p className="text-sm opacity-90">
              Optimizing global operations for a Fortune 500 retailer.
            </p>
            <span className="mt-3 font-semibold">Explore Case Study ↗</span>
          </div>
        </div>
        {/* CARDS */}
        <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          {/* Gambar */}
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d
"
            alt="Portfolio Project"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold">
              Cloud Infrastructure Migration
            </h3>
            <p className="text-sm opacity-90">
              Optimizing global operations for a Fortune 500 retailer.
            </p>
            <span className="mt-3 font-semibold">Explore Case Study ↗</span>
          </div>
        </div>

        {/* CARDS */}
        <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          {/* Gambar */}
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085
"
            alt="Portfolio Project"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold">
              Cloud Infrastructure Migration
            </h3>
            <p className="text-sm opacity-90">
              Optimizing global operations for a Fortune 500 retailer.
            </p>
            <span className="mt-3 font-semibold">Explore Case Study ↗</span>
          </div>
        </div>
        {/* CARDS */}
        <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          {/* Gambar */}
          <img
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698

"
            alt="Portfolio Project"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold">
              Cloud Infrastructure Migration
            </h3>
            <p className="text-sm opacity-90">
              Optimizing global operations for a Fortune 500 retailer.
            </p>
            <span className="mt-3 font-semibold">Explore Case Study ↗</span>
          </div>
        </div>
        {/* CARDS */}
        <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          {/* Gambar */}
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c
"
            alt="Portfolio Project"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-semibold">
              Cloud Infrastructure Migration
            </h3>
            <p className="text-sm opacity-90">
              Optimizing global operations for a Fortune 500 retailer.
            </p>
            <span className="mt-3 font-semibold">Explore Case Study ↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
