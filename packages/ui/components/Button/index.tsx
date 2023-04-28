import * as React from 'react'
import { ComponentPropsWithoutRef } from 'react'
import { ButtonElementType, ButtonProps } from './types'
import LoadingIcon from '../../icons/LoadingIcon'

const classNames = require('classnames')

const Button = <T extends ButtonElementType>({
    as: Element,
    className,
    variant,
    loading,
    children,
    small,
    ...props
}: ButtonProps<T>) => {
    const btnReset = 'relative decoration-0 select-none cursor-pointer outline-0 justify-center items-center flex'
    const disabledBtn = 'disabled:opacity-70 disabled:pointer-events-none'
    const btn =
        'rounded-full font-bold px-6 py-4 font-silka text-base transition-600 transition md:px-10 md:py-4 text-center'
    const primary = `${btn} bg-green500 hover:bg-dark hover:text-white`
    const outline = `${btn} bg-transparent border-green500`
    const baseSize = 'min-h-[36px] px-4 py-1 text-sm'
    const size = small ? baseSize : `${baseSize} lg:min-h-[44px] lg:px-8 text-[15px]`
    const disabledProps = loading ? { disabled: true } : {}

    return (
        // @ts-ignore
        <Element
            className={classNames(
                btnReset,
                disabledBtn,
                btn,
                size,
                {
                    [outline]: variant === 'outline',
                    [primary]: variant === 'primary',
                },
                className
            )}
            {...disabledProps}
            {...(props as ComponentPropsWithoutRef<T>)}
        >
            {children}
            {loading && (
                <div className="ml-2 -mr-2">
                    <LoadingIcon className="w-6 h-6" />
                </div>
            )}
        </Element>
    )
}

export default Button
