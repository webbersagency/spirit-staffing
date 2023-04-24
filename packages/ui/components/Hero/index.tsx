'use client'
import Button from '../Button'
import Link from 'next/link'
import { HeroProps } from './types'
import classNames from 'classnames'
import * as React from 'react'
import useAnimations from 'web/src/app/utils/animations/useAnimations'
import { fadeIn, slideInBottom } from 'web/src/app/utils/animations'

export const Hero = ({ title, description, link, link2 }: HeroProps) => {
    const { ref, inView } = useAnimations()

    return (
        <div ref={ref} className="bg-green800">
            <div className="relative">
                <div className="container">
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <div className={classNames('relative lg:pr-0', slideInBottom(inView))}>
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
                                <p className="mt-6 text-lg leading-8 text-white">{description}</p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    {link?.map(item => (
                                        <Button as={Link} href={item.href} variant="primary">
                                            {item.title}
                                        </Button>
                                    ))}
                                    {link2?.map(item => (
                                        <Button as={Link} href={item.href} variant="primary">
                                            {item.title}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames('bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2', fadeIn(inView))}>
                    <svg
                        className="fill-green800 absolute inset-y-0 -left-40 hidden h-full w-80 translate-x-1/2 transform  lg:block xl:-left-80"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="0,0 90,0 50,100 0,100" />
                    </svg>
                    <img
                        className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
