import { FULL_NAME } from "@/common/data/root/_personalDetails"
import Image from "next/image"
import AVATAR from "@/../public/logo/avatar.webp"
import Link from "next/link"

export default function Logo() {
    return (
        <Link href={"/"} id="logo" prefetch className="group relative rounded-full aspect-square h-[42px] w-[42px] border border-snow/10 sm:border-smoke bg-smoke/70 p-1 transition-all duration-300 hover:border-snow/20">
            <Image src={AVATAR.src} alt={FULL_NAME} unoptimized width={42} height={42} decoding="async" priority={true} draggable={false} className="rounded-full object-cover object-center w-full h-full z-10" />
            <div className="max-sm:hidden absolute top-1/2 left-[52px] -translate-y-1/2 whitespace-nowrap -translate-x-14 group-hover:-translate-x-0 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none z-0">Kushal</div>
        </Link>
    )
}