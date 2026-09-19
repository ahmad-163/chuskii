export default function FlowerMotif({ className = "", size = 60, variant = "small" }) {
  if (variant === "small") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        className={className}
        aria-hidden="true"
      >
        <g fill="var(--color-terracotta)">
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="30"
              cy="16"
              rx="6"
              ry="12"
              transform={`rotate(${angle} 30 30)`}
            />
          ))}
        </g>
        <circle cx="30" cy="30" r="6" fill="var(--color-saffron)" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <g>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={angle}
            cx="50"
            cy="20"
            rx="8"
            ry="20"
            transform={`rotate(${angle} 50 50)`}
            fill={i % 2 === 0 ? "var(--color-terracotta)" : "var(--color-saffron)"}
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="9" fill="var(--color-forest)" />
    </svg>
  );
}