import { ReactNode } from 'react'

type links = {
    title: string
    href?: string
    onClick?: () => void
    scroll?: boolean
}

export type HeroProps = {
    title: string
    description?: string
    link?: links[]
    coverImage: ReactNode
}
