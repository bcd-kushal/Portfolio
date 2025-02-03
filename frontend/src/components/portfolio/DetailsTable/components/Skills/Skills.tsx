import { SKILLS_DATA, SKILLS_TOP_DATA } from "@/common/data/pages/portfolio"
import { SkillsType } from "@/common/types/types"
import PopupWrapper from "@/components/global/PopupWrapper/PopupWrapper"
import { ChevronRight, WandSparkles } from "lucide-react"
import SkillsPopup from "./SkillsPopup"

export default function Skills() {
    return (
        <div className="max-sm:space-y-16">
            <div className={`group space-y-2.5 sm:space-y-1.5 sm:px-7 sm:pt-2 sm:pb-4 sm:-translate-x-7 sm:-translate-y-5`}>
                <SkillsTab skills={SKILLS_TOP_DATA} asTop />
            </div>

            {SKILLS_DATA.map(({ category, skills }, index) => (
                <PopupWrapper
                    key={index}
                    popupType={{
                        desktop: "sheet",
                        desktopDir: "right",
                        mobile: "drawer",
                        mobileDir: "bottom"
                    }}
                    triggerComponent={
                        <button className={`text-left group space-y-2.5 sm:space-y-1.5 sm:px-7 sm:py-7 sm:-translate-x-7 sm:-translate-y-5 rounded-2xl sm:hover:bg-snow/5 cursor-pointer transition-all duration-300`} key={index}>
                            <h3 className="text-xl sm:pb-1.5">{category}</h3>
                            <SkillsTab skills={skills} />

                            <span className="group text-sm w-fit text-accent transition-all duration-300 flex items-center justify-start gap-x-3 cursor-pointer pt-5 pb-0.5 sm:pb-1">
                                <WandSparkles width={15} height={15} />
                                <span>Relevant projects using these</span>
                                <ChevronRight width={15} height={15} className="translate-y-px -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </span>
                        </button>
                    }
                >
                    <SkillsPopup initialOpenTab={category} />
                </PopupWrapper>
            ))}
        </div>
    )
}

const SkillsTab = ({ skills, asTop }: { skills: SkillsType["skills"], asTop?: boolean }) =>
    skills.map(({ subcategory, svgs }, index2) => (
        <div key={index2} className={`${asTop ? "space-y-1 sm:space-y-2" : "space-y-2.5 sm:space-y-1 max-sm:pt-1"} text-sm flex max-sm:flex-col items-start justify-start gap-x-3 max-sm:pb-1`}>
            <h3 className={`${asTop ? "sm:translate-y-2" : "translate-y-1"} text-snow/50`}>{subcategory}:</h3>
            <ul className="flex items-start justify-start flex-wrap py-0 gap-x-3.5 gap-y-px max-sm:gap-y-1.5 *:flex *:items-center *:justify-start *:gap-x-1.5">
                {svgs.map(({ svg, label }, index3) => (
                    <li key={index3} className="text-snow/80">
                        {svg || <></>}
                        <h4>{label}</h4>
                    </li>
                ))}
            </ul>
        </div>
    ))
