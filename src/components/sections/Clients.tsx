"use client";

import { motion } from "framer-motion";
import { CatConstellation } from "@/components/ui/CatConstellation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/lib/profile";

/**
 * Constelaciones Aliadas: en el centro, un sistema binario (un sol violeta y
 * otro dorado orbitándose) custodiado por el gato-constelación; los 5
 * clientes flotan alrededor como estrellas, cada una de un color distinto.
 */

// Posición, ritmo de flotación y color de cada cliente-estrella
const ORBITS = [
  { top: "8%", left: "12%", duration: 6.5, delay: 0, dot: "bg-nebula-bright" },
  { top: "18%", left: "68%", duration: 7.8, delay: 0.6, dot: "bg-stellar-bright" },
  { top: "58%", left: "78%", duration: 6.2, delay: 1.2, dot: "bg-comet" },
  { top: "72%", left: "18%", duration: 8.4, delay: 0.3, dot: "bg-starlight" },
  { top: "42%", left: "2%", duration: 7.1, delay: 0.9, dot: "bg-nebula-bright" },
];

export function Clients() {
  return (
    <section id="clientes" className="border-t border-starlight/5">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <SectionHeading
          kicker="Mis Clientes"
          title="Constelaciones aliadas"
          subtitle="Cinco sistemas con los que navego actualmente, unidos por hilos de gravedad mutua."
        />

        <div className="relative mx-auto h-[26rem] max-w-3xl sm:h-[30rem]">
          {/* Sistema binario central: sol violeta + sol dorado */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit [animation-duration:26s]"
          >
            <span className="absolute -left-12 -top-1.5 size-3.5 rounded-full bg-nebula-bright shadow-[0_0_35px_8px] shadow-nebula-bright/40" />
            <span className="absolute left-12 -top-1 size-2.5 rounded-full bg-stellar-bright shadow-[0_0_28px_6px] shadow-stellar/40" />
          </div>

          {/* Órbita visible del sistema */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-starlight/10 sm:size-80"
          />

          {/* El guardián de la constelación */}
          <CatConstellation className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 opacity-70 sm:w-52" />

          {/* Clientes flotando como estrellas de distintos colores */}
          {clients.map((client, index) => {
            const orbit = ORBITS[index % ORBITS.length];
            return (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: orbit.delay }}
                style={{ top: orbit.top, left: orbit.left }}
                className="absolute"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: orbit.duration,
                    delay: orbit.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2.5 rounded-full border border-starlight/10 bg-graphite/60 px-4 py-2 backdrop-blur-md transition-colors hover:border-nebula/50"
                >
                  <span className={`size-1.5 animate-twinkle rounded-full ${orbit.dot}`} />
                  <span className="whitespace-nowrap font-mono text-xs text-starlight sm:text-sm">
                    {client}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
