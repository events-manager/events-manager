import { ApolloServer } from 'apollo-server'

import serverConfig from './server-config'

const server = new ApolloServer(serverConfig)

// TODO Implement logger
server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`)
})
