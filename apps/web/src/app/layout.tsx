import localFont from 'next/font/local'
import * as React from 'react'
import 'ui/styles/global.css'
import { Footer } from 'ui/components/Footer'
import { Header } from 'ui/components/Header'
import { getBaseUrl } from '../utils/getBaseUrl'

const recoleta = localFont({
    src: [
        {
            path: '../fonts/RecoletaMedium.woff2',
            weight: '500',
        },
        {
            path: '../fonts/RecoletaBold.woff2',
            weight: '600',
        },
    ],
    variable: '--font-recoleta',
    display: 'swap',
})

const silka = localFont({
    src: [
        {
            path: '../fonts/SilkaRegular.woff2',
            weight: '400',
        },
        {
            path: '../fonts/SilkaMedium.woff2',
            weight: '500',
        },
        {
            path: '../fonts/SilkaBold.woff2',
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

export const metadata = {
    title: 'Jouw IT carrière met impact! | SpiritStaffing',
    description:
        'Jouw IT carrière met impact! Onze mensen maken het verschil binnen de digitale transitie van Nederland',
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
        other: [
            {
                rel: 'mask-icon',
                url: '/safari-pinned-tab.svg',
                // @ts-ignore
                color: '#003d26',
            },
        ],
    },
    manifest: '/site.webmanifest',
    themeColor: '#003d26',
    openGraph: {
        title: 'Jouw IT carrière met impact!',
        description:
            'Jouw IT carrière met impact! Onze mensen maken het verschil binnen de digitale transitie van Nederland',
        url: `${getBaseUrl()}`,
        siteName: 'SpiritStaffing',
        images: [
            {
                url: `${getBaseUrl()}/images/spiritstaffing_og_image.jpg`,
                width: 1200,
                height: 630,
            },
        ],
        locale: 'nl-NL',
        type: 'website',
    },
}
