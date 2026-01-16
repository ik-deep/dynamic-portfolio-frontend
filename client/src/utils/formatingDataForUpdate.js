export const dataFormating = (data) => {
   const [first, second, third, ...others] = data.projects || [];
   const projectsFormate = {
     featured: [first, second, third].filter(Boolean), 
     other: others
   }

    const formattedData = {
      name: data.name,
      email: data.email,
      github: data.github,
      linkedin: data.linkedin,
      address: data.address,
      title: data.title,
      summary: data.summary,
      technologiesWorkWith: data.technologiesWorkWith,
      description: data.description,
      skills: data.skills,
      experiences: data.experiences,
      projects: projectsFormate,
      
    };
  
    return formattedData;
  }
