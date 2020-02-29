import { merge } from 'lodash'
import { resolvers } from './domains'
import Date from './scalars/Date'

export default merge(resolvers, { Date });
