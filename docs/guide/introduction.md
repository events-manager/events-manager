# Introduction

## Repository setup

The repository consists of 3 apps: 

1. **Apollo API** Built with Apollo Server and running as Apollo Server Lambda on Netlify Functions
2. **Dashboard** Built with Nuxt and Buefy. Its running as a SPA (Single Page App)
3. **Docs** Built with Vuepress and running as pre-rendered static app on Netlify

Though this a mono-repo setup, it doesnt use tools like Lerna or yarn workspaces. No dependencies are 
shared between projects, but the package json does provide convinient commands to install and run 
all 3 projects.
    
## Getting Started

Run npm install:

```bash
npm i
```

Start in development mode:

```bash
npm run dev
```

- The dashboard will run on http://localhost:3000.
- It will connect to the API which is running on http://localhost:4000
- The API will automatically connect to a test Mongo database that runs in the Mongo Cloud
- The docs will run on http://localhost:8080

### Setting up your own database
A local database allows you to work offline and experiment with the data without affecting other 
developers. Simply follow the steps in the [mongo documentation]() for your OS.

Add the MONGO_URL to your environment variables. It should have this format:

```
mongodb+srv://{username}:{password}@{server}/{dbname}?retryWrites=true&w=majority
```

> Note that the password should be urlencoded if it has special characters. The server will likely be 
> `localhost:27017`

If that's done, test the connection by running `npm run dev`. Everything should work, but 
of course there will be no data yet. 

Seed your own database 
```
npm run seed
``` 

This will fill the database with data for the most common scenarios. Note that this script will 
also run during CI to provide test scenarios for end to end tests

### Running the serverless setup locally

The system actually runs in 2 modes. The final lambda setup and the local development (default) setup.
Both package.json files (api and dashboard) are set-up with the same conventions to provide a simple startup 
mechanism. 

`npm run dev` will start the default setup. `npm run dev:lambda` will start the lambda based setup. 
In the root of the project these 2 commands are triggered in parallel meaning you just need to run the 
below command to start the lambda setup:

```bash
npm run dev:lambda
```

- The dashboard will run on http://localhost:3000.
- It will automatically connect to the API which is now running in a Netlify Functions 
setup on http://localhost:9000/.netlify/functions/main

## TODOs

- Setup Google Account
- Setup Mongo Cloud
- Include test steps
- Provide test / build / deploy feedback on Github repo
- Ensure PR review environments
