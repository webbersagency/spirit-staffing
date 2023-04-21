'use client'
import { FeatureGridProps } from './types'
import useAnimations from 'web/src/app/utils/animations/useAnimations'
import classNames from 'classnames'
import { slideInBottom, slideInTop, stagger } from 'web/src/app/utils/animations'

export const FeatureGrid = ({ title, description, features }: FeatureGridProps) => {
    const { ref, inView } = useAnimations()
    const staggerDelay = 100

    return (
        <div className="bg-white py-24 sm:py-32">
            <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2
                        className={classNames(
                            'text-gray-90 mt-2 text-3xl font-bold tracking-tight sm:text-4xl',
                            slideInBottom(inView)
                        )}
                    >
                        {title}
                    </h2>
                    <p className={classNames('mt-6 text-lg leading-8', slideInBottom(inView))}>{description}</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature, index) => (
                            <div
                                key={feature.name}
                                style={stagger(index, staggerDelay)}
                                className={classNames('relative pl-16', slideInTop(inView))}
                            >
                                <dt className="text-base font-semibold leading-7">
                                    <div className="bg-green800 absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                                        <div className="h-6 w-6 text-white">{feature.icon}</div>
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
    )
}
