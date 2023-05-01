import React, { ReactNode } from 'react'

export type FileUploadFieldProps = {
    name: string
    id?: string
    label?: string
    required?: boolean
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>
