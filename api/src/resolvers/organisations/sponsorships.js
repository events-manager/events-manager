import sponsorsCollection from '../../data/sponsors'

export default async (organisation) => sponsorsCollection.filter((sponsor) => sponsor.organisationId === organisation.id)
