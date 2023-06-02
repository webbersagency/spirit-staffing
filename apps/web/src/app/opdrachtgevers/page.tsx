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
                description="Onze opdrachtgevers hebben diverse IT-vraagstukken en wij bieden daarom maatwerkoplossingen. Binnen verschillende IT Traineeships ontwikkelen we samen talent om ze perfect door te laten stromen naar onze opdrachtgevers. Onze talenten ontwikkelen zich richting: Software Development, IT Specialist, Data Management en Cybersecurity."
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
                description="SpiritStart biedt startende professionals een op maat gemaakt ontwikkeltraject. In een dynamisch proces brengen we theorie en praktijk bij elkaar. We begeleiden en leiden de talenten op tot volwaardige IT professionals, klaar om direct door te stromen bij onze opdrachtgevers. Geselecteerd op zelfstandigheid, doorzettingsvermogen en de juiste Spirit, integreren deze talenten moeiteloos in bestaande teams, en creëren direct impact voor de toekomst."
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
                description="Onze SpiritPro professionals zijn specialisten op een specifiek onderwerp. Scherp, vernieuwend en vinden direct aansluiting bij bestaande teams. Ze zijn ervaren en maken meteen impact op de organisatie via uitdagende projecten bij onze opdrachtgevers. Professionals met de juiste Spirit!"
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
                        name: 'Tijdelijke inzet op projecten\n',
                        description:
                            'Onze freelance professionals bieden ondersteuning voor specifieke projecten of piekmomenten. Ze zijn direct inzetbaar als volwaardige medewerkers, met een minimale contractduur van drie maanden.',
                        icon: <BriefcaseIcon />,
                    },
                    {
                        name: 'Projectteams uitbesteden\n',
                        description:
                            'We bieden projectteams voor het volledig uitbesteden van projecten. Gericht op het behalen van resultaten binnen de gestelde projectperiode.',
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
