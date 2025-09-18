import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import path from "path";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Gallery", path: "/gallery" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.href) {
      // Handle hash links for contact section
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.href!);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            Naski
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className="text-muted-foreground hover:text-foreground smooth-transition relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full smooth-transition" />
              </button>
            ))}
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-card mt-2 p-4 rounded-xl animate-scale-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className="text-left text-muted-foreground hover:text-foreground smooth-transition"
                >
                  {item.label}
                </button>
              ))}
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;