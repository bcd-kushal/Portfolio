import { ClassNameType } from "@/common/types/reactTypes"
import Image from "next/image"

export default function Carousel({ images, className }: { images: { alt: string, src: string }[], className?: ClassNameType }) {
    return (
        <div className={`group aspect-square scale-90 -translate-y-5 grid *:row-start-1 *:col-start-1 *:rounded-3xl *:overflow-hidden *:relative *:transition-all *:ease-out *:shadow-2xl ${className || ""} transition-all duration-300`}>
            {images.slice(0, 3).map(({ src, alt }, index) => (
                <div
                    className={
                        index === 0 ? "-translate-y-3 rotate-6 z-30 group-hover:rotate-12 group-hover:translate-x-7 group-hover:-translate-y-14 bg-smoke/70 !duration-200" :
                            index === 1 ? "z-20 -rotate-1 bg-teal-900 brightness-[60%] group-hover:-rotate-6 group-hover:-translate-x-60 group-hover:translate-y-4 group-hover:scale-90 group-hover:brightness-100 !duration-300" :
                                "z-10 -rotate-12 bg-blue-950 brightness-[30%] group-hover:-rotate-[20deg] group-hover:translate-y-56 group-hover:-translate-x-10 group-hover:scale-75 group-hover:brightness-100 !duration-300"
                    }
                    key={index}
                >
                    <Image src={src} alt={alt} width={320} height={320} unoptimized decoding="async" priority={index === 0 ? true : false} loading={index === 0 ? "eager" : "lazy"} draggable={false} title={alt} className="w-full h-full object-cover object-center" />
                </div>
            ))}
        </div>
    )
}