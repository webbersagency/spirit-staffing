import { ReactNode } from 'react'

type feature = {
    name: string
    description: string
    icon: ReactNode
}

export type FeatureGridProps = {
    title: string
    description?: string
    features: feature[]
}
