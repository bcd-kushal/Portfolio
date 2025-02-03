import { ClassNameType } from "@/common/types/reactTypes"
import Link from "next/link"

type HeadingType = { text: string, align?: "left" | "center" | "right", className?: ClassNameType, id?: string } & ({ isLink: true, link: string } | { isLink?: false, useHTag?: boolean })

export const Heading1 = (props: HeadingType) => {
    const { isLink, text, align, className } = props

    const style = `text-snow tracking-[-1.5px] leading-none text-6xl font-light ${align === "center" ? "text-center" : align === "right" ? "text-right" : ""} ${className || ""}`

    if (isLink)
        return (
            <Link href={props.link} prefetch className={style}>
                {text}
            </Link>
        )

    if (props.useHTag)
        return (
            <h1 className={style}>
                {text}
            </h1>
        )

    return (
        <div className={style}>
            {text}
        </div>
    )
}

export const Heading2 = (props: HeadingType) => {
    const { isLink, text, align, className, id } = props

    const style = `text-snow text-3xl ${align === "center" ? "text-center" : align === "right" ? "text-right" : ""} ${className || ""}`

    if (isLink)
        return (
            <Link id={id} href={props.link} prefetch className={style}>
                {text}
            </Link>
        )

    if (props.useHTag)
        return (
            <h2 id={id} className={style}>
                {text}
            </h2>
        )

    return (
        <div id={id} className={style}>
            {text}
        </div>
    )
} 