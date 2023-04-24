export type StatsImageProps = {
    id?: string
    title: string
    description: string
    link?: links[]
    link2?: links[]
    variant?: string
    mirrored?: boolean
    subtitle?: string
}

type links = {
    title: string
    to: string
}
