const path = require('path')
const envPath = path.resolve(__dirname, '../.env')
const storybookDotenv = require('dotenv').config({
    path: envPath,
})
export default {
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    core: {
        builder: {
            name: 'webpack5',
            options: {
                lazyCompilation: true,
                fsCache: true,
            },
        },
    },
    docs: {
        docsPage: false,
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            fastRefresh: true,
        },
    },
    staticDirs: ['../static'],
    stories: ['../stories/**/*.stories.tsx'],
    env: config => {
        return {
            ...config,
            ...storybookDotenv.parsed,
        }
    },
}
