import { UserInputError } from 'apollo-server-lambda'
import brandsCollection from '../../../data/brands';

export const brands = async (_, {}, context) => {

  return brandsCollection;
}

export const brand = async (_, { id, slug }, context) => {
  if (!id && !slug) {
    throw new UserInputError('slugOrIdRequired')
  }

  if (slug) {
    return brandsCollection.find(brand => brand.slug === slug);
    // Return the current event
  }

  return brandsCollection.find(brand => brand.id === id);
}



