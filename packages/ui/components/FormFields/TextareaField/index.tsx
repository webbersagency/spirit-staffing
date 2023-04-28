'use client'

import * as React from 'react'
import { forwardRef } from 'react'
import { TextAreaFieldProps } from './types'
import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'
import FieldWrapper from '../FieldWrapper'

const InputField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
    ({ className, placeholder, type = 'text', name, label, ...props }, ref) => {
        const { getFieldState } = useFormContext()
        const { error } = getFieldState(name)

        return (
            <FieldWrapper name={name} label={label}>
                <textarea
                    id={name}
                    name={name}
                    ref={ref}
                    rows={4}
                    className={classNames(
                        'block w-full rounded-md border-0 py-2.5 text-brand-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-brand-dark/70 focus:ring-2 focus:ring-inset focus:ring-green800 px-3 resize-none',
                        {
                            'border-red-500 placeholder-red-700 focus:border-red-500 focus:ring-red-500': error,
                        },
                        className
                    )}
                    placeholder={placeholder}
                    {...props}
                />
            </FieldWrapper>
        )
    }
)

InputField.displayName = 'InputField'

export default InputField
