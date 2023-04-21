import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { CallToAction } from 'ui/components/CallToAction'
import { Hero } from 'ui/components/Hero'
import { Metadata } from 'next'

const features = [
    {
        name: 'Fullstack Development',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Functioneel beheer',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'Devops',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Data Management en BI',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Cyber Security',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'IT Architectuur',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Digitale transformatie',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
]

export default function Page() {
    return (
        <>
            <Hero
                title="Vakgebieden waar wij impact maken"
                description="Onze missie is om een positieve bijdrage te leveren aan de digitale transitie
                             van Nederland. Daarbij concentreren we ons op de digitale weerbaarheid, omdat
                             dat de basis is waar vanuit de transitie plaatsvindt. Dan kunnen we echt impact maken."
            />
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-gray-90 mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            *Placeholder titel*
                        </h2>
                        <p className="mt-6 text-lg leading-8">
                            De digitale transitie geeft de samenleving veel kansen, maar vraagt ook om zorgvuldigheid.
                            Met het uitbreiden van de digitale wereld, nemen ook de risico’s in dit domein toe. Daarom
                            concentreren onze mensen zich primair op het verhogen van de digitale weerbaarheid van
                            Nederland. Dat betekent echt impact maken binnen het publieke domein.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map(feature => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7">
                                        <div className="bg-green800 absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <CallToAction
                title="Wil jij ook impact maken, of wil jij weten wat SpiritStaffing voor jou kan betekenen?"
                link={[
                    {
                        title: 'Neem dan contact op!',
                        to: '/contact',
                    },
                ]}
            />
        </>
    )
}

export const metadata: Metadata = {
    title: 'Vakgebieden',
    description: 'Vakgebieden',
}
