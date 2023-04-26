import { ReactNode } from 'react'

export type StatsImageProps = {
    id?: string
    title: string
    description: string
    link?: links[]
    variant?: string
    mirrored?: boolean
    subtitle?: string
    image: ReactNode
}

type links = {
    title: string
    href: string
}
