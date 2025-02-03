'use client'
import { FULL_NAME } from "@/common/data/root/_personalDetails"
import MaxWidthWrapper from "../Spacings/MaxWidthWrapper/MaxWidthWrapper"
import { FOOTER_LINKS } from "@/common/data/pages/_footer"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
    const currPath = usePathname();

    return (
        <MaxWidthWrapper isFooter className="flex max-sm:flex-col items-center justify-start sm:justify-between max-sm:gap-y-7 text-sm">
            <div className="flex items-center justify-start gap-5 font-medium sm:text-snow/80 *:transition-all *:duration-300">
                {FOOTER_LINKS
                    .filter(({ link }) => link !== currPath)
                    .map(({ label, link }, index) => (
                        <Link href={link} prefetch={false} className="hover:text-accent" key={index}>
                            {label}
                        </Link>
                    ))
                }
            </div>
            <div className="cursor-default text-snow/25 select-none">&copy; {new Date().getFullYear()} {FULL_NAME}. All rights reserved.</div>
        </MaxWidthWrapper>
    )
}