import Button from 'ui/components/Button'
import Link from 'next/link'
import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'

const stats = [
    { value: 'Uitdagende opdrachten' },
    { value: 'Complete arbeidsvoorwaarden' },
    { value: 'Altijd doorontwikkelen door studie' },
    { value: 'Aandacht voor werk en privé' },
]
export default function Page() {
    return (
        <>
            <Hero
                title=" Kandidaten"
                description="Bij SpiritStaffing staat de mens echt centraal. Omdat wij geloven in constante
                                        ontwikkeling, investeren wij enorm in onze professionals. We faciliteren een
                                        combinatie van studie en uitdagende opdrachten. Maar ook bieden wij trainingen
                                        aan om verder te ontwikkelen op specialistische onderwerpen."
                link={[
                    {
                        title: 'Ontdek wat wij voor jou kunnen betekenen',
                        href: '/dienstverlening',
                    },
                ]}
            />
            <div className="bg-white py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-green800 text-3xl font-bold tracking-tight sm:text-4xl">Onze missie</h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-1">
                                <p className="text-dark text-lg leading-8">
                                    We zien we dat veel bedrijfsprocessen digitaliseren. Dat biedt enorme kansen voor
                                    onze professionals. Om flexibel te blijven naar onze professionals en klanten,
                                    bieden we verschillende mogelijkheden zoals detachering, projectplaatsingen en
                                    tijdelijk naar vaste oplossingen. Wij dagen je uit om uit jouw comfort zone te
                                    stappen en het nieuwe avontuur op te zoeken. Wij dagen jou uit om met de juiste
                                    Spirit echt impact te gaan maken!
                                </p>
                            </div>
                            <div className="lg:flex lg:flex-1 lg:justify-center">
                                <dl className="w-64 space-y-8 xl:w-80">
                                    {stats.map(stat => (
                                        <div key={stat.value} className="flex flex-col-reverse gap-y-4">
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
            <div className="bg-green200 relative">
                <img
                    className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                />
                <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                    <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                            <p className="text-base font-semibold leading-8">SpiritStart</p>
                            <h2 className="text-green800 mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Jouw carrière staat bij ons centraal
                            </h2>
                            <p className="text-dark mb-8 mt-6 leading-6">
                                We maken samen een meerjarig plan, om door te ontwikkelen naar de professional die jij
                                wilt worden. Daar passen we de (deeltijd) studie en opdrachten op aan, want leren en
                                werken heeft onze focus. We concentreren ons op het maken van de perfecte match tussen
                                jou en onze opdrachtgevers. Maar daarna gaan we samen een traject in om jouw carrière te
                                boosten! Ontwikkelen bij verschillende opdrachtgevers, binnen verschillende culturen en
                                een specifieke studie, daar maken we het verschil.
                                <br /> <br />
                                We hebben regelmatig evaluaties, we coachen je gedurende het traject, en sturen bij
                                indien dat nodig is. Omdat jij te maken krijgt met verschillende bedrijfsculturen, zijn
                                we straks samen beter dan ooit in staat de juiste keuzes voor jouw carrière te maken.
                                Daarnaast is een goede privé- werkbalans het uitgangspunt. We bouwen samen aan onze
                                mind-like professionals community. Dit doen we door het verzorgen van fantastisch
                                leerzame community momenten en via gezellige borrels!
                            </p>
                            <p className="text-dark mb-8 mt-6 leading-8">Heb jij de juiste Spirit?</p>
                            <Button as={Link} href="/contact" variant="primary">
                                Wij bellen jou graag terug!
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" relative">
                <img
                    className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                />
                <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                    <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-1 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl text-right lg:max-w-lg">
                            <p className="text-base font-semibold leading-8 ">SpiritPro</p>
                            <h2 className="text-green800 mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Uitdagende opdrachten om door te groeien als professional
                            </h2>
                            <p className="text-dark mb-8 mt-6 leading-6">
                                Bij SpiritStaffing geloven we dat onze professionals het verschil maken. Daarom besteden
                                we veel aandacht aan het bouwen van relaties in de markt. Ook weten we dat organisaties
                                vaak directe uitdagingen hebben en professionals zoeken die snel impact kunnen maken.
                                Daarom is er SpiritPro. Onze SpiritPro professionals zijn specialist op een specifiek
                                onderwerp. Ze zijn scherp, schakelen snel en passen zich direct aan binnen bestaande
                                teams. Het zijn gearriveerde freelance professionals die via uitdagende projecten bij
                                onze opdrachtgevers direct impact hebben op de organisatie. Het zijn professionals met
                                de juiste Spirit!
                                <br /> <br />
                                Wij zorgen voor interessante specialistische trainingen via onze partners, bouwen samen
                                met jou onze SpiritPro community en laten deze regelmatig bij elkaar komen op gezellige
                                events!
                            </p>
                            <p className="text-dark mb-8 mt-6 leading-6">Heb jij de juiste Spirit?</p>
                            <Button as={Link} href="/" variant="primary">
                                Wij bellen jou graag terug!
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction
                title="Wil je meer weten over SpiritStaffing, onze vacatures, opdrachtgevers, of onze diensten?"
                description="Laten we een afspraak maken, om gewoon een keer kennis te maken. We komen graag met je in contact."
                link={[
                    {
                        title: 'Bel mij terug!',
                        to: '/contact',
                    },
                ]}
            />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Kandidaten',
    description: 'Kandidaten',
}
