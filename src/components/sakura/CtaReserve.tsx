import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

export const CtaReserve = () => {
  return (
    <section id="reserva" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-red opacity-80" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="font-jp text-primary text-sm tracking-[0.4em]">
            ご予約
          </span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02]">
            Faça sua{" "}
            <span className="italic text-gradient-red">reserva</span>
            <br />
            agora.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Garanta sua mesa em poucos segundos. Atendimento direto pelo
            WhatsApp para uma experiência sem fricção.
          </p>

          <div className="mt-12">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-red text-primary-foreground px-10 py-5 text-sm uppercase tracking-[0.25em] shadow-red hover:shadow-glow transition-all duration-500 hover:translate-y-[-2px]"
            >
              Reservar pelo WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
