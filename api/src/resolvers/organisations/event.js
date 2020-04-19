import eventsCollection from '../../data/events'

/**
 * This resolver represents the Event sub-type of any of the event related types like Sponsor
 * It relies on a strong foreign key convention where eventId is always the field of the related type's reference to an Event
 */
export default async ({ eventId }) => eventsCollection.find((event) => event.id === eventId)
