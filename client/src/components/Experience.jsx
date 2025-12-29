import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    achievements: [
      'Reduced application load time by 40%',
      'Led team of 5 developers on major product launch',
      'Implemented CI/CD pipelines improving deployment efficiency',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client-facing applications. Collaborated with design and product teams to deliver high-quality features.',
    achievements: [
      'Built RESTful APIs serving 100k+ daily requests',
      'Migrated legacy codebase to modern React architecture',
      'Improved test coverage from 30% to 85%',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Hub',
    location: 'Austin, TX',
    period: '2018 - 2020',
    description: 'Started career building web applications and learning modern development practices. Worked on various projects from e-commerce to SaaS platforms.',
    achievements: [
      'Developed customer dashboard used by 5k+ users',
      'Contributed to open-source projects',
      'Received "Rising Star" award in first year',
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="glass-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-xs">• {exp.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">▹</span>
                          <span className="text-foreground/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
