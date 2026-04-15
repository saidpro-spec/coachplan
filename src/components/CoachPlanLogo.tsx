interface CoachPlanLogoProps {
  height?: number;
}

export default function CoachPlanLogo({ height = 36 }: CoachPlanLogoProps) {
  const shieldW = height * 0.78;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <svg
        width={shieldW}
        height={height}
        viewBox="0 0 78 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cpGrad" x1="0" y1="0" x2="78" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8DC63F" />
            <stop offset="45%" stopColor="#00B09B" />
            <stop offset="100%" stopColor="#1565C0" />
          </linearGradient>
        </defs>

        {/* Shield */}
        <path
          d="M39 3 L75 15 L75 50 C75 70 59 84 39 93 C19 84 3 70 3 50 L3 15 Z"
          fill="url(#cpGrad)"
        />
        {/* Inner border */}
        <path
          d="M39 9 L69 19 L69 50 C69 66 55 78 39 86 C23 78 9 66 9 50 L9 19 Z"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />

        {/* Clipboard top */}
        <rect x="28" y="8" width="14" height="11" rx="2" fill="none" stroke="white" strokeWidth="1.6" />
        <rect x="32" y="6" width="6" height="4" rx="1" fill="white" opacity="0.9" />
        <polyline points="30,13 33,16 39,10" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Tactical dots */}
        <circle cx="20" cy="44" r="3.8" fill="none" stroke="white" strokeWidth="1.6" />
        <circle cx="52" cy="36" r="3.8" fill="none" stroke="white" strokeWidth="1.6" />
        <circle cx="42" cy="56" r="3.8" fill="none" stroke="white" strokeWidth="1.6" />

        {/* Lines */}
        <line x1="24" y1="44" x2="48" y2="38" stroke="white" strokeWidth="1.2" opacity="0.75" />
        <line x1="52" y1="40" x2="44" y2="52" stroke="white" strokeWidth="1.2" opacity="0.75" />
        {/* Arrow */}
        <line x1="32" y1="48" x2="26" y2="58" stroke="white" strokeWidth="1.4" />
        <polygon points="26,58 30,54 33,60" fill="white" opacity="0.9" />

        {/* Football */}
        <circle cx="32" cy="73" r="9.5" fill="none" stroke="white" strokeWidth="1.6" />
        <polygon points="32,64 29,68 30,72 34,72 35,68" fill="white" opacity="0.85" />
        <polygon points="22,70 25,67 29,68 28,72 24,73" fill="white" opacity="0.5" />
        <polygon points="35,68 38,67 41,70 40,74 36,74" fill="white" opacity="0.5" />
        <polygon points="24,73 28,72 30,76 27,79 23,77" fill="white" opacity="0.5" />
        <polygon points="34,74 38,74 40,78 37,81 33,79" fill="white" opacity="0.5" />
      </svg>

      <span style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
        <span style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 800,
          fontSize: height * 0.68,
          color: '#3D9A3A',
          letterSpacing: '-0.01em',
        }}>Coach</span>
        <span style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 800,
          fontSize: height * 0.68,
          color: '#1A4F8A',
          letterSpacing: '-0.01em',
        }}>Plan</span>
      </span>
    </div>
  );
}
