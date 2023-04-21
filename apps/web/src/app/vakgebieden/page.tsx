import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import React from 'react'
import { FeatureGrid } from 'ui/components/FeatureGrid'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function Page() {
    return (
        <>
            <Hero
                title="Vakgebieden waar wij impact maken"
                description="Onze missie is om een positieve bijdrage te leveren aan de digitale transitie
                             van Nederland. Daarbij concentreren we ons op de digitale weerbaarheid, omdat
                             dat de basis is waar vanuit de transitie plaatsvindt. Dan kunnen we echt impact maken."
            />
            <FeatureGrid
                title="*Placeholder Titel"
                description="De digitale transitie geeft de samenleving veel kansen, maar vraagt ook om zorgvuldigheid.
                            Met het uitbreiden van de digitale wereld, nemen ook de risico’s in dit domein toe. Daarom
                            concentreren onze mensen zich primair op het verhogen van de digitale weerbaarheid van
                            Nederland. Dat betekent echt impact maken binnen het publieke domein."
                features={[
                    {
                        name: 'Fullstack Development',
                        description:
                            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
                        icon: <CloudArrowUpIcon />,
                    },
                    {
                        name: 'Functioneel beheer',
                        description:
                            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
                        icon: <LockClosedIcon />,
                    },
                    {
                        name: 'Devops',
                        description:
                            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
                        icon: <ArrowPathIcon />,
                    },
                    {
                        name: 'Data Management en BI',
                        description:
                            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
                        icon: <FingerPrintIcon />,
                    },
                    {
                        name: 'Cyber Security',
                        description:
                            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
                        icon: <LockClosedIcon />,
                    },
                    {
                        name: 'IT Architectuur',
                        description:
                            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
                        icon: <ArrowPathIcon />,
                    },
                    {
                        name: 'Digitale transformatie',
                        description:
                            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
                        icon: <FingerPrintIcon />,
                    },
                ]}
            />
            <CallToAction
                title="Wil jij ook impact maken, of wil jij weten wat SpiritStaffing voor jou kan betekenen?"
                link={[
                    {
                        title: 'Neem dan contact op!',
                        to: '/contact',
                    },
                ]}
            />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Vakgebieden',
    description: 'Vakgebieden',
}
