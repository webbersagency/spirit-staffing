import localFont from 'next/font/local'
import * as React from 'react'
import 'ui/styles/global.css'
import { Footer } from 'ui/components/Footer'
import { Header } from 'ui/components/Header'

const recoleta = localFont({
    src: [
        {
            path: './fonts/RecoletaMedium.woff2',
            weight: '500',
        },
        {
            path: './fonts/RecoletaBold.woff2',
            weight: '600',
        },
    ],
    variable: '--font-recoleta',
    display: 'swap',
})
const silka = localFont({
    src: [
        {
            path: '/fonts/SilkaRegular.woff2',
            weight: '400',
        },
        {
            path: '/fonts/SilkaMedium.woff2',
            weight: '500',
        },
        {
            path: './fonts/SilkaBold.woff2',
            weight: '700',
        },
    ],
    variable: '--font-silka',
    display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${recoleta.variable} ${silka.variable} !scroll-smooth`} lang="nl">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
