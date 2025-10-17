import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-center text-white"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Contenido animado */}
      <motion.div
        className="relative z-10 max-w-2xl px-6 pt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Conservemos la magia de las luciérnagas
        </h1>
        <p className="text-lg mb-6">
          La luz de las luciérnagas nos recuerda que incluso los seres más
          pequeños iluminan el mundo.
        </p>
        <a
          href="#como-ayudar"
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl transition"
        >
          Descubrí cómo ayudar
        </a>
      </motion.div>
    </section>
  );
}
