import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for scalability.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    },
    {
      title: 'AI Content Generator',
      description: 'SaaS platform leveraging AI to generate marketing content, blog posts, and social media copy with customizable templates.',
      tech: ['React', 'Python', 'OpenAI', 'AWS'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    },
  ];

  const otherProjects = [
    { title: 'Weather Dashboard', description: 'Real-time weather app with forecasting', tech: ['React', 'API'], image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop' },
    { title: 'Tic-Tac-Toe game', description: 'Interactive Tic-Tac-Toe Web Application: Built a responsive, browser-based Tic-Tac-Toe game using React.', tech: ['React', 'Css'], image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop' },
    { title: 'Chat Application', description: 'Real-time messaging with encryption', tech: ['Socket.io', 'React'], image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop' },
    { title: 'Expense Tracker', description: 'Personal finance management app', tech: ['Vue.js', 'Firebase'], image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop' },
    { title: 'Recipe Finder', description: 'Search and save recipes from around the world', tech: ['React', 'API'], image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
    { title: 'Markdown Editor', description: 'Live preview markdown editor with export', tech: ['TypeScript', 'React'], image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' },
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
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
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
                className="relative bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-card-hover group overflow-hidden"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-card/90 group-hover:bg-card/80 transition-colors" />
                <div className="relative p-6 z-10">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
