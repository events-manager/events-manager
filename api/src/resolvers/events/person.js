import peopleCollection from '../../data/people'

/**
 * This resolver represents the Person sub-type of any of the event related types like Attendee, Participant and Speaker
 * It relies on a strong foreign key convention where personId is always the field of the related type's reference to a Person
 */
export default async ({ personId }) => peopleCollection.find((person) => personId === person.id)
