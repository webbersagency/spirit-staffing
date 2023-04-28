import { Hero } from 'ui/components/Hero'
import { ContactForm } from 'ui/components/ContactForm'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <>
            <Hero
                coverImage={
                    <Image
                        src={'/images/spirit-staffing-visual1.jpg'}
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
                        title: 'Open sollicitatie',
                        href: '/contact/#contactform',
                    },
                    {
                        title: 'Bel mij terug',
                        href: '/contact/#contactform',
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
