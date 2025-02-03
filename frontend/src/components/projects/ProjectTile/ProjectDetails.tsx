import { ClassNameType } from "@/common/types/reactTypes"
import { ProjectDetailsType } from "@/common/types/types"
import { dateToString } from "@/lib/dateToString"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectDetails({ project, className }: { project: ProjectDetailsType["Software"] | undefined, className?: ClassNameType }) {
    if (!project)
        return <></>

    return (
        <div className={`grid grid-cols-1 auto-rows-min gap-y-1 relative ${className || ""}`}>
            <div className="!px-0">
                <div className="bg-matte/20 aspect-video overflow-hidden relative">
                    <Image src={project.thumbnail.src} alt={project.thumbnail.alt} unoptimized decoding="async" width={200} height={200} priority={false} className="w-full h-full object-cover object-center" />
                </div>
            </div>

            <div className="z-10 flex flex-col items-center justify-center gap-y-0.5 -mt-12 mb-10">
                <div className="rounded-full bg-matte border-2 border-snow/20 w-fit p-3.5">
                    <div className="aspect-square w-14">
                        <Image src={project.logo.src} alt={project.logo.alt} draggable={false} width={50} height={50} unoptimized decoding="async" className="w-full h-full object-contain object-center" priority={false} />
                    </div>
                </div>
                <div className="text-xl mt-1.5">{project.name}</div>
                <div className="text-xs text-snow/65 h-full flex items-end">
                    {dateToString(project.start, "no-day", true)} - {project.end ? dateToString(project.end, "no-day", true) : "Present"}
                </div>
            </div>

            <div className="flex flex-col items-start text-justify gap-y-2 mb-10 text-snow/75">
                <div className="text-xl mb-0.5 col-span-2 text-snow">Tech stack used</div>
                <div className="flex flex-wrap gap-2 *:text-sm">
                    {project.Project_Specialization_Software.techStack.map((tech, index) => (
                        <div key={index} className="w-fit flex items-center justify-start gap-x-1.5 px-3 py-1 rounded-lg bg-smoke">
                            {tech.svg}
                            <span>{tech.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <ul className="flex flex-col items-start text-justify gap-y-2 mb-10 text-snow/65 list-disc max-sm:max-w-[calc(100dvw_-_12px)] max-sm:translate-x-3">
                <div className="text-xl mb-0.5 col-span-2 text-snow max-sm:-translate-x-3">Responsibilities</div>
                {project.Project_Specialization_Software.responsibilities.map((rp, index) => (
                    <li key={index} className="text-left">{rp}</li>
                ))}
            </ul>

            <div className="grid grid-cols-1 auto-rows-min gap-y-1.5 mb-10 text-snow/65">
                <div className="text-xl mb-0.5 col-span-2 text-snow">Gallery</div>
                <div className="grid grid-cols-3 gap-2 *:rounded-xl *:aspect-square *:relative *:bg-accent">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <ul className="flex flex-col items-start text-justify gap-y-2 mb-10 text-snow/65 list-disc max-sm:max-w-[calc(100dvw_-_12px)] max-sm:translate-x-3">
                <div className="text-xl mb-0.5 col-span-2 text-snow max-sm:-translate-x-3">Project milestones</div>
                {project.Project_Specialization_Software.responsibilities.map((rp, index) => (
                    <li key={index} className="text-left">{rp}</li>
                ))}
            </ul>


            <div className="grid grid-cols-[95px_1fr] gap-y-1.5 mb-10 text-snow/65">
                <div className="text-xl mb-0.5 col-span-2 text-snow">Client details</div>
                <div>Built for</div>
                <div>{project.contracter ? project.contracter.name : project.Project_Specialization_Software.associatedTo?.name || ""}</div>
                <div>Client type</div>
                <div className="capitalize">{project.kind.split("_")[0].toLowerCase()}</div>
                {/* <div className="text-snow/65">Team size: {project.Project_Specialization_Software.teamSize}</div> */}
            </div>

            <div className="bottom-0 sticky bg-matte backdrop-blur-sm border-t border-snow/20 grid grid-cols-2 !px-0">
                <div className="py-2.5 px-3 text-accent flex items-center justify-center text-base gap-x-1.5">
                    <ExternalLink width={16} height={16} />
                    <span>Link</span>
                </div>
                <div className="py-2.5 px-3 text-accent flex items-center justify-center text-base gap-x-1.5 border-l border-snow/20">
                    <Github width={16} height={16} />
                    <span>GitHub</span>
                </div>
            </div>
        </div>
    )
}