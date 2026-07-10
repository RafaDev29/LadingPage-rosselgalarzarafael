/**
 * Constelaciones felinas en miniatura — cuatro gatos en poses distintas,
 * dibujados como estrellas conectadas por hilos de constelación.
 * Las líneas se "encienden" cuando la tarjeta contenedora (group) recibe hover.
 */

export type CatPose = "sentado" | "dormido" | "acecho" | "estirado";

type Pattern = {
  /** Trazo principal de la silueta */
  body: readonly (readonly [number, number])[];
  /** Trazo secundario (cola u oreja) */
  tail: readonly (readonly [number, number])[];
};

const PATTERNS: Record<CatPose, Pattern> = {
  // Sentado, erguido como guardián
  sentado: {
    body: [
      [72, 16], [84, 28], [96, 12], [106, 32],
      [116, 58], [112, 88], [86, 88], [70, 62], [62, 36], [72, 16],
    ],
    tail: [[112, 88], [132, 82], [140, 62]],
  },
  // Ovillado, durmiendo
  dormido: {
    body: [
      [70, 44], [88, 32], [110, 30], [130, 38], [142, 54],
      [138, 74], [118, 86], [92, 88], [70, 78], [60, 60], [70, 44],
    ],
    tail: [[70, 78], [90, 68], [110, 64], [124, 56]],
  },
  // Al acecho, cuerpo bajo y alargado
  acecho: {
    body: [
      [24, 56], [34, 42], [42, 52], [52, 40], [60, 52],
      [88, 48], [116, 46], [140, 52], [152, 64],
      [144, 82], [116, 88], [84, 86], [52, 82], [30, 72], [24, 56],
    ],
    tail: [[152, 64], [168, 48], [164, 28]],
  },
  // Estirándose: cabeza abajo, lomo en arco
  estirado: {
    body: [
      [24, 62], [32, 48], [40, 58], [48, 46], [56, 58],
      [52, 82], [68, 92], [90, 78], [112, 56], [132, 44],
      [142, 64], [134, 88], [114, 94],
    ],
    tail: [[132, 44], [148, 30], [164, 36]],
  },
};

const STAR_COLORS = [
  "var(--color-nebula-bright)",
  "var(--color-stellar-bright)",
  "var(--color-comet)",
  "var(--color-starlight)",
];

export function MiniCatConstellation({
  pose,
  className = "",
}: {
  pose: CatPose;
  className?: string;
}) {
  const pattern = PATTERNS[pose];
  const stars = [...pattern.body.slice(0, -1), ...pattern.tail];

  return (
    <svg
      viewBox="0 0 190 110"
      role="img"
      aria-label={`Constelación de gato ${pose}`}
      className={className}
    >
      {/* Hilos de la constelación: se encienden con el hover de la tarjeta */}
      <polyline
        points={pattern.body.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke="var(--color-nebula-bright)"
        strokeWidth={0.7}
        className="opacity-25 transition-opacity duration-500 group-hover:opacity-70"
      />
      <polyline
        points={pattern.tail.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke="var(--color-stellar-bright)"
        strokeWidth={0.7}
        className="opacity-30 transition-opacity duration-500 group-hover:opacity-80"
      />

      {/* Astros multicolor en cada vértice */}
      {stars.map(([x, y], i) => (
        <circle
          key={`${x}-${y}-${i}`}
          cx={x}
          cy={y}
          r={i % 4 === 0 ? 2 : 1.2}
          fill={i % 4 === 0 ? STAR_COLORS[(i / 4) % STAR_COLORS.length | 0] : "var(--color-starlight)"}
          className="animate-twinkle"
          style={{ animationDelay: `${(i * 0.35) % 2.8}s` }}
        />
      ))}
    </svg>
  );
}
