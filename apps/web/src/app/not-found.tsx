import Button from 'ui/components/Button'
import Link from 'next/link'

export default async function NotFound() {
    return (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-56 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold">404</p>
                <h1 className="text-green800 mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 ">Sorry, we konden de pagina waar je naar zocht niet vinden.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button as={Link} href="/" variant="primary">
                        Let's get in touch
                    </Button>
                </div>
            </div>
        </div>
    )
}
