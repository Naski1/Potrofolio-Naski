import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import Kontak from "@/components/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="Contact">
          <Kontak />
        </div>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Contact;
