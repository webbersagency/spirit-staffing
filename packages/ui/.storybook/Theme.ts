import { create } from '@storybook/theming'

const primary = '#222'
const secondary = '#253fe4'

export default create({
    base: 'dark',
    brandTitle: 'Spirit Staffing',
    brandUrl: 'https://webbers.com/',
    brandImage: '/images/logo.svg',
    colorPrimary: primary,
    colorSecondary: secondary,
    appBg: primary,
    appContentBg: 'white',
    textColor: 'white',
    textInverseColor: primary,
    inputTextColor: primary,
})
