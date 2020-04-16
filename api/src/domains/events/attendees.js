import { UserInputError } from 'apollo-server'

/**
 * An attendee is a person with a ticket that visits an event
 * Attendees don't have a specific role
 */
export default {
  Query: {
    attendees: (_, { eventId }, context) => [],
    attendee: async (_, { id, eventId, personId }, context) => {
      const canFetchByComposite = eventId && personId
      if (!canFetchByComposite && !id) {
        throw new UserInputError('idOrCompositeRequired', 'Either the id field or a combination of eventId + personId are required')
      }

      return {}
    }
  }
}
