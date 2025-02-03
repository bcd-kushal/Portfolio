'use client'
import { usePathname } from "next/navigation"
import MaxWidthWrapper from "../Spacings/MaxWidthWrapper/MaxWidthWrapper"
import { COMMISSION_BANNER_ALLOWED_ROUTES } from "@/common/data/root/_preferences"
import Subscribe from "./components/DropAMessage"
import DropAMessage from "./components/CommissionMe"
import { COMMISSION_ME_TITLE } from "@/common/data/misc/commission-me"

export default function CommissionBanner() {
    const currPath = usePathname()
    
    if (!COMMISSION_BANNER_ALLOWED_ROUTES.includes(currPath))
        return <></>

    return (
        <MaxWidthWrapper noPadding className="relative grid *:row-start-1 *:col-start-1 group">
            <div className={`z-0 grid grid-cols-10 sm:grid-cols-[repeat(16,minmax(0,1fr))] gap-0 max-h-[260px] sm:max-h-[226px] overflow-hidden items-end *:aspect-square *:border-t *:border-snow/10 *:group-hover:border-accent *:transition-all *:duration-700 [mask-image:radial-gradient(100%_70%_at_bottom_center,white,transparent)] sm:[mask-image:radial-gradient(50%_60%_at_bottom_center,white,transparent)]`} >
                {Array.from({ length: 100 }).map((_, index) => (<span className={index % 10 === 0 ? "sm:border-l" : "border-l"} key={index} />))}
            </div>
            <div className="z-10 flex max-sm:flex-col items-center justify-center max-sm:gap-y-6 sm:justify-between py-14 sm:pt-[104px] sm:pb-14">
                <div className="text-snow flex flex-col justify-center max-sm:px-5 max-sm:text-center text-2xl font-medium">
                    {COMMISSION_ME_TITLE.map((str,index) => (
                        <span key={index}>{str}</span>
                    ))}
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-x-4 sm:gap-x-3 *:cursor-pointer *:rounded-[8px] *:px-4 *:py-2 *:text-sm *:sm:font-medium *:transition-all *:duration-300">
                    <Subscribe />
                    <DropAMessage />
                </div>
            </div>

            <span className="absolute -bottom-px w-full h-px left-0 bg-gradient-to-r from-transparent sm:from-5% via-accent to-transparent sm:to-95% opacity-0 group-hover:opacity-100 transition-all duration-700" />
        </MaxWidthWrapper>
    )
}