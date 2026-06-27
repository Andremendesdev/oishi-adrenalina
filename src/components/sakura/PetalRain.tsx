import { useMemo } from "react";

interface PetalRainProps {
  count?: number;
}

/**
 * Chuva de pétalas sakura — animação CSS, leve na GPU.
 */
export const PetalRain = ({ count = 22 }: PetalRainProps) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 14;
        const delay = -Math.random() * duration;
        const height = 19 + Math.random() * 14;
        const width = height * (0.62 + Math.random() * 0.1);
        const drift = (Math.random() - 0.5) * 240;
        const opacity = 0.4 + Math.random() * 0.5;
        const rotate = -40 + Math.random() * 80;

        return {
          id: i,
          left,
          duration,
          delay,
          width,
          height,
          drift,
          opacity,
          rotate,
        };
      }),
    [count],
  );

  return (
    <div
      aria-hidden="true"
      className="petal-rain pointer-events-none fixed inset-0 z-[15] overflow-hidden"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}vw`,
            width: `${p.width}px`,
            height: `${p.height}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        >
          <span
            className="petal__shape"
            style={{
              opacity: p.opacity,
              transform: `rotate(${p.rotate}deg)`,
            }}
          >
            <svg viewBox="0 0 32 48" className="h-full w-full" aria-hidden="true">
              <defs>
                <radialGradient
                  id={`petal-grad-${p.id}`}
                  cx="50%"
                  cy="42%"
                  r="58%"
                  fx="50%"
                  fy="38%"
                >
                  <stop offset="0%" stopColor="#fecaca" />
                  <stop offset="35%" stopColor="#fca5a5" />
                  <stop offset="72%" stopColor="#f87171" />
                  <stop offset="100%" stopColor="#ef4444" />
                </radialGradient>
              </defs>
              <path
                d="M16 2 C26 10, 27.5 24, 16 46 C5 24, 6 10, 16 2 Z"
                fill={`url(#petal-grad-${p.id})`}
              />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
};
