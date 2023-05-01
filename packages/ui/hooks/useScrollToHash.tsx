import { MouseEventHandler, useEffect } from 'react'

const useScrollToHash = (trigger: true) => {
    // useEffect(() => {
    //     const anchorScrollTo = (e: MouseEventHandler<HTMLAnchorElement>) => e.preventDefault() && scrollToHashElement()
    //
    //     const scrollToHashElement = () => {
    //         const { hash } = window.location
    //         const elementToScroll = document.getElementById(hash?.replace('#', ''))
    //
    //         if (!elementToScroll) return
    //
    //         const header = document.querySelector('header')
    //         const offset = header?.offsetHeight || 0
    //
    //         console.log(
    //             'elementToScroll',
    //             elementToScroll,
    //             elementToScroll.getBoundingClientRect().top,
    //             document.documentElement.scrollTop,
    //             offset,
    //             elementToScroll.getBoundingClientRect().top + document.documentElement.scrollTop - offset
    //         )
    //
    //         window.scrollTo({
    //             top: elementToScroll.getBoundingClientRect().top + document.documentElement.scrollTop - offset,
    //             behavior: 'smooth',
    //         })
    //     }
    //
    //     scrollToHashElement()
    //     window.addEventListener('hashchange', scrollToHashElement)
    //
    //     const anchorLinks = document.querySelectorAll('a[href*="#"]')
    //     anchorLinks.forEach(anchorLink => anchorLink.addEventListener('click', anchorScrollTo))
    //
    //     return () => {
    //         window.removeEventListener('hashchange', scrollToHashElement)
    //         anchorLinks.forEach(anchorLink => anchorLink.removeEventListener('click', anchorScrollTo))
    //     }
    // }, [])

    return null
}

export default useScrollToHash
