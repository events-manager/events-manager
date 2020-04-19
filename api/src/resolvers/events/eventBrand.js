import { UserInputError } from 'apollo-server'

export default async ({ brandSlug, brandId }, {}, context) => {
  if (!brandSlug && !brandId) {
    throw new UserInputError('brandSlugOrBrandIdRequired')
  }

  if (brandSlug) {
    return context.dataSources.brands.getBySlug(brandSlug)
  }

  return context.dataSources.brands.getById(brandId)
}
