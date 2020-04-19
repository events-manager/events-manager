import event from './event'
import events from './events'
import brand from './brand'
import brands from './brands'
import eventBrand from './eventBrand'
import sponsors from './sponsors'
import organisation from './organisation'
import speakers from './speakers'
import person from './person'
import venue from './venue'

export default {
  Query: {
    event,
    events,
    brand,
    brands
  },
  Event: {
    brand: eventBrand,
    sponsors,
    speakers,
    venue
  },
  Brand: {
    events
  },
  Sponsor: {
    organisation
  },
  Speaker: {
    person
  }
}
