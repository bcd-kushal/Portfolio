'use client'
import { ACHIEVEMENTS_DATA } from "@/common/data/pages/portfolio";
import Image from "next/image";
import { useState } from "react";

export default function AchievementsPopup({ initialOpenTab }: { initialOpenTab: string }) {
    const [activeCategory, setActiveCategory] = useState<string>(initialOpenTab || ACHIEVEMENTS_DATA[0].acheivementName)
    const activeData = ACHIEVEMENTS_DATA.find(({ acheivementName }) => acheivementName === activeCategory)

    if (!activeData)
        return <></>

    return (
        <section className="overflow-hidden bg-matte/50 backdrop-blur-md border border-snow/10 rounded-t-3xl sm:rounded-3xl grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-x-4 w-device max-sm:auto-rows-min md:w-[750px] lg:w-[820px] h-[85dvh] sm:h-[60dvh] sm:min-h-[500px] relative">
            <div className="max-sm:row-start-2 flex sm:flex-col max-sm:items-center max-sm:border-t border-snow/10 max-sm:h-14 justify-start overflow-auto scrollbar-hide gap-2 sm:gap-1.5 max-sm:px-4 sm:pl-5 sm:py-6 max-sm:sticky max-sm:bottom-0 z-10 max-sm:bg-matte/60 backdrop-blur-md">
                {ACHIEVEMENTS_DATA.map(({ acheivementName, issuer, date }, index) => (
                    <div
                        onClick={() => setActiveCategory(() => acheivementName)}
                        className={`${activeCategory === acheivementName ? "bg-accent/10 text-accent" : "max-sm:bg-smoke/30 sm:hover:bg-smoke/40"} max-sm:text-sm max-sm:w-56 cursor-pointer transition-colors duration-300 rounded-full sm:rounded-xl flex flex-col items-start sm:gap-1 px-4 py-1.5 sm:px-4 sm:py-4`}
                        key={index}
                    >
                        <span className="truncate w-full">{acheivementName}</span>
                        <span className={`${activeCategory === acheivementName ? "" : "text-snow/35"} max-sm:hidden truncate w-full text-xs transition-all duration-100`}>{issuer}, {date.split(" ")[1] || date.split(" ")[0]}</span>
                    </div>
                ))}
            </div>

            <div className="bg-matte grid grid-cols-1 auto-rows-min sm:border-l border-snow/10 overflow-auto scrollbar-hide max-sm:h-[calc(85dvh_-_56px)] gap-y-6 pb-12 sm:pb-14">
                <div className="bg-amber-900 aspect-[2/1] relative">
                    <Image src={"/images/myself/myself.webp"} alt="" width={300} height={300} unoptimized decoding="async" draggable={false} className="w-full h-full object-cover object-center" />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-center w-2/3 flex flex-col justify-start gap-1.5">
                        <span className="text-3xl leading-[1.1] [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)]">{activeData.acheivementName}</span>
                        <span>{activeData.date}</span>
                    </div>
                    <div className="absolute bottom-0 w-full h-3/5 left-0 bg-gradient-to-t from-matte to-transparent" />
                </div>
                <div className="px-4 py-2 rounded-lg flex items-center justify-start gap-x-2 text-snow/50 bg-snow/5 w-fit ml-6 text-xs">
                    <div className="rounded-full w-1.5 aspect-square bg-accent" />
                    <span>Issuer: {activeData.issuer}</span>
                </div>
                <div className="px-6 flex flex-col justify-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id delectus iusto error omnis, quaerat explicabo rerum fugit eligendi, natus ipsam. Corporis dignissimos totam repudiandae soluta aliquid reiciendis illum iure.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id delectus iusto error omnis, quaerat explicabo rerum fugit eligendi, natus ipsam. Corporis dignissimos totam repudiandae soluta aliquid reiciendis illum iure.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id delectus iusto error omnis, quaerat explicabo rerum fugit eligendi, natus ipsam. Corporis dignissimos totam repudiandae soluta aliquid reiciendis illum iure.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id delectus iusto error omnis, quaerat explicabo rerum fugit eligendi, natus ipsam. Corporis dignissimos totam repudiandae soluta aliquid reiciendis illum iure.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id delectus iusto error omnis, quaerat explicabo rerum fugit eligendi, natus ipsam. Corporis dignissimos totam repudiandae soluta aliquid reiciendis illum iure.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id delectus iusto error omnis, quaerat explicabo rerum fugit eligendi, natus ipsam. Corporis dignissimos totam repudiandae soluta aliquid reiciendis illum iure.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id delectus iusto error omnis, quaerat explicabo rerum fugit eligendi, natus ipsam. Corporis dignissimos totam repudiandae soluta aliquid reiciendis illum iure.
                    {activeData.contents.map((data, index) => (
                        <div key={index}>{"data.type"}</div>
                    ))}
                </div>
            </div>
        </section>
    )
}