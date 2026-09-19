export default function FlowerPattern({ className = "" }) {
  const cx = 45;
  const cy = 45;
  const len = 35; // petal length, tip to base
  const w = 20; // petal half-width at its widest point

  // A vesica/leaf shape: pointed at both the base (center) and the tip.
  const petal = `M ${cx},${cy} Q ${cx - w},${cy - len / 2} ${cx},${cy - len} Q ${cx + w},${cy - len / 2} ${cx},${cy} Z`;

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="chuskii-motif"
          x="0"
          y="0"
          width="90"
          height="90"
          patternUnits="userSpaceOnUse"
        >
          <g stroke="var(--color-forest)" strokeOpacity="0.08" strokeWidth="1" fill="none">
            <path d={petal} transform={`rotate(0 ${cx} ${cy})`} />
            <path d={petal} transform={`rotate(90 ${cx} ${cy})`} />
            <path d={petal} transform={`rotate(180 ${cx} ${cy})`} />
            <path d={petal} transform={`rotate(270 ${cx} ${cy})`} />
            <circle cx={cx} cy={cy} r="5" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#chuskii-motif)" />
    </svg>
  );
}