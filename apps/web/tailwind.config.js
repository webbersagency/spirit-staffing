/** @type {import('tailwindcss').Config} */
const defaultConfig = require('config/tailwind.config')

module.exports = {
    ...defaultConfig,
    content: [
        '../../packages/ui/components/**/*.tsx',
        // '../../packages/ui/icons/**/*.tsx',
        '../../packages/ui/layouts/**/*.tsx',
        '../../packages/ui/stories/**/*.tsx',
        // '../../packages/ui/utils/**/*.tsx',
        './src/pages/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
        // './components/**/*.{js,ts,jsx,tsx}',
    ],
}
