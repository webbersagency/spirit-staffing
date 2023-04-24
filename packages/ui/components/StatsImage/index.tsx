'use client'
import Button from '../Button'
import React from 'react'
import Link from 'next/link'
import { StatsImageProps } from './types'
import useAnimations from 'web/src/app/utils/animations/useAnimations'
import classNames from 'classnames'
import { fadeIn, slideInLeft } from 'web/src/app/utils/animations'

export const StatsImage = ({ title, description, link, link2, variant, mirrored, subtitle, id }: StatsImageProps) => {
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
                <img
                    className={classNames(
                        'h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:h-full lg:w-1/2',
                        mirrored ? 'lg:right-0' : 'lg:left-0',
                        fadeIn(inView)
                    )}
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                />
                <div className="container mx-auto grid lg:grid-cols-2">
                    <div
                        className={classNames('px-0 lg:px-10 xl:px-0', mirrored ? 'lg:col-start-1' : 'lg:col-start-2')}
                    >
                        <div
                            className={classNames(
                                'mx-auto max-w-2xl lg:max-w-lg',
                                mirrored ? 'lg:text-right' : 'text-left'
                            )}
                        >
                            <p className={classNames('mb-6 text-2xl font-semibold leading-8', slideInLeft(inView))}>
                                {subtitle}
                            </p>
                            <h2
                                className={classNames(
                                    'mt-2 text-3xl font-bold tracking-tight sm:text-4xl',
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
                            <div
                                className={classNames(
                                    'flex items-center gap-x-6',
                                    mirrored && 'justify-start lg:justify-end'
                                )}
                            >
                                {link?.map(link => (
                                    <Button as={Link} href={link.to} variant="primary">
                                        {link.title}
                                    </Button>
                                ))}
                                {link2?.map(link => (
                                    <Button as={Link} href={link.to} variant="primary">
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
