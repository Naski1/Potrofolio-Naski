// components/Contact.tsx
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect and bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl smooth-transition hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new projects, opportunities, or partnerships. 
                Feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Badge className="rounded-full p-3 bg-primary/20 text-primary">
                    <Mail className="h-5 w-5" />
                  </Badge>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">hello@yourdomain.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Badge className="rounded-full p-3 bg-primary/20 text-primary">
                    <Phone className="h-5 w-5" />
                  </Badge>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+1 (123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Badge className="rounded-full p-3 bg-primary/20 text-primary">
                    <MapPin className="h-5 w-5" />
                  </Badge>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links (Optional) */}
              <div className="flex gap-4 mt-8">
                {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((social) => (
                  <Button
                    key={social}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary smooth-transition"
                    aria-label={social}
                  >
                    <span className="text-sm font-medium">{social[0]}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl smooth-transition hover:shadow-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="bg-muted/50 border-border focus:border-primary smooth-transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-muted/50 border-border focus:border-primary smooth-transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  className="bg-muted/50 border-border focus:border-primary smooth-transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="bg-muted/50 border-border focus:border-primary resize-none smooth-transition"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground smooth-transition group">
                Send Message
                <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 smooth-transition" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;