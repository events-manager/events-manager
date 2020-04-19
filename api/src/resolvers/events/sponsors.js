import sponsorsCollection from '../../data/sponsors'

/**
 * A sponsor is the unique combination between an event and an organisation 'sponsoring' the event
 */
export default async (event) => sponsorsCollection.filter((sponsor) => sponsor.eventId === event.id)
