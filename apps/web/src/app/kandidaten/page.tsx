import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import React from 'react'
import { StatsImage } from 'ui/components/StatsImage'
import { FeatureColumns } from 'ui/components/FeatureColumns'
import { AcademicCapIcon, DocumentTextIcon, FaceSmileIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
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
                title="Kandidaten"
                description={
                    'Bij SpiritStaffing staat de mens echt centraal. Wij geloven in talent, constante ontwikkeling en investeren daarom enorm in onze professionals. \n' +
                    '\n' +
                    'Via SpiritStart creëren we een begeleid ontwikkelplan, waarbij naast uitdagende opdrachten ook een HBO-niveau opleidingstraject opgezet wordt. Dus, direct geld verdienen en doorstuderen tegelijk! Binnen SpiritPro bouwen we door op jouw kennis. We traininen jouw hard- en softskills, om door te ontwikkelen naar de professional die jij wilt zijn. Dus, direct jouw impact vergroten via verschillende opdrachtgevers!\n' +
                    '\n Dat maakt werken bij SpiritStaffing zo geweldig. '
                }
                link={[
                    {
                        title: 'SpiritStart',
                        href: '/kandidaten/#spiritStart',
                    },
                    {
                        title: 'SpiritPro',
                        href: '/kandidaten/#spiritPro',
                    },
                ]}
            />
            <FeatureColumns
                title="Jouw ontwikkeling staat centraal"
                description={
                    'Als je niet meer ontwikkelt, moet je wat anders gaan doen. \n' +
                    '\n' +
                    'Doorontwikkelen in een uitdagende werk- en leeromgeving is voor ons de basis. In een dynamisch proces, gedurende de complete periode.\n' +
                    '\n' +
                    'Daar maken onze gedreven professionals het verschil.'
                }
                features={[
                    {
                        name: 'Uitdagende opdrachten',
                        icon: <DocumentTextIcon />,
                    },
                    {
                        name: 'Complete arbeidsvoorwaarden',
                        icon: <ShieldCheckIcon />,
                    },
                    {
                        name: 'Altijd doorontwikkelen door studie',
                        icon: <AcademicCapIcon />,
                    },
                    {
                        name: 'Aandacht voor werk en prive',
                        icon: <FaceSmileIcon />,
                    },
                ]}
            />
            <StatsImage
                image={<Image src={'/images/heroCoverImage.png'} alt="cover image" width={1000} height={1000} />}
                id="spiritStart"
                title="Jouw carrière begeleid van Start"
                subtitle="SpiritStart"
                description={
                    'Wij begeleiden jou bij de start van jouw carrière. Via een traineeship bij verschillende opdrachtgevers. \n' +
                    '\n' +
                    'We maken samen een meerjarig plan, om door te ontwikkelen naar de professional die jij wilt worden. \n' +
                    '\n' +
                    'Na het maken van de perfecte match tussen jou en onze opdrachtgevers, gaan we samen een traject in om jouw carrière te boosten! \n' +
                    '\n' +
                    'We evalueren, we coachen, en sturen bij indien dat nodig is. \n' +
                    '\n' +
                    'Zo zijn we straks samen beter dan ooit in staat de juiste keuzes voor jouw carrière te maken. \n' +
                    '\n' +
                    'We bouwen samen aan onze mind-like professionals community. Dit doen we door het verzorgen van fantastisch leerzame community momenten en via gezellige borrels!'
                }
                link={[
                    {
                        title: 'Wij bellen jou graag terug!',
                        href: '/contact',
                    },
                ]}
                variant="light"
            />
            <StatsImage
                image={<Image src={'/images/heroCoverImage.png'} alt="cover image" width={1000} height={1000} />}
                id="spiritPro"
                title="Uitdagende opdrachten om door te groeien als professional"
                subtitle="SpiritPro"
                description={
                    'Bij SpiritStaffing geloven we dat onze professionals het verschil maken. Daarom besteden we veel aandacht aan persoonlijke ontwikkeling. \n' +
                    '\n' +
                    'Ook weten we dat organisaties vaak directe uitdagingen hebben en professionals zoeken die snel impact kunnen maken. Daarom is er SpiritPro. \n' +
                    '\n' +
                    'Onze SpiritPro professionals zijn specialist op een specifiek onderwerp. Ze zijn scherp, schakelen snel en passen zich direct aan binnen bestaande teams. \n' +
                    '\n' +
                    'Via uitdagende projecten bij onze opdrachtgevers maken ze direct impact op de organisatie. Het zijn professionals met de juiste Spirit! \n' +
                    '\n' +
                    'Wij zorgen voor interessante specialistische trainingen via onze partners, bouwen samen met jou onze SpiritPro community en laten deze regelmatig bij elkaar komen op gezellige events!'
                }
                link={[
                    {
                        title: 'Wij bellen jou graag terug!',
                        href: '/contact',
                    },
                ]}
                mirrored
            />
            <CallToAction
                title="Wil je meer weten over SpiritStaffing?"
                description="Laten we een afspraak maken, om gewoon een keer kennis te maken. We komen graag met je in contact."
                link={[
                    {
                        title: 'Bel mij terug!',
                        href: '/contact',
                    },
                ]}
            />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Kandidaten | SpiritStaffing',
    description: 'Kandidaten | SpiritStaffing',
}
