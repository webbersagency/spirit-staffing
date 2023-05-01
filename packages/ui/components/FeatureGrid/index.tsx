'use client'
import { FeatureGridProps } from './types'
import classNames from 'classnames'
import { slideInBottom, slideInTop, stagger } from 'web/src/utils/animations/'
import useAnimations from 'web/src/utils/animations/useAnimations'

export const FeatureGrid = ({ title, description, features, animationOptions }: FeatureGridProps) => {
    const { ref, inView } = useAnimations(animationOptions)
    const staggerDelay = 100

    return (
        <div className="container bg-white">
            <div ref={ref}>
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2
                        className={classNames(
                            'text-gray-90 mt-2 text-3xl font-medium tracking-tight sm:text-5xl',
                            slideInBottom(inView)
                        )}
                    >
                        {title}
                    </h2>
                    <p className={classNames('mt-6 whitespace-pre-wrap text-lg leading-8', slideInBottom(inView))}>
                        {description}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature, index) => (
                            <div
                                key={feature.name}
                                style={stagger(index, staggerDelay)}
                                className={classNames('relative pl-20', slideInTop(inView))}
                            >
                                <dt className="text-base font-semibold leading-7">
                                    <div className="bg-green800 absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg">
                                        <div className="h-8 w-8 text-white">{feature.icon}</div>
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
