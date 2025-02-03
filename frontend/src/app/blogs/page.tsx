import { allBlogs, featuredBlogs } from "@/common/data/blogs/blogs"
import Plus from "@/components/blogs/small-components/Plus"
import BlogTile from "@/components/blogs/Tile/BlogTile"
import MaxWidthWrapper from "@/components/global/Spacings/MaxWidthWrapper/MaxWidthWrapper"
import { ArrowRight, Search } from "lucide-react"


export default function BlogPage() {
    return (
        <MaxWidthWrapper className="pb-12">
            <h1 className="w-0 h-0 absolute text-transparent opacity-0">
                Blogs - Kushal Kumar
            </h1>

            <div className="flex flex-col justify-center items-center pt-10 sm:pt-20 space-y-1.5">
                <h2 className="text-3xl font-light">Featured Blogs</h2>
            </div>

            <div className="relative my-8 sm:my-12 grid grid-cols-1 sm:grid-cols-3 *:border *:border-snow/5">
                {featuredBlogs.map((data, index) => (
                    <BlogTile {...data} asFeatured key={index} />
                ))}
                <Plus x="left" y="top" />
                <Plus x="right" y="bottom" />
            </div>

            <div className="flex flex-col justify-center items-center space-y-1.5 pt-10 pb-4">
                <h2 className="text-3xl font-light">All Blogs</h2>
                <span className="text-snow/50 text-sm">32 blogs</span>
                <div className="sticky top-20 bg-snow/5 hover:bg-snow/10 focus-within:bg-snow/10 rounded-full grid grid-cols-[auto_auto_auto] items-center gap-x-2.5 py-2.5 sm:py-2 px-4 sm:px-5 !my-6 transition-colors duration-300">
                    <input type="text" name="keyword" className="peer outline-none border-none bg-transparent text-snow placeholder:text-snow/40 col-start-2 row-start-1" placeholder="Search blogs..." />
                    <Search width={18} height={18} className="peer-focus:text-snow text-snow/40 transition-colors duration-300 col-start-1 row-start-1" />
                    <ArrowRight width={18} height={18} className="opacity-0 peer-focus:opacity-100 -translate-x-5 peer-focus:translate-x-0 cursor-pointer text-accent col-start-3 row-start-1 transition-all duration-300" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:*:aspect-[3/2]">
                {allBlogs.map((data, index) => (
                    <BlogTile {...data} key={index} />
                ))}
            </div>

        </MaxWidthWrapper>
    )
}