const path = require('path')


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'BlockTwenty - Building and Funding the Protocols of Tomorrow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'blockchain, cryptocurrency, investments, ICO, token, smart contracts'},
      { hid: 'description', name: 'description', content: 'We help build and fund the protocols of tomorrow' },
      { hid: 'og:image', property: 'og:image', content: 'https://stark-beach-40759.herokuapp.com/blocktwenty_fb_og_image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
 loading: { color: '#FFFFFF' },
 /*
 ** Build configuration
 */
 build: {
   /*
   ** Run ESLint on save
   */
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
   ['nuxt-sass-resources-loader', path.resolve(__dirname, './assets/_variables.scss')],
   '@nuxtjs/font-awesome',
   '@nuxtjs/optimize'
 ],
 plugins: [
   { src: '~plugins/typeform.js', ssr: false },
   { src: '~plugins/webFontLoader.js', ssr: false },
   '~/plugins/vue-scrollto.js'
 ]
}
