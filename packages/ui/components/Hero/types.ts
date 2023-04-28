import { ReactNode } from 'react'

type links = {
    title: string
    href: string
}

export type HeroProps = {
    title: string
    description?: string
    link?: links[]
    coverImage: ReactNode
}
