'use client'
import Link from "next/link"
import MaxWidthWrapper from "../Spacings/MaxWidthWrapper/MaxWidthWrapper"
import { ArrowLeft } from "lucide-react"
import { NOT_FOUND_DATA } from "@/common/data/pages/not-found"

export default function NotFound404() {
    return (
        <MaxWidthWrapper asMain className="flex items-start sm:items-center justify-center flex-col gap-y-2 h-[calc(100dvh_-_237px)] sm:h-[calc(100dvh_-_187px)]">
            {/* MOBILE ----------------------- */}
            <span className="sm:hidden text-3xl text-snow/55">{NOT_FOUND_DATA.SUBTITLE.MOBILE}</span>
            <span className="sm:hidden text-6xl font-light">{NOT_FOUND_DATA.TITLE.MOBILE}</span>
            
            {/* DESKTOP ----------------------- */}
            <span className="max-sm:hidden text-xl text-snow/55">{NOT_FOUND_DATA.SUBTITLE.DESKTOP}</span>
            <span className="max-sm:hidden text-6xl font-light">{NOT_FOUND_DATA.TITLE.DESKTOP}</span>
            
            <p className="text-2xl max-sm:pr-20 text-snow/60 py-4">
                {NOT_FOUND_DATA.DESC}
            </p>
            <Link href={NOT_FOUND_DATA.BACK_LINK.URL} prefetch className="text-accent text-xl mt-10 transition-all flex items-center justify-start gap-3 duration-300 -translate-x-1 hover:-translate-x-2">
                <ArrowLeft width={20} height={20} />
                <span>{NOT_FOUND_DATA.BACK_LINK.LABEL}</span>
            </Link>

        </MaxWidthWrapper>
    )
}