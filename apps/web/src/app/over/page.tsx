import { CallToAction } from 'ui/components/CallToAction'
import { FeatureColumns } from 'ui/components/FeatureColumns'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import { BoltIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import { routes } from '../../lib/routes'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/over1.jpg'}
                        alt="SpiritStaffing"
                        priority
                        loading={'eager'}
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-left"
                    />
                }
                title="Welkom bij SpiritStaffing"
                description={
                    'Veel werkprocessen digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar het vraag ook om aanpassingsvermogen. \n' +
                    '\n' +
                    'SpiritStaffing levert een bijdrage aan de continuïteit van de IT teams bij onze opdrachtgevers. Dit realiseren we door breed te kijken naar kandidaten en samen te investeren in hun verdere ontwikkeling. Zo zijn ze niet alleen direct inzetbaar, maar groeien ze door bij onze opdrachtgevers. Na een detacheringsperiode treden onze mensen daar in dienst.'
                }
                link={[
                    {
                        title: 'Bekijk onze dienstverlening',
                        href: routes.services,
                    },
                ]}
            />
            <FeatureColumns
                title="Kernwaarden van SpiritStaffing"
                description="We denken constructief mee met onze opdrachtgevers en we zeggen waar het op staat. We kijken verder dan alleen het CV en zoeken naar de vraag achter de vraag. We streven ernaar om altijd het beste uit elkaar te halen."
                features={[
                    {
                        name: 'Vertrouwen',
                        description:
                            'We werken transparant. Dat is voor ons de basis van een duurzame relatie. Door het vertrouwen dat we krijgen kunnen we proactief handelen en het maximale uit onze samenwerkingen halen.',
                        icon: <UsersIcon />,
                    },
                    {
                        name: 'Nieuwsgierig',
                        description:
                            'We zullen altijd nieuwsgierig blijven, naar motivaties en ambities. Nieuwsgierig naar organisaties en waar ze zich naar toe ontwikkelen. We zoeken naar professionals die daar het beste bij passen. We zullen altijd vragen blijven stellen, om jouw organisatie goed te begrijpen.',
                        icon: <BoltIcon />,
                    },
                    {
                        name: 'Kwaliteit',
                        description:
                            'We hebben de drive om onszelf en onze mensen uit te dagen. We leggen de lat hoog en we staan voor kwaliteit. Dat geldt voor de kwaliteit van onze processen, onze opleidingen en onze duurzame samenwerkingen.',
                        icon: <StarIcon />,
                    },
                ]}
            />
            <CallToAction
                title="Wil jij ons beter leren kennen?"
                description="Laat je gegevens achter en wij bellen je terug!"
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
    title: 'Over SpiritStaffing | SpiritStaffing',
    description: 'Over SpiritStaffing | SpiritStaffing',
}
