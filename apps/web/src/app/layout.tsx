import localFont from 'next/font/local'
import * as React from 'react'
import 'ui/styles/global.css'
import { Footer } from 'ui/components/Footer'
import { Header } from 'ui/components/Header'

const recoleta = localFont({
    src: [
        {
            path: './fonts/Recoleta-Medium.woff2',
            weight: '500',
        },
        {
            path: './fonts/Recoleta-Bold.woff2',
            weight: '600',
        },
    ],
})
const silka = localFont({
    src: [
        {
            path: './fonts/Silka-Regular.woff2',
            weight: '400',
        },
        {
            path: './fonts/Silka-Bold.woff2',
            weight: '700',
        },
    ],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${recoleta.className} ${silka.className}`} lang="nl">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
