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
                title="Vakgebieden waar wij impact maken"
                description={
                    'Wij hebben de Spirit om het verschil te maken binnen de digitale transitie van Nederland. \n' +
                    '\n' +
                    'Onze professionals werken samen met onze opdrachtgevers om elke dag te accelereren. \n' +
                    '\n' +
                    'Zo werken we samen aan een digitale toekomst! '
                }
            />
            <FeatureGrid
                title="Impact maken doen we samen"
                description={
                    'De digitale transitie geeft de samenleving veel kansen, maar vraagt ook om zorgvuldigheid. \n' +
                    '\n' +
                    'Daarom concentreren onze mensen zich primair op het verbeteren van huidige processen. Het ontwikkelen van nieuwe applicaties. Alles in een veilige digitale omgeving. \n' +
                    '\n' +
                    'Dat betekent echt impact maken!'
                }
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
                            'Een security officer kijkt naar data, processen en software vanuit een security oogpunt.',
                        icon: <LockClosedIcon />,
                    },
                    {
                        name: 'IT Architectuur',
                        description:
                            'IT-architectuur is een verzameling van regels en standaarden op basis waarvan systemen worden ontwikkeld.',
                        icon: <ComputerDesktopIcon />,
                    },
                ]}
            />
            <CallToAction
                title="Wil jij ook impact maken, of wil jij weten wat SpiritStaffing voor jou kan betekenen?"
                link={[
                    {
                        title: 'Neem dan contact op!',
                        href: '/contact',
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
