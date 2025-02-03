import { ProjectDetailsType } from "@/common/types/types"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import ProjectDetails from "./ProjectDetails"
import Image from "next/image"
import { dateToString } from "@/lib/dateToString"
import { removeHttps } from "@/lib/removeHttps"

export const DesktopProjectTiles = ({ projects }: { projects: ProjectDetailsType["Software"][] }) =>
    <TooltipProvider delayDuration={200}>
        {projects.map((project, index) => (
            <Tooltip key={index}>
                <TooltipTrigger asChild>
                    <div
                        className="group/card group-hover/section:opacity-40 group-hover/section:blur-sm hover:!blur-none opacity-100 hover:!opacity-100 grid grid-cols-1 auto-rows-min *:px-4 overflow-hidden transition-all duration-300"
                    >
                        <div className="group-hover/card:!opacity-50 aspect-[5/2] !px-0 overflow-hidden relative transition-all duration-300">
                            <Image src={project.thumbnail.src} alt={project.thumbnail.alt} unoptimized decoding="async" width={200} height={200} priority={index < 6 ? true : false} className="w-full h-full object-cover object-center" />
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-matte to-matte/20" />
                        </div>
                        <div className="relative z-10 grid grid-cols-1 grid-rows-[73fr_27fr] -translate-y-[20%] group-hover/card:-translate-y-[46.66%] aspect-[2/1] transition-all duration-300">
                            <div className="flex flex-col justify-start gap-y-0.5">
                                <h2 className="text-2xl ">{project.name}</h2>
                                <div className="text-xs text-snow/65 py-0.5">
                                    {dateToString(project.start, "no-day")} - {project.end ? dateToString(project.end, "no-day") : "Present"}
                                </div>
                                <div className="py-1 flex items-center justify-start gap-x-1.5">
                                    {project.Project_Specialization_Software.techStack.map((tech) => (
                                        <>{tech.svg}</>
                                    ))}
                                </div>
                                <div className="text-xs text-snow/65 h-full flex items-end pb-3">
                                    {removeHttps(project.link || "")}
                                </div>
                            </div>

                            <h3 className="text-xs text-snow/65 flex items-center justify-start">
                                    {project.description}
                            </h3>

                            <div className="z-20 aspect-square absolute w-[15%] -top-[33.3%] group-hover/card:left-[calc(85%_-_16px)] group-hover/card:-top-[15%] transition-all duration-300 left-4">
                                <Image src={project.logo.src} alt={project.logo.alt} draggable={false} width={50} height={50} unoptimized decoding="async" className="w-full h-full object-contain object-center" priority={index < 6 ? true : false} />
                            </div>
                        </div>
                    </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="p-0 overflow-hidden rounded-2xl outline-none border border-snow/5 bg-transparent backdrop-blur-sm" collisionPadding={80}>
                    <ProjectDetails
                        project={project}
                        className="max-w-[380px] max-h-[70dvh] overflow-y-scroll scrollbar-hide relative bg-matte/80 *:px-5"
                    />
                </TooltipContent>
            </Tooltip >
        ))}
    </TooltipProvider>
