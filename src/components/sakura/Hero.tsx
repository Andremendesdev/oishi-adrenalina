import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { HERO_CONTENT, SITE_CONFIG } from "@/data/siteConfig";
import { ArrowRight, CalendarCheck } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect } from "react";

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.25,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE_SMOOTH },
  },
};

const lineVariant = {
  hidden: { scaleX: 0, originX: "center" as const },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: EASE_SMOOTH },
  },
};

const revealClipVariant = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.6 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1.1, ease: EASE_SMOOTH },
  },
};

const heroNameVariant = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1.5, ease: EASE_SMOOTH },
  },
};

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], ["0%", "22%"]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 32, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 32, damping: 28 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouseX.set(((e.clientX / w) - 0.5) * -16);
      mouseY.set(((e.clientY / h) - 0.5) * -10);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsappMessage,
    SITE_CONFIG.whatsappNumber,
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100dvh] w-full overflow-hidden flex items-center"
    >
      {/* ─── Background layers ─── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <motion.div
          className="absolute inset-[-5%]"
          style={{ x: springX, y: springY }}
        >
          <motion.img
            src={HERO_CONTENT.backgroundImage}
            alt="Interior do restaurante Oishi Adrenalina"
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-center"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.06 }}
            transition={{ duration: 2.8, ease: "easeOut" }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-hero" />

        <div
          className="absolute inset-0 opacity-55"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 40% 55%, hsl(354 78% 48% / 0.22), transparent 65%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 85% at 50% 50%, transparent 35%, hsl(0 0% 0% / 0.72) 100%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.038] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />
      </motion.div>

      {/* ─── Kanji decoration — desktop only ─── */}
      <motion.div
        className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-5"
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 1.3, ease: EASE_SMOOTH }}
      >
        <span className="font-jp vertical-text text-[10px] tracking-[0.65em] text-primary/35 uppercase">
          {HERO_CONTENT.subtitle}
        </span>
        <motion.span
          className="w-px bg-gradient-to-b from-primary/45 via-primary/12 to-transparent"
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ duration: 1.3, delay: 1.6, ease: EASE_SMOOTH }}
          style={{ display: "block" }}
        />
        <span className="font-jp vertical-text text-[10px] tracking-[0.5em] text-foreground/18">
          桜・ラウンジ
        </span>
      </motion.div>

      {/* ─── Main content ─── */}
      <div className="container relative z-10 py-28 md:py-36">
        <motion.div
          className="w-full text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center md:justify-start mb-9"
            variants={fadeUpVariant}
          >
            <div className="inline-flex items-center gap-2.5 border border-primary/20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/90 shadow-[0_0_8px_hsl(354_90%_60%_/0.8)] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.42em] text-primary/70 font-body">
                {HERO_CONTENT.subtitle}
              </span>
            </div>
          </motion.div>

          <div className="overflow-hidden py-2 -my-2">
            <motion.p
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground/55 tracking-[0.4em] font-light leading-none mb-1"
              variants={revealClipVariant}
            >
              {HERO_CONTENT.headingLine1}
            </motion.p>
          </div>

          <div className="py-3 -my-3" style={{ overflow: "clip" }}>
            <motion.h1
              className="font-display italic text-gradient-red font-black leading-[0.9] tracking-tight whitespace-nowrap"
              style={{
                fontSize: "clamp(4rem, 11.5vw, 11.5rem)",
              }}
              variants={heroNameVariant}
            >
              {HERO_CONTENT.headingLine2}
            </motion.h1>
          </div>

          <motion.div
            className="mt-9 mx-auto md:mx-0 h-px w-24 max-w-2xl"
            style={{
              background:
                "linear-gradient(90deg, hsl(354 78% 48% / 0.65), transparent)",
            }}
            variants={lineVariant}
          />

          <motion.p
            className="mt-6 mx-auto md:mx-0 max-w-lg font-display text-xl md:text-2xl text-foreground/78 leading-snug"
            variants={fadeUpVariant}
          >
            Uma experiência culinária{" "}
            <span className="italic text-primary-glow">inesquecível</span>.
          </motion.p>

          <motion.p
            className="mt-4 mx-auto md:mx-0 max-w-sm text-foreground/48 text-sm leading-relaxed font-body"
            variants={fadeUpVariant}
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4"
            variants={fadeUpVariant}
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-red text-primary-foreground px-9 py-[15px] text-[11px] uppercase tracking-[0.32em] font-body font-medium"
              whileHover={{
                y: -2,
                boxShadow:
                  "0 0 0 1px hsl(354 78% 48% / 0.5), 0 20px 50px -8px hsl(354 90% 50% / 0.6)",
              }}
              whileTap={{ y: 0, scale: 0.985 }}
              transition={{ duration: 0.22, ease: EASE_SMOOTH }}
              style={{
                boxShadow:
                  "0 0 0 1px hsl(354 78% 48% / 0.25), 0 10px 36px -8px hsl(354 90% 50% / 0.4)",
              }}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/12"
                whileHover={{ translateX: "220%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <CalendarCheck size={13} className="relative shrink-0" />
              <span className="relative">{HERO_CONTENT.ctaButtonText}</span>
              <ArrowRight
                size={12}
                className="relative transition-transform duration-500 group-hover:translate-x-1.5"
              />
            </motion.a>

            <motion.a
              href="#cardapio"
              className="group inline-flex items-center justify-center gap-2.5 text-[11px] uppercase tracking-[0.32em] text-foreground/50 hover:text-foreground/85 transition-colors duration-400 py-[15px] px-2"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.22 }}
            >
              {HERO_CONTENT.secondaryLinkText}
              <ArrowRight
                size={11}
                className="opacity-40 group-hover:opacity-90 transition-all duration-400 group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 1.0 }}
      >
        <span className="text-[8px] uppercase tracking-[0.55em] text-foreground/22 font-body">
          Scroll
        </span>
        <motion.span
          className="w-px bg-gradient-to-b from-primary/45 to-transparent block"
          animate={{ height: [18, 40, 18] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
