export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-emerald-700 text-gray text-center py-10 mt-16"
    >
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <p className="mb-2">Escribinos a: bioauralis@gmail.com</p>
      <p className="mb-6">© {new Date().getFullYear()} BioAuralis — Todos los derechos reservados.</p>
      <div className="flex justify-center gap-6">
        <a href="#" className="hover:text-emerald-200">Instagram</a>
        <a href="#" className="hover:text-emerald-200">Facebook</a>
        <a href="#" className="hover:text-emerald-200">Twitter</a>
      </div>
    </footer>
  );
}
