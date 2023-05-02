import { CallToAction } from 'ui/components/CallToAction'
import { FeatureColumns } from 'ui/components/FeatureColumns'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import { BoltIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import { routes } from '../../lib/routes'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/spirit-staffing-visual3.jpg'}
                        alt="SpiritStaffing"
                        priority
                        loading={'eager'}
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                title="Welkom bij SpiritStaffing"
                description={
                    'Veel werkprocessen digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar het vraagt ook om aanpassingsvermogen.\n' +
                    '\n' +
                    'Onze missie is dan ook de beste IT professionals te vinden om de digitalisering van Nederland te accelereren.'
                }
                link={[
                    {
                        title: 'Bekijk onze dienstverlening',
                        href: routes.services,
                    },
                ]}
            />
            <FeatureColumns
                title="Kernwaarden van SpiritStaffing"
                description="Wij geloven in ontwikkeling. We denken altijd in mogelijkheden. We schakelen snel en samen maken we
                    echt impact."
                features={[
                    {
                        name: 'De mens staat bij ons echt centraal',
                        description: `Samen is alles mogelijk. Dat is waar wij in geloven! Investeren in ontwikkeling. Vanuit elke achtergrond. Binnen een uitdagende werk- en leeromgeving. Privé en werk in balans. Dat is onze basis.`,
                        icon: <UsersIcon />,
                    },
                    {
                        name: 'Impact maken',
                        description:
                            'Voor onze mensen is de werkomgeving niet zomaar een plek om te werken. Wij maken graag impact door samen te werken. Vaak kunnen we door anders te denken nieuwe inzichten bieden en echt het verschil maken.',
                        icon: <BoltIcon />,
                    },
                    {
                        name: 'Inspirerend zijn',
                        description:
                            'Wij denken altijd in mogelijkheden en zoeken naar oplossingen. Wij denken niet in vaste patronen, maar juist in oplossingen die nog niet geïmplementeerd zijn. Wij laten ons niet tegenhouden. Dat zorgt voor een positieve dynamiek, en een inspirerende werkomgeving.',
                        icon: <StarIcon />,
                    },
                ]}
            />
            <CallToAction
                title="Wil jij ons beter leren kennen?"
                description="Laat je gegevens achter en wij bellen je terug!"
                link={[
                    {
                        title: 'Bel mij terug',
                        href: routes.contact,
                    },
                ]}
            />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Over SpiritStaffing | SpiritStaffing',
    description: 'Over SpiritStaffing | SpiritStaffing',
}
