import { ReactNode } from 'react'
import { IntersectionOptions } from 'react-intersection-observer'

type feature = {
    name?: string
    description: string
    icon: ReactNode
}

export type FeatureGridStepsProps = {
    title?: string
    description?: string
    features: feature[]
    animationOptions?: IntersectionOptions
}
