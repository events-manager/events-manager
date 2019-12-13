import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export default {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Represents a Date object as ISOString',
    parseValue(value) {
      return new Date(value) // value from the client
    },
    serialize(value) {
      return value.toISOString() // value sent to the client
    },
    parseLiteral(cast) {
      if (cast.kind === Kind.STRING) {
        return new Date(cast.value) // ast value is always in string format
      }
      return null
    }
  })
}
