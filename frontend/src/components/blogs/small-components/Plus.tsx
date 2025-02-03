import { ClassNameType } from "@/common/types/reactTypes";

export default function Plus({ x, y, className }: { x: "left" | "right", y: "top" | "bottom", className?: ClassNameType }) {
    return (
        <>
            <div className={`absolute h-px w-6 bg-snow/20 ${x === "left" ? "-left-3" : "-right-3"} ${y === "top" ? "top-0" : "bottom-0"} ${className || ""}`} />
            <div className={`absolute h-6 w-px bg-snow/20 ${x === "left" ? "left-0" : "right-0"} ${y === "top" ? "-top-3" : "-bottom-3"} ${className || ""}`} />
        </>
    )
}