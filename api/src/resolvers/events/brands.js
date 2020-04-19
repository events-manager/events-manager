
export default async (_, {}, context) => {

  return context.dataSources.brands.getAll()
}
