import { UserInputError } from 'apollo-server'

export default async (_, { id, slug }, context) => {
  if (!id && !slug) {
    throw new UserInputError('slugOrIdRequired')
  }

  if (slug) {
    return context.dataSources.events.getBySlug(slug)
  }

  return context.dataSources.events.getById(id)
}
