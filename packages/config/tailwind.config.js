/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        container: {
            center: true,
            padding: '20px',
        },
        extend: {
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
    plugins: [],
}
