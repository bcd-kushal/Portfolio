import { FULL_NAME } from "@/common/data/root/_personalDetails"
import { DOWNLOADED_RESUME_NAME } from "@/common/data/root/_preferences"
import { QUICK_LINKS, TITLE } from "@/common/data/pages/portfolio"
import { Heading1 } from "@/components/atomic/Headings"
import MaxWidthWrapper from "@/components/global/Spacings/MaxWidthWrapper/MaxWidthWrapper"
import DetailsTable from "@/components/portfolio/DetailsTable/DetailsTable"
import { ArrowDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { METADATA_PORTFOLIO } from "@/common/seo/meta/portfolio"
import { ABOUT_ROUTE } from "@/common/data/_routes"

export const experimental_ppr = true

export const metadata = METADATA_PORTFOLIO

export default async function Portfolio() {
    return (
        <MaxWidthWrapper asMain className="flex flex-col justify-start gap-3">
            <div className="text-xl text-snow/60">{FULL_NAME}</div>
            <Heading1 text={TITLE} useHTag className="max-w-[750px]" />

            <section className="flex items-center justify-between mt-10 sm:mt-5">
                <ul className="space-y-5 sm:space-y-4 pb-5 sm:pb-2.5">
                    {QUICK_LINKS.map(({ svg, label, link }, index) => (
                        <li key={index}>
                            <Link href={link} target="_blank" className="group transition-all duration-300 flex items-center justify-start gap-4 hover:text-accent pr-3 w-fit font-medium text-sm text-snow/85">
                                <span className="text-snow/40 group-hover:text-accent transition-all duration-300">{svg}</span>
                                <span>{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href={ABOUT_ROUTE} prefetch={false} className="max-sm:hidden text-sm flex items-center justify-end gap-3 transition-all duration-300 hover:gap-2 text-accent">
                    <span className="-translate-y-px">Know About Me</span>
                    <ChevronRight width={16} height={16} />
                </Link>
            </section>

            <Link href={"resume/CV-KushalKumarSaha.pdf"} download={`${DOWNLOADED_RESUME_NAME}.pdf`} target="_blank" className="sm:my-4 rounded-full border border-snow/10 px-4 py-1.5 w-fit bg-smoke/60 text-sm font-medium flex items-center justify-start gap-1.5 transition-all duration-300 cursor-pointer brightness-90 hover:brightness-110">
                <ArrowDown width={18} height={18} />
                <span className="pr-1">Download Resume</span>
            </Link>

            <DetailsTable />

        </MaxWidthWrapper>
    )
}