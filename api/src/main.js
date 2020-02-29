import { ApolloServer } from 'apollo-server'

import resolvers from './resolvers'
import typeDefs from './schema.gql'

const server = new ApolloServer({
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


server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
