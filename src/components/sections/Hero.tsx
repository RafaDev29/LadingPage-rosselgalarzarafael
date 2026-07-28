"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { CatConstellation } from "@/components/ui/CatConstellation";
import { profile } from "@/lib/profile";

/**
 * La Constelación Madre.
 *
 * Una galaxia espiral violeta-dorada gira lentamente y, frente a ella, el
 * gato-constelación custodia el sistema. Al hacer scroll (useScroll +
 * useTransform), la galaxia se contrae girando sobre sí misma y el gato se
 * disuelve elevándose en polvo de estrellas. Tres estrellas fugaces cruzan
 * el cielo a distinto ritmo.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // La galaxia colapsa girando mientras abandonas el sistema
  const galaxyScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const galaxyRotate = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const galaxyOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  // El gato se eleva y se disuelve en polvo de estrellas
  const catY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const catScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const catOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  // El contenido se hunde suavemente
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={sectionRef} className="relative flex min-h-svh items-center overflow-hidden">
      {/* ─── Estrellas fugaces ─── */}
      {[
        { top: "12%", right: "-5%", delay: "0s" },
        { top: "30%", right: "-12%", delay: "4.5s" },
        { top: "6%", right: "35%", delay: "10s" },
      ].map((star) => (
        <span
          key={star.delay}
          aria-hidden
          style={{ top: star.top, right: star.right, animationDelay: star.delay }}
          className="absolute h-px w-36 -rotate-[35deg] animate-shooting bg-gradient-to-l from-starlight via-comet/60 to-transparent"
        />
      ))}

      {/* ─── La Galaxia ─── */}
      <motion.div
        aria-hidden
        style={{ scale: galaxyScale, rotate: galaxyRotate, opacity: galaxyOpacity }}
        className="absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 sm:size-[36rem] lg:left-[68%] lg:size-[42rem]"
      >
        {/* Brazos espirales multicolor girando */}
        <div
          className="absolute inset-0 animate-orbit   [animation-duration:70s]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(167,139,250,0.32) 50deg, transparent 110deg, rgba(242,200,121,0.22) 170deg, transparent 230deg, rgba(125,211,252,0.2) 290deg, transparent 360deg)",
            filter: "blur(24px)",
          }}
        />

        {/* Núcleo galáctico: resplandor cálido y difuso, sin mirada */}
        <div
          className="absolute inset-[28%]  "
          style={{
            background:
              "radial-gradient(circle, rgba(242,200,121,0.35), rgba(167,139,250,0.22) 45%, transparent 70%)",
            filter: "blur(14px)",
          }}
        />

        {/* Anillo de polvo orbital */}
        <div
          className="absolute inset-10 animate-orbit   border border-dashed border-nebula-bright/15"
          style={{ animationDirection: "reverse", animationDuration: "110s" }}
        >
          <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2   bg-comet/90 shadow-[0_0_12px_2px] shadow-comet/50" />
          <span className="absolute bottom-6 right-10 size-2   bg-stellar-bright/90 shadow-[0_0_12px_2px] shadow-stellar/50" />
        </div>
      </motion.div>

      {/* ─── El gato guardián ─── */}
      <motion.div
        aria-hidden
        style={{ y: catY, scale: catScale, opacity: catOpacity }}
        className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:left-[68%] lg:block"
      >
        <CatConstellation className="w-80" />
      </motion.div>

      {/* ─── Contenido ─── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-16"
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-nebula-bright"
          >
            <span aria-hidden className="text-stellar-bright">
              ᓚᘏᗢ
            </span>
            {profile.role} · {profile.alias}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-starlight sm:text-6xl lg:text-7xl"
          >
            Backend que{" "}
            <span className="bg-gradient-to-r from-nebula-bright via-comet to-stellar-bright bg-clip-text text-transparent">
              orbita estable
            </span>{" "}
            bajo cualquier gravedad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-8 text-stardust"
          >
            {profile.name}. {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#habilidades"
              className="  bg-nebula px-7 py-3 text-sm font-medium text-starlight shadow-[0_0_50px_-12px] shadow-nebula-bright transition-colors hover:bg-nebula-bright hover:text-abyss"
            >
              Explorar el sistema
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contacto"
              className="  border border-stellar/40 px-7 py-3 text-sm font-medium text-stellar-bright backdrop-blur-sm transition-colors hover:border-stellar-bright hover:bg-stellar/10"
            >
              Enviar señal
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#sobre-mi"
        aria-label="Bajar a la siguiente sección"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stardust"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
