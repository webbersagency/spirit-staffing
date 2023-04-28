import React, { ReactNode } from 'react'

export type TextAreaFieldProps = {
    name: string
    id?: string
    type?: string
    label?: string
    required?: boolean
    button?: ReactNode
} & Partial<React.TextareaHTMLAttributes<HTMLTextAreaElement>>
