import { HERO_CONTENT, SITE_CONFIG } from "@/data/siteConfig";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const MIN_INTRO_MS = 2800;

interface LoadingIntroProps {
  onComplete: () => void;
}

export const LoadingIntro = ({ onComplete }: LoadingIntroProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const heroImage = new Image();
    heroImage.src = HERO_CONTENT.backgroundImage;

    const startedAt = Date.now();
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;

    const scheduleHide = () => {
      const elapsed = Date.now() - startedAt;
      const delay = Math.max(0, MIN_INTRO_MS - elapsed);
      hideTimer = setTimeout(() => setVisible(false), delay);
    };

    if (document.readyState === "complete") {
      scheduleHide();
    } else {
      window.addEventListener("load", scheduleHide, { once: true });
    }

    fallbackTimer = setTimeout(() => setVisible(false), 4200);

    return () => {
      document.body.style.overflow = "";
      if (hideTimer) clearTimeout(hideTimer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      window.removeEventListener("load", scheduleHide);
    };
  }, []);

  const handleExitComplete = () => {
    document.body.style.overflow = "";
    onComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[hsl(0_0%_4%)]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.95, ease: EASE },
          }}
          aria-hidden={!visible}
          aria-label="Carregando"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% 48%, hsl(354 78% 48% / 0.28), transparent 70%)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />

          {[12, 28, 74].map((left, i) => (
            <motion.span
              key={left}
              className="pointer-events-none absolute top-0 block rounded-full"
              style={{
                left: `${left}%`,
                width: 10 + i * 2,
                height: 10 + i * 2,
                background: `hsl(${338 + i * 8} 70% 72%)`,
              }}
              initial={{ opacity: 0, y: -12 }}
              animate={{
                opacity: [0, 0.35, 0],
                y: ["-5vh", "38vh", "72vh"],
                x: [0, i % 2 === 0 ? 18 : -14, i % 2 === 0 ? 8 : -6],
              }}
              transition={{
                duration: 2.6 + i * 0.3,
                delay: 0.15 + i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              className="relative mb-8 flex h-36 w-36 items-center justify-center md:h-44 md:w-44"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              <motion.span
                className="absolute inset-0 rounded-full border border-primary/25"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: EASE, delay: 0.1 }}
              />
              <motion.span
                className="absolute inset-2 rounded-full border border-primary/15"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: EASE, delay: 0.25 }}
              />
              <motion.img
                src="/images/tree.png"
                alt=""
                className="relative z-10 h-[7.5rem] w-[7.5rem] border-0 object-contain outline-none md:h-[8.75rem] md:w-[8.75rem]"
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1.08 }}
                transition={{ duration: 1, ease: EASE, delay: 0.35 }}
              />
            </motion.div>

            <motion.p
              className="font-jp text-[10px] uppercase tracking-[0.65em] text-primary/55"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            <motion.h1
              className="mt-5 font-display text-4xl tracking-[0.35em] text-foreground/90 md:text-5xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.75 }}
            >
              {SITE_CONFIG.restaurantName}
            </motion.h1>

            <motion.p
              className="font-display -mt-1 text-3xl italic text-gradient-red md:text-4xl"
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.15, ease: EASE, delay: 0.95 }}
            >
              {HERO_CONTENT.headingLine2}
            </motion.p>

            <motion.div
              className="mt-7 h-px w-0 max-w-[180px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 180, opacity: 1 }}
              transition={{ duration: 1.1, ease: EASE, delay: 1.15 }}
            />

            <motion.p
              className="mt-6 font-jp text-[11px] tracking-[0.45em] text-foreground/25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.45 }}
            >
              桜・ラウンジ
            </motion.p>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 h-px w-40 -translate-x-1/2 overflow-hidden bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.span
              className="block h-full origin-left bg-gradient-to-r from-primary/30 via-primary to-primary/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.4, ease: EASE, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
