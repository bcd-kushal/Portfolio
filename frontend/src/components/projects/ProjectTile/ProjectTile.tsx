'use client'
import { IS_DESKTOP } from "@/common/constants/mediaQuery"
import { MySqlSVG, NextjsSVG } from "@/common/svgs/svgs"
import { useMediaQuery } from "usehooks-ts"
import { ProjectDetailsType } from "@/common/types/types"
import { DesktopProjectTiles } from "./DesktopProjectTile"
import { MobileProjectTiles } from "./MobileProjectTile"



const softwareProjects: ProjectDetailsType["Software"][] = [
    {
        name: "Giftlaya",
        description: "Giftlaya is an all India gifts and decorations service provider",
        start: new Date('2024-11-01'),
        end: null,
        kind: "COMPANY_PROJECT",
        logo: { src: "/images/companies/giftlaya.webp", alt: "" },
        thumbnail: { src: "/images/projects/giftlaya-desktop-thumbnail.webp", alt: "" },
        type: "SOFTWARE",
        link: "https://giftlaya.com",
        Project_Specialization_Software: {
            responsibilities: [
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            misc: [

                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            techStack: [{ label: "Next.js 15", svg: <NextjsSVG key={1} /> }, { label: "MySQL", svg: <MySqlSVG key={2} /> }],
            associatedTo: {
                name: "MantraMugdh",
                logo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
                miniLogo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
            },
            teamSize: "5 to 7"
        }
    },
    {
        name: "Balloondekor",
        description: "India's #1 balloon decoration providing service",
        start: new Date('2024-05-01'),
        end: new Date('2024-07-01'),
        kind: "COMPANY_PROJECT",
        logo: { src: "/images/companies/balloondekor.webp", alt: "" },
        thumbnail: { src: "/images/projects/balloondekor-thumbnail.webp", alt: "" },
        type: "SOFTWARE",
        link: "https://balloondekor.com",
        Project_Specialization_Software: {
            responsibilities: [
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            misc: [

                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            techStack: [{ label: "Next.js 15", svg: <NextjsSVG key={1} /> }, { label: "MySQL", svg: <MySqlSVG key={2} /> }],
            associatedTo: {
                name: "MantraMugdh",
                logo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
                miniLogo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
            },
            teamSize: "5 to 7"
        }
    },
    {
        name: "SkillShetra",
        description: "Practical skills > Theoretical knowledge",
        start: new Date('2024-12-01'),
        end: null,
        kind: "COMPANY_PROJECT",
        logo: { src: "/images/companies/skillshetra.webp", alt: "" },
        thumbnail: { src: "/images/projects/skillshetra-thumbnail.webp", alt: "" },
        type: "SOFTWARE",
        link: "https://skillshetra.com",
        Project_Specialization_Software: {
            responsibilities: [
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            misc: [

                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            techStack: [{ label: "Next.js 15", svg: <NextjsSVG key={1} /> }, { label: "MySQL", svg: <MySqlSVG key={2} /> }],
            associatedTo: {
                name: "MantraMugdh",
                logo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
                miniLogo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
            },
            teamSize: "5 to 7"
        }
    },
    {
        name: "MantraMugdh",
        description: "MantraMugdh is a marketing service IT company in Varanasi",
        end: new Date(),
        start: new Date(),
        kind: "COMPANY_PROJECT",
        logo: { src: "/images/companies/mantramugdh.webp", alt: "" },
        thumbnail: { src: "/images/banners/kushal-kumar-github-cover-2025.png", alt: "" },
        type: "SOFTWARE",
        link: "https://themantramugdh.com",
        Project_Specialization_Software: {
            responsibilities: [
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            misc: [

                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            techStack: [{ label: "Next.js 15", svg: <NextjsSVG key={1} /> }, { label: "MySQL", svg: <MySqlSVG key={2} /> }],
            associatedTo: {
                name: "MantraMugdh",
                logo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
                miniLogo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
            },
            teamSize: "5 to 7"
        }
    },
    {
        name: "Portfolio: Priyank Sutariya",
        description: "Personal commission given by Priyank",
        start: new Date('2024-10-01'),
        end: new Date('2024-11-01'),
        kind: "COMPANY_PROJECT",
        logo: { src: "/images/projects/flare.webp", alt: "" },
        thumbnail: { src: "/images/projects/portfolios-desktop.webp", alt: "" },
        type: "SOFTWARE",
        link: "https://priyank-sutariya.vercel.app",
        Project_Specialization_Software: {
            responsibilities: [
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            misc: [

                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            techStack: [{ label: "Next.js 15", svg: <NextjsSVG key={1} /> }, { label: "MySQL", svg: <MySqlSVG key={2} /> }],
            associatedTo: {
                name: "MantraMugdh",
                logo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
                miniLogo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
            },
            teamSize: "5 to 7"
        }
    },
    {
        name: "Pipme",
        description: "Python package bundling automation",
        start: new Date('2024-10-01'),
        end: new Date('2024-11-01'),
        kind: "FREELANCE_PROJECT",
        logo: { src: "/images/projects/pipme.webp", alt: "" },
        thumbnail: { src: "/images/projects/portfolios-desktop.webp", alt: "" },
        type: "SOFTWARE",
        link: "https://priyank-sutariya.vercel.app",
        Project_Specialization_Software: {
            responsibilities: [
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            misc: [

                "Responsible for low ping API development in Go through channels and pooling, scoring 4ms return times",
                "Built search algorithm with trie structure and pre-compute redis, boosting search result speed by 450%",
                "Developed reviews synchronization algorithm using hash-bucket and min-heap having <7ms runtime",
                "Optimized client’s SQL schema via normalization and session management, benefiting querying by ~17",
                "Improved frontend admin logic through useMemo and Cloudflare cache media, loading admin in ~500ms",
            ],
            techStack: [{ label: "Next.js 15", svg: <NextjsSVG key={1} /> }, { label: "MySQL", svg: <MySqlSVG key={2} /> }],
            associatedTo: {
                name: "MantraMugdh",
                logo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
                miniLogo: { alt: "MantraMugdh", src: "/images/companies/mantramugdh.webp" },
            },
            teamSize: "5 to 7"
        }
    },
    
]

export default function ProjectTiles() {
    const isDesktop = useMediaQuery(IS_DESKTOP)
    return isDesktop
        ? <DesktopProjectTiles projects={softwareProjects} />
        : <MobileProjectTiles projects={softwareProjects} />
}


