import { UserInputError } from '../../../helpers/errorHandlers'

/**
 * A participant is a person that has a specific role at an event.
 * Examples are: The Emcee, a camera man and organisers
 */
export default {
  Query: {
    participants: (_, { eventId }, context) => [],
    participant: async (_, { eventId }, context) =>
      // if (!id && !slug) {
      //   throw new UserInputError(`slugOrIdRequired`)
      // }
      //
      ({})
  }
}
