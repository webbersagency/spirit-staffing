import Button from '../Button'
import Link from 'next/link'
import { HeroProps } from './types'
import classNames from 'classnames'
import * as React from 'react'

export const Hero = ({ title, description, link }: HeroProps) => {
    // const { ref, inView } = useAnimations()

    return (
        <div className="bg-green800">
            <div className="relative">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <svg
                            className="fill-green800 absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform lg:block"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="0,0 90,0 50,100 0,100" />
                        </svg>

                        <div
                            // ref={ref}
                            className={classNames(
                                'relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0'
                                // SlideInBottom(inView)
                            )}
                        >
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
                                <p className="mt-6 text-lg leading-8 text-white">{description}</p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    {link?.map(item => (
                                        <Button as={Link} href={item.href} variant="primary">
                                            {item.title}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
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
