import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

import luciernaga1 from "../assets/luciernaga1.jpg";
import luciernaga2 from "../assets/luciernaga2.jpg";
import luciernaga3 from "../assets/luciernaga3.jpg";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero /> {/* No necesita margen extra aquí, ya está en Hero.jsx */}

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        <Section
          id="quienes-somos"
          title="Quiénes somos"
          text="BioAuralis es una organización dedicada a la conservación de los hábitats naturales de los insectos, con un enfoque especial en la protección de las luciérnagas. Promovemos la investigación, la educación ambiental y la restauración de ecosistemas luminosos."
        />

        <Section
          id="como-ayudar"
          title="Cómo ayudar"
          text="Podés participar en programas de restauración, apadrinar hábitats, difundir la importancia de las luciérnagas o contribuir económicamente para mantener las campañas de conservación."
        />

        <div id="proyectos" className="text-center">
          <h2 className="text-3xl font-bold mb-10 text-emerald-700">
            Nuestros proyectos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              image={luciernaga1}
              title="Restauración de bosques luminosos"
              text="Reforestación y restauración de hábitats donde las luciérnagas prosperan."
            />
            <ProjectCard
              image={luciernaga2}
              title="Educación ambiental"
              text="Charlas, talleres y programas escolares para concientizar sobre la biodiversidad nocturna."
            />
            <ProjectCard
              image={luciernaga3}
              title="Investigación científica"
              text="Colaboramos con expertos para estudiar el ciclo vital y la distribución de las luciérnagas."
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
