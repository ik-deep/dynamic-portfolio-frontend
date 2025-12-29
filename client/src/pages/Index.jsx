import Navbar from '../components/Navbar';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import { ExperienceSection } from '../components/Experience.jsx';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceSection/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
