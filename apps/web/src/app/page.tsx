import { CallToAction } from 'ui/components/CallToAction'
import { Testimonials } from 'ui/components/Testimonials'
import { Pricing } from 'ui/components/Pricing'
import React from 'react'
import { Hero } from 'ui/components/Hero'
import { StatsDescription } from 'ui/components/StatsDescription'
import { StatsImage } from 'ui/components/StatsImage'
import { Metadata } from 'next'

export default function Page() {
    return (
        <>
            <Hero
                title="Jouw carrière met impact!"
                description="Samen is alles mogelijk. Vanaf de start investeren we in de ontwikkeling van onze mensen. En we houden niet op! Samen maken we een ontwikkelplan en zorgen voor een uitdagende werk -en leeromgeving. We doen dat met de juiste Spirit, binnen de juiste privé- werkbalans balans, om elke dag de beste versie van onszelf te kunnen zijn!
                    Wij zijn SpiritStaffing en onze mensen maken het verschil binnen de digitale transitie van Nederland."
                link={[
                    {
                        title: 'Ik heb de juiste spirit!',
                        href: 'contact',
                    },
                ]}
            />
            <StatsDescription
                title="Onze missie"
                description="Bij SpiritStaffing zien we dat veel werkprocessen volledig digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar we moeten ook realistisch zijn. Het risico op misbruik van gegevens groeit en daarom is het vergroten van digitale weerbaarheid in organisaties essentieel. Het vraagt om aanpassingsvermogen, waarvoor de komende jaren meer kundige ICT professionals nodig zijn.
                   Onze missie is dan ook de beste ICT professionals te vinden om de digitalisering voor het publieke domein te accelereren, waarbij we ons in de eerste plaats concentreren op een verhoging van de digitale weerbaarheid."
                stats={[
                    {
                        label: 'Een echte toegevoegde waarde leveren aan de digitale transitie van Nederland.',
                        value: 'Impact maken',
                    },
                    {
                        label: 'Wij helpen je om jouw carrière naar de volgende fase te brengen.',
                        value: 'Boost jouw carriere',
                    },
                    {
                        label: 'Als je je niet meer kan ontwikkelen is het tijd om iets anders te gaan doen.',
                        value: 'Altijd blijven ontwikkelen\n',
                    },
                ]}
            />
            <StatsImage
                title="Professionals die het verschil maken"
                description="Het vinden van een juiste werkomgeving is uitdagend. Dat realiseren wij ons iedere dag.
                             Het betekent veel meer dan een plek om alleen te werken. Het gaat over het ontwikkelen
                             van jouw talent, het ontdekken van nieuwe mogelijkheden en het maken van impact. Het
                             gaat om het maken van connecties, waarbij je ook een goede balans tussen jouw privéleven
                             en professionele ambities realiseert. Binnen SpiritStaffing begeleiden we twee groepen
                             professionals: de startende professionals binnen SpiritStart, en de meer ervaren medior
                             en senior professionals binnen SpiritPro."
            />
            <CallToAction
                title="Ben jij klaar voor een carrière met de juiste Spirit?"
                description="Laten we connecten en samen impact maken!"
                link={[
                    {
                        title: 'Bel me terug',
                        to: '/contact',
                    },
                ]}
            />
            <Pricing />
            <Testimonials />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Home',
    description: 'Homr',
}
