import { Hero } from 'ui/components/Hero'
import { ContactForm } from 'ui/components/ContactForm'
import { Metadata } from 'next'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={<img src={'../../images/heroCoverImage.png'} alt="cover image" />}
                title="Contact opnemen"
                description={
                    'Wil je meer weten over SpiritStaffing, onze vacatures of opdrachtgevers? Laten we een afspraak maken, om gewoon een keer kennis te maken. We komen graag met je in contact. \n' +
                    '\n' +
                    'Of je nu een een Starter of Pro bent: stuur ons een open sollicitatie of laat een terugbel verzoek achter.\n' +
                    '\n' +
                    'We kijken dan samen naar de mogelijkheden die bij jou passen.'
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
