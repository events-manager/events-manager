import 'regenerator-runtime/runtime'
import { ApolloServer } from 'apollo-server-lambda'

import serverConfig from './server-config'

export default new ApolloServer(serverConfig)
