import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
