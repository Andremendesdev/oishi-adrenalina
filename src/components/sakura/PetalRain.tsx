import { useMemo } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  hue: number;
}

const PETAL_COUNT = 18;

export const PetalRain = () => {
  const petals = useMemo<Petal[]>(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 14,
        size: 10 + Math.random() * 14,
        opacity: 0.35 + Math.random() * 0.5,
        hue: 340 + Math.random() * 20,
      })),
    [],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 block animate-[petal-fall_linear_infinite]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          <svg viewBox="0 0 32 32" className="h-full w-full">
            <path
              d="M16 2 C20 8, 26 12, 28 18 C26 24, 20 28, 16 30 C12 28, 6 24, 4 18 C6 12, 12 8, 16 2 Z"
              fill={`hsl(${p.hue} 75% 72% / 0.85)`}
            />
            <path
              d="M16 6 C18 12, 22 16, 24 20"
              stroke={`hsl(${p.hue} 60% 55% / 0.6)`}
              strokeWidth="0.6"
              fill="none"
            />
          </svg>
        </span>
      ))}
    </div>
  );
};
