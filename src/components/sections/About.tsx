"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/lib/profile";

const NARRATIVE =
  "Desarrollador Backend con más de 3 años navegando el ecosistema Node.js: arquitecturas escalables con DDD y Clean Architecture sobre NestJS e infraestructura AWS. Cofundador de QhatuPE, plataforma SaaS de e-commerce con más de 100 tiendas activas en producción. Llevo productos desde la concepción hasta producción — serverless, monitoreo en tiempo real e integración de IA — y cuando la misión lo pide, piloteo el frontend con Next.js y Vue.";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.022, delayChildren: 0.15 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
};

const TELEMETRY = [
  { label: "sector", value: "ecosistema Node.js" },
  { label: "propulsión", value: "NestJS · AWS · DDD" },
  { label: "misión", value: "APIs REST · microservicios · CI/CD" },
  { label: "insignia", value: "cofundador · QhatuPE" },
  { label: "copiloto", value: "ᓚᘏᗢ michi a bordo" },
  { label: "estado", value: "en órbita estable" },
];

/**
 * Navegando el Espacio-Tiempo: la narrativa emerge palabra por palabra desde
 * el vacío, y las dos columnas derivan a velocidades distintas con el scroll
 * (parallax con useScroll + useTransform), como cuerpos con masas diferentes.
 */
export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const panelY = useTransform(scrollYProgress, [0, 1], [56, -56]);

  return (
    <section id="sobre-mi" ref={sectionRef} className="relative border-t border-starlight/5">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-32 lg:grid-cols-5">
        <motion.div style={{ y: textY }} className="lg:col-span-3">
          <SectionHeading kicker="Sobre mí · Navegando el espacio-tiempo" title={profile.name} />

          <motion.p
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl text-xl leading-9 text-stardust"
          >
            {NARRATIVE.split(" ").map((token, i) => (
              <motion.span key={i} variants={word} className="inline-block whitespace-pre">
                {token}{" "}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Panel de telemetría de la nave — deriva más rápido: masa menor */}
        <motion.div style={{ y: panelY }} className="self-center lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-2xl border border-starlight/10 bg-graphite/50 p-7 backdrop-blur-md"
          >
            <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-nebula-bright">
              <span className="size-1.5 animate-twinkle rounded-full bg-nebula-bright" />
              telemetría / {profile.alias}
            </p>
            <dl className="space-y-4 font-mono text-sm">
              {TELEMETRY.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-starlight/5 pb-3 last:border-0"
                >
                  <dt className="text-stardust">{row.label}</dt>
                  <dd className="text-right text-starlight">{row.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
