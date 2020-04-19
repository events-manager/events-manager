import mongoose, { Schema } from 'mongoose'

// TODO We might have labels on other entities as-well like on Events and People
// In that case, move the Label Schema and put it as a separate Model
const Label = new Schema({
  name: String
}, { _id: false })

const brandSchema = new Schema({
  id: String,
  slug: String,
  name: String,
  logo: String,
  labels: [Label],
  createdAt: Date,
  updatedAt: Date
})

export default mongoose.model('brand', brandSchema)
