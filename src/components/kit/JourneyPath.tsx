const MARCOS = [
  "Objetivo",
  "Competências",
  "Currículo",
  "Candidatura",
  "Entrevista",
] as const;

const POINTS = [
  { x: 40, y: 168 },
  { x: 150, y: 96 },
  { x: 268, y: 150 },
  { x: 386, y: 78 },
  { x: 496, y: 132 },
];

/**
 * Linha de percurso desenhada entre os cinco marcos do método.
 * `tone` alterna o contraste para fundos escuros ou claros.
 */
export function JourneyPath({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const stroke = tone === "dark" ? "var(--color-teal-soft)" : "var(--color-teal)";
  const label = tone === "dark" ? "var(--color-aqua)" : "var(--color-navy)";
  const faint = tone === "dark" ? "var(--color-teal)" : "var(--color-slate-support)";

  const d =
    "M 40 168 C 90 190, 100 96, 150 96 S 220 176, 268 150 S 340 70, 386 78 S 460 150, 496 132";


  return (
    <svg
      viewBox="0 0 536 220"
      className="h-auto w-full"
      role="img"
      aria-label="Percurso do método: objetivo, competências, currículo, candidatura e entrevista"
    >
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth="1.75"
        strokeLinecap="round"
        className="path-draw"
        opacity="0.9"
      />
      <path
        d={d}
        fill="none"
        stroke={faint}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.08"
      />
      {POINTS.map((p, i) => (
        <g key={MARCOS[i]}>
          <circle
            cx={p.x}
            cy={p.y}
            r="5"
            fill={stroke}
            className="node-pulse"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
          <circle cx={p.x} cy={p.y} r="12" fill="none" stroke={stroke} strokeWidth="0.75" opacity="0.35" />
          <text
            x={p.x}
            y={p.y - 24}
            textAnchor="middle"
            fill={label}
            style={{ fontSize: "13px", letterSpacing: "0.04em" }}
          >
            {MARCOS[i]}
          </text>
          <text
            x={p.x}
            y={p.y + 28}
            textAnchor="middle"
            fill={faint}
            style={{ fontSize: "10px", letterSpacing: "0.18em" }}
          >
            {String(i + 1).padStart(2, "0")}
          </text>
        </g>
      ))}
    </svg>
  );
}
