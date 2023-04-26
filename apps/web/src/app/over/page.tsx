/* Todo iconen zoeken en zijn links nodig? */
import { CallToAction } from 'ui/components/CallToAction'
import { FeatureColumns } from 'ui/components/FeatureColumns'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={<img src={'../../images/heroCoverImage.png'} alt="cover image" />}
                title="Welkom bij SpiritStaffing"
                description={
                    'Veel werkprocessen digitaliseren digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar het vraagt ook om aanpassingsvermogen.\n' +
                    '\n' +
                    'Onze missie is dan ook de beste ICT professionals te vinden om de digitalisering van Nederland te accelereren.'
                }
                link={[
                    {
                        title: 'Bekijk onze dienstverlening',
                        href: '/opdrachtgevers',
                    },
                ]}
            />
            <FeatureColumns
                title="Kernwaarden van SpiritStaffing"
                description="Wij geloven in ontwikkeling. We denken altijd in mogelijkheden. We schakelen snel en samen maken we
                    echt impact."
                features={[
                    {
                        name: 'De mens staat bij ons echt centraal',
                        description: `Samen is alles mogelijk. Dat is waar wij in geloven! \n \nInvesteren in ontwikkeling. Vanuit elke achtergrond. Binnen een uitdagende werk- en leeromgeving. Privé en werk in balans. Dat is onze basis.`,
                        icon: <InboxIcon />,
                    },
                    {
                        name: 'Impact maken',
                        description:
                            'Voor onze mensen is de werkomgeving niet zomaar een plek om te werken. Wij maken graag impact door samen te werken. Vaak kunnen we door anders te denken nieuwe inzichten bieden en echt het verschil maken.',
                        icon: <UsersIcon />,
                    },
                    {
                        name: 'Inspirerend zijn',
                        description:
                            'Wij denken altijd in mogelijkheden en zoeken naar oplossingen. Wij denken niet in vaste patronen, maar juist in oplossingen die nog niet geïmplementeerd zijn. Wij laten ons niet tegenhouden. Dat zorgt voor een positieve dynamiek, en een inspirerende werkomgeving.',
                        icon: <TrashIcon />,
                    },
                ]}
            />
            <CallToAction
                title="Wil jij ons beter leren kennen?"
                description="Laat je gegevens achter en wij bellen je terug!"
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
    title: 'Over',
    description: 'Over',
}
