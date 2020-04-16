import { UserInputError } from 'apollo-server'
import eventsCollection from '../../data/events'

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

export const events = async (_, { brandSlug }, context) => {

  if (brandSlug) {
    return eventsCollection.filter((event) => event.brandSlug === brandSlug)
  }

  return eventsCollection
}

export const event = async (_, { id, slug, brandSlug }, context) => {
  if (!id && !brandSlug && !slug) {
    throw new UserInputError('slugOrIdRequired')
  }

  if (slug) {
    return eventsCollection.find((event) => event.slug === slug)
  }

  if (brandSlug) {
    return eventsCollection.find((event) => event.brandSlug === brandSlug)
    // Return the current event
  }

  return eventsCollection.find((event) => event.id === id)
}



