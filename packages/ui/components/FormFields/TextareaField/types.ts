import React, { ReactNode } from 'react'

export type TextAreaFieldProps = {
    name: string
    id?: string
    label?: string
    required?: boolean
} & Partial<React.TextareaHTMLAttributes<HTMLTextAreaElement>>
