/** @type {import('tailwindcss').Config} */
const defaultConfig = require('config/tailwind.config')

module.exports = {
    ...defaultConfig,
    content: [
        '../../packages/ui/components/**/*.tsx',
        '../../packages/ui/layouts/**/*.tsx',
        '../../packages/ui/stories/**/*.tsx',
        './src/pages/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/utils/animations/*.{ts,tsx}',
    ],
}
