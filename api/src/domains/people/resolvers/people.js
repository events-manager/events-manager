import peopleCollection from '../../../data/people'

export const people = async (_, {}, context) => {
  return peopleCollection
}
