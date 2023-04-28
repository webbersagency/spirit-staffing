'use client'

import * as React from 'react'
import { FieldWrapperProps } from './types'
import { useFormContext } from 'react-hook-form'

const FieldWrapper = ({ name, label, children }: FieldWrapperProps) => {
    const { getFieldState } = useFormContext()
    const { error } = getFieldState(name)

    return (
        <>
            {label && (
                <label htmlFor={name} className="block text-sm font-semibold mb-2">
                    {label}
                </label>
            )}
            {children}
            {error && <p className="mt-2 text-white">{error?.message}</p>}
        </>
    )
}

FieldWrapper.displayName = 'FieldWrapper'

export default FieldWrapper
