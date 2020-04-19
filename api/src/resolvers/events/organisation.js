import organisationsCollection from '../../data/organisations'

/**
 * "The organisation behind the sponsor"
 */
export default async (sponsor) => organisationsCollection.find((organisation) => organisation.id === sponsor.organisationId)
