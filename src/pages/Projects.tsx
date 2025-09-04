import { useState } from "react";
import { ArrowLeft, Github, ExternalLink, Code2, Calendar, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    fullDescription: "Built a comprehensive e-commerce platform from scratch featuring real-time inventory tracking, secure payment processing with Stripe integration, advanced admin dashboard with analytics, customer management system, and responsive design. The platform handles thousands of transactions daily and includes features like abandoned cart recovery, product recommendations, and multi-vendor support.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript", "Docker", "AWS"],
    status: "Completed",
    github: "#",
    demo: "#",
    duration: "6 months",
    team: "4 developers",
    features: [
      "Real-time inventory management",
      "Secure payment processing",
      "Admin dashboard with analytics",
      "Customer management system",
      "Responsive design",
      "Multi-vendor support"
    ],
    challenges: "Implementing real-time inventory updates across multiple vendors while maintaining data consistency and handling high transaction volumes during peak shopping periods.",
    results: "Increased client sales by 250% and reduced cart abandonment by 35%."
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team chat, and advanced analytics.",
    fullDescription: "Developed a comprehensive project management solution that enables teams to collaborate effectively with real-time updates, integrated chat system, advanced analytics dashboard, time tracking, and custom workflow automation. The application supports multiple project views including Kanban boards, Gantt charts, and calendar views.",
    technologies: ["Vue.js", "Firebase", "Vuetify", "JavaScript", "WebSocket", "Chart.js"],
    status: "In Progress",
    github: "#",
    demo: "#",
    duration: "4 months",
    team: "3 developers",
    features: [
      "Real-time collaboration",
      "Team chat integration",
      "Advanced analytics",
      "Time tracking",
      "Custom workflows",
      "Multiple project views"
    ],
    challenges: "Ensuring real-time synchronization across multiple users while maintaining optimal performance and implementing complex permission systems for different user roles.",
    results: "Currently in beta testing with 500+ active users and 95% satisfaction rate."
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "Machine learning powered application that generates unique artwork based on text prompts and style preferences.",
    fullDescription: "Created an AI-powered image generation platform that allows users to create unique artwork through text prompts and style selections. The application integrates multiple AI models, includes advanced prompt engineering tools, batch processing capabilities, and a community gallery for sharing creations.",
    technologies: ["Python", "TensorFlow", "Flask", "React", "OpenAI API", "Redis", "PostgreSQL"],
    status: "Completed",
    github: "#",
    demo: "#",
    duration: "8 months",
    team: "5 developers",
    features: [
      "AI-powered image generation",
      "Advanced prompt engineering",
      "Style transfer capabilities",
      "Batch processing",
      "Community gallery",
      "High-resolution outputs"
    ],
    challenges: "Optimizing AI model performance for real-time generation while managing computational costs and implementing sophisticated prompt engineering algorithms.",
    results: "Generated over 100,000 images with 98% user satisfaction and featured in 3 tech publications."
  },
  {
    id: 4,
    title: "Weather Analytics Dashboard",
    description: "Real-time weather monitoring system with predictive analytics and interactive data visualizations.",
    fullDescription: "Developing a comprehensive weather analytics platform that provides real-time monitoring, predictive analytics using machine learning algorithms, interactive data visualizations, and custom alerting systems. The dashboard serves meteorologists, farmers, and emergency response teams.",
    technologies: ["Next.js", "D3.js", "Weather API", "MongoDB", "Chart.js", "Python", "TensorFlow"],
    status: "Planning",
    github: "#",
    demo: "#",
    duration: "5 months",
    team: "6 developers",
    features: [
      "Real-time weather monitoring",
      "Predictive analytics",
      "Interactive visualizations",
      "Custom alerts",
      "Historical data analysis",
      "Mobile applications"
    ],
    challenges: "Processing large volumes of weather data in real-time while implementing accurate predictive models and creating intuitive visualizations for complex datasets.",
    results: "Project planning phase - expected to serve 10,000+ users in agriculture and emergency response sectors."
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
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const navigate = useNavigate();

  const selectedProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 animate-glow" />
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" />
        
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
                <span className="text-foreground">Featured </span>
                <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
                Explore my latest development projects showcasing various technologies and innovative solutions that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card p-8 rounded-2xl group smooth-transition animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary smooth-transition">
                      {project.title}
                    </h3>
                    <Badge className={`${getStatusColor(project.status)} mb-4`}>
                      {project.status}
                    </Badge>
                  </div>
                  <Code2 className="h-8 w-8 text-primary opacity-50 group-hover:opacity-100 smooth-transition" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {project.team}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-muted/50 hover:bg-primary/20 hover:text-primary smooth-transition cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="bg-muted/50">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border bg-glass backdrop-blur-sm hover:bg-muted/50 smooth-transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground smooth-transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProjectData && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-6">
          <div className="glass-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">{selectedProjectData.title}</h2>
                  <div className="flex items-center gap-4">
                    <Badge className={getStatusColor(selectedProjectData.status)}>
                      {selectedProjectData.status}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {selectedProjectData.duration}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {selectedProjectData.team}
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </div>

              {/* Project Details Grid */}
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProjectData.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                    <div className="grid gap-3">
                      {selectedProjectData.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Challenges</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProjectData.challenges}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Results</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProjectData.results}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Links</h3>
                    <div className="flex gap-4">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => window.open(selectedProjectData.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => window.open(selectedProjectData.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
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

export default Projects;