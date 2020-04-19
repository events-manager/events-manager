# Introduction

Welcome. This documentation is intended for any developer that will work on this repository. It 
contains a lot of useful information about how it is set-up and what motivations are to do it in 
that way. The best thing for any new developer is to read these docs. They contain a lot of standards 
and approaches that we've improved over time.

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

- The dashboard will run on [http://localhost:3000](http://localhost:3000).
- It will connect to the API which is running on [http://localhost:4000](http://localhost:4000)
- The API will automatically connect to a test Mongo database that runs in the Mongo Cloud
- The docs will run on [http://localhost:8080](http://localhost:8080)

### Setting up your own database
A local database allows you to work offline and experiment with the data without affecting other 
developers. Simply follow the steps in the 
[mongo documentation](https://docs.mongodb.com/manual/installation/) for your OS.

Add the MONGO_URL to your environment variables. It should have this format:

```bash
mongodb+srv://{username}:{password}@{server}/{dbname}?retryWrites=true&w=majority
```

> Note that the password should be urlencoded if it has special characters. The server will likely be 
> `localhost:27017`

If that's done, test the connection by running `npm run dev`. Everything should work, but 
of course there will be no data yet. 

Seed your own database 
```bash
npm run seed
``` 

This will fill the database with data for the most common scenarios. Note that this script will 
also run during CI to provide test scenarios for end to end tests

### Serverless vs Traditional setup

This repo actually allows both the API and dashboard to run in both setups - Serverless lambda's 
and a traditional server setup (traditional means it could just run with Docker or in any server). 
The application is built like this to allow easy development locally without having to rely on any cloud specific 
implementations. The lambda setup is just a tiny layer over the traditional one to build it into a function. 

Another major reason is that it will force us to be cloud agnostic, meaning we can always decide to 
switch cloud provider in case we need to.

Right now, we use the lambda based setup on our final deployment on Netlify. The API will run as 
a Netlify Function and the dashboard will run in Nuxt SPA mode.

To start the lambda based setup:

```bash
npm run dev:lambda
```

- The dashboard will run on [http://localhost:3000](http://localhost:3000).
- It will automatically connect to the API which is now running in a Netlify Functions 
setup on [http://localhost:9000/.netlify/functions/main](http://localhost:9000/.netlify/functions/main)

## TODOs

- Setup Google Account
- Setup Mongo Cloud
- Include test steps
- Provide test / build / deploy feedback on Github repo
- Ensure PR review environments
