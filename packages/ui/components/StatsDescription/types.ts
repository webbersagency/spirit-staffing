export type StatsDescriptionProps = {
    title: string
    description: string
    stats: stat[]
    features?: boolean
}

type stat = {
    value: string
    label?: string
}
