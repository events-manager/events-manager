import { merge } from 'lodash'

import { resolvers as eventResolvers } from './events'
import { resolvers as organisationResolvers } from './organisations'
import { resolvers as peopleResolvers } from './people'

export const resolvers = merge(eventResolvers, organisationResolvers, peopleResolvers)
