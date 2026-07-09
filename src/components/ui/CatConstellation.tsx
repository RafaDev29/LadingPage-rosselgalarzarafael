/**
 * Isotipo: constelación con silueta de gato sentado — Server Component (SVG estático).
 * Las estrellas de sus vértices son de distintos colores (blancas, violetas,
 * doradas y azules, como los astros reales) y parpadean con delays escalonados.
 */

const LINE = [
  // Cabeza: oreja izq → entrecejo → oreja der → mejilla derecha
  [70, 22],
  [88, 34],
  [106, 18],
  [120, 40],
  // Lomo descendiendo hasta la base
  [138, 66],
  [152, 98],
  [158, 132],
  [150, 162],
  // Patas delanteras y pecho, cerrando hacia la oreja izquierda
  [120, 168],
  [94, 168],
  [82, 140],
  [72, 108],
  [64, 70],
  [64, 44],
  [70, 22],
] as const;

const TAIL = [
  // La cola nace en la base y se curva hacia arriba
  [150, 162],
  [172, 172],
  [188, 158],
  [192, 136],
] as const;

// Estrellas destacadas (más grandes) y ciclo de colores estelares
const BRIGHT = new Set([0, 2, 5, 7, 9, 12, 16]);
const STAR_COLORS = [
  "var(--color-nebula-bright)",
  "var(--color-stellar-bright)",
  "var(--color-comet)",
  "var(--color-starlight)",
];

export function CatConstellation({ className = "" }: { className?: string }) {
  const stars = [...LINE.slice(0, -1), ...TAIL.slice(1)];

  return (
    <svg
      viewBox="0 0 220 200"
      role="img"
      aria-label="Constelación con forma de gato"
      className={`animate-float ${className}`}
    >
      {/* Líneas finas de constelación */}
      <polyline
        points={LINE.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke="var(--color-nebula-bright)"
        strokeOpacity={0.28}
        strokeWidth={0.8}
      />
      <polyline
        points={TAIL.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke="var(--color-stellar-bright)"
        strokeOpacity={0.35}
        strokeWidth={0.8}
      />

      {/* Estrellas en cada vértice, cada astro con su color */}
      {stars.map(([x, y], i) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={BRIGHT.has(i) ? 2.4 : 1.3}
          fill={BRIGHT.has(i) ? STAR_COLORS[i % STAR_COLORS.length] : "var(--color-starlight)"}
          className="animate-twinkle"
          style={{ animationDelay: `${(i * 0.4) % 3}s` }}
        />
      ))}

      {/* El guiño del gato: una estrella dorada donde iría el ojo */}
      <circle cx={92} cy={52} r={1.8} fill="var(--color-stellar-bright)" className="animate-twinkle-slow" />
    </svg>
  );
}
