import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import React from 'react'
import { StatsDescription } from 'ui/components/StatsDescription'
import { StatsImage } from 'ui/components/StatsImage'
import { FeatureGrid } from 'ui/components/FeatureGrid'

export default function Page() {
    return (
        <>
            <Hero
                title="Onze dienstverlening"
                description={
                    'Onze opdrachtgevers hebben te maken diverse ICT vraagstukken. Onze dienstverlening is per definitie maatwerk.\n' +
                    '\n' +
                    'Voor ondersteuning van ICT professionals, mensen met ervaring, hebben we SpiritPro opgericht. \n' +
                    '\n' +
                    'Onze opdrachtgevers realiseren zich ook dat de doorstroom van talent minstens zo belangrijk is. Daarom zijn ze bereid met ons samen te investeren in de ontwikkeling van startende professionals. \n' +
                    '\n' +
                    'Met een MBO achtergrond, gedurende een leer- werktraject op HBO-niveau, echt impact creëren. Dat is wat onze professionals doen via SpiritStart!'
                }
                link={[
                    {
                        title: 'SpiritPro',
                        href: '/opdrachtgevers/#spiritPro',
                    },
                ]}
                link2={[
                    {
                        title: 'SpiritStart',
                        href: '/opdrachtgevers/#spiritStart',
                    },
                ]}
            />
            <StatsDescription
                title="Onze missie"
                description={
                    'Veel werkprocessen digitaliseren digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar het vraagt ook om aanpassingsvermogen. \n \n Onze missie is om de beste ICT professionals te vinden om de digitalisering te accelereren, door permanente ontwikkeling van onze professionals, door persoonlijke begeleiding.'
                }
                stats={[
                    {
                        value: 'Focus op het publieke domein',
                    },
                    {
                        value: 'Grote kennis van de markt',
                    },
                    {
                        value: 'Altijd blijven ontwikkelen\n',
                    },
                    {
                        value: 'Flexibiliteit in de organisatie',
                    },
                ]}
                features
            />
            <StatsImage
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
                        to: '/contact',
                    },
                ]}
                variant="light"
            />
            <StatsImage
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
                        to: '/contact',
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
                        icon: <CloudArrowUpIcon />,
                    },
                    {
                        name: 'Tijdelijk naar vast',
                        description:
                            'Wij kunnen ons goed voorstellen dat klanten tevreden zijn over onze mensen. Wij bieden dan ook de mogelijkheid om na een flexibele periode een vaste aanstelling voor hen te realiseren. Dit kan na een afgesproken aantal uren gewerkt te hebben.',
                        icon: <LockClosedIcon />,
                    },
                    {
                        name: 'Tijdelijke inzet op projecten\n',
                        description:
                            'Voor specifieke projecten, of op piekmomenten, kunnen onze freelance professionals ondersteuning bieden aan uw organisatie. Direct inzetbaar als volwaardige medewerkers. We hanteren een minimale contractduur van drie maanden.',
                        icon: <ArrowPathIcon />,
                    },
                    {
                        name: 'Projectteams uitbesteden\n',
                        description:
                            'Soms is het gewenst om volledige projecten uit te besteden. Wij bieden de mogelijkheid om projectteams te plaatsen. Doelgericht resultaat boeken voor onze klant, binnen de gestelde periode van het project.',
                        icon: <FingerPrintIcon />,
                    },
                ]}
            />
            <CallToAction
                title="Wil jij samen met ons impact maken? Laten we connecten"
                description="Wil je meer weten over onze dienstverlening? Of ben je benieuwd wat SpiritStaffing voor jou kan betekenen? Wij bellen jou terug!"
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
    title: 'Dienstverlening',
    description: 'Dienstverlening',
}
