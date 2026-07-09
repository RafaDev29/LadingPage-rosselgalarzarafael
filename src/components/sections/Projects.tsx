"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Satellite } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/profile";

/**
 * Cada dimensión brilla con un astro distinto (violeta → dorado → azul,
 * en ciclo). Clases estáticas para que Tailwind v4 las genere.
 */
const CARD_ACCENTS = [
  {
    card: "hover:border-nebula/50 hover:shadow-[0_0_70px_-18px] hover:shadow-nebula-bright",
    number: "group-hover:text-nebula-bright/40",
  },
  {
    card: "hover:border-stellar/50 hover:shadow-[0_0_70px_-18px] hover:shadow-stellar",
    number: "group-hover:text-stellar-bright/40",
  },
  {
    card: "hover:border-comet/50 hover:shadow-[0_0_70px_-18px] hover:shadow-comet",
    number: "group-hover:text-comet/40",
  },
];

/**
 * Dimensiones Exploradas: galería horizontal que reacciona al scroll vertical.
 * La sección mide 300vh; su viewport queda fijo (sticky) mientras el track de
 * tarjetas se traslada en X con useTransform sobre el progreso del scroll.
 */
export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["2%", "-68%"]);

  return (
    <section id="proyectos" ref={sectionRef} className="relative h-[300vh] border-t border-starlight/5">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            kicker="Proyectos Destacados"
            title="Dimensiones exploradas"
            subtitle="Nueve sistemas operativos en producción. Mi especialidad: integrar plataformas de rastreo vehicular remoto — señales de flotas enteras cruzando el vacío en tiempo real."
          />
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-[max(1.5rem,calc((100vw-72rem)/2))]">
          {projects.map((project, index) => {
            const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
            return (
              <article
                key={project.name}
                className={`group relative w-[78vw] shrink-0 rounded-2xl border border-starlight/10 bg-graphite/50 p-8 backdrop-blur-md transition-all duration-300 sm:w-96 ${accent.card}`}
              >
                <div className="mb-8 flex items-start justify-between">
                  <span
                    className={`font-mono text-4xl font-semibold text-starlight/10 transition-colors duration-300 ${accent.number}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {project.tracking && (
                    <span className="flex items-center gap-1.5 rounded-full border border-stellar/40 bg-stellar/10 px-3 py-1 font-mono text-[11px] text-stellar-bright">
                      <Satellite className="size-3" />
                      rastreo vehicular
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-starlight">
                  {project.name}
                </h3>
                <p className="mt-3 min-h-16 text-sm leading-7 text-stardust">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-starlight/10 bg-graphite-light px-2.5 py-1 font-mono text-xs text-stardust"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}

          {/* Última tarjeta: invitación */}
          <a
            href="#contacto"
            className="flex w-[60vw] shrink-0 items-center justify-center rounded-2xl border border-dashed border-nebula/30 p-8 font-mono text-sm text-nebula-bright transition-colors hover:border-nebula-bright hover:bg-nebula/5 sm:w-72"
          >
            ¿la próxima dimensión? →
          </a>
        </motion.div>

        {/* Barra de progreso del viaje: espectro completo */}
        <div className="mx-auto mt-12 w-full max-w-6xl px-6">
          <div className="h-px w-full bg-starlight/10">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-px origin-left bg-gradient-to-r from-nebula-bright via-comet to-stellar-bright shadow-[0_0_12px_1px] shadow-nebula-bright/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
