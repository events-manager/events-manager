import { UserInputError } from 'apollo-server'
import brandsCollection from '../../data/brands'

export const brands = async (_, {}, context) => brandsCollection

export const brand = async (_, { id, slug }, context) => {
  if (!id && !slug) {
    throw new UserInputError('slugOrIdRequired')
  }

  if (slug) {
    return brandsCollection.find((brand) => brand.slug === slug)
    // Return the current event
  }

  return brandsCollection.find((brand) => brand.id === id)
}
