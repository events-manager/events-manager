import getConnection from './getConnection'
import resolvers from './resolvers'
import typeDefs from './schema.gql'
import dataSources from './dataSources'

export default {
  resolvers,
  typeDefs,
  dataSources,
  cors: {
    origin: '*',
    credentials: true
  },
  introspection: true,
  playground: {
    settings: {
      'editor.theme': 'light'
    }
  },
  context: async () => {
    const dbConnection = await getConnection()

    return {
      dbConnection
    }
  }

  // context: () => {
  //   // console.log(context)
  //   // Note! This example uses the `req` object to access headers,
  //   // but the arguments received by `context` vary by integration.
  //   // This means they will vary for Express, Koa, Lambda, etc.!
  //   //
  //   // To find out the correct arguments for a specific integration,
  //   // see the `context` option in the API reference for `apollo-server`:
  //   // https://www.apollographql.com/docs/apollo-server/api/apollo-server/
  //
  //   // Get the user token from the headers.
  //   // const token = req.headers.authorization || ''
  //
  //   // try to retrieve a user with the token
  //   // const user = getUser(token)
  //
  //   const user = { id: 'dummy' }
  //
  //   // add the user to the context
  //   return { user }
  // },
}
