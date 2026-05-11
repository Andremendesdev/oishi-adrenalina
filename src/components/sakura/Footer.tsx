import { Instagram, MapPin, Phone, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-16">
      <div className="container grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl tracking-[0.25em]">
              Oishi Adrenalina
            </span>
            <span className="font-jp text-primary">桜</span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Restaurante e bar japonês onde tradição, sabor e sofisticação se
            encontram em cada detalhe.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-1 text-primary" />
              Rua 13 de Maio, 705 — Piraju-SP
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-primary" />
              (14) 99775-7180
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={14} className="text-primary" />
              @oishiadrenalina
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
                Seg — Sáb
                <br />
                16h às 00h
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Oishi Restaurante. Todos os direitos
          reservados.
        </p>
        <p className="font-jp tracking-widest">桜・ラウンジ</p>
      </div>
    </footer>
  );
};
