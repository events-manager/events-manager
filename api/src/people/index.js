import { UserInputError } from 'apollo-server'

export default {
  Query: {
    people: (_, params, context) => {
      return []
    },
    person: async (_, params, context) => {
      // if (!id && !slug) {
      //   throw new UserInputError(`slugOrIdRequired`)
      // }
      //
      return {}
    }
  }
}
