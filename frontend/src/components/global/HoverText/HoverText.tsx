import { ChildrenType } from "@/common/types/reactTypes"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function HoverText({ children, onHoverText }: { children: ChildrenType, onHoverText: string }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="">
                    {onHoverText}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}