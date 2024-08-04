type SkillsType = { category: string, skills: { svg: string, label: string }[] }

export const SKILLS: SkillsType[] = [
    { 
        category: "Frontend & UI/UX Design", 
        skills: [
            { label: "Nextjs", svg: "nextjs" },
            { label: "React", svg: "react" },
            { label: "Tailwind", svg: "tailwind" },
            { label: "Vuejs", svg: "vue" },
            { label: "TypeScript", svg: "ts" },
            { label: "Astro", svg: "astro" },
            { label: "SCSS", svg: "scss" },
            { label: "Figma", svg: "figma" },
        ] 
    },

    { 
        category: "Backend & Scalability", 
        skills: [
            { label: "Nodejs", svg: "node" },
            { label: "Express", svg: "express" },
            { label: "Django", svg: "django" },
            { label: "Flask", svg: "flask" },
            { label: "Nestjs", svg: "nestjs" },
            { label: "GraphQL", svg: "graphql" },
        ] 
    },

    { 
        category: "Databases", 
        skills: [
            { label: "Mongo", svg: "mongo" },
            { label: "Postgres", svg: "postgres" },
            { label: "MySQL", svg: "mysql" },
            { label: "Redis", svg: "redis" },
            { label: "Neo4j", svg: "neo4j" },
        ] 
    },

    { 
        category: "Technologies", 
        skills: [
            { label: "Docker", svg: "docker" },
            { label: "Linux", svg: "linux" },
            { label: "AWS", svg: "aws" },
            { label: "Redux", svg: "redux" },
            { label: "Prisma", svg: "prisma" },
            { label: "NGINX", svg: "nginx" },
            { label: "Git", svg: "git" },
        ] 
    },

    { 
        category: "Languages", 
        skills: [
            { label: "JavaScript", svg: "javascript" },
            { label: "Python", svg: "python" },
            { label: "C++", svg: "c++" },
            { label: "Bash", svg: "bash" },
            { label: "Solidity", svg: "solidity" },
        ] 
    },

    { 
        category: "Others", 
        skills: [
            { label: "Photoshop", svg: "photoshop" },
            { label: "Premiere Pro", svg: "premiere pro" },
            { label: "Flutter", svg: "flutter" },
            { label: "Complete SEO", svg: "seo" },
        ] 
    },
]