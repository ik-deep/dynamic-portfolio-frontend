import Portfolio from "../models/Portfolio.js";
async function insertDefaultPortfolio() {
    const DEFAULT_ID = "DEFAULT_PORTFOLIO_ID";

    try {
        // 1. Check if the default portfolio already exists
        const existingDefault = await Portfolio.findOne({ userId: DEFAULT_ID });

        if (existingDefault) {
            console.log("Default portfolio content already exists. Skipping insertion.");
            return;
        }

        // 2. Define the default content
        const defaultContent = {
            userId: DEFAULT_ID,
            name: "Irfan Khan ",
            address: "Sector 12, Noida, India",
            title: "Expert MERN Stack Developer",
            sortSummary: "Welcome to my portfolio! This data is here by default. If you register and log in, you can create and edit your own unique version of this page using the application forms.",
            longSummary: "Hello! I'm Irfan khan, a passionate web developer based in India. Results-oriented Full Stack Developer with 2+ years of experience across Java, MERN, and Angular ecosystems, specializing in high-availability web applications.Proven track record at Tekizma India Solutions of improving application stability by 15% through rigorous bug resolution and feature engineering. Currently deep-specializing in MERN stack architectures and advanced Data Structures (1000+ problems solved) to build scalable, secure enterprise solutions.Currently deep-specializing in MERN stack architectures and advanced Data Structures (1000+ problems solved) to build scalable, secure enterprise solutions.",
            workedOnSkills: [
                { name: "JavaScript (ES6+)", level: "Expert" },
                { name: "TailwindCSS", level: "Advanced" },
                { name: "React", level: "Expert" },
                { name: "MongoDB", level: "Advanced" },
                { name: "Express", level: "Advanced" },
                { name: "Node.js", level: "Advanced" },
                { name: "MySQL", level: "Advanced" }
            ],
            skills : {
                frontend: [
                    { name: "JavaScript (ES6+)", level: "Expert" },
                    { name: "TailwindCSS", level: "Advanced" },
                    { name: "React", level: "Expert" }
                ],
                backend: [
                    { name: "MongoDB", level: "Advanced" },
                    { name: "Express", level: "Advanced" },
                    { name: "Node.js", level: "Advanced" },
                    { name: "MySQL", level: "Advanced" }
                ],
                programmingLanguages: [
                    { name: "JavaScript", level: "Expert" },
                    { name: "Java", level: "Expert" },
                    { name: "Python", level: "Advanced" }
                ],
                tools: [
                    { name: "Git", level: "Advanced" },
                    { name: "GitHub", level: "Advanced" },
                    { name: "VS Code", level: "Advanced" },
                    { name: "Postman", level: "Advanced" },
                    { name: "Jira", level: "Advanced" }
                ],
                softSkills: [
                    { name: "Problem Solving", level: "Expert" },
                    { name: "Team Collaboration", level: "Expert" },
                    { name: "Leadership", level: "Advanced" }
                ]

            },
            experience: [
               { company: "Tekizma India Solutions", position: "Product Engineer", startDate: "Apr-2022", endDate: "Feb-2023",address:"Bengaluru, India", description: "Developed and maintained multiple client-facing applications. Collaborated with design and product teams to deliver high-quality features." }
            ],
            projects: [
                {
                    title: "Editable Portfolio App",
                    description: "A full-stack application built with MERN for personalized portfolio creation.",
                    links: [{
                        liveLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                    },
                    { githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" }
                    ]
                },
                 {
                    title: "Editable Portfolio App (This App)",
                    description: "A full-stack application built with MERN for personalized portfolio creation.",
                    links: [{
                        liveLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                    },
                    { githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" }
                    ]
                },
                 {
                    title: "Editable Portfolio App (This App)",
                    description: "A full-stack application built with MERN for personalized portfolio creation.",
                    links: [{
                        liveLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                    },
                    { githubLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" }
                    ]
                },
            ],
            contactEmail: "er.irfan2798@gmail.com",
            githubUrl: "https://github.com/ik-deep/",
            linkedinUrl: "https://linkedin.com/irfan-khan173/",
        };

        // 3. Insert the default record
        await Portfolio.create(defaultContent);
        console.log("✅ Successfully inserted default portfolio content.");

    } catch (error) {
        console.error("❌ Error inserting default portfolio:", error);
    }
}

export default insertDefaultPortfolio;