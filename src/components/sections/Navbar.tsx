"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import {
  BriefcaseBusiness,
  Mail,
  Orbit,
  Rocket,
  Star,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon, GitlabIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/profile";

const NAV_LINKS: { href: string; label: string; short: string; icon: LucideIcon }[] = [
  { href: "#sobre-mi", label: "Sobre mí", short: "Perfil", icon: UserRound },
  { href: "#experiencia", label: "Experiencia", short: "Misiones", icon: BriefcaseBusiness },
  { href: "#habilidades", label: "Habilidades", short: "Skills", icon: Orbit },
  { href: "#proyectos", label: "Proyectos", short: "Proyectos", icon: Rocket },
  { href: "#clientes", label: "Clientes", short: "Clientes", icon: Star },
  { href: "#contacto", label: "Contacto", short: "Señal", icon: Mail },
];

const SOCIALS = [
  { href: profile.links.github, label: "GitHub", Icon: GithubIcon, hover: "hover:text-nebula-bright" },
  { href: profile.links.gitlab, label: "GitLab", Icon: GitlabIcon, hover: "hover:text-stellar-bright" },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedinIcon, hover: "hover:text-comet" },
];

/**
 * Navegación en dos piezas:
 *
 * Desktop → isla flotante superior: se esconde al bajar y regresa al subir,
 * cápsula luminosa que se desliza a la sección activa, línea de espectro
 * como progreso del viaje.
 *
 * Móvil → arriba solo una mini-píldora con el logo y las redes; la navegación
 * vive en un DOCK INFERIOR estilo app (zona del pulgar): un ícono por sección,
 * halo violeta que viaja al ícono activo (layoutId) y respeto del safe-area
 * de iOS. Sin hamburguesas ni overlays: cualquier sección a un toque.
 */
export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });

  // La isla superior se esconde al bajar y reaparece al subir
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 160);
  });

  // Sección activa según el viewport
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (el): el is Element => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── Isla superior ─── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -96 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        style={{ x: "-50%" }}
        className="fixed left-1/2 top-4 z-50 w-[min(92vw,52rem)]"
      >
        <nav className="relative flex h-14 items-center justify-between   border border-starlight/10 bg-abyss/70 px-5 shadow-[0_8px_40px_-12px_rgba(139,92,246,0.35)] backdrop-blur-xl">
          <a href="#" className="group font-mono text-sm tracking-tight text-starlight">
            <span
              aria-hidden
              className="mr-2 inline-block text-stellar-bright transition-transform duration-300 group-hover:-rotate-12"
            >
              ᓚᘏᗢ
            </span>
            <span className="text-nebula-bright">~/</span>
            {profile.alias}
            <span className="animate-twinkle text-comet">_</span>
          </a>

          {/* Enlaces con cápsula deslizante de sección activa (solo desktop) */}
          <ul className="hidden items-center gap-1 text-sm text-stardust md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`relative block   px-3.5 py-1.5 transition-colors ${
                    active === link.href ? "text-starlight" : "hover:text-starlight"
                  }`}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0   border border-nebula/40 bg-nebula/15 shadow-[0_0_18px_-4px] shadow-nebula-bright/60"
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Redes: visibles también en móvil */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ href, label, Icon, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-stardust transition-colors ${hover}`}
              >
                <Icon className="size-4.5" />
              </a>
            ))}
          </div>

          {/* Línea de espectro: progreso del viaje */}
          <motion.div
            style={{ scaleX: progress }}
            className="absolute inset-x-8 bottom-0 h-px origin-left bg-gradient-to-r from-nebula-bright via-comet to-stellar-bright"
          />
        </nav>
      </motion.header>

      {/* ─── Dock inferior (solo móvil): navegación en la zona del pulgar ─── */}
      <motion.nav
        aria-label="Navegación por secciones"
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 26, delay: 0.4 }}
        style={{ x: "-50%" }}
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-50 md:hidden"
      >
        <ul className="flex items-center gap-0.5   border border-starlight/10 bg-abyss/85 px-2 py-2 shadow-[0_8px_40px_-8px_rgba(139,92,246,0.45)] backdrop-blur-xl">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.href;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="relative flex flex-col items-center gap-0.5   px-2.5 py-1.5"
                >
                  {isActive && (
                    <motion.span
                      layoutId="dock-active"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0   border border-nebula/40 bg-nebula/20 shadow-[0_0_20px_-4px] shadow-nebula-bright/70"
                    />
                  )}
                  <Icon
                    className={`relative size-5 transition-colors ${
                      isActive ? "text-starlight" : "text-stardust"
                    }`}
                  />
                  <span
                    className={`relative text-[9px] font-medium tracking-wide transition-colors ${
                      isActive ? "text-nebula-bright" : "text-stardust/70"
                    }`}
                  >
                    {link.short}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </>
  );
}
