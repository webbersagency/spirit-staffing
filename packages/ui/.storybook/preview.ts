import '../styles/global.css'
// import '../fonts/files/silka.css'
// import '../fonts/files/recoleta.css'

export const parameters = {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
