import heroImg from "@/assets/hero-restaurant.jpg";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";
import { openRest } from "@/lib/open-rest";

const isOpen = openRest();

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

      <div className="absolute top-20 right-6">
        <div className="flex flex-col items-center rounded-xl border border-red-500/20 bg-zinc-950/85 px-2 py-1 backdrop-blur-sm shadow-[0_0_20px_rgba(239,68,68,0.08)]">
          <div className="flex items-center gap-2">
            <div
              className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-green-400 shadow-[0_0_10px_#4ade80]" : "bg-red-400"}`}
            />

            <span
              className={`${isOpen ? "text-green-400" : "text-red-400"} text-sm font-bold font-mono`}
            >
              16:00
            </span>

            <span className="text-zinc-600 text-sm">—</span>

            <span
              className={`${isOpen ? "text-green-400" : "text-red-400"} text-sm font-bold font-mono`}
            >
              00:00
            </span>
          </div>

          <span
            className={`${isOpen ? "text-green-400" : "text-red-400"} text-xs uppercase tracking-[0.2em] mt-2 `}
          >
            {isOpen ? "Aberto" : "Fechado"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-primary" />

            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-[0.4em] text-primary font-body">
                Bar & Restaurante
              </p>

              <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/60 font-body">
                Segunda à Sábado
              </span>
            </div>
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
            Referência em gastronomia em Piraju e região. Ambiente familiar &
            Pet Friendly 🐾
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-red text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] shadow-red hover:shadow-glow transition-all duration-500 hover:translate-y-[-2px]"
            >
              Chamar no WhatsApp
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
