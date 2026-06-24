import { motion } from "framer-motion";

// 1. Tipagem dos dados das avaliações
interface Review {
  id: string;
  author: string;
  initials: string;
  text: string;
  rating: number;
  timeAgo: string;
}

// 2. Avaliações reais do Google
const reviews: Review[] = [
  {
    id: "1",
    author: "Débora Sohn",
    initials: "DS",
    text: "Que bela surpresa! Muito melhor que comida de boteco de fato. Fomos por indicação da pousada que ficamos, pois é próxima — foi o melhor almoço que tivemos em nossa viagem!",
    rating: 5,
    timeAgo: "Há 3 meses",
  },
  {
    id: "2",
    author: "Marta Leme",
    initials: "ML",
    text: "Primeira vez que fui, a casa estava lotada, mas fomos muito bem atendidos. Comida é ótima.",
    rating: 5,
    timeAgo: "Há 5 meses",
  },
  {
    id: "3",
    author: "Bianca Bononi",
    initials: "BB",
    text: "Ambiente muito gostoso, com bastante natureza e vista. Recomendo!",
    rating: 5,
    timeAgo: "Há 2 anos",
  },
];

// 3. Configuração da animação (de baixo para cima)
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Componente auxiliar para as estrelas do Google
const StarIcon = () => (
  <svg
    className="w-4 h-4 text-[#FABB04] fill-current"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const Reviews = () => {
  return (
    <section
      id="avaliacoes"
      className="relative py-24 overflow-hidden bg-muted/20"
    >
      <div className="container">
        {/* Cabeçalho da Seção */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.span
            variants={fadeUpVariants}
            className="block font-jp text-primary text-sm tracking-[0.4em]"
          >
            お客様の声
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            className="mt-4 font-display text-4xl md:text-5xl leading-tight"
          >
            O que dizem <br className="md:hidden" />
            <span className="italic text-gradient-red">sobre nós</span>
          </motion.h2>

          <motion.div
            variants={fadeUpVariants}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-sm font-medium text-foreground">
              4.9 de 5 estrelas no Google
            </p>
          </motion.div>
        </motion.div>

        {/* Grid de Comentários */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={fadeUpVariants}
              className="bg-background border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Header do Card (Avatar + Nome + Data) */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display text-lg font-medium shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h3 className="text-foreground font-medium">
                    {review.author}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {review.timeAgo}
                  </p>
                </div>
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Texto da Avaliação */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                "{review.text}"
              </p>

              {/* Logo ou Indicação do Google (Opcional) */}
              <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-xs font-medium text-foreground/70">
                  Avaliação do Google
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
