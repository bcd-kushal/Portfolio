import TestimonialsDynamic, { TestimonialFallback } from "../global/Testimonials/dynamic/Testimonials.Dynamic";
import { Suspense } from "react";

export default function TestimonialsPopup() {
    return (
        <div className="bg-matte to-transparent *:px-4 sm:px-6 max-sm:rounded-t-[26px] sm:h-full sm:w-[50dvw] sm:max-w-[800px] max-sm:border-t max-sm:border-x border-l border-snow/10 grid grid-cols-1 sm:grid-cols-[250px_1fr] sm:gap-6 max-sm:h-[85dvh] h-[100dvh]">
            <Suspense fallback={<TestimonialFallback area="popup" />}>
                <TestimonialsDynamic area="popup" />
            </Suspense>
        </div>
    )
}