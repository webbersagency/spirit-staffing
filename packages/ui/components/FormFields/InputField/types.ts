import React, { ReactNode } from 'react'
import { FieldError, FieldErrors, FieldErrorsImpl, Merge } from 'react-hook-form'

export type InputFieldProps = {
    name: string
    id?: string
    type?: string
    label?: string
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
    errors?: FieldErrors
    required?: boolean
    button?: ReactNode
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>
