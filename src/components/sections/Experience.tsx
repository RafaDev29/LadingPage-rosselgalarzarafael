"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, experience } from "@/lib/profile";

// Cada misión brilla con un astro distinto (ciclo violeta → dorado → azul)
const NODE_COLORS = [
  { star: "bg-nebula-bright shadow-nebula-bright/60", text: "text-nebula-bright" },
  { star: "bg-stellar-bright shadow-stellar/60", text: "text-stellar-bright" },
  { star: "bg-comet shadow-comet/60", text: "text-comet" },
];

/**
 * Bitácora de Misiones: la trayectoria profesional como línea de tiempo
 * estelar. El rail vertical se va "dibujando" con el progreso del scroll
 * (useScroll + scaleY con spring) y cada misión es un nodo-estrella de un
 * color distinto. La misión actual (QhatuPE) lleva halo pulsante y su logro
 * insignia como badge.
 */
export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.7"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  // La nave desciende por la trayectoria a medida que avanzas
  const shipY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experiencia" ref={sectionRef} className="border-t border-starlight/5">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <SectionHeading
          kicker="Experiencia Profesional · Bitácora de misiones"
          title="Trayectoria estelar"
          subtitle="Más de 3 años llevando productos desde la concepción hasta producción, misión por misión."
        />

        <div className="relative ml-2 sm:ml-4">
          {/* Rail de la trayectoria: se dibuja con el scroll */}
          <div aria-hidden className="absolute bottom-2 left-0 top-2 w-px bg-starlight/10" />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute bottom-2 left-0 top-2 w-px origin-top bg-gradient-to-b from-nebula-bright via-comet to-stellar-bright shadow-[0_0_12px_1px] shadow-nebula-bright/40"
          />
          {/* La nave-cometa que recorre la trayectoria */}
          <motion.span
            aria-hidden
            style={{ top: shipY }}
            className="absolute -left-[5px] size-[11px] rounded-full bg-starlight shadow-[0_0_16px_4px] shadow-comet/70"
          />

          <ol className="space-y-14">
            {experience.map((mission, index) => {
              const color = NODE_COLORS[index % NODE_COLORS.length];
              return (
                <motion.li
                  key={mission.company}
                  initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative pl-10 sm:pl-14"
                >
                  {/* Nodo-estrella de la misión */}
                  <span
                    aria-hidden
                    className={`absolute -left-[5px] top-2 size-[11px] rounded-full shadow-[0_0_14px_3px] ${color.star} ${
                      mission.current ? "animate-twinkle" : ""
                    }`}
                  />

                  <article
                    className={`rounded-2xl border bg-graphite/50 p-7 backdrop-blur-md transition-all duration-300 sm:p-8 ${
                      mission.current
                        ? "border-nebula/40 animate-pulse-glow"
                        : "border-starlight/10 hover:border-starlight/20"
                    }`}
                  >
                    <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                      <div>
                        <h3 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-starlight">
                          {mission.url ? (
                            <a
                              href={mission.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 transition-colors hover:text-nebula-bright"
                            >
                              {mission.company}
                              <ExternalLink className="size-4 text-stardust" />
                            </a>
                          ) : (
                            mission.company
                          )}
                          {mission.highlight && (
                            <span className="rounded-full border border-stellar/40 bg-stellar/10 px-3 py-0.5 font-mono text-[11px] font-normal text-stellar-bright">
                              {mission.highlight}
                            </span>
                          )}
                        </h3>
                        <p className={`mt-1 text-sm font-medium ${color.text}`}>{mission.role}</p>
                      </div>
                      <div className="text-right font-mono text-xs text-stardust">
                        <p>{mission.period}</p>
                        <p className="mt-1 flex items-center justify-end gap-1">
                          <MapPin className="size-3" />
                          {mission.location}
                        </p>
                      </div>
                    </header>

                    <ul className="mt-5 space-y-2.5">
                      {mission.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-7 text-stardust">
                          <span aria-hidden className={`mt-2.5 size-1 shrink-0 rounded-full ${color.star}`} />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {mission.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-starlight/10 bg-graphite-light px-2.5 py-1 font-mono text-xs text-stardust"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.li>
              );
            })}
          </ol>

          {/* Formación: el punto de partida del viaje */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-14 pl-10 sm:pl-14"
          >
            <span
              aria-hidden
              className="absolute -left-[5px] top-2 size-[11px] rounded-full bg-starlight/60 shadow-[0_0_10px_2px] shadow-starlight/30"
            />
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {education.map((item) => (
                <p key={item.school} className="flex items-start gap-2.5 text-sm text-stardust">
                  <GraduationCap className="mt-0.5 size-4 shrink-0 text-comet" />
                  <span>
                    <span className="text-starlight">{item.school}</span>
                    <br />
                    {item.degree} · <span className="font-mono text-xs">{item.period}</span>
                  </span>
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
