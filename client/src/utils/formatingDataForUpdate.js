export const dataFormating = (data) => {
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
      projects: data.projects,
      
    };
  
    return formattedData;
  }
