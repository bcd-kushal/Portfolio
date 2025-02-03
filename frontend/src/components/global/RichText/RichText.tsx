import { RichTextType } from "@/common/types/types"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function RichText({ contents }: { contents: RichTextType[] }) {
    return (
        <>
            {contents.map((data, index) => {
                const { type, hideOnMobile } = data

                if (type === "heading")
                    return (
                        <h2 className={`leading-loose text-snow/90 text-3xl mt-6 mb-1 ${index === 3 ? "!mb-4" : ""} ${hideOnMobile ? "max-sm:hidden" : ""}`} key={index}>
                            {data.text}
                        </h2>
                    )

                if (type === "subheading")
                    return (
                        <h3 className={`leading-loose text-snow/70 text-xl font-medium mt-5 mb-3 ${hideOnMobile ? "max-sm:hidden" : ""}`} key={index}>
                            {data.text}
                        </h3>
                    )

                if (type === "para")
                    return (
                        <article className={`leading-loose text-snow/60 mb-6 ${hideOnMobile ? "max-sm:hidden" : ""}`} key={index}>
                            {data.text}
                        </article>
                    )

                if (type === "points")
                    return (
                        <ul key={index} className={`leading-loose text-snow/65 space-y-1.5 mt-1 mb-6 ${hideOnMobile ? "max-sm:hidden" : ""}`}>
                            {data.details.map((detail, index2) => (
                                <li key={index2} className="grid grid-cols-[110px_1fr] sm:grid-cols-[120px_1fr] gap-x-6 sm:gap-x-8">
                                    <strong className="font-light">{Object.entries(detail)[0][0]}</strong>
                                    <span>{Object.entries(detail)[0][1]}</span>
                                </li>
                            ))}
                        </ul>
                    )

                if (type === "link")
                    return (
                        <Link
                            href={data.href}
                            target={data.newTab ? "_blank" : "_self"}
                            prefetch={false}
                            key={index}
                            className={`group flex items-center justify-start gap-x-3 w-fit transition-all duration-300 text-accent text-sm mt-2.5 sm:mt-2 mb-7 sm:mb-6 font-medium ${data.extraPadding ? "py-3" : ""} ${hideOnMobile ? "max-sm:hidden" : ""}`}
                        >
                            {data.svg || <></>}
                            <span>{data.label}</span>
                            <ChevronRight width={15} height={15} className="translate-y-px group-hover:translate-x-2 transition-all duration-300" />
                        </Link>
                    )

                return <></>
            })}
        </>
    )
}