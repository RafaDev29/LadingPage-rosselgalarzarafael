/**
 * Fondo de polvo estelar — Server Component, CSS puro (cero JS al cliente).
 *
 * Los astros no son de un solo color: hay estrellas blancas, violetas,
 * doradas y azules, como en un cielo real.
 */
export function Starfield() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Capa 1: nebulosas violeta (arriba) y dorada (abajo) con un velo azul */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 45% at 18% -8%, rgba(139, 92, 246, 0.16), transparent 65%),
            radial-gradient(ellipse 55% 40% at 85% 15%, rgba(125, 211, 252, 0.05), transparent 60%),
            radial-gradient(ellipse 65% 45% at 75% 105%, rgba(214, 154, 69, 0.1), transparent 65%)
          `,
        }}
      />

      {/* Capa 2: polvo estelar fino multicolor */}
      <div
        className="absolute inset-0 animate-twinkle-slow"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 22px 34px, rgba(238, 241, 248, 0.8), transparent),
            radial-gradient(1px 1px at 118px 92px, rgba(238, 241, 248, 0.5), transparent),
            radial-gradient(1px 1px at 187px 158px, rgba(167, 139, 250, 0.6), transparent),
            radial-gradient(1px 1px at 66px 201px, rgba(125, 211, 252, 0.5), transparent),
            radial-gradient(1px 1px at 244px 55px, rgba(242, 200, 121, 0.55), transparent)
          `,
          backgroundSize: "280px 280px",
        }}
      />

      {/* Capa 3: estrellas más brillantes, patrón más disperso */}
      <div
        className="absolute inset-0 animate-twinkle"
        style={{
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 84px 130px, rgba(238, 241, 248, 0.9), transparent),
            radial-gradient(2px 2px at 300px 40px, rgba(167, 139, 250, 0.7), transparent),
            radial-gradient(1.5px 1.5px at 410px 320px, rgba(242, 200, 121, 0.65), transparent)
          `,
          backgroundSize: "520px 460px",
        }}
      />
    </div>
  );
}
