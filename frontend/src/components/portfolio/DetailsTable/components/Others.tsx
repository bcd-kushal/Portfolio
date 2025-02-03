import { OTHERS_DATA } from "@/common/data/pages/portfolio"
import Image from "next/image"

export default function Others() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-12 border-l border-snow/10 pl-7 relative">
            <div className="absolute top-0 -left-px w-px h-40 bg-gradient-to-b from-accent to-transparent" />
            {OTHERS_DATA.map(({ title, subtitle, details, duration: { from, till }, logo: { alt, src } }, index) => (
                <OtherSection
                    details={details}
                    from={from}
                    imgAlt={alt}
                    imgSrc={src}
                    index={index}
                    key={index}
                    subtitle={subtitle}
                    till={till}
                    title={title}
                />
            ))}
        </div>
    )
}

const OtherSection = ({ details, from, imgAlt, imgSrc, subtitle, till, title, index }: { from: string, till: string, title: string, subtitle: string, imgSrc: string, imgAlt: string, details: string[], index: number }) =>
    <>
        <span className="text-sm text-snow/40 pt-1 max-sm:pb-2">{from} - {till}</span>
        <div className={`${index === OTHERS_DATA.length - 1 ? "pb-10 sm:pb-9" : "pb-8"} flex flex-col justify-start gap-y-1 relative`}>
            <h3 className="font-medium text-lg capitalize">
                {title}
            </h3>

            <h4 className="text-snow/70">
                {subtitle}
            </h4>

            <div className="h-8 w-fit absolute top-1.5 right-1 sm:right-0 overflow-hidden">
                <Image src={imgSrc} alt={imgAlt} width={20} height={20} unoptimized decoding="async" draggable={false} className="w-full h-full object-contain object-right" />
            </div>

            <ul className="text-sm tracking-[0.015em] text-snow/50 mt-2.5 mb-6 list-disc space-y-1 translate-x-3.5 pr-3.5">
                {details.map((detail, index2) => (
                    <li key={index2}>{detail}</li>
                ))}
            </ul>
        </div>
    </>