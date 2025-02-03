'use client'
import { PROJECTS_DATA } from "@/common/data/pages/portfolio"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ChevronRight, Github, Info, Link as ChainLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
    return (
        <div className="w-[calc(100dvw_-_32px)] sm:w-[400px] md:w-[calc(100dvw_-_370px)] lg:w-[790px]">
            <Carousel
                plugins={[Autoplay({ delay: 8000 })]}
                opts={{ align: "start", loop: true }}
                className="max-sm:overflow-hidden"
            >
                <CarouselContent>
                    {PROJECTS_DATA.map(({ description, projectName, links: { details, github, website }, images: { desktop, mobile } }, index) => (
                        <CarouselItem key={index}>
                            <div className="relative aspect-[1/1.5] sm:aspect-[16/12] flex items-center justify-center">

                                {/* laptop */}
                                <div className="relative bg-smoke/15 w-4/5 border border-white/15 sm:w-[60%] max-sm:-translate-y-20 -translate-y-20 rounded-t-xl z-30 px-1.5 sm:px-2 pb-2.5 pt-2 -translate-x-2">
                                    <div className="w-full h-full overflow-hidden relative aspect-[3/2]">
                                        <Image src={desktop.src} alt={desktop.alt} unoptimized decoding="async" width={500} height={500} draggable={false} className="cursor-pointer w-full h-full object-cover object-center z-0" />
                                    </div>
                                    <div className="bg-[#454545] h-3 sm:h-4 absolute -bottom-3 sm:-bottom-4 left-0 w-full scale-x-[1.18]  pt-1.5 rounded-t-[4px] rounded-b-[14px]" />
                                    <div className="absolute -bottom-6 left-0 -z-10 w-full rounded-full scale-x-[1.2] bg-latex/75 h-1.5 blur-sm" />


                                    {/* mobile */}
                                    <div className="z-40 bg-latex border border-white/35 rounded-xl aspect-[9/19] w-[78px] sm:w-28 p-[3px] absolute -bottom-16 sm:-bottom-14 -right-10 sm:-right-16">
                                        <div className="relative w-full h-full bg-smoke rounded-[10px] overflow-hidden">
                                            <Image src={mobile.src} alt={mobile.alt} unoptimized decoding="async" width={500} height={500} draggable={false} className="cursor-pointer w-full h-full object-cover object-center z-0" />
                                            <div className="rounded-full w-1.5 aspect-square bg-latex absolute top-[3px] left-1.5 z-10" />
                                        </div>

                                        <div className="absolute -bottom-1.5 left-0 -z-10 w-full rounded-full scale-x-110 bg-latex h-1 blur-sm" />
                                    </div>

                                    {/* details */}
                                    <div className="absolute top-[calc(100%_+_38px)] sm:top-[calc(100%_+_44px)] -left-3.5 sm:-left-20 flex flex-col justify-start gap-y-3 sm:gap-y-5">
                                        <span className="text-3xl sm:text-4xl">{projectName}</span>
                                        <span className="text-xs sm:text-sm text-white/50">{description}</span>
                                        <div className="flex max-sm:flex-col sm:items-center justify-start gap-x-7 gap-y-2.5 mt-2">
                                            <Link href={website} prefetch={false} target="_blank" className={`group text-sm w-fit text-accent whitespace-nowrap transition-all duration-300 flex items-center justify-start gap-x-3 cursor-pointer`}>
                                                <ChainLink width={15} height={15} />
                                                <span>See Website</span>
                                                <ChevronRight width={15} height={15} className="translate-y-px -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                                            </Link>
                                            <Link href={github} target="_blank" prefetch={false} className={`group text-sm w-fit text-accent whitespace-nowrap transition-all duration-300 flex items-center justify-start gap-x-3 cursor-pointer`}>
                                                <Github width={15} height={15} />
                                                <span>Github Repo</span>
                                                <ChevronRight width={15} height={15} className="translate-y-px -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                                            </Link>
                                            <Link href={details} prefetch={false} className={`group text-sm w-fit text-accent whitespace-nowrap transition-all duration-300 flex items-center justify-start gap-x-3 cursor-pointer`}>
                                                <Info width={15} height={15} />
                                                <span>Check Details</span>
                                                <ChevronRight width={15} height={15} className="translate-y-px -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hover:text-accent hover:bg-latex/30 bg-latex/30 border-none" />
                <CarouselNext className="hover:text-accent hover:bg-latex/30 bg-latex/30 border-none" />
            </Carousel>
        </div>
    )
}