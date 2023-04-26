'use client'
import Button from '../Button'
import React from 'react'
import Link from 'next/link'
import { StatsImageProps } from './types'
import useAnimations from 'web/src/app/utils/animations/useAnimations'
import classNames from 'classnames'
import { fadeIn, slideInLeft } from 'web/src/app/utils/animations/'

export const StatsImage = ({ title, description, link, variant, mirrored, subtitle, id, image }: StatsImageProps) => {
    const { ref, inView } = useAnimations()

    return (
        <div
            id={id}
            ref={ref}
            className={classNames(
                'relative',
                variant === 'dark' ? 'bg-green800' : variant === 'light' ? 'bg-green200' : 'bg-white'
            )}
        >
            <div className="">
                <div
                    className={classNames(
                        'bg-gray-50 lg:absolute lg:inset-y-0 lg:w-1/2 [&>img]:h-56 [&>img]:w-full [&>img]:object-cover [&>img]:lg:h-full',
                        mirrored ? 'lg:right-0' : 'lg:left-0',
                        fadeIn(inView)
                    )}
                >
                    {image}
                </div>
                <div className="container mx-auto grid lg:grid-cols-2">
                    <div
                        className={classNames('px-0 lg:px-10 xl:px-0', mirrored ? 'lg:col-start-1' : 'lg:col-start-2')}
                    >
                        <div
                            className={classNames(
                                'max-w-2xl lg:max-w-xl',
                                mirrored ? 'mx-auto xl:ml-0 xl:mr-auto' : 'mx-auto xl:ml-auto xl:mr-0'
                            )}
                        >
                            <p className={classNames('font-regular mb-6 text-2xl leading-8', slideInLeft(inView))}>
                                {subtitle}
                            </p>
                            <h2
                                className={classNames(
                                    'mt-2 text-3xl font-medium leading-9 tracking-tight sm:text-5xl',
                                    variant === 'dark' ? 'text-white' : 'text-green800',
                                    slideInLeft(inView)
                                )}
                            >
                                {title}
                            </h2>
                            <p
                                className={classNames(
                                    'mb-8 mt-6 whitespace-pre-wrap leading-8',
                                    variant === 'dark' ? 'text-white' : 'text-dark',
                                    slideInLeft(inView)
                                )}
                            >
                                {description}
                            </p>
                            <div className={classNames('flex items-center gap-x-6')}>
                                {link?.map((link, index) => (
                                    <Button as={Link} key={index} href={link.href} variant="primary">
                                        {link.title}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
