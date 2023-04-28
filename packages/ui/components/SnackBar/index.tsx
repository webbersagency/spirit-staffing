import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

const SnackBar = ({
    isSuccess,
    message,
    autoHide = 3000,
}: {
    isSuccess: boolean
    message: string
    autoHide?: number
}) => {
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        let submittedTimeout: NodeJS.Timeout

        // Add a micro delay on the shown property, to make sure the fadeIn animation works
        submittedTimeout = setTimeout(() => setIsShown(true), 100)

        if (autoHide) {
            submittedTimeout = setTimeout(() => setIsShown(false), autoHide)
        }

        return () => {
            clearTimeout(submittedTimeout)
        }
    }, [])

    return (
        <div
            className={classNames(
                'fixed w-full transform-gpu ease duration-500 left-0 bottom-0 h-16 flex items-center justify-center transition-all z-40 opacity-0 translate-y-full',
                {
                    '!opacity-100 !translate-y-[0] ': isShown,
                },
                {
                    'bg-red-600 text-white': !isSuccess,
                    'bg-green800 text-white': isSuccess,
                }
            )}
        >
            {isSuccess ? <CheckIcon className="w-6 h-6" /> : <XMarkIcon className="w-6 h-6" />}
            <p className="ml-3.5 font-medium text-inherit pt-0.5 leading-tight">{message}</p>
        </div>
    )
}

export default SnackBar
