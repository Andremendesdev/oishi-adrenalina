import { Calendar, Clock, Ticket } from "lucide-react";
import { useSanityData } from "@/hooks/useSanityData";
import { showsQuery } from "@/sanity/queries";

interface ShowItem {
  artist: string;
  date: string;
  time: string;
  description: string;
  imageUrl?: string;
}

export const LiveShows = () => {
  const { data: shows } = useSanityData<ShowItem[]>("shows", showsQuery);

  // A lista oficial agora é estritamente o que vem do Sanity.
  // Se não vier nada (ainda carregando ou vazio), assumimos um array vazio [].
  const showsList = shows || [];

  return (
    <section id="programacao" className="relative py-32 bg-secondary/20">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 reveal">
            <span className="font-jp text-primary text-sm tracking-[0.4em]">
              ライブ
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
              Programação{" "}
              <span className="italic text-gradient-red">ao vivo</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-muted-foreground text-lg leading-relaxed reveal">
            Sinta a música. Nossas noites são acompanhadas por curadoria musical
            exclusiva para elevar sua experiência gastronômica.
          </p>
        </div>

        {/* Renderização Condicional: Tem show na lista? */}
        {showsList.length > 0 ? (
          <div
            className={`grid gap-px bg-border/60 mx-auto ${
              showsList.length === 1
                ? "max-w-md grid-cols-1" // 1 show: centralizado com tamanho contido
                : showsList.length === 2
                  ? "max-w-5xl sm:grid-cols-2" // 2 shows: lado a lado centralizados
                  : "sm:grid-cols-2 lg:grid-cols-3 w-full" // 3+ shows: ocupa toda a largura em 3 colunas
            }`}
          >
            {showsList.map((show, i) => (
              <div
                key={i}
                className="reveal bg-background group flex flex-col overflow-hidden transition-colors duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Cabeçalho do Card (Imagem) */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={show.imageUrl || "/placeholder-image.jpg"}
                    alt={show.artist}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    loading="lazy"
                  />
                  {/* Degradê sobre a imagem para não ficar muito claro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30 opacity-90" />

                  {/* Badge de Data/Hora (Estilo Vidro/Blur) */}
                  <div className="absolute top-5 left-5 bg-background/80 backdrop-blur-md border border-white/10 p-2.5 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center bg-primary/20 text-primary">
                      <Calendar size={14} />
                    </div>
                    <div className="flex flex-col pr-3">
                      <span className="text-[11px] uppercase tracking-widest text-primary font-bold leading-none mb-1.5">
                        {show.date}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5 leading-none">
                        <Clock size={10} /> {show.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corpo do Card (Textos) */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Linha decorativa no topo do texto */}
                  <div className="absolute top-0 left-8 w-12 h-0.5 bg-primary/30 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />

                  <h3 className="font-display text-3xl mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                    {show.artist}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {show.description}
                  </p>

                  <button className="mt-auto pt-4 border-t border-border/50 text-xs uppercase tracking-widest flex items-center gap-2.5 font-bold group-hover:text-primary transition-colors">
                    <Ticket size={15} className="text-primary" /> Venha nos
                    visitar
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Estado Vazio: O que aparece se o cliente deletar tudo no Sanity */
          <div className="flex flex-col items-center justify-center py-24 bg-background/50 border border-border/50 text-center reveal">
            <Calendar className="w-12 h-12 text-primary/40 mb-6" />
            <h3 className="font-display text-3xl mb-3">
              Agenda em atualização
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
              Estamos preparando novas atrações musicais para as próximas
              noites. Acompanhe nossas redes sociais para ficar por dentro das
              novidades.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
