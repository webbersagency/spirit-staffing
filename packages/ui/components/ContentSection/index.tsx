import { CheckCircleIcon } from '@heroicons/react/20/solid'

export const ContentSection = () => {
    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7">
                <p className="text-base font-semibold leading-7">Introducing</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">JavaScript for Beginners</h1>
                <p className="mt-6 text-xl leading-8">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui,
                    diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque
                    eget. Eleifend egestas fringilla sapien.
                </p>
                <div className="mt-10 max-w-2xl">
                    <p>
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                        sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
                        varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                        enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                    <ul role="list" className="mt-8 max-w-xl space-y-8">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold">Data types.</strong> Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor
                                cupiditate blanditiis ratione.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold">Loops.</strong> Anim aute id magna aliqua ad ad non
                                deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold">Events.</strong> Ac tincidunt sapien vehicula erat
                                auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                            </span>
                        </li>
                    </ul>
                    <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                        auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
                        ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                    </p>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight">From beginner to expert in 3 hours</h2>
                    <p className="mt-6">
                        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum
                        urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                        pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
                        Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
                    </p>
                    <figure className="border-green800 mt-10 border-l pl-9">
                        <blockquote className="font-semibold ">
                            <p>
                                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh
                                ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget
                                cras. Sem volutpat enim tristique.”
                            </p>
                        </blockquote>
                        <figcaption className="mt-6 flex gap-x-4">
                            <img
                                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div className="text-sm leading-6">
                                <strong className="font-semibold">Maria Hill</strong> – Marketing Manager
                            </div>
                        </figcaption>
                    </figure>
                    <p className="mt-10">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                        sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
                        varius sit neque erat velit.
                    </p>
                </div>
                <div className="mt-16 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight ">Everything you need to get up and running</h2>
                    <p className="mt-6">
                        Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat
                        cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra
                        ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor
                        venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.
                    </p>
                    <p className="mt-8">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                        sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
                        varius sit neque erat velit.
                    </p>
                </div>
            </div>
        </div>
    )
}
