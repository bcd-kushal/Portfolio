import { SUBSCRIBE_LABEL } from "@/common/data/misc/commission-me"
import PopupWrapper from "../../PopupWrapper/PopupWrapper"
import { Bell } from "lucide-react"
import { addSubscription } from "@/server/fetchFunctions"

export default function Subscribe() {
    return (
        <PopupWrapper
            popupType={{
                desktop: "dialog",
                desktopDir: "bottom",
                mobile: "drawer",
                mobileDir: "bottom",
            }}
            triggerComponent={
                <button className="bg-snow/5 text-snow  backdrop-blur-sm hover:bg-snow/10">
                    {SUBSCRIBE_LABEL}
                </button>
            }
        >
            <SubscribePopup />
        </PopupWrapper>
    )
}

const SubscribePopup = () => {
    const handleSaveSubscription = async (formData: FormData) => {
        const email = formData.get("email") as string
        addSubscription({ email })
    }

    return (
        <form action={handleSaveSubscription} className="bg-matte/85 sm:bg-matte/60 backdrop-blur-sm border border-snow/10 rounded-t-3xl sm:rounded-2xl pt-8 pb-5 px-5 sm:p-6 grid grid-cols-1 gap-y-2.5 items-center justify-center auto-rows-min sm:w-[380px]">
            <div className="text-center text-xl">Subscribe to updates</div>
            <div className="text-center mb-3 text-sm leading-none text-snow/60">Fresh updates will drop at your email</div>
            <input type="email" name="email" className="w-full rounded-xl placeholder:text-snow/35 py-3 px-3.5 bg-snow/5 transition-all duration-300 hover:bg-snow/10 focus:outline-1 focus:outline-accent/50 focus:outline-offset-4 outline-none" placeholder="Email address" />
            <button type="submit" className="text-center flex items-center justify-center gap-2 py-2.5 cursor-pointer bg-snow/75 rounded-xl text-matte mt-3 transition-all duration-300 hover:bg-snow">
                <Bell width={16} height={16} />
                <span>Subscribe</span>
            </button>
            <div className="text-xs text-snow/30 text-center mt-2">
                Unsubscribe any moment by emailing me
            </div>
        </form>
    )
}