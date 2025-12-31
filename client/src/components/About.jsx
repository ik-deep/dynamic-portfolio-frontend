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
                Hello! I'm Irfan khan, a passionate web developer based in India.
                Results-oriented Full Stack Developer with 2+ years of experience across Java, MERN, and Angular ecosystems, specializing in high-availability web applications.
              </p>
              <p>
                Proven track record at Tekizma India Solutions of improving application stability by 15% through rigorous bug resolution and feature engineering.
                Currently deep-specializing in MERN stack architectures and advanced Data Structures (1000+ problems solved) to build scalable, secure enterprise solutions.
              </p>
              <p>
                Currently deep-specializing in MERN stack architectures and advanced Data Structures (1000+ problems solved) to build scalable, secure enterprise solutions.
              </p>
              <div className="pt-4">
                <p className="text-foreground font-medium mb-3">Technologies I work with:</p>
                <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                  {['JavaScript (ES6+)', 'TailwindCSS', 'React', 'MongoDB', 'Express','Angular', 'Node.js', 'MySQL' ].map((tech) => (
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
                    <img src={profileImage} alt="irfankhan" />
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
