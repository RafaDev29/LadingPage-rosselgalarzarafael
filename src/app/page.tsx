import { About } from "@/components/sections/About";
import { Clients } from "@/components/sections/Clients";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

/**
 * Composición de la página — Server Component.
 *
 * Las secciones con física de scroll (Hero, About, Projects, Navbar) y
 * micro-interacciones (Skills, Clients) son Client Components con
 * "use client"; Footer y los elementos decorativos permanecen en el servidor.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
