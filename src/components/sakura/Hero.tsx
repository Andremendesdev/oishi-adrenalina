import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";
import { useSanityData } from "@/hooks/useSanityData";
import { heroQuery, siteSettingsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/client";

// Tipagens para os dados do Sanity
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

export const Hero = () => {
  const { data: heroData } = useSanityData<HeroData>("hero", heroQuery);
  const { data: settingsData } = useSanityData<SiteSettingsData>(
    "siteSettings",
    siteSettingsQuery,
  );

  // Fallback e construção segura das URLs
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
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Interior do restaurante"
          width={1920}
          height={1080}
          className="h-full w-full object-cover scale-105 animate-fade-in-slow"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-radial-red opacity-70" />
      </div>

      {/* Vertical kanji decoration */}
      <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-6 text-primary/70">
        <span className="font-jp vertical-text text-2xl tracking-[0.4em]">
          桜・ラウンジ
        </span>
        <span className="h-24 w-px bg-primary/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-primary" />

            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-[0.4em] text-primary font-body">
                {heroData?.subtitle || "Bar & Restaurante"}
              </p>

              <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/60 font-body">
                {heroData?.subSubtitle || "Segunda à Sábado"}
              </span>
            </div>
          </div>

          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.95] text-foreground font-black">
            {heroData?.headingLine1 || "Oishi"}
            <br />
            <span className="italic text-gradient-red font-medium">
              {heroData?.headingLine2 || "Adrenalina"}
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-display text-2xl md:text-3xl text-foreground/85 leading-snug">
            {heroData?.tagline ? (
              heroData.tagline
            ) : (
              <>
                Uma experiência japonesa{" "}
                <span className="italic text-primary-glow">inesquecível</span>.
              </>
            )}
          </p>

          <p className="mt-4 max-w-lg text-muted-foreground text-base leading-relaxed">
            {heroData?.description}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-red text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] shadow-red hover:shadow-glow transition-all duration-500 hover:translate-y-[-2px]"
            >
              {heroData?.ctaButtonText || "Chamar no WhatsApp"}
              <ArrowRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-foreground/80 hover:text-primary transition-colors"
            >
              {heroData?.secondaryLinkText || "Ver cardápio"}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-muted-foreground animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
