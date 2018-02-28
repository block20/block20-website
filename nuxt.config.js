module.exports = {

  // Header metadata

  head: {
    title: 'Block 20 Group – Building and Funding the Protocols of Tomorrow',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'blockchain, cryptocurrency, investments, ICO, token, smart contracts'},
      { name: 'description', hid: 'description', content: 'We help build and fund the protocols of tomorrow' },

      // Open graph
      { name: 'og:title', content: 'Block 20 Group' },
      { name: 'og:description', content: 'We help build and fund the protocols of tomorrow' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://blocktwenty.com/' },
      { name: 'og:image', content: 'https://blocktwenty.com/og-image.png' },

      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@Block20Group' },
      { name: 'twitter:title', content: 'Block 20 Group' },
      { name: 'twitter:description', content: 'We help build and fund the protocols of tomorrow' },
      { name: 'twitter:image', content: 'https://blocktwenty.com/og-image.png' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Customize the progress bar color

  loading: { color: '#FFFFFF' },

  // Build configuration

  build: {

    // Run ESLint on save

    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/optimize'
  ],

  plugins: [
    { src: '~plugins/webFontLoader.js', ssr: false },
    '~/plugins/vueScrollTo.js'
  ]
}
