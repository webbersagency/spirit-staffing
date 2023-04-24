'use client'

import Link from 'next/link'
import { SpiritStaffingLogoBlack } from '../../static/SpiritStaffingLogoFullBlack'
import useAnimations from 'web/src/app/utils/animations/useAnimations'
import classNames from 'classnames'
import { slideInBottom } from 'web/src/app/utils/animations'

const navigation = {
    main: [
        { name: 'Opdrachtgevers', href: '/opdrachtgevers' },
        { name: 'Vakgebieden', href: '/vakgebieden' },
        { name: 'Kandidaten', href: '/kandidaten' },
        { name: 'Over Spiritstaffing', href: '/over' },
        { name: 'Contact', href: '/contact' },
    ],
    social: [
        {
            name: 'Instagram',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Mail',
            href: '#',
            icon: (props: any) => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    {...props}
                >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: (props: any) => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-6 w-6"
                    fill="currentColor"
                    {...props}
                >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
            ),
        },
    ],
}

export const Footer = () => {
    const { ref, inView } = useAnimations()

    return (
        <footer ref={ref} className="container bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div>
                <div className={classNames('space-y-12 xl:grid xl:grid-cols-4 xl:gap-8', slideInBottom(inView))}>
                    <div className="col-span-2">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Spirit Staffing</span>
                            <SpiritStaffingLogoBlack className="w-[200px] md:w-[250px]" />
                        </Link>
                        <p className="mb-8 text-sm leading-6 md:w-3/4">*Placeholder tekst*</p>
                        <div className="flex space-x-6">
                            {navigation.social.map(item => (
                                <a key={item.name} href={item.href} className="hover:text-green800">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-green800 text-xl font-semibold leading-6">Bezoekadres</h3>
                        <div>
                            <p>Spiritlaan 2</p>
                            <p>1001AA Spiritstad</p>
                        </div>
                        <div>
                            <p>Spiritstraat 1</p>
                            <p>2002BB Spiritstad</p>
                        </div>
                        <div>
                            <p>
                                M <a href="mailto:contact@spiritstaffing.com">contact@spiritstaffing.com</a>
                            </p>
                            <p>
                                T <a href="0123456789">0123456789</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-10 md:mt-0">
                            <h3 className="text-green800 text-xl font-semibold leading-6">Direct naar</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.main.map(item => (
                                    <li key={item.name}>
                                        <a href={item.href} className="hover:text-green800 text-sm leading-6">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5">&copy; 2023 Spirit Staffing, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
