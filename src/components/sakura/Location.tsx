import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import { useSanityData } from "@/hooks/useSanityData";
import { siteSettingsQuery } from "@/sanity/queries";

interface SiteSettingsData {
  address?: string;
  hoursLabel?: string;
  hoursDisplay?: string;
}

const FALLBACK_ADDRESS = "Rua 13 de Maio, 705 — Piraju-SP";
const MAP_QUERY = encodeURIComponent("Rua 13 de Maio, 705, Piraju - SP");

const mapsEmbedUrl = `https://maps.google.com/maps?q=${MAP_QUERY}&hl=pt-BR&z=16&output=embed`;
const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;
const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export const Location = () => {
  const { data: settings } = useSanityData<SiteSettingsData>(
    "siteSettings",
    siteSettingsQuery,
  );

  const address = settings?.address || FALLBACK_ADDRESS;
  const hoursLabel = settings?.hoursLabel || "Seg — Sáb";
  const hoursDisplay = settings?.hoursDisplay || "16h às 00h";

  return (
    <section id="localizacao" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-red opacity-30 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-5 reveal">
            <span className="font-jp text-primary text-sm tracking-[0.4em]">
              所在地
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
              Venha nos{" "}
              <span className="italic text-gradient-red">encontrar</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Estamos no coração de Piraju, com fácil acesso e estacionamento
              nas proximidades.
            </p>

            <div className="mt-10 space-y-5 border-t border-border/60 pt-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 text-primary">
                  <MapPin size={16} strokeWidth={1.4} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-primary font-body mb-1">
                    Endereço
                  </p>
                  <p className="text-foreground/90 leading-relaxed">{address}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Piraju — São Paulo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 text-primary">
                  <Navigation size={16} strokeWidth={1.4} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-primary font-body mb-1">
                    Horário
                  </p>
                  <p className="text-foreground/90">{hoursLabel}</p>
                  <p className="text-sm text-muted-foreground">{hoursDisplay}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-red text-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.3em] shadow-red hover:shadow-glow transition-all duration-500 hover:-translate-y-0.5"
              >
                Como chegar
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:text-primary border border-border/80 hover:border-primary/50 px-7 py-4 transition-colors duration-300"
              >
                Abrir no Maps
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className="lg:col-span-7 reveal"
            style={{ transitionDelay: "120ms" }}
          >
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-br from-primary/40 via-transparent to-primary/20 opacity-60" />
              <div className="relative border border-border/80 bg-card overflow-hidden shadow-elegant">
                <div className="relative aspect-[4/3] lg:aspect-[16/11]">
                  <iframe
                    title="Localização Oishi Adrenalina — Piraju-SP"
                    src={mapsEmbedUrl}
                    className="absolute inset-0 h-full w-full border-0 grayscale-[25%] contrast-[1.05] brightness-[0.82] saturate-[0.85] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-90"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20" />
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-border/60 px-5 py-4 bg-background/80 backdrop-blur-sm">
                  <p className="text-xs text-muted-foreground tracking-wide">
                    {address}
                  </p>
                  <span className="font-jp text-[10px] tracking-[0.4em] text-primary/50 shrink-0">
                    桜
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
