import { FeatureGrid } from '../../components/FeatureGrid'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default {
    title: 'Components/FeatureGrid',
}

export const featureGrid = () => {
    return (
        <FeatureGrid
            title="placeholder"
            description="placeholder"
            features={[
                {
                    name: 'Fullstack Development',
                    description:
                        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
                    icon: CloudArrowUpIcon,
                },
                {
                    name: 'Functioneel beheer',
                    description:
                        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
                    icon: LockClosedIcon,
                },
                {
                    name: 'Devops',
                    description:
                        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
                    icon: ArrowPathIcon,
                },
                {
                    name: 'Data Management en BI',
                    description:
                        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
                    icon: FingerPrintIcon,
                },
                {
                    name: 'Cyber Security',
                    description:
                        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
                    icon: LockClosedIcon,
                },
                {
                    name: 'IT Architectuur',
                    description:
                        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
                    icon: ArrowPathIcon,
                },
                {
                    name: 'Digitale transformatie',
                    description:
                        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
                    icon: FingerPrintIcon,
                },
            ]}
        />
    )
}
