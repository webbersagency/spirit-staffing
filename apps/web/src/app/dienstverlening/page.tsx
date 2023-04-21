import Button from 'ui/components/Button'
import Link from 'next/link'
import {
    ArrowPathIcon,
    CheckIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
} from '@heroicons/react/24/outline'
import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import React from 'react'

const features = [
    {
        name: 'Invulling voor de flexibele schil',
        description:
            'Voor meer structureel of langdurig extra capaciteit, waarbij de flexibiliteit behouden blijft, voorzien wij onze opdrachtgevers van vakmensen. Wij bieden direct oplossingen voor urgente verzoeken. Dit doen we via detachering.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Tijdelijk naar vast',
        description:
            'Wij kunnen ons goed voorstellen dat klanten tevreden zijn over onze mensen. Wij bieden dan ook de mogelijkheid om na een flexibele periode een vaste aanstelling voor hen te realiseren. Dit kan na een afgesproken aantal uren gewerkt te hebben.',
        icon: LockClosedIcon,
    },
    {
        name: 'Tijdelijke inzet op projecten\n',
        description:
            'Voor specifieke projecten, of op piekmomenten, kunnen onze freelance professionals ondersteuning bieden aan uw organisatie. Direct inzetbaar als volwaardige medewerkers. We hanteren een minimale contractduur van drie maanden.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Projectteams uitbesteden\n',
        description:
            'Soms is het gewenst om volledige projecten uit te besteden. Wij bieden de mogelijkheid om projectteams te plaatsen. Doelgericht resultaat boeken voor onze klant, binnen de gestelde periode van het project.',
        icon: FingerPrintIcon,
    },
]

const stats = [
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
]
export default function Page() {
    return (
        <>
            <Hero
                title="Onze dienstverlening"
                description="Bij SpiritStaffing geloven we dat onze professionals het verschil maken. Daarom
                             besteden we veel aandacht aan het bouwen van relaties in de markt. Ook weten we
                             dat niet elke organisatie dezelfde uitdagingen deelt of dezelfde professionals
                             zoekt. Daarom onderscheiden we twee groepen professionals: SpiritStart en
                             SpiritPro."
            />
            <div className="bg-white py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Onze missie</h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-1">
                                <p className="leading-8">
                                    We bieden flexibele oplossingen voor onze klanten. Het gaat hierbij om detachering,
                                    projectmatig werk en tijdelijk naar vaste aanstellingen. Ons brede netwerk van
                                    potentiële kandidaten, van junioren tot senioren, geeft ons de mogelijkheid om snel
                                    te reageren op vragen van klanten.
                                </p>
                            </div>
                            <div className="lg:flex lg:flex-1 lg:justify-center">
                                <dl className="space-y-8 xl:w-80">
                                    {stats.map(stat => (
                                        <div key={stat.value} className="flex flex-row items-center gap-x-6">
                                            <CheckIcon className="text-green800 h-6 w-6" aria-hidden="true" />
                                            <dd className="text-green800 text-2xl font-semibold tracking-tight">
                                                {stat.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-green200  relative">
                <img
                    className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                />
                <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                    <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">SpiritStart</h2>
                            <p className="mb-8 mt-6 leading-8 ">
                                Binnen het SpiritStart wordt er een op maat gemaakt ontwikkeltraject samengesteld voor
                                de startende professional. Een dynamisch proces waarbij de focus ligt op leren via
                                (deeltijd) studie en het ontwikkelen binnen uitdagende opdrachten bij toonaangevende
                                opdrachtgevers. De jonge professionals worden geselecteerd op zelfstandigheid,
                                doorzettingsvermogen en uiteraard de juiste Spirit! Het zijn talenten die eenvoudig in
                                bestaande teams integreren en direct impact maken richting de toekomst.
                            </p>
                            <Button as={Link} href="/contact" variant="primary">
                                Neem contact met ons op
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-green800 relative">
                <img
                    className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                />
                <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                    <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-1 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl text-right lg:max-w-lg">
                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">SpiritPro</h2>
                            <p className="mb-8 mt-6  leading-8 text-white">
                                Onze SpiritPro professionals zijn specialist op een specifiek onderwerp. Ze zijn scherp,
                                schakelen snel en passen zich direct aan binnen bestaande teams. Het zijn gearriveerde
                                freelance professionals die via uitdagende projecten bij onze opdrachtgevers direct
                                impact hebben op de organisatie. Het zijn professionals met de juiste Spirit!
                            </p>
                            <Button as={Link} href="/contact" variant="primary">
                                Neem contact met ons op
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            Zo ondersteunen wij organisaties
                        </h2>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map(feature => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7">
                                        <div className="bg-green800 absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <CallToAction
                title="Wil jij samen met ons impact maken? Laten we connecten"
                description="Wil je meer weten over onze dienstverlening? Of ben je benieuwd wat SpiritStaffing voor jou kan betekenen? Vul hieronder het contactformulier in en wij bellen jou terug!"
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
