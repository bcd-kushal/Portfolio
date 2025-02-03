/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DrawerClose } from "../ui/drawer"
import { DESKTOP_NAVIGATIONS, MOBILE_NAVIGATIONS } from "@/common/data/root/navigations"
import { CONTACT_DETAILS } from "@/common/data/pages/contact"
import PopupWrapper from "../global/PopupWrapper/PopupWrapper"
import { JSX } from "react"
import { useMediaQuery } from "usehooks-ts"
import { IS_DESKTOP } from "@/common/constants/mediaQuery"
import { BLOGS_ROUTE } from "@/common/data/_routes"

export default function Navigations() {
    const currPath = usePathname()
    const isDesktop = useMediaQuery(IS_DESKTOP)

    return (
        <>
            {isDesktop ? (
                <nav className="backdrop-blur-sm max-sm:hidden sm:absolute sm:left-1/2 sm:-translate-x-1/2 text-sm font-medium flex items-center justify-between border border-snow/10 sm:border-snow/5 bg-smoke/50 rounded-full *:h-10 *:relative *:flex *:items-center">
                    {DESKTOP_NAVIGATIONS.map((nav, index) => nav.isLink
                        ? (
                            <NavCell label={nav.label} key={index} isLink link={nav.link} isSelected={currPath === nav.link} firstChild={index === 0} lastChild={index === DESKTOP_NAVIGATIONS.length - 1} />
                        ) : (
                            <NavCell label={nav.label} key={index} isLink={false} onClickDialog={nav.popupComponent} firstChild={index === 0} lastChild={index === DESKTOP_NAVIGATIONS.length - 1} />
                        ))}
                </nav>
            ) : (
                <PopupWrapper
                    popupType={{
                        desktop: "hidden",
                        desktopDir: "top",
                        mobile: "drawer",
                        mobileDir: "top"
                    }}
                    triggerComponent={
                        <button className="backdrop-blur-sm sm:hidden text-sm font-medium flex items-center justify-center border border-snow/10 sm:border-snow/5 bg-smoke/50 rounded-full px-3  gap-x-1.5 *:h-10 *:flex *:items-center transition-all duration-500">
                            <span className="pl-1">
                                {MOBILE_NAVIGATIONS.find((nav) => nav.isLink ? nav.link === currPath : false)?.label || (currPath.startsWith(BLOGS_ROUTE) ? "Blogs" : "Home")}
                            </span>
                            <ChevronDown width={18} height={18} />
                        </button>
                    }
                >
                    <NavMobileContent currPath={currPath} />
                </PopupWrapper>
            )}
        </>
    )
}

const NavCell = (
    props:
        { label: string, firstChild?: boolean, lastChild?: boolean, isSelected?: boolean } & (
            | { onClickDialog: JSX.Element, isLink: false }
            | { link: string, isLink: true }
        )
) => {
    const { label, isLink, firstChild, lastChild, isSelected } = props

    if (isLink)
        return (
            <Link href={props.link} prefetch className={`relative pb-px ${firstChild ? "pl-7 pr-4" : lastChild ? "pl-4 pr-7" : "px-4"} ${isSelected ? "text-accent" : "hover:text-accent"} transition-all duration-300 cursor-pointer`}>
                {label}
                {isSelected ? <span className={`absolute h-[1.5px] ${firstChild || lastChild ? "w-10/12" : "w-11/12"} bg-gradient-to-r from-transparent via-accent to-transparent -bottom-px left-1/2 ${firstChild ? "-translate-x-[calc(50%_-_6px)]" : lastChild ? "-translate-x-[calc(50%_+_6px)]" : "-translate-x-1/2"}`} /> : <></>}
            </Link>
        )

    return (
        <>
            {/* DESKTOP ------------------------------------- */}
            <PopupWrapper
                popupType={{
                    desktop: "dialog",
                    desktopDir: "bottom",
                    mobile: "hidden",
                    mobileDir: "bottom"
                }}
                triggerComponent={
                    <div
                        className={`max-sm:hidden relative pb-px ${firstChild ? "pl-7 pr-4" : lastChild ? "pl-4 pr-7" : "px-4"} ${isSelected ? "text-accent" : "hover:text-accent"} transition-all duration-300 cursor-pointer`}
                    >
                        {label}
                        {isSelected ? <span className={`absolute h-[1.5px] ${firstChild || lastChild ? "w-10/12" : "w-11/12"} bg-gradient-to-r from-transparent via-accent to-transparent -bottom-px left-1/2 ${firstChild ? "-translate-x-[calc(50%_-_6px)]" : lastChild ? "-translate-x-[calc(50%_+_6px)]" : "-translate-x-1/2"}`} /> : <></>}
                    </div>
                }
            >
                {props.onClickDialog}
            </PopupWrapper>
        </>
    )
}

const NavMobileContent = ({ currPath }: { currPath: string }) =>
    <section className="border border-snow/10 p-6 pb-5 pt-3 rounded-b-3xl bg-matte grid grid-cols-1">
        <DrawerClose asChild>
            <Link className={`relative text-2xl py-4 flex flex-col justify-start gap-y-0.5 border-b border-snow/10 ${currPath === "/" ? "text-accent" : ""}`} href={"/"} prefetch>
                {"Homepage"}
                <span className="text-xs text-white/50">{"Myself, Kushal Kumar"}</span>

                {currPath === "/" ? (
                    <>
                        <div className="absolute right-3 top-[calc(50%_-_4px)] aspect-square rounded-full bg-accent w-3" />
                        <div className="absolute right-3 top-[calc(50%_-_4px)] aspect-square rounded-full bg-accent w-3 animate-ping" />
                    </>
                ) : (
                    <></>
                )}
            </Link>
        </DrawerClose>
        {MOBILE_NAVIGATIONS.filter(({ isLink }) => isLink === true).map((nav, index) => (
            <DrawerClose asChild key={index}>
                {/* @ts-ignore */}
                <Link className={`relative py-4 flex flex-col justify-start gap-y-0.5 ${index === MOBILE_NAVIGATIONS.length - 1 ? "" : "border-b border-snow/10"} ${currPath === nav.link ? "text-accent" : ""}`} href={nav.link} prefetch>
                    <span className="text-2xl">{nav.label}</span>
                    <span className="text-xs text-white/50">{nav.description}</span>

                    {nav.isLink && currPath === nav.link ? (
                        <>
                            <div className="absolute right-3 top-[calc(50%_-_4px)] aspect-square rounded-full bg-accent w-3" />
                            <div className="absolute right-3 top-[calc(50%_-_4px)] aspect-square rounded-full bg-accent w-3 animate-ping" />
                        </>
                    ) : (
                        <></>
                    )}
                </Link>
            </DrawerClose>
        ))}


        {/* BOTTOM SOCIAL LINKS ------------------- */}
        <div className={`flex items-center justify-start gap-x-3.5 mt-7 mb-1`}>
            {CONTACT_DETAILS.SOCIAL_LINKS.map(({ svg, link }, index) => (
                <Link className="aspect-square w-8 text-snow/60 grid place-items-center scale-[1.3] transition-all duration-300 hover:text-accent" href={link} prefetch key={index} target="_blank">{svg}</Link>
            ))}
        </div>
    </section>