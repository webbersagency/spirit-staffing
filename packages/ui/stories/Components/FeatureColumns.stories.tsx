import { FeatureColumns } from '../../components/FeatureColumns'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default {
    title: 'Components/FeatureColumns',
}

export const featureColumns = () => {
    return (
        <FeatureColumns
            title="Onze missie"
            description={
                'Veel werkprocessen digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar het vraagt ook om aanpassingsvermogen.\n' +
                '\n' +
                'Onze missie is om de beste ICT professionals te vinden om de digitalisering te accelereren, door permanente ontwikkeling van onze professionals, door persoonlijke begeleiding.'
            }
            features={[
                {
                    name: 'Impact maken',
                    description: `Echte toegevoegde waarde leveren aan de digitale transitie van Nederland.`,
                    icon: <InboxIcon />,
                },
                {
                    name: 'Boost jouw carriere',
                    description: 'Wij helpen je om jouw carrière naar de volgende fase te brengen.',
                    icon: <UsersIcon />,
                },
                {
                    name: 'Altijd blijven ontwikkelen',
                    description: 'Als je je niet meer kunt ontwikkelen is het tijd om iets anders te gaan doen.',
                    icon: <TrashIcon />,
                },
            ]}
        />
    )
}
