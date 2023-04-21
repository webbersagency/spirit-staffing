type links = {
    title: string
    href: string
}

type links2 = {
    title: string
    href: string
}

export type HeroProps = {
    title: string
    description?: string

    link?: links[]

    link2?: links2[]
}
