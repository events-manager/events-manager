import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Events extends MongoDataSource {
  getById(id) {
    return this.model.findOne({ id })
  }

  getBySlug(slug) {
    return this.model.findOne({ slug })
  }

  getAll(selector) {
    return this.model.find(selector)
  }

  getCurrent() {
    return this.model.find({ isCurrent: true })
  }
}
