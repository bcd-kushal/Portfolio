import "./globals.css"
import { ChildrenType } from "@/common/types/reactTypes"
import Header from "@/components/global/Header/Header"
import Footer from "@/components/global/Footer/Footer"
import CommissionBanner from "@/components/global/CommissionBanner/CommissionBanner"
import Testimonials from "@/components/global/Testimonials/Testimonials"
import { Geist } from "next/font/google"

const geist = Geist({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
})

export default async function Root({ children }: { children: ChildrenType }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="shortcut icon" href="/logo/favicon.png" type="image/x-icon" />
                <link rel="sitemap" href="/sitemap.xml" />
                <meta httpEquiv="content-language" content="en" />
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta httpEquiv="Cache-Control" content="max-age=3600" />
                <meta name="locale" content="en" />
            </head>
            <body className={`antialiased ${geist.className} font-geist bg-matte sm:bg-latex text-snow overflow-x-hidden`}>
                <Header />
                {children}
                <Testimonials />
                <CommissionBanner />
                <Footer />
            </body>
        </html>
    )
}
