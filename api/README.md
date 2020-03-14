# Serverless Events API

## TODO's

- Make a decision. Lambda based or container based
    - Finding 1. Container based seems easier for development (babel and nodemon)
    - Finding 2. Container based gives more control over deps
    - Finding 3: Container based prevents vendor lock 'more'
    - Finding 4: It does work quite good with Netlify (lambda)
    - Finding 5: 175.000 free requests. We might hit this quite fast
    - Finding 6: Heroku would be nice for containers, but what about the rest of the site 
        does that mean using Netlify for the dashboard and Heroku for the API?
- Implement Github Actions to do the whole CI flow (lint, test, build)
- Connect API to a real database instead of static data
- Implement ACL and Authentication mechanisms
- Document the API and its usage

### Known issues (Netlify deploy)

- Right now bufferutil and utf-8-validate are installed as dev dependencies, because on dev it 
complains about these deps missing. Not sure how to fix it yet.

- A dependency "encoding" has been added to work around a known netlify issue which causes the deploy on Netlify to fail. Please remove when this issue is fixed:
    https://community.netlify.com/t/error-could-not-find-encoding-module-in-file-netlify-function/2259/7
    
