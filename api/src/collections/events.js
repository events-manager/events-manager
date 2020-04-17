import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Events extends MongoDataSource {
  getBySlug(slug) {
    return this.model.findOne({ slug })
  }
}
