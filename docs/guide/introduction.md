# Introduction

## Repository setup

The repository consists of 3 apps: 

1. **Apollo API** Built with Apollo Server and running as Apollo Server Lambda on Netlify Functions
2. **Dashboard** Built with Nuxt and Buefy. Its running as a SPA (Single Page App)
3. **Docs** Built with Vuepress and running as pre-rendered static app on Netlify

Though this a mono-repo setup, it doesnt use tools like Lerna or yarn workspaces. No dependencies are 
shared between projects, but the package json does provide convinient commands to install and run 
all 3 projects.

1. `npm install` triggers the install for all apps in parallel
2. `npm run build` triggers the build scripts for all apps synchronously 
3. `npm run dev` will start all 3 apps.
    - API will run on http://localhost:4000
    - Dashboard will run on http://localhost:3000
    - Docs will run on http://localhost:8080

## TODOs

- Setup Google Account
- Setup Mongo Cloud
- Include test steps
- Provide test / build / deploy feedback on Github repo
- Ensure PR review environments
