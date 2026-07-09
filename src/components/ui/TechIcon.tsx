import type { SimpleIcon } from "simple-icons";

/**
 * Logo de tecnología con su color oficial de marca (catálogo simple-icons,
 * el mismo que usa shields.io). Acepta `color` para sobreescribir marcas
 * demasiado oscuras para el fondo espacial (Express, Next.js, PM2...).
 */
export function TechIcon({
  icon,
  color,
  className,
}: {
  icon: SimpleIcon;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
      fill={color ?? `#${icon.hex}`}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
