import "regenerator-runtime/runtime"
import { ApolloServer } from 'apollo-server-lambda'

import resolvers from './resolvers'
import typeDefs from './schema.gql'

export default new ApolloServer({
  resolvers,
  typeDefs,
  // mocks: {
  //   Date: () => new Date('2020-02-19T08:00:00.000Z')
  // },
  introspection: true,
  playground: {
    settings: {
      'editor.theme': 'light'
    }
  }
})
