import { useState } from "react";
import { ArrowLeft, ExternalLink, ZoomIn, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Abstract Composition",
    category: "Digital Art",
    image: gallery1,
    description: "Modern geometric patterns with flowing gradients that represent the harmony between chaos and order in digital spaces.",
    technologies: ["Photoshop", "Illustrator", "Cinema 4D"],
    year: "2024",
    client: "Personal Project",
    details: "This piece explores the intersection of geometric precision and organic flow, creating a visual metaphor for the balance between structure and creativity in design."
  },
  {
    id: 2,
    title: "Digital Landscape",
    category: "3D Design",
    image: gallery2,
    description: "Futuristic tech-inspired visualization that captures the essence of digital transformation and virtual environments.",
    technologies: ["Blender", "After Effects", "Substance Painter"],
    year: "2024",
    client: "Tech Startup",
    details: "Created for a tech company's brand identity, this landscape represents the journey into digital transformation and the endless possibilities of virtual spaces."
  },
  {
    id: 3,
    title: "Minimal Forms",
    category: "UI/UX Design",
    image: gallery3,
    description: "Clean geometric composition with soft gradients that embodies the principles of modern minimalist design.",
    technologies: ["Figma", "Sketch", "Principle"],
    year: "2023",
    client: "Design Agency",
    details: "This minimalist approach focuses on the power of negative space and subtle color transitions to create visual impact through simplicity and elegance."
  },
  {
    id: 4,
    title: "Code Visualization",
    category: "Data Art",
    image: gallery4,
    description: "Abstract representation of programming concepts through dynamic visual patterns and algorithmic beauty.",
    technologies: ["Processing", "D3.js", "WebGL"],
    year: "2024",
    client: "Developer Conference",
    details: "An artistic interpretation of code structure and data flow, transforming abstract programming concepts into tangible visual experiences."
  }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const navigate = useNavigate();

  const selectedGalleryItem = selectedItem ? galleryItems.find(item => item.id === selectedItem) : null;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 animate-glow" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8 animate-slide-up">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
              className="hover:text-primary smooth-transition"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="gradient-text">Creative</span>
                <span className="text-foreground"> Gallery</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
                A curated collection of my creative works, showcasing various digital art forms, design explorations, and visual experiments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden smooth-transition animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setSelectedItem(item.id)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover smooth-transition hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent 
                    smooth-transition ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="icon" variant="secondary" className="bg-glass backdrop-blur-sm">
                            <ZoomIn className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {item.category}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Gallery Details */}
      {selectedGalleryItem && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-6">
          <div className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedGalleryItem.title}</h2>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {selectedGalleryItem.category}
                  </Badge>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedItem(null)}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedGalleryItem.image}
                  alt={selectedGalleryItem.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedGalleryItem.details}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedGalleryItem.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                        Year
                      </h4>
                      <p className="text-foreground">{selectedGalleryItem.year}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                        Client
                      </h4>
                      <p className="text-foreground">{selectedGalleryItem.client}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Size
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Gallery;