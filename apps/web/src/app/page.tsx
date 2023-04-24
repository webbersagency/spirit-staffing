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
                title="Jouw ICT carrière met impact!"
                description={
                    'Wij zijn SpiritStaffing en onze mensen maken het verschil binnen de digitale transitie van Nederland. Samen is alles mogelijk. Dat is waar wij in geloven! \n' +
                    '\n' +
                    'Investeren in ontwikkeling, binnen een uitdagende werk- en leeromgeving. Dat is onze basis. ﻿\n' +
                    '\n' +
                    'Met de juiste Spirit en de perfecte privé- werkbalans. Zo kunnen we elke dag de beste versie van onszelf zijn.\n' +
                    '\n' +
                    'Dat geldt voor elke professional, op elk niveau, gedurende de hele carrière. \n' +
                    '\n' +
                    'Onze starters krijgen extra begeleiding om succesvol door te groeien! Daarom onderscheiden wij SpiritStart en SpiritPro.'
                }
                link={[
                    {
                        title: 'Ik heb de juiste spirit!',
                        href: 'contact',
                    },
                ]}
            />
            <StatsDescription
                title="Onze missie"
                description={
                    'Veel werkprocessen digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar het vraagt ook om aanpassingsvermogen.\n' +
                    '\n' +
                    'Onze missie is om de beste ICT professionals te vinden om de digitalisering te accelereren, door permanente ontwikkeling van onze professionals, door persoonlijke begeleiding.'
                }
                stats={[
                    {
                        label: 'Echte toegevoegde waarde leveren aan de digitale transitie van Nederland.',
                        value: 'Impact maken',
                    },
                    {
                        label: 'Wij helpen je om jouw carrière naar de volgende fase te brengen.',
                        value: 'Boost jouw carriere',
                    },
                    {
                        label: 'Als je je niet meer kunt ontwikkelen is het tijd om iets anders te gaan doen.',
                        value: 'Altijd blijven ontwikkelen\n',
                    },
                ]}
            />
            <StatsImage
                title="Professionals die het verschil maken"
                description={
                    'Het vinden van een juiste werkomgeving is uitdagend. \n' +
                    '\n' +
                    'Het betekent veel meer dan een plek om alleen te werken. Het gaat over het ontwikkelen van talent. Het ontdekken van nieuwe mogelijkheden. Het maken van impact. \n' +
                    '\n' +
                    'Het gaat om het maken van connecties, binnen een goede balans van privé en professionele ambities. '
                }
                variant="light"
                link={[
                    {
                        title: 'SpiritPro',
                        to: '/opdrachtgevers/#spiritPro',
                    },
                ]}
                link2={[
                    {
                        title: 'SpiritStart',
                        to: '/opdrachtgevers/#spiritStart',
                    },
                ]}
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
