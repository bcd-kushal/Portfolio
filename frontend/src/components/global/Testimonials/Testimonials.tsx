'use client'
import { TESTIMONIALS_SUBTITLE, TESTIMONIALS_TITLE } from "@/common/data/misc/testimonials";
import ComponentSubtitle from "../Typography/ComponentSubtitle";
import ComponentTitle from "../Typography/ComponentTitle";
import { MessageCircle } from "lucide-react";
import PopupWrapper from "../PopupWrapper/PopupWrapper";
import MaxWidthWrapper from "../Spacings/MaxWidthWrapper/MaxWidthWrapper";
import { usePathname } from "next/navigation";
import { TESTIMONIALS_ALLOWED_ROUTES } from "@/common/data/root/_preferences";
import { Suspense } from "react";
import TestimonialsDynamic, { TestimonialFallback } from "./dynamic/Testimonials.Dynamic";
import TestimonialsPopup from "@/components/_popups/TestimonialsPopup";

export default function Testimonials() {
    const currPath = usePathname()

    if (!TESTIMONIALS_ALLOWED_ROUTES.includes(currPath))
            return <></>

    return (
        <MaxWidthWrapper noXSpacing className="pb-3 flex flex-col items-center justify-center pt-16">
            <ComponentTitle title={TESTIMONIALS_TITLE} />
            <ComponentSubtitle subtitle={TESTIMONIALS_SUBTITLE} />

            <PopupWrapper
                triggerComponent={
                    <button id="testimonials" className="flex items-center justify-center gap-x-2.5 text-sm py-2.5 px-4 rounded-[6px] bg-smoke transition-colors duration-300 hover:bg-snow/15 mt-7 mb-2 cursor-pointer">
                        <MessageCircle height={15} width={15} />
                        <span>Read all</span>
                    </button>
                }
                popupType={{ desktop: "sheet", desktopDir: "right", mobile: "drawer", mobileDir: "bottom" }}
            >
                <TestimonialsPopup />
            </PopupWrapper>

            <div className="group w-full relative overflow-x-hidden grid grid-cols-[auto_auto] mt-8">
                <Suspense fallback={<TestimonialFallback area="page" />}>
                    <TestimonialsDynamic area="page" />
                </Suspense>
                <div className="absolute top-0 left-0 w-full h-full bg-matte pointer-events-none [mask-image:radial-gradient(50%_100%_at_50%_50%,transparent_70%,white)] sm:[mask-image:radial-gradient(47%_90%_at_50%_20%,transparent_60%,white)]" />
            </div>
        </MaxWidthWrapper>
    )
}
