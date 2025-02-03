import { DESCRIPTION, EMAIL_LINK, PREVIEW_IMAGES, SOCIAL_LINKS, TITLE } from "@/common/data/pages/about"
import { METADATA_ABOUT } from "@/common/seo/meta/about"
import AboutWebsite from "@/components/about/AboutWebsite/AboutWebsite"
import Carousel from "@/components/about/Carousel/Carousel"
import Interests from "@/components/about/Interests/Interests"
import { Heading1, Heading2 } from "@/components/atomic/Headings"
import RichText from "@/components/global/RichText/RichText"
import MaxWidthWrapper from "@/components/global/Spacings/MaxWidthWrapper/MaxWidthWrapper"
import Link from "next/link"

export const experimental_ppr = true

export const metadata = METADATA_ABOUT

export default async function About() {
    return (
        <>
            {/* ==[ MAIN DATA ]============================ */}
            <MaxWidthWrapper asMain className="relative grid grid-cols-1 sm:grid-cols-[3fr_2fr] gap-x-20 *:flex *:flex-col *:justify-start">
                <section className="sm:pr-2">
                    <Carousel images={PREVIEW_IMAGES} className="sm:hidden !scale-[0.8] hover:translate-x-1/4" />
                    <Heading1 text={TITLE} useHTag isLink={false} className="mb-9 sm:mb-12" />
                    <RichText contents={DESCRIPTION} />
                </section>

                <section className="sm:sticky sm:top-40 sm:space-y-7 max-sm:pt-14 sm:h-fit">
                    <Carousel images={PREVIEW_IMAGES} className="max-sm:hidden" />

                    {/* Socials ----------------------------------- */}
                    <ul className="space-y-5 sm:space-y-4 pb-10 sm:pb-2.5">
                        {SOCIAL_LINKS.map(({ svg, label, link }, index) => (
                            <li key={index}>
                                <Link href={link} target="_blank" className="group transition-all duration-300 flex items-center justify-start gap-4 hover:text-accent pr-3 w-fit font-medium text-sm text-snow/85">
                                    <span className="text-snow/40 group-hover:text-accent transition-all duration-300">{svg}</span>
                                    <span>{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {EMAIL_LINK ? (
                        <div className="pt-8 border-t border-snow/10">
                            <Link href={EMAIL_LINK.link} target="_blank" className="group transition-all duration-300 flex items-center justify-start gap-4 hover:text-accent pr-3 w-fit font-medium text-sm text-snow/85">
                                <span className="text-snow/40 group-hover:text-accent transition-all duration-300">{EMAIL_LINK.svg}</span>
                                <span>{EMAIL_LINK.label}</span>
                            </Link>
                        </div>
                    ) : (
                        <></>
                    )}
                </section>
            </MaxWidthWrapper>

            {/* ==[ INTERESTS ]============================ */}
            <MaxWidthWrapper className="pt-6 pb-14 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-9 auto-rows-min">
                <Heading2 useHTag isLink={false} text="My Interests" className="sm:col-span-2 text-snow/90 text-3xl mb-2" />
                <Interests />
            </MaxWidthWrapper>

            {/* ==[ ABOUT THIS WEBSITE ]============================ */}
            <MaxWidthWrapper className="relative pt-6 pb-6 grid grid-cols-1 sm:grid-cols-[3fr_2fr]">
                <Heading2 useHTag isLink={false} text="About this website" className="text-snow/90 text-3xl mb-8 sm:mb-10 mt-5" />
                <AboutWebsite />
            </MaxWidthWrapper>
        </>
    )
}