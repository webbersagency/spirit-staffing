import * as React from 'react'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import Link from 'next/link'

export type ButtonElementType = 'a' | 'button' | typeof Link

type ButtonComponentProps<T extends ButtonElementType> = ComponentPropsWithoutRef<T> & {
    as: ButtonElementType
    loading?: boolean
    variant?: 'primary' | 'outline' | 'cta'
    children: ReactNode
}

export type ButtonProps<T extends ButtonElementType> = ButtonComponentProps<T> &
    Omit<React.ComponentPropsWithRef<T>, keyof ButtonComponentProps<T>>
