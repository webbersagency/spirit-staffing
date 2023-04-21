import * as React from 'react'
import { ComponentPropsWithoutRef } from 'react'
import { ButtonElementType, ButtonProps } from './types'

const classNames = require('classnames')

const Button = <T extends ButtonElementType>({
    as: Element,
    className,
    variant,
    loading,
    children,
    ...props
}: ButtonProps<T>) => {
    const btn = 'rounded-full font-bold px-6 py-4 font-silka text-base transition-600 transition md:px-10 md:py-4'
    const primary = `${btn} bg-green500 hover:bg-dark hover:text-white`
    const outline = `${btn} bg-transparent border-green500`

    return (
        // @ts-ignore
        <Element
            className={classNames(
                `disabled:pointer-events-none disabled:opacity-50`,
                {
                    [outline]: variant === 'outline',
                    [primary]: variant === 'primary',
                },
                className
            )}
            {...(props as ComponentPropsWithoutRef<T>)}
        >
            {children}
        </Element>
    )
}

export default Button
