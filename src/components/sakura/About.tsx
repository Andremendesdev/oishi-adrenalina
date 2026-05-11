export const About = () => {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 reveal">
          <span className="font-jp text-primary text-sm tracking-[0.4em]">
            私たちについて
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
            Onde a tradição
            <br />
            <span className="italic text-gradient-red">encontra Piraju.</span>
          </h2>
        </div>

        <div
          className="lg:col-span-6 lg:col-start-7 reveal"
          style={{ transitionDelay: "120ms" }}
        >
          <p className="text-lg leading-relaxed text-foreground/85 font-light">
            O <span className="text-primary">Oishi</span> é um restaurante e bar
            japonês reconhecido pela atmosfera única, sabor e modernidade.
            Membro AGSB 🇯🇵🇧🇷, uma releitura ousada do oriente.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            De sushi e sashimi cuidadosamente selecionados a temakis exclusivos
            e drinks autorais, oferecemos uma jornada gastronômica em um
            ambiente sofisticado, perfeito para encontros memoráveis.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { n: "10+", l: "Anos de tradição" },
              { n: "60", l: "Itens no cardápio" },
              { n: "AGSB 🇯🇵🇧🇷", l: "Membro" },
            ].map((s, i) => (
              <div key={s.l}>
                <div
                  className={`
                   font-display text-primary
                   ${i === 2 ? "text-2xl" : "text-4xl"}
                      `}
                >
                  {s.n}
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
