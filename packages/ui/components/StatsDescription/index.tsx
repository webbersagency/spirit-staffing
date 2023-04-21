'use client'
import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { StatsDescriptionProps } from './types'
import classNames from 'classnames'
import useAnimations from 'web/src/app/utils/animations/useAnimations'
import { slideInLeft, slideInTop, stagger } from 'web/src/app/utils/animations'

export const StatsDescription = ({ title, description, stats, features }: StatsDescriptionProps) => {
    const { ref, inView } = useAnimations()
    const staggerDelay = 100

    return (
        <div ref={ref} className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className={classNames('text-3xl font-bold tracking-tight sm:text-4xl', slideInLeft(inView))}>
                        {title}
                    </h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className={classNames('lg:w-full lg:max-w-2xl lg:flex-1', slideInLeft(inView))}>
                            <p className="leading-8">{description}</p>
                        </div>
                        <div className="lg:flex lg:flex-1 lg:justify-center">
                            <dl className="space-y-8 xl:w-80">
                                {stats.map((stat, index) => (
                                    <div
                                        key={stat.value}
                                        style={stagger(index, staggerDelay)}
                                        className={classNames(
                                            'flex',
                                            slideInTop(inView),
                                            features ? 'flex-row items-center gap-x-6' : 'flex-col-reverse gap-y-4'
                                        )}
                                    >
                                        <dt className="text-base leading-7">{stat.label}</dt>
                                        {features && <CheckIcon className="text-green800 h-8 w-8" aria-hidden="true" />}
                                        <dd className="text-green800 text-2xl font-semibold tracking-tight">
                                            {stat.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
