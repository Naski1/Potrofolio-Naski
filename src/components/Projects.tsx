import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
    status: "Completed",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team chat, and advanced analytics.",
    technologies: ["Vue.js", "Firebase", "Vuetify", "JavaScript"],
    status: "In Progress",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "Machine learning powered application that generates unique artwork based on text prompts and style preferences.",
    technologies: ["Python", "TensorFlow", "Flask", "React", "OpenAI API"],
    status: "Completed",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Weather Analytics Dashboard",
    description: "Real-time weather monitoring system with predictive analytics and interactive data visualizations.",
    technologies: ["Next.js", "D3.js", "Weather API", "MongoDB", "Chart.js"],
    status: "Planning",
    github: "#",
    demo: "#"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed": return "bg-secondary/20 text-secondary";
    case "In Progress": return "bg-primary/20 text-primary";
    case "Planning": return "bg-accent/20 text-accent";
    default: return "bg-muted/20 text-muted-foreground";
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest development projects showcasing various technologies and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card p-8 rounded-2xl group smooth-transition animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary smooth-transition">
                    {project.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <Code2 className="h-8 w-8 text-primary opacity-50 group-hover:opacity-100 smooth-transition" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/20 hover:text-primary smooth-transition cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-border bg-glass backdrop-blur-sm hover:bg-muted/50 smooth-transition"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground smooth-transition"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;