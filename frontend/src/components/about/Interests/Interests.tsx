import { INTERESTS_DATA } from "@/common/data/pages/about";
import ImageButton from "@/components/global/ImageButton/ImageButton";
import Link from "next/link";

export default function Interests() {
    return INTERESTS_DATA.map(({ backgroundImage: { alt, src }, bottomLink: { label }, desc, link, isExternal, interestType: { name, svg }, title }, index) => (
        <Link href={link} key={index} prefetch={false} target={isExternal ? "_blank" : "_self"}>
            <ImageButton
                bottomLabel={label}
                image={{ alt, src }}
                svg={svg || <></>}
                title={title}
                desc={desc}
                key={index}
                svgLabel={name}
                className="sm:-translate-x-9"
            />
        </Link>
    ))
}