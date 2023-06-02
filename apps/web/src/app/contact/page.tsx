import { Hero } from 'ui/components/Hero'
import { ContactForm } from 'ui/components/ContactForm'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { routes } from '../../lib/routes'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/spirit-staffing-visual9.jpg'}
                        alt="cover image"
                        width={900}
                        height={1200}
                        priority
                        loading={'eager'}
                    />
                }
                title="Contact opnemen"
                description={
                    'Wil je meer weten over SpiritStaffing, onze vacatures of opdrachtgevers? Laten we een afspraak maken, om gewoon een keer kennis te maken. We komen graag met je in contact. \n' +
                    '\n'
                }
                link={[
                    {
                        title: 'Aanmelden',
                        href: `${routes.contact}/#contactForm`,
                    },
                    {
                        title: 'Bel mij terug',
                        href: `${routes.contact}/#contactForm`,
                    },
                ]}
            />
            <ContactForm />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Contact | SpiritStaffing',
    description: 'Contact | SpiritStaffing',
}
