'use client'
import { CLIENTS_DATA, CLIENTS_SUBTITLE, CLIENTS_TITLE, TOTAL_CLIENTS_SHOWING_AT_ONCE } from "@/common/data/misc/clients"
import { useEffect } from "react"
import { createRoot, Root } from "react-dom/client"
import ComponentTitle from "../Typography/ComponentTitle"
import ComponentSubtitle from "../Typography/ComponentSubtitle"
import { ChevronRight } from "lucide-react"
import PopupWrapper from "../PopupWrapper/PopupWrapper"
import ClientsPopup from "./ClientsPopup"
import { CLIENTS_TIMELINE } from "@/common/data/misc/timelines"

export default function Clients() {
    useEffect(() => {
        const clients = document.querySelectorAll(".client-tag")
        const n = CLIENTS_DATA.length
        const TIMER = 150, RAPIDNESS = 50, LOOP_AFTER = 4000
        let offset = 0

        const animationFunction = ({ client, offset, index, root }: { client: Element, offset: number, index: number, root: Root }) =>
            setTimeout(
                () => {
                    client.animate({ filter: "blur(0px)", scale: "1", opacity: "100%" }, { duration: TIMER, fill: "forwards", delay: TIMER * 0 })
                    client.animate({ filter: "blur(10px)", scale: "0.6", opacity: "0%" }, { duration: TIMER, fill: "forwards", delay: TIMER * 1 })
                    client.animate({ filter: "blur(10px)", scale: "0.6", opacity: "0%" }, { duration: TIMER, fill: "forwards", delay: TIMER * 2 })
                    client.animate({ filter: "blur(0px)", scale: "1", opacity: "100%" }, { duration: TIMER, fill: "forwards", delay: TIMER * 3 })

                    setTimeout(
                        () => root.render(CLIENTS_DATA[(offset + index) % n].svg)
                        , TIMER * 2
                    )
                },
                index * RAPIDNESS
            )

        const interval = setInterval(
            () => {
                offset = (offset + TOTAL_CLIENTS_SHOWING_AT_ONCE) % n
                clients.forEach((client, index) =>
                    animationFunction({
                        client,
                        index,
                        offset,
                        root: createRoot(client)
                    })
                )
            },
            LOOP_AFTER
        )

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <ComponentTitle title={CLIENTS_TITLE} />
            <ComponentSubtitle subtitle={CLIENTS_SUBTITLE} />
            <div className="grid *:row-start-1 *:col-start-1">
                <div className="py-12 z-10 grid">
                    <div className="group flex items-center justify-center transition-all duration-500 hover:backdrop-blur-md ">
                        <PopupWrapper
                            popupType={{ desktop: "dialog", desktopDir: "right", mobile: "drawer", mobileDir: "bottom" }}
                            triggerComponent={
                                <button className="cursor-pointer text-sm font-medium border border-snow/15 bg-snow/5 px-5 py-2 rounded-full flex items-center justify-center gap-x-1 hover:border-snow/50 transition-all duration-300 delay-100 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100">
                                    <span>Check them all </span>
                                    <ChevronRight width={17} height={17} className="translate-y-px opacity-65" />
                                </button>
                            }
                        >
                            <ClientsPopup timelines={CLIENTS_TIMELINE} />
                        </PopupWrapper>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 sm:gap-y-9 w-full *:grid *:place-items-center *:h-28 py-12 ">
                    {CLIENTS_DATA
                        .slice(0, TOTAL_CLIENTS_SHOWING_AT_ONCE)
                        .map(({ svg }, index) => (
                            <div key={index} className="client-tag relative overflow-hidden px-7 sm:px-24">{svg}</div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}