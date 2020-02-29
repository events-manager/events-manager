import sponsorsCollection from '../../../data/sponsors'
import eventsCollection from '../../../data/events'

export const sponsorships = async (organisation, {}, context) => {
  return sponsorsCollection.filter(sponsor => sponsor.organisationId === organisation.id);
}

export const event = async (sponsorship, {}, context) => {
  return eventsCollection.find(event => event.id === sponsorship.eventId);
}
