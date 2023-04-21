'use client'

import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import useAnimations from 'web/src/app/utils/animations/useAnimations'
import classNames from 'classnames'
import { slideInLeft, stagger } from 'web/src/app/utils/animations'

const features = [
    {
        name: 'De mens staat bij ons echt centraal',
        description:
            'Samen is alles mogelijk. Vanaf de eerste minuut investeren we in de ontwikkeling van onze mensen. En we houden niet op! Samen maken we een ontwikkelplan en zorgen voor een uitdagende werk en leer omgeving. We doen dat met de juiste Spirit, om elke dag de beste versie van onszelf kunnen zijn!',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Impact maken',
        description:
            'Voor onze mensen is de werkomgeving niet zomaar een plek om te werken. Wij maken graag impact door samen te werken aan het vergroten van de digitale weerbaarheid van onze opdrachtgevers. Soms kunnen we door anders te denken echt nieuwe inzichten bieden en het verschil maken.',
        href: '#',
        icon: UsersIcon,
    },
    {
        name: 'Inspirerend zijn',
        description:
            'Wij denken altijd in mogelijkheden en zoeken naar oplossingen. Wij denken niet in vaste patronen, maar juist in oplossingen die nog niet geïmplementeerd zijn. Wij laten ons niet tegenhouden. Dat zorgt voor een positieve dynamiek, en een inspirerende werkomgeving.',
        href: '#',
        icon: TrashIcon,
    },
]
export const FeatureColumns = () => {
    const { ref, inView } = useAnimations()
    const staggerDelay = 100

    return (
        <div ref={ref} className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className={classNames('mx-auto max-w-2xl lg:mx-0', slideInLeft(inView))}>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Kernwaarden van SpiritStaffing</h2>
                    <p className="mt-6 text-lg leading-8">
                        Onze missie is om de beste ICT professionals te vinden om de digitalisering voor het publieke
                        domein te accelereren, waarbij we ons in de eerste plaats concentreren op een verhoging van de
                        digitale weerbaarheid.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={feature.name}
                                style={stagger(index, staggerDelay)}
                                className={classNames('flex flex-col', slideInLeft(inView))}
                            >
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="bg-green800 mb-6 flex h-10 w-10 items-center justify-center rounded-lg">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
