import { CallToAction } from 'ui/components/CallToAction'
import { Testimonials } from 'ui/components/Testimonials'
import { Pricing } from 'ui/components/Pricing'
import React from 'react'
import { Hero } from 'ui/components/Hero'
import Image from 'next/image'
import { StatsImage } from 'ui/components/StatsImage'
import { Metadata } from 'next'
import { FeatureColumns } from 'ui/components/FeatureColumns'
import { ArrowTrendingUpIcon, BoltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/heroCoverImage.png'}
                        alt="cover image"
                        width={900}
                        height={1200}
                        priority
                        loading={'eager'}
                    />
                }
                title="Jouw IT carrière met impact!"
                description={
                    'Wij zijn SpiritStaffing en onze mensen maken het verschil binnen de digitale transitie van Nederland. Samen is alles mogelijk. Dat is waar wij in geloven! \n' +
                    '\n' +
                    'Investeren in ontwikkeling, binnen een uitdagende werk- en leeromgeving. Dat is onze basis. Met de juiste Spirit en de perfecte privé- werkbalans. Zo kunnen we elke dag de beste versie van onszelf zijn. Dat geldt voor elke professional, op elk niveau, gedurende de hele carrière. Onze starters krijgen extra begeleiding om succesvol door te groeien! Daarom onderscheiden wij SpiritStart en SpiritPro.'
                }
                link={[
                    {
                        title: 'SpiritStart',
                        href: '/kandidaten/#spiritStart',
                    },
                    {
                        title: 'SpiritPro',
                        href: '/kandidaten/#spiritPro',
                    },
                ]}
            />
            <FeatureColumns
                title="Onze missie"
                description={
                    'Veel werkprocessen digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar het vraagt ook om aanpassingsvermogen.\n' +
                    '\n' +
                    'Onze missie is om de beste IT professionals te vinden om de digitalisering te accelereren, door permanente ontwikkeling van onze professionals, door persoonlijke begeleiding.'
                }
                features={[
                    {
                        name: 'Impact maken',
                        description: `Echte toegevoegde waarde leveren aan de digitale transitie van Nederland.`,
                        icon: <BoltIcon />,
                    },
                    {
                        name: 'Boost jouw carriere',
                        description: 'Wij helpen je om jouw carrière naar de volgende fase te brengen.',
                        icon: <RocketLaunchIcon />,
                    },
                    {
                        name: 'Altijd blijven ontwikkelen',
                        description: 'Als je je niet meer kunt ontwikkelen is het tijd om iets anders te gaan doen.',
                        icon: <ArrowTrendingUpIcon />,
                    },
                ]}
            />
            <StatsImage
                image={<Image src={'/images/heroCoverImage.png'} alt="cover image" width={1000} height={1000} />}
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
                        title: 'SpiritStart',
                        href: '/kandidaten/#spiritStart',
                    },
                    {
                        title: 'SpiritPro',
                        href: '/kandidaten/#spiritPro',
                    },
                ]}
            />
            <CallToAction
                title="Ben jij klaar voor een carrière met de juiste Spirit?"
                description="Laten we connecten en samen impact maken!"
                link={[
                    {
                        title: 'Bel me terug',
                        href: '/contact',
                    },
                ]}
            />
            <Pricing />
            <Testimonials />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Home | SpiritStaffing',
    description: 'Home | SpiritStaffing',
}
