import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center text-center text-white"
      style={{ backgroundImage: `url(${heroImg})`, paddingTop: "4rem" }} // Desplaza el hero debajo del header
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-2xl px-6">
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
      </div>
    </section>
  );
}
