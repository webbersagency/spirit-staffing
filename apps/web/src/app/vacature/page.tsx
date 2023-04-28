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
                        src={'/images/spirit-staffing-visual1.jpg'}
                        alt="cover image"
                        width={900}
                        height={1200}
                        priority
                        loading={'eager'}
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
