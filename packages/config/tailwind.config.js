/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        container: {
            center: true,
            padding: '20px',
        },
        extend: {
            backgroundImage: {
                heroGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
            },
            colors: {
                dark: '#111111',
                green200: '#E8F7CD',
                green500: '#EBFF29',
                green800: '#003D26',
            },
            fontFamily: {
                silka: ['var(--font-silka)', ...fontFamily.sans],
                recoleta: ['var(--font-recoleta)', ...fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
