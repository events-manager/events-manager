import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Events extends MongoDataSource {
  getById(id) {
    if (!id) {
      throw new Error('Missing parameter: "id" is required')
    }
    return this.model.findOne({ id })
  }

  getBySlug(slug) {
    if (!slug) {
      throw new Error('Missing parameter: "slug" is required')
    }
    return this.model.findOne({ slug })
  }

  getAll(selector) {
    return this.model.find(selector)
  }

  getCurrent() {
    return this.model.find({ isCurrent: true })
  }
}
