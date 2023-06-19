import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import { routes } from '../../lib/routes'
import {
    CloudIcon,
    CurrencyEuroIcon,
    DocumentTextIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    TrophyIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import { CallToAction } from 'ui/components/CallToAction'
import { StatsImage } from 'ui/components/StatsImage'
import { FeatureGridSteps } from 'ui/components/FeatureGridSteps'

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
                title="IT Traineeships"
                description={
                    'Bouw voort op je huidige IT-kennis en train specifieke hard en soft skills die relevant zijn voor jou en de opdrachtgever. Jouw motivatie om jezelf verder te ontwikkelen is essentieel. Bereid je voor op een kick-start van je carrière als IT-professional! \n ' +
                    '\n' +
                    'SpiritStaffing biedt verschillende IT Traineeships: Software Development, IT Specialist, Data Management en Cybersecurity. Onze IT Traineeships zijn toegankelijk voor starters op elk niveau.'
                }
                link={[
                    {
                        title: 'Bekijk de traineeships',
                        href: `${routes.traineeships}/#software-development`,
                    },
                ]}
            />
            <FeatureGridSteps
                title="Start jouw IT-carrière met ons 18-maanden durende IT Traineeship!"
                description="Ontwikkel je technische vaardigheden en behaal verschillende certificaten. Ook leer je binnen zes soft skills trainingen om je persoonlijke kwaliteiten te verbeteren. We begeleiden je intensief en dagen je uit om het beste uit jezelf te halen."
                features={[
                    {
                        description:
                            'Jouw nieuwe carrière start met de aanmelding en selectieprocedure. Daarna start jouw IT Traineeship!',
                        icon: <RocketLaunchIcon />,
                    },
                    {
                        description:
                            'Gedurende het traject behaal je elk zes maanden een hard skill certificaat. Daarnaast gaan we aan de slag met zes soft skills.',
                        icon: <DocumentTextIcon />,
                    },
                    {
                        description:
                            'Je werkt aan uitdagende opdrachten waarbij je direct ervaring vanuit de theorie in praktijk kunt brengen.',
                        icon: <CloudIcon />,
                    },
                    {
                        description:
                            'Jouw ontwikkeling wordt beloond! Na het behalen van de eerste twee certificaten en het afronden van het eerste jaar gaat jouw salaris flink omhoog!',
                        icon: <CurrencyEuroIcon />,
                    },
                    {
                        description:
                            'Tijdens het traject word je intensief begeleid door maandelijkse coaching. We bieden je nieuwe inzichten en sturen bij waar nodig.',
                        icon: <LightBulbIcon />,
                    },
                    {
                        description:
                            'Samen met andere trainees bouwen we aan een like minded community waarin we van elkaar leren en vooral ook veel met elkaar lachen!',
                        icon: <UsersIcon />,
                    },
                    {
                        description:
                            'Gefeliciteerd! Jouw IT Traineeship is succesvol afgerond. Nu is de keuze aan jou waar jij wilt doorontwikkelen.',
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
                        src={'/images/spirit-staffing-visual2.jpg'}
                        alt="Jouw carrière begeleid vanaf de Start"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                }
                id="software-development"
                title="Software Development"
                subtitle="IT Traineeship"
                description={
                    'Ontdek het IT Traineeship Software Development! In slechts 18 maanden versnellen we jouw carrière als softwareontwikkelaar. Tijdens het intensieve traineeship halen onze talenten het maximale uit zichzelf. We ontwikkelen jouw hard en soft skills. Je behaalt verschillende certificaten. Je gaat code schrijven, maar ontwerpt, implementeert en test de software ook. Je werkt altijd met Scrum. Daarnaast word je begeleid in het geven van feedback, het omgaan met uitdagingen, assertiviteit en teamwork. We ondersteunen je het hele traject met maandelijkse persoonlijke gesprekken. \n' +
                    '\n' +
                    'Werk aan projecten bij gerenommeerde opdrachtgevers en zet je passie om in tastbare resultaten. Meld je aan voor het IT Traineeship Software Development en bereid je voor op een spannende reis vol groei, succes en plezier. Jouw toekomst als gewilde softwareontwikkelaar begint hier! Voorbeelden van uitstroom functies: Scrum Master, Software Developer, Product Owner.'
                }
                link={[
                    {
                        title: 'Meld je nu aan voor het traineeship!',
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
                id="it-specialist"
                title="IT Specialist"
                subtitle="IT Traineeship"
                description={
                    'Start jouw carrière als veelzijdige IT specialist met dit traineeship! Ontdek een wereld vol mogelijkheden en groei in een dynamische rol waarin je betrokken bent bij netwerkbeheer, softwareontwikkeling, consultancy, databasebeheer, applicatiebeheer en het ontwikkelen en up-to-date houden van nieuwe systemen. \n' +
                    '\n' +
                    'Ons 18 maanden durende traineeship biedt niet alleen technische kennis en certificaten, maar ook de ontwikkeling van essentiële hard- en softskills. Met persoonlijke begeleiding van jouw toegewijde coach word je gestimuleerd om te groeien in feedback geven en ontvangen, het overwinnen van uitdagingen en het werken binnen een team. Het traineeship biedt de perfecte springplank om jouw carrière een vliegende start te geven. Bereid je voor op een afwisselende rol, waarbij je constant in de kern van de organisatie opereert. \n ' +
                    '\n' +
                    'Schrijf je vandaag nog in voor het IT Traineeship bij SpiritStaffing en geef jouw loopbaan een krachtige impuls! Voorbeelden van uitstroom functies: Microsoft Engineer, SAP Consultant of IT Consultant.'
                }
                link={[
                    {
                        title: 'Meld je nu aan voor het traineeship!',
                        href: routes.contact,
                    },
                ]}
                mirrored
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
                id="data-management"
                title="Data Management"
                subtitle="IT Traineeship"
                description={
                    'Ontdek het IT Traineeship Data Management! In deze digitale wereld draait alles om data. Als data manager speel jij een centrale rol in het transformeren van data naar waardevolle kennis en inzichten. Ons traineeship richt zich op het ontwikkelen van je hard- en soft skills en biedt de mogelijkheid om belangrijke certificaten te behalen. Denk hierbij aan Microsoft Power BI of werken met AI, waarbij je altijd met Scrum werkt \n' +
                    '\n' +
                    'Gedurende het 18 maanden durende traject krijg je persoonlijke begeleiding van een coach van SpiritStaffing. Onze soft skills trainingen richten zich op zaken als feedback geven en ontvangen, het omgaan met weerstand en tegenslagen, assertiviteit en effectief functioneren binnen een team. Dit zorgt ervoor dat je niet alleen technisch uitblinkt, maar ook op persoonlijk vlak groeit. ' +
                    '\n' +
                    '\n' +
                    'Meld je aan voor het IT Traineeship Data Management en bereid je voor op een carrière waarin je impact maakt met data en waardevolle inzichten genereert! Voorbeelden van uitstroom functies: Data Analist, BI-Specialst of Data Engineer.'
                }
                link={[
                    {
                        title: 'Meld je nu aan voor het traineeship!',
                        href: routes.contact,
                    },
                ]}
                variant="dark"
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
                id="cybersecurity"
                title="Cybersecurity"
                subtitle="IT Traineeship"
                description={
                    'Maak kennis met het spannende IT Traineeship Cybersecurity! In een wereld die razendsnel digitaliseert, is een veilige digitale omgeving van cruciaal belang. Als Cybersecurity-specialist of ethische hacker bescherm jij organisaties tegen digitale aanvallen. Je leert kwetsbaarheden op te sporen, op te lossen en de schade te beperken in geval van een hack. \n' +
                    '\n' +
                    'Gedurende het 18 maanden durende traject krijg je persoonlijke begeleiding van een coach van SpiritStaffing. Je behaalt certificaten of verschillende hard skills. Onze soft skills trainingen richten zich op zaken als feedback geven en ontvangen, het omgaan met weerstand en tegenslagen, assertiviteit en effectief functioneren binnen een team. Dit zorgt ervoor dat je niet alleen technisch uitblinkt, maar ook op persoonlijk vlak groeit. \n' +
                    '\n' +
                    'Kies voor het IT Traineeship Cybersecurity en bereid je voor op een carrière waarin je organisaties beschermt tegen cyberdreigingen en bijdraagt aan een veilige digitale toekomst. Jouw toekomst als gewilde cybersecurity-expert begint hier! Voorbeelden van uitstroom functies: Ethical Hacker, Cybersecurity Specialist, Security Officer'
                }
                link={[
                    {
                        title: 'Meld je nu aan voor het traineeship!',
                        href: routes.contact,
                    },
                ]}
                variant="light"
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
