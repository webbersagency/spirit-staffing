'use client'
import { FeatureGridStepsProps } from './types'
import classNames from 'classnames'
import { slideInBottom, slideInTop, stagger } from 'web/src/utils/animations/'
import useAnimations from 'web/src/utils/animations/useAnimations'

export const FeatureGridSteps = ({ title, description, features, animationOptions, light }: FeatureGridStepsProps) => {
    const { ref, inView } = useAnimations(animationOptions)
    const staggerDelay = 100

    return (
        <div
            className={classNames('bg-white', {
                '!bg-green200': light,
            })}
        >
            <div ref={ref} className="container">
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
                <div className="relative mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-4xl">
                    <dl
                        className={classNames(
                            'grid max-w-xl grid-cols-1 gap-x-20 gap-y-10 after:inset-0 after:h-full after:w-fit after:translate-x-[28rem] after:border-r lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:after:absolute',
                            {
                                'after:!border-r-green800': light,
                            }
                        )}
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                style={stagger(index, staggerDelay)}
                                className={classNames(
                                    'relative flex gap-x-6 lg:odd:flex-row-reverse lg:odd:text-right lg:even:top-16',
                                    slideInTop(inView)
                                )}
                            >
                                <dt className="text-base font-semibold leading-7">
                                    <div className="bg-green800 flex h-12 w-12 items-center justify-center rounded-lg">
                                        <div className="h-8 w-8 text-white">{feature.icon}</div>
                                    </div>
                                </dt>
                                <div>
                                    <p className="text-base font-semibold leading-7">{feature.name}</p>
                                    <dd className="text-base leading-7">{feature.description}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
