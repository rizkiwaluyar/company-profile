import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">

        {/* logo */}
        <h1 className="font-bold text-blue-500 text-lg">NEXUS.</h1>

        {/* desktop menu */}
        <div className="hidden md:flex space-x-6">
          <a className="hover:text-blue-500">Home</a>
          <a className="hover:text-blue-500">About Us</a>
          <a className="hover:text-blue-500">Services</a>
          <a className="hover:text-blue-500">Portfolio</a>
          <a className="hover:text-blue-500">Contact</a>
        </div>

        {/* desktop button */}
        <button className="hidden md:block px-4 py-2 bg-blue-500 rounded-lg text-white">
          Get Started
        </button>

        {/* hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white shadow">
          <a>Home</a>
          <a>About Us</a>
          <a>Services</a>
          <a>Portfolio</a>
          <a>Contact</a>
          <button className="mt-2 px-4 py-2 bg-blue-500 rounded-lg text-white">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
