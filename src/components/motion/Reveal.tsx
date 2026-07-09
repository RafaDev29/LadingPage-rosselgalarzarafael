"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Revelado "desde el vacío": blur + desplazamiento que se disuelven al entrar
 * en viewport. Único límite cliente/servidor reutilizable — las secciones que
 * recibe como children pueden seguir siendo Server Components.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 36, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
