"use client";

import { motion, type Variants } from "framer-motion";
import {
  Cloud,
  Database,
  Radio,
  Server,
  Smartphone,
  Sparkles,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import { MagneticCard } from "@/components/motion/MagneticCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { exploring, skills, type SkillCategory, type SkillItem } from "@/lib/profile";

const ICONS: Record<SkillCategory["icon"], LucideIcon> = {
  server: Server,
  cloud: Cloud,
  smartphone: Smartphone,
  sparkles: Sparkles,
  database: Database,
};

/**
 * Cada categoría es un tipo de astro distinto, con su propio color espectral.
 * (Clases estáticas para Tailwind v4.)
 */
const ACCENTS: Record<string, { icon: string; card: string; star: string }> = {
  backend: {
    icon: "text-comet",
    card: "hover:border-comet/50 hover:shadow-[0_0_70px_-18px] hover:shadow-comet",
    star: "estrella azul · clase O",
  },
  cloud: {
    icon: "text-stellar-bright",
    card: "hover:border-stellar/50 hover:shadow-[0_0_70px_-18px] hover:shadow-stellar",
    star: "estrella dorada · clase G",
  },
  frontend: {
    icon: "text-nebula-bright",
    card: "hover:border-nebula/50 hover:shadow-[0_0_70px_-18px] hover:shadow-nebula-bright",
    star: "nebulosa violeta",
  },
  databases: {
    icon: "text-starlight",
    card: "hover:border-starlight/40 hover:shadow-[0_0_70px_-18px] hover:shadow-starlight",
    star: "enana blanca",
  },
};

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
};

/**
 * Respaldo para tecnologías sin logo en simple-icons: AWS (retirado por
 * marca registrada) y WebSockets (protocolo, no producto).
 */
const FALLBACK_ICONS: Record<string, LucideIcon> = {
  AWS: Cloud,
  WebSockets: Radio,
};

/** Chip de tecnología con el logo oficial de la marca */
function TechChip({ item }: { item: SkillItem }) {
  const Fallback = FALLBACK_ICONS[item.name] ?? Sparkles;
  return (
    <li className="flex items-center gap-2.5   border border-starlight/10 bg-graphite-light px-3 py-2 text-sm text-stardust transition-colors group-hover:text-starlight">
      {item.icon ? (
        <TechIcon icon={item.icon} color={item.color} className="size-4 shrink-0" />
      ) : (
        <Fallback className="size-4 shrink-0" style={{ color: item.color }} />
      )}
      {item.name}
    </li>
  );
}

/**
 * Mis Habilidades Cósmicas: tarjetas con gravedad/magnetismo (MagneticCard),
 * cada tecnología con su logo y color de marca reales. La "Skill Estelar"
 * (DDD & Microservicios) es la supernova: fila completa, halo pulsante.
 */
export function Skills() {
  return (
    <section id="habilidades" className="border-t border-starlight/5">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <SectionHeading
          kicker="Tech Stack & Advanced Skills"
          title="Mis habilidades cósmicas"
          subtitle="Cada tecnología es un cuerpo celeste con su propio color espectral. Acércate: tienen su propia gravedad."
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {skills.map((category) => {
            const Icon = ICONS[category.icon];

            if (category.featured) {
              return (
                <motion.div key={category.id} variants={card} className="sm:col-span-2">
                  <MagneticCard
                    strength={0.08}
                    className="group relative overflow-hidden   border border-nebula/40 bg-graphite/60 p-8 backdrop-blur-md animate-pulse-glow sm:p-10"
                  >
                    {/* Órbita decorativa de fondo */}
                    <div
                      aria-hidden
                      className="absolute -right-24 -top-24 size-72 animate-orbit   border border-dashed border-nebula/20"
                    />
                    <div aria-hidden className="absolute -right-24 -top-24 size-72">
                      <span className="absolute bottom-6 left-8 size-2   bg-stellar-bright/80" />
                    </div>

                    <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-stellar-bright">
                      <Sparkles className="size-3.5" />
                      {category.flavor} · supernova
                    </p>
                    <h3 className="max-w-2xl text-2xl font-semibold tracking-tight text-starlight sm:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-stardust">
                      El corazón de mis diseños: dominios bien delimitados, APIs REST y
                      microservicios que escalan de forma independiente, con pipelines que los
                      despliegan a la nube sin perder la coherencia del universo.
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2.5">
                      {category.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center gap-2   border border-nebula/30 bg-nebula/10 px-4 py-1.5 font-mono text-sm text-nebula-bright"
                        >
                          {item.icon && (
                            <TechIcon
                              icon={item.icon}
                              color={item.color}
                              className="size-4 shrink-0"
                            />
                          )}
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </MagneticCard>
                </motion.div>
              );
            }

            const accent = ACCENTS[category.id];
            return (
              <motion.div key={category.id} variants={card}>
                <MagneticCard
                  className={`group h-full   border border-starlight/10 bg-graphite/50 p-7 backdrop-blur-md transition-all duration-300 ${accent.card}`}
                >
                  <Icon
                    className={`mb-5 size-6 transition-transform duration-300 group-hover:scale-110 ${accent.icon}`}
                  />
                  <h3 className="text-lg font-semibold text-starlight">{category.title}</h3>
                  <p className="mt-1 font-mono text-xs text-stardust">{accent.star}</p>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {category.items.map((item) => (
                      <TechChip key={item.name} item={item} />
                    ))}
                  </ul>
                </MagneticCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Señales lejanas: tecnologías en exploración, con menor peso visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-stardust">
            <Telescope className="size-3.5 text-comet" />
            señales lejanas · en exploración
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {exploring.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2   border border-starlight/5 bg-graphite/40 px-3 py-1.5 text-xs text-stardust opacity-75 transition-opacity hover:opacity-100"
              >
                {item.icon && (
                  <TechIcon icon={item.icon} color={item.color} className="size-3.5 shrink-0" />
                )}
                {item.name}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
