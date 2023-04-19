/** @type {import('tailwindcss').Config} */
const defaultConfig = require('config/tailwind.config')

module.exports = {
    ...defaultConfig,
    content: ['./components/**/*.tsx', './layouts/**/*.tsx', './stories/**/*.tsx', './stories/**/*.stories.tsx'],
}
