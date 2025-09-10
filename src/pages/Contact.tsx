import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="Contact">
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Contact;
