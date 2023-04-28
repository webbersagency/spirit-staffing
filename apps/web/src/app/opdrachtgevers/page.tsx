import { ArrowsRightLeftIcon, BriefcaseIcon, DocumentTextIcon, UsersIcon } from '@heroicons/react/24/outline'
import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import React from 'react'
import { StatsImage } from 'ui/components/StatsImage'
import { FeatureGrid } from 'ui/components/FeatureGrid'
import Image from 'next/image'
import { routes } from '../../lib/routes'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/spirit-staffing-visual5.jpg'}
                        alt="Spirit Staffing dienstverlenging"
                        width={1920}
                        height={1280}
                        priority
                        loading={'eager'}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                title="Onze dienstverlening"
                description={
                    'Onze opdrachtgevers hebben te maken diverse IT vraagstukken. Onze dienstverlening is per definitie maatwerk.\n' +
                    '\n' +
                    'Voor ondersteuning van IT professionals, mensen met ervaring, hebben we SpiritPro opgericht. Onze opdrachtgevers realiseren zich ook dat de doorstroom van talent minstens zo belangrijk is. Daarom zijn ze bereid met ons samen te investeren in de ontwikkeling van startende professionals. Met een MBO niveau 4 achtergrond, gedurende een leer- werktraject op HBO-niveau, echt impact creëren. Dat is wat onze professionals doen via SpiritStart!'
                }
                link={[
                    {
                        title: 'SpiritStart',
                        href: `${routes.services}/#spiritStart`,
                    },
                    {
                        title: 'SpiritPro',
                        href: `${routes.services}/#spiritPro`,
                    },
                ]}
            />
            <StatsImage
                image={
                    <Image
                        src={'/images/spirit-staffing-visual1.jpg'}
                        alt="SpiritStart"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="spiritStart"
                title="SpiritStart"
                description={
                    'Binnen het SpiritStart wordt er een op maat gemaakt ontwikkeltraject samengesteld voor de startende professional. \n' +
                    '\n' +
                    'Een dynamisch proces waarbij de focus ligt op leren via deeltijd studie en het ontwikkelen binnen uitdagende opdrachten bij opdrachtgevers. \n' +
                    '\n' +
                    'De professionals worden geselecteerd op zelfstandigheid, doorzettingsvermogen en uiteraard de juiste Spirit! \n' +
                    '\n' +
                    'Het zijn talenten die eenvoudig in bestaande teams integreren en direct impact maken richting de toekomst.'
                }
                link={[
                    {
                        title: 'Meer weten? Lets go!',
                        href: routes.contact,
                    },
                ]}
                variant="light"
            />
            <StatsImage
                image={
                    <Image
                        src={'/images/spirit-staffing-visual3.jpg'}
                        alt="SpiritPro"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="spiritPro"
                title="SpiritPro"
                description={
                    'Onze SpiritPro professionals zijn specialist op een specifiek onderwerp. Ze zijn scherp, schakelen snel en passen zich direct aan binnen bestaande teams. \n' +
                    '\n' +
                    'Het zijn gearriveerde professionals die via uitdagende projecten bij onze opdrachtgevers direct impact hebben op de organisatie. \n' +
                    '\n' +
                    'Het zijn professionals met de juiste Spirit!'
                }
                link={[
                    {
                        title: 'Meer weten? Lets go!',
                        href: routes.contact,
                    },
                ]}
                variant="dark"
                mirrored
            />
            <FeatureGrid
                title="Zo ondersteunen wij organisaties"
                features={[
                    {
                        name: 'Invulling voor de flexibele schil',
                        description:
                            'Voor meer structureel of langdurig extra capaciteit, waarbij de flexibiliteit behouden blijft, voorzien wij onze opdrachtgevers van vakmensen. Wij bieden direct oplossingen voor urgente verzoeken. Dit doen we via detachering.',
                        icon: <ArrowsRightLeftIcon />,
                    },
                    {
                        name: 'Tijdelijk naar vast',
                        description:
                            'Wij kunnen ons goed voorstellen dat klanten tevreden zijn over onze mensen. Wij bieden dan ook de mogelijkheid om na een flexibele periode een vaste aanstelling voor hen te realiseren. Dit kan na een afgesproken aantal uren gewerkt te hebben.',
                        icon: <DocumentTextIcon />,
                    },
                    {
                        name: 'Tijdelijke inzet op projecten\n',
                        description:
                            'Voor specifieke projecten, of op piekmomenten, kunnen onze freelance professionals ondersteuning bieden aan uw organisatie. Direct inzetbaar als volwaardige medewerkers. We hanteren een minimale contractduur van drie maanden.',
                        icon: <BriefcaseIcon />,
                    },
                    {
                        name: 'Projectteams uitbesteden\n',
                        description:
                            'Soms is het gewenst om volledige projecten uit te besteden. Wij bieden de mogelijkheid om projectteams te plaatsen. Doelgericht resultaat boeken voor onze klant, binnen de gestelde periode van het project.',
                        icon: <UsersIcon />,
                    },
                ]}
            />
            <CallToAction
                title="Wil jij samen met ons impact maken? Laten we connecten"
                description="Wil je meer weten over onze dienstverlening? Of ben je benieuwd wat SpiritStaffing voor jou kan betekenen? Wij bellen jou terug!"
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
    title: 'Opdrachtgevers | SpiritStaffing',
    description: 'Opdrachtgevers | SpiritStaffing',
}
