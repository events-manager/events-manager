import organisationsCollection from '../../data/organisations'

export default async ({ organisationId }) => organisationsCollection.find((organisation) => organisation.id === organisationId)
