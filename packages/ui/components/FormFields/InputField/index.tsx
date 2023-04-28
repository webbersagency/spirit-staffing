'use client'

import * as React from 'react'
import { forwardRef } from 'react'
import { InputFieldProps } from './types'
import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ className, placeholder, type = 'text', name, label, ...props }, ref) => {
        const { getFieldState } = useFormContext()
        const { error } = getFieldState(name)

        return (
            <>
                {label && (
                    <label htmlFor={name} className="block text-sm font-semibold mb-1">
                        {label}
                    </label>
                )}
                <input
                    id={name}
                    name={name}
                    ref={ref}
                    className={classNames(
                        'block w-full rounded-md h-11 border-0 py-1.5 text-brand-dark shadow-sm ring-1 ring-inset ring-white/70 placeholder:text-brand-dark/70 focus:ring-2 focus:ring-inset focus:ring-brand-cta px-3',
                        {
                            'border-red-500 placeholder-red-700 focus:border-red-500 focus:ring-red-500': error,
                        },
                        className
                    )}
                    type={type}
                    placeholder={placeholder}
                    {...props}
                />
                {error && <p className="mt-2 text-white">{error?.message}</p>}
            </>
        )
    }
)

InputField.displayName = 'InputField'

export default InputField
