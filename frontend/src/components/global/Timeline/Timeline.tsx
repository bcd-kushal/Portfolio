import { timeGap } from "@/lib/timeGap"
import Image from "next/image"

export default function Timeline(
    props:
        | { isTransition: true, dir: "ltr" | "rtl" }
        | { isTransition: false, lineLabel: string, lineLabelType: "year" | "month", dir: "ltr" | "rtl", name?: string, role?: string, date?: { from: Date, till: Date }, location?: string, jobType?: string, techUsed?: string[], logo?: string }
) {
    const { dir, isTransition } = props
    const duration = !isTransition ? timeGap(props.date?.from, props.date?.till) : null
    const monthsWorked = !isTransition
        ? props.date?.from.toLocaleString("en-US", { month: "short" }) + " - " + (props.date?.till.getMonth() === new Date().getMonth() ? "Present" : props.date?.till.toLocaleString("en-US", { month: "short" }))
        : null

    return (
        <div className={`grid grid-cols-[85px_1fr_85px] ${isTransition ? "min-h-20" : ""}`}>
            {isTransition ? (
                <>
                    <div className="relative">
                        <div className={`absolute w-1/2 h-1/2 ${dir === "rtl" ? "top-1/2 left-1/2 border-t-2 border-l-2 rounded-tl-3xl" : "top-0.5 left-1/2 border-b-2 border-l-2 rounded-bl-3xl"} border-snow/10`} />
                        {dir === "ltr" && (<div className="absolute top-0 left-1/2 border-l-2 border-snow/10 w-1/2 h-0.5" />)}
                    </div>
                    <div className="relative">
                        <div className="absolute w-full h-1/2 top-1/2 border-t-2 border-snow/10" />
                    </div>
                    <div className="relative">
                        <div className={`absolute w-1/2 h-1/2 ${dir === "rtl" ? "top-0.5 left-0 border-b-2 border-r-2 rounded-br-3xl" : "top-1/2 left-0 border-t-2 border-r-2 rounded-tr-3xl"} border-snow/10`} />
                        {dir === "rtl" && (<div className="absolute top-0 left-0 border-r-2 border-snow/10 w-1/2 h-0.5" />)}
                    </div>
                </>
            ) : (
                <>
                    {dir === "ltr" && (
                        <div className="grid items-start justify-center relative">
                            <span className={`bg-matte z-10 ${props.lineLabelType === "year" ? "py-2.5 text-xl text-accent font-medium" : "text-snow/70 py-1.5 translate-y-3 text-sm"}`}>{props.lineLabel}</span>
                            <div className={`absolute h-full w-1/2 top-0 left-1/2 border-l-2 border-snow/10`} />
                        </div>
                    )}
                    {props.name ? (
                        <div className={`col-span-2 py-2 flex flex-col gap-2 ${dir === "ltr" ? "items-start" : "items-end"}`}>
                            <div className={`${props.name && props.jobType ? props.jobType === "Full-time" ? "bg-accent/10" : "bg-smoke/30" : ""} w-[85%] sm:w-fit sm:max-w-[70%] rounded-2xl pt-3.5 pb-4 text-sm grid ${dir === "ltr" ? "grid-cols-[28px_1fr] pr-6 pl-3.5" : "grid-cols-[1fr_28px] pl-6 pr-3.5 *:text-right"} auto-rows-min gap-x-3 ${dir === "rtl" && "items-end"}`}>
                                <div className={`row-span-4 aspect-square self-start relative ${dir === "rtl" && "col-start-2"}`}>
                                    <Image src={props.logo || ""} alt={props.name || ""} width={40} height={40} unoptimized draggable={false} decoding="async" className="h-full w-full object-contain object-center" />
                                </div>
                                <span className="text-base leading-tight">{props.role}</span>
                                <span className="text-xs text-accent/60 mt-1 mb-1.5">{props.name}</span>
                                <span className="text-xs text-snow/50 mb-px">{monthsWorked} • {duration}</span>
                                <span className="text-xs text-snow/50">{props.location}{props.jobType && ` • ${props.jobType}`}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="col-span-2" />
                    )}
                    {dir === "rtl" && (
                        <div className="grid items-start justify-center relative">
                            <span className={`bg-matte z-10 ${props.lineLabelType === "year" ? "py-2.5 text-xl text-accent font-medium" : "text-snow/70 py-1.5 translate-y-3 text-sm"}`}>{props.lineLabel}</span>
                            <div className={`absolute h-full w-1/2 top-0 left-0 border-r-2 border-snow/10`} />
                        </div>
                    )}
                </>
            )}
        </div>
    )
}