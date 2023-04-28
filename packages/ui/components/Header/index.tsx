'use client'
import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from '../../data/navigation'
import { SpiritStaffingLogoWhite } from '../../static/SpiritStaffingLogoFullWhite'
import { SpiritStaffingLogoBlack } from '../../static/SpiritStaffingLogoFullBlack'
import Link from 'next/link'
import useAnimations from 'web/src/utils/animations/useAnimations'
import classNames from 'classnames'
import { slideInLeft, slideInTop } from 'web/src/utils/animations/'
import { usePathname } from 'next/navigation'

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { ref, inView } = useAnimations()
    const [navbarScroll, setNavBarScroll] = useState<boolean>(false)
    const pathName = usePathname()

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavBarScroll(true)
        } else {
            setNavBarScroll(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll', changeBackground)
    })

    return (
        <header
            ref={ref}
            className={classNames(
                'fixed inset-x-0 top-0 z-50 transition-all duration-200',
                navbarScroll ? 'bg-green800 shadow-md' : 'bg-transparent'
            )}
        >
            <div className="container py-2">
                <nav className="flex items-center justify-between" aria-label="Global">
                    <Link href="/">
                        <span className="sr-only">Spirit Staffing</span>
                        <SpiritStaffingLogoWhite
                            className={classNames('w-[200px] md:w-[220px]', slideInLeft(inView))}
                        />
                    </Link>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                    <div className={classNames('hidden lg:ml-12 lg:flex lg:gap-x-14', slideInTop(inView))}>
                        {navigation.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames('text-sm font-semibold leading-6 text-white', {
                                    'border-b-2 border-b-white': pathName === item.href,
                                })}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Spirit Staffing</span>
                                <SpiritStaffingLogoBlack className="w-[150px]" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-6 py-12">
                                    {navigation.map(item => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames('block text-base font-semibold leading-7 text-dark', {
                                                'border-b-2 border-b-dark': pathName === item.href,
                                            })}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </header>
    )
}
