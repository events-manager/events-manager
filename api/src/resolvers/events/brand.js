import { UserInputError } from 'apollo-server'

export default async (_, { id, slug }, context) => {
  if (!id && !slug) {
    throw new UserInputError('slugOrIdRequired')
  }

  if (slug) {
    return context.dataSources.brands.getBySlug(slug)
  }

  return context.dataSources.brands.getById(id)
}
