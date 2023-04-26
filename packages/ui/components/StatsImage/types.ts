import { ReactNode } from 'react'

export type StatsImageProps = {
    id?: string
    title: string
    description: string
    link?: links[]
    link2?: links[]
    variant?: string
    mirrored?: boolean
    subtitle?: string
    image: ReactNode
}

type links = {
    title: string
    to: string
}
