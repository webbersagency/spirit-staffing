import { CallToAction } from 'ui/components/CallToAction'
import Button from 'ui/components/Button'
import Link from 'next/link'
import { Testimonials } from 'ui/components/Testimonials'
import { Pricing } from 'ui/components/Pricing'
import { Metadata } from 'next'

const stats = [
    { label: 'Een echte toegevoegde waarde leveren aan de digitale transitie van Nederland.', value: 'Impact maken' },
    { label: 'Wij helpen je om jouw carrière naar de volgende fase te brengen.', value: 'Boost jouw carriere' },
    {
        label: 'Als je je niet meer kan ontwikkelen is het tijd om iets anders te gaan doen.',
        value: 'Altijd blijven ontwikkelen\n',
    },
]

export default function Page() {
    return (
        <>
            <div className="bg-green800">
                <div className="relative">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                            <svg
                                className="fill-green800 absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform lg:block"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <polygon points="0,0 90,0 50,100 0,100" />
                            </svg>

                            <div className="lg:py-50 relative px-6 py-32 sm:py-40 lg:px-8 lg:pr-0">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                        Jouw carrière met impact!
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-white">
                                        Samen is alles mogelijk. Vanaf de start investeren we in de ontwikkeling van
                                        onze mensen. En we houden niet op! Samen maken we een ontwikkelplan en zorgen
                                        voor een uitdagende werk -en leeromgeving. We doen dat met de juiste Spirit,
                                        binnen de juiste privé- werkbalans balans, om elke dag de beste versie van
                                        onszelf te kunnen zijn!
                                    </p>
                                    <p className="mt-6 text-lg leading-8 text-white">
                                        Wij zijn SpiritStaffing en onze mensen maken het verschil binnen de digitale
                                        transitie van Nederland.
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <Button as={Link} href="/contact" variant="primary">
                                            Let's get in touch
                                        </Button>
                                        <Link href="contact" className="font-semibold leading-6 text-white">
                                            Ik zoek de juiste Spirit! <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-green800 text-3xl font-bold tracking-tight sm:text-4xl">Onze missie</h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p className="text-dark leading-8">
                                    Bij SpiritStaffing zien we dat veel werkprocessen volledig digitaliseren.
                                    Fantastisch natuurlijk, met een wereld vol kansen. Maar we moeten ook realistisch
                                    zijn. Het risico op misbruik van gegevens groeit en daarom is het vergroten van
                                    digitale weerbaarheid in organisaties essentieel. Het vraagt om aanpassingsvermogen,
                                    waarvoor de komende jaren meer kundige ICT professionals nodig zijn.
                                </p>
                                <p className="text-dark mt-10 max-w-xl leading-7">
                                    Onze missie is dan ook de beste ICT professionals te vinden om de digitalisering
                                    voor het publieke domein te accelereren, waarbij we ons in de eerste plaats
                                    concentreren op een verhoging van de digitale weerbaarheid.
                                </p>
                            </div>
                            <div className="lg:flex lg:flex-auto lg:justify-center">
                                <dl className="w-full space-y-8 xl:w-80">
                                    {stats.map(stat => (
                                        <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                            <dt className="text-dark text-base leading-7">{stat.label}</dt>
                                            <dd className="text-green800 text-3xl font-semibold tracking-tight">
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
            <div className="relative">
                <img
                    className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                />
                <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                    <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                            <h2 className="text-green800 mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Professionals die het verschil maken
                            </h2>
                            <p className="text-dark mt-6 leading-8">
                                Het vinden van een juiste werkomgeving is uitdagend. Dat realiseren wij ons iedere dag.
                                Het betekent veel meer dan een plek om alleen te werken. Het gaat over het ontwikkelen
                                van jouw talent, het ontdekken van nieuwe mogelijkheden en het maken van impact. Het
                                gaat om het maken van connecties, waarbij je ook een goede balans tussen jouw privéleven
                                en professionele ambities realiseert. Binnen SpiritStaffing begeleiden we twee groepen
                                professionals: de startende professionals binnen SpiritStart, en de meer ervaren medior
                                en senior professionals binnen SpiritPro.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction
                title="Ben jij klaar voor een carrière met de juiste Spirit?"
                description="Laten we connecten en samen impact maken!"
                link={[
                    {
                        title: 'Bel me terug',
                        to: '/contact',
                    },
                ]}
            />
            <Pricing />
            <Testimonials />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home',
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
    icons: {
        icon: [{ url: '/favicon.ico' }, new URL('/favicon.ico', 'https://www.spiritstaffing.nl')],
    },
    openGraph: {
        title: '',
        description: '',
        url: '',
        siteName: '',
        images: [
            {
                url: '',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'nl-NL',
        type: 'website',
    },
}
