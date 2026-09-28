/** Elementos decorativos: ficha de vaga, folha de currículo e checklist. */

export function JobCard({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 112" className={className} aria-hidden="true">
      <rect x="1" y="1" width="178" height="110" rx="8" fill="var(--color-card)" opacity="0.97" />
      <rect x="1" y="1" width="178" height="110" rx="8" fill="none" stroke="var(--color-border)" />
      <rect x="14" y="16" width="34" height="8" rx="4" fill="var(--color-teal)" opacity="0.7" />
      <rect x="14" y="34" width="112" height="7" rx="3.5" fill="var(--color-navy)" opacity="0.75" />
      <rect x="14" y="50" width="74" height="6" rx="3" fill="var(--color-slate-support)" opacity="0.45" />
      <rect x="14" y="66" width="140" height="1" fill="var(--color-border)" />
      <rect x="14" y="78" width="46" height="16" rx="8" fill="var(--color-aqua)" />
      <rect x="68" y="78" width="40" height="16" rx="8" fill="var(--color-sand)" />
    </svg>
  );
}

export function ResumeSheet({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 172" className={className} aria-hidden="true">
      <rect x="1" y="1" width="138" height="170" rx="6" fill="var(--color-card)" opacity="0.97" />
      <rect x="1" y="1" width="138" height="170" rx="6" fill="none" stroke="var(--color-border)" />
      <circle cx="26" cy="26" r="9" fill="var(--color-aqua)" />
      <rect x="42" y="20" width="56" height="6" rx="3" fill="var(--color-navy)" opacity="0.8" />
      <rect x="42" y="32" width="34" height="5" rx="2.5" fill="var(--color-slate-support)" opacity="0.5" />
      {[52, 66, 80, 94, 116, 130, 144].map((y, i) => (
        <rect
          key={y}
          x="18"
          y={y}
          width={i % 3 === 0 ? 104 : i % 3 === 1 ? 86 : 68}
          height="4"
          rx="2"
          fill="var(--color-slate-support)"
          opacity="0.32"
        />
      ))}
      <rect x="18" y="104" width="30" height="4" rx="2" fill="var(--color-teal)" opacity="0.8" />
    </svg>
  );
}

export function Checklist({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 118" className={className} aria-hidden="true">
      <rect x="1" y="1" width="148" height="116" rx="8" fill="var(--color-sand)" />
      <rect x="1" y="1" width="148" height="116" rx="8" fill="none" stroke="var(--color-border)" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(18 ${18 + i * 24})`}>
          <rect width="14" height="14" rx="4" fill="none" stroke="var(--color-teal)" strokeWidth="1.4" />
          {i < 2 && (
            <path
              d="M3.5 7.5 L6.5 10.5 L11 4.5"
              fill="none"
              stroke="var(--color-teal)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          )}
          <rect
            x="24"
            y="4"
            width={i % 2 === 0 ? 86 : 64}
            height="5"
            rx="2.5"
            fill="var(--color-navy)"
            opacity={i < 2 ? 0.55 : 0.3}
          />
        </g>
      ))}
    </svg>
  );
}
