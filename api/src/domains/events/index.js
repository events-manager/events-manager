import { event, events } from './resolvers/events';
import { brand, brands } from './resolvers/brands';
import { sponsors, organisation } from './resolvers/sponsors';
import { speakers, person } from './resolvers/speakers';
import { venue } from './resolvers/venue';

export const resolvers = {
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
