import { useState } from "react";
import { ExternalLink, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    description: "Modern geometric patterns with flowing gradients"
  },
  {
    id: 2,
    title: "Digital Landscape",
    category: "3D Design",
    image: gallery2,
    description: "Futuristic tech-inspired visualization"
  },
  {
    id: 3,
    title: "Minimal Forms",
    category: "UI/UX Design",
    image: gallery3,
    description: "Clean geometric composition with soft gradients"
  },
  {
    id: 4,
    title: "Code Visualization",
    category: "Data Art",
    image: gallery4,
    description: "Abstract representation of programming concepts"
  }
];

const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Creative</span>
            <span className="text-foreground"> Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my creative works, showcasing various digital art forms and design explorations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group glass-card rounded-2xl overflow-hidden smooth-transition animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover smooth-transition group-hover:scale-110"
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
                        <Button size="icon" variant="secondary" className="bg-glass backdrop-blur-sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;