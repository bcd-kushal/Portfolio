import { EDUCATION_DATA } from "@/common/data/pages/portfolio"
import PopupWrapper from "@/components/global/PopupWrapper/PopupWrapper"
import { ChevronRight, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Education() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-12 border-l border-snow/10 pl-7 relative">
            <div className="absolute top-0 -left-px w-px h-40 bg-gradient-to-b from-accent to-transparent" />
            {EDUCATION_DATA.map(({ institute, instituteLink, details, showPopup, duration: { from, till }, logo: { alt, src }, studyType }, index) => (
                <EducationSection
                    from={from}
                    index={index}
                    showPopup={showPopup}
                    studyType={studyType}
                    till={till}
                    key={index}
                    imgAlt={alt}
                    imgSrc={src}
                    details={details}
                    institute={institute}
                    instituteLink={instituteLink}
                />
            ))
            }
        </div >
    )
}

const EducationSection = ({ from, index, showPopup, studyType, till, imgAlt, imgSrc, details, institute, instituteLink }: { index: number, showPopup: boolean, from: string, till: string, studyType: string, imgAlt: string, imgSrc: string, institute: string, instituteLink: string, details: string[] }) =>
    <>
        <span className="text-sm text-snow/40 pt-1 max-sm:pb-2">{from} - {till}</span>
        <div className={`${index === EDUCATION_DATA.length - 1 ? showPopup ? "pb-10 sm:pb-9" : "pb-7 sm:pb-6" : showPopup ? "pb-16" : "pb-9"} flex flex-col justify-start gap-y-1 relative`}>
            <h3 className="font-medium text-lg capitalize">
                {studyType}
            </h3>

            <Link href={instituteLink || "#"} prefetch={false} target="_blank" className="w-fit">
                <h4 className="text-snow/70">
                    {institute}
                </h4>
            </Link>

            <div className="h-8 w-fit absolute top-1.5 right-1 sm:right-0 overflow-hidden">
                <Image src={imgSrc} alt={imgAlt} width={20} height={20} unoptimized decoding="async" draggable={false} className="w-full h-full object-contain object-right" />
            </div>

            <ul className="text-sm tracking-[0.015em] text-snow/50 mt-2.5 mb-6 list-disc space-y-1 translate-x-3.5 pr-3.5">
                {details.map((detail, index2) => (
                    <li key={index2}>{detail}</li>
                ))}
            </ul>

            {showPopup ? (
                <PopupWrapper
                    popupType={{
                        desktop: "sheet",
                        desktopDir: "right",
                        mobile: "drawer",
                        mobileDir: "bottom"
                    }}
                    triggerComponent={
                        <button className="group text-sm w-fit text-accent transition-all duration-300 flex items-center justify-start gap-x-3 cursor-pointer">
                            <Trophy width={15} height={15} />
                            <span>Check my exploits</span>
                            <ChevronRight width={15} height={15} className="translate-y-px -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                        </button>
                    }
                >
                    <div>Hello</div>
                </PopupWrapper>
            ) : (
                <></>
            )}
        </div >
    </>