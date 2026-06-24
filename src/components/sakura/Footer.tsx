import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightText = SITE_CONFIG.copyrightText.replace(
    String(SITE_CONFIG.foundedYear),
    `${SITE_CONFIG.foundedYear}–${currentYear}`,
  );

  return (
    <footer className="border-t border-border/60 py-16">
      <div className="container grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl tracking-[0.25em]">
              {SITE_CONFIG.restaurantName} Adrenalina
            </span>
            <span className="font-jp text-primary">桜</span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
            {SITE_CONFIG.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-1 text-primary" />
              {SITE_CONFIG.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-primary" />
              {SITE_CONFIG.phone}
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={14} className="text-primary" />
              {SITE_CONFIG.instagram}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Horário
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Clock size={14} className="mt-1 text-primary" />
              <span>
                {SITE_CONFIG.hoursLabel}
                <br />
                {SITE_CONFIG.hoursDisplay}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <p>{copyrightText}</p>
        <p className="font-jp tracking-widest">桜・ラウンジ</p>
      </div>
    </footer>
  );
};
