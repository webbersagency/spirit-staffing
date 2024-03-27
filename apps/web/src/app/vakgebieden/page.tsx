import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import React from 'react'
import { FeatureGrid } from 'ui/components/FeatureGrid'
import {
    CircleStackIcon,
    CodeBracketIcon,
    CogIcon,
    CommandLineIcon,
    ComputerDesktopIcon,
    LockClosedIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { routes } from '../../lib/routes'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/vakgebieden1.jpg'}
                        alt="Vakgebieden waar Spirit Staffing impact maakt"
                        width={1920}
                        height={1280}
                        priority
                        loading={'eager'}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                title="Vakgebieden waar wij het verschil maken"
                description="Met de juiste Spirit dragen wij bij aan de digitale ambities van onze opdrachtgevers. Onze professionals werken aan het versnellen en verbeteren van IT processen en kijken met een frisse blik naar complexe vraagstukken"
            />
            <FeatureGrid
                title="Impact maken doen we samen"
                description="De digitale transitie biedt kansen maar vereist zorgvuldigheid. Onze mensen richten zich op het verbeteren van processen en het ontwikkelen van nieuwe applicaties in een veilige digitale omgeving. Dit zorgt voor echte impact!"
                features={[
                    {
                        name: 'Fullstack Development',
                        description:
                            'Een allrounder die met gemak een hele applicatie ontwikkelt, van design tot database.',
                        icon: <CodeBracketIcon />,
                    },
                    {
                        name: 'Functioneel beheer',
                        description:
                            'Binnen het domein van informatisering wordt de informatievoorziening ten behoeve van een gebruikersorganisatie beheerd.',
                        icon: <CogIcon />,
                    },
                    {
                        name: 'DevOps',
                        description:
                            'DevOps heeft tot doel softwareontwikkeling en softwareoperaties samen te brengen.',
                        icon: <CommandLineIcon />,
                    },
                    {
                        name: 'Data Management en BI',
                        description:
                            'Een data engineer of data-analist houdt zich bezig met het destilleren van waardevolle conclusies uit grote datasets.',
                        icon: <CircleStackIcon />,
                    },
                    {
                        name: 'Cyber Security',
                        description:
                            'Een security specialist kijkt naar data, processen en software vanuit een security oogpunt.',
                        icon: <LockClosedIcon />,
                    },
                    {
                        name: 'IT Servicedesk',
                        description:
                            'Het IT service team is vaak het hart van de organisatie waarbij de alle teams ondersteuning krijgen.',
                        icon: <ComputerDesktopIcon />,
                    },
                ]}
                animationOptions={{
                    rootMargin: '0%',
                }}
            />
            <CallToAction
                title="Wil jij weten wat SpiritStaffing voor jou kan betekenen?"
                link={[
                    {
                        title: 'Neem dan contact op!',
                        href: routes.contact,
                    },
                ]}
            />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Vakgebieden | SpiritStaffing',
    description: 'Vakgebieden | SpiritStaffing',
}
