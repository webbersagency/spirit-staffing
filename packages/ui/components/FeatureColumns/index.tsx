'use client'

import useAnimations from 'web/src/utils/animations/useAnimations'
import classNames from 'classnames'
import { slideInLeft, stagger } from 'web/src/utils/animations'
import { FeatureColumnProps } from './types'
import Link from 'next/link'
import Button from '../Button'

export const FeatureColumns = ({ title, description, features }: FeatureColumnProps) => {
    const { ref, inView } = useAnimations()
    const staggerDelay = 100

    return (
        <div ref={ref} className="container bg-white">
            <div className={classNames('mx-auto max-w-3xl lg:mx-0', slideInLeft(inView))}>
                <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">{title}</h2>
                <p className="mt-6 whitespace-pre-wrap leading-8">{description}</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl
                    className={classNames(
                        'grid max-w-xl grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-3',
                        features.length >= 4 && 'lg:grid-cols-4'
                    )}
                >
                    {features.map((feature, index) => (
                        <div
                            key={feature.name}
                            style={stagger(index, staggerDelay)}
                            className={classNames('flex flex-col', slideInLeft(inView))}
                        >
                            <dt className="text-green800 mb-2 text-2xl font-semibold tracking-tight">
                                <div className="bg-green800 mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                                    <div className="h-8 w-8 text-white">{feature.icon}</div>
                                </div>
                                {feature.name}
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7">
                                <p className="flex-auto whitespace-pre-wrap leading-7">{feature.description}</p>
                            </dd>
                            {feature.buttonText && (
                                <Button as={Link} variant="primary" href={feature?.href} className="w-fit">
                                    {feature?.buttonText}
                                </Button>
                            )}
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
