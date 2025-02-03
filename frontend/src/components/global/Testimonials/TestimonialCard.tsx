import { ClassNameType } from "@/common/types/reactTypes"
import Image from "next/image"

export const TestimonialCard = ({ designation, imgAlt, imgSrc, name, company, testimonial, useH3, className }: { name: string, designation: string, testimonial: string, company?: string, imgSrc: string, imgAlt: string, useH3?: boolean; className?: ClassNameType }) => (
    <div className={`p-4 sm:p-6 border border-snow/5 sm:border-snow/10 rounded-3xl flex flex-col justify-start gap-y-3 transition-colors duration-300 cursor-pointer hover:border-snow/30 ${className || ""}`}>
        <div className="grid grid-cols-[38px_auto] sm:grid-cols-[42px_auto] items-center gap-x-3">
            <div className="row-span-2 relative rounded-full overflow-hidden aspect-square bg-smoke">
                <Image alt={imgAlt} src={imgSrc} width={42} height={42} unoptimized decoding="async" draggable={false} className="w-full h-full object-cover object-center" />
            </div>
            {useH3 ? <h4 className="max-sm:text-sm">{name}</h4> : <div className="max-sm:text-sm">{name}</div>}
            <div className="text-snow/50 text-xs sm:text-sm whitespace-nowrap truncate">{designation}{company ? `, ${company}` : ""}</div>
        </div>
        <h5 className="text-xs sm:text-sm text-snow/70 sm:text-snow/80">&quot;{testimonial}&quot;</h5>
    </div>
)

export const TestimonialCardSkeleton = ({ height, className }: { height: "regular" | "medium" | "large" | "small", className?: ClassNameType }) => (
    <div className={`p-5 sm:p-6 border border-snow/10 rounded-3xl flex flex-col justify-start gap-y-3 transition-colors duration-300 cursor-pointer hover:border-snow/30 ${className || ""}`}>
        <div className="grid grid-cols-[38px_auto] sm:grid-cols-[42px_auto] items-center gap-x-3 pb-3.5">
            <div className="row-span-2 relative rounded-full overflow-hidden aspect-square bg-snow/15" />
            <div className="bg-snow/15 w-1/2 h-3" />
            <div className="bg-snow/15 w-1/4 h-2" />
        </div>

        {Array.from({ length: height === "regular" ? 5 : height === "medium" ? 8 : height === "small" ? 3 : 12 }).map((_, index) => (
            <div className={`bg-snow/15 ${(index + 1) % 3 === 0 ? "w-4/5" : (index + 1) % 2 === 0 ? "w-3/5" : "w-1/2"} h-1.5`} key={index} />
        ))}
    </div>
)