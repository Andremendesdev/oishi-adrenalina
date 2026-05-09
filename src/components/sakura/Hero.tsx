import heroImg from "@/assets/hero-restaurant.jpg";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Interior do restaurante Sakura Lounge com lanternas vermelhas"
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
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-body">
              Bar & Restaurante
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.95] text-foreground text-black font-black">
            Oishi
            <br />
            <span className="italic text-gradient-red font-medium">
              Adrenalina
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-display text-2xl md:text-3xl text-foreground/85 leading-snug">
            Uma experiência japonesa{" "}
            <span className="italic text-primary-glow">inesquecível</span>.
          </p>

          <p className="mt-4 max-w-lg text-muted-foreground text-base leading-relaxed">
            Sushi autoral, drinks orientais e um ambiente onde tradição encontra
            sofisticação. Reserve sua mesa e descubra.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-red text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] shadow-red hover:shadow-glow transition-all duration-500 hover:translate-y-[-2px]"
            >
              Reservar pelo WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-foreground/80 hover:text-primary transition-colors"
            >
              Ver cardápio
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
