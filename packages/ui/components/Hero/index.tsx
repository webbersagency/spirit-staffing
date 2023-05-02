'use client'
import Button from '../Button'
import Link from 'next/link'
import { HeroProps } from './types'
import classNames from 'classnames'
import * as React from 'react'
import { usePathname } from 'next/navigation'
import useAnimations from 'web/src/utils/animations/useAnimations'
import { fadeIn, slideInBottom } from 'web/src/utils/animations/'
import { routes } from 'web/src/lib/routes'
import { useEffect } from 'react'

export const Hero = ({ title, description, link, coverImage }: HeroProps) => {
    const { ref, inView } = useAnimations({ rootMargin: '0%' })
    const pathName = usePathname()

    return (
        <div ref={ref} className="bg-green800">
            <div className="relative">
                <div
                    className={classNames(
                        'container flex items-center',
                        [routes.home, routes.services].includes(pathName)
                            ? 'h-full xl:min-h-[98vh]'
                            : 'h-full sm:min-h-[70vh]'
                    )}
                >
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <div className={classNames('relative lg:pr-0', slideInBottom(inView))}>
                            <div className="mx-auto lg:mx-0 lg:max-w-6xl">
                                <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl">{title}</h1>
                                <p className="mt-6 whitespace-pre-wrap text-white">{description}</p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    {link?.map(({ title, ...item }, index) => (
                                        <Button as={Link} key={index} variant="primary" {...item}>
                                            {title}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames('bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2', fadeIn(inView))}>
                    <svg
                        className="fill-green800 absolute inset-y-0 -left-40 z-[2] hidden h-full w-80 translate-x-1/2 transform  lg:block xl:-left-80"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="0,0 90,0 50,100 0,100" />
                    </svg>
                    <div className="bg-heroGradient absolute inset-0 z-[1] hidden h-[300px] w-full lg:block"></div>
                    <div className="w-full h-full [&_img]:w-full [&_img]:h-full [&_img]:object-cover">{coverImage}</div>
                </div>
            </div>
        </div>
    )
}
