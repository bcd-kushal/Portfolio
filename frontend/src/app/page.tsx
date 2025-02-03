import MaxWidthWrapper from "@/components/global/Spacings/MaxWidthWrapper/MaxWidthWrapper"
import { Heading1 } from "@/components/atomic/Headings"
import Link from "next/link"
import { HOMEPAGE_HERO_DESCRIPTION, HOMEPAGE_HERO_LINKS, HOMEPAGE_HERO_TITLE } from "@/common/data/pages/homepage"
import GridSummary from "@/components/homepage/GridSummary/GridSummary"
import Clients from "@/components/global/Clients/Clients"
import DeliveringResults from "@/components/homepage/DeliveringResults/DeliveringResults"
import { METADATA_HOMEPAGE } from "@/common/seo/meta/homepage"

export const experimental_ppr = true

export const metadata = METADATA_HOMEPAGE

export default async function LandingPage() {
    return (
        <>
            <MaxWidthWrapper asMain className="space-y-7">
                <Heading1 text={HOMEPAGE_HERO_TITLE} useHTag className="!text-3xl sm:!text-4xl !tracking-normal !font-medium text-center px-10 sm:px-24 lg:px-36" />
                <h2 className="text-snow/60 max-sm:text-sm !leading-relaxed text-center px-5 sm:px-10 lg:px-28">
                    {HOMEPAGE_HERO_DESCRIPTION}
                </h2>

                <div className="flex items-center justify-center gap-x-4 pt-6">
                    <Link href={HOMEPAGE_HERO_LINKS.PRIMARY.link} className="rounded-[6px] px-4 sm:px-5 py-2.5 bg-accent/75 font-medium text-sm">{HOMEPAGE_HERO_LINKS.PRIMARY.label}</Link>
                    <Link href={HOMEPAGE_HERO_LINKS.SECONDARY.link} className="rounded-[6px] px-4 sm:px-5 py-2.5 bg-snow/10 text-sm font-medium">{HOMEPAGE_HERO_LINKS.SECONDARY.label}</Link>
                </div>

                <div className="py-0 relative flex flex-col justify-center items-center -z-0 pointer-events-none">
                    <div className="bg-accent/10 h-40 w-full sm:w-[650px] [mask-image:radial-gradient(50%_80%_at_bottom_center,white,transparent)]" />
                    <div className="h-px w-full sm:w-[700px] bg-gradient-to-r from-transparent via-accent to-transparent" />
                </div>

                <GridSummary />
            </MaxWidthWrapper>

            <MaxWidthWrapper className="max-sm:pt-20 pb-3 flex flex-col items-center justify-center relative">
                <div className="sm:hidden absolute top-0 left-0 h-px w-full sm:w-[700px] bg-gradient-to-r from-transparent via-accent to-transparent" />
                <div className="sm:hidden absolute top-0 left-0 bg-accent/10 h-40 w-full sm:w-[650px] [mask-image:radial-gradient(50%_80%_at_top_center,white,transparent)]" />

                <Clients />
            </MaxWidthWrapper>

            <MaxWidthWrapper className="flex flex-col justify-start gap-x-10 py-10 sm:py-16">
                <DeliveringResults />
            </MaxWidthWrapper>
        </>
    )
}