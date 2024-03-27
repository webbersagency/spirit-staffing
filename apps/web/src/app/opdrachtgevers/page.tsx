import { ArrowsRightLeftIcon, DocumentTextIcon, UsersIcon } from '@heroicons/react/24/outline'
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
                        src={'/images/opdrachtgevers1.jpg'}
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
                    'Opdrachtgevers hebben diverse IT-vraagstukken en wij bieden daarom maatwerkoplossingen. Onze professionals gaan direct aan de slag en ontwikkelen zich snel binnen jouw organisatie. Dit traject geven we samen vorm, waarbij SpiritStaffing het proces begeleidt. Het doel is altijd om de professionals uiteindelijk over te dragen aan onze opdrachtgevers.\n' +
                    '\n' +
                    'Hoe we dat doen? Door samenwerkingen met het onderwijs en een visie op doorstroom. Daarnaast zijn we ervan overtuigd dat divers samengestelde teams succesvol zijn.'
                }
                link={[
                    {
                        title: 'De kandidaten van SpiritStaffing',
                        href: `${routes.services}/#spiritStart`,
                    },
                    {
                        title: 'Van tijdelijk naar vast',
                        href: `${routes.services}/#spiritPro`,
                    },
                ]}
            />
            <StatsImage
                image={
                    <Image
                        src={'/images/opdrachtgevers2.jpg'}
                        alt="SpiritStart"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="spiritStart"
                title="De kandidaten van SpiritStaffing"
                description={
                    'Wij kijken breed naar talent en werken samen met diverse reguliere- en particuliere onderwijsinstellingen. Daarom komen we in een vroegtijdig stadium in contact met kandidaten, van mbo, hbo en wo niveau. Daarnaast werken we met zij-instromers die bewust hebben gekozen om een IT diploma te halen, waarbij ze ook de ervaring vanuit een ander domein meenemen. '
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
                        src={'/images/opdrachtgevers3.jpg'}
                        alt="SpiritPro"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="spiritPro"
                title="Tijdelijk naar vast"
                description={
                    'Opdrachtgevers vragen om kandidaten die direct inzetbaar zijn. Dat zijn onze mensen. Daarnaast is het belangrijk om te bouwen aan de bestaande IT teams. Een te grote flexibele schil is niet gewenst. Gedurende een periode van 1,5 jaar ontwikkelen onze mensen zich binnen de organisatie tot specialisten binnen een gekozen domein. \n' +
                    '\n' +
                    'Daarna kunnen kandidaten door onze opdrachtgevers in dienst genomen worden. Dat betekent  beschikken over direct inzetbare professionals, maar ook bouwen aan de continuïteit van de eigen IT organisatie. '
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
                            'Voor structurele of langdurige extra capaciteit behouden we flexibiliteit door vakmensen te leveren aan onze opdrachtgevers. We bieden snel oplossingen voor urgente verzoeken via detachering.',
                        icon: <ArrowsRightLeftIcon />,
                    },
                    {
                        name: 'Tijdelijk naar vast',
                        description:
                            'Klanttevredenheid over onze mensen leidt vaak tot vaste aanstellingen na een flexibele periode. Dit kan na het werken van een afgesproken aantal uren.',
                        icon: <DocumentTextIcon />,
                    },
                    {
                        name: 'Projectteams uitbesteden\n',
                        description:
                            'We bieden projectteams voor het volledig uitbesteden van projecten. Gericht op het behalen van resultaten binnen de gestelde projectperiode.',
                        icon: <UsersIcon />,
                    },
                ]}
                horizontal
            />
            <CallToAction
                title="Wil jij samen met ons impact maken? Laten we connecten"
                description={
                    'Wil je meer weten over onze dienstverlening? Of ben je benieuwd wat SpiritStaffing voor jou kan betekenen?  \n' +
                    'Wij bellen jou terug!'
                }
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
