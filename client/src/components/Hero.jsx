import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-mono text-lg mb-4 animate-fade-in">
            Hello, my name is
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-slide-up">
            Irfan Khan
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            I build things for the <span className="text-gradient">web</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full-stack developer specializing in building exceptional digital experiences. 
            Currently focused on creating AI integrated solutions, accessible, human-centered products.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all shadow-glow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="https://github.com/ik-deep/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/irfan-khan173/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:er.irfan2798@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
