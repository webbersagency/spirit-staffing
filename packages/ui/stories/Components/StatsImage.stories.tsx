import { StatsImage } from '../../components/StatsImage'
import React from 'react'

export default {
    title: 'Components/StatsImage',
}

export const statsImage = () => {
    return (
        <StatsImage
            image={<img src={'/images/spirit-staffing-visual1.jpg'} alt="cover image" />}
            title="Professionals die het verschil maken"
            description={
                'Het vinden van een juiste werkomgeving is uitdagend. \n' +
                '\n' +
                'Het betekent veel meer dan een plek om alleen te werken. Het gaat over het ontwikkelen van talent. Het ontdekken van nieuwe mogelijkheden. Het maken van impact. \n' +
                '\n' +
                'Het gaat om het maken van connecties, binnen een goede balans van privé en professionele ambities. '
            }
            variant="light"
            link={[
                {
                    title: 'SpiritStart',
                    href: '/kandidaten/#spiritStart',
                },
                {
                    title: 'SpiritPro',
                    href: '/kandidaten/#spiritPro',
                },
            ]}
        />
    )
}
