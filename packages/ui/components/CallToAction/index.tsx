import { CallToActionProps } from './types'
import Button from '../Button'
import Link from 'next/link'

export const CallToAction = ({ title, description, link }: CallToActionProps) => {
    return (
        <div className="bg-green800 m-2 rounded-md">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
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
        </div>
    )
}