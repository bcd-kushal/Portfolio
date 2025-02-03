import { ACHIEVEMENTS_DATA } from "@/common/data/pages/portfolio"
import PopupWrapper from "@/components/global/PopupWrapper/PopupWrapper"
import { ChevronRight } from "lucide-react"
import AchievementsPopup from "./AcheivementsPopup"

export default function Achievements() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 sm:gap-y-2">
            {ACHIEVEMENTS_DATA.map(({ acheivementName, issuer, date }, index) => (
                <PopupWrapper
                    key={index}
                    popupType={{
                        desktop: "dialog",
                        desktopDir: "bottom",
                        mobile: "drawer",
                        mobileDir: "bottom"
                    }}
                    triggerComponent={
                        <button className="text-left group rounded-2xl space-y-1 sm:hover:bg-snow/5 transition-all duration-300 cursor-pointer sm:py-6 sm:px-7 sm:-translate-y-3 sm:-translate-x-7">
                            <h3 className="text-xl text-snow">{acheivementName}</h3>
                            <h4 className="text-snow/50">{issuer}, {date}</h4>

                            <span className="pt-3 text-sm w-fit text-accent transition-all duration-300 flex items-center justify-start gap-x-3 cursor-pointer">
                                <span>Read more</span>
                                <ChevronRight width={15} height={15} className="translate-y-px -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                            </span>
                        </button>
                    }
                >
                    <AchievementsPopup initialOpenTab={acheivementName} />
                </PopupWrapper>
            ))}
        </div>
    )
}