import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for scalability.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'AI Content Generator',
      description: 'SaaS platform leveraging AI to generate marketing content, blog posts, and social media copy with customizable templates.',
      tech: ['React', 'Python', 'OpenAI', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  const otherProjects = [
    { title: 'Weather Dashboard', description: 'Real-time weather app with forecasting', tech: ['React', 'API'] },
    { title: 'Portfolio Generator', description: 'CLI tool to generate developer portfolios', tech: ['Node.js', 'CLI'] },
    { title: 'Chat Application', description: 'Real-time messaging with encryption', tech: ['Socket.io', 'React'] },
    { title: 'Expense Tracker', description: 'Personal finance management app', tech: ['Vue.js', 'Firebase'] },
    { title: 'Recipe Finder', description: 'Search and save recipes from around the world', tech: ['React', 'API'] },
    { title: 'Markdown Editor', description: 'Live preview markdown editor with export', tech: ['TypeScript', 'React'] },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary font-mono text-lg mr-2">03.</span>
            Things I've Built
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mb-12" />

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}>
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder className="w-16 h-16 text-primary/40" />
                    </div>
                  </div>
                </div>

                <div
                  className={`md:col-span-6 md:absolute ${
                    index % 2 === 1 ? 'md:left-0' : 'md:right-0'
                  } z-10`}
                >
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <div className="bg-card p-6 rounded-lg shadow-card mb-4 border border-border">
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'}`}>
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-card-hover group"
              >
                <Folder className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex gap-2 font-mono text-xs text-muted-foreground">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
