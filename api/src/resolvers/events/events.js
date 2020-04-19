
export default async (parent, params, context) => {
  const brandSlug = (parent && parent.slug) || params.brandSlug

  if (brandSlug) {
    return context.dataSources.events.getAll({ brandSlug })
  }

  return context.dataSources.events.getAll()
}
