const fadeIn = (inView: boolean) => ({
    'ease-out duration-500 transition-opacity transform-gpu': true,
    'opacity-5': !inView,
    'opacity-100': inView,
})

export default fadeIn
