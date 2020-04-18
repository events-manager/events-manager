import { UserInputError } from 'apollo-server'

export const events = async (_, { brandSlug }, context) => {
  if (brandSlug) {
    return context.dataSources.events.getAll({ brandSlug })
  }

  return context.dataSources.events.getCurrent()
}

export const event = async (_, { id, slug, brandSlug }, context) => {
  if (!id && !brandSlug && !slug) {
    throw new UserInputError('slugOrIdRequired')
  }

  if (slug) {
    return context.dataSources.events.getBySlug(slug)
  }

  return context.dataSources.events.getById(id)
}
