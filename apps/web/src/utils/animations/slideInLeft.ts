const slideInLeft = (inView: boolean) => ({
    'ease-out duration-500 transition-all transform-gpu': true,
    'opacity-5 -translate-x-[40px]': !inView,
    'opacity-100 translate-x-0': inView,
})

export default slideInLeft
