"use client";

import { motion } from "framer-motion";
import { CatConstellation } from "@/components/ui/CatConstellation";
import { MiniCatConstellation, type CatPose } from "@/components/ui/MiniCatConstellation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/lib/profile";

/**
 * Ficha astronómica de cada aliada: pose felina de su constelación,
 * color de su estrella dominante, coordenadas celestes y ritmo de flotación.
 */
const CATALOG: {
  pose: CatPose;
  poseName: string;
  coords: string;
  dot: string;
  glow: string;
  duration: number;
  delay: number;
}[] = [
  {
    pose: "acecho",
    poseName: "Felis Iuridica",
    coords: "α 04h 12m · δ −08° 31′",
    dot: "bg-nebula-bright",
    glow: "hover:border-nebula/50 hover:shadow-[0_0_70px_-18px] hover:shadow-nebula-bright",
    duration: 7.2,
    delay: 0,
  },
  {
    pose: "sentado",
    poseName: "Felis Satellitis",
    coords: "α 11h 47m · δ +23° 05′",
    dot: "bg-stellar-bright",
    glow: "hover:border-stellar/50 hover:shadow-[0_0_70px_-18px] hover:shadow-stellar",
    duration: 8.1,
    delay: 0.5,
  },
  {
    pose: "estirado",
    poseName: "Felis Navigans",
    coords: "α 19h 03m · δ −41° 58′",
    dot: "bg-comet",
    glow: "hover:border-comet/50 hover:shadow-[0_0_70px_-18px] hover:shadow-comet",
    duration: 6.6,
    delay: 1,
  },
  {
    pose: "dormido",
    poseName: "Felis Vigilans",
    coords: "α 07h 29m · δ +02° 44′",
    dot: "bg-starlight",
    glow: "hover:border-starlight/40 hover:shadow-[0_0_70px_-18px] hover:shadow-starlight",
    duration: 7.7,
    delay: 0.3,
  },
];

/**
 * Constelaciones Aliadas: un catálogo astronómico de clientes. Cada aliada
 * es una constelación felina única (gato al acecho, sentado, estirándose,
 * dormido) cuyos hilos se encienden al pasar el cursor, con designación en
 * latín, coordenadas celestes y la misión que cumplo en su sistema.
 */
export function Clients() {
  return (
    <section id="clientes" className="relative overflow-hidden border-t border-starlight/5">
      {/* Órbitas de fondo cruzando la sección */}
      <div
        aria-hidden
        className="absolute -left-40 top-24 size-[42rem] rounded-full border border-dashed border-nebula/8"
      />
      <div
        aria-hidden
        className="absolute -right-56 bottom-10 size-[36rem] rounded-full border border-dashed border-stellar/8"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Mis Clientes · Catálogo estelar"
            title="Constelaciones aliadas"
            subtitle="Cada aliada es una constelación felina en mi cielo: sistemas con los que navego actualmente, unidos por hilos de gravedad mutua."
          />
          {/* El sistema binario central custodiado por el gato mayor */}
          <div aria-hidden className="relative hidden h-40 w-56 sm:block">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit [animation-duration:26s]">
              <span className="absolute -left-10 -top-1 size-3 rounded-full bg-nebula-bright shadow-[0_0_30px_7px] shadow-nebula-bright/40" />
              <span className="absolute left-10 -top-1 size-2 rounded-full bg-stellar-bright shadow-[0_0_24px_5px] shadow-stellar/40" />
            </div>
            <CatConstellation className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 opacity-60" />
          </div>
        </div>

        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {clients.map((client, index) => {
            const entry = CATALOG[index % CATALOG.length];
            return (
              <motion.article
                key={client.name}
                initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: entry.delay * 0.4, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: entry.duration,
                    delay: entry.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`group relative h-full overflow-hidden rounded-2xl border border-starlight/10 bg-graphite/50 backdrop-blur-md transition-all duration-300 ${entry.glow}`}
                >
                  {/* Cielo de la constelación felina */}
                  <div className="relative border-b border-starlight/5 bg-abyss/50">
                    <MiniCatConstellation pose={entry.pose} className="mx-auto h-32 w-auto" />
                    {/* Ficha de catálogo sobre el cielo */}
                    <p className="absolute left-5 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-stardust/70">
                      {entry.poseName}
                    </p>
                    <p className="absolute right-5 top-4 font-mono text-[10px] text-stardust/50">
                      {entry.coords}
                    </p>
                  </div>

                  <div className="p-7">
                    <header className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className={`mt-1.5 size-2 shrink-0 animate-twinkle rounded-full ${entry.dot}`}
                      />
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-starlight">
                          {client.name}
                        </h3>
                        <p className="mt-0.5 font-mono text-[11px] text-stardust/80">
                          {client.fullName && `${client.fullName} · `}
                          <span className="text-nebula-bright/90">sector {client.sector}</span>
                        </p>
                      </div>
                    </header>

                    <p className="mt-4 text-sm leading-7 text-stardust">{client.service}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {client.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-starlight/10 bg-graphite-light px-2.5 py-1 font-mono text-xs text-stardust"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
