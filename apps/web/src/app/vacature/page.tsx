import { Hero } from 'ui/components/Hero'
import { ContentSection } from 'ui/components/ContentSection'
import { Metadata } from 'next'

export default function Page() {
    return (
        <>
            <Hero title="*Vacature Titel*" />
            <ContentSection />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Vacature',
    description: 'Vacature',
}
