import { Hero } from 'ui/components/Hero'
import { ContentSection } from 'ui/components/ContentSection'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/spirit-staffing-visual2.jpg'}
                        alt="cover image"
                        width={1920}
                        height={1280}
                        priority
                        loading={'eager'}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                title="*Vacature Titel*"
            />
            <ContentSection />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Vacature | SpiritStaffing',
    description: 'Vacature | SpiritStaffing',
}
