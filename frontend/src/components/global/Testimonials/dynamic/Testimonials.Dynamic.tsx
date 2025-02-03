import { TestimonialType } from "@/common/types/types";
import { TestimonialCard, TestimonialCardSkeleton } from "../TestimonialCard";
import TestimonialsKanbanDynamic from "./TestimonialsKanban.Dynamic";
import { MessageCircleOff } from "lucide-react";
// import { DOMAIN } from "@/common/constants/environmentVariables";
import { TESTIMONIALS_DATA } from "@/common/data/misc/testimonials";


export default function TestimonialsDynamic({ area }: { area: "page" | "popup" }) {
    const testimonials = TESTIMONIALS_DATA

    if (area === "page")
        return (
            <>
                <TestimonialCells testimonials={testimonials} area={area} useH3 />
                <TestimonialCells testimonials={testimonials} area={area} />
            </>
        )

    return <TestimonialsKanbanDynamic testimonials={testimonials} />
}

{/* <div className="grid auto-cols-auto grid-rows-[repeat(3,auto)] grid-flow-col items-start justify-start gap-4 px-2 animate-auto-scroll"> */ }
export const TestimonialCells = ({ testimonials, area, useH3 }: { testimonials: TestimonialType[], area: "page" | "popup", useH3?: boolean }) =>
    area === "page"
        ? <div className={`flex flex-col flex-wrap items-start justify-start h-[600px] sm:h-[700px] min-w-max gap-4 px-2 animate-auto-scroll sm:group-hover:paused`}>
            {testimonials.map(({ name, testimonial, designation, company, image: { alt, src } }, index) => (
                <TestimonialCard designation={designation} imgAlt={alt} imgSrc={src} name={name} testimonial={testimonial} company={company} useH3={useH3} className="w-64 sm:w-80" key={index} />
            ))}
        </div>
        : testimonials.length > 0
            ? testimonials.map(({ name, testimonial, designation, company, image: { alt, src } }, index) => (
                <TestimonialCard designation={designation} imgAlt={alt} imgSrc={src} name={name} company={company} testimonial={testimonial} key={index} />
            )) : (
                <div className="text-sm text-snow/40 py-20 flex items-center justify-center flex-col gap-y-1.5">
                    <MessageCircleOff width={40} height={40} />
                    <span className="text-xl text-snow mt-5">Empty stack...</span>
                    <span>No testimonial match these filters</span>
                </div>
            )


// ------------------------------------------------------------------------
// FALLBACK ---------------------------------------------------------------
// ------------------------------------------------------------------------

export const TestimonialFallback = async ({ area }: { area: "page" | "popup" }) =>
    area === "page"
        ? (

            <div className={`text-snow/20 animate-pulse h-[600px] sm:h-[700px] overflow-auto scrollbar-hide flex flex-col flex-wrap items-start justify-start gap-4`}>
                {Array.from({ length: 15 }).map((_, index) => (
                    <TestimonialCardSkeleton key={index} height={index % 6 === 0 ? "large" : index % 4 === 0 ? "medium" : index % 3 === 0 ? "small" : "regular"} className={"w-64 sm:w-80"} />
                ))}
            </div>
        ) : (
            <>
                <div className="max-sm:row-start-2 pb-4 sm:py-8 flex flex-col justify-start gap-2">
                    <div></div>
                    <div className="text-xl">Filter by</div>
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div className="bg-smoke/50 text-snow rounded-[9px] py-2 px-3 flex items-center text-[13px]" key={index} />
                    ))}

                    <div className="text-xl">Sort by</div>
                    <div className="grid grid-cols-2 gap-x-2">
                        {Array.from({ length: 2 }).map((_, index) => (
                            <div className="bg-smoke/50 text-snow rounded-[9px] py-2 px-3 flex items-center text-[13px]" key={index} />
                        ))}
                    </div>
                </div>
                <div className="pt-9 sm:py-8 flex flex-col justify-start gap-4 overflow-auto scrollbar-hide">
                    <div className={`animate-pulse flex flex-col justify-start gap-4 overflow-auto scrollbar-hide`}>
                        {Array.from({ length: 15 }).map((_, index) => (
                            <TestimonialCardSkeleton key={index} height={index % 6 === 0 ? "large" : index % 4 === 0 ? "medium" : index % 3 === 0 ? "small" : "regular"} />
                        ))}
                    </div>
                </div>
            </>
        )
