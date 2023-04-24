'use client'
import { CallToActionProps } from './types'
import Button from '../Button'
import Link from 'next/link'
import useAnimations from 'web/src/app/utils/animations/useAnimations'
import classNames from 'classnames'
import { slideInBottom } from 'web/src/app/utils/animations'

export const CallToAction = ({ title, description, link }: CallToActionProps) => {
    const { ref, inView } = useAnimations()

    return (
        <div ref={ref} className="bg-green800">
            <div className={classNames('container mx-auto max-w-2xl text-center', slideInBottom(inView))}>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">{description}</p>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    {link.map(link => (
                        <Button as={Link} href={link.to} variant="primary">
                            {link.title}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
