interface Marker {
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  type: 'attaquant' | 'defenseur' | 'ballon' | 'plot' | 'but';
  label?: string;
}

interface Arrow {
  x1: number; y1: number;
  x2: number; y2: number;
  cx?: number; cy?: number; // control point for quadratic bezier
}

interface TerrainDiagramProps {
  markers?: Marker[];
  fleches?: Arrow[];
  width?: number;
  height?: number;
}

export default function TerrainDiagram({ markers = [], fleches = [], width = 280, height = 180 }: TerrainDiagramProps) {
  const W = width;
  const H = height;
  const pad = 12;

  const px = (pct: number) => pad + (pct / 100) * (W - pad * 2);
  const py = (pct: number) => pad + (pct / 100) * (H - pad * 2);

  // default minimal demo markers if none provided
  const displayMarkers: Marker[] = markers.length > 0 ? markers : [
    { x: 25, y: 50, type: 'attaquant', label: 'A' },
    { x: 75, y: 50, type: 'defenseur', label: 'D' },
    { x: 50, y: 50, type: 'ballon' },
  ];

  const goalW = 18;
  const goalH = 6;

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', maxWidth: '100%', borderRadius: 8 }}
    >
      {/* Field background */}
      <rect x={0} y={0} width={W} height={H} fill="#1a3a1a" rx={8} />

      {/* Grass stripes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={i}
          x={pad + (i * ((W - pad * 2) / 6))}
          y={pad}
          width={(W - pad * 2) / 6}
          height={H - pad * 2}
          fill={i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent'}
        />
      ))}

      {/* Field boundary */}
      <rect
        x={pad} y={pad}
        width={W - pad * 2} height={H - pad * 2}
        fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth={1.5}
      />

      {/* Center line */}
      <line
        x1={W / 2} y1={pad}
        x2={W / 2} y2={H - pad}
        stroke="rgba(255,255,255,0.5)" strokeWidth={1}
      />

      {/* Center circle */}
      <circle
        cx={W / 2} cy={H / 2} r={Math.min(W, H) * 0.1}
        fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth={1}
      />
      <circle cx={W / 2} cy={H / 2} r={2} fill="rgba(255,255,255,0.6)" />

      {/* Left goal */}
      <rect
        x={pad - goalH} y={H / 2 - goalW / 2}
        width={goalH} height={goalW}
        fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={1.5}
      />
      {/* Left penalty area */}
      <rect
        x={pad} y={H / 2 - goalW * 1.5}
        width={W * 0.15} height={goalW * 3}
        fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={1}
      />

      {/* Right goal */}
      <rect
        x={W - pad} y={H / 2 - goalW / 2}
        width={goalH} height={goalW}
        fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth={1.5}
      />
      {/* Right penalty area */}
      <rect
        x={W - pad - W * 0.15} y={H / 2 - goalW * 1.5}
        width={W * 0.15} height={goalW * 3}
        fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={1}
      />

      {/* Arrows */}
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#FFD700" />
        </marker>
        <marker id="arrowhead-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#60A5FA" />
        </marker>
      </defs>

      {fleches.map((arrow, i) => {
        const x1 = px(arrow.x1), y1 = py(arrow.y1);
        const x2 = px(arrow.x2), y2 = py(arrow.y2);
        const cx = arrow.cx !== undefined ? px(arrow.cx) : (x1 + x2) / 2;
        const cy = arrow.cy !== undefined ? py(arrow.cy) : (y1 + y2) / 2;
        return (
          <path
            key={i}
            d={`M${x1},${y1} Q${cx},${cy} ${x2},${y2}`}
            fill="none"
            stroke="#FFD700"
            strokeWidth={1.5}
            strokeDasharray="4 3"
            markerEnd="url(#arrowhead)"
            opacity={0.85}
          />
        );
      })}

      {/* Markers */}
      {displayMarkers.map((m, i) => {
        const mx = px(m.x), my = py(m.y);
        if (m.type === 'ballon') {
          return (
            <g key={i}>
              <circle cx={mx} cy={my} r={5} fill="white" stroke="#333" strokeWidth={1} />
              <path
                d={`M${mx - 3},${my - 2} L${mx},${my - 5} L${mx + 3},${my - 2} Z`}
                fill="#222" opacity={0.4}
              />
            </g>
          );
        }
        if (m.type === 'plot') {
          return (
            <g key={i}>
              <polygon
                points={`${mx},${my - 7} ${mx - 5},${my + 4} ${mx + 5},${my + 4}`}
                fill="#FF7A00"
                stroke="#FF5000"
                strokeWidth={0.5}
              />
            </g>
          );
        }
        if (m.type === 'but') {
          return (
            <g key={i}>
              <rect
                x={mx - 10} y={my - 8}
                width={20} height={12}
                fill="none" stroke="white" strokeWidth={2} rx={1}
              />
              <text x={mx} y={my + 3} textAnchor="middle" fill="white" fontSize={6} fontFamily="sans-serif">BUT</text>
            </g>
          );
        }
        // attaquant / defenseur
        const color = m.type === 'attaquant' ? '#0080C8' : '#E3061A';
        const border = m.type === 'attaquant' ? '#005a8e' : '#a00015';
        return (
          <g key={i}>
            <circle cx={mx} cy={my} r={8} fill={color} stroke={border} strokeWidth={1.5} />
            {m.label && (
              <text
                x={mx} y={my + 4}
                textAnchor="middle"
                fill="white"
                fontSize={7}
                fontWeight="bold"
                fontFamily="'Barlow Condensed', sans-serif"
              >
                {m.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
