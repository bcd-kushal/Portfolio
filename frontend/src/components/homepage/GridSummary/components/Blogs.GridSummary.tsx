import { TextQuote } from "lucide-react"
import { Card } from "./_Card.GridSummary"
import { BLOGS_ROUTE } from "@/common/data/_routes"
import { allBlogs } from "@/common/data/blogs/blogs"

export default function BlogsGridSummary() {
    return (
        <Card title="BLOGS" svg={<TextQuote width={14} height={14} />} className="pt-5" link={{ url: BLOGS_ROUTE }}>
            <div className="px-6 pb-5 text-sm grid grid-rows-[auto_1fr] gap-y-1 h-full">
                <h3 className="font-medium line-clamp-2 pr-5 text-snow/90">
                    {allBlogs[0].title}
                </h3>
                <span className="text-xs flex items-end text-snow/70">Latest • {allBlogs.length} blogs</span>
            </div>
        </Card>
    )
}