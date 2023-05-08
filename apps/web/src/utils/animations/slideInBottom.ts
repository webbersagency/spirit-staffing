const slideInBottom = (inView: boolean) => ({
    'ease-out duration-500 transition-all transform-gpu': true,
    'opacity-5 translate-y-[40px]': !inView,
    'opacity-100 translate-y-0': inView,
})

export default slideInBottom
