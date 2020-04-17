import { merge } from 'lodash'

import eventResolvers from './events'
import { resolvers as organisationResolvers } from './organisations'
import { resolvers as peopleResolvers } from './people'

import Date from './scalars/Date'

export default merge(eventResolvers, organisationResolvers, peopleResolvers, { Date })
