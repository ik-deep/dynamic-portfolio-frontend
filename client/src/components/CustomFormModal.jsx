import { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

const CustomFormModal = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    github: '',
    linkedin:'',
    address:'',
    summary: ''
  });
  const [aboutData, setAboutData] = useState({
    title: '',
    description: '',
    skills: ''
  });
  const [skillsData, setSkillsData] = useState({
    technical: '',
    expertise: '',
    certifications: ''
  });
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    technologies: '',
    liveLink: '',
    repoLink:''
  });

  const handleContactSave = (e) => {
    e.preventDefault();
    console.log('Contact saved:', contactData);
  };

  const handleAboutSave = (e) => {
    e.preventDefault();
    console.log('About saved:', aboutData);
  };

  const handleSkillsSave = (e) => {
    e.preventDefault();
    console.log('Skills saved:', skillsData);
  };

  const handleProjectSave = (e) => {
    e.preventDefault();
    console.log('Project saved:', projectData);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-foreground">Portfolio Editor</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Contact Section */}
        <div className="border border-border rounded-lg mb-4">
          <button
            onClick={() => toggleSection('contact')}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-muted/50"
          >
            <h3 className="font-semibold text-foreground">Contact Information</h3>
            {expandedSection === 'contact' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {expandedSection === 'contact' && (
            <div className="p-4 border-t border-border">
              <form onSubmit={handleContactSave} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    value={contactData.name}
                    onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  />
                </div>

                  <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Github</label>
                  <input
                    type="text"
                    value={contactData.github}
                    onChange={(e) => setContactData({...contactData, github: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  />
                </div>

                  <div>
                  <label className="block text-sm font-medium text-foreground mb-1">LinkedIn</label>
                  <input
                    type="text"
                    value={contactData.linkedin}
                    onChange={(e) => setContactData({...contactData, linkedin: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  />
                </div>

                  <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Address</label>
                  <input
                    type="text"
                    value={contactData.address}
                    onChange={(e) => setContactData({...contactData, address: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  />
                </div>
                
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Summary</label>
                  <textarea
                    value={contactData.summary}
                    onChange={(e) => setContactData({...contactData, summary: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground h-24"
                  />
                </div>
                
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Save Contact
                </button>
              </form>
            </div>
          )}
        </div>

        {/* About Section */}
        <div className="border border-border rounded-lg mb-4">
          <button
            onClick={() => toggleSection('about')}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-muted/50"
          >
            <h3 className="font-semibold text-foreground">About Information</h3>
            {expandedSection === 'about' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {expandedSection === 'about' && (
            <div className="p-4 border-t border-border">
              <form onSubmit={handleAboutSave} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Title</label>
                  <input
                    type="text"
                    value={aboutData.title}
                    onChange={(e) => setAboutData({...aboutData, title: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    placeholder="e.g., Full Stack Developer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                  <textarea
                    value={aboutData.description}
                    onChange={(e) => setAboutData({...aboutData, description: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground h-32"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Skills</label>
                  <input
                    type="text"
                    value={aboutData.skills}
                    onChange={(e) => setAboutData({...aboutData, skills: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    placeholder="React, Node.js, Python..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Save About
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Skills & Expertise Section */}
        <div className="border border-border rounded-lg mb-4">
          <button
            onClick={() => toggleSection('skills')}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-muted/50"
          >
            <h3 className="font-semibold text-foreground">Skills & Expertise</h3>
            {expandedSection === 'skills' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {expandedSection === 'skills' && (
            <div className="p-4 border-t border-border">
              <form onSubmit={handleSkillsSave} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Technical Skills</label>
                  <textarea
                    value={skillsData.technical}
                    onChange={(e) => setSkillsData({...skillsData, technical: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground h-24"
                    placeholder="JavaScript, React, Node.js, Python, SQL..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Areas of Expertise</label>
                  <textarea
                    value={skillsData.expertise}
                    onChange={(e) => setSkillsData({...skillsData, expertise: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground h-24"
                    placeholder="Web Development, API Design, Database Management..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Certifications</label>
                  <input
                    type="text"
                    value={skillsData.certifications}
                    onChange={(e) => setSkillsData({...skillsData, certifications: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    placeholder="AWS Certified, Google Cloud Professional..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Save Skills
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Projects Section */}
        <div className="border border-border rounded-lg mb-4">
          <button
            onClick={() => toggleSection('projects')}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-muted/50"
          >
            <h3 className="font-semibold text-foreground">Projects</h3>
            {expandedSection === 'projects' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          
          {expandedSection === 'projects' && (
            <div className="p-4 border-t border-border">
              <form onSubmit={handleProjectSave} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Project Title</label>
                  <input
                    type="text"
                    value={projectData.title}
                    onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    placeholder="e.g., E-commerce Platform"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                  <textarea
                    value={projectData.description}
                    onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground h-32"
                    placeholder="Describe your project..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Technologies Used</label>
                  <input
                    type="text"
                    value={projectData.technologies}
                    onChange={(e) => setProjectData({...projectData, technologies: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    placeholder="React, Node.js, MongoDB..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Github Link</label>
                  <input
                    type="url"
                    value={projectData.repoLink}
                    onChange={(e) => setProjectData({...projectData, repoLink: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    placeholder="https://github.com/username/project"
                  />
                </div>
                
                   <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Live Link</label>
                  <input
                    type="url"
                    value={projectData.liveLink}
                    onChange={(e) => setProjectData({...projectData, liveLink: e.target.value})}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    placeholder="https://......."
                  />
                </div>
                
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Save Project
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomFormModal;