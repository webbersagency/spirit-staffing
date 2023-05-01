'use client'

import * as React from 'react'
import { forwardRef } from 'react'
import { FileUploadFieldProps } from './types'
import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'
import FieldWrapper from '../FieldWrapper'
import { PhotoIcon, XMarkIcon } from '@heroicons/react/20/solid'
import humanFileSize from '../../../utils/humanFileSize'

const FileUploadField = forwardRef<HTMLInputElement, FileUploadFieldProps>(
    ({ className, placeholder, name, label, ...props }, ref) => {
        const { watch, resetField } = useFormContext()
        const attachment: FileList = watch(name)

        return (
            <FieldWrapper name={name} label={label}>
                {attachment && attachment.length > 0 ? (
                    <div className="inline-flex items-center border rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        {attachment[0].name} ({humanFileSize(attachment[0].size, true)}){' '}
                        <XMarkIcon
                            className="w-5 h-5 cursor-pointer translate-x-1 p-2 -m-2 box-content hover:text-red-600"
                            onClick={() => {
                                resetField(name)
                            }}
                        />
                    </div>
                ) : (
                    <label
                        htmlFor={name}
                        className="mt-2 cursor-pointer flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-4 hover:bg-green200/10"
                    >
                        <div className="text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                            <div className="mt-1f flex text-sm leading-6 text-gray-600">
                                <div className="relative rounded-md font-medium text-green800 leading-tight">
                                    <span>Upload een bestand</span>
                                    <input
                                        id={name}
                                        name={name}
                                        ref={ref}
                                        type="file"
                                        accept=".pdf, .doc, .docx"
                                        className={classNames(
                                            'sr-only block w-full rounded-md border-0 py-2.5 text-brand-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-brand-dark/70 px-3 resize-none',
                                            className
                                        )}
                                        placeholder={placeholder}
                                        {...props}
                                    />
                                </div>
                                <p className="pl-1 text-sm leading-tight">of drag & drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">.pdf, .doc, .docx (max. 10 MB)</p>
                        </div>
                    </label>
                )}
            </FieldWrapper>
        )
    }
)

FileUploadField.displayName = 'FileUploadField'

export default FileUploadField
