module.exports = {
  title: 'Developer Docs',
  description: 'Technical documentation for all developers',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Ecosystem',
        ariaLabel: 'Ecosystem',
        items: [
          {
            text: 'Dashboard',
            items: [
              { text: 'Nuxt.JS', link: 'https://nuxtjs.org/' },
              { text: 'Vue Apollo', link: 'https://vue-apollo.netlify.com/' },
              { text: 'Buefy', link: 'https://buefy.org/' }
            ]
          },
          {
            text: 'API',
            items: [
              { text: 'Apollo Server', link: 'https://www.apollographql.com/docs/apollo-server/' },
              { text: 'Apollo Server Lambda', link: 'https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-lambda' },
              { text: 'Netlify Lambda', link: 'https://github.com/netlify/netlify-lambda'}
            ]
          },
          {
            text: 'Docs',
            items: [
              { text: 'Vuepress', link: 'https://vuepress.vuejs.org/' }
            ]
          }
        ]
      },
      { text: 'Repository', link: 'https://github.com/events-manager/events-manager' },
    ],
    sidebar: {
      '/guide': [
        {
          title: 'Home',
          path: '/',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/introduction',
            '/guide/vision-mission',
            '/guide/collaborators',
            '/guide/onboarding'
          ]
        },
        {
          title: 'Dashboard',
          path: '/dashboard',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/dashboard/getting-started',
            '/guide/dashboard/ui-composition'
          ]
        }
      ]
    }
  }
}
