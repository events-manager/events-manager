import 'regenerator-runtime/runtime'
import { ApolloServer } from 'apollo-server-lambda'

import serverConfig from '../server-config'

const server = new ApolloServer(serverConfig)

exports.handler = server.createHandler()
