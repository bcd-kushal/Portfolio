
import { DROP_MESSAGE_LABEL } from "@/common/data/misc/commission-me"
import PopupWrapper from "../../PopupWrapper/PopupWrapper"
import { Send } from "lucide-react"
import { addMessage } from "@/server/fetchFunctions"

export default function DropAMessage() {
    return (
        <PopupWrapper
            popupType={{
                desktop: "dialog",
                desktopDir: "bottom",
                mobile: "drawer",
                mobileDir: "bottom",
            }}
            triggerComponent={
                <button className="bg-snow text-matte rounded-lg px-4 py-2 text-sm sm:font-medium brightness-90 hover:brightness-100 hover:bg-white">
                    {DROP_MESSAGE_LABEL}
                </button>
            }
        >
            <DropMessagePopup />
        </PopupWrapper>
    )
}

const DropMessagePopup = () => {
    const handleSaveMessage = async (formData: FormData) => {
        const name = formData.get("name") as string
        const link = formData.get("link") as string
        const message = formData.get("message") as string
        addMessage({ link, message, name })
    }

    return (
        <form action={handleSaveMessage} className="bg-matte/85 sm:bg-matte/60 backdrop-blur-sm border border-snow/10 rounded-t-3xl sm:rounded-2xl pt-8 pb-5 px-5 sm:p-6 grid grid-cols-1 gap-y-3 items-center justify-center auto-rows-min sm:w-[380px]">
            <div className="text-center text-xl">Drop a message</div>
            <div className="text-center mb-3 text-sm leading-none text-snow/60">Drop a message</div>
            <input type="text" name="name" className="w-full rounded-xl placeholder:text-snow/35 py-3 px-3.5 bg-snow/5 transition-all duration-300 hover:bg-snow/10 focus:outline-1 focus:outline-accent/50 focus:outline-offset-4 outline-none" placeholder="Name" />
            <input type="text" name="link" className="w-full rounded-xl placeholder:text-snow/35 py-3 px-3.5 bg-snow/5 transition-all duration-300 hover:bg-snow/10 focus:outline-1 focus:outline-accent/50 focus:outline-offset-4 outline-none" placeholder="Email or mobile" />
            <textarea name="message" className="w-full rounded-xl resize-none h-28 placeholder:text-snow/35 py-3 px-3.5 bg-snow/5 transition-all duration-300 hover:bg-snow/10 focus:outline-1 focus:outline-accent/50 focus:outline-offset-4 outline-none" placeholder="Message (optional)" />
            <button type="submit" className="text-center flex items-center justify-center gap-2 py-2.5 cursor-pointer bg-snow/75 rounded-xl text-matte mt-3 transition-all duration-300 hover:bg-snow">
                <Send width={16} height={16} />
                <span>Send</span>
            </button>
            <div className="text-xs text-snow/40 text-center mt-2">
                I will get back within a week or two
            </div>
        </form>
    )
}