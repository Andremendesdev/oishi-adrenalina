import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#reserva", label: "Reserva" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-[0.25em] text-foreground">
            Oishi
          </span>
          <span className="font-jp text-sm text-primary tracking-widest">
            桜
          </span>
        </a>

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

        <a
          href="#reserva"
          className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.25em] text-foreground border border-primary/60 px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Reservar
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
