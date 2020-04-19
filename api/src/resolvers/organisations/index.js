import sponsorships from './sponsorships'
import event from './event'
import organisation from './organisation'
import organisations from './organisations'


export default {
  Query: {
    organisation,
    organisations
  },
  Organisation: {
    sponsorships
  },
  Sponsor: {
    event
  }
}
