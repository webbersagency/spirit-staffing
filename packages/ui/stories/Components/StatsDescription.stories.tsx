import { StatsDescription } from '../../components/StatsDescription'

export default {
    title: 'Components/StatsDescription',
}

export const statsDescription = () => {
    return (
        <StatsDescription
            title="Onze missie"
            description="We bieden flexibele oplossingen voor onze klanten. Het gaat hierbij om detachering, projectmatig werk en tijdelijk naar vaste aanstellingen. Ons brede netwerk van potentiële kandidaten, van junioren tot senioren, geeft ons de mogelijkheid om snel te reageren op vragen van klanten."
            stats={[
                { label: 'Transactions every 24 hours', value: '44 million' },
                { label: 'Assets under holding', value: '$119 trillion' },
                { label: 'New users annually', value: '46,000' },
            ]}
        />
    )
}
