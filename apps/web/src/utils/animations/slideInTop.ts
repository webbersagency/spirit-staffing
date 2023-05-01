const slideInTop = (inView: boolean) => ({
    'ease-out duration-500 transition-all transform-gpu': true,
    'opacity-0 -translate-y-[40px]': !inView,
    'opacity-1 translate-y-0': inView,
})

export default slideInTop
