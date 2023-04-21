import { CheckIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import Button from '../Button'
import Link from 'next/link'

const tiers = [
    {
        name: 'SpiritStart',
        id: 'tier-personal',
        href: '/dienstverlening',
        features: [
            'ROC en MBO studenten\n',
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
        href: '/dienstverlening',
        features: [
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
    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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
            <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">*Placeholder Titel*</h2>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8">*Placeholder tekst*</p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative bg-white shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                            tier.featured
                                ? ''
                                : tierIdx === 0
                                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                                : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                            'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                        )}
                    >
                        <h3 id={tier.id} className="text-green800 text-3xl font-semibold leading-7">
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
