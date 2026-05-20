import hero from "@/assets/hero-restaurant.jpg";
import i1 from "@/assets/interior.jpeg";
import i2 from "@/assets/interior2.jpeg";
import i3 from "@/assets/interior3.jpeg";
import f1 from "@/assets/fora.jpeg";
import f2 from "@/assets/frente.jpeg";

export const Gallery = () => {
  return (
    <section id="galeria" className="relative py-32 bg-secondary/40">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-20 reveal">
          <span className="font-jp text-primary text-sm tracking-[0.4em]">
            ギャラリー
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            <span className="italic text-gradient-red">Atmosfera</span> Oishi
          </h2>
          <div className="divider-line w-32 mt-8" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 lg:h-[640px]">
          <figure className="reveal relative col-span-2 row-span-2 overflow-hidden group">
            <img
              src={i1}
              alt="Salão do Sakura Lounge com lanternas vermelhas"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
          </figure>
          <figure
            className="reveal relative overflow-hidden group"
            style={{ transitionDelay: "100ms" }}
          >
            <img
              src={i2}
              alt="Chef preparando sushi"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
          </figure>
          <figure
            className="reveal relative overflow-hidden group"
            style={{ transitionDelay: "180ms" }}
          >
            <img
              src={f1}
              alt="Variedade de sushi"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
          </figure>
          <figure
            className="reveal relative overflow-hidden group"
            style={{ transitionDelay: "260ms" }}
          >
            <img
              src={i3}
              alt="Bar do Sakura Lounge"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
          </figure>
          <figure
            className="reveal relative overflow-hidden group"
            style={{ transitionDelay: "340ms" }}
          >
            <img
              src={f2}
              alt="Ambiente do restaurante"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
