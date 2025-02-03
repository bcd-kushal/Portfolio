import BlogArticle from "@/components/blogs/Article/BlogArticle"
import Plus from "@/components/blogs/small-components/Plus"
import MaxWidthWrapper from "@/components/global/Spacings/MaxWidthWrapper/MaxWidthWrapper"
import { ArrowLeft, Clock4 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function BlogPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const slugs = (await params).slug

    if (slugs.length > 1)
        return notFound()

    return (
        <MaxWidthWrapper asMain inBlog>
            <section className="flex flex-col items-center justify-start border border-snow/5 relative py-10 sm:py-16 sm:px-32">
                <Plus x="left" y="top" />
                <Plus x="right" y="bottom" />

                <div className="flex items-center justify-center gap-x-2 text-xs sm:text-sm">
                    <ArrowLeft width={16} height={16} className="text-snow/40" />
                    <Link href={"/blogs"} className="text-snow/40 transition-colors duration-300 hover:text-accent">Blog</Link>
                    <span className="text-snow/40">/</span>
                    <Link href={"/blogs/category/archiecture"} prefetch={false} className="transition-colors duration-300 hover:text-accent">Category</Link>
                </div>
                <h1 className="font-semibold text-2xl sm:text-5xl my-5 sm:my-7">{slugs[0].split("-").join(" ")}</h1>
                <div className="flex items-center justify-center gap-x-2 sm:gap-x-4 sm:mt-3">
                    <div>
                        <div className="w-5 aspect-square rounded-full overflow-hidden relative">
                            <Image src={"/logo/avatar.webp"} alt="" width={20} height={20} unoptimized draggable={false} priority className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                    <div>
                        <div className="w-5 aspect-square rounded-full overflow-hidden relative">
                            <Image src={"/logo/avatar.webp"} alt="" width={20} height={20} unoptimized draggable={false} priority className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                    <div>
                        <div className="w-5 aspect-square rounded-full overflow-hidden relative">
                            <Image src={"/logo/avatar.webp"} alt="" width={20} height={20} unoptimized draggable={false} priority className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                </div>
                <section className="max-w-[720px] max-sm:w-full max-sm:px-5 *:w-full">
                    <div className="max-sm:text-sm flex items-center justify-between mt-16 sm:mt-[104px] mb-5">
                        <div className="flex items-center justify-center gap-x-2.5 text-snow/40">
                            <Clock4 width={17} height={17} />
                            <span>2 min read</span>
                        </div>
                        <span className="text-snow/40">Dec 22, 2024</span>
                    </div>
                    <BlogArticle data={[]} />
                </section>
            </section>
        </MaxWidthWrapper>
    )
}