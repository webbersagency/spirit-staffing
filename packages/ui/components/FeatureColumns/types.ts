import { ReactNode } from 'react'

export type FeatureColumnProps = {
    title: string
    description: string
    features: feature[]
}

type feature = {
    name: string
    description?: string
    icon: ReactNode
    buttonText?: string
    href?: string
}
