import { ChildrenType, ClassNameType } from "@/common/types/reactTypes";

export default function MacOSPanel({ children, windowName, className }: { children: ChildrenType, windowName: string, className?: ClassNameType }) {
    return (
        <div className={`group border border-snow/10 rounded-2xl sm:rounded-3xl flex flex-col justify-start p-1.5 sm:p-2.5 ${className || ""}`}>
            <div className="flex items-center justify-start gap-x-2 sm:gap-x-3 pt-1 pl-2 sm:pl-3.5 pb-2.5 sm:pb-3 relative">
                <span className="aspect-square rounded-full w-2 sm:w-3 bg-snow/15 transition-colors duration-300 group-hover:bg-red-500" />
                <span className="aspect-square rounded-full w-2 sm:w-3 bg-snow/15 transition-colors duration-300 group-hover:bg-amber-400" />
                <span className="aspect-square rounded-full w-2 sm:w-3 bg-snow/15 transition-colors duration-300 group-hover:bg-green-500" />
                <div className="absolute left-1/2 -translate-x-1/2 text-[11px] sm:text-xs text-snow/30 truncate max-sm:w-1/2">
                    {windowName}
                </div>
            </div>
            <div className="border border-snow/10 rounded-2xl sm:rounded-3xl relative aspect-video overflow-hidden">
                {children}
            </div>
        </div>
    )
}