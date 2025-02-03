import { ChildrenType, ClassNameType } from "@/common/types/reactTypes";

export default function MaxWidthWrapper({ children, blankCanvas, className, isHeader, isFooter, asDiv, asMain, outOfDOM, noPadding, noXSpacing, inBlog }: { children: ChildrenType, isHeader?: boolean, isFooter?: boolean, asDiv?: boolean, asMain?: boolean, blankCanvas?: boolean, className?: ClassNameType, outOfDOM?: boolean, noPadding?: boolean, noXSpacing?: boolean, inBlog?: boolean }) {
    if (isHeader)
        return (
            <header className={`w-device flex justify-center *:max-w-extent *:w-full sticky top-0 *:pt-5 max-sm:bg-gradient-to-b max-sm:from-matte max-sm:from-20% max-sm:to-transparent max-sm:-translate-y-px z-50`}>
                <WrappedContent headerStyles blankCanvas className={className || ""} noPadding={noPadding || false} noXSpacing={noXSpacing || false}>
                    {children}
                </WrappedContent>
            </header>
        )

    if (isFooter)
        return (
            <footer className={`w-device flex justify-center *:max-w-extent *:w-full *:pt-10 *:pb-16 *:border-t *:border-snow/10`}>
                <WrappedContent blankCanvas={blankCanvas || false} className={className || ""} noPadding={noPadding || false} noXSpacing={noXSpacing || false}>
                    {children}
                </WrappedContent>
            </footer>
        )

    if (asDiv)
        return (
            <div className={`w-device flex justify-center *:max-w-extent *:w-full`}>
                <WrappedContent blankCanvas={blankCanvas || false} className={className || ""} noPadding={noPadding || false} noXSpacing={noXSpacing || false}>
                    {children}
                </WrappedContent>
            </div>
        )
        
    if (outOfDOM)
        return (
            <div className={`absolute top-0 w-device flex justify-center *:max-w-extent *:w-full`}>
                <WrappedContent blankCanvas={blankCanvas || false} className={className || ""} noPadding={noPadding || false} noXSpacing={noXSpacing || false}>
                    {children}
                </WrappedContent>
            </div>
        )

    if (asMain)
        return (
            <main className={`w-device flex justify-center *:max-w-extent *:w-full ${inBlog ? "*:pt-10 *:sm:pt-16 *:pb-14 *:sm:pb-20" : "*:pt-20 *:sm:pt-36 *:pb-14 *:sm:pb-20"}`}>
                <WrappedContent blankCanvas={blankCanvas || false} className={className || ""} noPadding={noPadding || false} noXSpacing={noXSpacing || false}>
                    {children}
                </WrappedContent>
            </main>
        )

    return (
        <section className={`w-device flex justify-center *:max-w-extent *:w-full`}>
            <WrappedContent blankCanvas={blankCanvas || false} className={className || ""} noPadding={noPadding || false} noXSpacing={noXSpacing || false}>
                {children}
            </WrappedContent>
        </section>
    )
}

// DEFAULT ONE ------------------
{/* <div className={`${noPadding ? "" : "px-4"} ${noXSpacing ? "sm:px-0" : "sm:px-12 lg:px-20"} ${headerStyles ? "sm:bg-gradient-to-b sm:from-matte sm:from-15% sm:to-transparent" : blankCanvas ? "" : "bg-matte sm:border-x sm:border-snow/10"} ${className || ""}`}> */}

const WrappedContent = ({ children, blankCanvas, headerStyles, noPadding, noXSpacing, className }: { children: ChildrenType, blankCanvas: boolean, headerStyles?: boolean, noPadding: boolean, noXSpacing: boolean, className: ClassNameType }) =>
    <div className={`${noPadding ? "" : "px-4"} ${noXSpacing ? "sm:px-0" : "sm:px-12 lg:px-12"} ${headerStyles ? "sm:bg-gradient-to-b sm:from-matte sm:from-15% sm:to-transparent" : blankCanvas ? "" : "bg-matte"} ${className || ""}`}>
        {children}
    </div>