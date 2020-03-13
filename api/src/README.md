# Serverless Events API

## TODO's

- Connect API to a real database instead of static data
- Implement ACL and Authentication mechanisms
- Document the API and its usage

### Known issues

- Right now bufferutil and utf-8-validate are installed as dev dependencies, because on dev it 
complains about these deps missing. Not sure how to fix it yet.

- A dependency "encoding" has been added to work around a known netlify issue which causes the deploy on Netlify to fail. Please remove when this issue is fixed:
    https://community.netlify.com/t/error-could-not-find-encoding-module-in-file-netlify-function/2259/7
    
