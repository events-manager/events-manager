import speakersCollection from '../../data/speakers'

/**
 * One person could be speaker for 0 or multiple events. Each event could have zero or multiple speakers.
 * Speakers could be associated with 0 or more talks
 * Zero talks is only possible if the speaker did for example not yet provide a 'talk topic'.
 */
export default async (event) => speakersCollection.filter((speaker) => speaker.eventId === event.id)
