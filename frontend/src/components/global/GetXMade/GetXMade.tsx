'use client'
import { ClassNameType } from "@/common/types/reactTypes";
import { JSX, useState } from "react";

export default function GetXMade({ defaultLabel, staticLabel, swatchData, className }: { swatchData: { svg: JSX.Element, label: string, shade: string }[], staticLabel: string, defaultLabel: string, className?: ClassNameType }) {
    const [activeIndex, setActiveIndex] = useState<number>(-1)

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-7 gap-y-7 max-sm:pt-2 items-center ${className || ""}`}>
            <div className="flex max-sm:justify-center max-sm:gap-x-1.5 max-sm:flex-col sm:flex-col text-2xl max-sm:text-center">
                <span className="text-snow/60">{staticLabel}</span>
                <div className="grid *:row-start-1 *:col-start-1">
                    {swatchData.map(({ label, shade }, index) => (
                        <h3 key={index} className={`${index === activeIndex ? "opacity-100" : "opacity-0"} transition-opacity duration-300`} style={{ color: shade }}>{label}</h3>
                    ))}
                    <span className={`${-1 === activeIndex ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>{defaultLabel}</span>
                </div>
            </div>
            <div className="flex items-center justify-center sm:justify-end *:px-3.5 sm:*:px-3 text-snow/80 sm:text-snow/95">
                {swatchData.map(({ svg, shade }, index) => (
                    <div
                        onMouseOver={() => setActiveIndex(index)}
                        onMouseOut={() => setActiveIndex(-1)}
                        className={`${activeIndex < 0 ? `opacity-100` : activeIndex === index ? "" : `opacity-30`} cursor-pointer transition-all duration-300`}
                        style={{ color: activeIndex === index ? shade : "" }}
                        key={index}
                    >
                        {svg}
                    </div>
                ))}
            </div>
        </div>
    )
}