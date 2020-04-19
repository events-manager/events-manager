import mongoose, { Schema } from 'mongoose'

const eventSchema = new Schema({
  id: String,
  slug: String,
  name: String,
  brandSlug: String,
  venueId: String,
  isCurrent: Boolean,
  startsAt: Date,
  endsAt: Date
}, { collection: 'events' })

export default mongoose.model('event', eventSchema)
