const portfolioData = {
    personalInfo: {
        name: "Israt Jahan Bhuiyan",
        title: "Full-Stack Software Engineer",
        summary: "With 2 years of experience in the fintech sector, I focus on building scalable monorepo systems and secure, high-performance applications using <strong>React</strong>, <strong>Angular</strong>, and <strong>Node.js</strong>.",
        email: "isratjahanbhuiyan79@gmail.com",
        phone: "01960201350",
        linkedin: "https://linkedin.com/in/israt-jahan-bhuiyan-769116272",
        github: "https://github.com/Israt07"
    },
    experience: [
        {
            title: "Associate Software Engineer",
            company: "Finhero",
            location: "Tanjung Tokong, Malaysia",
            date: "Sep 2024 – Present",
            duties: [
                "Set up and managed a TypeScript monorepo to manage multiple financial products, including platforms for car dealers (RHB), iPay88, and Biztory, and built an auto loan system using Node.js, TS, and MySQL.",
                "Built a custom form-building tool using JSON and React Hook Forms to save time on RHB Personal Loan and Biztory projects.",
                "Led the end-to-end development of the \"Device as a Service\" (DaaS) platform for ICT Zone from scratch.",
                "Enhanced system security by implementing Azure SAS tokens, JWT/OAuth2, and migrating legacy PHP modules to Node.js microservices.",
                "Integrated CI/CD pipelines via GitHub Actions, maintained Docker environments, and increased test coverage by 60% with Cypress."
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Finhero",
            date: "Mar 2024 – Sep 2024",
            duties: [
                "Built and maintained B2B web applications using AdonisJS for client account management and analytics reporting.",
                "Created a Python-based automation tool to analyze PDFs, extracting data automatically.",
                "Developed a secure API for real-time financial data integration.",
                "Contributed to an SME lending management system with Angular and Tailwind CSS, optimizing the MySQL DB structure.",
                "Documented API endpoints and architectures for cross-functional teams."
            ]
        }
    ],
    projects: [
        {
            title: "International Student Services App",
            description: "Designed a Kotlin-based mobile application with Firebase integration for real-time data storage and secure user authentication, streamlining access to vital info for foreign students.",
            tech: ["Kotlin", "Firebase", "Android"]
        },
        {
            title: "iCondo",
            description: "Built an application automating condominium management tasks like parcel collection, facility booking, and visitor management, improving operational efficiency.",
            tech: ["Android Studio", "JavaScript", "MySQL"]
        },
        {
            title: "HelpConnect",
            description: "Developed a PHP-based web app connecting elderly individuals with volunteers, focusing on improving social well-being through community resource integration.",
            tech: ["PHP", "Web"]
        },
        {
            title: "Object Detection",
            description: "Implemented object detection using TensorFlow and SSD MobileNet V3 architecture for real-time detection in images and videos.",
            tech: ["AI/ML", "TensorFlow", "Python"]
        },
        {
            title: "Clothing Store Management",
            description: "Created a system automating product management and sales tracking to reduce manual data entry and improve efficiency.",
            tech: ["C++", "MySQL"]
        },
        {
            title: "Plant Ordering System",
            description: "Built a Flutter application facilitating plant sales, management, and monitoring, providing a smooth UX and transaction transparency.",
            tech: ["Flutter", "Dart"]
        }
    ],
    skills: [
        {
            category: "Languages",
            tags: ["TypeScript", "JavaScript", "Java", "Kotlin", "Python", "PHP", "C++", "HTML", "CSS"]
        },
        {
            category: "Frontend",
            tags: ["React", "Angular", "Next.js", "Vue.js", "Flutter", "Tailwind CSS", "React Hook Form"]
        },
        {
            category: "Backend & DB",
            tags: ["Node.js", "Express.js", "AdonisJS", "MySQL", "PostgreSQL", "TypeORM"]
        },
        {
            category: "DevOps & Tools",
            tags: ["Git", "GitHub Actions", "Docker", "CI/CD", "JWT / OAuth2", "Firebase", "TensorFlow", "Figma"]
        }
    ],
    education: {
        degree: "Bachelor of Computer Science (Software Development)",
        university: "Universiti Teknikal Malaysia Melaka (UTeM)",
        location: "Melaka, Malaysia",
        date: "Graduated: 2024",
        awards: "Achieved recognition for academic excellence by being placed on the Dean's List for two consecutive semesters."
    }
};

module.exports = {
    getPortfolioData: () => portfolioData
};
