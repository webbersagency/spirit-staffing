import { ReactNode } from 'react'
import { IntersectionOptions } from 'react-intersection-observer'

type feature = {
    name: string
    description: string
    icon: ReactNode
}

export type FeatureGridProps = {
    title: string
    description?: string
    features: feature[]
    animationOptions?: IntersectionOptions
}
