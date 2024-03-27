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
                        src={'/images/home1.jpg'}
                        alt="Jouw IT carrière met impact"
                        width={1920}
                        height={1280}
                        priority
                        loading={'eager'}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                title="Met passie voor IT talent!"
                description={
                    'We kijken breed naar talent en investeren samen in de verdere ontwikkeling van kandidaten. Van mbo tot wo achtergrond. Van regulier onderwijs tot zij-instromers. We begrijpen dat de markt vraag om professionals die direct inzetbaar zijn. Dat is wat wij regelen!\n' +
                    '\n' +
                    'Wij geloven in de kracht van diversiteit. Verschillende mensen kijken anders naar oplossingen. Dat maakt deze teams succesvol. Na een detacheringsperiode treden onze mensen bij de opdrachtgevers in dienst. Zo leveren we een bijdrage aan de continuïteit van de IT-teams van onze opdrachtgevers.'
                }
                link={[
                    {
                        title: 'Opdrachtgevers',
                        href: `${routes.services}`,
                    },
                    {
                        title: 'Kandidaten',
                        href: `${routes.candidates}`,
                    },
                ]}
            />
            <FeatureColumns
                title="Onze visie"
                description={
                    'SpiritStaffing levert een bijdrage aan de continuïteit van de IT teams bij onze opdrachtgevers. Dit realiseren we door breed te kijken naar kandidaten en samen te investeren in hun verdere ontwikkeling. Zo zijn ze niet alleen direct inzetbaar, maar groeien ze door bij onze opdrachtgevers. Na een detacheringsperiode treden onze mensen daar in dienst.'
                }
                features={[
                    {
                        name: 'Breed kijken naar talent',
                        description:
                            'We werken samen met het onderwijs. Van mbo tot wo. Van regulier onderwijs tot zij-instromers.',
                        icon: <BoltIcon />,
                    },
                    {
                        name: 'Direct inzetbaar',
                        description:
                            'Onze mensen zijn direct inzetbaar. Indien gewenst verzorgen we extra opleidingen bij de start.',
                        icon: <RocketLaunchIcon />,
                    },
                    {
                        name: 'Versterken van teams',
                        description:
                            'Onze opdrachtgevers versterken graag de eigen IT teams. Daar bouwen we samen aan.',
                        icon: <ArrowTrendingUpIcon />,
                    },
                ]}
            />
            <StatsImage
                image={
                    <Image
                        src={'/images/home2.jpg'}
                        alt="Professionals die het verschil maken"
                        width={640}
                        height={727}
                        sizes="(max-width: 768px) 100vw, 384px"
                        quality={100}
                        className="object-top"
                    />
                }
                title="SpiritStaffing bouwt verder aan bestaande IT teams"
                description={
                    'SpiritStaffing bouwt aan duurzame relaties met opdrachtgevers door goed te luisteren en mensen te verbinden die passen bij de organisatie en opdracht. Onze professionals werken met de juiste Spirit, schakelen snel en brengen nieuwe inzichten.\n' +
                    '\n' +
                    'Wij zijn SpiritStaffing en onze mensen maken het verschil!'
                }
                variant="light"
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
