/* Todo iconen zoeken en zijn links nodig? */
import { CallToAction } from 'ui/components/CallToAction'
import { FeatureColumns } from 'ui/components/FeatureColumns'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'

export default function Page() {
    return (
        <>
            <Hero
                title="Welkom bij SpiritStaffing"
                description={
                    'Veel werkprocessen digitaliseren digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar het vraagt ook om aanpassingsvermogen.\n' +
                    '\n' +
                    'Onze missie is dan ook de beste ICT professionals te vinden om de digitalisering voor het (semi) publieke domein te accelereren.  '
                }
                link={[
                    {
                        title: 'Bekijk onze opdrachtgevers',
                        href: '/opdrachtgevers',
                    },
                ]}
            />
            <FeatureColumns />
            <CallToAction
                title="Wil jij ons beter leren kennen?"
                description="Laat je gegevens achter en wij bellen je terug!"
                link={[
                    {
                        title: 'Bel mij terug',
                        to: '/contact',
                    },
                ]}
            />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Over',
    description: 'Over',
}
