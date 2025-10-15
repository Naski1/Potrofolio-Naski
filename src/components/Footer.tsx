import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 border-t border-border">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Portfolio</h3>
            <p className="text-muted-foreground leading-relaxed">
              Creating beautiful digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['Gallery', 'Projects', 'About', 'Contact'].map((link) => (
          <button
            key={link}
            className="block text-muted-foreground hover:text-primary smooth-transition"
          >
            {link}
          </button>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <p className="text-muted-foreground">
              Ready to work together? Drop me a line and let's create something extraordinary.
            </p>
            <div className="flex gap-3">
              <a
          href="https://github.com/Naski1"
          target="_blank"
          rel="noopener noreferrer"
              >
          <Button variant="ghost" size="icon" className="hover:text-primary smooth-transition">
            <Github className="h-5 w-5" />
          </Button>
              </a>
              <Button variant="ghost" size="icon" className="hover:text-primary smooth-transition">
          <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary smooth-transition">
          <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Portfolio. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> Naski Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;