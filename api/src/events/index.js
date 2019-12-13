import { UserInputError } from 'apollo-server'

export default {
  Query: {
    events: (_, params, context) => {
      return []
    },
    event: async (_, params, context) => {
      // if (!id && !slug) {
      //   throw new UserInputError(`slugOrIdRequired`)
      // }
      //
      return {}
    }
  }
}
