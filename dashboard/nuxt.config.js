module.exports = {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  plugins: ['~/plugins/globalComponents.js'],
  buildModules: ['@nuxtjs/vuetify'],
  modules: ['@nuxtjs/apollo', 'portal-vue/nuxt'],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.API_URL || 'http://localhost:4000',
      }
    }
  },
  vuetify: {
    customVariables: ['./assets/variables.scss']
  },
  build: {
    extend(config, ctx) {}
  }
}
