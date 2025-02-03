import { Github, GitMerge, LayoutPanelLeft, Star, Users } from "lucide-react";
import { Card } from "./_Card.GridSummary";
import { GITHUB } from "@/common/data/root/_personalDetails";
import Image from "next/image";

export default function GitHubGridSummary() {
    const githubData = [
        { label: "projects", value: "37", svg: <LayoutPanelLeft height={13} width={13} fill="currentColor" /> },
        { label: "stars", value: "142", svg: <Star height={13} width={13} fill="currentColor" /> },
        { label: "followers", value: "20", svg: <Users height={13} width={13} fill="currentColor" /> },
        { label: "commits", value: "2.9K", svg: <GitMerge height={13} width={13} fill="currentColor" /> },
    ]

    return (
        <Card title="GitHub" svg={<Github width={14} height={14} />} className="relative group overflow-hidden pt-7 sm:pt-4 max-sm:border-b border-snow/10 max-sm:hover:border-snow/10" link={{ url: GITHUB, newTab: true }} showOnMobile>
            <div className="px-3 sm:px-5 pb-7 sm:pb-4 flex flex-col justify-end h-full items-start text-[13px] text-snow/60 gap-y-0.5 tracking-wide">
                {githubData.map(({ label, value, svg }, index) => (
                    <div key={index} className="flex items-center justify-start gap-x-1.5">
                        {svg}
                        <span><span className="font-medium text-snow/95">{value}</span> {label}</span>
                    </div>
                ))}
            </div>

            <div className="absolute left-0 sm:right-0 top-10 sm:top-auto sm:bottom-0 max-sm:opacity-50 group-hover:opacity-100 group-hover:grayscale-0 sm:translate-x-[calc(50%_-_20px)] h-1/2 sm:h-3/4 w-fit transition-all duration-300">
                <Image src={"/images/others/github-contribs.webp"} alt="" width={300} height={300} unoptimized decoding="async" draggable={false} className="w-full h-full object-cover object-left" />
            </div>
        </Card>
    )
}