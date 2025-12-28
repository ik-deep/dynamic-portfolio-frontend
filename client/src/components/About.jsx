import profileImage from "../assets/darkprofileimg.png"

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary font-mono text-lg mr-2">01.</span>
            About Me
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Irfan khan, a passionate software developer based in India. 
                I enjoy creating things that live on the internet, whether that be websites, 
                applications, or anything in between.
              </p>
              <p>
                My interest in web development started back in 2020 when I decided to try 
                creating custom themes for my blog — turns out hacking together a custom 
                reblog button taught me a lot about HTML & CSS!
              </p>
              {/* <p>
                Fast-forward to today, and I've had the privilege of working at an 
                advertising agency, a start-up, a student-led design studio, and a huge 
                corporation. My main focus these days is building accessible, inclusive 
                products and digital experiences.
              </p>
               */}
              <div className="pt-4">
                <p className="text-foreground font-medium mb-3">Technologies I work with:</p>
                <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                  {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Angular', 'MySQL'].map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <span className="text-primary">▹</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-lg group-hover:bg-primary/30 transition-all duration-300" />
                <div className="relative bg-muted rounded-lg overflow-hidden border-2 border-primary/50">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    {/* <div className="text-6xl">👨‍💻</div> */}
                   <img src={profileImage} alt="irfankhan"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
