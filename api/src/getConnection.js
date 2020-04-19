import mongoose from 'mongoose'

mongoose.Promise = global.Promise

// TODO TMP Hardcoded connection.. db will change anyway
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://cloudspider:Oxt8G0EYtZp1CLQ1@gather-ww7jx.mongodb.net/gather?retryWrites=true&w=majority'

let connection = null

export default () => {
  if (connection) {
    return connection
  }

  connection = mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    autoIndex: true,
    poolSize: 50,
    bufferMaxEntries: 0,
    keepAlive: 120,
    useNewUrlParser: true
  })

  mongoose.set('useCreateIndex', true)

  connection.then((db) => db).catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err)
  })

  return connection
}
