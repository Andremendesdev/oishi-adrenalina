import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useSanityData } from "@/hooks/useSanityData";
import { navbarHoursQuery } from "@/sanity/queries";
import {
  formatNavbarHour,
  NavbarHoursConfig,
  resolveNavbarOpenStatus,
} from "@/lib/restaurantHours";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#reserva", label: "Mais" },
];

const DEFAULT_NAVBAR_HOURS: NavbarHoursConfig = {
  openHour: SITE_CONFIG.openHour,
  closeHour: SITE_CONFIG.closeHour,
  automatic: true,
  manualStatus: "open",
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data: hoursConfig } = useSanityData<NavbarHoursConfig>(
    "navbarHours",
    navbarHoursQuery,
    DEFAULT_NAVBAR_HOURS,
  );

  const openHour = hoursConfig?.openHour ?? DEFAULT_NAVBAR_HOURS.openHour;
  const closeHour = hoursConfig?.closeHour ?? DEFAULT_NAVBAR_HOURS.closeHour;
  const automatic = hoursConfig?.automatic ?? DEFAULT_NAVBAR_HOURS.automatic;
  const manualStatus =
    hoursConfig?.manualStatus ?? DEFAULT_NAVBAR_HOURS.manualStatus;

  useEffect(() => {
    const checkOpenStatus = () => {
      setIsOpen(
        resolveNavbarOpenStatus({
          openHour,
          closeHour,
          automatic,
          manualStatus,
        }),
      );
    };

    checkOpenStatus();
    const intervalId = setInterval(checkOpenStatus, 60000);

    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(intervalId);
    };
  }, [openHour, closeHour, automatic, manualStatus]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/88 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-xl tracking-[0.28em] text-foreground transition-colors duration-300 group-hover:text-foreground/80">
            {SITE_CONFIG.restaurantName}
          </span>
          <span className="font-jp text-sm text-primary/80 tracking-widest transition-all duration-300 group-hover:text-primary">
            桜
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[11px] uppercase tracking-[0.28em] text-foreground/45 hover:text-foreground/90 transition-colors duration-300 py-1 group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary/70 transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-sm scale-90 sm:scale-100 origin-right">
            <div className="flex items-center gap-1.5">
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors duration-500",
                  isOpen
                    ? "bg-emerald-400 shadow-[0_0_8px_#4ade80]"
                    : "bg-red-400/70",
                )}
              />
              <span className="text-[11px] font-mono font-semibold text-foreground/80">
                {formatNavbarHour(openHour)}
              </span>
              <span className="text-foreground/25 text-[11px]">—</span>
              <span className="text-[11px] font-mono font-semibold text-foreground/80">
                {formatNavbarHour(closeHour)}
              </span>
            </div>
            <span
              className={cn(
                "text-[9px] uppercase tracking-[0.3em] mt-0.5 font-body",
                isOpen ? "text-emerald-400/80" : "text-red-400/60",
              )}
            >
              {isOpen ? "Aberto" : "Fechado"}
            </span>
          </div>

          <a
            href="#reserva"
            className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-primary-foreground bg-gradient-red px-5 py-2.5 transition-all duration-400 hover:opacity-90 hover:shadow-red hover:-translate-y-px"
          >
            Visite-nos
          </a>

          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((s) => !s)}
            className="md:hidden text-foreground/70 hover:text-foreground flex items-center justify-center p-2 transition-colors duration-200"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-b border-white/[0.06] transition-all duration-500",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="container flex flex-col gap-0.5 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-[11px] uppercase tracking-[0.25em] text-foreground/50 hover:text-foreground/90 transition-colors border-b border-white/[0.04]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#reserva"
              onClick={() => setOpen(false)}
              className="flex w-full justify-center items-center text-[11px] uppercase tracking-[0.28em] text-primary-foreground bg-gradient-red px-5 py-4 transition-opacity hover:opacity-90"
            >
              Chamar no Whatsapp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
