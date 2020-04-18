const getApiUrl = () => {
  if (process.env.API_URL) {
    return process.env.API_URL
  }

  if (process.env.npm_config_lambda) {
    return 'http://localhost:9000/.netlify/functions/main'
  }

  return 'http://localhost:4000'
}

// eslint-disable-next-line nuxt/no-cjs-in-config
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css'
      }
    ]
  },
  css: ['@/assets/scss/reset.scss'],
  plugins: [
    '~/plugins/layoutComponents.js' // Automatically registers components from the layout folder
  ],
  buildModules: [],
  modules: ['@nuxtjs/apollo', 'portal-vue/nuxt', 'nuxt-buefy'],
  generate: {
    fallback: true
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: getApiUrl()
      }
    }
  },
  build: {
    extend(config, ctx) {
    }
  }
}
