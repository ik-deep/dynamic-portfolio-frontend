import profileImage from "../assets/darkprofileimg.png"
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/Authcontext.jsx';
import { defaultAboutData } from '../utils/DefaultPortfolioData.js';

const About = () => {
  const { portfolioData } = useContext(AuthContext);
  const data = portfolioData || defaultAboutData;

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
                {data.description}
              </p>
              <div className="pt-4">
                <p className="text-foreground font-medium mb-3">Technologies I work with:</p>
                <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                  {data.technologiesWorkWith?.map((tech) => (
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
                    <img src={profileImage} alt="profileImg" />
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
