import Events from './collections/events'
import Brands from './collections/brands'
import EventModel from './models/event'
import BrandModel from './models/brand'

export default () => ({
  events: new Events(EventModel),
  brands: new Brands(BrandModel)
  // OR
  // users: new Users(UserModel)
})
