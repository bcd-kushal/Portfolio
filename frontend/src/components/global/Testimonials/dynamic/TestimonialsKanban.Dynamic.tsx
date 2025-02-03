"use client"

import { TestimonialType } from "@/common/types/types"
import { TestimonialCells } from "./Testimonials.Dynamic"
import { JSX, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

export default function TestimonialsKanbanDynamic({ testimonials }: { testimonials: TestimonialType[] }) {
    const [selectedTags, setSelectedTags] = useState<{ designations: string[], companies: string[] }>({ companies: [], designations: [] })
    const [sort, setSort] = useState<"asc" | "desc">("asc")

    const designations = new Set<string>();
    const companies = new Set<string>();
    testimonials.forEach(({ designation, company }) => {
        if (!designations.has(designation)) designations.add(designation)
        if (company)
            if (!companies.has(company)) companies.add(company)
    })

    return (
        <>
            <div className="relative max-sm:row-start-2 max-sm:border-t max-sm:border-snow/10 py-3 max-sm:px-0 sm:py-8 flex sm:flex-col max-sm:items-center justify-start gap-2 max-sm:overflow-auto max-sm:w-device max-sm:h-fit max-sm:self-end scrollbar-hide">
                <div className="sm:hidden z-10 sticky left-0 h-full scale-y-125 w-6 min-w-6 -ml-3 bg-gradient-to-r from-matte from-25% to-transparent pointer-events-none text-transparent">a</div>
                <div className="text-sm sm:text-xl sm:pt-3 whitespace-nowrap">Sort by</div>
                <Pill label={sort === "asc" ? "Ascending" : "Descending"} isActive={true} onClick={() => setSort(prev => prev === "asc" ? "desc" : "asc")} onlyInMobile />
                <div className="flex flex-wrap gap-1.5 *:w-fit max-sm:hidden">
                    <Pill label={"Ascending"} isActive={sort === "asc"} onClick={() => setSort("asc")} />
                    <Pill label={"Descending"} isActive={sort === "desc"} onClick={() => setSort("desc")} />
                </div>

                <div className="text-sm sm:text-xl sm:pt-3 sm:mt-7 max-sm:pl-3 max-sm:ml-1 max-sm:border-l border-snow/10 whitespace-nowrap">Filter by</div>
                <div className="text-white/70 pt-2.5 pb-1.5 max-sm:hidden">Companies</div>

                <MobileFilterPill
                    activeLabel={selectedTags.companies.length > 0 ? `${selectedTags.companies[0]}${selectedTags.companies.length > 1 ? ` +${selectedTags.companies.length - 1} more` : ""}` : "Company"}
                    isActive={selectedTags.companies.length > 0}
                    popoverContent={
                        <>
                            <div className="w-full text-snow text-lg">Companies</div>
                            <div className="w-full text-snow/50 text-xs leading-none -mt-0.5 mb-2">{selectedTags.companies.length} of {Array.from(companies).length} selected</div>
                            {Array.from(companies).map((key, index) => (
                                <Pill
                                    label={key}
                                    key={index}
                                    isActive={selectedTags.companies.includes(key)}
                                    onClick={() => setSelectedTags(prev => prev.companies.includes(key)
                                        ? { ...prev, companies: prev.companies.filter(val => val !== key) }
                                        : { ...prev, companies: [...prev.companies, key] })}
                                />
                            ))}
                        </>
                    }
                />
                <MobileFilterPill
                    activeLabel={selectedTags.designations.length > 0 ? `${selectedTags.designations[0]}${selectedTags.designations.length > 1 ? ` +${selectedTags.designations.length - 1} more` : ""}` : "Designation"}
                    isActive={selectedTags.designations.length > 0}
                    popoverContent={
                        <>
                            <div className="w-full text-snow text-lg">Designations</div>
                            <div className="w-full text-snow/50 text-xs leading-none -mt-0.5 mb-2">{selectedTags.designations.length} of {Array.from(designations).length} selected</div>
                            {Array.from(designations).map((key, index) => (
                                <Pill
                                    label={key}
                                    key={index}
                                    isActive={selectedTags.designations.includes(key)}
                                    onClick={() => setSelectedTags(prev => prev.designations.includes(key)
                                        ? { ...prev, designations: prev.designations.filter(val => val !== key) }
                                        : { ...prev, designations: [...prev.designations, key] })}
                                />
                            ))}
                        </>
                    }
                />

                <div className="flex flex-wrap gap-1.5 gap-y-2 *:w-fit max-sm:hidden">
                    {Array.from(companies).map((key, index) => (
                        <Pill
                            label={key}
                            key={index}
                            isActive={selectedTags.companies.includes(key)}
                            onClick={() => setSelectedTags(prev => prev.companies.includes(key)
                                ? { ...prev, companies: prev.companies.filter(val => val !== key) }
                                : { ...prev, companies: [...prev.companies, key] })}
                        />
                    ))}
                </div>
                <div className="text-white/70 pt-4 pb-1.5 max-sm:hidden">Designations</div>
                <div className="flex flex-wrap gap-1.5 gap-y-2 *:w-fit max-sm:hidden">
                    {Array.from(designations).map((key, index) => (
                        <Pill
                            label={key}
                            key={index}
                            isActive={selectedTags.designations.includes(key)}
                            onClick={() => setSelectedTags(prev => prev.designations.includes(key)
                                ? { ...prev, designations: prev.designations.filter(val => val !== key) }
                                : { ...prev, designations: [...prev.designations, key] })}
                        />
                    ))}
                </div>
                <div className="sm:hidden z-10 sticky scale-y-125 right-0 h-full w-6 min-w-6 -ml-3 bg-gradient-to-l from-matte from-25% to-transparent pointer-events-none text-transparent">a</div>
            </div>
            <div className="py-9 sm:py-8 flex flex-col justify-start gap-4 overflow-auto scrollbar-hide">
                <TestimonialCells
                    area={"popup"}
                    testimonials={testimonials
                        .filter((testimonial) => {
                            let pass1 = true, pass2 = true
                            if (selectedTags.companies.length > 0) {
                                if (testimonial.company)
                                    pass1 = selectedTags.companies.includes(testimonial.company)
                                else pass1 = false
                            }
                            if (selectedTags.designations.length > 0)
                                pass2 = selectedTags.designations.includes(testimonial.designation)
                            return pass1 && pass2
                        })
                        .slice()
                        .sort((a: TestimonialType, b: TestimonialType) => {
                            if (sort === "asc")
                                return a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
                            return b.name.localeCompare(a.name, undefined, { sensitivity: "base" })
                        })
                    }
                />
            </div>
        </>
    )
}

const Pill = ({ label, isActive, onClick, onlyInMobile }: { label: string, isActive: boolean, onClick: () => void, onlyInMobile?: boolean }) =>
    <div onClick={onClick} className={`${isActive ? `bg-accent/20 text-accent` : "bg-smoke/50 text-snow/80 sm:text-snow hover:bg-smoke/75"} ${onlyInMobile ? "sm:hidden" : ""} rounded-[9px] py-1 px-3 flex items-center text-[13px] transition-all duration-300 cursor-pointer`}>
        {label}
    </div>

const MobileFilterPill = ({ activeLabel, isActive, popoverContent }: { activeLabel: string, isActive: boolean, popoverContent: JSX.Element }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className={`sm:hidden rounded-[9px] py-1 px-3 whitespace-nowrap flex items-center justify-center gap-x-1.5 text-[13px] transition-all duration-300 cursor-pointer ${isActive ? `bg-accent/20 text-accent` : "bg-smoke/50 text-snow/70 hover:bg-smoke/75"}`}>
                    <span>{activeLabel}</span>
                    <ChevronDown width={14} height={14} />
                </div>
            </PopoverTrigger>
            <PopoverContent sideOffset={10} className="bg-matte/40 backdrop-blur-md border border-snow/10 min-w-[200px] max-w-[250px] rounded-2xl p-3 flex items-start justify-start gap-1.5 flex-wrap">
                {popoverContent}
            </PopoverContent>
        </Popover>
    )
}