import { Hero } from 'ui/components/Hero'
import { ContentSection } from 'ui/components/ContentSection'
import { Metadata } from 'next'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={<img src={'../../images/heroCoverImage.png'} alt="cover image" />}
                title="*Vacature Titel*"
            />
            <ContentSection />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Vacature',
    description: 'Vacature',
}
