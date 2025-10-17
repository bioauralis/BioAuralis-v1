import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo BioAuralis"
            className="w-10 h-10 rounded-full object-cover"
          />
          <a
            href="#inicio"
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-lime-400" : "text-white"
            }`}
          >
            BioAuralis
          </a>
        </div>

        {/* Links */}
        <ul className="flex gap-6 font-medium">
          <li>
            <a
              href="#quienes-somos"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:text-lime-400"
                  : "text-white hover:text-lime-200"
              }`}
            >
              Quiénes somos
            </a>
          </li>
          <li>
            <a
              href="#como-ayudar"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:text-lime-400"
                  : "text-white hover:text-lime-200"
              }`}
            >
              Cómo ayudar
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:text-lime-400"
                  : "text-white hover:text-lime-200"
              }`}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:text-lime-400"
                  : "text-white hover:text-lime-200"
              }`}
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón Donar */}
        <a
          href="#donar"
          className={`px-4 py-2 rounded-2xl transition-colors duration-300 font-semibold ${
            scrolled
              ? "bg-lime-400 text-green hover:bg-lime-300"
              : "bg-white text-gray-800 hover:bg-gray-100 shadow border border-white"
          }`}
        >
          Donar
        </a>
      </nav>
    </header>
  );
}
