'use client'
import { WORK_EXPERIENCE_DATA } from "@/common/data/pages/portfolio"
import { AwsSVG, DockerSVG, NestjsSVG, NextjsSVG, PostgresSVG, RedisSVG, TailwindSVG, TsSVG } from "@/common/svgs/svgs"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function WorkExperiencePopup({ initialOpenTab }: { initialOpenTab: string }) {
    const [activeCategory, setActiveCategory] = useState<string>(initialOpenTab || WORK_EXPERIENCE_DATA[0].company)

    return (
        <section className="overflow-hidden bg-matte/40 backdrop-blur-md max-sm:border-t sm:border-l border-snow/10 rounded-t-3xl sm:rounded-none grid grid-cols-1 sm:grid-cols-[270px_2fr] gap-x-4 w-device md:w-[750px] lg:w-[910px] h-[85dvh] sm:h-device">
            <div className="max-sm:row-start-2 flex sm:flex-col justify-start max-sm:items-center max-sm:border-t border-snow/10 overflow-auto scrollbar-hide gap-2.5 sm:gap-4 max-sm:px-4 max-sm:py-2 sm:pl-5 sm:pt-8 max-sm:h-fit">
                {WORK_EXPERIENCE_DATA.map(({ company }, index) => (
                    <div
                        onClick={() => setActiveCategory(() => company)}
                        className={`${activeCategory === company ? "bg-accent/10 text-accent" : "max-sm:bg-smoke/40 sm:hover:bg-smoke/40"} cursor-pointer transition-colors duration-300 rounded-full sm:rounded-xl flex flex-col items-start gap-1 max-sm:text-sm px-4 py-1.5 sm:px-4 sm:py-4`}
                        key={index}
                    >
                        <span className="max-sm:whitespace-nowrap">{company}</span>
                        <span className={`${activeCategory === company ? "" : "text-snow/35"} max-sm:hidden text-xs transition-all duration-100`}>20 projects</span>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 auto-rows-min  max-sm:px-5 sm:py-6 sm:pl-6 sm:pr-5 bg-matte overflow-auto scrollbar-hide gap-y-6 max-sm:h-[calc(85dvh_-_50px)]">
                <span className="text-2xl text-center mt-10">{activeCategory}</span>
                <span className="text-sm text-center -mt-3 mb-2 text-snow/50">Relevant projects in this category</span>

                <div className="grid grid-cols-[1fr_100px] auto-rows-min gap-3">
                    {Array.from({ length: 1 }).map(() => (
                        <>
                            <div className="flex flex-col justify-start items-start gap-y-2 border-b border-snow/10 pt-4 pb-6">
                                <span className="text-xl">giftlaya.com</span>
                                <span className="flex items-center justify-start gap-x-1.5 pt-1">
                                    <NextjsSVG />
                                    <TsSVG />
                                    <TailwindSVG />
                                    <PostgresSVG />
                                    <NestjsSVG />
                                    <AwsSVG />
                                    <RedisSVG />
                                    <DockerSVG />
                                </span>
                                <div>
                                    <ul className="list-disc list-inside text-sm text-snow/60 *:pt-1 py-1">
                                        <li>kfhusrhgsrgh</li>
                                        <li>kfhusrhgsrgh</li>
                                        <li>kfhusrhgsrgh</li>
                                        <li>kfhusrhgsrgh</li>
                                        <li>kfhusrhgsrgh</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid *:row-start-1 *:col-start-1 pt-7">
                                <Link href={"/"} className="group relative overflow-hidden aspect-video rounded-lg">
                                    <ExternalLink width={19} height={19} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    <Image src={"/images/projects/giftlaya-desktop.webp"} alt="" draggable={false} unoptimized decoding="async" width={80} height={80} className="w-full h-full object-cover object-center opacity-100 group-hover:opacity-30 transition-all duration-300" />
                                </Link>
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </section>
    )
}