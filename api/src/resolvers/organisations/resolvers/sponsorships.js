import sponsorsCollection from '../../../data/sponsors'
import eventsCollection from '../../../data/events'

export const sponsorships = async (organisation, {}, context) => sponsorsCollection.filter((sponsor) => sponsor.organisationId === organisation.id)

export const event = async (sponsorship, {}, context) => eventsCollection.find((event) => event.id === sponsorship.eventId)
