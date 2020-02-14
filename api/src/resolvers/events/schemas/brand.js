import mongoose from 'mongoose'

const { Schema } = mongoose

const brandSchema = new Schema({
  title: String,
  slug: String
})

export default brandSchema
