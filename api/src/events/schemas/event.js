import mongoose from 'mongoose'

const { Schema } = mongoose

const eventSchema = new Schema({
  brandSlug: String, // slug of the brand could be mapped via loadbalancer / nginx whatever to a domain name
  title: String,
  slug: String, // Unique slug for this event. Not sure if needed
  // A flag that indicates that this is the event that should be shown on a brand specific site like frontenddeveloperlove.com
  isCurrent: Boolean
})

export default eventSchema
