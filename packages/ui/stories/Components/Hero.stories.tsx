import { Hero } from '../../components/Hero'

export default {
    title: 'Components/Hero',
}

export const hero = () => {
    return (
        <Hero
            title="Welkom bij SpiritStaffing"
            description="Bij SpiritStaffing zien we dat veel werkprocessen volledig digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar we moeten ook realistisch zijn. Het risico op misbruik van gegevens groeit en daarom is het vergroten van digitale weerbaarheid in organisaties essentieel. Het vraagt om aanpassingsvermogen, waarvoor de komende jaren meer kundige ICT professionals nodig zijn."
            link={[
                {
                    title: 'Bekijk onze dienstverlening',
                    href: '/',
                },
            ]}
        />
    )
}
