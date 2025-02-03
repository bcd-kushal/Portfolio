import Navigations from "@/components/atomic/Navigations"
import MaxWidthWrapper from "../Spacings/MaxWidthWrapper/MaxWidthWrapper"
import Logo from "@/components/atomic/Logo"
import Link from "next/link"
import { DOWNLOADED_RESUME_NAME } from "@/common/data/root/_preferences"
import { ArrowDownToLine } from "lucide-react"

export default async function Header() {
    return (
        <>
            <MaxWidthWrapper isHeader blankCanvas className="flex items-center justify-between relative">
                <Logo />
                <Navigations />
                <div className="max-sm:hidden flex items-center justify-end gap-x-4">
                    <Link
                        href={"/resume/CV-KushalKumarSaha.pdf"}
                        prefetch={false}
                        className="group backdrop-blur-sm max-sm:hidden text-sm font-medium flex items-center border border-snow/5 bg-smoke/30 hover:bg-smoke/50 text-snow/90 rounded-full *:h-10 *:relative *:flex *:items-center transition-all duration-300"
                        download={`${DOWNLOADED_RESUME_NAME}.pdf`}
                        target="_blank"
                    >
                        <span className="px-[17px]"><ArrowDownToLine width={17} height={17} /></span>
                        <span className="-translate-y-px w-0 group-hover:w-[67px] group-hover:-translate-x-1 transition-all duration-300 overflow-hidden">Resume</span>
                    </Link>
                </div>
            </MaxWidthWrapper>

            {/* <MaxWidthWrapper outOfDOM className="sm:border-x sm:border-snow/10 h-16"> */}
            <MaxWidthWrapper outOfDOM className="h-16">
                <div />
            </MaxWidthWrapper>
        </>
    )
}