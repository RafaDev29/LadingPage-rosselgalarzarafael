"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";
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
 * Brotes de rayos gamma del viaje: se disparan en puntos fijos del progreso
 * del scroll. Nombrados como los GRB reales (por fecha) usando hitos de la
 * trayectoria profesional.
 */
const BURSTS = [
  { at: 0.28, top: "16%", angle: -28, name: "GRB 230115A", beam: "via-nebula-bright", glow: "shadow-nebula-bright/80", ring: "border-nebula-bright/60" },
  { at: 0.55, top: "62%", angle: 21, name: "GRB 231120B", beam: "via-stellar-bright", glow: "shadow-stellar/80", ring: "border-stellar-bright/60" },
  { at: 0.8, top: "34%", angle: -15, name: "GRB 250601C", beam: "via-comet", glow: "shadow-comet/80", ring: "border-comet/60" },
];

/**
 * Un brote de rayos gamma: jet de luz que atraviesa el viewport, núcleo
 * brillante y onda expansiva. Todo escalado por el progreso del scroll, así
 * el evento se "reproduce" al avanzar (y al retroceder).
 */
function GammaRayBurst({
  progress,
  at,
  top,
  angle,
  name,
  beam,
  glow,
  ring,
}: (typeof BURSTS)[number] & { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [at - 0.06, at, at + 0.07], [0, 1, 0]);
  const stretch = useTransform(progress, [at - 0.06, at + 0.07], [0.35, 1.4]);
  const ringScale = useTransform(progress, [at - 0.03, at + 0.09], [0.2, 3]);
  const ringOpacity = useTransform(progress, [at - 0.03, at, at + 0.09], [0, 0.6, 0]);

  return (
    <motion.div
      aria-hidden
      style={{ top, opacity, x: "-50%", rotate: angle }}
      className="pointer-events-none absolute left-1/2 z-0 flex w-[120vw] items-center justify-center"
    >
      {/* Jet principal y su halo difuso */}
      <motion.div style={{ scaleX: stretch }} className="absolute inset-x-0">
        <div className={`h-px w-full bg-gradient-to-r from-transparent to-transparent ${beam}`} />
        <div className={`-mt-[2px] h-[3px] w-full bg-gradient-to-r from-transparent to-transparent opacity-60 blur-md ${beam}`} />
      </motion.div>

      {/* Núcleo del estallido */}
      <span className={`relative size-2   bg-starlight shadow-[0_0_30px_10px] ${glow}`} />

      {/* Onda expansiva */}
      <motion.span
        style={{ scale: ringScale, opacity: ringOpacity }}
        className={`absolute size-24   border ${ring}`}
      />

      {/* Designación del evento */}
      <span className="absolute ml-40 font-mono text-[10px] uppercase tracking-[0.25em] text-starlight/70">
        {name}
      </span>
    </motion.div>
  );
}

/**
 * Dimensiones Exploradas: galería horizontal que reacciona al scroll vertical,
 * atravesada por eventos cósmicos:
 * - Brotes de rayos gamma en el 28%, 55% y 80% del viaje (scroll-driven).
 * - Distorsión relativista: el riel se inclina según la VELOCIDAD del scroll
 *   (useVelocity + spring) — a más velocidad, más deformación.
 * - Supernova: el número de cada proyecto emite ondas expansivas en hover.
 */
export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  // Desplazamiento exacto: ancho real del riel menos el viewport, medido en
  // píxeles (un % fijo corta las últimas tarjetas según el tamaño de pantalla)
  const [maxShift, setMaxShift] = useState(0);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () =>
      setMaxShift(Math.min(0, -(track.scrollWidth - window.innerWidth)));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, maxShift]);

  // Distorsión relativista según velocidad de scroll
  const velocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(velocity, { stiffness: 280, damping: 40, mass: 0.8 });
  const skewX = useTransform(smoothVelocity, [-1.2, 1.2], ["4deg", "-4deg"]);

  return (
    <section id="proyectos" ref={sectionRef} className="relative h-[220vh] border-t border-starlight/5">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        {/* Eventos cósmicos del viaje */}
        {BURSTS.map((burst) => (
          <GammaRayBurst key={burst.name} progress={scrollYProgress} {...burst} />
        ))}

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            kicker="Proyectos Destacados"
            title="Dimensiones exploradas"
            subtitle="Cinco sistemas operativos en producción. Mi especialidad: integrar plataformas de rastreo vehicular remoto — señales de flotas enteras cruzando el vacío en tiempo real."
          />
        </div>

        <motion.div
          ref={trackRef}
          style={{ x, skewX }}
          className="relative z-10 flex gap-6 px-[max(1.5rem,calc((100vw-72rem)/2))]"
        >
          {projects.map((project, index) => {
            const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
            return (
              <article
                key={project.name}
                className={`group relative w-[78vw] shrink-0   border border-starlight/10 bg-graphite/50 p-8 backdrop-blur-md transition-all duration-300 sm:w-96 ${accent.card}`}
              >
                <div className="mb-8 flex items-start justify-between">
                  {/* Número con supernova en hover */}
                  <span className="relative inline-block">
                    <span
                      aria-hidden
                      className="absolute -inset-2   border border-current opacity-0 group-hover:animate-ping group-hover:opacity-40"
                    />
                    <span
                      className={`relative font-mono text-4xl font-semibold text-starlight/10 transition-colors duration-300 ${accent.number}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  {project.tracking && (
                    <span className="flex items-center gap-1.5   border border-stellar/40 bg-stellar/10 px-3 py-1 font-mono text-[11px] text-stellar-bright">
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
                      className="  border border-starlight/10 bg-graphite-light px-2.5 py-1 font-mono text-xs text-stardust"
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
            className="flex w-[60vw] shrink-0 items-center justify-center   border border-dashed border-nebula/30 p-8 font-mono text-sm text-nebula-bright transition-colors hover:border-nebula-bright hover:bg-nebula/5 sm:w-72"
          >
            ¿la próxima dimensión? →
          </a>
        </motion.div>

        {/* Barra de progreso del viaje: espectro completo */}
        <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-6">
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
