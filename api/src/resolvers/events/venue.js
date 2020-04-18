import venuesCollectiob from '../../data/venues'

export const venue = async (event, {}, context) => venuesCollectiob.find((venue) => venue.id === event.venueId)
