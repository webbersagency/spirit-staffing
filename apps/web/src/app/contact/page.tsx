import { Hero } from 'ui/components/Hero'
import { ContactForm } from 'ui/components/ContactForm'
import { Metadata } from 'next'

export default function Page() {
    return (
        <>
            <Hero
                title="Contact opnemen"
                description={
                    'Wil je meer weten over SpiritStaffing, onze vacatures, opdrachtgevers, of onze diensten? \n' +
                    '\n' +
                    'Laten we een afspraak maken, om gewoon een keer kennis te maken. We komen graag met je in contact. \n' +
                    '\n' +
                    'Als je graag wilt solliciteren, maar je ziet nog geen passende vacature, stuur ons dan een open sollicitatie. We kijken dan samen naar de mogelijkheden die bij jou passen.'
                }
                link={[
                    {
                        title: 'Open sollicitatie',
                        href: '/contact',
                    },
                ]}
                link2={[
                    {
                        title: 'Bel mij terug',
                        href: '/contact',
                    },
                ]}
            />
            <ContactForm />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact',
}
