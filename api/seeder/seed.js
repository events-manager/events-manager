import getConnection from '../src/getConnection'
import seedCollection from './seedCollection'

import Event from '../src/models/event'
import Brand from '../src/models/brand'

import events from './data/events'
import brands from './data/brands'

const seed = async () => {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Seeding not allowed in production environments')
  }

  await getConnection()

  console.log('Started seeding process')

  await Promise.all([
    seedCollection(Event, events),
    seedCollection(Brand, brands)
  ])

  console.log('Seeding process finished!')
  process.exit()
}

seed()
