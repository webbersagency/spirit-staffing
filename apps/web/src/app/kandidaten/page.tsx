import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'
import { StatsDescription } from 'ui/components/StatsDescription'
import React from 'react'
import { StatsImage } from 'ui/components/StatsImage'

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
            <StatsDescription
                title="Onze missie"
                description="We zien we dat veel bedrijfsprocessen digitaliseren. Dat biedt enorme kansen voor
                             onze professionals. Om flexibel te blijven naar onze professionals en klanten,
                             bieden we verschillende mogelijkheden zoals detachering, projectplaatsingen en
                             tijdelijk naar vaste oplossingen. Wij dagen je uit om uit jouw comfort zone te
                             stappen en het nieuwe avontuur op te zoeken. Wij dagen jou uit om met de juiste
                             Spirit echt impact te gaan maken!"
                stats={[
                    { value: 'Uitdagende opdrachten' },
                    { value: 'Complete arbeidsvoorwaarden' },
                    { value: 'Altijd doorontwikkelen door studie' },
                    { value: 'Aandacht voor werk en privé' },
                ]}
                features
            />
            <StatsImage
                title="Jouw carrière staat bij ons centraal"
                subtitle="SpiritStart"
                description="We maken samen een meerjarig plan, om door te ontwikkelen naar de professional die jij
                              wilt worden. Daar passen we de (deeltijd) studie en opdrachten op aan, want leren en
                              werken heeft onze focus. We concentreren ons op het maken van de perfecte match tussen
                              jou en onze opdrachtgevers. Maar daarna gaan we samen een traject in om jouw carrière te
                              boosten! Ontwikkelen bij verschillende opdrachtgevers, binnen verschillende culturen en
                              een specifieke studie, daar maken we het verschil.
                         
                               We hebben regelmatig evaluaties, we coachen je gedurende het traject, en sturen bij
                               indien dat nodig is. Omdat jij te maken krijgt met verschillende bedrijfsculturen, zijn
                               we straks samen beter dan ooit in staat de juiste keuzes voor jouw carrière te maken.
                               Daarnaast is een goede privé- werkbalans het uitgangspunt. We bouwen samen aan onze
                               mind-like professionals community. Dit doen we door het verzorgen van fantastisch
                               leerzame community momenten en via gezellige borrels!"
                link={[
                    {
                        title: 'Wij bellen jou graag terug!',
                        to: '/contact',
                    },
                ]}
                variant="light"
            />
            <StatsImage
                title="Uitdagende opdrachten om door te groeien als professional"
                subtitle="SpiritPro"
                description="Bij SpiritStaffing geloven we dat onze professionals het verschil maken. Daarom besteden
                             we veel aandacht aan het bouwen van relaties in de markt. Ook weten we dat organisaties
                             vaak directe uitdagingen hebben en professionals zoeken die snel impact kunnen maken.
                             Daarom is er SpiritPro. Onze SpiritPro professionals zijn specialist op een specifiek
                             onderwerp. Ze zijn scherp, schakelen snel en passen zich direct aan binnen bestaande
                             teams. Het zijn gearriveerde freelance professionals die via uitdagende projecten bij
                             onze opdrachtgevers direct impact hebben op de organisatie. Het zijn professionals met
                             de juiste Spirit!
                             Wij zorgen voor interessante specialistische trainingen via onze partners, bouwen samen
                             met jou onze SpiritPro community en laten deze regelmatig bij elkaar komen op gezellige
                             events!"
                link={[
                    {
                        title: 'Wij bellen jou graag terug!',
                        to: '/contact',
                    },
                ]}
                mirrored
            />
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
