import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";
import { useSanityData } from "@/hooks/useSanityData";
import { heroQuery, siteSettingsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect } from "react";

interface HeroData {
  backgroundImage?: string;
  subtitle?: string;
  subSubtitle?: string;
  headingLine1?: string;
  headingLine2?: string;
  tagline?: string;
  description?: string;
  ctaButtonText?: string;
  secondaryLinkText?: string;
}

interface SiteSettingsData {
  whatsappMessage?: string;
  whatsappNumber?: string;
}

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_SMOOTH },
  },
};

const lineVariant = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: EASE_SMOOTH, delay: 0.1 },
  },
};

const headingClipVariant = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.1, ease: EASE_SMOOTH },
  },
};

export const Hero = () => {
  const { data: heroData } = useSanityData<HeroData>("hero", heroQuery);
  const { data: settingsData } = useSanityData<SiteSettingsData>(
    "siteSettings",
    siteSettingsQuery,
  );

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "18%"]);

  // Subtle mouse parallax for background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouseX.set(((e.clientX / w) - 0.5) * -14);
      mouseY.set(((e.clientY / h) - 0.5) * -10);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const fallbackImage = "/images/interior.png";
  const bgImage = heroData?.backgroundImage
    ? urlFor(heroData.backgroundImage).url()
    : fallbackImage;

  const whatsappUrl = buildWhatsAppUrl(
    settingsData?.whatsappMessage,
    settingsData?.whatsappNumber,
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center"
    >
      {/* Background — parallax + mouse drift */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <motion.div
          className="absolute inset-[-4%]"
          style={{ x: springX, y: springY }}
        >
          <motion.img
            src={bgImage}
            alt="Interior do restaurante"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.04 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-radial-red opacity-60" />
        {/* Grain overlay for depth */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
        />
      </motion.div>

      {/* Vertical kanji — refined */}
      <motion.div
        className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-5"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.0, ease: EASE_SMOOTH }}
      >
        <span className="font-jp vertical-text text-xs tracking-[0.55em] text-primary/50 uppercase">
          {heroData?.subtitle || "Bar & Restaurante"}
        </span>
        <motion.span
          className="w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent"
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ duration: 1.0, delay: 1.3, ease: EASE_SMOOTH }}
        />
        <span className="font-jp vertical-text text-[11px] tracking-[0.45em] text-foreground/25">
          桜・ラウンジ
        </span>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 py-32">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-4 mb-10"
            variants={fadeUpVariant}
          >
            <motion.span
              className="h-px bg-primary block"
              variants={lineVariant}
              style={{ width: 40 }}
            />
            <div className="flex flex-col gap-[3px]">
              <p className="text-[11px] uppercase tracking-[0.45em] text-primary font-body">
                {heroData?.subtitle || "Bar & Restaurante"}
              </p>
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/45 font-body">
                {heroData?.subSubtitle || "Segunda à Sábado"}
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.9] text-foreground font-black"
              variants={headingClipVariant}
            >
              {heroData?.headingLine1 || "Oishi"}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.9] italic text-gradient-red font-medium"
              variants={headingClipVariant}
              transition={{ duration: 1.1, ease: EASE_SMOOTH, delay: 0.12 }}
            >
              {heroData?.headingLine2 || "Adrenalina"}
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            className="mt-10 h-px w-16 bg-gradient-to-r from-primary/70 to-transparent"
            variants={lineVariant}
          />

          {/* Tagline */}
          <motion.p
            className="mt-6 max-w-xl font-display text-2xl md:text-3xl text-foreground/80 leading-snug"
            variants={fadeUpVariant}
          >
            {heroData?.tagline ? (
              heroData.tagline
            ) : (
              <>
                Uma experiência japonesa{" "}
                <span className="italic text-primary-glow">inesquecível</span>.
              </>
            )}
          </motion.p>

          {/* Description */}
          {heroData?.description && (
            <motion.p
              className="mt-4 max-w-md text-muted-foreground text-sm leading-relaxed font-body"
              variants={fadeUpVariant}
            >
              {heroData.description}
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            variants={fadeUpVariant}
          >
            {/* Primary CTA */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-gradient-red text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] shadow-red"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.25, ease: EASE_SMOOTH }}
            >
              {/* Shimmer sweep */}
              <motion.span
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-white/15"
                whileHover={{ translateX: "200%" }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              />
              <span className="relative">
                {heroData?.ctaButtonText || "Chamar no WhatsApp"}
              </span>
              <ArrowRight
                size={14}
                className="relative transition-transform duration-500 group-hover:translate-x-1"
              />
            </motion.a>

            {/* Secondary link */}
            <motion.a
              href="#cardapio"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60 hover:text-primary transition-colors duration-300"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              {heroData?.secondaryLinkText || "Ver cardápio"}
              <motion.span
                className="h-px bg-current block"
                initial={{ width: 0 }}
                whileHover={{ width: 20 }}
                transition={{ duration: 0.3, ease: EASE_SMOOTH }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1.0 }}
      >
        <span className="text-[9px] uppercase tracking-[0.45em] text-foreground/30 font-body">
          Scroll
        </span>
        <motion.span
          className="w-px bg-gradient-to-b from-primary/60 to-transparent"
          animate={{ height: [24, 44, 24] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ display: "block" }}
        />
      </motion.div>
    </section>
  );
};
