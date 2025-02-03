import { ClassNameType } from "@/common/types/reactTypes";
import { ImageType } from "@/common/types/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";

export default function ImageButton({ bottomLabel, image, svg, title, desc, svgLabel, className, paddingType = "default", form = "default" }: { image: ImageType, title: string, desc?: string, bottomLabel: string, svg: JSX.Element, svgLabel?: string, className?: ClassNameType, paddingType?: "default" | "less" | "none", form?: "default" | "short" }) {
    return (
        <div className={`group rounded-3xl grid *:row-start-1 *:col-start-1 relative transition-all duration-500 cursor-pointer overflow-hidden ${form === "default" ? "aspect-[3/1.7] sm:aspect-[22/9]" : "aspect-[3/1.7] sm:aspect-[3/1]"} ${className || ""}`}>
            <Image
                src={image.src}
                alt={image.alt}
                unoptimized
                decoding="async"
                draggable={false}
                className="z-0 w-full h-full object-cover object-center absolute top-0 left-0 rounded-t-[25px] scale-110 group-hover:scale-100 transition-all duration-500"
                width={500}
                height={500}
            />
            <div className={`z-20 px-0 ${paddingType === "default" ? "sm:px-8" : paddingType === "none" ? "sm:px-0" : "sm:px-5"} max-sm:group-hover:pl-6 flex flex-col justify-between *:text-left h-full items-start transition-all duration-300`}>
                <div className={`${paddingType === "default" ? "pt-8" : paddingType === "none" ? "pt-0" : "pt-5"} flex flex-col justify-start ${paddingType === "less" ? "gap-y-2" : "gap-y-1.5"}`}>
                    <h3 className="text-2xl text-snow">{title}</h3>
                    <span className="flex items-center justify-start gap-x-1.5 text-sm text-snow/60">
                        {svg || <></>}
                        {svgLabel && svgLabel.length > 0 && (
                            <h4>{svgLabel}</h4>
                        )}
                    </span>
                    {desc && desc.length > 0 && (
                        <span className="text-xs text-snow/50 my-0.5">{desc}</span>
                    )}
                </div>

                <span className={`${paddingType === "default" ? "pb-8" : paddingType === "none" ? "pb-0" : "pb-5"} ${form === "short" ? "translate-y-1" : ""} text-sm w-fit text-accent transition-all duration-300 flex items-center justify-start gap-x-3 group-hover:gap-x-4 cursor-pointer`}>
                    <span>{bottomLabel}</span>
                    <ChevronRight width={15} height={15} className="translate-y-px transition-all duration-300" />
                </span>

            </div>


            <div className="z-10 bg-matte sm:bg-latex h-full -translate-x-1 transition-all duration-500 [mask-image:radial-gradient(100%_200%_at_top_left,white,transparent)] scale-105" />
            <div className="z-10 bg-matte sm:bg-latex h-full -translate-x-1 transition-all duration-500 [mask-image:radial-gradient(100%_200%_at_top_left,white,transparent)] group-hover:opacity-60 sm:group-hover:opacity-95 scale-105" />
            <div className="z-10 bg-matte sm:bg-latex h-full -translate-x-1 transition-all duration-500 [mask-image:radial-gradient(100%_200%_at_bottom_left,white,transparent)] group-hover:opacity-0 scale-105" />
            <div className="z-10 bg-matte sm:bg-latex h-full -translate-x-1 transition-all duration-500 [mask-image:radial-gradient(100%_200%_at_bottom_left,white,transparent)] group-hover:opacity-0 sm:hidden scale-105" />
        </div>
    )
}