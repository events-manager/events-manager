import { sponsorships, event } from './resolvers/sponsorships'
import { organisation, organisations } from './resolvers/organisations'


export const resolvers = {
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
