'use client'
import { CheckIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import Button from '../Button'
import Link from 'next/link'
import useAnimations from 'web/src/utils/animations/useAnimations'
import { slideInBottom, slideInTop } from 'web/src/utils/animations/'

const tiers = [
    {
        name: 'SpiritStart',
        id: 'tier-personal',
        href: '/opdrachtgevers',
        features: [
            'Minimaal een afgeronde MBO niveau 4 studie',
            'Meerjaren ontwikkelplan',
            'Direct een goed salaris verdienen',
            'Gratis studeren op HBO niveau',
            'Uitdagende opdrachten',
            'Doorgroeimogelijkheden',
            'Baangarantie',
        ],
        featured: true,
    },
    {
        name: 'SpiritPro',
        id: 'tier-team',
        href: '/opdrachtgevers',
        features: [
            'Medior en senior level',
            'Direct inzetbaar\n',
            'Direct goed verdienen',
            'Uitdagende project opdrachten',
            'Doorgroeimogelijkheden',
            'Netwerk events\n',
            'Hard- softskill trainingen',
        ],
        featured: false,
    },
]

export const Pricing = () => {
    const { ref, inView } = useAnimations()

    return (
        <div className="container relative isolate bg-white">
            <div
                className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="from-green200 to-green800 mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div ref={ref} className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                <h2
                    className={classNames(
                        'mt-2 text-4xl font-medium tracking-tight sm:text-5xl',
                        slideInBottom(inView)
                    )}
                >
                    Dit is hoe SpiritStaffing echt impact maakt
                </h2>
            </div>
            <p className={classNames('mx-auto mt-6 max-w-2xl text-center leading-8', slideInBottom(inView))}>
                SpiritStaffing begeleidt startende professionals binnen SpiritStart, en meer ervaren professionals
                binnen SpiritPro.
            </p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 gap-y-8 sm:mt-12 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? slideInTop(inView) : slideInBottom(inView),
                            ' bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:p-10 lg:mx-0 ',
                            tier.featured
                                ? 'rounded-3xl lg:rounded-l-3xl lg:rounded-r-none'
                                : 'rounded-3xl lg:rounded-l-none lg:rounded-r-3xl'
                        )}
                    >
                        <h3 id={tier.id} className="text-green800 text-3xl font-medium leading-7">
                            {tier.name}
                        </h3>
                        <ul role="list" className="text-dark mb-10 mt-8 space-y-3 text-sm leading-6 sm:mt-10">
                            {tier.features.map(feature => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="text-green800 h-6 w-5 flex-none" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button as={Link} href={tier.href} variant="primary">
                            Meer weten? Lets go!
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
