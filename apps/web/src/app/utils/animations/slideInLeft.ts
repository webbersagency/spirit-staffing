const slideInLeft = (inView: boolean) => ({
    'ease-out duration-500 transition-all transform-gpu': true,
    'opacity-0 -translate-x-[40px]': !inView,
    'opacity-1 translate-x-0': inView,
})

export default slideInLeft
