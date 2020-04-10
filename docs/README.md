# Dashboard


## Main setup

The repository consists of 2 apps: 

1. **Apollo API** Built with Apollo Server Lambda meaning its a Serverless GraphQL API for events
2. **Dashboard** Built with Nuxt and Vuetify. Its running as a SPA (Single Page App)

### Continuous Integration

Both apps are being deployed to Netlify under 1 app. For this to work they both need to be 'merged'. Here's how that works:

By default Netlify triggers 2 commands:

```bash
npm install
```
And

```bash
npm run build
```

That's why in this repo the root package.json forms the connection between the 2 apps. It does the following

1. `npm install` triggers the install for both apps in parallel
2. `npm run build` triggers the build scripts for both apps synchronously 
3. `npm run build` also triggers A deploy script which does the following:
    1. It creates a `dist` folder
    2. It moves the built API lambda functions into `./dist/built-lambdas`
    3. It moves the built Nuxt Dashboard SPA into `./dist/public`
    
The `netlify.toml` file has been configured to point Netlify Functions to the `./dist/built-lambdas` folder where the built API is and the Netlify public entry point to the built Nuxt SPA located in `./dist/public` folder.


## Notes

Ideal deployment

1. Test, Lint and Build API
2. Testm, Lint and build


## Environments

- Google Account
- GitHub
- Mongo Cloud
- Netlify
- Netlify functions