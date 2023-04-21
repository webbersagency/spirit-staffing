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
                description="Bij SpiritStaffing zien we dat veel werkprocessen volledig digitaliseren.
                              Fantastisch natuurlijk, met een wereld vol kansen. Maar we moeten ook
                              realistisch zijn. Het risico op misbruik van gegevens groeit en daarom is het
                              vergroten van digitale weerbaarheid in organisaties essentieel. Het vraagt om
                              aanpassingsvermogen, waarvoor de komende jaren meer kundige ICT professionals
                               nodig zijn."
                link={[
                    {
                        title: 'Bekijk onze dienstverlening',
                        href: '/dienstverlening',
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
