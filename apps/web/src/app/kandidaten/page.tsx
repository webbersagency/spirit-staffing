import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import React from 'react'
import { StatsImage } from 'ui/components/StatsImage'
import { FeatureColumns } from 'ui/components/FeatureColumns'
import {
    AcademicCapIcon,
    CloudIcon,
    CurrencyEuroIcon,
    DocumentTextIcon,
    FaceSmileIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    ShieldCheckIcon,
    TrophyIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { routes } from '../../lib/routes'
import { FeatureGridSteps } from 'ui/components/FeatureGridSteps'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/kandidaten1.jpg'}
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
                    'SpiritStaffing begeleidt kandidaten op verschillende domeinen: Software Development, Data Management en Cybersecurity en IT Specialisten. We kijken breed naar talent op verschillende niveaus: mbo, hbo en wo. Maar ook naar zij-instromers met een afgeronde IT opleiding.  \n' +
                    '\n' +
                    'We geloven in talent en investeren constant in onze professionals. We bouwen door op jouw kennis , waarbij we focussen op specifieke hard en soft skills. Onze talenten worden geselecteerd op zelfstandigheid, doorzettingsvermogen en de juiste Spirit. Daarom maken we samen elke dag het verschil.'
                }
                link={[
                    {
                        title: 'Bekijk onze trajecten',
                        href: `${routes.candidates}/#spiritStart`,
                        scroll: false,
                    },
                ]}
            />
            <FeatureColumns
                title="Jouw ontwikkeling staat centraal"
                description="Continu ontwikkelen is essentieel, anders wordt het tijd voor iets nieuws. Bij ons is doorontwikkeling in een uitdagende werk- en leeromgeving de basis, gedurende het hele proces. We streven ernaar om elke dag de beste versie van onszelf te zijn. Daarin maken onze gedreven professionals het verschil."
                features={[
                    {
                        name: '\n' + 'Uitdagende opdrachten',
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
            <FeatureGridSteps
                light
                title="Kickstart jouw carrière met ons! "
                description={
                    ' Ontwikkel je technische vaardigheden en behaal verschillende certificaten. Ook gaan we aan de slag met diverse soft skills om jouw persoonlijke kwaliteiten te verbeteren. We begeleiden je intensief en dagen je uit om het beste uit jezelf te halen. \n' +
                    '\n' +
                    'Zo ziet jouw traject eruit:'
                }
                features={[
                    {
                        description:
                            'Kickstarten van jouw carrière begint met een aanmelding en een selectieprocedure.',
                        icon: <RocketLaunchIcon />,
                    },
                    {
                        description:
                            'Gedurende het traject behaal je verschillende hard skills certificaten. Daarnaast gaan we aan de slag met jouw soft skills.',
                        icon: <DocumentTextIcon />,
                    },
                    {
                        description:
                            'Je werkt aan uitdagende opdrachten waarbij je direct ervaring vanuit de theorie in praktijk brengt.',
                        icon: <CloudIcon />,
                    },
                    {
                        description:
                            'Jouw ontwikkeling wordt beloond! Na het behalen van jouw certificaten en een positieve beoordeling na het eerste jaar gaat jouw salaris omhoog!',
                        icon: <CurrencyEuroIcon />,
                    },
                    {
                        description:
                            'Tijdens het traject word je intensief begeleid door maandelijkse coaching. We bieden nieuwe inzichten en sturen bij waar nodig.',
                        icon: <LightBulbIcon />,
                    },
                    {
                        description:
                            'Samen met andere young professionals bouwen we een like minded community waarin we van elkaar leren en vooral ook veel met elkaar lachen!',
                        icon: <UsersIcon />,
                    },
                    {
                        description:
                            'Gefeliciteerd! Jouw ontwikkeltraject is succesvol afgerond. Nu is de keuze aan jou waar jij wilt doorgroeien.',
                        icon: <TrophyIcon />,
                    },
                ]}
                animationOptions={{
                    rootMargin: '0%',
                }}
            />
            <StatsImage
                image={
                    <Image
                        src={'/images/kandidaten2.jpg'}
                        alt="Uitdagende opdrachten om door te groeien als professional"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="spiritPro"
                title="Software Development"
                description={
                    ' Ontdek ons Software Development programma! In 18 maanden versnellen we jouw carrière als softwareontwikkelaar. We versterken zowel je technische als persoonlijke vaardigheden en helpen je bij het behalen van diverse certificaten. Je gaat aan de slag met coderen, ontwerpen, implementeren en testen van software volgens de Scrum-methode. We bieden begeleiding bij feedback geven, omgaan met uitdagingen, assertiviteit en teamwork, inclusief maandelijkse persoonlijke gesprekken. \n' +
                    '\n' +
                    'Werk aan projecten bij toonaangevende opdrachtgevers en zet je passie om in concrete resultaten. Meld je aan voor ons Software Development programma en start een boeiende reis vol groei, succes en plezier. Dit is het begin van jouw toekomst als gewilde softwareontwikkelaar! Voorbeelden van mogelijke functies na afronding zijn o.a., Frontend of Backend Developer, Scrum Master en Product Owner.'
                }
                link={[
                    {
                        title: 'Interesse? Meld je nu aan!',
                        href: routes.contact,
                    },
                ]}
                mirrored
            />
            <StatsImage
                image={
                    <Image
                        src={'/images/kandidaten3.jpg'}
                        alt="Uitdagende opdrachten om door te groeien als professional"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="spiritPro"
                title="Data management"
                description={
                    'Ontdek ons programma voor Data Management! In deze digitale wereld is data cruciaal. Als data manager ben jij de sleutelfiguur in het transformeren van data naar waardevolle inzichten. Ons programma legt de focus op het ontwikkelen van zowel technische als persoonlijke vaardigheden, inclusief het behalen van relevante certificaten zoals Microsoft Power BI of werken met AI, altijd volgens de Scrum-methodologie.\n' +
                    '\n' +
                    'Gedurende het 18 maanden durende traject ontvang je persoonlijke begeleiding van een coach van SpiritStaffing. Onze soft skills trainingen richten zich op zaken als feedback geven en ontvangen, omgaan met weerstand en tegenslagen, assertiviteit en effectief functioneren binnen een team, zodat je niet alleen technisch excelleert maar ook persoonlijk groeit.\n' +
                    '\n' +
                    'Meld je aan voor ons Data Management programma en bereid je voor op een carrière waarin je impact maakt met data en waardevolle inzichten genereert! Voorbeelden van mogelijke functies na afronding zijn Data Analist, BI-Specialist of Data Engineer.'
                }
                link={[
                    {
                        title: 'Interesse? Meld je nu aan!',
                        href: routes.contact,
                    },
                ]}
                variant={'light'}
            />
            <StatsImage
                image={
                    <Image
                        src={'/images/kandidaten4.jpg'}
                        alt="Uitdagende opdrachten om door te groeien als professional"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="spiritPro"
                title="Cyber security"
                description={
                    'Ontdek ons boeiende programma voor Cybersecurity! In een snel digitaliserende wereld is een veilige digitale omgeving essentieel. Als Cybersecurity-specialist bescherm jij organisaties tegen digitale aanvallen en leer je kwetsbaarheden op te sporen, op te lossen en de schade te beperken bij hacks.\n' +
                    '\n' +
                    'Gedurende het 18 maanden durende traject ontvang je persoonlijke begeleiding van een coach van SpiritStaffing. Je behaalt certificaten en ontwikkelt diverse hard skills. Onze soft skills trainingen richten zich op feedback geven en ontvangen, omgaan met weerstand en tegenslagen, assertiviteit en effectief functioneren binnen een team, waardoor je niet alleen technisch uitblinkt maar ook persoonlijk groeit.\n' +
                    '\n' +
                    'Kies voor ons Cybersecurity programma en bereid je voor op een carrière waarin je organisaties beschermt tegen cyberdreigingen en bijdraagt aan een veilige digitale toekomst. Jouw toekomst als gewilde cybersecurity-expert begint hier! Voorbeelden van mogelijke functies na afronding zijn Ethical Hacker, Cybersecurity Specialist en SOC Analist.'
                }
                link={[
                    {
                        title: 'Interesse? Meld je nu aan!',
                        href: routes.contact,
                    },
                ]}
                variant={'dark'}
                mirrored
            />
            <StatsImage
                image={
                    <Image
                        src={'/images/kandidaten5.jpg'}
                        alt="Uitdagende opdrachten om door te groeien als professional"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="spiritPro"
                title="IT Specialist"
                description={
                    'Kickstart jouw carrière als veelzijdige IT specialist met dit traineeship! Verken een wereld vol mogelijkheden en groei in een dynamische rol, betrokken bij netwerkbeheer, softwareontwikkeling, consultancy, databasebeheer, applicatiebeheer en het ontwikkelen van nieuwe systemen.\n' +
                    '\n' +
                    'Ons 18 maanden durende programma biedt niet alleen technische kennis en certificaten, maar ook de ontwikkeling van essentiële hard en soft skills. Met persoonlijke begeleiding van jouw toegewijde coach, stimuleren we groei in feedback geven en ontvangen, het overwinnen van uitdagingen en effectief teamwork. Het traineeship is de ideale springplank voor een vliegende start van jouw carrière, waarbij je constant in de kern van organisaties opereert.\n' +
                    '\n' +
                    'Schrijf je vandaag nog in voor het traineeship bij SpiritStaffing en geef jouw loopbaan een krachtige impuls! Voorbeelden van mogelijke functies na afronding zijn Microsoft Engineer, SAP Consultant of IT Consultant.'
                }
                link={[
                    {
                        title: 'Interesse? Meld je nu aan!',
                        href: routes.contact,
                    },
                ]}
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
