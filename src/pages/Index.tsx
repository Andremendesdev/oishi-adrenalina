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
import { LoadingIntro } from "@/components/sakura/LoadingIntro";
import { useReveal } from "@/hooks/useReveal";
import { LiveShows } from "@/components/sakura/LiveShows";
import { Reviews } from "@/components/sakura/Reviews";
import { Location } from "@/components/sakura/Location";
import { useState } from "react";

const Index = () => {
  useReveal();
  const [introDone, setIntroDone] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  return (
    <>
      {!introDone && <LoadingIntro onComplete={() => setIntroDone(true)} />}
      <main
        className="relative bg-background text-foreground overflow-x-hidden"
        aria-hidden={!introDone}
      >
      <PetalRain />
      <Navbar />
      <Hero introDone={introDone} />
      <Menu />
      <LiveShows />
      <About />
      <Features />
      <Gallery />
      <CtaReserve />
      <Reviews />
      <Location />
      <Footer />
      <WhatsAppFab />
    </main>
    </>
  );
};

export default Index;
