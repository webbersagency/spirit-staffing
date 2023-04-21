export type StatsImageProps = {
    title: string
    description: string
    link?: links[]
    variant?: string
    mirrored?: boolean
    subtitle?: string
}

type links = {
    title: string
    to: string
}
