'use client'
import { CallToActionProps } from './types'
import Button from '../Button'
import Link from 'next/link'
import useAnimations from 'web/src/app/utils/animations/useAnimations'
import classNames from 'classnames'
import { slideInBottom } from 'web/src/app/utils/animations/'

export const CallToAction = ({ title, description, link }: CallToActionProps) => {
    const { ref, inView } = useAnimations()

    return (
        <div ref={ref} className="bg-green800">
            <div className={classNames('container text-center lg:max-w-[1200px]', slideInBottom(inView))}>
                <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl">{title}</h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">{description}</p>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    {link.map((link, index) => (
                        <Button as={Link} key={index} href={link.href} variant="primary">
                            {link.title}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
