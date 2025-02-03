import { Card } from "./_Card.GridSummary"
import { LEETCODE } from "@/common/data/root/_personalDetails"
import { LeetcodeSVG } from "@/../public/svgs/leetcode"
import { Suspense } from "react"
import LeetcodeDynamicStats, { LeetcodeFallback } from "./dynamic/Leetcode.Dynamic"

export default async function LeetcodeGridSummary() {
    return (
        <Card title="Leetcode" svg={<LeetcodeSVG dimensions={13} />} className="pt-7 sm:pt-4 max-sm:border-l max-sm:border-y border-snow/10 max-sm:hover:border-snow/10" link={{ url: LEETCODE, newTab: true }} showOnMobile>
            <div className="grid grid-cols-1 sm:grid-cols-[88px_1fr] items-start sm:items-center gap-x-4 px-4 pb-5 sm:pb-4 pt-1">
                <Suspense fallback={<LeetcodeFallback />}>
                    <LeetcodeDynamicStats />
                </Suspense>
            </div>
        </Card>
    )
}
