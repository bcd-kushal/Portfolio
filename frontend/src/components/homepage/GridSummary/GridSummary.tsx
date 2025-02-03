import { MousePointerClick } from "lucide-react"
import SocialsGridSummary from "./components/Socials.GridSummary"
import BlogsGridSummary from "./components/Blogs.GridSummary"
import { Card } from "./components/_Card.GridSummary"
import GitHubGridSummary from "./components/GitHub.GridSummary"
import LeetcodeGridSummary from "./components/Leetcode.GridSummary"
import ProjectsGridSummary from "./components/Projects.GridSummary"
import SummaryGridSummary from "./components/Summary.GridSummary"
import GetXMade from "@/components/global/GetXMade/GetXMade"
import { HOMEPAGE_GET_YOUR_OWN } from "@/common/data/pages/homepage"

export default async function GridSummary() {
    return (
        <div className="grid grid-cols-2 sm:grid-row-3 sm:grid-cols-4 sm:gap-3.5 *:max-sm:min-h-40 *:min-h-40 sm:pt-8">
            <SummaryGridSummary />
            <ProjectsGridSummary />
            <LeetcodeGridSummary />
            <GitHubGridSummary />

            {/* 2nd row ------------------------------ */}
            <SocialsGridSummary />
            <BlogsGridSummary />
            {/* swatch tile */}
            <Card title="SERVICES" svg={<MousePointerClick width={14} height={14} />} className="sm:col-span-2 pt-7 sm:pt-5 max-sm:col-span-2" showOnMobile>
                <GetXMade
                    defaultLabel="software"
                    staticLabel="Get your own"
                    swatchData={HOMEPAGE_GET_YOUR_OWN}
                    className="px-6 pb-4 h-full -translate-y-1"
                />
            </Card>
        </div>
    )
}
