import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/header.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const navigateToGallery = () => {
    navigate('/gallery');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 animate-glow" />
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">I'm Naski</span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Creating beautiful and functional websites with clean code and creative design.
                </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect smooth-transition"
                onClick={navigateToGallery}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border bg-glass backdrop-blur-sm hover:bg-muted/50 smooth-transition"
              >
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
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
          
          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-2 rounded-2xl">
              <img 
                src={heroImage} 
                alt="Creative Developer"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float glow-effect" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;