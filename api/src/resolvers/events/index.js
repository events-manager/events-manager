import { event, events } from './events'
import { brand, brands } from './brands'
import { sponsors, organisation } from './sponsors'
import { speakers, person } from './speakers'
import { venue } from './venue'

export default {
  Query: {
    brand,
    brands,
    event,
    events
  },
  Event: {
    sponsors,
    speakers,
    venue
  },
  Sponsor: {
    organisation
  },
  Speaker: {
    person
  }
}
