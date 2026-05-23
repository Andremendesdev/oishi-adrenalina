import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSanityData } from "@/hooks/useSanityData";
import { siteSettingsQuery } from "@/sanity/queries";

// 1. Tipagem correta para os dados do Sanity
interface SiteSettingsData {
  openHour?: number;
  closeHour?: number;
  restaurantName?: string;
}

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#reserva", label: "Mais" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data: settings } = useSanityData<SiteSettingsData>(
    "siteSettings",
    siteSettingsQuery,
  );

  const openHour = settings?.openHour ?? 16;
  const closeHour = settings?.closeHour ?? 24; // 24 = meia-noite
  const restaurantName = settings?.restaurantName || "Oishi";

  // Formatar hora para exibição, ex: 16 -> 16:00
  const formatHour = (h: number) => {
    if (h === 24 || h === 0) return "00:00";
    return `${h.toString().padStart(2, "0")}:00`;
  };

  useEffect(() => {
    const checkOpenStatus = () => {
      const currentHour = new Date().getHours();
      let currentlyOpen = false;

      // 2. Lógica corrigida para suportar expedientes que viram a madrugada
      if (openHour < closeHour) {
        // Horário normal (ex: 10:00 às 22:00)
        currentlyOpen = currentHour >= openHour && currentHour < closeHour;
      } else {
        // Horário que passa da meia noite (ex: 18:00 às 02:00)
        currentlyOpen = currentHour >= openHour || currentHour < closeHour;
      }

      setIsOpen(currentlyOpen);
    };

    checkOpenStatus();
    const intervalId = setInterval(checkOpenStatus, 60000); // Checa a cada minuto

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(intervalId);
    };
  }, [openHour, closeHour]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        {/* Lado Esquerdo: Logo */}
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-[0.25em] text-foreground">
            {restaurantName.split(" ")[0]}
          </span>
          <span className="font-jp text-sm text-primary tracking-widest">
            桜
          </span>
        </a>

        {/* Centro: Links (apenas no Desktop) */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Lado Direito: Status + Botão Visite-nos + Menu Mobile */}
        <div className="flex items-center gap-4">
          {/* Caixa de Aberto/Fechado */}
          <div
            className="flex text-xs uppercase tracking-[0.2em] font-body
           flex-col items-center rounded-xl border border-red-500/20 bg-transparent px-2 py-1 backdrop-blur-sm shadow-[0_0_20px_rgba(239,68,68,0.08)] scale-90 sm:scale-100 origin-right"
          >
            <div className="flex items-center gap-2">
              <div
                className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-green-400 shadow-[0_0_10px_#4ade80]" : "bg-red-400"}`}
              />
              <span
                className={`${isOpen ? "text-white" : "text-red-400"} text-sm font-bold font-mono`}
              >
                {formatHour(openHour)}
              </span>
              <span className="text-zinc-600 text-sm">—</span>
              <span
                className={`${isOpen ? "text-white" : "text-red-400"} text-sm font-bold font-mono`}
              >
                {formatHour(closeHour)}
              </span>
            </div>
            <span
              className={`${isOpen ? "text-white" : "text-red-400"} text-xs uppercase tracking-[0.2em] mt-1`}
            >
              {isOpen ? "Aberto" : "Fechado"}
            </span>
          </div>

          {/* Botão Desktop */}
          <a
            href="#reserva"
            className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.25em] text-foreground border border-primary/60 px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Visite-nos
          </a>

          {/* Ícone de Menu Mobile */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden text-foreground flex items-center justify-center p-1"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/60 transition-all duration-500",
          open ? "max-h-[480px]" : "max-h-0",
        )}
      >
        <ul className="container flex flex-col gap-1 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#reserva"
              onClick={() => setOpen(false)}
              className="inline-flex w-full justify-center items-center text-xs uppercase tracking-[0.25em] border border-primary/60 px-5 py-3 hover:bg-primary hover:text-primary-foreground transition"
            >
              Chamar no WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
