import { BLANK_TRAY_STYLES } from "@/common/themes/shadcn-component-inits"
import { ChildrenType, ClassNameType } from "@/common/types/reactTypes"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { JSX } from "react"

type PopupType = "dialog" | "drawer" | "sheet" | "hidden"
type DirType = "top" | "bottom" | "left" | "right"

type WrapperType = {
    desktop: PopupType
    mobile: PopupType
    desktopDir: DirType
    mobileDir: DirType
}

export default function PopupWrapper({
    triggerComponent,
    popupType: { desktop, mobile, desktopDir, mobileDir },
    children,
    dialogClassName,
    drawerClassName,
    sheetClassName
}: {
    triggerComponent: JSX.Element
    popupType: WrapperType
    children: ChildrenType
    dialogClassName?: ClassNameType
    drawerClassName?: ClassNameType
    sheetClassName?: ClassNameType
}) {
    return (
        <>
            {/* DIALOG ================================================================= */}
            {desktop === "dialog" || mobile === "dialog" ? (
                <Dialog>
                    <DialogTrigger asChild className={`${mobile !== "dialog" ? "max-sm:hidden" : ""} ${desktop !== "dialog" ? "sm:hidden" : ""}`}>
                        {triggerComponent}
                    </DialogTrigger>
                    <DialogContent className={`${BLANK_TRAY_STYLES} ${dialogClassName || ""}`}>
                        <DialogTitle className="hidden" />
                        {children}
                    </DialogContent>
                </Dialog>
            ) : (
                <></>
            )}


            {/* DRAWER ================================================================= */}
            {desktop === "drawer" || mobile === "drawer" ? (
                <Drawer direction={desktop === "drawer" ? desktopDir : mobileDir}>
                    <DrawerTrigger asChild className={`${mobile !== "drawer" ? "max-sm:hidden" : ""} ${desktop !== "drawer" ? "sm:hidden" : ""}`}>
                        {triggerComponent}
                    </DrawerTrigger>
                    <DrawerContent className={`${((desktop === "drawer" && desktopDir === "top") || (mobile === "drawer" && mobileDir === "top")) ? "top-0 h-fit -mt-14" : ""} min-w-fit ${BLANK_TRAY_STYLES} ${drawerClassName || ""}`}>
                        <DrawerTitle className="hidden" />
                        {children}
                    </DrawerContent>
                </Drawer>
            ) : (
                <></>
            )}


            {/* SHEET ================================================================= */}
            {desktop === "sheet" || mobile === "sheet" ? (
                <Sheet>
                    <SheetTrigger asChild className={`${mobile !== "sheet" ? "max-sm:hidden" : ""} ${desktop !== "sheet" ? "sm:hidden" : ""}`}>
                        {triggerComponent}
                    </SheetTrigger>
                    <SheetContent side={desktop === "sheet" ? desktopDir : mobileDir} className={`${BLANK_TRAY_STYLES} ${sheetClassName || ""}`}>
                        <SheetTitle className="hidden" />
                        {children}
                    </SheetContent>
                </Sheet>
            ) : (
                <></>
            )}
        </>
    )
}