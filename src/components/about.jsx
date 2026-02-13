import about from "../assets/about.png";

export default function About() {
  return (
    <section className="pt-20 min-h-screen">
      {/* parent */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* left side */}
        <div>
          <h3>Tean</h3> //dimasukin ke gambar
          <div>
            {/* Gunakan variabel yang diimpor di atribut `src` */}
            <img src={about} alt="Logo Perusahaan" />
          </div>
        </div>
        {/* right side */}
        <div>
          <h4 className="text-blue-500 tracking-wider font-bold text-sm mb-4">
            WHO WE ARE
          </h4>
          <h2 className="font-bold text-4xl mb-4">
            Transforming Challenges into Sustainable Opportunities
          </h2>
          <p className="text-slate-600 mb-6 max-w-xl">
            Founded on the principles of excellence and innovation, NEXUS has
            grown from a boutique agency into a global powerhouse of strategic
            solutions. Our journey is defined by the successes of our partners
            and the relentless pursuit of quality.
          </p>

          <p className="text-slate-600 mb-6 max-w-xl">
            We don't just provide services; we build lasting ecosystems where
            businesses can thrive. Our multi-disciplinary team brings together
            decades of experience across finance, technology, and creative
            design.
          </p>

          {/* button parent */}
          <div className="flex space-x-5">
            {/* button */}
            <div>
              <div></div>
              <h4 className="font-bold ">Integrity First</h4>
              <p className="text-slate-600">Ethics at our code</p>
            </div>
            {/* button */}
            <div>
              <h4 className="font-bold">Future Focused</h4>
              <p className="text-slate-600">Innovation-led growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
