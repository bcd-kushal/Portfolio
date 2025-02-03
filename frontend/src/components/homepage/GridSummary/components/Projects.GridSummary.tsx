import { Terminal } from "lucide-react";
import { Card } from "./_Card.GridSummary";
import { PROJECTS_ROUTE } from "@/common/data/_routes";
import Image from "next/image";

const overviewData = [
    { label: "industry projects", value: "15+" },
    { label: "satisfied clients", value: "10+" },
    { label: "avg. response time", value: "86ms" },
]

export default function ProjectsGridSummary() {
    return (
        <Card title="PROJECTS" svg={<Terminal width={14} height={14} />} className="relative sm:row-span-2 pt-7 sm:pt-5 max-sm:border-y border-snow/10 max-sm:hover:border-snow/10 overflow-hidden" link={{ url: PROJECTS_ROUTE }} showOnMobile>
            <div className="z-10 px-3 sm:px-5 pb-7 sm:pb-4 pt-2 flex flex-col justify-start items-start text-[13px] text-snow/60 gap-y-2.5 *:capitalize tracking-wide">
                {overviewData.map(({ label, value }, index) => (
                    <div key={index} className="flex flex-col justify-start">
                        <h3>{label}</h3>
                        <h3 className="font-medium text-snow/95 text-lg">{value}</h3>
                    </div>
                ))}
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 overflow-hidden w-full h-fit">
                <Image src={"/svgs/globe.svg"} width={100} height={100} alt="" unoptimized decoding="async" draggable={false} className="w-full h-full object-cover object-center opacity-40 sm:opacity-50" />
            </div>
        </Card>
    )
}