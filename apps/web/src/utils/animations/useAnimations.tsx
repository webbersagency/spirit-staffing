import { IntersectionOptions, useInView } from 'react-intersection-observer'

const useAnimations = (options?: IntersectionOptions) => {
    return useInView({
        rootMargin: '0% 0% -20% 0%',
        triggerOnce: true,
        fallbackInView: true,
        ...options,
    })
}

export default useAnimations
