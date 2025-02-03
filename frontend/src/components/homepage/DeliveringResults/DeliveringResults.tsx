'use client'

import { HOMEPAGE_WINDOWS_CHECKS, HOMEPAGE_WINDOWS_COMPONENT_SUBTITLE, HOMEPAGE_WINDOWS_COMPONENT_TITLE, HOMEPAGE_WINDOWS_GIFS } from "@/common/data/pages/homepage";
import MacOSPanel from "@/components/global/MacOSPanel/MacOSPanel";
import ComponentSubtitle from "@/components/global/Typography/ComponentSubtitle";
import ComponentTitle from "@/components/global/Typography/ComponentTitle";
import Image from "next/image";
import { useState } from "react";

export default function DeliveringResults() {
    const [currSlide, setCurrSlide] = useState<number>(0)

    return (
        <>
            <ComponentTitle title={HOMEPAGE_WINDOWS_COMPONENT_TITLE} />
            <ComponentSubtitle subtitle={HOMEPAGE_WINDOWS_COMPONENT_SUBTITLE} />

            <div className="flex items-center justify-start sm:justify-center gap-x-2 sm:gap-x-6 text-xs sm:text-sm mt-8 w-full overflow-auto scrollbar-hide *:whitespace-nowrap relative">
                <div className="z-10 bg-gradient-to-r sticky left-0 from-matte to-transparent h-full min-w-4 pointer-events-none -ml-2" />
                {HOMEPAGE_WINDOWS_GIFS.map(({ label }, index) => (
                    <div
                        onClick={() => setCurrSlide(index)}
                        className={`rounded-full border px-5 py-2 relative ${currSlide === index ? "border-snow/15 text-accent" : "border-snow/10 text-snow/60 hover:bg-snow/5"} flex items-center cursor-pointer transition-all duration-300`}
                        key={index}
                    >
                        {label}
                        <div className={`absolute -bottom-px left-1/2 -translate-x-1/2 w-3/4 bg-gradient-to-r from-transparent via-accent to-transparent h-px transition-all duration-300 ${index === currSlide ? "opacity-100" : "opacity-0"}`} />
                    </div>
                ))}
                <div className="z-10 bg-gradient-to-l sticky right-0 from-matte to-transparent h-full min-w-4 pointer-events-none" />
            </div>

            <MacOSPanel windowName={HOMEPAGE_WINDOWS_GIFS.at(currSlide)?.taskbarTitle || ""} className="mt-8 sm:mt-12">
                <Image alt="" src={HOMEPAGE_WINDOWS_GIFS.at(currSlide)?.gif || ""} width={350} height={350} unoptimized decoding="async" className="w-full h-full object-cover object-center" draggable={false} />
            </MacOSPanel>

            <section className="py-14 grid grid-cols-2 sm:grid-cols-4 gap-y-10 max-sm:px-3 max-sm:gap-x-5 lg:gap-x-10 lg:px-20">
                {HOMEPAGE_WINDOWS_CHECKS.map(({ label, svg, title }, index) => (
                    <div key={index} className="grid grid-cols-[20px_auto] gap-2 text-sm sm:px-3 text-snow/70">
                        <div className="row-span-2 pt-0.5">
                            {svg}
                        </div>
                        <span className="font-medium text-base">{title}</span>
                        <div className="text-snow/50 text-xs sm:text-sm">{label}</div>
                    </div>
                ))}
            </section>
        </>
    )
}