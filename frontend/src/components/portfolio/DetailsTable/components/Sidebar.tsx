'use client'
import { useEffect, useState } from "react"

export default function DetailsTableSidebar({ elements }: { elements: { label: string, sectionId: string }[] }) {
    const [scrollId, setScrollId] = useState<string | null>(null)

    useEffect(() => {
        if (scrollId !== null) {
            const section = document.getElementById(scrollId) as HTMLElement
            section.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
            setScrollId(null)
        }
    }, [scrollId])

    return (
        <aside className="h-fit sticky top-28 flex flex-col justify-start gap-6 max-sm:hidden">
            {elements.map(({ label, sectionId }, index) => (
                <div
                    onClick={() => setScrollId(sectionId)}
                    className="transition-colors duration-300 text-snow/40 hover:text-snow cursor-pointer w-fit"
                    key={index}
                >
                    {label}
                </div>
            ))}
        </aside>
    )
}