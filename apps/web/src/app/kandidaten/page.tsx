import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import React from 'react'
import { StatsImage } from 'ui/components/StatsImage'
import { FeatureColumns } from 'ui/components/FeatureColumns'
import { AcademicCapIcon, DocumentTextIcon, FaceSmileIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { routes } from '../../lib/routes'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/spirit-staffing-visual8.jpg'}
                        alt="Spirit Staffing kandidaten"
                        width={1920}
                        height={1280}
                        priority
                        loading={'eager'}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                title="Kandidaten"
                description={
                    'SpiritStaffing biedt verschillende IT Traineeships, zowel voor SpiritStart als SpiritPro: Software Development, IT Specialist, Data Management en Cybersecurity. Onze IT Traineeships zijn toegankelijk voor starters op elk niveau. \n' +
                    '\n' +
                    'We geloven in talent en investeren constant in onze professionals. We bouwen door op jouw kennis, waarbij we focussen op specifieke hard en soft skills. Onze talenten worden geselecteerd op zelfstandigheid, doorzettingsvermogen en de juiste Spirit. Daarom maken we samen elke dag het verschil! '
                }
                link={[
                    {
                        title: 'SpiritStart',
                        href: `${routes.candidates}/#spiritStart`,
                        scroll: false,
                    },
                    {
                        title: 'SpiritPro',
                        href: `${routes.candidates}/#spiritPro`,
                        scroll: false,
                    },
                ]}
            />
            <FeatureColumns
                title="Jouw ontwikkeling staat centraal"
                description="Continu ontwikkelen is essentieel, anders wordt het tijd voor iets nieuws. Bij ons is doorontwikkeling in een uitdagende werk- en leeromgeving de basis, gedurende het hele proces. We streven ernaar om elke dag de beste versie van onszelf te zijn. Daarin maken onze gedreven professionals het verschil."
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
                image={
                    <Image
                        src={'/images/spirit-staffing-visual2.jpg'}
                        alt="Jouw carrière begeleid vanaf de Start"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="spiritStart"
                title="Jouw carrière begeleid vanaf de Start"
                subtitle="SpiritStart"
                description="SpiritStart biedt een op maat gemaakt ontwikkeltraject voor starters. Instromen kan vanaf verschillende niveaus waarbij de trajecten op maat ontwikkeld worden. Mbo niveau 4, associate degree en hbo afgestudeerde studenten richting IT stromen perfect in. De focus ligt op de ontwikkeling van jouw hard en soft skills. We begeleiden en leiden onze talenten op richting volwaardige IT professionals. Dus, direct geld verdienen en doorstuderen tegelijk. Samen bouwen we aan een like minded community met waardevolle momenten en gezellige borrels. In 18 maanden kickstart je jouw IT carrière!"
                link={[
                    {
                        title: 'Wij bellen jou graag terug!',
                        href: routes.contact,
                    },
                ]}
                variant="light"
            />
            <StatsImage
                image={
                    <Image
                        src={'/images/spirit-staffing-visual4.jpg'}
                        alt="Uitdagende opdrachten om door te groeien als professional"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="spiritPro"
                title="Uitdagende opdrachten om door te groeien als professional"
                subtitle="SpiritPro"
                description="We geloven in de impact van onze professionals en investeren in persoonlijke ontwikkeling. Voor organisaties met directe uitdagingen is er SpiritPro. Onze scherpe en snelle SpiritPro professionals zijn specialisten die direct integreren in bestaande teams. Ze maken impact binnen uitdagende projecten bij onze opdrachtgevers. We bieden interessante specialistische trainingen, bouwen een SpiritPro community op en organiseren regelmatig gezellige events."
                link={[
                    {
                        title: 'Wij bellen jou graag terug!',
                        href: routes.contact,
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
                        href: routes.contact,
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
