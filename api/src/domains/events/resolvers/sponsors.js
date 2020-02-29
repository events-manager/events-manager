import sponsorsCollection from '../../../data/sponsors'
import organisationsCollection from '../../../data/organisations'

/**
 * A sponsor is the unique combination between an event and an organisation 'sponsoring' the event
 */
export const sponsors = async (event, {}, context) => {
  return sponsorsCollection.filter(sponsor => sponsor.eventId === event.id);
}

/**
 * "The organisation behind the sponsor"
 */
export const organisation = async (sponsor, {}, context) => {
  return organisationsCollection.find(organisation => organisation.id === sponsor.organisationId);
}

