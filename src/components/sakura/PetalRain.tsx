import { useMemo } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  hue: number;
  drift: number;
}

const PETAL_COUNT = 10;

export const PetalRain = () => {
  const petals = useMemo<Petal[]>(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => {
        const duration = 10 + Math.random() * 8;
        return {
          id: i,
          left: Math.random() * 96 + 2,
          // Delay negativo = pétala já em queda ao carregar a página
          delay: -(Math.random() * duration),
          duration,
          size: 8 + Math.random() * 13,
          opacity: 0.08 + Math.random() * 0.18,
          hue: 338 + Math.random() * 22,
          drift: (Math.random() - 0.5) * 55,
        };
      }),
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
            animationFillMode: "both",
            ["--drift" as string]: `${p.drift}px`,
          }}
        >
          <svg viewBox="0 0 32 32" className="h-full w-full">
            <path
              d="M16 3 C19 9, 25 12, 27 18 C25 24, 19 27, 16 29 C13 27, 7 24, 5 18 C7 12, 13 9, 16 3 Z"
              fill={`hsl(${p.hue} 68% 74% / 0.88)`}
            />
            <path
              d="M16 7 C17.5 12, 21 15, 23 19"
              stroke={`hsl(${p.hue} 55% 58% / 0.45)`}
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      ))}
    </div>
  );
};
