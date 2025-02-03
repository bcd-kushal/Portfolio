import { BANNER_DESCRIPTIONS, BANNER_TITLE, CONTACT_DETAILS } from "@/common/data/pages/contact"
import Link from "next/link"
import Image from "next/image"

/* const images: ImageType[] = [
    { alt: "Giftlaya", src: "/images/companies/full-banners/giftlaya.webp" },
    { alt: "Brightchamps", src: "/images/companies/full-banners/brightchamps.webp" },
    { alt: "MantraMugdh", src: "/images/companies/full-banners/mantra-mugdh.webp" },
    { alt: "Skillshetra", src: "/images/companies/full-banners/skillshetra.webp" }
] */

export default function ContactPopup() {
    return (
        <section className="grid grid-cols-[200px_400px] border bg-matte  border-smoke rounded-t-3xl sm:rounded-2xl overflow-hidden h-fit">
            <div className="bg-latex relative overflow-hidden">
                <Image
                    src={"/images/companies/full-banners/connect-with-me.webp"}
                    alt={"Connect with me"}
                    height={500}
                    width={200}
                    unoptimized
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover object-right"
                />
            </div>
            <div className=" p-6 flex flex-col justify-start">
                <h3 className="text-2xl mt-1 mb-3">{BANNER_TITLE}</h3>
                <ul className="text-sm text-white/50 list-disc list-inside space-y-0.5 mb-2">
                    {BANNER_DESCRIPTIONS.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>

                <div className="grid grid-cols-2 gap-2.5 mt-6">
                    {CONTACT_DETAILS.PERSONAL_LINKS.map(({ label, link, svg }, index) => (
                        <Link
                            href={link}
                            prefetch
                            className="flex items-center justify-center gap-x-2 bg-transparent text-sm font-medium border text-snow/80 border-snow/10 p-2.5 rounded-[7px] transition-all duration-300 hover:text-accent hover:bg-smoke/50"
                            key={index}
                        >
                            <span className="translate-y-px">{svg}</span>
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent my-5" />

                <div className="grid grid-cols-2 gap-2.5">
                    {CONTACT_DETAILS.SOCIAL_LINKS.map(({ label, link, svg }, index) => (
                        <Link
                            href={link}
                            prefetch
                            className="flex items-center justify-center gap-x-2 bg-transparent text-sm font-medium border text-snow/80 border-snow/10 p-2.5 rounded-[7px] transition-all duration-300 hover:text-accent hover:bg-smoke/50"
                            key={index}
                        >
                            <span className="translate-y-px">{svg}</span>
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}