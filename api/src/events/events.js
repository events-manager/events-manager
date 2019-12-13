import { UserInputError } from 'apollo-server'

/**
 * Below is an example mapping of the main frontendlove domain
 * This is the main host for the different events.
 *
 * https://frontendlove.com/frontend-love => https://frontendeveloperlove.com
 * https://frontendlove.com/vuejs-amsterdam => https://vuejs.amsterdam
 * https://frontendlove.com/react-live => https://reactlive.com
 *
 * To make this setup or variants of it possible, we need to make an indicator on the dashboard
 * This indicator determines what event should be shown when the brand is loaded via its mapped slug.
 *
 * For example when a user visits https://vuejs.amsterdam, it leads to https://frontendlove.com/vuejs-amsterdam
 * It will then use the slug "vuejs-amsterdam" + "isCurrent === true" to select
 */

// const dummyEvent = {
//   id: 'dummy-id',
//   brandSlug: 'frontend-love', // slug of the brand could be mapped via loadbalancer / nginx whatever to a domain name
//   slug: 'frontend-love-2020', // Unique slug for this event. Not sure if needed
//   isCurrent: true // A flag that indicates that this is the event that should be shown on for example frontenddeveloperlove.com
// }

export default {
  Query: {
    events: (_, params, context) => {
      return []
    },
    event: async (_, { id, brandSlug }, context) => {
      if(brandSlug) {
        // Fetch event by brandSlug === '' + isCurrent === true
      }

      if (!id && !slug) {
        throw new UserInputError(`slugOrIdRequired`)
      }

      return {}
    }
  }
}
