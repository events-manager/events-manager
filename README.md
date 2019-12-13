# Events Dashboard

A dashboard to manage events like conferences and meetups.

## GraphQL Editor

The API of this dashboard uses graphql. To manage the schema we use GraphQL Editor:

https://app.graphqleditor.com/conferences/conf

## Getting Started

Install deps (installs for both api and dashboard folder)

```bash
npm i
```

Start both the dashboard and the API

```bash
npm run dev
```

**You can start the API or dashboard individually in dev modus**

*api*
```bash
npm run dev:api
```

*dashboard*
```bash
npm run dev:dashboard
```

## TODO

- Create Vision - What do we want and why do we want it
- Determine collaboration tool
- Figure out ideal workflow (CI/CD, Repos, collaboration, documentation, etc)
- Figure out business model?
- Figure out whether to start with Event Sourcing already
- Figure out the database (depends on ES approach decision)
- Extend and test the domain model
- Determine the host (have preference)
    - Netlify + Static Nuxt for dashboard. Heroku for API
- Switch from Webpack to Nodepack (zero config webpack for node)
    - Debatable
- Consider buying the Piaff Theme to save time (Bootstrap Vue based)
