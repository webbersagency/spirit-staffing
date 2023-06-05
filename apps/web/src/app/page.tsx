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
import { routes } from '../lib/routes'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/spirit-staffing-visual7.jpg'}
                        alt="Jouw IT carrière met impact"
                        width={1920}
                        height={1280}
                        priority
                        loading={'eager'}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                title="Jouw IT carrière met impact!"
                description={
                    'SpiritStaffing is ambitieus, vernieuwend en vol energie! Binnen onze IT Traineeships wordt talent via SpiritStart begeleid om een carrière in IT te kickstarten. Ervaren professionals creëren direct impact via SpiritPro. Bij ons staat de ontwikkeling van talent echt centraal. Met de juiste Spirit en de perfecte privé- werkbalans. Zo dragen we elke dag bij aan de doorstroom van IT talent. Dat geldt voor al onze professionals, op elk niveau.'
                }
                link={[
                    {
                        title: 'SpiritStart',
                        href: `${routes.candidates}/#spiritStart`,
                    },
                    {
                        title: 'SpiritPro',
                        href: `${routes.candidates}/#spiritPro`,
                    },
                ]}
            />
            <FeatureColumns
                title="Onze missie"
                description="Veel werkprocessen digitaliseren. Fantastisch natuurlijk. Maar het vraagt ook om aanpassingsvermogen. Onze missie is om de beste IT professionals te vinden en door permanente ontwikkeling en persoonlijke begeleiding de digitalisering te accelereren."
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
                image={
                    <Image
                        src={'/images/spirit-staffing-visual2.jpg'}
                        alt="Professionals die het verschil maken"
                        width={896}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 384px"
                    />
                }
                title="Professionals die het verschil maken"
                description="Het vinden van de juiste werkomgeving gaat verder dan alleen een werkplek. Het draait om talentontwikkeling, het verkennen van mogelijkheden en het creëren van impact. Het gaat om het opbouwen van relaties en het bereiken van een goede balans tussen privéleven en professionele ambities."
                variant="light"
                link={[
                    {
                        title: 'SpiritStart',
                        href: `${routes.candidates}/#spiritStart`,
                    },
                    {
                        title: 'SpiritPro',
                        href: `${routes.candidates}/#spiritPro`,
                    },
                ]}
            />
            <CallToAction
                title="Ben jij klaar voor een carrière met de juiste Spirit?"
                description="Laten we connecten en samen impact maken!"
                link={[
                    {
                        title: 'Bel me terug',
                        href: routes.contact,
                    },
                ]}
            />
            <Pricing />
            <Testimonials />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Jouw IT carrière met impact! | SpiritStaffing',
    description:
        'Jouw IT carrière met impact! Onze mensen maken het verschil binnen de digitale transitie van Nederland',
}
