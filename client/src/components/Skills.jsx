const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'Angular.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS', 'Redux Toolkit', 'Bootstrap', 'MUI'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs','JWT Authentication'],
    },
    {
      title: 'Programing Languages',
      skills: ['Java (Core)', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git/GitHub', 'Docker', 'Postman', 'Figma', 'VS Code', 'Agile/Scrum'],
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Leadership'],
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary font-mono text-lg mr-2">02.</span>
            Skills & Expertise
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg font-mono hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
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

export default Skills;
