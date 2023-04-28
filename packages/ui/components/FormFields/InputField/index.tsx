'use client'

import * as React from 'react'
import { forwardRef } from 'react'
import { InputFieldProps } from './types'
import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'
import FieldWrapper from '../FieldWrapper'

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ className, placeholder, type = 'text', name, label, ...props }, ref) => {
        const { getFieldState } = useFormContext()
        const { error } = getFieldState(name)

        return (
            <FieldWrapper name={name} label={label}>
                <input
                    id={name}
                    name={name}
                    ref={ref}
                    className={classNames(
                        'block w-full rounded-md h-11 border-0 py-1.5 text-brand-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-brand-dark/70 focus:ring-2 focus:ring-inset focus:ring-green800 px-3',
                        {
                            'border-red-500 placeholder-red-700 focus:border-red-500 focus:ring-red-500': error,
                        },
                        className
                    )}
                    type={type}
                    placeholder={placeholder}
                    {...props}
                />
            </FieldWrapper>
        )
    }
)

InputField.displayName = 'InputField'

export default InputField
