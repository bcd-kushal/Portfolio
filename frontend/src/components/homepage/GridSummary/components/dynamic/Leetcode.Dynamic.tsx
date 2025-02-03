import { LeetcodeStatsType } from "@/common/types/types"
import { Loader2 } from "lucide-react"

async function fetchLeetcodeStats() {
    const url = "https://leetcode-stats-api.herokuapp.com/kushal_at_leetcode"
    const response = await fetch(url, { cache: "force-cache", next: { tags: ["cache", "leetcode"] } })

    const leetcodeStats = await response.json()
    return leetcodeStats.status === "success" ? leetcodeStats : null
}

export default async function LeetcodeDynamicStats() {
    const leetcodeStats: LeetcodeStatsType | null = await fetchLeetcodeStats()
    if (!leetcodeStats)
        return <></>

    const data = [
        { name: "Easy", solved: leetcodeStats?.easySolved || "", total: leetcodeStats?.totalEasy || "", color: "text-emerald-500" },
        { name: "Medium", solved: leetcodeStats?.mediumSolved || "", total: leetcodeStats?.totalMedium || "", color: "text-amber-400" },
        { name: "Hard", solved: leetcodeStats?.hardSolved || "", total: leetcodeStats?.totalHard || "", color: "text-red-500" },
    ]

    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div className="aspect-square rounded-full border-2 border-smoke flex flex-col justify-center items-center max-w-28 w-full h-full">
                    <span className="text-xs text-snow/50 leading-none">All</span>
                    <span className="text-2xl font-semibold border-b border-snow/10 w-3/4 text-center max-sm:py-0.5 sm:pb-[3px]">{leetcodeStats.totalSolved}</span>
                    <span className="text-xs text-snow/40 font-medium pt-1 sm:pt-px">{leetcodeStats.totalQuestions}</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-stretch space-y-1 max-sm:pb-2 max-sm:pt-3">
                {data.map(({ name, solved, total, color }, index) => (
                    <div className="flex items-baseline justify-between text-sm" key={index}>
                        <div className={`${color}`}>{name}</div>
                        <div className="">{solved}<span className="text-[11px] text-snow/50">/{total}</span></div>
                    </div>
                ))}
            </div>
            <div className="sm:col-span-2 text-xs text-snow/40 text-center pt-3">Acceptance rate: 59.4%</div>
        </>
    )
}

export const LeetcodeFallback = async () =>
    <>
        <div className="flex items-center justify-center w-full">
            <div className="aspect-square rounded-full border-2 border-smoke animate-pulse flex flex-col justify-center items-center max-w-28 w-full h-full">
                <Loader2 className="animate-spin text-snow/10" width={27} height={27} />
            </div>
        </div>
        <div className="flex flex-col justify-center items-stretch space-y-3 max-sm:pb-2 max-sm:pt-[34px]">
            {Array.from({length:3}).map((_, index) => (
                <div className="flex items-baseline justify-between text-sm" key={index}>
                    <div className="bg-snow/10 animate-pulse h-2 w-full" />
                </div>
            ))}
        </div>
        <div className="sm:col-span-2 text-xs text-snow/40 text-center mt-3.5 h-3.5 animate-pulse bg-snow/10 rounded-full" />
    </>