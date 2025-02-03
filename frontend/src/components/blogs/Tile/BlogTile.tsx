import { BLOGS_ROUTE } from "@/common/data/_routes"
import { BlogTileType } from "@/common/types/types"
import Image from "next/image"
import Link from "next/link"

export default function BlogTile({ authors, category, description, thumbnail, title, slug, asFeatured }: BlogTileType & { asFeatured?: boolean }) {
    let authorNames = ""
    if (authors.length === 1)
        authorNames = authors[0].name
    else
        for (let i = 0; i < authors.length; i += 1) {
            if (i > 2) {
                authorNames += ` + ${authors.length - i} more`
                break
            }
            else
                authorNames += (i === 0 ? "" : ", ") + authors[i].name.split(" ")[0]
        }

    return (
        <div className={`grid grid-cols-1 ${!asFeatured && "px-1.5 py-8 sm:p-9"}`}>
            <Link href={`${BLOGS_ROUTE}/${slug}`} prefetch={false} className={`group grid ${asFeatured ? "grid-cols-1 px-6 py-8 sm:p-9 hover:bg-smoke/15 transition-colors duration-300" : "grid-cols-[1fr_50px]"} gap-x-3 sm:gap-x-3`}>
                <div className="flex flex-col justify-start gap-y-1">
                    <span className="text-snow/40 text-xs">
                        {category}
                    </span>

                    <h3 className={`font-medium line-clamp-4 ${asFeatured ? "text-xl mt-1 mb-2" : "group-hover:text-accent mt-0.5 mb-1"} transition-colors duration-300`}>
                        {title}
                    </h3>

                    <article className={`${asFeatured ? "line-clamp-4 sm:line-clamp-6 text-sm pr-3 mb-2.5" : "line-clamp-3 text-xs"} text-snow/40`}>
                        {description}
                    </article>

                    <div className="flex items-center justify-start gap-x-2 mt-2">
                        <div className="grid *:row-start-1 *:col-start-1">
                            {authors.map(({ pfp: { alt, src } }, index) => (
                                <div key={index} className={`overflow-hidden aspect-square rounded-full ${asFeatured ? "w-[18px]" : "w-3.5"} ${index === 1 ? "ml-2.5 z-10" : index === 2 ? "ml-5 z-20" : index === 3 ? "ml-[30px] z-30" : ""}`}>
                                    <Image alt={alt} src={src} width={14} height={14} unoptimized decoding="async" priority={false} draggable={false} className="w-full h-full object-cover object-center" />
                                </div>
                            ))}
                        </div>
                        <h3 className={`${asFeatured ? "text-sm" : "text-xs"} text-snow/70 truncate`}>{authorNames}</h3>
                    </div>
                </div>

                {!asFeatured && (
                    <div className="rounded-xl aspect-square overflow-hidden bg-snow/40 translate-y-1">
                        <Image alt={thumbnail.alt} src={thumbnail.src} width={50} height={50} unoptimized decoding="async" priority={false} draggable={false} className="w-full h-full object-cover object-center" />
                    </div>
                )}
            </Link>
        </div>
    )
}