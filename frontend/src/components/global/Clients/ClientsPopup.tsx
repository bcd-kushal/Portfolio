'use client'
import { TimelineSequenceType } from "@/common/types/types"
import Timeline from "../Timeline/Timeline"
import { useState } from "react"
import { Check } from "lucide-react"

export default function TimelineSequence({ timelines }: { timelines: TimelineSequenceType[] }) {
    const [onlyFullTime, setOnlyFullTime] = useState<boolean>(false)

    const fullTimeRoles: TimelineSequenceType[] = timelines
        .map(({ year, data }) => ({
            year,
            data: Object.fromEntries(
                Object.entries(data).map(([month, monthData]) => [
                    month,
                    monthData.filter((job) => job.jobType === "Full-time"),
                ]).filter(([, monthData]) => monthData.length > 0)
            ),
        }))
        .filter(({ data }) => Object.keys(data).length > 0)

    const activeData = onlyFullTime ? fullTimeRoles : timelines

    return (
        <div className="bg-matte border border-snow/10 grid grid-cols-1 rounded-t-3xl sm:rounded-3xl *:px-6 !px-0 pt-6 max-sm:h-[85dvh] h-[65dvh] sm:w-[600px]">
            <div className="max-sm:text-center space-y-1 sm:space-y-2 pb-4 border-b border-snow/10 h-fit">
                <div className="text-xl">Clients I&apos;ve built for</div>
                <div className="text-snow/60 flex text-sm items-center justify-center sm:justify-start gap-x-2">
                    <div onClick={() => setOnlyFullTime(prev => !prev)} className={`cursor-pointer ${onlyFullTime ? "bg-accent border-accent" : "bg-transparent border-snow/60"} border rounded-sm aspect-square w-4 transition-all duration-300 flex items-center justify-center`}>
                        <Check width={13} height={13} strokeWidth={3} className={`text-black ${onlyFullTime ? "opacity-100" : "opacity-0"} transition-opacity duration-300`} />
                    </div>
                    <span>Show full-time roles only</span>
                </div>
            </div>

            <div className="relative flex flex-col justify-start overflow-auto scrollbar-hide max-sm:px-2 pt-3">
                {activeData
                    .map(({ year, data }, index1) => (
                        <>
                            {index1 !== 0 && (
                                <Timeline isTransition={true} dir={index1 % 2 === 0 ? "rtl" : "ltr"} />
                            )}
                            <Timeline isTransition={false} dir={index1 % 2 === 0 ? "ltr" : "rtl"} lineLabel={year.toString()} lineLabelType="year" key={index1} />
                            {Object.entries(data).map(([month, orgs]) => {
                                return orgs.map(({ name, role, date: { from, till }, location, jobType, techUsed, logo }, index3) => (
                                    <Timeline
                                        key={index3}
                                        isTransition={false}
                                        dir={index1 % 2 === 0 ? "ltr" : "rtl"}
                                        lineLabel={index3 === 0 ? month : ""}
                                        lineLabelType="month"
                                        name={name}
                                        date={{ from, till }}
                                        jobType={jobType}
                                        location={location}
                                        role={role}
                                        logo={logo}
                                        techUsed={techUsed}
                                    />
                                ))
                            })}
                            {index1 === activeData.length - 1 && (
                                <Timeline isTransition={false} lineLabel="" lineLabelType="month" dir={index1 % 2 === 0 ? "ltr" : "rtl"} />
                            )}
                        </>
                    ))}
            </div>
        </div>
    )
}