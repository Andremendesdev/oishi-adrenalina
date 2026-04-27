import { Navbar } from "@/components/sakura/Navbar";
import { Hero } from "@/components/sakura/Hero";
import { About } from "@/components/sakura/About";
import { Menu } from "@/components/sakura/Menu";
import { Features } from "@/components/sakura/Features";
import { Gallery } from "@/components/sakura/Gallery";
import { CtaReserve } from "@/components/sakura/CtaReserve";
import { Footer } from "@/components/sakura/Footer";
import { WhatsAppFab } from "@/components/sakura/WhatsAppFab";
import { PetalRain } from "@/components/sakura/PetalRain";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <PetalRain />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Features />
      <Gallery />
      <CtaReserve />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
