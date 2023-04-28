import { Hero } from '../../components/Hero'

export default {
    title: 'Components/Hero',
}

export const hero = () => {
    return (
        <Hero
            coverImage={<img src={'../../images/heroCoverImage.png'} alt="cover image" />}
            title="Welkom bij SpiritStaffing"
            description="Bij SpiritStaffing zien we dat veel werkprocessen volledig digitaliseren. Fantastisch natuurlijk, met een wereld vol kansen. Maar we moeten ook realistisch zijn. Het risico op misbruik van gegevens groeit en daarom is het vergroten van digitale weerbaarheid in organisaties essentieel. Het vraagt om aanpassingsvermogen, waarvoor de komende jaren meer kundige IT professionals nodig zijn."
            link={[
                {
                    title: 'Bekijk onze opdrachtgevers',
                    href: '/',
                },
            ]}
        />
    )
}
