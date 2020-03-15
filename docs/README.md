# Dashboard


## Main setup

The repository consists of 2 apps: 

1. **Apollo API** Built with Apollo Server Lambda meaning its a Serverless GraphQL API for events
2. **Dashboard** Built with Nuxt and Vuetify. Its running as a SPA (Single Page App)

### Continuous Integration

Both apps are being deployed to Netlify under 1 app. For this to work they both need to be 'merged'. Here's how that works:

1. npm install is triggered for both apps (see package.json)
2. npm build is triggered for both apps
3. A deploy script is triggered. Which does the following:
    1. It creates a 'dist folder'
    2. It puts the built API into it



