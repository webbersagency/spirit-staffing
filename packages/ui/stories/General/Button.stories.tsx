import Button from '../../components/Button'
import * as React from 'react'
import Link from 'next/link'

export default {
    title: 'General/Button',
}

export const button = () => {
    return (
        <Button as={Link} href="/" variant="primary">
            Lets get in touch
        </Button>
    )
}
