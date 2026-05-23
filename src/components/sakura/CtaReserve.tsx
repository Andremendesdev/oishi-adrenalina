import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";
import { useSanityData } from "@/hooks/useSanityData";
import { ctaReserveQuery, siteSettingsQuery } from "@/sanity/queries";

// 1. Tipagens para os dados vindos do Sanity
interface CtaReserveData {
  heading?: string;
  description?: string;
  buttonText?: string;
}

interface SiteSettingsData {
  whatsappMessage?: string;
  whatsappNumber?: string;
}

export const CtaReserve = () => {
  // 2. Aplicação das tipagens nos hooks, substituindo o 'any'
  const { data: ctaData } = useSanityData<CtaReserveData>(
    "ctaReserve",
    ctaReserveQuery,
  );
  const { data: settings } = useSanityData<SiteSettingsData>(
    "siteSettings",
    siteSettingsQuery,
  );

  const whatsappUrl = buildWhatsAppUrl(
    settings?.whatsappMessage,
    settings?.whatsappNumber,
  );

  return (
    <section id="reserva" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-red opacity-80" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="font-jp text-primary text-sm tracking-[0.4em]">
            ご予約
          </span>

          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02]">
            {ctaData?.heading ? (
              ctaData.heading
            ) : (
              <>
                Venha nos{" "}
                <span className="italic text-gradient-red">visitar</span>
                <br />
                agora.
              </>
            )}
          </h2>

          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            {ctaData?.description ||
              "Oishi Adrenalina, gastronomicamente e com o lugar perfeito para desfrutar de uma experiência única."}
          </p>

          <div className="mt-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-red text-primary-foreground px-10 py-5 text-sm uppercase tracking-[0.25em] shadow-red hover:shadow-glow transition-all duration-500 hover:translate-y-[-2px]"
            >
              {ctaData?.buttonText || "Chamar no WhatsApp"}
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
