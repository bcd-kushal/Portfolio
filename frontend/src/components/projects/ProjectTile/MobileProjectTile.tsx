import { ProjectDetailsType } from "@/common/types/types"
import { useState } from "react"
import ProjectDetails from "./ProjectDetails"
import Image from "next/image"
import { dateToString } from "@/lib/dateToString"
import { removeHttps } from "@/lib/removeHttps"
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer"

export const MobileProjectTiles = ({ projects }: { projects: ProjectDetailsType["Software"][] }) => {
    const [selectedProject, setSelectedProject] = useState<ProjectDetailsType["Software"]>()
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            {projects.map((project, index) => (
                <div
                    onClick={() => {
                        setOpen(true)
                        setSelectedProject(project)
                    }}
                    key={index}
                    className="grid grid-cols-1 auto-rows-min *:px-4 overflow-hidden transition-all duration-300 rounded-2xl"
                >
                    <div className="aspect-[5/2] !px-0 overflow-hidden relative transition-all duration-300">
                        <Image src={project.thumbnail.src} alt={project.thumbnail.alt} unoptimized decoding="async" width={200} height={200} priority={index < 6 ? true : false} className="w-full h-full object-cover object-center" />
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-matte to-transparent" />
                    </div>
                    <div className="relative z-10 grid grid-cols-1 grid-rows-[73fr_27fr] -translate-y-[20%] aspect-[2/1] transition-all duration-300">
                        <div className="flex flex-col justify-start gap-y-0.5">
                            <h2 className="text-xl">{project.name}</h2>
                            <div className="text-xs text-snow/65 py-px">{removeHttps(project.link || "")}</div>
                            <div className="py-1 flex items-center justify-start gap-x-1">
                                {project.Project_Specialization_Software.techStack.map((tech) => (
                                    <>{tech.svg}</>
                                ))}
                            </div>
                            <div className="text-xs text-snow/65 h-full flex items-end pb-3">
                                {dateToString(project.start, "no-day")} - {project.end ? dateToString(project.end, "no-day") : "Present"}: {project.description}
                            </div>
                        </div>

                        <h3 className="text-xs text-snow/65 flex items-center justify-start">
                            {project.description}
                        </h3>

                        <div className="z-20 aspect-square absolute w-[15%] -top-[33.3%] transition-all duration-300 left-4">
                            <Image src={project.logo.src} alt={project.logo.alt} draggable={false} width={50} height={50} unoptimized decoding="async" className="w-full h-full object-contain object-center" priority={index < 2 ? true : false} />
                        </div>
                    </div>
                </div>
            ))}
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerContent className="bg-transparent w-device h-[93dvh] p-0 outline-none border-none text-sm">
                    <DrawerTitle className="hidden" />
                    <ProjectDetails
                        project={selectedProject}
                        className="h-full w-full overflow-y-scroll scrollbar-hide *:px-4 bg-gradient-to-l from-matte to-matte/80 border-t border-snow/15 rounded-t-3xl"
                    />
                </DrawerContent>
            </Drawer>
        </>
    )
}

