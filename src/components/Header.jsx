import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-yellow-400 shadow-sm z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          {/* Logo circular */}
          <img src={logo} alt="Logo BioAuralis" className="w-10 h-10 rounded-full object-cover" />
          
          {/* Nombre del sitio */}
          <a href="#inicio" className="text-2xl font-bold text-emerald-900">
            BioAuralis
          </a>
        </div>

        <ul className="flex gap-6 text-gray-800 font-medium">
          <li><a href="#quienes-somos" className="hover:text-emerald-900">Quiénes somos</a></li>
          <li><a href="#como-ayudar" className="hover:text-emerald-900">Cómo ayudar</a></li>
          <li><a href="#proyectos" className="hover:text-emerald-900">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-emerald-900">Contacto</a></li>
        </ul>

        <a href="#donar" className="px-4 py-2 bg-emerald-500 text-white rounded-2xl hover:bg-emerald-600 transition">
          Donar
        </a>
      </nav>
    </header>
  );
}
