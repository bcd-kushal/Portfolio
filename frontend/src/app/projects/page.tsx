import { CLIENTS_TIMELINE } from "@/common/data/misc/timelines"
import { METADATA_PROJECTS } from "@/common/seo/meta/projects"
import { Heading1 } from "@/components/atomic/Headings"
import TimelineSequence from "@/components/global/Clients/ClientsPopup"
import PopupWrapper from "@/components/global/PopupWrapper/PopupWrapper"
import MaxWidthWrapper from "@/components/global/Spacings/MaxWidthWrapper/MaxWidthWrapper"
import ProjectTile from "@/components/projects/ProjectTile/ProjectTile"
import { ChartNoAxesGantt, ChevronRight, UsersRound } from "lucide-react"

export const experimental_ppr = true

export const metadata = METADATA_PROJECTS


const QUICK_STATS = [
    { svg: <ChartNoAxesGantt width={20} height={20} />, value: "15+", label: "total projects" },
    { svg: <UsersRound width={20} height={20} />, value: "9", label: "satisfied clients" },
]

export default async function Projects() {
    /* return (
        <MaxWidthWrapper asMain className="text-center text-3xl font-light">
            Coming Soon
        </MaxWidthWrapper>
    ) */

    return (
        <MaxWidthWrapper asMain className="flex flex-col justify-start gap-3">
            <div className="text-xl text-snow/60">Kushal Kumar</div>
            <Heading1 text="Projects" useHTag className="max-w-[750px]" />

            <section className="flex max-sm:flex-col items-start sm:items-center justify-between max-sm:gap-y-4 mt-12 sm:mt-5">
                <ul className="sm:space-y-3 pb-5 sm:pb-2.5 max-sm:w-full max-sm:grid max-sm:grid-cols-2">
                    {QUICK_STATS.map(({ svg, value, label }, index) => (
                        <li key={index}>
                            <div className="group transition-all duration-300 flex max-sm:flex-col items-center justify-start gap-1 sm:gap-4 hover:text-accent sm:pr-3 sm:w-fit font-medium text-sm text-snow/85">
                                <span className="text-snow/40 max-sm:hidden">{svg}</span>
                                <span className="text-snow text-xl sm:hidden">{value}</span>
                                <span className="max-sm:text-snow/50"><span className="max-sm:hidden">{value}</span> {label}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <PopupWrapper
                    popupType={{
                        desktop: "dialog",
                        desktopDir: "top",
                        mobile: "drawer",
                        mobileDir: "bottom"
                    }}
                    triggerComponent={
                        <button className="cursor-pointer text-sm flex items-center justify-center sm:justify-end gap-3 transition-all duration-300 hover:gap-2 text-accent max-sm:bg-accent/10 max-sm:w-full p-2.5 sm:p-0 rounded-xl hover:max-sm:bg-accent/20">
                            <span className="sm:-translate-y-px">See Timeline</span>
                            <ChevronRight width={16} height={16} className="max-sm:hidden" />
                        </button>
                    }
                >
                    <TimelineSequence timelines={CLIENTS_TIMELINE} />
                </PopupWrapper>
            </section>

            <div className="text-2xl mt-9 mb-2">All Projects</div>

            <section className="group/section grid grid-cols-1 max-sm:gap-y-6 md:grid-cols-2 min-[1220px]:grid-cols-3 *:border *:border-snow/10 sm:*:border-snow/5 *:aspect-[3/2]">
                <ProjectTile />
            </section>
        </MaxWidthWrapper>
    )
}

