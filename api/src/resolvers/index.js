import { merge } from 'lodash'

import events from './events'
import organisations from './organisations'
import people from './people'

import Date from './scalars/Date'

export default merge(events, organisations, people, { Date })
