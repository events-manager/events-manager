import organisationsCollection from '../../data/organisations'

export default async (_, { slug }) => {
  if (slug) {
    return organisationsCollection.filter((organisation) => organisation.slug === slug)
  }

  return organisationsCollection
}
