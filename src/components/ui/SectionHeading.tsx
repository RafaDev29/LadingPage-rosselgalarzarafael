/**
 * Encabezado de sección con kicker en mono, estrella y línea que se desvanece.
 */
export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-nebula-bright">
        <span className="inline-block h-px w-8 bg-gradient-to-r from-transparent to-nebula-bright" />
        <span aria-hidden className="animate-twinkle text-stellar-bright">
          ✦
        </span>
        {kicker}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-starlight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-stardust">{subtitle}</p>}
    </div>
  );
}
