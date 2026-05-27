"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
  <img
    src="/favicon.ico"
    alt="Likoni SACCO Logo"
    className="w-12 h-12 rounded-full"
  />

  <h1 className="text-2xl font-bold text-orange-500">
    Likoni SACCO
  </h1>
</div>       
        

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold">

          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>

          <a href="#services" className="hover:text-orange-500 transition">
            Services
          </a>

          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>

          <a href="#membership" className="hover:text-orange-500 transition">
            Membership
          </a>

          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-6 py-6 font-semibold">

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#membership" onClick={() => setMenuOpen(false)}>
            Membership
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>
      )}

    </nav>
  );
}