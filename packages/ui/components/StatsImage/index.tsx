import Button from '../Button'
import React from 'react'
import Link from 'next/link'

export const StatsImage = () => {
    return (
        <div className="bg-green800 relative">
            <img
                className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
                alt=""
            />
            <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-1 lg:px-8 lg:pt-32">
                    <div className="mx-auto max-w-2xl text-right lg:max-w-lg">
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">SpiritPro</h2>
                        <p className="mb-8 mt-6  leading-8 text-white">
                            Onze SpiritPro professionals zijn specialist op een specifiek onderwerp. Ze zijn scherp,
                            schakelen snel en passen zich direct aan binnen bestaande teams. Het zijn gearriveerde
                            freelance professionals die via uitdagende projecten bij onze opdrachtgevers direct impact
                            hebben op de organisatie. Het zijn professionals met de juiste Spirit!
                        </p>
                        <Button as={Link} href="/contact" variant="primary">
                            Neem contact met ons op
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
