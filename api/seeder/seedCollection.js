export default async (Model, collection) => {
  console.log(`Clearing ${Model.collection.name} collection`)
  await Model.deleteMany({})

  console.log(`Seeding ${Model.collection.name} collection`)
  await Model.insertMany(collection)

  console.log(`Finished seeding ${Model.collection.name} collection`)
}
