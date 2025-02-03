import { JSX } from "react"

export type ImageType = { src: string, alt: string }
export type RouteNamesType = "/about" | "/portfolio" | "/projects"
export type PopupType = {
    variant: {
        mobile: "drawer" | "dialog",
        desktop: "dialog" | "sheet"
    },
    popupId: string
}
export type RichTextType = (
    | {
        type: "heading" | "subheading" | "para",
        text: string,
        hideOnMobile?: boolean
    }
    | {
        type: "points",
        details: { [k: string]: string }[],
        hideOnMobile?: boolean
    }
    | {
        type: "link",
        svg?: JSX.Element,
        newTab?: boolean,
        href: string,
        label: string,
        hideOnMobile?: boolean,
        extraPadding?: boolean
    }
    | (PopupType & {
        type: "popover",
        svg?: JSX.Element,
        label: string,
        hideOnMobile?: boolean
    })
)
export type InterestsType = {
    backgroundImage: ImageType
    interestType: {
        svg: JSX.Element
        name: string
    }
    title: string
    desc: string
    bottomLink: {
        label: string
    }
    link: string,
    isExternal?: boolean;
}
export type SkillsType = {
    category: string,
    skills: {
        subcategory: string,
        svgs: { svg?: JSX.Element, label: string }[]
    }[]
}
export type LeetcodeStatsType = {
    easySolved: number
    totalEasy: number
    mediumSolved: number
    totalMedium: number
    hardSolved: number
    totalHard: number
    totalSolved: number
    totalQuestions: number
}
export type TestimonialType = {
    name: string
    image: ImageType
    designation: string
    company?: string
    testimonial: string
}

// ========= PROJECTS =============================

type ProjectKind = "SELF_PROJECT" | "FREELANCE_PROJECT" | "COMPANY_PROJECT" | "PART_TIME_PROJECT"
type ProjectType = "SOFTWARE" | "GRAPHICS"
export type ProjectDetailsType = {
    Software: {
        name: string
        start: Date
        end: Date | null
        description: string
        type: ProjectType
        kind: ProjectKind
        link: string
        logo: { src: string, alt: string }
        thumbnail: { src: string, alt: string }
        contracter?: {
            name: string
            image: {
                alt: string
                src: string
            }
        }
        Project_Specialization_Software: {
            responsibilities: string[]
            techStack: { label: string, svg: JSX.Element }[]
            misc?: string[]
            github?: string
            teamSize: string
            associatedTo?: {
                name: string
                miniLogo: { alt: string, src: string }
                logo: { alt: string, src: string }
            }
        }
        ProjectsGallery?: { image: { alt: string, src: string } }[]
    },
    Art: {
        name: string
    }
}



// ================ TIMELINE =========================
export type MonthDataType = {
    name: string;
    role: string;
    date: {
        from: Date,
        till: Date
    },
    location: string;
    logo: string;
    jobType: "Full-time" | "Part-time" | "Internship" | "Freelance";
    techUsed: never[];
}[]

export type TimelineSequenceType = {
    year: number;
    data: Record<string, MonthDataType>
}



// ================== BLOGS ============================
export type BlogTileType = {
    title: string
    category: string
    thumbnail: ImageType
    slug: string
    authors: { name: string, pfp: ImageType }[]
    description: string
}