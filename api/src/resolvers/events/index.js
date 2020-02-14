import { UserInputError } from 'apollo-server'

import { event, events } from './events';

export default {
  Query: {
    event,
    events,
  }
}
