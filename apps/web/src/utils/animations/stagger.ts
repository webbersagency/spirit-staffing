const stagger = (index: number, staggerDelay?: number, maxStagger?: number) => {
    const delay = staggerDelay || 150
    const max = maxStagger || 6

    return { transitionDelay: `${index <= max ? index * delay : max * delay}ms` }
}

export default stagger
