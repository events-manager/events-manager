# Continuous Integration

All 3 apps (dashboard, api and docs) are hosted on Netlify. The source code is located in Github on our 
organisation account: [events-manager](https://github.com/events-manager/events-manager). Note that this 
is a private account and you will need an invite to see it.

## Github

All 3 applications are located in the mono-repo `events-manager/events-manager`. Though they can be started 
with just 1 command they do not share any dependencies. 

## Netlify

The docs, api and dashboard are all 3 deployed to Netlify under one account, but 3 independent apps.

- The Docs are built with Vuepress and run as pre-generated static app. 
- The dashboard (built with Nuxt) runs as SPA. No functions included.
- The API is built with Apollo Server and runs in Netlify Functions

The API works with Apollo Server. Specifically Apollo Server Lambda in combination with Netlify Lambda. 
This means that when deployed it runs on Netlify Functions. Locally however it can just run as Apollo Server 
avoiding the need for a developer to learn about serverless setups.


