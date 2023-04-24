'use client'

import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import useAnimations from 'web/src/app/utils/animations/useAnimations'
import classNames from 'classnames'
import { slideInLeft, stagger } from 'web/src/app/utils/animations'

const features = [
    {
        name: 'De mens staat bij ons echt centraal',
        description: `Samen is alles mogelijk. Dat is waar wij in geloven! \n \nInvesteren in ontwikkeling. Vanuit elke achtergrond. Binnen een uitdagende werk- en leeromgeving. Privé en werk in balans. Dat is onze basis.`,
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Impact maken',
        description:
            'Voor onze mensen is de werkomgeving niet zomaar een plek om te werken. Wij maken graag impact door samen te werken. Vaak kunnen we door anders te denken nieuwe inzichten bieden en echt het verschil maken.',
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
        <div ref={ref} className="container bg-white">
            <div className={classNames('mx-auto max-w-2xl lg:mx-0', slideInLeft(inView))}>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Kernwaarden van SpiritStaffing</h2>
                <p className="mt-6 text-lg leading-8">
                    Wij geloven in ontwikkeling. We denken altijd in mogelijkheden. We schakelen snel en samen maken we
                    echt impact.
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
                                <p className="flex-auto whitespace-pre-wrap">{feature.description}</p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
