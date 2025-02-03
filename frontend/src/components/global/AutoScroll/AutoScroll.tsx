import { ClassNameType } from "@/common/types/reactTypes"
import { ImageType } from "@/common/types/types"
import Image from "next/image"

export default function AutoScroll({
    images,
    className
}: {
    images: ImageType[],
    className?: ClassNameType
}) {
    return (
        <div className={`relative w-full flex items-center justify-start gap-x-7 overflow-auto scrollbar-hide py-5 ${className || ""}`}>
            {Array.from({ length: 5 }).map((_, idx) => (
                <section className="flex animate-auto-scroll items-center justify-start gap-x-14" key={idx}>
                    {images.map(({ alt, src }, index) => (
                        <div className="relative overflow-hidden w-[150px]" key={index}>
                            <Image
                                src={src}
                                alt={alt}
                                width={300}
                                height={300}
                                decoding="async"
                                className="w-full h-full object-contain object-center"
                                unoptimized
                                draggable={false}
                            />
                        </div>
                    ))}
                </section>
            ))}
        </div>
    )
}