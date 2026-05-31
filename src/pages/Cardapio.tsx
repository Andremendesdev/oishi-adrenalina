import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sakura/Navbar";
import { Footer } from "@/components/sakura/Footer";
import { WhatsAppFab } from "@/components/sakura/WhatsAppFab";
import { PetalRain } from "@/components/sakura/PetalRain";
import { Menu } from "@/components/sakura/Menu";

const Cardapio = () => {
  useEffect(() => {
    // Scroll to top when loading the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden min-h-screen flex flex-col">
      <PetalRain />
      <Navbar />
      <div className="flex-grow pt-20">
        <Menu isFullPage />
      </div>
      <Footer />
      <WhatsAppFab />
      
      {/* Floating Back Button */}
      <Link
        to="/"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-background border border-primary/50 text-primary shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all duration-500"
        aria-label="Voltar para a página inicial"
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>
    </main>
  );
};

export default Cardapio;
