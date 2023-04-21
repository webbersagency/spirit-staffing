import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

const stats = [
    {
        value: 'Focus op het publieke domein',
    },
    {
        value: 'Grote kennis van de markt',
    },
    {
        value: 'Altijd blijven ontwikkelen\n',
    },
    {
        value: 'Flexibiliteit in de organisatie',
    },
]
export const StatsDescription = () => {
    return (
        <div className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Onze missie</h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-1">
                            <p className="leading-8">
                                We bieden flexibele oplossingen voor onze klanten. Het gaat hierbij om detachering,
                                projectmatig werk en tijdelijk naar vaste aanstellingen. Ons brede netwerk van
                                potentiële kandidaten, van junioren tot senioren, geeft ons de mogelijkheid om snel te
                                reageren op vragen van klanten.
                            </p>
                        </div>
                        <div className="lg:flex lg:flex-1 lg:justify-center">
                            <dl className="space-y-8 xl:w-80">
                                {stats.map(stat => (
                                    <div key={stat.value} className="flex flex-row items-center gap-x-6">
                                        <CheckIcon className="text-green800 h-6 w-6" aria-hidden="true" />
                                        <dd className="text-green800 text-2xl font-semibold tracking-tight">
                                            {stat.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
