import mongoose, { Schema } from 'mongoose'

const eventSchema = new Schema({
  id: String,
  slug: String,
  name: String,
  brandSlug: String,
  venueId: String,
  startsAt: Date,
  endsAt: Date
})

export default mongoose.model('event', eventSchema)
