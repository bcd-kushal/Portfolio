import { Mail, Share2 } from "lucide-react";
import { Card } from "./_Card.GridSummary";
import { HOME_SOCIAL_LINKS } from "@/common/data/pages/homepage";
import Link from "next/link";
import { emailContact } from "@/utils/createSocialLinks";
import { EMAIL } from "@/common/data/root/_personalDetails";

export default function SocialsGridSummary() {
    return (
        <Card title="SOCIALS" svg={<Share2 width={14} height={14} />} className="pt-7 sm:pt-5 max-sm:!min-h-[300px] max-sm:border-l max-sm:border-b border-snow/10 max-sm:hover:border-snow/10" showOnMobile>
            <div className="flex flex-col justify-between h-full px-6 pb-5 pt-[18px] text-[13px] text-snow/60">
                <div className="text-snow/70 grid grid-cols-2 max-sm:gap-3 sm:flex items-center sm:justify-evenly">
                    {HOME_SOCIAL_LINKS.map(({ svg, link, label }, index) => (
                        <Link aria-label={label} href={link} target="_blank" className="transition-colors duration-300 hover:text-snow/95 flex items-center justify-center max-sm:bg-smoke/50 max-sm:aspect-square rounded-[10px]" key={index}>
                            {svg}
                        </Link>
                    ))}
                </div>
                <Link aria-label={"email"} href={emailContact(EMAIL)} target="_blank" className="text-center flex items-center justify-center gap-x-2 transition-all duration-300 hover:text-snow/95">
                    <Mail width={14} height={14} />
                    <span>{EMAIL}</span>
                </Link>
            </div>
        </Card>
    )
}