import organisationsCollection from '../../../data/organisations'

export const organisation = async ({ organisationId }, {}, context) => {
  return organisationsCollection.find(organisation => organisation.id === organisationId)
}

export const organisations = async (_, { slug }, context) => {

  if(slug) {
    return organisationsCollection.filter(organisation => organisation.slug === slug)
  }

  return organisationsCollection
}
