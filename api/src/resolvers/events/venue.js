import collection from '../../data/venues'

export default async (event) => collection.find((venue) => venue.id === event.venueId)
