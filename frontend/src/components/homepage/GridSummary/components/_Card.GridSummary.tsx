import { ChildrenType, ClassNameType } from "@/common/types/reactTypes"
import { CornerUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { JSX } from "react"

export const Card = ({ children, title, svg, showOnMobile, link, className }: { children: ChildrenType, title: string, svg: JSX.Element, showOnMobile?: boolean, className?: ClassNameType, link?: { url: string, newTab?: boolean } }) =>
    <CardWrapper link={link ? link.url : ""} external={link ? link.newTab || false : false} showOnMobile={showOnMobile || false} className={className || ""}>
        <div className="flex justify-center sm:justify-between items-center text-[11px] sm:text-xs tracking-wider text-snow/40 sm:text-snow/40  sm:pl-6 sm:pr-5">
            {title.length ? (
                <div className="flex justify-start items-center gap-x-1.5 font-light uppercase transition-colors duration-300 group-hover:text-snow">
                    {svg}
                    <h2>{title}</h2>
                </div>
            ) : (
                <div />
            )}
            {link
                ? link.newTab
                    ? (<ExternalLink width={15} height={15} className="group-hover:text-snow/60 text-snow/15 transition-all duration-300 max-sm:hidden" />)
                    : (<CornerUpRight width={15} height={15} className="group-hover:text-snow/60 text-snow/15 transition-all duration-300 max-sm:hidden" />)
                : (<></>)
            }
        </div>

        {children}
    </CardWrapper>


const CardWrapper = (props: { children: ChildrenType, link: string, external: boolean, showOnMobile: boolean, className: ClassNameType }) =>
    props.link.length > 0
        ? (
            <Link href={props.link} target={props.external ? "_blank" : "_self"} className={`group flex flex-col justify-start gap-y-3 ${props.showOnMobile ? "" : "max-sm:hidden"} sm:rounded-2xl sm:border sm:border-snow/10 sm:bg-smoke/10 hover:border-snow/25 ${props.showOnMobile ? "" : "max-sm:hidden"} transition-colors duration-300 ${props.className}`}>
                {props.children}
            </Link>
        )
        : (
            <div className={`group flex flex-col justify-start gap-y-3 ${props.showOnMobile ? "" : "max-sm:hidden"} sm:rounded-2xl sm:border sm:border-snow/10 sm:bg-smoke/10 ${props.showOnMobile ? "" : "max-sm:hidden"} ${props.className}`}>
                {props.children}
            </div>
        )